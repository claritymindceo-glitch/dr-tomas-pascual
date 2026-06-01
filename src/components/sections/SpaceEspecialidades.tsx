import React from "react";
import SectionHeaderBanner from "../SectionHeaderBanner";
import { Shield, Zap, Sparkles } from "lucide-react";
import { useI18n } from "../../i18n/context";

const ICONS = [
  <Shield key="0" className="w-5 h-5 text-[#4a8499]" />,
  <Zap key="1" className="w-5 h-5 text-[#4a8499]" />,
  <Sparkles key="2" className="w-5 h-5 text-[#4a8499]" />,
];

export default function SpaceEspecialidades() {
  const { m } = useI18n();
  const s = m.sections.especialidades;

  return (
    <div className="w-full flex flex-col space-y-0 font-sans">
      <SectionHeaderBanner
        image="/images/clinica_especialidades_banner_1779991883542.png"
        tag={s.banner.tag}
        title={s.banner.title}
        subtitle={s.banner.subtitle}
      />

      <section className="py-20 bg-[#f0eeea] px-6">
        <div className="max-w-[1140px] mx-auto space-y-16">
          <div className="min-w-0 max-w-2xl text-left space-y-4">
            <span className="font-sans text-[9px] text-[#4a8499] tracking-[0.25em] uppercase font-light">
              {s.label}
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl text-[#1a1a18] font-light tracking-[0.08em] uppercase max-w-xl">
              {s.heading}
            </h2>
            <div className="w-12 h-[0.5px] bg-[#4a8499]/25"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {s.cards.map((spec, idx) => (
              <div
                key={idx}
                className="bg-[#f0eeea] p-8 border border-black/[0.06] hover:border-[#4a8499]/30 flex flex-col justify-between space-y-8 group hover:shadow-[0_10px_30px_rgba(94,154,171,0.02)] transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#5c5954] font-light tracking-widest">
                      {spec.num} // SPEC
                    </span>
                    <div className="p-2.5 bg-white border border-black/[0.06] rounded-sm">
                      {ICONS[idx]}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-sans text-lg text-[#1a1a18] font-light uppercase tracking-wider group-hover:text-[#4a8499] transition-colors duration-200">
                      {spec.title}
                    </h3>
                    <p className="font-mono text-[10px] text-[#4a8499] uppercase tracking-wider font-normal">
                      {spec.headline}
                    </p>
                    <p className="font-sans text-xs text-[#5c5954] leading-relaxed font-light">
                      {spec.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-black/[0.06] space-y-3.5">
                  <span className="font-sans text-[8.5px] text-[#7a7670] tracking-widest uppercase font-light block">
                    {s.proceduresLabel}
                  </span>
                  <ul className="space-y-2 text-[11px] text-[#5c5954] font-light">
                    {spec.items.map((subItem, sIdx) => (
                      <li key={sIdx} className="flex gap-2">
                        <span className="text-[#4a8499] font-serif">•</span>
                        <span>{subItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
