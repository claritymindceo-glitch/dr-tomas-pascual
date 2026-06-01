import React from "react";
import SectionHeaderBanner from "../SectionHeaderBanner";
import { useI18n } from "../../i18n/context";

export default function SpaceEnfoque() {
  const { m } = useI18n();
  const s = m.sections.enfoque;

  return (
    <div className="w-full flex flex-col space-y-0 font-sans">
      <SectionHeaderBanner
        image="/images/musculoskeletal_ultrasound_1779988420746.png"
        tag={s.banner.tag}
        title={s.banner.title}
        subtitle={s.banner.subtitle}
      />

      <section className="bg-[#e8e6e1] py-20 border-b border-[#4a8499]/18 z-20 relative px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="w-10 h-[0.5px] bg-[#4a8499]/25 mx-auto"></div>
          <blockquote className="font-sans text-2xl sm:text-3xl lg:text-[38px] font-light text-[#1a1a18] leading-snug tracking-wide max-w-3xl mx-auto">
            {s.quote}
          </blockquote>
          <p className="font-sans text-[11px] uppercase tracking-[3.5px] text-[#7a7670] font-light">
            {s.subheading}
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#f0eeea] px-6">
        <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {s.cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white p-8 border border-black/[0.06] space-y-4 hover:border-[#4a8499]/20 transition-all duration-300"
            >
              <span className="font-mono text-xs text-[#4a8499] tracking-widest uppercase">
                {card.num}
              </span>
              <h3 className="text-lg font-light text-[#1a1a18] uppercase tracking-wider">
                {card.title}
              </h3>
              <p className="text-xs text-[#5c5954] leading-relaxed font-light">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
