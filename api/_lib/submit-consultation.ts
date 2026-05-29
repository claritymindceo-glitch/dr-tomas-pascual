import admin from "firebase-admin";
import {
  buildSubmissionFingerprint,
  type ContactFormPayload,
} from "./contact-email.js";

const DEFAULT_PROJECT_ID = "dr-tomas-pascual";
const CONSULTAS_COLLECTION = "consultas";
const DEDUP_WINDOW_MS = 30 * 60 * 1000;

let firestoreReady = false;

function initializeFirebaseAdmin(): void {
  if (firestoreReady) return;

  const projectId = process.env.FIREBASE_PROJECT_ID || DEFAULT_PROJECT_ID;
  const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT?.trim();

  if (serviceAccountJson) {
    const serviceAccount = JSON.parse(serviceAccountJson) as admin.ServiceAccount;
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      projectId,
    });
  } else if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
      projectId,
    });
  } else {
    throw new Error(
      "Firestore no configurado: definí FIREBASE_SERVICE_ACCOUNT o GOOGLE_APPLICATION_CREDENTIALS."
    );
  }

  firestoreReady = true;
}

export function getFirestore(): FirebaseFirestore.Firestore {
  initializeFirebaseAdmin();
  return admin.firestore();
}

function resolveConsultationId(payload: ContactFormPayload): string {
  return payload.submissionId || buildSubmissionFingerprint(payload);
}

async function findRecentSentDuplicate(fingerprint: string): Promise<string | null> {
  const db = getFirestore();
  const snap = await db
    .collection(CONSULTAS_COLLECTION)
    .where("fingerprint", "==", fingerprint)
    .limit(20)
    .get();

  const cutoff = Date.now() - DEDUP_WINDOW_MS;

  for (const doc of snap.docs) {
    const data = doc.data();
    if (!data.emailSent) continue;

    const sentAt = data.emailSentAt?.toDate?.() ?? data.createdAt?.toDate?.();
    if (sentAt && sentAt.getTime() >= cutoff) {
      return doc.id;
    }
  }

  return null;
}

export async function archiveConsultation(payload: ContactFormPayload): Promise<{
  consultationId: string;
  alreadyProcessed: boolean;
}> {
  const db = getFirestore();
  const consultationId = resolveConsultationId(payload);
  const docRef = db.collection(CONSULTAS_COLLECTION).doc(consultationId);

  return db.runTransaction(async (tx) => {
    const existing = await tx.get(docRef);

    if (existing.exists) {
      const data = existing.data();
      return {
        consultationId,
        alreadyProcessed: Boolean(data?.emailSent),
      };
    }

    tx.set(docRef, {
      name: payload.name,
      email: payload.email,
      phone: payload.phone || null,
      subject: payload.subject || null,
      message: payload.message,
      submissionId: payload.submissionId || null,
      fingerprint: buildSubmissionFingerprint(payload),
      source: "web-form",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      emailSent: false,
    });

    return { consultationId, alreadyProcessed: false };
  });
}

export async function markConsultationEmailSent(
  consultationId: string,
  error?: string
): Promise<void> {
  const db = getFirestore();
  await db.collection(CONSULTAS_COLLECTION).doc(consultationId).update({
    emailSent: !error,
    emailSentAt: admin.firestore.FieldValue.serverTimestamp(),
    ...(error ? { emailError: error } : {}),
  });
}

export async function submitConsultation(payload: ContactFormPayload): Promise<{
  consultationId: string;
  duplicate?: boolean;
}> {
  const { sendContactEmail } = await import("./contact-email.js");
  const fingerprint = buildSubmissionFingerprint(payload);

  const recentDuplicateId = await findRecentSentDuplicate(fingerprint);
  if (recentDuplicateId) {
    return { consultationId: recentDuplicateId, duplicate: true };
  }

  const { consultationId, alreadyProcessed } = await archiveConsultation(payload);

  if (alreadyProcessed) {
    return { consultationId, duplicate: true };
  }

  try {
    await sendContactEmail(payload);
    await markConsultationEmailSent(consultationId);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown email error";
    await markConsultationEmailSent(consultationId, message);
    throw error;
  }

  return { consultationId };
}
