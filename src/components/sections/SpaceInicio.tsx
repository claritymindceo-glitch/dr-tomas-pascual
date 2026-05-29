import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SpaceInicioProps {
  socialProofVisible: boolean;
}

export default function SpaceInicio({ socialProofVisible }: SpaceInicioProps) {
  const [headerActiveSlide, setHeaderActiveSlide] = useState(0);
  const [headerSliderHovered, setHeaderSliderHovered] = useState(false);

  useEffect(() => {
    if (headerSliderHovered) return;
    const interval = setInterval(() => {
      setHeaderActiveSlide((prev) => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(interval);
  }, [headerSliderHovered]);

  const slides = [
    {
      image: "/images/rugby_biomedical_banner_1779988401944.png",
      title: "COBERTURA BIOMÉDICA OFICIAL",
      subtitle: "Diagnóstico por Imágenes en el Campo con Los Pumas",
      description: "Evaluaciones ecográficas dinámicas instantáneas y caracterización de microlesiones musculares de urgencia durante entrenamientos de alta competencia.",
      tag: "LOS PUMAS U.A.R"
    },
    {
      image: "/images/musculoskeletal_ultrasound_1779988420746.png",
      title: "ECOGRAFÍA DINÁMICA MUSCULOESQUELÉTICA",
      subtitle: "Exploración Funcional Avanzada en Tiempo Real",
      description: "Visualización interactiva milimétrica de rangos de contracción muscular, deslizamiento tendinoso y puntos de fricción mediante transductores de alta densidad de radiofrecuencia.",
      tag: "DIAGNÓSTICO ALTA RESOLUCIÓN"
    },
    {
      image: "/images/ultrasound_guided_injection_1779988437432.png",
      title: "INTERVENCIONISMO ECOGUIADO MSK",
      subtitle: "Infiltraciones y Bloqueos Facetarios de Precisión",
      description: "Infiltraciones dirigidas milimétricamente bajo guía ecográfica directa con Plasma Rico en Plaquetas (PRP) y terapias biológicas regeneradoras de colágeno.",
      tag: "TERAPIAS BIOLÓGICAS DE ALTA GAMA"
    },
    {
      image: "/images/biomechanics_athlete_recovery_1779988453921.png",
      title: "BIOMECÁNICA & RECUPERACIÓN DEPORTIVA",
      subtitle: "Protocolo Científico de Alta de Juego (Return to Play)",
      description: "Estudios comparativos bilaterales biológicos precisos para determinar el momento exacto para la restitución segura de los vectores de fuerza muscular.",
      tag: "ALTO RENDIMIENTO"
    }
  ];

  const activeSlide = slides[headerActiveSlide];

  return (
    <div className="w-full flex flex-col space-y-0 font-sans">
      {/* Slider — solo imagen, sin texto encima */}
      <section
        className="w-full bg-[#e8e6e1] border-b border-black/[0.06] relative overflow-hidden group/slider h-[240px] sm:h-[300px] md:h-[360px] lg:h-[420px]"
        onMouseEnter={() => setHeaderSliderHovered(true)}
        onMouseLeave={() => setHeaderSliderHovered(false)}
      >
        {slides.map((slide, idx) => {
          const isActive = idx === headerActiveSlide;
          return (
            <div
              key={idx}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <img
                src={slide.image}
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
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
        </button>

        <button
          onClick={() => setHeaderActiveSlide((prev) => (prev + 1) % 4)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white text-[#1a1a18] border border-black/[0.08] hover:border-[#4a8499]/40 flex items-center justify-center transition-all duration-300 md:opacity-0 md:group-hover/slider:opacity-100 cursor-pointer shadow-sm"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </section>

      {/* Caption del slide activo — debajo de la imagen */}
      <section className="bg-[#f0eeea] border-b border-black/[0.06] px-6 sm:px-12 md:px-20 py-8">
        <div className="max-w-[1140px] mx-auto space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-[8.5px] sm:text-[9.5px] bg-[#4a8499]/10 border border-[#4a8499]/25 text-[#4a8499] tracking-[0.25em] font-normal px-2.5 py-1 uppercase rounded-sm">
                {activeSlide.tag}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-mono text-[8px] sm:text-[9px] text-[#7a7670] uppercase tracking-widest font-light">
                SLIDE {headerActiveSlide + 1} / 4
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
                  aria-label={`Go to slide ${slideIdx + 1}`}
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

      {/* Social Proof bar section */}
      <section id="social-proof" className="bg-[#e8e6e1] py-6 border-b border-[#4a8499]/18 z-20 relative">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-y-4 gap-x-2">
            {[
              "RSNA",
              "ECR",
              "Radiographics",
              "JBJS",
              "Los Pumas",
              "AFA",
              "ATOBA"
            ].map((inst, index, arr) => (
              <React.Fragment key={inst}>
                <span
                  className="font-sans text-[10px] font-light uppercase tracking-[0.2em] hover:text-[#4a8499] transform transition-all duration-700 reveal-item text-[#1a1a18]"
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

      {/* Welcome Card & Swiping Guide */}
      <section className="bg-[#f0eeea] py-20 border-b border-black/[0.06] z-20 relative px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="w-8 h-[0.5px] bg-[#4a8499]/30 mx-auto"></div>
          <h2 className="font-sans text-2xl sm:text-3xl text-[#1a1a18] font-light tracking-[0.1em] uppercase">
            Plataforma Digital de Vanguardia MSK
          </h2>
          <p className="font-sans text-[#5c5954] text-xs sm:text-sm leading-relaxed font-light">
            Bienvenido al portal oficial de diagnóstico por imágenes de alta competencia del <strong className="text-[#1a1a18] font-medium">Dr. Tomás Pascual</strong> (Consultor Médico de Los Pumas U.A.R. y galardonado RSNA Cum Laude).
          </p>
          <p className="font-sans text-[#5c5954] text-xs sm:text-sm leading-relaxed font-light">
            Nuestra web utiliza una interfaz inmersiva de <strong className="text-[#1a1a18] font-medium">Espacios Horizontales</strong> diseñada para deslizarse fluidamente a la derecha de sección en sección. Utilizá los controles táctiles de paginación del margen inferior, hacé clic en las pestañas del menú superior, o simplemente <strong className="text-[#1a1a18] font-medium">presioná las flechas izquierda y derecha de tu teclado</strong> para experimentar transiciones nativas Mac Space.
          </p>
          <div className="inline-flex items-center gap-3 bg-white border border-black/[0.08] px-6 py-3 text-xs tracking-wider uppercase text-[#4a8499] font-light shadow-sm mt-4">
            <span>Presioná flecha Derecha del teclado para deslizar</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </section>
    </div>
  );
}
