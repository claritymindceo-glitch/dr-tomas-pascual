import type { VercelRequest, VercelResponse } from "@vercel/node";
import { completeChat, OPENAI_MODEL, PASCUAL_KNOWLEDGE_CONTEXT } from "../_lib/ai.js";

export const config = {
  runtime: "nodejs",
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { max_tokens, system, messages } = req.body ?? {};

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({
        error: "El campo 'messages' es obligatorio y debe ser un arreglo.",
      });
    }

    const responseText =
      (await completeChat(system || PASCUAL_KNOWLEDGE_CONTEXT, messages, max_tokens || 300)) ||
      "Disculpas, estoy teniendo dificultades para responder.";

    return res.status(200).json({
      id: `msg_${Math.random().toString(36).substring(2, 9)}`,
      type: "message",
      role: "assistant",
      model: OPENAI_MODEL,
      content: [{ type: "text", text: responseText }],
      stop_reason: "end_turn",
      stop_sequence: null,
      usage: {
        input_tokens: Math.floor(
          messages.reduce((acc: number, m: { content: string }) => acc + m.content.length, 0) / 4
        ),
        output_tokens: Math.floor(responseText.length / 4),
      },
    });
  } catch (error: unknown) {
    const details = error instanceof Error ? error.message : "Unknown error";
    console.error("Error in /v1/messages endpoint:", error);
    return res.status(500).json({
      error: "Ocurrió un error en el canal seguro de comunicación con el asistente digital.",
      details,
    });
  }
}
