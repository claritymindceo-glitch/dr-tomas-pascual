import React, { useState } from "react";
import SectionHeaderBanner from "../SectionHeaderBanner";
import { Brain, ShieldAlert, Bell, TrendingUp, FileSpreadsheet } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface SpaceAsistenteProps {
  chatMessages: Message[];
  chatLoading: boolean;
  userQuery: string;
  setUserQuery: (val: string) => void;
  crmLogs: string[];
  handleFormSubmit: (e: React.FormEvent) => void;
  triggerQuickAction: (actionText: string, fullQuery?: string) => void;
  chatEndRef: React.RefObject<HTMLDivElement | null>;
}

export default function SpaceAsistente({
  chatMessages,
  chatLoading,
  userQuery,
  setUserQuery,
  crmLogs,
  handleFormSubmit,
  triggerQuickAction,
  chatEndRef
}: SpaceAsistenteProps) {
  const [activeTab, setActiveTab] = useState("priorities");

  return (
    <div className="w-full flex flex-col space-y-0 font-sans">
      <SectionHeaderBanner
        image="/src/assets/images/asistente_digital_ai_banner_1779991919174.png"
        tag="MESA DE GESTIÓN IA"
        title="ASISTENTE DIGITAL INTELIGENTE"
        subtitle="Consola de triage clínico inmediato integrada con base de conocimientos deportivos sobre lesiones músculo-esqueléticas"
      />

      <section id="digital-bot" className="py-16 bg-[#e8e6e1] px-6 relative">
        <div className="max-w-[1140px] mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="font-sans text-[9px] text-[#5c5954] tracking-widest uppercase block font-light">
              CONSOLA DE CONTROL OPERATIVA
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl text-[#2c2a26] font-light uppercase tracking-[0.08em]">
              Asistente Clínico Inteligente & Mesa de Gestión IA
            </h2>
            <p className="font-sans text-[#5c5954] text-xs sm:text-sm font-light leading-relaxed">
              Planifique derivaciones quirúrgicas inmediatas, asigne turnos de alta resolución en San Isidro o Barrio Norte, audite diagnósticos dinámicos o administre incidencias mediante nuestro Asistente Digital de Control.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 bg-white border-t border-x border-black/[0.08] px-5 py-2 text-[8.5px] uppercase tracking-[0.2em] text-[#4a8499] z-10 relative">
            <span className="w-1.5 h-1.5 bg-[#4a8499]/50 rounded-full animate-pulse"></span>
            MESA DE GESTIÓN IA
          </div>

          <div className="neon-relief-card p-4 sm:p-8 mt-[-1px] bg-white border border-black/[0.06]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* Left Column: Simulated CRM Workspace Status */}
              <div className="lg:col-span-4 flex flex-col justify-between border border-black/[0.06] bg-white p-5 space-y-6">
                <div className="space-y-5">
                  
                  <div className="flex justify-between items-center pb-3 border-b border-black/[0.06]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span className="font-sans text-[8px] text-[#2c2a26] tracking-widest uppercase font-light">
                        CLÍNICA INTEGRADA S.I.M.
                      </span>
                    </div>
                    <span className="font-sans text-[8px] text-[#5c5954] font-light">v1.2.0</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[9px] font-sans tracking-wider text-center">
                    <button
                      onClick={() => setActiveTab("priorities")}
                      className={`p-2 border transition duration-300 cursor-pointer ${
                        activeTab === "priorities"
                          ? "bg-[#4a8499]/10 border-[#4a8499]/30 text-[#1a1a18] font-normal"
                          : "border-black/[0.06] text-[#5c5954] hover:text-[#1a1a18]"
                      }`}
                    >
                      Agenda MSK
                    </button>
                    <button
                      onClick={() => setActiveTab("billing")}
                      className={`p-2 border transition duration-300 cursor-pointer ${
                        activeTab === "billing"
                          ? "bg-[#4a8499]/10 border-[#4a8499]/30 text-[#1a1a18] font-normal"
                          : "border-black/[0.06] text-[#5c5954] hover:text-[#1a1a18]"
                      }`}
                    >
                      Prevención MSK
                    </button>
                    <button
                      onClick={() => setActiveTab("documents")}
                      className={`p-2 border transition duration-300 cursor-pointer ${
                        activeTab === "documents"
                          ? "bg-[#4a8499]/10 border-[#4a8499]/30 text-[#1a1a18] font-normal"
                          : "border-black/[0.06] text-[#5c5954] hover:text-[#1a1a18]"
                      }`}
                    >
                      Guardia Lesiones
                    </button>
                    <button
                      onClick={() => setActiveTab("tools")}
                      className={`p-2 border transition duration-300 cursor-pointer ${
                        activeTab === "tools"
                          ? "bg-[#4a8499]/10 border-[#4a8499]/30 text-[#1a1a18] font-normal"
                          : "border-black/[0.06] text-[#5c5954] hover:text-[#1a1a18]"
                      }`}
                    >
                      Estadísticas
                    </button>
                  </div>

                  <div className="bg-[#f0eeea] p-4 border border-black/[0.06] min-h-[170px] flex flex-col justify-between">
                    {activeTab === "priorities" && (
                      <div className="space-y-3">
                        <div className="flex items-center gap-1.5 text-[9px] font-sans text-[#4a8499] uppercase font-light">
                          <Bell className="w-3 h-3 text-[#4a8499]/70" />
                          <span>Controles Médicos</span>
                        </div>
                        <p className="font-sans text-[10.5px] text-[#5c5954] leading-relaxed font-light">
                          Se detectaron <strong>8 atletas con controles musculares pendientes</strong>. Coordinar hoy previene recidivas severas.
                        </p>
                        <button
                          type="button"
                          onClick={() => triggerQuickAction("Agenda del día", "Qué tengo hoy")}
                          className="w-full py-1.5 bg-transparent border border-black/[0.08] font-sans text-[8px] tracking-wider text-[#2c2a26] hover:border-[#4a8499]/40 hover:bg-black/[0.03] transition uppercase font-light cursor-pointer"
                        >
                          Verificar Agenda Hoy
                        </button>
                      </div>
                    )}

                    {activeTab === "billing" && (
                      <div className="space-y-3">
                        <div className="flex items-center gap-1.5 text-[9px] font-sans text-[#4a8499] uppercase font-light">
                          <TrendingUp className="w-3 h-3 text-[#4a8499]/70" />
                          <span>Evaluaciones de Control</span>
                        </div>
                        <p className="font-sans text-[10.5px] text-[#5c5954] leading-relaxed font-light">
                          Sugerencia clínica automática: Ofrecer ecografías dinámicas preventivas a pacientes con contractura recurrente en el sóleo.
                        </p>
                        <button
                          type="button"
                          onClick={() => triggerQuickAction("Estrategias preventivas", "¿Cómo estructurar controles preventivos?")}
                          className="w-full py-1.5 bg-transparent border border-black/[0.08] font-sans text-[8px] tracking-wider text-[#2c2a26] hover:border-[#4a8499]/40 hover:bg-black/[0.03] transition uppercase font-light cursor-pointer"
                        >
                          Verificar Protocolos
                        </button>
                      </div>
                    )}

                    {activeTab === "documents" && (
                      <div className="space-y-2">
                        <span className="font-sans text-[8.5px] text-[#4a8499] tracking-wider block font-light uppercase">CHECKLIST AUTOMÁTICO EN RECONSTRUCCIONES:</span>
                        <ul className="text-[9.5px] text-[#5c5954] font-sans space-y-1 font-light leading-relaxed">
                          <li>1. RNM de alta resolución a las 48 horas pos-lesión.</li>
                          <li>2. Registrar rango de flexión dinámica ecográfica.</li>
                          <li>3. Comparación milimétrica bilateral del bíceps femoral.</li>
                          <li>4. Carga de orden de rehabilitación de Los Pumas.</li>
                        </ul>
                      </div>
                    )}

                    {activeTab === "tools" && (
                      <div className="space-y-3">
                        <div className="flex items-center gap-1.5 text-[9px] font-sans text-[#2c2a26] font-light">
                          <FileSpreadsheet className="w-3 h-3 text-[#4a8499]" />
                          <span>Métricas de Admisión</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-center">
                          <div className="bg-white p-2 border border-black/[0.06]">
                            <span className="text-[8px] text-[#5c5954] block font-light">ATLETAS REGISTRADOS:</span>
                            <span className="text-xs text-[#2c2a26] font-light font-sans">148 Act</span>
                          </div>
                          <div className="bg-white p-2 border border-black/[0.06]">
                            <span className="text-[8px] text-[#5c5954] block font-light">REPORTES MSK:</span>
                            <span className="text-xs text-[#2c2a26] font-light font-sans">98% Éxito</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                </div>

                <div className="space-y-2">
                  <span className="font-sans text-[8px] text-[#5c5954] uppercase tracking-wider block font-light">
                    LOG DE AUDITORÍA (SISTEMA INTEGRADO):
                  </span>
                  <div className="bg-[#f0eeea] p-2.5 font-sans text-[8.5px] text-[#5c5954] space-y-1 h-20 overflow-y-auto border border-black/[0.06]">
                    {crmLogs.map((log, idx) => (
                      <div key={idx} className="truncate select-none font-light">
                        • {log}
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: Live Terminal */}
              <div className="lg:col-span-8 bg-white border border-black/[0.06] flex flex-col justify-between p-4 sm:p-6 space-y-4 no-shadow relative overflow-hidden">
                
                <div className="flex justify-between items-center bg-[#f0eeea] p-3.5 border border-black/[0.06] text-[9px] font-sans text-[#5c5954] tracking-wider font-light">
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-[#4a8499]" />
                    <span className="text-[#2c2a26] uppercase font-light">ASISTENTE CLÍNICO INTELIGENTE</span>
                  </div>
                  <span className="font-light">CONEXIÓN CLÍNICA INTEGRADA (S.I.M.)</span>
                </div>

                <div className="bg-[#f0eeea] p-4 border border-black/[0.06] h-[340px] overflow-y-auto space-y-4 rounded-sm">
                  {chatMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] p-4 text-xs sm:text-sm leading-relaxed ${
                          msg.role === "user"
                            ? "bg-[#f7f6f3] border border-black/[0.08] text-[#2c2a26] font-light rounded-lg font-sans shadow-md"
                            : "bg-[#e8e6e1] border border-black/[0.06] text-[#2c2a26] font-light rounded-lg font-sans shadow-sm"
                        }`}
                      >
                        <span className={`font-sans text-[8px] uppercase tracking-wider block mb-1.5 opacity-60 ${msg.role === "user" ? "text-[#4a8499]" : "text-[#4a8499]"}`}>
                          {msg.role === "user" ? "PACIENTE / ATLETA" : "ASISTENCIA CLÍNICA DR. PASCUAL"}
                        </span>
                        <p className="whitespace-pre-line leading-relaxed text-[11px] sm:text-xs">
                          {msg.content}
                        </p>
                      </div>
                    </div>
                  ))}

                  {chatLoading && (
                    <div className="flex justify-start">
                      <div className="bg-[#e8e6e1] border border-black/[0.06] p-3.5 text-[#5c5954] text-xs flex items-center gap-2 font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4a8499] animate-ping"></span>
                        <span className="font-light text-[11px]">Asistente clínico procesando bajo base de conocimientos médicos...</span>
                      </div>
                    </div>
                  )}
                  
                  <div ref={chatEndRef} />
                </div>

                <div className="space-y-2">
                  <span className="font-sans text-[8px] text-[#5c5954] uppercase tracking-widest block font-light">
                    CONSULTAS DIRECTAS AL SISTEMA OPERATIVO:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => triggerQuickAction("Qué tengo hoy", "Qué tengo hoy")}
                      className="text-[9px] bg-[#f0eeea] border border-black/[0.06] hover:border-black/[0.08] hover:text-[#1a1a18] text-[#5c5954] py-1.5 px-3 font-sans tracking-wide transition uppercase font-light cursor-pointer"
                    >
                      📅 ¿Qué tengo hoy? (Modo Agenda)
                    </button>
                    <button
                      type="button"
                      onClick={() => triggerQuickAction("Consultar Agenda", "Generar un reporte claro sobre la agenda del día, estudios prioritarios con Los Pumas y pacientes de control.")}
                      className="text-[9px] bg-[#f0eeea] border border-black/[0.06] hover:border-black/[0.08] hover:text-[#1a1a18] text-[#5c5954] py-1.5 px-3 font-sans tracking-wide transition uppercase font-light cursor-pointer"
                    >
                      📊 Reporte de Turnos
                    </button>
                    <button
                      type="button"
                      onClick={() => triggerQuickAction("Diagnóstico Urgente", "Tuve una molestia muscular aguda hoy entrenando. ¿Cuál es el checklist paso a paso a seguir antes de una resonancia?")}
                      className="text-[9px] bg-[#f0eeea] border border-black/[0.06] hover:border-black/[0.08] hover:text-[#1a1a18] text-[#5c5954] py-1.5 px-3 font-sans tracking-wide transition uppercase font-light cursor-pointer"
                    >
                      🚨 Protocolo Lesiones Agudas
                    </button>
                    <button
                      type="button"
                      onClick={() => triggerQuickAction("Sedes y Turnos", "¿En qué sedes atiende el Dr. Tomás Pascual y cómo solicito un turno para ecografía dinámica o intervencionismo?")}
                      className="text-[9px] bg-[#f0eeea] border border-black/[0.08] hover:border-[#4a8499]/30 hover:text-[#1a1a18] text-[#4a8499] py-1.5 px-3 font-sans tracking-wide transition uppercase font-light cursor-pointer"
                    >
                      💸 Solicitar Turno / Sedes
                    </button>
                  </div>
                </div>

                <form onSubmit={handleFormSubmit} className="flex gap-2">
                  <input
                    type="text"
                    value={userQuery}
                    onChange={(e) => setUserQuery(e.target.value)}
                    placeholder="Escribí tu consulta sobre diagnóstico o turnos al asistente..."
                    className="flex-grow bg-[#f0eeea] border border-black/[0.06] px-4 py-3 text-xs sm:text-sm text-[#2c2a26] focus:outline-none focus:border-[#4a8499]/40 transition placeholder-[#8a8680] rounded-sm"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#f0eeea] border border-black/[0.08] hover:border-[#4a8499]/50 text-[#2c2a26] hover:bg-black/[0.03] font-light font-sans text-[10px] sm:text-xs tracking-widest uppercase transition-all duration-300 shrink-0 cursor-pointer whitespace-nowrap"
                  >
                    Consultar
                  </button>
                </form>

                <div className="bg-[#f0eeea] p-3 text-[9px] text-[#5c5954] font-sans leading-relaxed border border-black/[0.06] flex items-start gap-2">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>DESCARGO CLÍNICO / PROFESIONAL:</strong> Este sistema es un asistente digital inteligente con fines informativos sobre el perfil profesional, publicaciones y sedes del Dr. Tomás Pascual. No reemplaza una consulta médica formal ni emite diagnósticos independientes.
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
