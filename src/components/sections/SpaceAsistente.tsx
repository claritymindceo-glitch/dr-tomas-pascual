import React, { useState } from "react";
import SectionHeaderBanner from "../SectionHeaderBanner";
import { Brain, ShieldAlert, Bell, TrendingUp, FileSpreadsheet } from "lucide-react";
import { useI18n } from "../../i18n/context";

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

type TabKey = "priorities" | "billing" | "documents" | "tools";

export default function SpaceAsistente({
  chatMessages,
  chatLoading,
  userQuery,
  setUserQuery,
  crmLogs,
  handleFormSubmit,
  triggerQuickAction,
  chatEndRef,
}: SpaceAsistenteProps) {
  const { m } = useI18n();
  const s = m.sections.asistente;
  const [activeTab, setActiveTab] = useState<TabKey>("priorities");

  const tabContent = s.tabContent[activeTab === "tools" ? "tools" : activeTab];

  return (
    <div className="w-full flex flex-col space-y-0 font-sans">
      <SectionHeaderBanner
        image="/images/asistente_digital_ai_banner_1779991919174.png"
        tag={s.banner.tag}
        title={s.banner.title}
        subtitle={s.banner.subtitle}
      />

      <section id="digital-bot" className="py-16 bg-[#e8e6e1] px-6 relative">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="font-sans text-[9px] text-[#5c5954] tracking-widest uppercase block font-light">
              {s.consoleLabel}
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl text-[#2c2a26] font-light uppercase tracking-[0.08em]">
              {s.heading}
            </h2>
            <p className="font-sans text-[#5c5954] text-xs sm:text-sm font-light leading-relaxed">
              {s.description}
            </p>
          </div>

          <div className="inline-flex items-center gap-2 bg-white border-t border-x border-black/[0.08] px-5 py-2 text-[8.5px] uppercase tracking-[0.2em] text-[#4a8499] z-10 relative">
            <span className="w-1.5 h-1.5 bg-[#4a8499]/50 rounded-full animate-pulse"></span>
            {s.badge}
          </div>

          <div className="neon-relief-card p-4 sm:p-8 mt-[-1px] bg-white border border-black/[0.06]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              <div className="lg:col-span-4 flex flex-col justify-between border border-black/[0.06] bg-white p-5 space-y-6">
                <div className="space-y-5">
                  <div className="flex justify-between items-center pb-3 border-b border-black/[0.06]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span className="font-sans text-[8px] text-[#2c2a26] tracking-widest uppercase font-light">
                        {s.simLabel}
                      </span>
                    </div>
                    <span className="font-sans text-[8px] text-[#5c5954] font-light">v1.2.0</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[9px] font-sans tracking-wider text-center">
                    {(
                      [
                        ["priorities", s.tabs.agenda],
                        ["billing", s.tabs.prevention],
                        ["documents", s.tabs.emergency],
                        ["tools", s.tabs.stats],
                      ] as [TabKey, string][]
                    ).map(([key, label]) => (
                      <button
                        key={key}
                        onClick={() => setActiveTab(key)}
                        className={`p-2 border transition duration-300 cursor-pointer ${
                          activeTab === key
                            ? "bg-[#4a8499]/10 border-[#4a8499]/30 text-[#1a1a18] font-normal"
                            : "border-black/[0.06] text-[#5c5954] hover:text-[#1a1a18]"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>

                  <div className="bg-[#f0eeea] p-4 border border-black/[0.06] min-h-[170px] flex flex-col justify-between">
                    {activeTab === "documents" ? (
                      <div className="space-y-2">
                        <span className="font-sans text-[8.5px] text-[#4a8499] tracking-wider block font-light uppercase">
                          {s.documentsChecklistTitle}
                        </span>
                        <ul className="text-[9.5px] text-[#5c5954] font-sans space-y-1 font-light leading-relaxed">
                          {s.documentsChecklistItems.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ) : activeTab === "tools" ? (
                      <div className="space-y-3">
                        <div className="flex items-center gap-1.5 text-[9px] font-sans text-[#2c2a26] font-light">
                          <FileSpreadsheet className="w-3 h-3 text-[#4a8499]" />
                          <span>{tabContent.title}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-center">
                          <div className="bg-white p-2 border border-black/[0.06]">
                            <span className="text-[8px] text-[#5c5954] block font-light">
                              {s.metrics.athletes}
                            </span>
                            <span className="text-xs text-[#2c2a26] font-light font-sans">
                              {s.metrics.act}
                            </span>
                          </div>
                          <div className="bg-white p-2 border border-black/[0.06]">
                            <span className="text-[8px] text-[#5c5954] block font-light">
                              {s.metrics.reports}
                            </span>
                            <span className="text-xs text-[#2c2a26] font-light font-sans">
                              {s.metrics.success}
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="flex items-center gap-1.5 text-[9px] font-sans text-[#4a8499] uppercase font-light">
                          {activeTab === "priorities" ? (
                            <Bell className="w-3 h-3 text-[#4a8499]/70" />
                          ) : (
                            <TrendingUp className="w-3 h-3 text-[#4a8499]/70" />
                          )}
                          <span>{tabContent.title}</span>
                        </div>
                        <p className="font-sans text-[10.5px] text-[#5c5954] leading-relaxed font-light">
                          {tabContent.body}
                        </p>
                        <button
                          type="button"
                          onClick={() =>
                            triggerQuickAction(
                              tabContent.button,
                              activeTab === "priorities" ? s.quickActions[0].query : undefined
                            )
                          }
                          className="w-full py-1.5 bg-transparent border border-black/[0.08] font-sans text-[8px] tracking-wider text-[#2c2a26] hover:border-[#4a8499]/40 hover:bg-black/[0.03] transition uppercase font-light cursor-pointer"
                        >
                          {tabContent.button}
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="font-sans text-[8px] text-[#5c5954] uppercase tracking-wider block font-light">
                    {s.auditLog}
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

              <div className="lg:col-span-8 bg-white border border-black/[0.06] flex flex-col justify-between p-4 sm:p-6 space-y-4 no-shadow relative overflow-hidden">
                <div className="flex justify-between items-center bg-[#f0eeea] p-3.5 border border-black/[0.06] text-[9px] font-sans text-[#5c5954] tracking-wider font-light">
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-[#4a8499]" />
                    <span className="text-[#2c2a26] uppercase font-light">{s.chatTitle}</span>
                  </div>
                  <span className="font-light">{s.chatConnection}</span>
                </div>

                <div className="bg-[#f0eeea] p-4 border border-black/[0.06] h-[280px] sm:h-[340px] overflow-y-auto space-y-4 rounded-sm">
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
                        <span className="font-sans text-[8px] uppercase tracking-wider block mb-1.5 opacity-60 text-[#4a8499]">
                          {msg.role === "user" ? s.patientLabel : s.assistantLabel}
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
                        <span className="font-light text-[11px]">{s.processing}</span>
                      </div>
                    </div>
                  )}

                  <div ref={chatEndRef} />
                </div>

                <div className="space-y-2">
                  <span className="font-sans text-[8px] text-[#5c5954] uppercase tracking-widest block font-light">
                    {s.directQueries}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {s.quickActions.map((action, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => triggerQuickAction(action.action, action.query)}
                        className={`text-[9px] bg-[#f0eeea] border py-1.5 px-3 font-sans tracking-wide transition uppercase font-light cursor-pointer ${
                          idx === 3
                            ? "border-black/[0.08] hover:border-[#4a8499]/30 hover:text-[#1a1a18] text-[#4a8499]"
                            : "border-black/[0.06] hover:border-black/[0.08] hover:text-[#1a1a18] text-[#5c5954]"
                        }`}
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleFormSubmit} className="flex gap-2">
                  <input
                    type="text"
                    value={userQuery}
                    onChange={(e) => setUserQuery(e.target.value)}
                    placeholder={s.placeholder}
                    className="flex-grow bg-[#f0eeea] border border-black/[0.06] px-4 py-3 text-xs sm:text-sm text-[#2c2a26] focus:outline-none focus:border-[#4a8499]/40 transition placeholder-[#8a8680] rounded-sm"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#f0eeea] border border-black/[0.08] hover:border-[#4a8499]/50 text-[#2c2a26] hover:bg-black/[0.03] font-light font-sans text-[10px] sm:text-xs tracking-widest uppercase transition-all duration-300 shrink-0 cursor-pointer whitespace-nowrap"
                  >
                    {s.consult}
                  </button>
                </form>

                <div className="bg-[#f0eeea] p-3 text-[9px] text-[#5c5954] font-sans leading-relaxed border border-black/[0.06] flex items-start gap-2">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>{s.disclaimerTitle}</strong> {s.disclaimer}
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
