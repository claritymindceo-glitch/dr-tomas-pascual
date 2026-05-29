import { createHash } from "crypto";
import nodemailer from "nodemailer";

export interface ContactFormPayload {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  submissionId?: string;
}

const DEFAULT_SMTP_USER = "claritymind.ceo@gmail.com";
const DEFAULT_CONTACT_TO = "claritymind.ceo@gmail.com";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getSmtpTransporter() {
  const user = process.env.SMTP_USER || DEFAULT_SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!pass) {
    throw new Error("SMTP_PASS no está configurada (contraseña de aplicación de Gmail).");
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass },
  });
}

export async function sendContactEmail(payload: ContactFormPayload): Promise<void> {
  const to = process.env.CONTACT_EMAIL_TO || DEFAULT_CONTACT_TO;
  const from =
    process.env.CONTACT_EMAIL_FROM ||
    `Consultas Dr. Pascual <${process.env.SMTP_USER || DEFAULT_SMTP_USER}>`;

  const subjectLine = payload.subject?.trim()
    ? `Consulta web: ${payload.subject.trim()}`
    : `Consulta web de ${payload.name.trim()}`;

  const html = `
    <h2>Nueva consulta desde el sitio web</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(payload.name.trim())}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email.trim())}</p>
    ${
      payload.phone?.trim()
        ? `<p><strong>Teléfono:</strong> ${escapeHtml(payload.phone.trim())}</p>`
        : ""
    }
    ${
      payload.subject?.trim()
        ? `<p><strong>Asunto:</strong> ${escapeHtml(payload.subject.trim())}</p>`
        : ""
    }
    <p><strong>Mensaje:</strong></p>
    <p>${escapeHtml(payload.message.trim()).replace(/\n/g, "<br />")}</p>
    <hr />
    <p style="color:#666;font-size:12px;">Enviado desde dr-tomas-pascual · ${new Date().toISOString()}</p>
  `;

  const text = [
    "Nueva consulta desde el sitio web",
    "",
    `Nombre: ${payload.name.trim()}`,
    `Email: ${payload.email.trim()}`,
    payload.phone?.trim() ? `Teléfono: ${payload.phone.trim()}` : null,
    payload.subject?.trim() ? `Asunto: ${payload.subject.trim()}` : null,
    "",
    "Mensaje:",
    payload.message.trim(),
  ]
    .filter(Boolean)
    .join("\n");

  const transporter = getSmtpTransporter();

  await transporter.sendMail({
    from,
    to,
    replyTo: payload.email.trim(),
    subject: subjectLine,
    text,
    html,
  });
}

export function validateContactPayload(body: unknown): ContactFormPayload {
  if (!body || typeof body !== "object") {
    throw new Error("Datos de formulario inválidos.");
  }

  const { name, email, phone, subject, message, submissionId } = body as Record<string, unknown>;

  if (typeof name !== "string" || name.trim().length < 2) {
    throw new Error("El nombre es obligatorio (mínimo 2 caracteres).");
  }

  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    throw new Error("Ingresá un email válido.");
  }

  if (typeof message !== "string" || message.trim().length < 10) {
    throw new Error("La consulta debe tener al menos 10 caracteres.");
  }

  let normalizedSubmissionId: string | undefined;
  if (submissionId !== undefined && submissionId !== null && submissionId !== "") {
    if (typeof submissionId !== "string" || !/^[a-zA-Z0-9_-]{8,128}$/.test(submissionId.trim())) {
      throw new Error("Identificador de envío inválido.");
    }
    normalizedSubmissionId = submissionId.trim();
  }

  return {
    name: name.trim(),
    email: email.trim(),
    phone: typeof phone === "string" ? phone.trim() : undefined,
    subject: typeof subject === "string" ? subject.trim() : undefined,
    message: message.trim(),
    submissionId: normalizedSubmissionId,
  };
}

export function buildSubmissionFingerprint(payload: ContactFormPayload): string {
  const raw = [
    payload.email.trim().toLowerCase(),
    payload.name.trim().toLowerCase(),
    (payload.phone || "").trim(),
    (payload.subject || "").trim(),
    payload.message.trim(),
  ].join("|");

  return createHash("sha256").update(raw).digest("hex").slice(0, 32);
}
