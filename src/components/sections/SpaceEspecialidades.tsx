import React from "react";
import SectionHeaderBanner from "../SectionHeaderBanner";
import { Shield, Zap, Sparkles } from "lucide-react";

export default function SpaceEspecialidades() {
  const specialtiesList = [
    {
      num: "01",
      title: "Radiología y Diagnóstico MSK de Alta Competencia",
      headline: "Evaluación Estructural de Estructuras Complejas",
      description: "Interpretación especializada de resonancia magnética nuclear de alto campo (3T) enfocada en microdesgarros musculotendinosos, entesopatías de difícil caracterización y hernias fasciales de deportistas de élite.",
      items: [
        "Caracterización avanzada de lesiones del manguito rotador y labrum articular",
        "Mapeo de alta resolución para lesiones miotendinosas de Isquiotibiales y Gemelos",
        "Análisis estructural del cartílago hialino y microfracturas subcondrales"
      ],
      icon: <Shield className="w-5 h-5 text-[#4a8499]" />
    },
    {
      num: "02",
      title: "Ecografía Dinámica e Interactiva de Vanguardia",
      headline: "Exploración Funcional Avanzada en Tiempo Real",
      description: "Visualización activa y bilateral milimétrica de rangos de flexión-extensión, deslizamientos de vainas sinoviales y zonas de pinzamiento mecánico o fricción ligamentaria extrínseca.",
      items: [
        "Estudios ecográficos dinámicos bilaterales comparativos",
        "Seguimiento biomecánico de la alineación de fibras de colágeno cicatrizal",
        "Evaluación estructural interactiva para tendón rotuliano, Aquiles y fascia plantar"
      ],
      icon: <Zap className="w-5 h-5 text-[#4a8499]" />
    },
    {
      num: "03",
      title: "Intervencionismo Ecoguiado de Máxima Precisión",
      headline: "Terapias Biológicas y Bloqueos de Enfoque regenerativo",
      description: "Procedimientos ambulatorios ecoguiados con precisión de aguja micrómetra, permitiendo depositar factores de crecimiento o fármacos directamente en el epicentro de la lesión sin agredir tejidos sanos.",
      items: [
        "Infiltraciones guiadas con Plasma Rico en Plaquetas (PRP) y terapias biológicas",
        "Lavados de calcificaciones tendinosas mediante técnica de barbotaje dirigida",
        "Bloqueos facetarios lumbares y selectivos periféricos por dolor deportivo"
      ],
      icon: <Sparkles className="w-5 h-5 text-[#4a8499]" />
    }
  ];

  return (
    <div className="w-full flex flex-col space-y-0 font-sans">
      <SectionHeaderBanner
        image="/src/assets/images/clinica_especialidades_banner_1779991883542.png"
        tag="ATENCIÓN INTEGRAL"
        title="ESPECIALIDADES DE ALTA COMPETENCIA"
        subtitle="Cuidado clínico de élite para optimizar los procesos de cicatrización y acelerar el retorno al juego"
      />

      <section className="py-20 bg-[#f0eeea] px-6">
        <div className="max-w-[1140px] mx-auto space-y-16">
          
          <div className="min-w-0 max-w-2xl text-left space-y-4">
            <span className="font-sans text-[9px] text-[#4a8499] tracking-[0.25em] uppercase font-light">
              NUESTRAS CAPACIDADES CLÍNICAS
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl text-[#1a1a18] font-light tracking-[0.08em] uppercase max-w-xl">
              Medicina de precisión aplicada al sistema músculo-esquelético
            </h2>
            <div className="w-12 h-[0.5px] bg-[#4a8499]/25"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {specialtiesList.map((spec, idx) => (
              <div 
                key={idx}
                className="bg-[#f0eeea] p-8 border border-black/[0.06] hover:border-[#4a8499]/30 flex flex-col justify-between space-y-8 group hover:shadow-[0_10px_30px_rgba(94,154,171,0.02)] transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#5c5954] font-light tracking-widest">{spec.num} // SPEC</span>
                    <div className="p-2.5 bg-white border border-black/[0.06] rounded-sm">
                      {spec.icon}
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
                    Procedimientos habituales:
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
