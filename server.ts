import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import {
  completeChat,
  OPENAI_MODEL,
  PASCUAL_KNOWLEDGE_CONTEXT,
} from "./api/_lib/ai.js";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5050;

app.use(express.json());

app.post("/api/consult", async (req, res) => {
  try {
    const { message, history } = req.body;

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

    const text = await completeChat(PASCUAL_KNOWLEDGE_CONTEXT, messages, 1024);
    res.json({ text });
  } catch (error: unknown) {
    const details = error instanceof Error ? error.message : "Unknown error";
    console.error("Error calling OpenAI API:", error);
    res.status(500).json({
      error: "Ocurrió un error al procesar el diagnóstico inteligente.",
      details,
    });
  }
});

app.post("/v1/messages", async (req, res) => {
  try {
    const { max_tokens, system, messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({
        error: "El campo 'messages' es obligatorio y debe ser un arreglo.",
      });
    }

    const responseText =
      (await completeChat(system || PASCUAL_KNOWLEDGE_CONTEXT, messages, max_tokens || 300)) ||
      "Disculpas, estoy teniendo dificultades para responder.";

    res.json({
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
    res.status(500).json({
      error: "Ocurrió un error en el canal seguro de comunicación con el asistente digital.",
      details,
    });
  }
});

// Setup Vite middle-ware or production static serving
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve production static assets
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Dr. Pascual Back-end] Running on http://localhost:${PORT}`);
  });
}

startServer();
