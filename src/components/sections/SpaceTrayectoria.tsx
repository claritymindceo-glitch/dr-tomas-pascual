import React from "react";
import SectionHeaderBanner from "../SectionHeaderBanner";
import AnimatedCounter from "../AnimatedCounter";
import {
  CURRENT_POSITIONS,
  PREVIOUS_POSITIONS,
  EDUCATION_MILESTONES,
  RECOGNITIONS_ABROAD,
  ACADEMIC_FELLOWSHIPS,
  RSNA_HONORS
} from "../../data";

export default function SpaceTrayectoria() {
  return (
    <div className="w-full flex flex-col space-y-0 font-sans">
      <SectionHeaderBanner
        image="/images/doctor_trayectoria_banner_1779991863863.png"
        tag="PERFIL ACADÉMICO"
        title="TRAYECTORIA ACADÉMICA Y CLÍNICA"
        subtitle="Diploma de Honor UBA, disector sénior galardonado RSNA Magna Cum Laude y líder de consultorías de élite"
      />

      {/* SECTION 4 — ABOUT + STATS */}
      <section id="about" className="py-16 bg-[#f0eeea] px-6 z-20 relative">
        <div className="max-w-[1140px] mx-auto">
          
          <div className="inline-flex items-center gap-2 bg-white border-t border-x border-black/[0.08] px-5 py-2 text-[8.5px] uppercase tracking-[0.2em] text-[#4a8499] z-10 relative">
            <span className="w-1.5 h-1.5 bg-[#4a8499]/50 rounded-full animate-pulse"></span>
            TRAYECTORIA CLÍNICA
          </div>

          <div className="neon-relief-card p-6 sm:p-10 md:p-12 bg-white border border-black/[0.06] relative mt-[-1px] z-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Col: Copy block + 3 Stats */}
              <div className="lg:col-span-6 space-y-12">
                <div className="space-y-6">
                  <span className="font-sans text-[9px] text-[#5c5954] tracking-widest uppercase font-light block">
                    · PERFIL PROFESIONAL ·
                  </span>
                  <h2 className="font-sans text-2xl sm:text-3xl text-[#1a1a18] tracking-[0.08em] font-light uppercase">
                    Excelencia clínica demostrable a pie de campo
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-[#5c5954] leading-relaxed font-light">
                    El Dr. Tomás Agustín Pascual se graduó en la prestigiosa Universidad de Buenos Aires (UBA) con Diploma de Honor y un Promedio Oro de carrera. Con más de un decenio interpretando la resonancia y ecografía de atletas federados de alta competición, diseña protocolos quirúrgicos y de readaptación biológica para el seleccionado argentino de rugby, Los Pumas.
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-[#5c5954] leading-relaxed font-light">
                    Su trabajo interválico abarca el control de lesiones musculotendinosas complejas (tendón rotuliano, Aquiles, sóleo) coordinado en centros líderes como Himan e Imaxe Diagnóstico.
                  </p>
                </div>

                {/* 3 Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-[#4a8499]/18">
                  <div>
                    <span className="font-sans text-2xl sm:text-3xl text-[#9a7b2e] font-light block">
                      <AnimatedCounter target={20} suffix="+" />
                    </span>
                    <span className="font-sans text-[8px] sm:text-[9px] text-[#5c5954] uppercase tracking-wider block mt-2 leading-relaxed font-light">
                      Años de Preparación Académica y Disección
                    </span>
                  </div>
                  <div>
                    <span className="font-sans text-2xl sm:text-3xl text-[#9a7b2e] font-light block">
                      <AnimatedCounter target={5} />
                    </span>
                    <span className="font-sans text-[8px] sm:text-[9px] text-[#5c5954] uppercase tracking-wider block mt-2 leading-relaxed font-light">
                      Premios Internacionales RSNA
                    </span>
                  </div>
                  <div>
                    <span className="font-sans text-2xl sm:text-3xl text-[#9a7b2e] font-light block">
                      <AnimatedCounter target={12} suffix="+" />
                    </span>
                    <span className="font-sans text-[8px] sm:text-[9px] text-[#5c5954] uppercase tracking-wider block mt-2 leading-relaxed font-light">
                      Publicaciones Científicas Indexadas
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Col: 4 credential cards */}
              <div className="lg:col-span-6 space-y-4">
                <span className="font-sans text-[9px] text-[#5c5954] tracking-widest uppercase font-light block pl-1">
                  CARGOS Y CREDENCIALES CLAVE:
                </span>
                
                <div className="bg-white p-5 border-l border-[#4a8499]/22 border-y-[0.5px] border-r-[0.5px] border-black/[0.06] space-y-1 hover:bg-[#f7f6f3] transition-all duration-300">
                  <span className="font-sans text-[8px] text-[#5c5954] uppercase tracking-wider block font-light">CONSULTOR REGULAR</span>
                  <h4 className="font-sans text-sm font-light text-[#2c2a26] uppercase tracking-wider">SELECCIÓN NACIONAL DE RUGBY (LOS PUMAS / U.A.R)</h4>
                  <p className="font-sans text-xs text-[#5c5954] font-light leading-relaxed">
                    Diagnóstico inmediato presencial de lesiones del plantel UAR para estimación científica de retorno deportivo (Return to Play).
                  </p>
                </div>

                <div className="bg-white p-5 border-l border-[#4a8499]/22 border-y-[0.5px] border-r-[0.5px] border-black/[0.06] space-y-1 hover:bg-[#f7f6f3] transition-all duration-300">
                  <span className="font-sans text-[8px] text-[#5c5954] uppercase tracking-wider block font-light">CONGRESO MUNDIAL</span>
                  <h4 className="font-sans text-sm font-light text-[#2c2a26] uppercase tracking-wider">RADIOLOGICAL SOCIETY OF NORTH AMERICA (RSNA)</h4>
                  <p className="font-sans text-xs text-[#5c5954] font-light leading-relaxed">
                    Premiado "Magna Cum Laude" en Chicago por trabajos del complejo muscular aductor e Isquiotibiales (2023 - 2024).
                  </p>
                </div>

                <div className="bg-white p-5 border-l border-[#4a8499]/22 border-y-[0.5px] border-r-[0.5px] border-black/[0.06] space-y-1 hover:bg-[#f7f6f3] transition-all duration-300">
                  <span className="font-sans text-[8px] text-[#5c5954] uppercase tracking-wider block font-light">ORGANIZACIÓN CIENTÍFICA</span>
                  <h4 className="font-sans text-sm font-light text-[#2c2a26] uppercase tracking-wider">ASOCIACIÓN DE TRAUMATOLOGÍA DEL DEPORTE (ATOBA)</h4>
                  <p className="font-sans text-xs text-[#5c5954] font-light leading-relaxed">
                    Miembro activo y disector anatómico senior colaborador para el perfeccionamiento continuo de técnicas artroscópicas.
                  </p>
                </div>

                <div className="bg-white p-5 border-l border-[#4a8499]/22 border-y-[0.5px] border-r-[0.5px] border-black/[0.06] space-y-1 hover:bg-[#f7f6f3] transition-all duration-300">
                  <span className="font-sans text-[8px] text-[#5c5954] uppercase tracking-wider block font-light">LIDER EN CENTROS CLAVE</span>
                  <h4 className="font-sans text-sm font-light text-[#2c2a26] uppercase tracking-wider">GRUPO HIMAN & IMAXE DIAGNÓSTICO</h4>
                  <p className="font-sans text-xs text-[#5c5954] font-light leading-relaxed">
                    Médico especialista líder en ecografía músculo-esquelética de alta resolución y procedimientos de intervencionismo ecoguiado.
                  </p>
                </div>
              </div>

            </div>
          </div>
          
          {/* Detailed Lists of Positions & Honors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            
            <div className="bg-white p-6 border border-black/[0.06] space-y-4">
              <h3 className="font-sans text-md text-[#9a7b2e] tracking-widest uppercase">Puestos Profesionales</h3>
              <ul className="space-y-3.5 text-xs text-[#5c5954] font-light">
                {CURRENT_POSITIONS.map((pos, idx) => (
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
              <h3 className="font-sans text-md text-[#9a7b2e] tracking-widest uppercase">Formación y Distinciones</h3>
              <ul className="space-y-3.5 text-xs text-[#5c5954] font-light">
                {EDUCATION_MILESTONES.map((pos, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-[#9a7b2e]">•</span>
                    <div>
                      <strong className="text-[#1a1a18]">{pos.title}</strong> — {pos.institution} ({pos.period})
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
