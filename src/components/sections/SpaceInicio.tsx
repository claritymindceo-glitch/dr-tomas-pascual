import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { formatMessage, useI18n } from "../../i18n/context";

interface SpaceInicioProps {
  socialProofVisible: boolean;
}

const SOCIAL_PROOF = ["RSNA", "ECR", "Radiographics", "JBJS", "Los Pumas", "AFA", "ATOBA"];

export default function SpaceInicio({ socialProofVisible }: SpaceInicioProps) {
  const { m } = useI18n();
  const s = m.sections.inicio;
  const [headerActiveSlide, setHeaderActiveSlide] = useState(0);
  const [headerSliderHovered, setHeaderSliderHovered] = useState(false);

  useEffect(() => {
    if (headerSliderHovered) return;
    const interval = setInterval(() => {
      setHeaderActiveSlide((prev) => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(interval);
  }, [headerSliderHovered]);

  const activeSlide = s.slides[headerActiveSlide];

  return (
    <div className="w-full flex flex-col space-y-0 font-sans">
      <section
        className="w-full bg-[#e8e6e1] border-b border-black/[0.06] relative overflow-hidden group/slider h-[240px] sm:h-[300px] md:h-[360px] lg:h-[420px]"
        onMouseEnter={() => setHeaderSliderHovered(true)}
        onMouseLeave={() => setHeaderSliderHovered(false)}
      >
        {s.slides.map((slide, idx) => {
          const isActive = idx === headerActiveSlide;
          return (
            <div
              key={idx}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <img
                src={
                  [
                    "/images/rugby_biomedical_banner_1779988401944.png",
                    "/images/musculoskeletal_ultrasound_1779988420746.png",
                    "/images/ultrasound_guided_injection_1779988437432.png",
                    "/images/biomechanics_athlete_recovery_1779988453921.png",
                  ][idx]
                }
                alt={slide.title}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover transition-transform duration-[4600ms] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              />
            </div>
          );
        })}

        <button
          onClick={() => setHeaderActiveSlide((prev) => (prev === 0 ? 3 : prev - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white text-[#1a1a18] border border-black/[0.08] hover:border-[#4a8499]/40 flex items-center justify-center transition-all duration-300 md:opacity-0 md:group-hover/slider:opacity-100 cursor-pointer shadow-sm"
          aria-label={s.prevSlide}
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
        </button>

        <button
          onClick={() => setHeaderActiveSlide((prev) => (prev + 1) % 4)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white text-[#1a1a18] border border-black/[0.08] hover:border-[#4a8499]/40 flex items-center justify-center transition-all duration-300 md:opacity-0 md:group-hover/slider:opacity-100 cursor-pointer shadow-sm"
          aria-label={s.nextSlide}
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </section>

      <section className="bg-[#f0eeea] border-b border-black/[0.06] px-4 sm:px-12 md:px-20 py-6 sm:py-8">
        <div className="max-w-[1140px] mx-auto space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-[8.5px] sm:text-[9.5px] bg-[#4a8499]/10 border border-[#4a8499]/25 text-[#4a8499] tracking-[0.25em] font-normal px-2.5 py-1 uppercase rounded-sm">
                {activeSlide.tag}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-mono text-[8px] sm:text-[9px] text-[#7a7670] uppercase tracking-widest font-light">
                {formatMessage(s.slideLabel, { n: headerActiveSlide + 1 })}
              </span>
            </div>

            <div className="flex gap-2.5">
              {[0, 1, 2, 3].map((slideIdx) => (
                <button
                  key={slideIdx}
                  onClick={() => setHeaderActiveSlide(slideIdx)}
                  className={`h-1 transition-all duration-300 rounded-full cursor-pointer ${
                    headerActiveSlide === slideIdx
                      ? "w-8 bg-[#4a8499]"
                      : "w-2 bg-black/15 hover:bg-black/25"
                  }`}
                  aria-label={formatMessage(s.goToSlide, { n: slideIdx + 1 })}
                />
              ))}
            </div>
          </div>

          <div className="space-y-2.5 sm:space-y-3 text-left">
            <h3 className="font-sans text-lg sm:text-2xl md:text-3xl text-[#1a1a18] font-light tracking-[0.08em] uppercase leading-tight max-w-2xl">
              {activeSlide.title}
            </h3>
            <p className="font-sans text-[#4a8499] text-xs sm:text-sm font-light tracking-wide max-w-xl">
              {activeSlide.subtitle}
            </p>
            <p className="font-sans text-[#5c5954] text-[10.5px] sm:text-[11px] font-light leading-relaxed max-w-2xl">
              {activeSlide.description}
            </p>
          </div>
        </div>
      </section>

      <section id="social-proof" className="bg-[#e8e6e1] py-6 border-b border-[#4a8499]/18 z-20 relative">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-y-4 gap-x-2">
            {SOCIAL_PROOF.map((inst, index, arr) => (
              <React.Fragment key={inst}>
                <span
                  className={`font-sans text-[10px] font-light uppercase tracking-[0.2em] hover:text-[#4a8499] transform transition-all duration-700 reveal-item text-[#1a1a18] ${
                    socialProofVisible ? "" : ""
                  }`}
                >
                  {inst}
                </span>
                {index < arr.length - 1 && (
                  <span className="hidden md:inline text-[#d0cdc6] text-xs select-none">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f0eeea] py-20 border-b border-black/[0.06] z-20 relative px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="w-8 h-[0.5px] bg-[#4a8499]/30 mx-auto"></div>
          <h2 className="font-sans text-2xl sm:text-3xl text-[#1a1a18] font-light tracking-[0.1em] uppercase">
            {s.welcomeTitle}
          </h2>
          <p className="font-sans text-[#5c5954] text-xs sm:text-sm leading-relaxed font-light">
            {s.welcomeP1}
          </p>
          <p className="font-sans text-[#5c5954] text-xs sm:text-sm leading-relaxed font-light">
            {s.welcomeP2}
          </p>
          <div className="inline-flex items-center gap-3 bg-white border border-black/[0.08] px-6 py-3 text-xs tracking-wider uppercase text-[#4a8499] font-light shadow-sm mt-4">
            <span>{s.keyboardHint}</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </section>
    </div>
  );
}
