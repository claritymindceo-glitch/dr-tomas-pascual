import React from "react";
import SectionHeaderBanner from "../SectionHeaderBanner";
import { MapPin, Phone, Clock } from "lucide-react";

export default function SpaceSedes() {
  return (
    <div className="w-full flex flex-col space-y-0 font-sans">
      <SectionHeaderBanner
        image="/images/sedes_recepcion_banner_1779991938852.png"
        tag="ACCESO Y TURNOS"
        title="SEDES DE ATENCIÓN DIRECTA"
        subtitle="Consultorios acreditados en Barrio Norte, San Isidro y centros autorizados de alta complejidad diagnóstica"
      />

      {/* Sedes List */}
      <section className="py-16 bg-[#f0eeea] px-6">
        <div className="max-w-[1140px] mx-auto space-y-12">
          
          <div className="text-left space-y-4 max-w-xl">
            <span className="font-mono text-xs text-[#4a8499] uppercase tracking-widest block font-light">
              NUESTRAS SEDES CLÍNICAS
            </span>
            <h2 className="text-2xl sm:text-3xl text-[#1a1a18] font-light tracking-[0.08em] uppercase">
              Consultorios de primer nivel
            </h2>
            <div className="w-12 h-[0.5px] bg-[#4a8499]/25"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-[#f0eeea] p-8 border border-black/[0.06] space-y-6">
              <div className="flex justify-between items-start">
                <MapPin className="w-6 h-6 text-[#4a8499]" />
                <span className="font-mono text-[9px] text-[#5c5954] uppercase tracking-widest">Recoleta</span>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-light text-[#1a1a18] uppercase tracking-wider">Himan Recoleta</h3>
                <p className="text-xs text-[#5c5954] font-light leading-relaxed">
                  Arenales 1680, Barrio Norte, CABA. Equipado con la última tecnología de radiofrecuencia y transductores piezoeléctricos.
                </p>
              </div>
              <ul className="text-[11px] text-[#5c5954] font-light space-y-2 pt-4 border-t border-black/[0.06]">
                <li className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-[#4a8499]/75" /> <strong>Tel:</strong> +54 (11) 4812-7000</li>
                <li className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-[#4a8499]/75" /> Lunes a Viernes 8:00 - 19:00</li>
              </ul>
            </div>

            <div className="bg-[#f0eeea] p-8 border border-black/[0.06] space-y-6">
              <div className="flex justify-between items-start">
                <MapPin className="w-6 h-6 text-[#4a8499]" />
                <span className="font-mono text-[9px] text-[#5c5954] uppercase tracking-widest">San Isidro</span>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-light text-[#1a1a18] uppercase tracking-wider">Himan San Isidro</h3>
                <p className="text-xs text-[#5c5954] font-light leading-relaxed">
                  Av. del Libertador 14500, San Isidro, Provincia de Buenos Aires. Centro insignia enfocado al deportista federado.
                </p>
              </div>
              <ul className="text-[11px] text-[#5c5954] font-light space-y-2 pt-4 border-t border-black/[0.06]">
                <li className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-[#4a8499]/75" /> <strong>Tel:</strong> +54 (11) 4747-8000</li>
                <li className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-[#4a8499]/75" /> Lunes a Sábados 8:00 - 13:00</li>
              </ul>
            </div>

            <div className="bg-[#f0eeea] p-8 border border-black/[0.06] space-y-6">
              <div className="flex justify-between items-start">
                <MapPin className="w-6 h-6 text-[#4a8499]" />
                <span className="font-mono text-[9px] text-[#5c5954] uppercase tracking-widest">Diagnóstico</span>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-light text-[#1a1a18] uppercase tracking-wider">IMAXE Diagnóstico</h3>
                <p className="text-xs text-[#5c5954] font-light leading-relaxed">
                  Pellegrini 1250, CABA. Red líder de alta competencia y centro de derivaciones para resonancias complejas UAR.
                </p>
              </div>
              <ul className="text-[11px] text-[#5c5954] font-light space-y-2 pt-4 border-t border-black/[0.06]">
                <li className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-[#4a8499]/75" /> <strong>Tel:</strong> +54 (11) 4310-9100</li>
                <li className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-[#4a8499]/75" /> Guardia Médica MSK 24 Horas</li>
              </ul>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
