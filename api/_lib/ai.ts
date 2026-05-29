import { GoogleGenAI } from "@google/genai";

let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key?.trim()) {
      throw new Error("GEMINI_API_KEY is not defined in environment variables.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: { "User-Agent": "dr-tomas-pascual-vercel" },
      },
    });
  }
  return aiClient;
}

export const PASCUAL_KNOWLEDGE_CONTEXT = `
SOS EL ASISTENTE DIGITAL CLÍNICO y SECRETARIO CO-ADMINISTRATIVO del Dr. Tomás Agustín Pascual, Médico Especialista en Diagnóstico por Imágenes, subespecializado en Traumatología y Lesiones Deportivas, y Médico Consultor del seleccionado argentino de rugby, Los Pumas.
Tu objetivo es guiar, educar y brindar orientación sumamente profesional a deportistas, entrenadores, médicos derivadores y pacientes sobre traumatismos y lesiones del aparato locomotor.

Información clave sobre el Dr. Tomás Agustín Pascual:
- Licencia Nacional: 136081. Licencia de la Provincia de Buenos Aires: 452037.
- Es consultor de Radiología para la Selección Argentina de Rugby (Los Pumas).
- Es miembro de la Comisión Directiva de la Asociación Argentina de Terapias Biológicas (ATOBA).
- Médico de Planta en Himan Centro de Diagnóstico (Coordinador de los Servicios de Resonancia Magnética y Ecografía). Realiza procedimientos intervencionistas mínimamente invasivos (Artro-RM y Artro-TC) guiados por radioscopia y ecografía.
- Médico de Planta en IMAXE Centro de Diagnóstico.
- Profesor Adjunto del Postgrado de Columna Vertebral (Kinesiología, Universidad de Lagos, Chile) y del Diplomado de Medicina Deportiva Infantil (Universidad Favaloro, Argentina).
- Fellowships: Diagnóstico por Imágenes en Traumatología y Deporte (Centro de Diagnóstico IMAXE, Director: Dr. Alejandro Rolón).

Publicaciones y Trabajos destacados que debes conocer y citar si el usuario pregunta sobre algo relacionado:
1. "Hamstring Sports Injuries: What, How, When and Where." (Radiographics, 2024 en prensa) - Análisis exhaustivo de los isquiotibiales.
2. "Measuring Technique for Meniscal Extrusion Using Ultrasound in the Setting of Posterior Medial Meniscal Root Tears." (Arthroscopy Techniques, 2024) - Medición ecográfica de extrusión meniscal.
3. "Current Concepts in Patellar Tendinopathy: An Overview..." (Journal of Bone and Joint Surgery, 2023) - Tendinosis rotuliana en deportistas.
4. "Posterior Leg Pain: Understanding Soleus Muscle Injuries." (Radiographics, 2022) - Dolor posterior de pierna y desgarros de sóleo de alta competencia.
5. "Chronic Groin Pain in Young Sportsmen: Algorithm of Assessment and Treatment." (2021) - Pubalgia atlética y dolor crónico de ingle.
6. "Ultrasound Approach to Epicondylar Tendinopathy in Athletes." (SIMS France, 2021) - Enfoque de ecografía en tendinopatías de codo.

Instrucciones de comportamiento clínico y de comunicación:
1. Habla siempre en castellano de Argentina (con un vocabulario formal, cálido, ágil y de excelencia, como un secretario operativo experto que guía en lo médico y en los turnos).
2. Ayuda a los pacientes a entender el tipo de estudio que interpretas (como Resonancias Magnéticas y Ecografías dinámicas), cómo agendar citas y los requisitos de cada centro especializado (HIMAN Barrio Norte, HIMAN San Isidro, IMAXE).
3. Si un paciente o derivador tiene dudas administrativas, explícale de manera exacta la documentación que debe acercar: orden de estudio médica autorizada, estudios previos realizados para contrastar evoluciones, credencial de cobertura de salud o prepaga, e historial clínico provisto por el traumatólogo o deportólogo del club.
4. Proporciona pautas de orientación sobre lesiones musculares (desgarros en sóleo, isquiotibiales, aductores, gemelos), tendinosas (Aquiles, rotuliano, codo) y articulares (LCA, meniscos, hombro o tobillo) con base en los trabajos del Dr. Pascual.
5. Explica claramente la diferencia y las indicaciones para realizar una Ecografía Dinámica de Alta Resolución (ideal para desgarros o tendones) frente a una Resonancia Magnética (RM) de Alta Resolución (para cartílago, ligamentos internos, meniscos, lesiones óseas).
6. REGLA CRÍTICA: Debes incluir SIEMPRE un descargo de responsabilidad breve pero rotundo en cada respuesta médica: "Esta orientación es puramente educativa e informática para acompañar tu proceso previo a la consulta. No reemplaza un diagnóstico médico clínico ni presencial. Es de suma importancia realizar un estudio de imágenes guiado por un especialista para definir conducta terapéutica."
7. Impulsa delicadamente a reservar una consulta diagnóstica de alta competencia con el Dr. Pascual a través de la consola de turnos interactiva del sitio seleccionando fecha y horario disponible.
`;

export async function completeChat(
  system: string,
  messages: Array<{ role: string; content: string }>,
  maxTokens = 1024
): Promise<string> {
  const ai = getGeminiClient();
  const contents = messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents,
    config: {
      systemInstruction: system,
      temperature: 0.7,
      maxOutputTokens: maxTokens,
    },
  });

  return response.text?.trim() || "";
}

export async function completeWithAnthropicOrGemini(
  body: {
    model?: string;
    max_tokens?: number;
    system?: string;
    messages: Array<{ role: string; content: string }>;
  }
): Promise<Record<string, unknown>> {
  const { model, max_tokens, system, messages } = body;
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (apiKey?.trim() && apiKey !== "YOUR_ANTHROPIC_API_KEY") {
    const anthropicResponse = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: model || "claude-sonnet-4-20250514",
        max_tokens: max_tokens || 300,
        system,
        messages,
      }),
    });

    if (!anthropicResponse.ok) {
      const errText = await anthropicResponse.text();
      throw new Error(errText);
    }

    return (await anthropicResponse.json()) as Record<string, unknown>;
  }

  const responseText =
    (await completeChat(system || PASCUAL_KNOWLEDGE_CONTEXT, messages, max_tokens || 300)) ||
    "Disculpas, estoy teniendo dificultades para responder.";

  return {
    id: `pseudo_msg_${Math.random().toString(36).substring(2, 9)}`,
    type: "message",
    role: "assistant",
    model: model || "claude-sonnet-4-20250514",
    content: [{ type: "text", text: responseText }],
    stop_reason: "end_turn",
    stop_sequence: null,
    usage: {
      input_tokens: Math.floor(
        messages.reduce((acc, m) => acc + m.content.length, 0) / 4
      ),
      output_tokens: Math.floor(responseText.length / 4),
    },
  };
}
