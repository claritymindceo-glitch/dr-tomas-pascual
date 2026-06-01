import React from "react";
import SectionHeaderBanner from "../SectionHeaderBanner";
import AnimatedCounter from "../AnimatedCounter";
import { useI18n } from "../../i18n/context";

export default function SpaceTrayectoria() {
  const { m } = useI18n();
  const s = m.sections.trayectoria;
  const { currentPositions, educationMilestones } = m.data;

  return (
    <div className="w-full flex flex-col space-y-0 font-sans">
      <SectionHeaderBanner
        image="/images/doctor_trayectoria_banner_1779991863863.png"
        tag={s.banner.tag}
        title={s.banner.title}
        subtitle={s.banner.subtitle}
      />

      <section id="about" className="py-16 bg-[#f0eeea] px-6 z-20 relative">
        <div className="max-w-[1140px] mx-auto">
          <div className="inline-flex items-center gap-2 bg-white border-t border-x border-black/[0.08] px-5 py-2 text-[8.5px] uppercase tracking-[0.2em] text-[#4a8499] z-10 relative">
            <span className="w-1.5 h-1.5 bg-[#4a8499]/50 rounded-full animate-pulse"></span>
            {s.badge}
          </div>

          <div className="neon-relief-card p-6 sm:p-10 md:p-12 bg-white border border-black/[0.06] relative mt-[-1px] z-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-6 space-y-12">
                <div className="space-y-6">
                  <span className="font-sans text-[9px] text-[#5c5954] tracking-widest uppercase font-light block">
                    {s.profileLabel}
                  </span>
                  <h2 className="font-sans text-2xl sm:text-3xl text-[#1a1a18] tracking-[0.08em] font-light uppercase">
                    {s.heading}
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-[#5c5954] leading-relaxed font-light">
                    {s.bio1}
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-[#5c5954] leading-relaxed font-light">
                    {s.bio2}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-[#4a8499]/18">
                  <div>
                    <span className="font-sans text-2xl sm:text-3xl text-[#9a7b2e] font-light block">
                      <AnimatedCounter target={20} suffix="+" />
                    </span>
                    <span className="font-sans text-[8px] sm:text-[9px] text-[#5c5954] uppercase tracking-wider block mt-2 leading-relaxed font-light">
                      {s.statYears}
                    </span>
                  </div>
                  <div>
                    <span className="font-sans text-2xl sm:text-3xl text-[#9a7b2e] font-light block">
                      <AnimatedCounter target={5} />
                    </span>
                    <span className="font-sans text-[8px] sm:text-[9px] text-[#5c5954] uppercase tracking-wider block mt-2 leading-relaxed font-light">
                      {s.statAwards}
                    </span>
                  </div>
                  <div>
                    <span className="font-sans text-2xl sm:text-3xl text-[#9a7b2e] font-light block">
                      <AnimatedCounter target={12} suffix="+" />
                    </span>
                    <span className="font-sans text-[8px] sm:text-[9px] text-[#5c5954] uppercase tracking-wider block mt-2 leading-relaxed font-light">
                      {s.statPapers}
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <span className="font-sans text-[9px] text-[#5c5954] tracking-widest uppercase font-light block pl-1">
                  {s.credentialsTitle}
                </span>

                {s.credentials.map((cred, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-5 border-l border-[#4a8499]/22 border-y-[0.5px] border-r-[0.5px] border-black/[0.06] space-y-1 hover:bg-[#f7f6f3] transition-all duration-300"
                  >
                    <span className="font-sans text-[8px] text-[#5c5954] uppercase tracking-wider block font-light">
                      {cred.label}
                    </span>
                    <h4 className="font-sans text-sm font-light text-[#2c2a26] uppercase tracking-wider">
                      {cred.title}
                    </h4>
                    <p className="font-sans text-xs text-[#5c5954] font-light leading-relaxed">
                      {cred.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 border border-black/[0.06] space-y-4">
              <h3 className="font-sans text-md text-[#9a7b2e] tracking-widest uppercase">
                {s.positionsTitle}
              </h3>
              <ul className="space-y-3.5 text-xs text-[#5c5954] font-light">
                {currentPositions.map((pos, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-[#9a7b2e]">•</span>
                    <div>
                      <strong className="text-[#1a1a18]">{pos.title}</strong> — {pos.institution}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 border border-black/[0.06] space-y-4">
              <h3 className="font-sans text-md text-[#9a7b2e] tracking-widest uppercase">
                {s.educationTitle}
              </h3>
              <ul className="space-y-3.5 text-xs text-[#5c5954] font-light">
                {educationMilestones.map((pos, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-[#9a7b2e]">•</span>
                    <div>
                      <strong className="text-[#1a1a18]">{pos.title}</strong> — {pos.institution}{" "}
                      ({pos.period})
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
