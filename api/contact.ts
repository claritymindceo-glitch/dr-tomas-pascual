import type { VercelRequest, VercelResponse } from "@vercel/node";
import { validateContactPayload } from "./_lib/contact-email.js";
import { submitConsultation } from "./_lib/submit-consultation.js";

export const config = {
  runtime: "nodejs",
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const payload = validateContactPayload(req.body);
    const { consultationId } = await submitConsultation(payload);
    return res.status(200).json({
      ok: true,
      message: "Consulta enviada correctamente.",
      consultationId,
    });
  } catch (error: unknown) {
    const details = error instanceof Error ? error.message : "Unknown error";
    console.error("Error submitting consultation:", error);
    const status =
      details.includes("obligatorio") ||
      details.includes("válido") ||
      details.includes("inválid")
        ? 400
        : 500;
    return res.status(status).json({
      error:
        status === 400
          ? details
          : "No se pudo enviar la consulta. Intentá nuevamente en unos minutos.",
      details: status === 500 ? details : undefined,
    });
  }
}
