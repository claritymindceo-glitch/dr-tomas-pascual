import React from "react";
import SectionHeaderBanner from "../SectionHeaderBanner";
import { useI18n } from "../../i18n/context";

export default function SpaceInvestigaciones() {
  const { m } = useI18n();
  const s = m.sections.investigaciones;
  const { academicPapers } = m.data;

  return (
    <div className="w-full flex flex-col space-y-0 font-sans">
      <SectionHeaderBanner
        image="/images/investigaciones_academic_banner_1779991903362.png"
        tag={s.banner.tag}
        title={s.banner.title}
        subtitle={s.banner.subtitle}
      />

      <section className="py-20 bg-[#f0eeea] px-6">
        <div className="max-w-[1140px] mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 space-y-8">
              <div className="space-y-4">
                <span className="font-sans text-[9px] text-[#4a8499] tracking-[0.25em] uppercase font-light">
                  {s.label}
                </span>
                <h2 className="font-sans text-2xl sm:text-3xl text-[#1a1a18] font-light tracking-[0.08em] uppercase leading-tight">
                  {s.heading}
                </h2>
                <div className="w-12 h-[0.5px] bg-[#4a8499]/25"></div>
              </div>

              <p className="font-sans text-xs sm:text-sm text-[#5c5954] leading-relaxed font-light">
                {s.narrative}
              </p>

              <div className="bg-white p-6 border border-black/[0.06] space-y-4">
                <span className="font-mono text-[9px] text-[#dbbf6e] tracking-widest uppercase">
                  {s.honorsTitle}
                </span>
                <ul className="space-y-3.5 text-xs text-[#5c5954] font-light">
                  {s.honors.map((honor, idx) => (
                    <li key={idx}>
                      <strong className="text-[#1a1a18]">{honor.title}</strong> {honor.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <span className="font-sans text-[9px] text-[#5c5954] tracking-widest uppercase font-light block pl-1">
                {s.papersTitle}
              </span>

              <div className="grid grid-cols-1 gap-4">
                {academicPapers.map((paper, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 sm:p-8 border border-black/[0.06] hover:border-[#4a8499]/20 transition-all duration-300 space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-y-2 sm:gap-y-0">
                      <div className="space-y-1.5 min-w-0">
                        <span className="font-mono text-[8.5px] text-[#4a8499] tracking-widest bg-[#4a8499]/5 border border-[#4a8499]/15 px-2 py-0.5 rounded-sm inline-block uppercase">
                          {paper.journal}
                        </span>
                        <h3 className="font-sans text-md font-light text-[#1a1a18] uppercase tracking-wider leading-snug">
                          {paper.title}
                        </h3>
                      </div>
                      <span className="font-mono text-xs text-[#5c5954] font-light shrink-0 sm:pl-4">
                        [{paper.year}]
                      </span>
                    </div>

                    <p className="font-sans text-xs text-[#5c5954] font-light leading-relaxed">
                      {paper.highlight || s.paperFallback}
                    </p>

                    <div className="pt-3 border-t border-black/[0.06] flex flex-wrap gap-x-6 gap-y-2 text-[10.5px] text-[#4a8499]/80 font-mono font-light">
                      <span>
                        {s.authors} {paper.authors || "Pascual TA, et al."}
                      </span>
                      <span>
                        • {s.citation} {paper.citation || "10.1148/rg.2023.msk02"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
