import React, { useState, useEffect, useRef } from "react";
import {
  Activity,
  Award,
  BookOpen,
  Brain,
  Calendar,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  Clock,
  ExternalLink,
  FileText,
  GraduationCap,
  Info,
  Layers,
  Mail,
  Menu,
  Phone,
  Send,
  ShieldAlert,
  Sparkles,
  UploadCloud,
  X,
  Sliders,
  Maximize2,
  Lock,
  MessageSquare,
  Instagram,
  Linkedin,
  Facebook,
  FileSpreadsheet,
  FileBadge2,
  Bell,
  CheckCircle2,
  TrendingUp,
  Database,
  Search,
  Download,
  ChevronDown,
  ChevronUp,
  Shield,
  Check
} from "lucide-react";
import {
  CURRENT_POSITIONS,
  PREVIOUS_POSITIONS,
  EDUCATION_MILESTONES,
  RECOGNITIONS_ABROAD,
  ACADEMIC_FELLOWSHIPS,
  RSNA_HONORS,
  ACADEMIC_PAPERS
} from "./data";
import AnimatedCounter from "./components/AnimatedCounter";
import { motion, AnimatePresence } from "motion/react";

// Import modular Horizontal Space layouts
import SpaceInicio from "./components/sections/SpaceInicio";
import SpaceEnfoque from "./components/sections/SpaceEnfoque";
import SpaceTrayectoria from "./components/sections/SpaceTrayectoria";
import SpaceEspecialidades from "./components/sections/SpaceEspecialidades";
import SpaceInvestigaciones from "./components/sections/SpaceInvestigaciones";
import SpaceAsistente from "./components/sections/SpaceAsistente";
import SpaceSedes from "./components/sections/SpaceSedes";
import SpacePortal from "./components/sections/SpacePortal";

