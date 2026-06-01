import type { Messages } from "../types";

export const pt: Messages = {
  nav: [
    { id: 0, label: "Início", short: "Ini" },
    { id: 1, label: "Enfoque", short: "Enf" },
    { id: 2, label: "Trajetória", short: "Tra" },
    { id: 3, label: "Especialidades", short: "Esp" },
    { id: 4, label: "Pesquisas", short: "Pes" },
    { id: 5, label: "Assistente", short: "Ass" },
    { id: 6, label: "Unidades", short: "Uni" },
    { id: 7, label: "Portal", short: "Por" },
  ],
  header: {
    tagline: "DIAGNÓSTICO POR IMAGEM · ALTA COMPETÊNCIA",
    consult: "Consultar",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
  },
  pager: { previous: "Anterior", next: "Próximo" },
  footer: {
    subtitle: "Imagem Médica · Trauma & Esporte",
    trajectory: "Trajetória",
    botConsole: "Console IA",
    publications: "Publicações",
    locations: "Unidades",
    portal: "Portal",
    copyright: "© 2026 Dr. Tomás Agustín Pascual · Matrícula Nacional 136081",
    youtube: "Canal do Dr. Tomás Pascual no YouTube",
    instagram: "Instagram do Dr. Tomás Pascual",
    linkedin: "LinkedIn do Dr. Tomás Pascual",
    facebook: "Facebook do Dr. Tomás Pascual",
  },
  floatingChat: {
    welcome:
      "Bem-vindo/a. Sou o assistente digital do Dr. Pascual. Em que posso orientá-lo/a hoje?",
    assistantName: "Dr. Pascual",
    assistantRole: "Assistente digital",
    orienting: "Processando...",
    placeholder: "Escreva sua consulta...",
    closeChat: "Fechar chat",
    sendMessage: "Enviar mensagem",
    openAssistant: "Abrir assistente digital",
    errorTemporary: "Desculpe, ocorreu um inconveniente temporário.",
    errorSaturation:
      "No momento estou com alto volume de consultas. Por favor, tente novamente em instantes.",
    contactOffer: "Gostaria que eu compartilhe o contato direto do consultório?",
    contactOfferAlt: "contato direto do consultório?",
    systemPrompt:
      "You are the digital assistant of Dr. Tomás Agustín Pascual, a world-class radiologist specializing in musculoskeletal imaging and sports injuries. Respond in Brazilian Portuguese. You help users understand the doctor's specialties, how to book appointments, what institutions he works at (HIMAN Barrio Norte, HIMAN San Isidro, IMAXE), and his academic profile. Keep responses under 3 sentences. Never use bullet points — only flowing conversational text. IMPORTANT: If this is the second exchange, offer direct contact details of the clinic.",
    chips: [
      {
        key: "appointments",
        label: "Consultas",
        query: "Como posso solicitar uma consulta de ultrassom dinâmico com o Dr. Tomás Pascual?",
      },
      {
        key: "specialties",
        label: "Especialidades",
        query: "Qual é a especialização médica do Dr. Pascual (RM, intervenção)?",
      },
      {
        key: "contact",
        label: "Contato",
        query: "Vocês têm telefone direto ou endereço dos consultórios?",
      },
      {
        key: "curriculum",
        label: "Currículo",
        query: "Gostaria de conhecer a trajetória acadêmica e científica do Dr. Pascual.",
      },
    ],
    yesNoChips: [
      {
        key: "yes",
        label: "Sim, por favor",
        query: "Sim, por favor, compartilhe o contato direto dos consultórios do Dr. Pascual.",
      },
      {
        key: "no",
        label: "Não, obrigado",
        query: "Não, obrigado.",
      },
    ],
  },
  assistantChat: {
    welcome:
      "Olá. Bem-vindo ao consultório digital e à console de gestão do Dr. Tomás Agustín Pascual.\n\nMinha missão é coordenar consultas médicas de alta competência, resolver dúvidas administrativas sobre pedidos ou autorizações de exames complexos e oferecer orientações sobre lesões esportivas com base na literatura científica do Dr. Pascual.\n\nEm que posso ajudá-lo/a hoje? Pode perguntar sobre prazos de laudos, preparação para ultrassons dinâmicos, unidades (Barrio Norte, San Isidro, IMAXE) ou reimpressão de pedidos. Também pode escrever 'O que tenho hoje' para auditar a agenda operacional.",
    error:
      "Neste momento, o canal de comunicação direta com o consultório do Dr. Pascual está processando solicitações médicas urgentes. Por favor, tente novamente em instantes ou utilize os canais oficiais.",
    crmLogs: [
      "Sincronização estabelecida com base de dados UAR / Los Pumas.",
      "Alerta: detectado 1 encaixe urgente para esta tarde.",
      "Informação: Protocolo de Ultrassom Dinâmico carregado para atleta federado.",
      "Atualização: Estado geral da console de gestão — Operacional.",
    ],
    crmCommand: 'Comando processado: "{text}..."',
    crmResponse: "Resposta emitida por modelo especialista @{time}",
  },
  consultForm: {
    tag: "Contato direto",
    title: "Enviar consulta",
    description:
      "Preencha o formulário e a equipe do Dr. Pascual receberá sua mensagem por email.",
    closeForm: "Fechar formulário",
    close: "Fechar",
    name: "Nome completo *",
    email: "Email *",
    phone: "Telefone",
    subject: "Motivo da consulta",
    message: "Sua consulta *",
    namePlaceholder: "Ex: Maria Silva",
    emailPlaceholder: "Ex: maria@email.com",
    phonePlaceholder: "Ex: +55 11 91234-5678",
    messagePlaceholder: "Escreva sua consulta com o máximo de detalhes possível...",
    subjects: [
      { value: "", label: "Selecione um motivo (opcional)" },
      { value: "turno", label: "Solicitação de consulta" },
      { value: "estudios", label: "Exames / preparação" },
      { value: "informe", label: "Laudo ou reimpressão" },
      { value: "administrativa", label: "Consulta administrativa" },
      { value: "otro", label: "Outra consulta" },
    ],
    sending: "Enviando...",
    submit: "Enviar consulta",
    cancel: "Cancelar",
    successTitle: "Consulta enviada",
    successMessage:
      "Recebemos sua mensagem. O consultório do Dr. Pascual entrará em contato em breve no email indicado.",
    submitError: "Não foi possível enviar a consulta.",
    unexpectedError: "Ocorreu um erro inesperado. Por favor, tente novamente.",
    disclaimer:
      "Este formulário não substitui consulta médica presencial nem atende emergências. Em emergências, procure pronto-socorro ou serviços de emergência.",
  },
  sections: {
    inicio: {
      slides: [
        {
          title: "COBERTURA BIOMÉDICA OFICIAL",
          subtitle: "Diagnóstico por Imagem em Campo com Los Pumas",
          description:
            "Avaliações ecográficas dinâmicas instantâneas e caracterização de microlesões musculares de urgência durante treinos de alta competição.",
          tag: "LOS PUMAS U.A.R",
        },
        {
          title: "ULTRASSOM DINÂMICO MUSCULOESQUELÉTICO",
          subtitle: "Exploração Funcional Avançada em Tempo Real",
          description:
            "Visualização interativa milimétrica de faixas de contração muscular, deslizamento tendíneo e pontos de fricção com transdutores de alta densidade de radiofrequência.",
          tag: "DIAGNÓSTICO ALTA RESOLUÇÃO",
        },
        {
          title: "INTERVENCIONISMO ECOGUIADO MSK",
          subtitle: "Infiltrações e Bloqueios Facetários de Precisão",
          description:
            "Infiltrações dirigidas milimetricamente sob guia ecográfica direta com Plasma Rico em Plaquetas (PRP) e terapias biológicas regeneradoras de colágeno.",
          tag: "TERAPIAS BIOLÓGICAS DE ALTA GAMA",
        },
        {
          title: "BIOMECÂNICA & RECUPERAÇÃO ESPORTIVA",
          subtitle: "Protocolo Científico de Retorno ao Jogo (Return to Play)",
          description:
            "Estudos comparativos bilaterais biológicos precisos para determinar o momento exato da restituição segura dos vetores de força muscular.",
          tag: "ALTO RENDIMENTO",
        },
      ],
      slideLabel: "SLIDE {n} / 4",
      prevSlide: "Slide anterior",
      nextSlide: "Próximo slide",
      goToSlide: "Ir para slide {n}",
      welcomeTitle: "Plataforma Digital de Vanguardia MSK",
      welcomeP1:
        "Bem-vindo ao portal oficial de diagnóstico por imagem de alta competência do Dr. Tomás Pascual (Consultor Médico de Los Pumas U.A.R. e laureado RSNA Cum Laude).",
      welcomeP2:
        "Nosso site utiliza uma interface imersiva de Espaços Horizontais para deslizar fluidamente de seção em seção. Use os controles de paginação, as abas do menu superior ou pressione as setas esquerda e direita do teclado para transições nativas.",
      keyboardHint: "Pressione a seta Direita do teclado para deslizar",
    },
    enfoque: {
      banner: {
        tag: "PRECISÃO CLÍNICA",
        title: "ENFOQUE BIOMÉDICO E PRECISÃO",
        subtitle:
          "A interseção exata entre anatomia de alto impacto esportivo e ecografia estrutural em tempo real",
      },
      quote: "“A imagem precisa. O diagnóstico que muda o tratamento.”",
      subheading:
        "ESTUDOS DINÂMICOS DE ALTA RESOLUÇÃO EM ATLETAS DE ALTO RENDIMENTO",
      cards: [
        {
          num: "01 / DETECÇÃO PRECOCE",
          title: "ECOGRAFIA DINÂMICA",
          headline: "Exploração interativa em amplitude completa de movimento",
          description:
            "Exploração interativa em amplitude completa de movimento. Capturamos fricção intrínseca, microruptura miofascial e instabilidade articular sob esforço instantâneo.",
        },
        {
          num: "02 / TERAPIAS GUIADAS",
          title: "INTERVENCIONISMO DE PRECISÃO",
          headline: "Infiltrações milimétricas ecoguiadas",
          description:
            "Infiltrações milimétricas ecoguiadas. Aplicação direta de Plasma Rico em Plaquetas (PRP), corticoides seletivos e ácido hialurônico com tolerância extrema e zero erro de agulha.",
        },
        {
          num: "03 / CRITÉRIO DE RETORNO",
          title: "RETURN TO PLAY (RTP)",
          headline: "Certificação biológica e funcional",
          description:
            "Certificação biológica e funcional da cicatrização tendínea. Avaliamos o alinhamento das novas fibras de colágeno antes de autorizar carga biomecânica e velocidade máxima.",
        },
      ],
    },
    trayectoria: {
      banner: {
        tag: "PERFIL ACADÊMICO",
        title: "TRAJETÓRIA ACADÊMICA E CLÍNICA",
        subtitle:
          "Diploma de Honra UBA, dissector sênior laureado RSNA Magna Cum Laude e líder de consultorias de elite",
      },
      badge: "TRAJETÓRIA CLÍNICA",
      profileLabel: "· PERFIL PROFISSIONAL ·",
      heading: "Excelência clínica demonstrável à beira do campo",
      bio1:
        "O Dr. Tomás Agustín Pascual graduou-se na prestigiada Universidade de Buenos Aires (UBA) com Diploma de Honra e Média Ouro. Com mais de uma década interpretando ressonância e ecografia de atletas federados de alta competição, desenha protocolos cirúrgicos e de readaptação biológica para a seleção argentina de rugby, Los Pumas.",
      bio2:
        "Seu trabalho intervencionista abrange o controle de lesões musculotendíneas complexas (tendão patelar, Aquiles, sóleo) coordenado em centros líderes como Himan e Imaxe Diagnóstico.",
      statYears: "Anos de Preparação Acadêmica e Dissecção",
      statAwards: "Prêmios Internacionais RSNA",
      statPapers: "Publicações Científicas Indexadas",
      credentialsTitle: "CARGOS E CREDENCIAIS CHAVE:",
      credentials: [
        {
          label: "CONSULTOR REGULAR",
          title: "SELEÇÃO NACIONAL DE RUGBY (LOS PUMAS / U.A.R)",
          description:
            "Diagnóstico imediato presencial de lesões do plantel UAR para estimativa científica de retorno esportivo (Return to Play).",
        },
        {
          label: "CONGRESSO MUNDIAL",
          title: "RADIOLOGICAL SOCIETY OF NORTH AMERICA (RSNA)",
          description:
            'Premiado "Magna Cum Laude" em Chicago por trabalhos do complexo muscular adutor e Isquiotibiais (2023 - 2024).',
        },
        {
          label: "ORGANIZAÇÃO CIENTÍFICA",
          title: "ASSOCIAÇÃO DE TRAUMATOLOGIA DO ESPORTE (ATOBA)",
          description:
            "Membro ativo e dissector anatômico sênior colaborador para o aperfeiçoamento contínuo de técnicas artroscópicas.",
        },
        {
          label: "LÍDER EM CENTROS CHAVE",
          title: "GRUPO HIMAN & IMAXE DIAGNÓSTICO",
          description:
            "Médico especialista líder em ecografia musculoesquelética de alta resolução e procedimentos de intervenção ecoguiada.",
        },
      ],
      positionsTitle: "Cargos Profissionais",
      educationTitle: "Formação e Distinções",
    },
    especialidades: {
      banner: {
        tag: "ATENÇÃO INTEGRAL",
        title: "ESPECIALIDADES DE ALTA COMPETÊNCIA",
        subtitle:
          "Cuidado clínico de elite para otimizar cicatrização e acelerar o retorno ao jogo",
      },
      label: "NOSSAS CAPACIDADES CLÍNICAS",
      heading: "Medicina de precisão aplicada ao sistema musculoesquelético",
      proceduresLabel: "Procedimentos habituais:",
      cards: [
        {
          num: "01",
          title: "Radiologia e Diagnóstico MSK de Alta Competência",
          headline: "Avaliação Estrutural de Estruturas Complexas",
          description:
            "Interpretação especializada de ressonância magnética de alto campo (3T) focada em microrupturas musculotendíneas, entesopatias de difícil caracterização e hérnias fasciais de atletas de elite.",
          items: [
            "Caracterização avançada de lesões do manguito rotador e lábio articular",
            "Mapeamento de alta resolução para lesões miotendíneas de Isquiotibiais e Panturrilha",
            "Análise estrutural da cartilagem hialina e microfraturas subcondrais",
          ],
        },
        {
          num: "02",
          title: "Ecografia Dinâmica e Interativa de Vanguardia",
          headline: "Exploração Funcional Avançada em Tempo Real",
          description:
            "Visualização ativa e bilateral milimétrica de faixas de flexo-extensão, deslizamentos de bainhas sinoviais e zonas de pinçamento mecânico ou fricção ligamentar extrínseca.",
          items: [
            "Estudos ecográficos dinâmicos bilaterais comparativos",
            "Acompanhamento biomecânico do alinhamento de fibras de colágeno cicatricial",
            "Avaliação estrutural interativa para tendão patelar, Aquiles e fáscia plantar",
          ],
        },
        {
          num: "03",
          title: "Intervencionismo Ecoguiado de Máxima Precisão",
          headline: "Terapias Biológicas e Bloqueios Regenerativos",
          description:
            "Procedimentos ambulatoriais ecoguiados com precisão micrométrica de agulha, permitindo depositar fatores de crescimento ou fármacos diretamente no epicentro da lesão sem agredir tecidos saudáveis.",
          items: [
            "Infiltrações guiadas com Plasma Rico em Plaquetas (PRP) e terapias biológicas",
            "Lavagens de calcificações tendíneas mediante técnica de barbotagem dirigida",
            "Bloqueios facetários lombares e seletivos periféricos por dor esportiva",
          ],
        },
      ],
    },
    investigaciones: {
      banner: {
        tag: "VANGUARDA CIENTÍFICA",
        title: "PESQUISAS E PREMIAÇÃO RSNA",
        subtitle:
          "Publicações médicas indexadas, tratados de referência internacional sobre lesões musculofasciais e galardões da Sociedade Radiológica da América do Norte",
      },
      label: "CIÊNCIA DE PRIMEIRA LINHA",
      heading: "Pesquisa aplicada ao campo de jogo",
      narrative:
        "O trabalho científico do Dr. Tomás Pascual centra-se na descrição anatômica fina mediante ecografia de alta densidade e ressonância magnética. Suas descrições sobre o complexo suspensor do adutor longo e variantes anatômicas do músculo sóleo receberam os maiores elogios em congressos globais.",
      honorsTitle: "RECONHECIMENTOS CHAVE:",
      honors: [
        {
          title: "RSNA Magna Cum Laude",
          description:
            "— Chicago, 2023. Concedido pelo estudo de caracterização ecográfica das lesões da união miotendínea.",
        },
        {
          title: "RSNA Certificate of Merit",
          description:
            "— Chicago, 2024. Concedido pela descrição anatômica tridimensional das polias retinaculares do tornozelo.",
        },
        {
          title: "Diploma de Honra UBA",
          description:
            "— Média geral acadêmica destacada na graduação na escola médica insignia da Argentina.",
        },
      ],
      papersTitle: "TRATADOS CIENTÍFICOS PUBLICADOS EM REVISTAS INDEXADAS:",
      paperFallback:
        "Estudo em profundidade que analisa a correlação de dados de imagem dinâmicos frente aos achados em cirurgia artroscópica aberta para otimizar a tomada de decisões clínicas.",
      authors: "AUTORES:",
      citation: "CITAÇÃO:",
    },
    asistente: {
      banner: {
        tag: "MESA DE GESTÃO IA",
        title: "ASSISTENTE DIGITAL INTELIGENTE",
        subtitle:
          "Console de triagem clínica imediata integrada com base de conhecimentos sobre lesões musculoesqueléticas esportivas",
      },
      consoleLabel: "CONSOLE DE CONTROLE OPERACIONAL",
      heading: "Assistente Clínico Inteligente & Mesa de Gestão IA",
      description:
        "Planeje encaminhamentos cirúrgicos imediatos, atribua consultas de alta resolução em San Isidro ou Barrio Norte, audite diagnósticos dinâmicos ou administre incidentes mediante nosso Assistente Digital de Controle.",
      badge: "MESA DE GESTÃO IA",
      simLabel: "CLÍNICA INTEGRADA S.I.M.",
      tabs: {
        agenda: "Agenda MSK",
        prevention: "Prevenção MSK",
        emergency: "Guarda Lesões",
        stats: "Estatísticas",
      },
      tabContent: {
        priorities: {
          title: "Controles Médicos",
          body: "Detectados 8 atletas com controles musculares pendentes. Coordenar hoje previne recidivas severas.",
          button: "Verificar Agenda Hoje",
        },
        billing: {
          title: "Avaliações de Controle",
          body: "Sugestão clínica automática: Oferecer ecografias dinâmicas preventivas a pacientes com contratura recorrente no sóleo.",
          button: "Verificar Protocolos",
        },
        documents: {
          title: "Guarda Lesões",
          body: "Protocolo ativo para lesões agudas de isquiotibiais e adutor. Encaminhamento imediato para ecografia dinâmica na unidade Barrio Norte.",
          button: "Verificar Protocolos",
        },
        tools: {
          title: "Métricas de Admissão",
          body: "Painel estatístico de consultas MSK, laudos pendentes e taxa de resolução na primeira consulta.",
          button: "Verificar Protocolos",
        },
      },
      metrics: {
        athletes: "ATLETAS REGISTRADOS:",
        reports: "LAUDOS MSK:",
        act: "148 At",
        success: "98% Êxito",
      },
      auditLog: "LOG DE AUDITORIA (SISTEMA INTEGRADO):",
      chatTitle: "ASSISTENTE CLÍNICO INTELIGENTE",
      chatConnection: "CONEXÃO CLÍNICA INTEGRADA (S.I.M.)",
      patientLabel: "PACIENTE / ATLETA",
      assistantLabel: "ASSISTÊNCIA CLÍNICA DR. PASCUAL",
      processing: "Assistente clínico processando com base de conhecimentos médicos...",
      placeholder: "Escreva sua consulta sobre diagnóstico ou consultas ao assistente...",
      consult: "Consultar",
      disclaimerTitle: "AVISO CLÍNICO / PROFISSIONAL:",
      disclaimer:
        "As informações fornecidas por este assistente digital têm fins orientativos e administrativos. Não constituem diagnóstico médico definitivo nem substituem a avaliação presencial do Dr. Tomás Pascual. Ante sintomas agudos, procure pronto-socorro ou serviços de emergência.",
      quickActions: [
        {
          label: "📅 O que tenho hoje? (Modo Agenda)",
          action: "O que tenho hoje",
          query: "O que tenho hoje",
        },
        {
          label: "📊 Relatório de Consultas",
          action: "Consultar Agenda",
          query:
            "Gerar um relatório claro sobre a agenda do dia, exames prioritários com Los Pumas e pacientes de controle.",
        },
        {
          label: "🚨 Protocolo Lesões Agudas",
          action: "Diagnóstico Urgente",
          query:
            "Tive uma dor muscular aguda hoje no treino. Qual é o checklist passo a passo antes de uma ressonância?",
        },
        {
          label: "💸 Solicitar Consulta / Unidades",
          action: "Unidades e Consultas",
          query:
            "Em quais unidades o Dr. Tomás Pascual atende e como solicito consulta para ecografia dinâmica ou intervenção?",
        },
      ],
      directQueries: "CONSULTAS DIRETAS AO SISTEMA OPERACIONAL:",
      documentsChecklistTitle: "CHECKLIST AUTOMÁTICO EM RECONSTRUÇÕES:",
      documentsChecklistItems: [
        "1. RM de alta resolução nas 48 horas pós-lesão.",
        "2. Registrar faixa de flexão dinâmica ecográfica.",
        "3. Comparação milimétrica bilateral do bíceps femoral.",
        "4. Envio da ordem de reabilitação de Los Pumas.",
      ],
    },
    sedes: {
      banner: {
        tag: "ACESSO E CONSULTAS",
        title: "UNIDADES DE ATENDIMENTO DIRETO",
        subtitle:
          "Consultórios credenciados em Barrio Norte, San Isidro e centros autorizados de alta complexidade diagnóstica",
      },
      label: "NOSSAS UNIDADES CLÍNICAS",
      heading: "Consultórios de primeiro nível",
      tel: "Tel:",
      locations: [
        {
          area: "Recoleta",
          name: "Himan Recoleta",
          address:
            "Arenales 1680, Barrio Norte, CABA. Equipado com a última tecnologia de radiofrequência e transdutores piezoelétricos.",
          schedule: "Segunda a Sexta 8:00 - 19:00",
        },
        {
          area: "San Isidro",
          name: "Himan San Isidro",
          address:
            "Av. del Libertador 14500, San Isidro, Província de Buenos Aires. Centro insignia focado no atleta federado.",
          schedule: "Segunda a Sábado 8:00 - 13:00",
        },
        {
          area: "Diagnóstico",
          name: "IMAXE Diagnóstico",
          address:
            "Pellegrini 1250, CABA. Rede líder de alta competência e centro de encaminhamentos para ressonâncias complexas UAR.",
          schedule: "Guarda Médica MSK 24 Horas",
        },
      ],
    },
    portal: {
      banner: {
        tag: "PORTAL DIGITAL",
        title: "PORTAL DE AUTOGESTÃO",
        subtitle:
          "Verifique coberturas ativas, preparações pré-exame necessárias e gerencie o envio de credenciais ao consultório",
      },
      badge: "PORTAL DO PACIENTE",
      preparationTitle: "PREPARAÇÃO DE EXAME",
      preparationIntro:
        "Marque quais requisitos você tem prontos para ativar a ordem de prioridade clínica na admissão:",
      checklist: [
        "Pedido médico original assinado (físico ou digital certificado)",
        "Credencial magnética de Plano de Saúde ou Medicina Privada",
        "Autorização prévia emitida (Obrigatório em intervenção)",
        "Exames prévios carregados (Fichas de Los Pumas, placas de RM)",
      ],
      admissionStatus: "Estado Admissão:",
      ready: "• PRONTO PARA ADMITIR",
      pending: "• REQUISITOS EM GESTÃO",
      coverageTitle: "CONSULTAR COBERTURAS",
      coveragePlaceholder: "Busque seu plano (ex: OSDE, Swiss...)",
      coverageHelp:
        "Digite o nome do seu plano para verificar o nível de cobertura direta do Dr. Tomás Pascual.",
      coverageDirect: "PLANO DE SAÚDE COM ALTA DIRETA",
      coverageNotFound:
        'Não foi encontrado convênio direto para "{name}". Contate o consultório para verificar cobertura.',
      guidesTitle: "GUIAS MÉDICOS PDF",
      category: "CATEGORIA:",
      size: "TAMANHO:",
      downloading: "Baixando...",
      readyPdf: "PDF Pronto",
      download: "Baixar",
      uploadTitle: "ENVIO DIGITAL DE CREDENCIAIS",
      docType: "TIPO DE DOCUMENTO:",
      docTypes: [
        { value: "credential", label: "Credencial do Plano de Saúde" },
        { value: "order", label: "Pedido Médico de Encaminhamento" },
        { value: "mri", label: "Laudo de RM Prévio" },
      ],
      fullName: "Nome completo",
      contactEmail: "Email de contato",
      namePlaceholder: "Ex: Nicolás P.",
      emailPlaceholder: "Ex: nico@mail.com",
      dropzone: "Arraste o arquivo aqui ou clique",
      uploaded: "CARREGADO:",
      formatHint: "PDF, JPG ou PNG · Máx. 10 MB",
      uploading: "Enviando arquivo e indexando com CRM... ({n}%)",
      uploadButton: "Carregar e Indexar no CRM",
      uploadSuccess: "ENVIO BEM-SUCEDIDO",
      uploadAnother: "Carregar outro arquivo",
      procedureFallback: "PROCEDIMENTO",
      sizeFallback: "1.2 MB",
      uploadSuccessMessage:
        "A credencial/documento foi carregado com sucesso. Será validado na admissão antes da sua consulta.",
      coverageNotFoundLong:
        'Não foi encontrado convênio direto para "{name}". Pacientes não aderidos podem precisar de reembolso pós-consulta pela central de ajuda.',
      formatHintLong: "Formato suportado: PDF, JPG, PNG (Até 10MB)",
    },
  },
  data: {
    currentPositions: [
      {
        title: "Médico Consultor em Radiologia (Especialista em Musculoesquelético)",
        institution: "Seleção Nacional Argentina de Rugby (Los Pumas)",
      },
      {
        title: "Membro da Diretoria",
        institution: "Associação Argentina de Terapias Biológicas (ATOBA)",
      },
      {
        title: "Médico de Planta e Coordenador do Serviço de Ressonância e Ecografia",
        institution: "Himan Centro de Diagnóstico (Buenos Aires)",
      },
      {
        title: "Especialista em Diagnóstico em Esporte de Alto Rendimento",
        institution: "IMAXE Centro de Diagnóstico (Buenos Aires)",
      },
      {
        title: "Professor Adjunto / Palestrante Acadêmico",
        institution: "Universidade Favaloro (Diploma em Medicina Esportiva Infantil)",
      },
    ],
    educationMilestones: [
      {
        title: "Especialista Universitário em Diagnóstico por Imagem",
        institution: "Universidade de Buenos Aires (UBA) & S.A.R.",
        period: "2015",
      },
      {
        title: "Residência Completa em Diagnóstico por Imagem",
        institution: "Centro de Diagnóstico TCVA",
        period: "2011 - 2015",
      },
      {
        title: "Médico Graduado com Diploma e Média Sobressaliente",
        institution: "Faculdade de Medicina, Universidade de Buenos Aires (UBA)",
        period: "2010",
      },
      {
        title: "Ensino Médio",
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
        citation: "Submitted / Em prensa. MS ID RG-24-0061",
        highlight:
          "Análise sistemática das zonas propensas a re-ruptura em isquiotibiais no draft de rugbiers.",
      },
      {
        authors: "Farivar, D., Pascual, T. A., Hevesi, M., & Chahla, J.",
        title:
          "Measuring Technique for Meniscal Extrusion Using Ultrasound in the Setting of Posterior Medial Meniscal Root Tears.",
        journal: "Arthroscopy Techniques",
        year: "2024",
        citation: "Jan 30;13(4):102916. doi: 10.1016/j.eats.2024.102916. PMID: 38690345",
        highlight:
          "Técnica ecográfica dinâmica inovadora em consultório para avaliar comportamento meniscal sob carga.",
      },
      {
        authors: "Sugrañes, J., Jackson, G. R., Mameri, E. S., Pascual, T. A., & Chahla, J.",
        title:
          "Current Concepts in Patellar Tendinopathy: An Overview of Imaging, Pathogenesis, and Nonoperative and Operative Management.",
        journal: "Journal of Bone and Joint Surgery (JBJS)",
        year: "2023",
        citation: "Aug 17;11(8). https://doi.org/10.2106/JBJS.RVW.23.00076. PMID: 37590404",
        highlight:
          "Revisão sistemática de vanguarda do tendão patelar (salto) e terapias regenerativas.",
      },
      {
        authors: "Siedi, A.F., Rolón, A.U., Bernard, N., Bernasconi, J., Palmas, M., Couto, D.A., Pascual, T.A.",
        title: "Posterior Leg Pain: Understanding Soleus Muscle Injuries.",
        journal: "Radiographics",
        year: "2022",
        citation: "May-Jun;42(3):778-788. doi: 10.1148/rg.210133. PMID: 35427175",
        highlight:
          "Trabalho consagrado de referência mundial para a classificação de rupturas do septo intramuscular do sóleo.",
      },
      {
        authors: "Santilli, O., Ostolaza, M., Santilli, H., Nardelli, N., Etchepare, H., Rolón, A., Pascual, T.",
        title: "Chronic Groin Pain in Young Sportsmen: Algorithm of Assessment and Treatment.",
        journal: "International Journal of Abdominal Wall and Hernia Surgery",
        year: "2021",
        citation: "4(3):109-116. doi: 10.4103/ijawhs.ijawhs_30_21",
        highlight:
          "Algoritmo diagnóstico dinâmico integral da pubalgia para retorno esportivo.",
      },
    ],
    patientGuides: [
      {
        category: "REABILITAÇÃO",
        title: "GUIA DE RECUPERAÇÃO BIOMÉDICA DO SÓLEO",
        size: "1.4 MB",
      },
      {
        category: "INTERVENÇÃO",
        title: "PROTOCOLO DE INFILTRAÇÕES ECOGUIADAS COM PRP",
        size: "1.1 MB",
      },
      {
        category: "PREPARAÇÃO",
        title: "REQUISITOS MÁXIMOS PARA ECOGRAFIA DINÂMICA",
        size: "0.8 MB",
      },
      {
        category: "DIAGNÓSTICO",
        title: "INDICADORES CHAVE EM RESSONÂNCIA DE ISQUIOTIBIAIS",
        size: "1.5 MB",
      },
    ],
    insurances: [
      { name: "OSDE", cover: "Cobertura Completa (Planos 210, 310, 410, 450 e 510)" },
      { name: "Swiss Medical", cover: "Cobertura Completa (Planos de afinidade e corporativos)" },
      { name: "Galeno", cover: "Cobertura com coparticipação ou sem coparticipação conforme plano" },
      { name: "Medicus", cover: "Cobertura Completa (Planos Azul, Celeste, Integra)" },
      { name: "Omint", cover: "Cobertura conforme rede (Planos Global, Classic, Premium)" },
      { name: "Sancor Salud", cover: "Cobertura Direta ou via reembolso pactuado" },
      { name: "Luis Pasteur", cover: "Cobertura Completa (Planos N, S, P)" },
      { name: "Prevención Salud", cover: "Cobertura conforme plano vigente" },
    ],
  },
};
