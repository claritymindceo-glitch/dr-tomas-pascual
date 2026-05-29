// Complete curriculum and interactive data for Dr. Tomás Agustín Pascual
export interface Position {
  period: string;
  title: string;
  institution: string;
  details?: string[];
}

export interface AcademicPaper {
  authors: string;
  title: string;
  journal: string;
  year: string;
  citation: string;
  highlight?: string;
}

export interface Webinar {
  title: string;
  course: string;
  year: string;
}

export const CURRENT_POSITIONS: Position[] = [
  {
    period: "2018 - Presente",
    title: "Médico Consultor en Radiología (Especialista en Músculo-Esquelético)",
    institution: "Selección Nacional Argentina de Rugby (Los Pumas)",
    details: [
      "Diagnóstico inmediato a pie de campo e interpretación de resonancias y ecografías de alta resolución de atletas de élite mundial.",
      "Definición de algoritmos de retorno al juego (Return to Play) basados en cicatrización tisular."
    ]
  },
  {
    period: "2017 - Presente",
    title: "Miembro de Comisión Directiva",
    institution: "Asociación Argentina de Terapias Biológicas (ATOBA)",
    details: [
      "Desarrollo e investigación en medicina regenerativa guiada por imágenes para lesiones tendinosas y articulares complejas de deportistas."
    ]
  },
  {
    period: "2016 - Presente",
    title: "Médico de Planta y Coordinador del Servicio de Resonancia y Ecografía",
    institution: "Himan Centro de Diagnóstico (Buenos Aires)",
    details: [
      "Líder en estudios dinámicos de aparato locomotor y procedimientos intervencionistas interválicos.",
      "Artro-RM, Artro-TC e infiltraciones de precisión eco-guiadas."
    ]
  },
  {
    period: "2018 - Presente",
    title: "Especialista en Diagnóstico en Deporte de Alto Rendimiento",
    institution: "IMAXE Centro de Diagnóstico (Buenos Aires)",
    details: [
      "Unidad de imágenes especializada en trauma deportivo junto al Dr. Alejandro Rolón."
    ]
  },
  {
    period: "2023 - Presente",
    title: "Profesor Adjunto / Orador Académico",
    institution: "Universidad Favaloro (Diplomatura en Medicina Deportiva Infantil)",
    details: [
      "Docencia avanzada sobre la particularidad de las avulsiones y fisis de crecimiento en deportistas en desarrollo."
    ]
  }
];

export const PREVIOUS_POSITIONS: Position[] = [
  {
    period: "2014 - 2017",
    title: "Médico de Planta (RM, TC y Ecografía osteoarticular)",
    institution: "TCVA Centro de Diagnóstico (Buenos Aires)",
    details: ["Procedimientos intervencionistas diagnósticos articulares avanzados."]
  },
  {
    period: "2010 - 2011",
    title: "Residente de Cirugía General de Primer Año",
    institution: "Hospital General de Agudos 'Petrona V. de Cordero' (San Fernando)",
    details: ["Sólida base anatómica quirúrgica de urgencia."]
  },
  {
    period: "2004 - 2010",
    title: "Ayudante de Cátedra de Anatomía",
    institution: "Facultad de Medicina, Universidad de Buenos Aires (UBA)",
    details: ["Disector senior en el curso oficial de disección y docencia técnica."]
  }
];

export const EDUCATION_MILESTONES: Position[] = [
  {
    period: "2015",
    title: "Especialista Universitario en Diagnóstico por Imágenes",
    institution: "Universidad de Buenos Aires (UBA) & S.A.R. (Sociedad Argentina de Radiología)",
    details: ["Promedio sobresaliente y formación integral homologada en Europa."]
  },
  {
    period: "2011 - 2015",
    title: "Residencia Completa en Diagnóstico por Imágenes",
    institution: "Centro de Diagnóstico TCVA",
    details: ["Director de Residencia: Dr. Francisco Eletta."]
  },
  {
    period: "2010",
    title: "Médico Graduado con Diploma y Promedio Sobresaliente",
    institution: "Facultad de Medicina, Universidad de Buenos Aires (UBA)",
    details: ["Promedio de Carrera: 8.91/10 (Cofre de Oro de rendimiento académico)."]
  },
  {
    period: "2001",
    title: "Estudios Secundarios",
    institution: "La Salle Florida (Buenos Aires)",
  }
];

export const RECOGNITIONS_ABROAD: Position[] = [
  {
    period: "2024",
    title: "Homologación de Título de Especialista en Radiodiagnóstico en España",
    institution: "Ministerio de Sanidad, Gobierno de España",
    details: ["Habilitación plena de Práctica Médica Especializada en la Unión Europea."]
  },
  {
    period: "2013",
    title: "Reconocimiento y Homologación de Título de Médico en España",
    institution: "Ministerio de Educación, Gobierno de España",
  }
];

