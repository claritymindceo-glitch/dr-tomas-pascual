import React from "react";
import SectionHeaderBanner from "../SectionHeaderBanner";
import { ACADEMIC_PAPERS } from "../../data";

export default function SpaceInvestigaciones() {
  return (
    <div className="w-full flex flex-col space-y-0 font-sans">
      <SectionHeaderBanner
        image="/src/assets/images/investigaciones_academic_banner_1779991903362.png"
        tag="VANGUARDIA CIENTÍFICA"
        title="INVESTIGACIONES Y PREMIACIÓN RSNA"
        subtitle="Publicaciones médicas indexadas, tratados de referencia internacional sobre lesiones musculofasciales y galardones de la Sociedad Radiológica de Norteamérica"
      />

      <section className="py-20 bg-[#f0eeea] px-6">
        <div className="max-w-[1140px] mx-auto space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left side: narrative of honors and UBA legacy */}
            <div className="lg:col-span-4 space-y-8">
              <div className="space-y-4">
                <span className="font-sans text-[9px] text-[#4a8499] tracking-[0.25em] uppercase font-light">
                  CIENCIA DE PRIMERA LÍNEA
                </span>
                <h2 className="font-sans text-2xl sm:text-3xl text-[#1a1a18] font-light tracking-[0.08em] uppercase leading-tight">
                  Investigación aplicada al campo de juego
                </h2>
                <div className="w-12 h-[0.5px] bg-[#4a8499]/25"></div>
              </div>

              <p className="font-sans text-xs sm:text-sm text-[#5c5954] leading-relaxed font-light">
                La labor científica del Dr. Tomás Pascual se centra en la descripción anatómica fina mediante ecografía de alta densidad y resonancia magnética. Sus descripciones sobre el complejo suspensorio del aductor largo y las variantes anatómicas del músculo sóleo han recibido los máximos elogios en congresos globales.
              </p>

              <div className="bg-white p-6 border border-black/[0.06] space-y-4">
                <span className="font-mono text-[9px] text-[#dbbf6e] tracking-widest uppercase">RECONOCIMIENTOS CLAVE:</span>
                <ul className="space-y-3.5 text-xs text-[#5c5954] font-light">
                  <li>
                    <strong className="text-[#1a1a18]">RSNA Magna Cum Laude</strong> — Chicago, 2023. Otorgado por el estudio de caracterización ecográfica de las lesiones de la unión miotendinosa.
                  </li>
                  <li>
                    <strong className="text-[#1a1a18]">RSNA Certificate of Merit</strong> — Chicago, 2024. Otorgado por la descripción anatómica tridimensional de las poleas retinaculares de tobillo.
                  </li>
                  <li>
                    <strong className="text-[#1a1a18]">Diploma de Honor UBA</strong> — Promedio general académico destacado de graduación en la escuela médica insignia de Argentina.
                  </li>
                </ul>
              </div>
            </div>

            {/* Right side: Detailed publications list */}
            <div className="lg:col-span-8 space-y-6">
              <span className="font-sans text-[9px] text-[#5c5954] tracking-widest uppercase font-light block pl-1">
                TRATADOS CIENTÍFICOS PUBLICADOS EN REVISTAS INDEXADAS:
              </span>

              <div className="grid grid-cols-1 gap-4">
                {ACADEMIC_PAPERS.map((paper, idx) => (
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
                      {paper.highlight || "Estudio en profundidad que analiza la correlación de datos de imagen dinámicos frente a los hallazgos en cirugía artroscópica abierta para optimizar la toma de decisiones clínicas."}
                    </p>

                    <div className="pt-3 border-t border-black/[0.06] flex flex-wrap gap-x-6 gap-y-2 text-[10.5px] text-[#4a8499]/80 font-mono font-light">
                      <span>AUTORES: {paper.authors || "Pascual TA, et al."}</span>
                      <span>• CITACIÓN: {paper.citation || "10.1148/rg.2023.msk02"}</span>
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
