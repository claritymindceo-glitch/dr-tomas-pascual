import type { VercelRequest, VercelResponse } from "@vercel/node";
import { completeWithAnthropicOrGemini } from "../_lib/ai.js";

export const config = {
  runtime: "nodejs",
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { messages } = req.body ?? {};

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({
        error: "El campo 'messages' es obligatorio y debe ser un arreglo.",
      });
    }

    const data = await completeWithAnthropicOrGemini(req.body);
    return res.status(200).json(data);
  } catch (error: unknown) {
    const details = error instanceof Error ? error.message : "Unknown error";
    console.error("Error in /v1/messages endpoint:", error);
    return res.status(500).json({
      error: "Ocurrió un error en el canal seguro de comunicación con el asistente digital.",
      details,
    });
  }
}