export const ACADEMIC_FELLOWSHIPS: Position[] = [
  {
    period: "2015 - 2016",
    title: "Fellowship en Diagnóstico por Imágenes de Traumatismos y Lesiones Deportivas",
    institution: "IMAXE Centro de Diagnóstico (Buenos Aires)",
    details: ["Mentoría directa del Dr. Alejandro Rolón.", "Enfoque clínico intensivo en deportistas de alto rendimiento (fútbol, rugby, tenis y hockey)."]
  }
];

export const RSNA_HONORS: Position[] = [
  {
    period: "Noviembre 2024",
    title: "Magna Cum Laude Award - Presentador Científico",
    institution: "Radiological Society of North America (RSNA), Chicago, EE.UU.",
    details: ["Premio máximo a la excelencia por el trabajo: 'Adductor Muscle Complex Sport Injuries: What, How, Why, and Where.'"]
  },
  {
    period: "Noviembre 2023",
    title: "Certificate of Merit Award - Presentador Científico",
    institution: "Radiological Society of North America (RSNA), Chicago, EE.UU.",
    details: ["Reconocimiento destacado por la publicación: 'Hamstring Sport Injuries: What, How, Why, and Where.'"]
  }
];

export const ACADEMIC_PAPERS: AcademicPaper[] = [
  {
    authors: "Marrero, A., Mazza, L., Cédola, N., & Pascual, T.",
    title: "Hamstring Sports Injuries: What, How, When and Where.",
    journal: "Radiographics",
    year: "2024",
    citation: "Submitted / En prensa. MS ID RG-24-0061",
    highlight: "Análisis sistemático de las zonas propensas a re-desgarro en isquiotibiales en el draf de rugbiers."
  },
  {
    authors: "Farivar, D., Pascual, T. A., Hevesi, M., & Chahla, J.",
    title: "Measuring Technique for Meniscal Extrusion Using Ultrasound in the Setting of Posterior Medial Meniscal Root Tears.",
    journal: "Arthroscopy Techniques",
    year: "2024",
    citation: "Jan 30;13(4):102916. doi: 10.1016/j.eats.2024.102916. PMID: 38690345",
    highlight: "Técnica ecográfica ecodirigida dinámica innovadora en consultorio para evaluar comportamiento meniscal en carga."
  },
  {
    authors: "Sugrañes, J., Jackson, G. R., Mameri, E. S., Pascual, T. A., & Chahla, J.",
    title: "Current Concepts in Patellar Tendinopathy: An Overview of Imaging, Pathogenesis, and Nonoperative and Operative Management.",
    journal: "Journal of Bone and Joint Surgery (JBJS)",
    year: "2023",
    citation: "Aug 17;11(8). https://doi.org/10.2106/JBJS.RVW.23.00076. PMID: 37590404",
    highlight: "Revisión sistemática de vanguardia del tendón patelar (el salto) y terapias regenerativas."
  },
  {
    authors: "Siedi, A.F., Rolón, A.U., Bernard, N., Bernasconi, J., Palmas, M., Couto, D.A., Pascual, T.A.",
    title: "Posterior Leg Pain: Understanding Soleus Muscle Injuries.",
    journal: "Radiographics",
    year: "2022",
    citation: "May-Jun;42(3):778-788. doi: 10.1148/rg.210133. PMID: 35427175",
    highlight: "El trabajo consagrado de referencia mundial para la clasificación de desgarros del tabique intramuscular del sóleo."
  },
  {
    authors: "Santilli, O., Ostolaza, M., Santilli, H., Nardelli, N., Etchepare, H., Rolón, A., Pascual, T.",
    title: "Chronic Groin Pain in Young Sportsmen: Algorithm of Assessment and Treatment.",
    journal: "International Journal of Abdominal Wall and Hernia Surgery",
    year: "2021",
    citation: "4(3):109-116. doi: 10.4103/ijawhs.ijawhs_30_21",
    highlight: "Algoritmo diagnóstico dinámico integral de la pubalgia para el retorno deportivo."
  }
];

export interface DiagnosticCase {
  id: string;
  name: string;
  paperRef: string;
  anatomy: string;
  description: string;
  mriInstructions: string;
  usInstructions: string;
  coordinates: { x: number; y: number; label: string }[];
  clinicalTip: string;
  imageUrl: string; // Placeholder or we render an elegant interactive SVG-canvas simulation
}

