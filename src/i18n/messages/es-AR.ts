import type { Messages } from "../types";

export const esAR: Messages = {
  nav: [
    { id: 0, label: "Inicio", short: "Ini" },
    { id: 1, label: "Enfoque", short: "Enf" },
    { id: 2, label: "Trayectoria", short: "Tra" },
    { id: 3, label: "Especialidades", short: "Esp" },
    { id: 4, label: "Investigaciones", short: "Inv" },
    { id: 5, label: "Asistente", short: "Asi" },
    { id: 6, label: "Sedes", short: "Sed" },
    { id: 7, label: "Portal", short: "Por" },
  ],
  header: {
    tagline: "DIAGNÓSTICO POR IMÁGENES · ALTA COMPETENCIA",
    consult: "Consultar",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  pager: { previous: "Anterior", next: "Siguiente" },
  footer: {
    subtitle: "Imágenes Médicas · Trauma & Deporte",
    trajectory: "Trayectoria",
    botConsole: "Consola Bot",
    publications: "Publicaciones",
    locations: "Sedes",
    portal: "Portal",
    copyright: "© 2026 Dr. Tomás Agustín Pascual · Matrícula Nacional 136081",
    youtube: "Canal de YouTube del Dr. Tomás Pascual",
    instagram: "Instagram del Dr. Tomás Pascual",
    linkedin: "LinkedIn del Dr. Tomás Pascual",
    facebook: "Facebook del Dr. Tomás Pascual",
  },
  floatingChat: {
    welcome:
      "Bienvenido/a. Soy el asistente digital del Dr. Pascual. ¿En qué puedo orientarte hoy?",
    assistantName: "Dr. Pascual",
    assistantRole: "Asistente digital",
    orienting: "Orientando...",
    placeholder: "Escribí tu consulta...",
    closeChat: "Cerrar chat",
    sendMessage: "Enviar mensaje",
    openAssistant: "Abrir asistente digital",
    errorTemporary: "Disculpas, ocurrió un inconveniente temporal.",
    errorSaturation:
      "En este momento estoy experimentando una saturación temporal de consultas de guardia. Por favor, reintentá tu pregunta en un instante.",
    contactOffer: "¿Querés que te deje el contacto directo del consultorio?",
    contactOfferAlt: "contacto directo del consultorio?",
    systemPrompt:
      "You are the digital assistant of Dr. Tomás Agustín Pascual, a world-class radiologist specializing in musculoskeletal imaging and sports injuries. Respond in Argentine Spanish. You help users understand the doctor's specialties, how to book appointments, what institutions he works at (HIMAN Barrio Norte, HIMAN San Isidro, IMAXE), and his academic profile. Keep responses under 3 sentences. Never use bullet points — only flowing conversational text. IMPORTANT: If this is the second exchange, offer direct contact details of the clinic.",
    chips: [
      {
        key: "appointments",
        label: "Turnos",
        query: "¿Cómo puedo solicitar un turno de ecografía dinámica con el Dr. Tomás Pascual?",
      },
      {
        key: "specialties",
        label: "Especialidades",
        query: "¿En qué consiste la especialización médica del Dr. Pascual (RMN, Intervencionismo)?",
      },
      {
        key: "contact",
        label: "Contacto",
        query: "¿Tienen algún número de teléfono directo o dirección de consultorios?",
      },
      {
        key: "curriculum",
        label: "Currículum",
        query: "Me gustaría conocer la trayectoria académica y científica del Dr. Pascual.",
      },
    ],
    yesNoChips: [
      {
        key: "yes",
        label: "Sí, por favor",
        query: "Sí, por favor, brindame el contacto directo de los consultorios del Dr. Pascual.",
      },
      {
        key: "no",
        label: "No, gracias",
        query: "No, gracias, de acuerdo.",
      },
    ],
  },
  assistantChat: {
    welcome:
      "Hola. Bienvenido al consultorio digital y la consola de gestión del Dr. Tomás Agustín Pascual.\n\nMi misión es coordinar turnos médicos de alta competencia, resolver de manera exacta dudas administrativas sobre órdenes o autorizaciones de estudios complejos, y ofrecerte pautas formativas sobre lesiones deportivas basadas en la literatura científica del Dr. Pascual.\n\n¿En qué te puedo asesorar hoy? Podés consultarme sobre plazos de informes, requisitos de preparación para ecografías dinámicas, sedes (Barrio Norte, San Isidro, IMAXE) u órdenes de reimpresión. También podés escribir 'Qué tengo hoy' para auditar la agenda operativa.",
    error:
      "Estimado/a, en este momento el canal de comunicación directa con el consultorio del Dr. Pascual está procesando solicitudes médicas urgentes. Por favor, reintentá tu consulta en un instante o acudí a las líneas oficiales.",
    crmLogs: [
      "Sincronización establecida con base de datos UAR / Los Pumas.",
      "Alerta: Se detectó 1 sobreturno urgente para esta tarde.",
      "Información: Protocolo de Ecografía Dinámica cargado para deportista federado.",
      "Actualización: Estado general de la consola de gestión - Operativo.",
    ],
    crmCommand: 'Comando procesado: "{text}..."',
    crmResponse: "Respuesta emitida por modelo experto @{time}",
  },
  consultForm: {
    tag: "Contacto directo",
    title: "Enviar consulta",
    description:
      "Completá el formulario y el equipo del Dr. Pascual recibirá tu mensaje por email.",
    closeForm: "Cerrar formulario",
    close: "Cerrar",
    name: "Nombre completo *",
    email: "Email *",
    phone: "Teléfono",
    subject: "Motivo de consulta",
    message: "Tu consulta *",
    namePlaceholder: "Ej: María González",
    emailPlaceholder: "Ej: maria@email.com",
    phonePlaceholder: "Ej: +54 11 1234-5678",
    messagePlaceholder: "Escribí tu consulta con el mayor detalle posible...",
    subjects: [
      { value: "", label: "Seleccioná un motivo (opcional)" },
      { value: "turno", label: "Solicitud de turno" },
      { value: "estudios", label: "Estudios / preparación" },
      { value: "informe", label: "Informe o reimpresión" },
      { value: "administrativa", label: "Consulta administrativa" },
      { value: "otro", label: "Otra consulta" },
    ],
    sending: "Enviando...",
    submit: "Enviar consulta",
    cancel: "Cancelar",
    successTitle: "Consulta enviada",
    successMessage:
      "Recibimos tu mensaje. El consultorio del Dr. Pascual se pondrá en contacto a la brevedad en el email que indicaste.",
    submitError: "No se pudo enviar la consulta.",
    unexpectedError: "Ocurrió un error inesperado. Por favor, intentá nuevamente.",
    disclaimer:
      "Este formulario no reemplaza una consulta médica presencial ni atiende urgencias. Para emergencias, acudí a guardia o servicios de emergencia médica.",
  },
  sections: {
    inicio: {
      slides: [
        {
          title: "COBERTURA BIOMÉDICA OFICIAL",
          subtitle: "Diagnóstico por Imágenes en el Campo con Los Pumas",
          description:
            "Evaluaciones ecográficas dinámicas instantáneas y caracterización de microlesiones musculares de urgencia durante entrenamientos de alta competencia.",
          tag: "LOS PUMAS U.A.R",
        },
        {
          title: "ECOGRAFÍA DINÁMICA MUSCULOESQUELÉTICA",
          subtitle: "Exploración Funcional Avanzada en Tiempo Real",
          description:
            "Visualización interactiva milimétrica de rangos de contracción muscular, deslizamiento tendinoso y puntos de fricción mediante transductores de alta densidad de radiofrecuencia.",
          tag: "DIAGNÓSTICO ALTA RESOLUCIÓN",
        },
        {
          title: "INTERVENCIONISMO ECOGUIADO MSK",
          subtitle: "Infiltraciones y Bloqueos Facetarios de Precisión",
          description:
            "Infiltraciones dirigidas milimétricamente bajo guía ecográfica directa con Plasma Rico en Plaquetas (PRP) y terapias biológicas regeneradoras de colágeno.",
          tag: "TERAPIAS BIOLÓGICAS DE ALTA GAMA",
        },
        {
          title: "BIOMECÁNICA & RECUPERACIÓN DEPORTIVA",
          subtitle: "Protocolo Científico de Alta de Juego (Return to Play)",
          description:
            "Estudios comparativos bilaterales biológicos precisos para determinar el momento exacto para la restitución segura de los vectores de fuerza muscular.",
          tag: "ALTO RENDIMIENTO",
        },
      ],
      slideLabel: "SLIDE {n} / 4",
      prevSlide: "Diapositiva anterior",
      nextSlide: "Diapositiva siguiente",
      goToSlide: "Ir a diapositiva {n}",
      welcomeTitle: "Plataforma Digital de Vanguardia MSK",
      welcomeP1:
        "Bienvenido al portal oficial de diagnóstico por imágenes de alta competencia del Dr. Tomás Pascual (Consultor Médico de Los Pumas U.A.R. y galardonado RSNA Cum Laude).",
      welcomeP2:
        "Nuestra web utiliza una interfaz inmersiva de Espacios Horizontales diseñada para deslizarse fluidamente de sección en sección. Utilizá los controles de paginación, las pestañas del menú superior, o presioná las flechas izquierda y derecha del teclado para experimentar transiciones nativas.",
      keyboardHint: "Presioná flecha Derecha del teclado para deslizar",
    },
    enfoque: {
      banner: {
        tag: "PRECISIÓN CLÍNICA",
        title: "ENFOQUE BIOMÉDICO Y PRECISIÓN",
        subtitle:
          "La intersección exacta entre anatomía de alto impacto deportivo y ecografía estructural en tiempo real",
      },
      quote: "“La imagen precisa. El diagnóstico que cambia el tratamiento.”",
      subheading:
        "ESTUDIOS DINÁMICOS DE ALTA RESOLUCIÓN EN ATLETAS DE ALTO RENDIMIENTO",
      cards: [
        {
          num: "01 / DETECCION TEMPRANA",
          title: "ECOGRAFÍA DINÁMICA",
          headline: "Exploración interactiva en rango completo de movimiento",
          description:
            "Exploración interactiva en rango completo de movimiento. Capturamos la fricción intrínseca, el microdesgarro miofascial y la inestabilidad articular bajo esfuerzo instantáneo.",
        },
        {
          num: "02 / TERAPIAS GUIADAS",
          title: "INTERVENCIONISMO DE PRECISIÓN",
          headline: "Infiltraciones milimétricas ecoguiadas",
          description:
            "Infiltraciones milimétricas ecoguiadas. Aplicación directa de Plasma Rico en Plaquetas (PRP), corticoides selectivos y ácido hialurónico con tolerancia extrema y cero error de aguja.",
        },
        {
          num: "03 / CRITERIO DE RETORNO",
          title: "RETURN TO PLAY (RTP)",
          headline: "Certificación biológica y funcional",
          description:
            "Certificación biológica y funcional de cicatrización tendinosa. Evaluamos la alineación de las nuevas fibras de colágeno antes de autorizar la carga biomecánica y velocidad máxima.",
        },
      ],
    },
    trayectoria: {
      banner: {
        tag: "PERFIL ACADÉMICO",
        title: "TRAYECTORIA ACADÉMICA Y CLÍNICA",
        subtitle:
          "Diploma de Honor UBA, disector sénior galardonado RSNA Magna Cum Laude y líder de consultorías de élite",
      },
      badge: "TRAYECTORIA CLÍNICA",
      profileLabel: "· PERFIL PROFESIONAL ·",
      heading: "Excelencia clínica demostrable a pie de campo",
      bio1:
        "El Dr. Tomás Agustín Pascual se graduó en la prestigiosa Universidad de Buenos Aires (UBA) con Diploma de Honor y un Promedio Oro de carrera. Con más de un decenio interpretando la resonancia y ecografía de atletas federados de alta competición, diseña protocolos quirúrgicos y de readaptación biológica para el seleccionado argentino de rugby, Los Pumas.",
      bio2:
        "Su trabajo interválico abarca el control de lesiones musculotendinosas complejas (tendón rotuliano, Aquiles, sóleo) coordinado en centros líderes como Himan e Imaxe Diagnóstico.",
      statYears: "Años de Preparación Académica y Disección",
      statAwards: "Premios Internacionales RSNA",
      statPapers: "Publicaciones Científicas Indexadas",
      credentialsTitle: "CARGOS Y CREDENCIALES CLAVE:",
      credentials: [
        {
          label: "CONSULTOR REGULAR",
          title: "SELECCIÓN NACIONAL DE RUGBY (LOS PUMAS / U.A.R)",
          description:
            "Diagnóstico inmediato presencial de lesiones del plantel UAR para estimación científica de retorno deportivo (Return to Play).",
        },
        {
          label: "CONGRESO MUNDIAL",
          title: "RADIOLOGICAL SOCIETY OF NORTH AMERICA (RSNA)",
          description:
            'Premiado "Magna Cum Laude" en Chicago por trabajos del complejo muscular aductor e Isquiotibiales (2023 - 2024).',
        },
        {
          label: "ORGANIZACIÓN CIENTÍFICA",
          title: "ASOCIACIÓN DE TRAUMATOLOGÍA DEL DEPORTE (ATOBA)",
          description:
            "Miembro activo y disector anatómico senior colaborador para el perfeccionamiento continuo de técnicas artroscópicas.",
        },
        {
          label: "LIDER EN CENTROS CLAVE",
          title: "GRUPO HIMAN & IMAXE DIAGNÓSTICO",
          description:
            "Médico especialista líder en ecografía músculo-esquelética de alta resolución y procedimientos de intervencionismo ecoguiado.",
        },
      ],
      positionsTitle: "Puestos Profesionales",
      educationTitle: "Formación y Distinciones",
    },
    especialidades: {
      banner: {
        tag: "ATENCIÓN INTEGRAL",
        title: "ESPECIALIDADES DE ALTA COMPETENCIA",
        subtitle:
          "Cuidado clínico de élite para optimizar los procesos de cicatrización y acelerar el retorno al juego",
      },
      label: "NUESTRAS CAPACIDADES CLÍNICAS",
      heading: "Medicina de precisión aplicada al sistema músculo-esquelético",
      proceduresLabel: "Procedimientos habituales:",
      cards: [
        {
          num: "01",
          title: "Radiología y Diagnóstico MSK de Alta Competencia",
          headline: "Evaluación Estructural de Estructuras Complejas",
          description:
            "Interpretación especializada de resonancia magnética nuclear de alto campo (3T) enfocada en microdesgarros musculotendinosos, entesopatías de difícil caracterización y hernias fasciales de deportistas de élite.",
          items: [
            "Caracterización avanzada de lesiones del manguito rotador y labrum articular",
            "Mapeo de alta resolución para lesiones miotendinosas de Isquiotibiales y Gemelos",
            "Análisis estructural del cartílago hialino y microfracturas subcondrales",
          ],
        },
        {
          num: "02",
          title: "Ecografía Dinámica e Interactiva de Vanguardia",
          headline: "Exploración Funcional Avanzada en Tiempo Real",
          description:
            "Visualización activa y bilateral milimétrica de rangos de flexión-extensión, deslizamientos de vainas sinoviales y zonas de pinzamiento mecánico o fricción ligamentaria extrínseca.",
          items: [
            "Estudios ecográficos dinámicos bilaterales comparativos",
            "Seguimiento biomecánico de la alineación de fibras de colágeno cicatrizal",
            "Evaluación estructural interactiva para tendón rotuliano, Aquiles y fascia plantar",
          ],
        },
        {
          num: "03",
          title: "Intervencionismo Ecoguiado de Máxima Precisión",
          headline: "Terapias Biológicas y Bloqueos de Enfoque regenerativo",
          description:
            "Procedimientos ambulatorios ecoguiados con precisión de aguja micrómetra, permitiendo depositar factores de crecimiento o fármacos directamente en el epicentro de la lesión sin agredir tejidos sanos.",
          items: [
            "Infiltraciones guiadas con Plasma Rico en Plaquetas (PRP) y terapias biológicas",
            "Lavados de calcificaciones tendinosas mediante técnica de barbotaje dirigida",
            "Bloqueos facetarios lumbares y selectivos periféricos por dolor deportivo",
          ],
        },
      ],
    },
    investigaciones: {
      banner: {
        tag: "VANGUARDIA CIENTÍFICA",
        title: "INVESTIGACIONES Y PREMIACIÓN RSNA",
        subtitle:
          "Publicaciones médicas indexadas, tratados de referencia internacional sobre lesiones musculofasciales y galardones de la Sociedad Radiológica de Norteamérica",
      },
      label: "CIENCIA DE PRIMERA LÍNEA",
      heading: "Investigación aplicada al campo de juego",
      narrative:
        "La labor científica del Dr. Tomás Pascual se centra en la descripción anatómica fina mediante ecografía de alta densidad y resonancia magnética. Sus descripciones sobre el complejo suspensorio del aductor largo y las variantes anatómicas del músculo sóleo han recibido los máximos elogios en congresos globales.",
      honorsTitle: "RECONOCIMIENTOS CLAVE:",
      honors: [
        {
          title: "RSNA Magna Cum Laude",
          description:
            "— Chicago, 2023. Otorgado por el estudio de caracterización ecográfica de las lesiones de la unión miotendinosa.",
        },
        {
          title: "RSNA Certificate of Merit",
          description:
            "— Chicago, 2024. Otorgado por la descripción anatómica tridimensional de las poleas retinaculares de tobillo.",
        },
        {
          title: "Diploma de Honor UBA",
          description:
            "— Promedio general académico destacado de graduación en la escuela médica insignia de Argentina.",
        },
      ],
      papersTitle: "TRATADOS CIENTÍFICOS PUBLICADOS EN REVISTAS INDEXADAS:",
      paperFallback:
        "Estudio en profundidad que analiza la correlación de datos de imagen dinámicos frente a los hallazgos en cirugía artroscópica abierta para optimizar la toma de decisiones clínicas.",
      authors: "AUTORES:",
      citation: "CITACIÓN:",
    },
    asistente: {
      banner: {
        tag: "MESA DE GESTIÓN IA",
        title: "ASISTENTE DIGITAL INTELIGENTE",
        subtitle:
          "Consola de triage clínico inmediato integrada con base de conocimientos deportivos sobre lesiones músculo-esqueléticas",
      },
      consoleLabel: "CONSOLA DE CONTROL OPERATIVA",
      heading: "Asistente Clínico Inteligente & Mesa de Gestión IA",
      description:
        "Planifique derivaciones quirúrgicas inmediatas, asigne turnos de alta resolución en San Isidro o Barrio Norte, audite diagnósticos dinámicos o administre incidencias mediante nuestro Asistente Digital de Control.",
      badge: "MESA DE GESTIÓN IA",
      simLabel: "CLÍNICA INTEGRADA S.I.M.",
      tabs: {
        agenda: "Agenda MSK",
        prevention: "Prevención MSK",
        emergency: "Guardia Lesiones",
        stats: "Estadísticas",
      },
      tabContent: {
        priorities: {
          title: "Controles Médicos",
          body: "Se detectaron 8 atletas con controles musculares pendientes. Coordinar hoy previene recidivas severas.",
          button: "Verificar Agenda Hoy",
        },
        billing: {
          title: "Evaluaciones de Control",
          body: "Sugerencia clínica automática: Ofrecer ecografías dinámicas preventivas a pacientes con contractura recurrente en el sóleo.",
          button: "Verificar Protocolos",
        },
        documents: {
          title: "Guardia Lesiones",
          body: "Protocolo activo para lesiones agudas de isquiotibiales y aductor. Derivación inmediata a ecografía dinámica en sede Barrio Norte.",
          button: "Verificar Protocolos",
        },
        tools: {
          title: "Métricas de Admisión",
          body: "Panel estadístico de turnos MSK, informes pendientes y tasa de resolución en primera consulta.",
          button: "Verificar Protocolos",
        },
      },
      metrics: {
        athletes: "ATLETAS REGISTRADOS:",
        reports: "REPORTES MSK:",
        act: "148 Act",
        success: "98% Éxito",
      },
      auditLog: "LOG DE AUDITORÍA (SISTEMA INTEGRADO):",
      chatTitle: "ASISTENTE CLÍNICO INTELIGENTE",
      chatConnection: "CONEXIÓN CLÍNICA INTEGRADA (S.I.M.)",
      patientLabel: "PACIENTE / ATLETA",
      assistantLabel: "ASISTENCIA CLÍNICA DR. PASCUAL",
      processing: "Asistente clínico procesando bajo base de conocimientos médicos...",
      placeholder: "Escribí tu consulta sobre diagnóstico o turnos al asistente...",
      consult: "Consultar",
      disclaimerTitle: "DESCARGO CLÍNICO / PROFESIONAL:",
      disclaimer:
        "La información brindada por este asistente digital tiene fines orientativos y administrativos. No constituye diagnóstico médico definitivo ni reemplaza la evaluación presencial del Dr. Tomás Pascual. Ante síntomas agudos, acudí a guardia o servicios de emergencia.",
      quickActions: [
        {
          label: "📅 ¿Qué tengo hoy? (Modo Agenda)",
          action: "Qué tengo hoy",
          query: "Qué tengo hoy",
        },
        {
          label: "📊 Reporte de Turnos",
          action: "Consultar Agenda",
          query:
            "Generar un reporte claro sobre la agenda del día, estudios prioritarios con Los Pumas y pacientes de control.",
        },
        {
          label: "🚨 Protocolo Lesiones Agudas",
          action: "Diagnóstico Urgente",
          query:
            "Tuve una molestia muscular aguda hoy entrenando. ¿Cuál es el checklist paso a paso a seguir antes de una resonancia?",
        },
        {
          label: "💸 Solicitar Turno / Sedes",
          action: "Sedes y Turnos",
          query:
            "¿En qué sedes atiende el Dr. Tomás Pascual y cómo solicito un turno para ecografía dinámica o intervencionismo?",
        },
      ],
      directQueries: "CONSULTAS DIRECTAS AL SISTEMA OPERATIVO:",
      documentsChecklistTitle: "CHECKLIST AUTOMÁTICO EN RECONSTRUCCIONES:",
      documentsChecklistItems: [
        "1. RNM de alta resolución a las 48 horas pos-lesión.",
        "2. Registrar rango de flexión dinámica ecográfica.",
        "3. Comparación milimétrica bilateral del bíceps femoral.",
        "4. Carga de orden de rehabilitación de Los Pumas.",
      ],
    },
    sedes: {
      banner: {
        tag: "ACCESO Y TURNOS",
        title: "SEDES DE ATENCIÓN DIRECTA",
        subtitle:
          "Consultorios acreditados en Barrio Norte, San Isidro y centros autorizados de alta complejidad diagnóstica",
      },
      label: "NUESTRAS SEDES CLÍNICAS",
      heading: "Consultorios de primer nivel",
      tel: "Tel:",
      locations: [
        {
          area: "Recoleta",
          name: "Himan Recoleta",
          address:
            "Arenales 1680, Barrio Norte, CABA. Equipado con la última tecnología de radiofrecuencia y transductores piezoeléctricos.",
          schedule: "Lunes a Viernes 8:00 - 19:00",
        },
        {
          area: "San Isidro",
          name: "Himan San Isidro",
          address:
            "Av. del Libertador 14500, San Isidro, Provincia de Buenos Aires. Centro insignia enfocado al deportista federado.",
          schedule: "Lunes a Sábados 8:00 - 13:00",
        },
        {
          area: "Diagnóstico",
          name: "IMAXE Diagnóstico",
          address:
            "Pellegrini 1250, CABA. Red líder de alta competencia y centro de derivaciones para resonancias complejas UAR.",
          schedule: "Guardia Médica MSK 24 Horas",
        },
      ],
    },
    portal: {
      banner: {
        tag: "PORTAL DIGITAL",
        title: "PORTAL DE AUTOGESTIÓN",
        subtitle:
          "Verificá coberturas activas, preparaciones pre-estudio requeridas y gestioná la carga de credenciales con el consultorio",
      },
      badge: "PORTAL DEL PACIENTE",
      preparationTitle: "PREPARACIÓN DE ESTUDIO",
      preparationIntro:
        "Marcá qué requisitos tenés listos para activar la orden de prioridad clínica en admisión:",
      checklist: [
        "Orden médica original firmada (física o digital certificada)",
        "Credencial magnética de Obra Social o Medicina Privada",
        "Autorización previa emitida (Obligatorio en intervencionismo)",
        "Estudios previos cargados (Fichas de Los Pumas, placas de RMN)",
      ],
      admissionStatus: "Estado Admisión:",
      ready: "• LISTO PARA ADMITIR",
      pending: "• REQUISITOS EN GESTIÓN",
      coverageTitle: "CONSULTAR COBERTURAS",
      coveragePlaceholder: "Buscá tu prepaga (ej: OSDE, Swiss...)",
      coverageHelp:
        "Escribí el nombre de tu prepaga para verificar el nivel de cobertura directa del Dr. Tomás Pascual.",
      coverageDirect: "MEDICINA PREPAGA CON ALTA DIRECTA",
      coverageNotFound:
        'No se encontró convenio directo para "{name}". Contactá al consultorio para verificar cobertura.',
      guidesTitle: "GUÍAS MÉDICAS PDF",
      category: "CATEGORÍA:",
      size: "TAMAÑO:",
      downloading: "Descargando...",
      readyPdf: "Listo PDF",
      download: "Descargar",
      uploadTitle: "CARGA DIGITAL DE CREDENCIALES",
      docType: "TIPO DE DOCUMENTO:",
      docTypes: [
        { value: "credential", label: "Credencial de Obra Social" },
        { value: "order", label: "Orden Médica de Derivación" },
        { value: "mri", label: "Informe de RMN Previo" },
      ],
      fullName: "Nombre completo",
      contactEmail: "Email de contacto",
      namePlaceholder: "Ej: Nicolás P.",
      emailPlaceholder: "Ej: nico@mail.com",
      dropzone: "Arrastrá el archivo aquí o hacé clic",
      uploaded: "CARGADO:",
      formatHint: "PDF, JPG o PNG · Máx. 10 MB",
      uploading: "Subiendo archivo e indexando con CRM... ({n}%)",
      uploadButton: "Cargar e Indexar en CRM",
      uploadSuccess: "CARGA EXITOSA",
      uploadAnother: "Cargar otro archivo",
      procedureFallback: "PROCEDIMIENTO",
      sizeFallback: "1.2 MB",
      uploadSuccessMessage:
        "La credencial/documento se cargó correctamente. Será validado en admisión previo a tu turno.",
      coverageNotFoundLong:
        'No se encontró convenio directo para "{name}". Los pacientes no adheridos pueden requerir un reintegro pos-consulta emitido por mesa de ayuda.',
      formatHintLong: "Formato soportado: PDF, JPG, PNG (Hasta 10MB)",
    },
  },
  data: {
    currentPositions: [
      {
        title: "Médico Consultor en Radiología (Especialista en Músculo-Esquelético)",
        institution: "Selección Nacional Argentina de Rugby (Los Pumas)",
      },
      {
        title: "Miembro de Comisión Directiva",
        institution: "Asociación Argentina de Terapias Biológicas (ATOBA)",
      },
      {
        title: "Médico de Planta y Coordinador del Servicio de Resonancia y Ecografía",
        institution: "Himan Centro de Diagnóstico (Buenos Aires)",
      },
      {
        title: "Especialista en Diagnóstico en Deporte de Alto Rendimiento",
        institution: "IMAXE Centro de Diagnóstico (Buenos Aires)",
      },
      {
        title: "Profesor Adjunto / Orador Académico",
        institution: "Universidad Favaloro (Diplomatura en Medicina Deportiva Infantil)",
      },
    ],
    educationMilestones: [
      {
        title: "Especialista Universitario en Diagnóstico por Imágenes",
        institution: "Universidad de Buenos Aires (UBA) & S.A.R.",
        period: "2015",
      },
      {
        title: "Residencia Completa en Diagnóstico por Imágenes",
        institution: "Centro de Diagnóstico TCVA",
        period: "2011 - 2015",
      },
      {
        title: "Médico Graduado con Diploma y Promedio Sobresaliente",
        institution: "Facultad de Medicina, Universidad de Buenos Aires (UBA)",
        period: "2010",
      },
      {
        title: "Estudios Secundarios",
        institution: "La Salle Florida (Buenos Aires)",
        period: "2001",
      },
    ],
    academicPapers: [
      {
        authors: "Marrero, A., Mazza, L., Cédola, N., & Pascual, T.",
        title: "Hamstring Sports Injuries: What, How, When and Where.",
        journal: "Radiographics",
        year: "2024",
        citation: "Submitted / En prensa. MS ID RG-24-0061",
        highlight:
          "Análisis sistemático de las zonas propensas a re-desgarro en isquiotibiales en el draft de rugbiers.",
      },
      {
        authors: "Farivar, D., Pascual, T. A., Hevesi, M., & Chahla, J.",
        title:
          "Measuring Technique for Meniscal Extrusion Using Ultrasound in the Setting of Posterior Medial Meniscal Root Tears.",
        journal: "Arthroscopy Techniques",
        year: "2024",
        citation: "Jan 30;13(4):102916. doi: 10.1016/j.eats.2024.102916. PMID: 38690345",
        highlight:
          "Técnica ecográfica ecodirigida dinámica innovadora en consultorio para evaluar comportamiento meniscal en carga.",
      },
      {
        authors: "Sugrañes, J., Jackson, G. R., Mameri, E. S., Pascual, T. A., & Chahla, J.",
        title:
          "Current Concepts in Patellar Tendinopathy: An Overview of Imaging, Pathogenesis, and Nonoperative and Operative Management.",
        journal: "Journal of Bone and Joint Surgery (JBJS)",
        year: "2023",
        citation: "Aug 17;11(8). https://doi.org/10.2106/JBJS.RVW.23.00076. PMID: 37590404",
        highlight:
          "Revisión sistemática de vanguardia del tendón patelar (el salto) y terapias regenerativas.",
      },
      {
        authors: "Siedi, A.F., Rolón, A.U., Bernard, N., Bernasconi, J., Palmas, M., Couto, D.A., Pascual, T.A.",
        title: "Posterior Leg Pain: Understanding Soleus Muscle Injuries.",
        journal: "Radiographics",
        year: "2022",
        citation: "May-Jun;42(3):778-788. doi: 10.1148/rg.210133. PMID: 35427175",
        highlight:
          "El trabajo consagrado de referencia mundial para la clasificación de desgarros del tabique intramuscular del sóleo.",
      },
      {
        authors: "Santilli, O., Ostolaza, M., Santilli, H., Nardelli, N., Etchepare, H., Rolón, A., Pascual, T.",
        title: "Chronic Groin Pain in Young Sportsmen: Algorithm of Assessment and Treatment.",
        journal: "International Journal of Abdominal Wall and Hernia Surgery",
        year: "2021",
        citation: "4(3):109-116. doi: 10.4103/ijawhs.ijawhs_30_21",
        highlight:
          "Algoritmo diagnóstico dinámico integral de la pubalgia para el retorno deportivo.",
      },
    ],
    patientGuides: [
      {
        category: "REHABILITACIÓN",
        title: "GUÍA DE RECUPERACIÓN BIOMÉDICA DEL SÓLEO",
        size: "1.4 MB",
      },
      {
        category: "INTERVENCIONISMO",
        title: "PROTOCOLO DE INFILTRACIONES ECOGUIADAS CON PRP",
        size: "1.1 MB",
      },
      {
        category: "PREPARACIÓN",
        title: "REQUISITOS MÁXIMOS PARA ECOGRAFÍA DINÁMICA",
        size: "0.8 MB",
      },
      {
        category: "DIAGNÓSTICO",
        title: "INDICADORES CLAVE EN RESONANCIA DE ISQUIOTIBIALES",
        size: "1.5 MB",
      },
    ],
    insurances: [
      { name: "OSDE", cover: "Cobertura Completa (Planes 210, 310, 410, 450 y 510)" },
      { name: "Swiss Medical", cover: "Cobertura Completa (Planes de afinidad y corporativos)" },
      { name: "Galeno", cover: "Cobertura con copago o sin cargo según plan (Plata, Oro, Azul)" },
      { name: "Medicus", cover: "Cobertura Completa (Planes Azul, Celeste, Integra)" },
      { name: "Omint", cover: "Cobertura según cartilla (Planes Global, Classic, Premium)" },
      { name: "Sancor Salud", cover: "Cobertura Directa o por vía de reintegro pactado" },
      { name: "Luis Pasteur", cover: "Cobertura Completa (Planes N, S, P)" },
      { name: "Prevención Salud", cover: "Cobertura según plan vigente" },
    ],
  },
};