export default function App() {
  // Mobile Nav Toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mac-Style horizontal spaces states for horizontal navigation
  const [[spaceIndex, direction], setSpace] = useState([0, 0]);

  const paginate = (newSpace: number) => {
    const current = spaceIndex;
    const dir = newSpace > current ? 1 : -1;
    setSpace([newSpace, dir]);
    
    // Smooth scroll top on change
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Keyboard navigation for Space-to-Space feeling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA" ||
        document.activeElement?.tagName === "SELECT"
      ) {
        return; // Don't interrupt chatting or forms
      }
      if (e.key === "ArrowRight") {
        if (spaceIndex < 7) paginate(spaceIndex + 1);
      } else if (e.key === "ArrowLeft") {
        if (spaceIndex > 0) paginate(spaceIndex - 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [spaceIndex]);

  // Floating Chat states
  const [isFloatingBotOpen, setIsFloatingBotOpen] = useState(false);
  const [floatingMessages, setFloatingMessages] = useState<Array<{ role: "user" | "assistant"; content: string; showChips?: boolean }>>([
    {
      role: "assistant",
      content: "Bienvenido/a. Soy el asistente digital del Dr. Pascual. ¿En qué puedo orientarte hoy?",
      showChips: true
    }
  ]);
  const [floatingInput, setFloatingInput] = useState("");
  const [floatingLoading, setFloatingLoading] = useState(false);
  const [exchangeCount, setExchangeCount] = useState(0);
  const floatingChatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll floating chat to bottom
  useEffect(() => {
    floatingChatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [floatingMessages, floatingLoading]);

  // Handle floating message submit
  const handleFloatingSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const updatedMessages = [...floatingMessages, { role: "user" as const, content: textToSend }];
    setFloatingMessages(updatedMessages);
    setFloatingLoading(true);

    const nextExchangeCount = exchangeCount + 1;
    setExchangeCount(nextExchangeCount);

    try {
      const mapping = updatedMessages.map(m => ({
        role: m.role,
        content: m.content
      }));

      const response = await fetch("/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 300,
          system: "You are the digital assistant of Dr. Tomás Agustín Pascual, a world-class radiologist specializing in musculoskeletal imaging and sports injuries. Respond in Argentine Spanish. You help users understand the doctor's specialties, how to book appointments, what institutions he works at (HIMAN Barrio Norte, HIMAN San Isidro, IMAXE), and his academic profile. Keep responses under 3 sentences. Never use bullet points — only flowing conversational text. IMPORTANT: If this is the second exchange, offer direct contact details of the clinic.",
          messages: mapping
        })
      });

      if (!response.ok) {
        throw new Error("API call error");
      }

      const data = await response.json();
      let responseText = data.content?.[0]?.text || data.text || "Disculpas, ocurrió un inconveniente temporal.";

      if (nextExchangeCount === 2 && !responseText.toLowerCase().includes("consultorio") && !responseText.toLowerCase().includes("contacto")) {
        responseText += "\n\n¿Querés que te deje el contacto directo del consultorio?";
      }

      setFloatingMessages((prev) => [...prev, { role: "assistant" as const, content: responseText }]);

    } catch (error) {
      console.error(error);
      setFloatingMessages((prev) => [
        ...prev,
        {
          role: "assistant" as const,
          content: "En este momento estoy experimentando una saturación temporal de consultas de guardia. Por favor, reintentá tu pregunta en un instante."
        }
      ]);
    } finally {
      setFloatingLoading(false);
    }
  };

  const handleFloatingFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!floatingInput.trim()) return;
    const text = floatingInput;
    setFloatingInput("");
    handleFloatingSendMessage(text);
  };

  const handleFloatingChipClick = (topicName: string) => {
    let query = "";
    if (topicName === "Turnos") {
      query = "¿Cómo puedo solicitar un turno de ecografía dinámica con el Dr. Tomás Pascual?";
    } else if (topicName === "Especialidades") {
      query = "¿En qué consiste la especialización médica del Dr. Pascual (RMN, Intervencionismo)?";
    } else if (topicName === "Contacto") {
      query = "¿Tienen algún número de teléfono directo o dirección de consultorios?";
    } else if (topicName === "Currículum") {
      query = "Me gustaría conocer la trayectoria académica y científica del Dr. Pascual.";
    } else if (topicName === "Sí, por favor" || topicName === "Sí, claro") {
      query = "Sí, por favor, brindame el contacto directo de los consultorios del Dr. Pascual.";
    } else if (topicName === "No, gracias") {
      query = "No, gracias, de acuerdo.";
    } else {
      query = topicName;
    }
    handleFloatingSendMessage(query);
  };

  // Secretary AI Bot state
  const [chatMessages, setChatMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([
    {
      role: "assistant",
      content: "Hola. Bienvenido al consultorio digital y la consola de gestión del Dr. Tomás Agustín Pascual.\n\nMi misión es coordinar turnos médicos de alta competencia, resolver de manera exacta dudas administrativas sobre órdenes o autorizaciones de estudios complejos, y ofrecerte pautas formativas sobre lesiones deportivas basadas en la literatura científica del Dr. Pascual.\n\n¿En qué te puedo asesorar hoy? Podés consultarme sobre plazos de informes, requisitos de preparación para ecografías dinámicas, sedes (Barrio Norte, San Isidro, IMAXE) u ordenes de reimpresión. También podés escribir 'Qué tengo hoy' para auditar la agenda operativa."
    }
  ]);
  const [userQuery, setUserQuery] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Simulated CRM / Workspace stats inside Section 7
  const [crmLogs, setCrmLogs] = useState<Array<string>>([
    "Sincronización establecida con base de datos UAR / Los Pumas.",
    "Alerta: Se detectó 1 sobreturno urgente para esta tarde.",
    "Información: Protocolo de Ecografía Dinámica cargado para deportista federado.",
    "Actualización: Estado general de la consola de gestión - Operativo."
  ]);

  // Auto-scroll chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, chatLoading]);

  // Handle generic message submit to back-end
  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const updatedMessages = [...chatMessages, { role: "user" as const, content: textToSend }];
    setChatMessages(updatedMessages);
    setChatLoading(true);

    try {
      const response = await fetch("/api/consult", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          history: updatedMessages.slice(0, -1)
        })
      });

      if (!response.ok) {
        throw new Error("Saturación en el servidor de control ejecutivo.");
      }

      const data = await response.json();
      setChatMessages((prev) => [...prev, { role: "assistant" as const, content: data.text }]);
      
      setCrmLogs((prev) => [
        `Comando procesado: "${textToSend.slice(0, 25)}..."`,
        `Respuesta emitida por modelo experto @${new Date().toLocaleTimeString()}`,
        ...prev.slice(0, 4)
      ]);

    } catch (error) {
      console.error(error);
      setChatMessages((prev) => [
        ...prev,
        {
          role: "assistant" as const,
          content: "Estimado/a, en este momento el canal de comunicación directa con el consultorio del Dr. Pascual está procesando solicitudes médicas urgentes. Por favor, reintentá tu consulta en un instante o acudí a las líneas oficiales."
        }
      ]);
    } finally {
      setChatLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuery.trim()) return;
    const query = userQuery;
    setUserQuery("");
    handleSendMessage(query);
  };

  const triggerQuickAction = (actionLabel: string, userMessage: string) => {
    handleSendMessage(userMessage || actionLabel);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : dir < 0 ? "-100%" : 0,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 32 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.3 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : dir > 0 ? "-100%" : 0,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 32 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.3 }
      }
    })
  };

  return (
    <div className="min-h-screen bg-[#f0eeea] text-[#1a1a18] font-sans selection:bg-[#4a8499]/15 selection:text-[#1a1a18] flex flex-col justify-between">
      
      {/* HEADER / NAVIGATION BAR (Always Horizontal & Shrunk Title to Fit Perfectly) */}
      <header className="sticky top-0 z-50 w-full bg-white/92 backdrop-blur-md border-b border-black/[0.06] shadow-[0_1px_0_rgba(0,0,0,0.04)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-4 sm:py-0 sm:h-24 flex flex-col sm:flex-row items-center justify-between gap-y-3 sm:gap-y-0 transition-all duration-300">
          
          <div className="flex flex-col space-y-0.5 items-center sm:items-start text-center sm:text-left shrink-0 whitespace-nowrap">
            <button 
              onClick={() => paginate(0)} 
              className="font-display text-[11px] xs:text-[12px] sm:text-[13px] md:text-[13.5px] lg:text-[14.5px] xl:text-[15px] tracking-[0.18em] font-semibold text-[#1a1a18] uppercase hover:text-[#4a8499] transition-colors duration-300 whitespace-nowrap cursor-pointer text-left"
            >
              DR. TOMÁS PASCUAL
            </button>
            <span className="font-mono text-[5.5px] xs:text-[6.2px] sm:text-[7.2px] md:text-[7.5px] text-[#6b6760] tracking-[0.22em] uppercase font-light whitespace-nowrap pointer-events-none">
              DIAGNÓSTICO POR IMÁGENES · ALTA COMPETENCIA
            </span>
          </div>

          <nav className="flex items-center justify-center flex-wrap gap-x-2.5 xs:gap-x-3.5 sm:gap-x-4 md:gap-x-5 lg:gap-x-6 xl:gap-x-8 text-[7.5px] xs:text-[8px] sm:text-[8.5px] md:text-[9.2px] lg:text-[9.5px] uppercase tracking-[0.15em] font-medium shrink-0">
            <button 
              onClick={() => paginate(0)} 
              className={`transition-all duration-300 ease-out whitespace-nowrap cursor-pointer pb-1 sm:pb-1.5 ${spaceIndex === 0 ? "text-[#1a1a18] font-semibold border-b border-[#4a8499] tracking-[0.17em]" : "text-[#6b6760] font-normal hover:text-[#1a1a18]"}`}
            >
              Inicio
            </button>
            <button 
              onClick={() => paginate(1)} 
              className={`transition-all duration-300 ease-out whitespace-nowrap cursor-pointer pb-1 sm:pb-1.5 ${spaceIndex === 1 ? "text-[#1a1a18] font-semibold border-b border-[#4a8499] tracking-[0.17em]" : "text-[#6b6760] font-normal hover:text-[#1a1a18]"}`}
            >
              Enfoque
            </button>
            <button 
              onClick={() => paginate(2)} 
              className={`transition-all duration-300 ease-out whitespace-nowrap cursor-pointer pb-1 sm:pb-1.5 ${spaceIndex === 2 ? "text-[#1a1a18] font-semibold border-b border-[#4a8499] tracking-[0.17em]" : "text-[#6b6760] font-normal hover:text-[#1a1a18]"}`}
            >
              Trayectoria
            </button>
            <button 
              onClick={() => paginate(3)} 
              className={`transition-all duration-300 ease-out whitespace-nowrap cursor-pointer pb-1 sm:pb-1.5 ${spaceIndex === 3 ? "text-[#1a1a18] font-semibold border-b border-[#4a8499] tracking-[0.17em]" : "text-[#6b6760] font-normal hover:text-[#1a1a18]"}`}
            >
              Especialidades
            </button>
            <button 
              onClick={() => paginate(4)} 
              className={`transition-all duration-300 ease-out whitespace-nowrap cursor-pointer pb-1 sm:pb-1.5 ${spaceIndex === 4 ? "text-[#1a1a18] font-semibold border-b border-[#4a8499] tracking-[0.17em]" : "text-[#6b6760] font-normal hover:text-[#1a1a18]"}`}
            >
              Investigaciones
            </button>
            <button 
              onClick={() => paginate(5)} 
              className={`transition-all duration-300 ease-out whitespace-nowrap cursor-pointer pb-1 sm:pb-1.5 ${spaceIndex === 5 ? "text-[#1a1a18] font-semibold border-b border-[#4a8499] tracking-[0.17em]" : "text-[#6b6760] font-normal hover:text-[#1a1a18]"}`}
            >
              Asistente
            </button>
            <button 
              onClick={() => paginate(6)} 
              className={`transition-all duration-300 ease-out whitespace-nowrap cursor-pointer pb-1 sm:pb-1.5 ${spaceIndex === 6 ? "text-[#1a1a18] font-semibold border-b border-[#4a8499] tracking-[0.17em]" : "text-[#6b6760] font-normal hover:text-[#1a1a18]"}`}
            >
              Sedes
            </button>
            <button 
              onClick={() => paginate(7)} 
              className={`transition-all duration-300 ease-out whitespace-nowrap cursor-pointer pb-1 sm:pb-1.5 ${spaceIndex === 7 ? "text-[#1a1a18] font-semibold border-b border-[#4a8499] tracking-[0.17em]" : "text-[#6b6760] font-normal hover:text-[#1a1a18]"}`}
            >
              Portal
            </button>
            <button 
              onClick={() => paginate(5)} 
              className="px-3.5 py-1.5 xs:px-4 xs:py-2 md:px-5 md:py-2 bg-[#4a8499]/10 border border-[#4a8499]/30 text-[#4a8499] tracking-[0.18em] font-medium text-[7.5px] xs:text-[8px] sm:text-[8.5px] md:text-[9.2px] lg:text-[9.5px] uppercase hover:bg-[#4a8499]/18 hover:border-[#4a8499]/50 transition-all duration-300 rounded-sm whitespace-nowrap ml-1 sm:ml-2.5 cursor-pointer"
            >
              Consultar
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-grow w-full relative overflow-hidden flex flex-col justify-start">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={spaceIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full flex-shrink-0"
          >
            {spaceIndex === 0 && <SpaceInicio socialProofVisible={true} />}
            {spaceIndex === 1 && <SpaceEnfoque />}
            {spaceIndex === 2 && <SpaceTrayectoria />}
            {spaceIndex === 3 && <SpaceEspecialidades />}
            {spaceIndex === 4 && <SpaceInvestigaciones />}
            {spaceIndex === 5 && (
              <SpaceAsistente
                chatMessages={chatMessages}
                chatLoading={chatLoading}
                userQuery={userQuery}
                setUserQuery={setUserQuery}
                crmLogs={crmLogs}
                handleFormSubmit={handleFormSubmit}
                triggerQuickAction={triggerQuickAction}
                chatEndRef={chatEndRef}
              />
            )}
            {spaceIndex === 6 && <SpaceSedes />}
            {spaceIndex === 7 && <SpacePortal />}

            {/* HIGH END PAGER BOTTOM SYSTEM FOR DESKTOP SWIPE CONTROL */}
            <div className="flex flex-col sm:flex-row items-center justify-between mt-12 mb-16 pt-8 border-t border-black/[0.06] max-w-[1140px] mx-auto px-6 font-sans gap-y-4">
              {spaceIndex > 0 ? (
                <button
                  type="button"
                  onClick={() => paginate(spaceIndex - 1)}
                  className="flex items-center gap-2.5 text-[10px] uppercase tracking-[0.25em] text-[#5c5954] hover:text-[#1a1a18] transition duration-200 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4 text-[#4a8499]" /> Anterior
                </button>
              ) : (
                <div className="hidden sm:block w-20" />
              )}
              
              <div className="flex flex-wrap gap-2.5 justify-center items-center">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((idx) => {
                  const names = ["Inicio", "Enfoque", "Trayectoria", "Especialidades", "Investigaciones", "Asistente AI", "Sedes", "Portal del Paciente"];
                  return (
                    <button
                      key={idx}
                      onClick={() => paginate(idx)}
                      title={names[idx]}
                      className={`px-3 py-1.5 transition-all text-[8px] uppercase tracking-widest duration-300 font-light border cursor-pointer ${
                        spaceIndex === idx
                          ? "bg-[#4a8499]/10 border-[#4a8499] text-[#4a8499] font-normal"
                          : "border-black/[0.08] text-[#5c5954] hover:text-[#1a1a18] hover:border-black/15"
                      }`}
                    >
                      {names[idx]}
                    </button>
                  );
                })}
              </div>

              {spaceIndex < 7 ? (
                <button
                  type="button"
                  onClick={() => paginate(spaceIndex + 1)}
                  className="flex items-center gap-2.5 text-[10px] uppercase tracking-[0.25em] text-[#4a8499] hover:text-[#1a1a18] transition duration-200 font-medium cursor-pointer"
                >
                  Siguiente <ChevronRight className="w-4 h-4 text-[#4a8499]" />
                </button>
              ) : (
                <div className="hidden sm:block w-20" />
              )}
            </div>

            {/* SECTION 9 — FOOTER inside active Space so each has a clean final reading block */}
            <footer className="bg-[#e8e6e1] text-[#5c5954] text-xs py-12 border-t border-black/[0.06] relative z-20 font-sans">
              <div className="max-w-[1140px] mx-auto px-6 space-y-8">
                
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-black/[0.06]">
                  <div className="flex flex-col">
                    <span className="font-sans text-base sm:text-lg tracking-[0.18em] font-light text-[#1a1a18] uppercase">
                      DR. TOMÁS PASCUAL
                    </span>
                    <span className="font-sans text-[8.5px] text-[#5c5954] tracking-widest uppercase font-light">
                      Imágenes Médicas · Trauma & Deporte
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-x-8 gap-y-2 text-[10px] font-sans tracking-wider uppercase font-light text-[#5c5954]">
                    <button onClick={() => paginate(2)} className="hover:text-[#1a1a18] transition cursor-pointer">Trayectoria</button>
                    <span className="text-[#5c5954]/40">/</span>
                    <button onClick={() => paginate(5)} className="hover:text-[#1a1a18] transition cursor-pointer">Consola Bot</button>
                    <span className="text-[#5c5954]/40">/</span>
                    <button onClick={() => paginate(4)} className="hover:text-[#1a1a18] transition cursor-pointer">Publicaciones</button>
                    <span className="text-[#5c5954]/40">/</span>
                    <button onClick={() => paginate(6)} className="hover:text-[#1a1a18] transition cursor-pointer">Sedes</button>
                    <span className="text-[#5c5954]/40">/</span>
                    <button onClick={() => paginate(7)} className="hover:text-[#1a1a18] transition cursor-pointer">Portal</button>
                  </div>

                  <div className="flex gap-4 font-light text-[#5c5954]">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-black/[0.08] hover:text-[#4a8499] hover:border-[#4a8499]/30 transition-all">
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-black/[0.08] hover:text-[#4a8499] hover:border-[#4a8499]/30 transition-all">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] uppercase font-sans text-[#5c5954] gap-3 font-light tracking-wider">
                  <span>
                    &copy; 2026 Dr. Tomás Agustín Pascual · Matrícula Nacional 136081
                  </span>
                  <div className="flex gap-4 font-mono">
                    <span>M.N. 136081</span>
                    <span>•</span>
                    <span>M.P. 452037</span>
                  </div>
                </div>

              </div>
            </footer>

          </motion.div>
        </AnimatePresence>
      </main>

      {/* FLOATING BOT CONVERSATIONAL ASSISTANT SYSTEM */}
      {/* Slide-up panel */}
      <div
        className={`fixed bottom-24 right-6 w-[360px] h-[520px] bg-white border border-black/[0.08] rounded-[24px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.12)] z-[9998] flex flex-col transition-all duration-300 ease-in-out ${
          isFloatingBotOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-[#f7f6f3] border-b border-black/[0.06] select-none">
          <div className="flex items-center gap-3">
            <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center overflow-hidden border border-black/[0.08] bg-white relative">
              <img 
                src="/src/assets/images/dr_tomas_pascual_1779914444643.png" 
                alt="Dr. Tomás Pascual" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[12px] font-normal text-[#1a1a18] tracking-wider uppercase">Dr. Pascual</span>
              <span className="text-[10px] text-[#5c5954] tracking-wide font-light">Asistente digital</span>
            </div>
          </div>
          <button
            onClick={() => setIsFloatingBotOpen(false)}
            className="text-[#5c5954] hover:text-[#1a1a18] transition duration-150 p-1 cursor-pointer"
            aria-label="Cerrar chat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Message scroll list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f0eeea]">
          {floatingMessages.map((msg, idx) => {
            const isLatest = idx === floatingMessages.length - 1;
            return (
              <div key={idx} className="space-y-2">
                <div className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] p-3.5 text-xs font-sans leading-relaxed ${
                      msg.role === "user"
                        ? "bg-[#4a8499]/12 border border-[#4a8499]/20 text-[#1a1a18] font-light user-bubble rounded-2xl"
                        : "bg-white text-[#2c2a26] bot-bubble font-light border border-black/[0.06] rounded-2xl shadow-sm"
                    }`}
                  >
                    <p className="whitespace-pre-line text-[11px] sm:text-[12px]">
                      {msg.content}
                    </p>
                  </div>
                </div>

                {/* Quick reply chips under bot messages */}
                {msg.role === "assistant" && isLatest && (
                  <div className="flex flex-col gap-1.5 pt-1">
                    {idx === 0 && (
                      <div className="flex flex-wrap gap-1.5 justify-start">
                        {["Turnos", "Especialidades", "Contacto", "Currículum"].map((chip) => (
                          <button
                            key={chip}
                            onClick={() => handleFloatingChipClick(chip)}
                            className="px-3 py-1.5 bg-white hover:bg-[#f7f6f3] hover:border-[#4a8499]/30 border border-black/[0.08] text-[10px] text-[#2c2a26] rounded-full transition-all duration-200 cursor-pointer font-light tracking-wider"
                          >
                            {chip}
                          </button>
                        ))}
                      </div>
                    )}
                    {(msg.content.includes("¿Querés que te deje el contacto directo del consultorio?") || 
                      msg.content.includes("contacto directo del consultorio?")) && (
                      <div className="flex flex-wrap gap-1.5 justify-start">
                        {["Sí, por favor", "No, gracias"].map((chip) => (
                          <button
                            key={chip}
                            onClick={() => handleFloatingChipClick(chip)}
                            className="px-3 py-1.5 bg-white hover:bg-[#f7f6f3] hover:border-[#4a8499]/30 border border-black/[0.08] text-[10px] text-[#2c2a26] rounded-full transition-all duration-200 cursor-pointer font-light tracking-wider"
                          >
                            {chip}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {floatingLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-black/[0.06] px-3 py-2 text-[#5c5954] text-[10px] flex items-center gap-2 bot-bubble font-light rounded-2xl shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4a8499]/60 animate-ping"></span>
                <span>Orientando...</span>
              </div>
            </div>
          )}
          <div ref={floatingChatEndRef} />
        </div>

        {/* Input container */}
        <div className="bg-[#f7f6f3] border-t border-black/[0.06] p-3">
          <form onSubmit={handleFloatingFormSubmit} className="flex gap-2 items-center">
            <input
              type="text"
              value={floatingInput}
              onChange={(e) => setFloatingInput(e.target.value)}
              placeholder="Escribí tu consulta..."
              className="flex-grow bg-white border border-black/[0.08] text-xs px-3.5 py-2.5 text-[#1a1a18] placeholder-[#8a8680] focus:outline-none focus:border-[#4a8499]/50 transition-all duration-200"
            />
            <button
              type="submit"
              disabled={floatingLoading || !floatingInput.trim()}
              className="p-2 text-[#5c5954] hover:text-[#4a8499] disabled:opacity-30 transition-all duration-200 active:scale-95 shrink-0 cursor-pointer"
              aria-label="Enviar mensaje"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Floating Circle Button Trigger */}
      <button
        onClick={() => setIsFloatingBotOpen(!isFloatingBotOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full z-[9999] shadow-[0_8px_24px_rgba(0,0,0,0.15)] cursor-pointer hover:shadow-[0_0_0_3px_rgba(74,132,153,0.25)] hover:scale-105 active:scale-95 transition-all duration-300 group flex items-center justify-center bg-white border border-black/[0.08] overflow-hidden bot-glow-pulse"
        aria-label="Abrir asistente digital"
      >
        <span className="absolute top-[2px] right-[2px] w-3 h-3 bg-emerald-500 rounded-full border-[1.5px] border-white z-20 animate-pulse"></span>
        
        <div className="w-full h-full rounded-full flex items-center justify-center bg-white relative overflow-hidden">
          <img 
            src="/src/assets/images/dr_tomas_pascual_1779914444643.png" 
            alt="Dr. Tomás Pascual" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </button>

    </div>
  );
}