export const DIAGNOSTIC_CASES: DiagnosticCase[] = [
  {
    id: "soleo",
    name: "Lesiones del Sóleo (Posterior Leg)",
    paperRef: "Radiographics 2022",
    anatomy: "Sóleo (Tabique Confluente Aponeurótico)",
    description: "Evaluación ecográfica dinámica de las inserciones centrales. Clave para evitar el dolor deportivo difuso reincidente en corredores de fondo y deportistas de alto contacto.",
    mriInstructions: "En T2/STIR ponderado observe la hipersensibilidad de la aponeurosis central y los focos inflamatorios desorganizados periféricos.",
    usInstructions: "La ecografía en tiempo real con contracción isométrica del pie revela la desorganización de fibras musculares y pérdida de patrón peniforme.",
    coordinates: [
      { x: 50, y: 72, label: "Inserción Miofascial Interna" },
      { x: 48, y: 38, label: "Tabique de Confluencia Sóleo-Gemelo" }
    ],
    clinicalTip: "La ecografía dinámica supera a la RM estática para captar las microinestabilidades del tabique sóleo central durante la flexión.",
    imageUrl: "line"
  },
  {
    id: "isquiotibiales",
    name: "Lesiones de Isquiotibiales (Hamstrings)",
    paperRef: "Radiographics 2024",
    anatomy: "Unión Miotendinosa Proximal Biceps Femoral",
    description: "Evaluación de desgarros por sobreestiramiento en sprint. Criterios de localización proximal vs distal para estimar tiempo de baja deportiva (time to return to play).",
    mriInstructions: "La secuencia coronal STIR revela disrupción de fibras con hematoma peritendinoso de señal brillante y edema en la porción de tendón común.",
    usInstructions: "En el codo y tendones isquiotibiales la atenuación de la banda fibrilar habitual indica desgarro Grado II. El área anecoica periférica delimita el hematoma.",
    coordinates: [
      { x: 32, y: 28, label: "Tendón Común Proximal" },
      { x: 68, y: 64, label: "Brecha Fibrilar" }
    ],
    clinicalTip: "Un desgarro en la unión tendón-hueso de isquiotibiales puede cronificar el reposo si no se detecta y se trata precozmente con bloqueos biológicos.",
    imageUrl: "dots"
  },
  {
    id: "menisco",
    name: "Extrusión Meniscal Dinámica",
    paperRef: "Arthroscopy Techniques 2024",
    anatomy: "Menisco Interno / Ligamento Coronario",
    description: "Medición ecográfica con carga de peso para determinar extrusión meniscal milimétrica e inestabilidad del ligamento de la raíz meniscal.",
    mriInstructions: "La RM estática suele subestimar la extrusión meniscal hasta en un 40%. La RM se complementa obligatoriamente con ecografía dinámica clinostática / ortostática.",
    usInstructions: "En corte coronal sobre línea interarticular medial, mida el margen óseo del fémur hasta la cresta meniscal con y sin apoyo total de peso.",
    coordinates: [
      { x: 38, y: 48, label: "Cresta Meniscal Externa" },
      { x: 62, y: 52, label: "Margen Condilar Femoral" }
    ],
    clinicalTip: "Una extrusión coronal medial mayor a 3mm en carga mediante ecografía dinámica confirma falla estructural del menisco interno.",
    imageUrl: "menisc"
  },
  {
    id: "rotula",
    name: "Tendinopatía Patelar Crónica",
    paperRef: "JBJS 2023",
    anatomy: "Tendón Rotuliano Proximal (Polo Inferior)",
    description: "Visualización del sobreuso de saltador (Jumper's Knee). Engrosamiento hipoecoico del polo inferior rotuliano y proliferación de neovasos inflamatorios.",
    mriInstructions: "Aumento de señal focal en T1/T2 en el tercio posterior del tendón adyacente al polo rotuliano, con desaparición del borde posterior neto.",
    usInstructions: "Doppler color de alta especificidad revela neovascularización ('neovessels') en la interfaz tendón-grasa de Hoffa infrarotuliana profunda.",
    coordinates: [
      { x: 50, y: 20, label: "Área de Hoffitis Profunda" },
      { x: 50, y: 55, label: "Neovasos / Doppler Angio" }
    ],
    clinicalTip: "Las infiltraciones de precisión eco-guiadas (bioterapias) deben colocarse exactamente en la interfaz profunda, evitando inyecciones intratendinosas.",
    imageUrl: "rotul"
  }
];

export interface PatientGuide {
  id: number;
  category: string;
  title: string;
  size: string;
}

export const PATIENT_GUIDES: PatientGuide[] = [
  {
    id: 1,
    category: "REHABILITACIÓN",
    title: "GUÍA DE RECUPERACIÓN BIOMÉDICA DEL SÓLEO",
    size: "1.4 MB"
  },
  {
    id: 2,
    category: "INTERVENCIONISMO",
    title: "PROTOCOLO DE INFILTRACIONES ECOGUIADAS CON PRP",
    size: "1.1 MB"
  },
  {
    id: 3,
    category: "PREPARACIÓN",
    title: "REQUISITOS MÁXIMOS PARA ECOGRAFÍA DINÁMICA",
    size: "0.8 MB"
  },
  {
    id: 4,
    category: "DIAGNÓSTICO",
    title: "INDICADORES CLAVE EN RESONANCIA DE ISQUIOTIBIALES",
    size: "1.5 MB"
  }
];

