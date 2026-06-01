import type { VercelRequest, VercelResponse } from "@vercel/node";
import { completeChat, PASCUAL_KNOWLEDGE_CONTEXT } from "./_lib/ai.js";

export const config = {
  runtime: "nodejs",
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message, history, locale } = req.body ?? {};

    const localeInstruction: Record<string, string> = {
      "es-AR": "Responde siempre en español argentino.",
      en: "Always respond in English.",
      pt: "Responda sempre em português brasileiro.",
    };
    const langRule =
      localeInstruction[String(locale)] ?? localeInstruction["es-AR"];

    if (!message) {
      return res.status(400).json({ error: "El mensaje es obligatorio." });
    }

    const messages: Array<{ role: string; content: string }> = [];
    if (history && Array.isArray(history)) {
      history.forEach((h: { role: string; content: string }) => {
        messages.push({ role: h.role, content: h.content });
      });
    }
    messages.push({ role: "user", content: message });

    const text = await completeChat(
      `${PASCUAL_KNOWLEDGE_CONTEXT}\n\nIDIOMA: ${langRule}`,
      messages,
      1024
    );
    return res.status(200).json({ text });
  } catch (error: unknown) {
    const details = error instanceof Error ? error.message : "Unknown error";
    console.error("Error calling Gemini API:", error);
    return res.status(500).json({
      error: "Ocurrió un error al procesar el diagnóstico inteligente.",
      details,
    });
  }
}
