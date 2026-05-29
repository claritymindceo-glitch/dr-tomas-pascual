import React from "react";
import SectionHeaderBanner from "../SectionHeaderBanner";

export default function SpaceEnfoque() {
  return (
    <div className="w-full flex flex-col space-y-0 font-sans">
      <SectionHeaderBanner
        image="/src/assets/images/musculoskeletal_ultrasound_1779988420746.png"
        tag="PRECISIÓN CLÍNICA"
        title="ENFOQUE BIOMÉDICO Y PRECISIÓN"
        subtitle="La intersección exacta entre anatomía de alto impacto deportivo y ecografía estructural en tiempo real"
      />

      {/* SECTION 3 — STATEMENT (full width, centered, high contrast) */}
      <section className="bg-[#e8e6e1] py-20 border-b border-[#4a8499]/18 z-20 relative px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="w-10 h-[0.5px] bg-[#4a8499]/25 mx-auto"></div>
          <blockquote className="font-sans text-2xl sm:text-3xl lg:text-[38px] font-light text-[#1a1a18] leading-snug tracking-wide max-w-3xl mx-auto">
            “La imagen precisa. El diagnóstico que cambia el tratamiento.”
          </blockquote>
          <p className="font-sans text-[11px] uppercase tracking-[3.5px] text-[#7a7670] font-light">
            ESTUDIOS DINÁMICOS DE ALTA RESOLUCIÓN EN ATLETAS DE ALTO RENDIMIENTO
          </p>
        </div>
      </section>

      {/* Clinical Highlights breakdown */}
      <section className="py-20 bg-[#f0eeea] px-6">
        <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 border border-black/[0.06] space-y-4 hover:border-[#4a8499]/20 transition-all duration-300">
            <span className="font-mono text-xs text-[#4a8499] tracking-widest uppercase">01 / DETECCION TEMPRANA</span>
            <h3 className="text-lg font-light text-[#1a1a18] uppercase tracking-wider">ECOGRAFÍA DINÁMICA</h3>
            <p className="text-xs text-[#5c5954] leading-relaxed font-light">
              Exploración interactiva en rango completo de movimiento. Capturamos la fricción intrínseca, el microdesgarro miofascial y la inestabilidad articular bajo esfuerzo instantáneo.
            </p>
          </div>

          <div className="bg-white p-8 border border-black/[0.06] space-y-4 hover:border-[#4a8499]/20 transition-all duration-300">
            <span className="font-mono text-xs text-[#4a8499] tracking-widest uppercase">02 / TERAPIAS GUIADAS</span>
            <h3 className="text-lg font-light text-[#1a1a18] uppercase tracking-wider">INTERVENCIONISMO DE PRECISIÓN</h3>
            <p className="text-xs text-[#5c5954] leading-relaxed font-light">
              Infiltraciones milimétricas ecoguiadas. Aplicación directa de Plasma Rico en Plaquetas (PRP), corticoides selectivos y ácido hialurónico con tolerancia extrema y cero error de aguja.
            </p>
          </div>

          <div className="bg-white p-8 border border-black/[0.06] space-y-4 hover:border-[#4a8499]/20 transition-all duration-300">
            <span className="font-mono text-xs text-[#4a8499] tracking-widest uppercase">03 / CRITERIO DE RETORNO</span>
            <h3 className="text-lg font-light text-[#1a1a18] uppercase tracking-wider">RETURN TO PLAY (RTP)</h3>
            <p className="text-xs text-[#5c5954] leading-relaxed font-light">
              Certificación biológica y funcional de cicatrización tendinosa. Evaluamos la alineación de las nuevas fibras de colágeno antes de autorizar la carga biomecánica y velocidad máxima.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
