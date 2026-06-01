import type { Messages } from "../types";

export const en: Messages = {
  nav: [
    { id: 0, label: "Home", short: "Hom" },
    { id: 1, label: "Approach", short: "App" },
    { id: 2, label: "Career", short: "Car" },
    { id: 3, label: "Specialties", short: "Spe" },
    { id: 4, label: "Research", short: "Res" },
    { id: 5, label: "Assistant", short: "Asst" },
    { id: 6, label: "Locations", short: "Loc" },
    { id: 7, label: "Portal", short: "Por" },
  ],
  header: {
    tagline: "MEDICAL IMAGING · HIGH-PERFORMANCE CARE",
    consult: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  pager: { previous: "Previous", next: "Next" },
  footer: {
    subtitle: "Medical Imaging · Trauma & Sports",
    trajectory: "Career",
    botConsole: "AI Console",
    publications: "Publications",
    locations: "Locations",
    portal: "Portal",
    copyright: "© 2026 Dr. Tomás Agustín Pascual · National License 136081",
    youtube: "Dr. Tomás Pascual YouTube channel",
    instagram: "Dr. Tomás Pascual on Instagram",
    linkedin: "Dr. Tomás Pascual on LinkedIn",
    facebook: "Dr. Tomás Pascual on Facebook",
  },
  floatingChat: {
    welcome:
      "Welcome. I am Dr. Pascual's digital assistant. How may I help you today?",
    assistantName: "Dr. Pascual",
    assistantRole: "Digital assistant",
    orienting: "Processing...",
    placeholder: "Type your question...",
    closeChat: "Close chat",
    sendMessage: "Send message",
    openAssistant: "Open digital assistant",
    errorTemporary: "Sorry, a temporary issue occurred.",
    errorSaturation:
      "I am currently handling a high volume of inquiries. Please try again in a moment.",
    contactOffer: "Would you like me to share the clinic's direct contact details?",
    contactOfferAlt: "direct contact details of the clinic?",
    systemPrompt:
      "You are the digital assistant of Dr. Tomás Agustín Pascual, a world-class radiologist specializing in musculoskeletal imaging and sports injuries. Respond in English. You help users understand the doctor's specialties, how to book appointments, what institutions he works at (HIMAN Barrio Norte, HIMAN San Isidro, IMAXE), and his academic profile. Keep responses under 3 sentences. Never use bullet points — only flowing conversational text. IMPORTANT: If this is the second exchange, offer direct contact details of the clinic.",
    chips: [
      {
        key: "appointments",
        label: "Appointments",
        query: "How can I request a dynamic ultrasound appointment with Dr. Tomás Pascual?",
      },
      {
        key: "specialties",
        label: "Specialties",
        query: "What is Dr. Pascual's medical specialization (MRI, interventional procedures)?",
      },
      {
        key: "contact",
        label: "Contact",
        query: "Do you have a direct phone number or clinic addresses?",
      },
      {
        key: "curriculum",
        label: "CV",
        query: "I would like to learn about Dr. Pascual's academic and scientific background.",
      },
    ],
    yesNoChips: [
      {
        key: "yes",
        label: "Yes, please",
        query: "Yes, please share the direct contact details for Dr. Pascual's clinics.",
      },
      {
        key: "no",
        label: "No, thanks",
        query: "No, thank you.",
      },
    ],
  },
  assistantChat: {
    welcome:
      "Hello. Welcome to the digital clinic and management console of Dr. Tomás Agustín Pascual.\n\nI coordinate high-performance medical appointments, answer administrative questions about orders or authorizations for complex studies, and provide educational guidance on sports injuries based on Dr. Pascual's scientific literature.\n\nHow can I assist you today? You may ask about report timelines, preparation for dynamic ultrasounds, locations (Barrio Norte, San Isidro, IMAXE), or reprint requests. You can also type 'What do I have today' to review the operational schedule.",
    error:
      "At this time, direct communication with Dr. Pascual's clinic is processing urgent medical requests. Please try again shortly or use the official contact lines.",
    crmLogs: [
      "Synchronization established with UAR / Los Pumas database.",
      "Alert: 1 urgent overbooking detected for this afternoon.",
      "Info: Dynamic Ultrasound Protocol loaded for federated athlete.",
      "Update: Management console status — Operational.",
    ],
    crmCommand: 'Command processed: "{text}..."',
    crmResponse: "Expert model response issued @{time}",
  },
  consultForm: {
    tag: "Direct contact",
    title: "Send inquiry",
    description:
      "Complete the form and Dr. Pascual's team will receive your message by email.",
    closeForm: "Close form",
    close: "Close",
    name: "Full name *",
    email: "Email *",
    phone: "Phone",
    subject: "Reason for inquiry",
    message: "Your message *",
    namePlaceholder: "e.g. Jane Smith",
    emailPlaceholder: "e.g. jane@email.com",
    phonePlaceholder: "e.g. +1 555 123-4567",
    messagePlaceholder: "Please describe your inquiry in as much detail as possible...",
    subjects: [
      { value: "", label: "Select a reason (optional)" },
      { value: "turno", label: "Appointment request" },
      { value: "estudios", label: "Studies / preparation" },
      { value: "informe", label: "Report or reprint" },
      { value: "administrativa", label: "Administrative inquiry" },
      { value: "otro", label: "Other inquiry" },
    ],
    sending: "Sending...",
    submit: "Send inquiry",
    cancel: "Cancel",
    successTitle: "Inquiry sent",
    successMessage:
      "We received your message. Dr. Pascual's clinic will contact you shortly at the email you provided.",
    submitError: "Could not send the inquiry.",
    unexpectedError: "An unexpected error occurred. Please try again.",
    disclaimer:
      "This form does not replace an in-person medical consultation and is not for emergencies. For emergencies, go to the ER or call emergency services.",
  },
  sections: {
    inicio: {
      slides: [
        {
          title: "OFFICIAL BIOMEDICAL COVERAGE",
          subtitle: "Medical Imaging on the Field with Los Pumas",
          description:
            "Instant dynamic ultrasound evaluations and characterization of urgent muscle micro-injuries during high-performance training.",
          tag: "LOS PUMAS U.A.R",
        },
        {
          title: "DYNAMIC MUSCULOSKELETAL ULTRASOUND",
          subtitle: "Advanced Functional Real-Time Examination",
          description:
            "Interactive millimeter visualization of muscle contraction ranges, tendon gliding, and friction points using high-density ultrasound transducers.",
          tag: "HIGH-RESOLUTION DIAGNOSTICS",
        },
        {
          title: "ULTRASOUND-GUIDED MSK INTERVENTIONS",
          subtitle: "Precision Injections and Facet Blocks",
          description:
            "Millimeter-targeted injections under direct ultrasound guidance with Platelet-Rich Plasma (PRP) and collagen-regenerative biological therapies.",
          tag: "PREMIUM BIOLOGICAL THERAPIES",
        },
        {
          title: "BIOMECHANICS & SPORTS RECOVERY",
          subtitle: "Scientific Return to Play Protocol",
          description:
            "Precise bilateral biological comparative studies to determine the exact timing for safe restoration of muscle force vectors.",
          tag: "HIGH PERFORMANCE",
        },
      ],
      slideLabel: "SLIDE {n} / 4",
      prevSlide: "Previous slide",
      nextSlide: "Next slide",
      goToSlide: "Go to slide {n}",
      welcomeTitle: "Leading MSK Digital Platform",
      welcomeP1:
        "Welcome to the official high-performance medical imaging portal of Dr. Tomás Pascual (Medical Consultant for Los Pumas U.A.R. and RSNA Cum Laude honoree).",
      welcomeP2:
        "This site uses an immersive Horizontal Spaces interface designed to flow smoothly from section to section. Use the pagination controls, top menu tabs, or press the left and right arrow keys on your keyboard for native transitions.",
      keyboardHint: "Press the Right arrow key to slide forward",
    },
    enfoque: {
      banner: {
        tag: "CLINICAL PRECISION",
        title: "BIOMEDICAL APPROACH & PRECISION",
        subtitle:
          "The exact intersection of high-impact sports anatomy and real-time structural ultrasound",
      },
      quote: "“Precise imaging. Diagnosis that changes treatment.”",
      subheading: "HIGH-RESOLUTION DYNAMIC STUDIES IN ELITE ATHLETES",
      cards: [
        {
          num: "01 / EARLY DETECTION",
          title: "DYNAMIC ULTRASOUND",
          headline: "Interactive full-range motion examination",
          description:
            "Interactive examination through full range of motion. We capture intrinsic friction, myofascial micro-tears, and joint instability under instant load.",
        },
        {
          num: "02 / GUIDED THERAPIES",
          title: "PRECISION INTERVENTIONS",
          headline: "Millimeter ultrasound-guided injections",
          description:
            "Millimeter ultrasound-guided injections. Direct application of Platelet-Rich Plasma (PRP), selective corticosteroids, and hyaluronic acid with extreme tolerance and zero needle error.",
        },
        {
          num: "03 / RETURN CRITERIA",
          title: "RETURN TO PLAY (RTP)",
          headline: "Biological and functional certification",
          description:
            "Biological and functional certification of tendon healing. We assess alignment of new collagen fibers before authorizing biomechanical load and maximum speed.",
        },
      ],
    },
    trayectoria: {
      banner: {
        tag: "ACADEMIC PROFILE",
        title: "ACADEMIC & CLINICAL CAREER",
        subtitle:
          "UBA Honors Diploma, senior dissector, RSNA Magna Cum Laude awardee, and elite consultancy leader",
      },
      badge: "CLINICAL CAREER",
      profileLabel: "· PROFESSIONAL PROFILE ·",
      heading: "Demonstrable clinical excellence at the point of care",
      bio1:
        "Dr. Tomás Agustín Pascual graduated from the prestigious University of Buenos Aires (UBA) with Honors and a Gold academic average. With over a decade interpreting MRI and ultrasound for elite federated athletes, he designs surgical and biological rehabilitation protocols for Argentina's national rugby team, Los Pumas.",
      bio2:
        "His interventional work covers complex musculotendinous injuries (patellar tendon, Achilles, soleus) coordinated at leading centers such as Himan and Imaxe Diagnóstico.",
      statYears: "Years of Academic Preparation & Dissection",
      statAwards: "International RSNA Awards",
      statPapers: "Indexed Scientific Publications",
      credentialsTitle: "KEY ROLES & CREDENTIALS:",
      credentials: [
        {
          label: "REGULAR CONSULTANT",
          title: "ARGENTINA NATIONAL RUGBY TEAM (LOS PUMAS / U.A.R)",
          description:
            "Immediate on-site diagnosis of UAR squad injuries for scientific Return to Play estimation.",
        },
        {
          label: "WORLD CONGRESS",
          title: "RADIOLOGICAL SOCIETY OF NORTH AMERICA (RSNA)",
          description:
            'Awarded "Magna Cum Laude" in Chicago for work on the adductor muscle complex and hamstrings (2023–2024).',
        },
        {
          label: "SCIENTIFIC ORGANIZATION",
          title: "SPORTS TRAUMA ASSOCIATION (ATOBA)",
          description:
            "Active member and senior anatomical dissector collaborating on continuous refinement of arthroscopic techniques.",
        },
        {
          label: "LEADER AT KEY CENTERS",
          title: "HIMAN GROUP & IMAXE DIAGNÓSTICO",
          description:
            "Lead specialist in high-resolution musculoskeletal ultrasound and ultrasound-guided interventional procedures.",
        },
      ],
      positionsTitle: "Professional Positions",
      educationTitle: "Education & Distinctions",
    },
    especialidades: {
      banner: {
        tag: "COMPREHENSIVE CARE",
        title: "HIGH-PERFORMANCE SPECIALTIES",
        subtitle:
          "Elite clinical care to optimize healing and accelerate return to play",
      },
      label: "OUR CLINICAL CAPABILITIES",
      heading: "Precision medicine applied to the musculoskeletal system",
      proceduresLabel: "Common procedures:",
      cards: [
        {
          num: "01",
          title: "High-Performance MSK Radiology & Diagnosis",
          headline: "Structural Evaluation of Complex Anatomy",
          description:
            "Specialized interpretation of high-field MRI (3T) focused on musculotendinous micro-tears, hard-to-characterize enthesopathies, and fascial hernias in elite athletes.",
          items: [
            "Advanced characterization of rotator cuff and labral injuries",
            "High-resolution mapping of hamstring and calf myotendinous lesions",
            "Structural analysis of hyaline cartilage and subchondral microfractures",
          ],
        },
        {
          num: "02",
          title: "Advanced Dynamic Interactive Ultrasound",
          headline: "Advanced Real-Time Functional Examination",
          description:
            "Active bilateral millimeter visualization of flexion-extension ranges, synovial sheath gliding, and zones of mechanical impingement or extrinsic ligament friction.",
          items: [
            "Comparative bilateral dynamic ultrasound studies",
            "Biomechanical tracking of scar collagen fiber alignment",
            "Interactive structural evaluation of patellar tendon, Achilles, and plantar fascia",
          ],
        },
        {
          num: "03",
          title: "Maximum-Precision Ultrasound-Guided Interventions",
          headline: "Biological Therapies & Regenerative Blocks",
          description:
            "Outpatient ultrasound-guided procedures with micrometer needle precision, delivering growth factors or drugs directly to the lesion epicenter without damaging healthy tissue.",
          items: [
            "Ultrasound-guided PRP injections and biological therapies",
            "Tendinous calcification lavage via directed barbotage technique",
            "Lumbar facet and selective peripheral blocks for sports pain",
          ],
        },
      ],
    },
    investigaciones: {
      banner: {
        tag: "SCIENTIFIC FRONTIER",
        title: "RESEARCH & RSNA AWARDS",
        subtitle:
          "Indexed medical publications, international reference works on myofascial injuries, and North American Radiological Society honors",
      },
      label: "FIRST-TIER SCIENCE",
      heading: "Research applied on the field of play",
      narrative:
        "Dr. Tomás Pascual's scientific work focuses on fine anatomical description through high-density ultrasound and MRI. His descriptions of the long adductor suspensory complex and soleus anatomical variants have received top honors at global congresses.",
      honorsTitle: "KEY RECOGNITIONS:",
      honors: [
        {
          title: "RSNA Magna Cum Laude",
          description:
            "— Chicago, 2023. Awarded for the study characterizing myotendinous junction injuries on ultrasound.",
        },
        {
          title: "RSNA Certificate of Merit",
          description:
            "— Chicago, 2024. Awarded for three-dimensional anatomical description of ankle retinacular pulleys.",
        },
        {
          title: "UBA Honors Diploma",
          description:
            "— Outstanding general academic average at graduation from Argentina's flagship medical school.",
        },
      ],
      papersTitle: "SCIENTIFIC TREATISES IN INDEXED JOURNALS:",
      paperFallback:
        "In-depth study analyzing correlation of dynamic imaging data with open arthroscopic findings to optimize clinical decision-making.",
      authors: "AUTHORS:",
      citation: "CITATION:",
    },
    asistente: {
      banner: {
        tag: "AI MANAGEMENT DESK",
        title: "INTELLIGENT DIGITAL ASSISTANT",
        subtitle:
          "Immediate clinical triage console integrated with sports musculoskeletal injury knowledge base",
      },
      consoleLabel: "OPERATIONAL CONTROL CONSOLE",
      heading: "Intelligent Clinical Assistant & AI Management Desk",
      description:
        "Plan immediate surgical referrals, assign high-resolution appointments in San Isidro or Barrio Norte, audit dynamic diagnoses, or manage incidents through our Digital Control Assistant.",
      badge: "AI MANAGEMENT DESK",
      simLabel: "INTEGRATED CLINIC S.I.M.",
      tabs: {
        agenda: "MSK Schedule",
        prevention: "MSK Prevention",
        emergency: "Injury Triage",
        stats: "Statistics",
      },
      tabContent: {
        priorities: {
          title: "Medical Follow-ups",
          body: "8 athletes with pending muscle follow-ups detected. Coordinating today prevents severe recurrence.",
          button: "Verify Today's Schedule",
        },
        billing: {
          title: "Follow-up Evaluations",
          body: "Automatic clinical suggestion: Offer preventive dynamic ultrasounds to patients with recurrent soleus contracture.",
          button: "Verify Protocols",
        },
        documents: {
          title: "Injury Triage",
          body: "Active protocol for acute hamstring and adductor injuries. Immediate referral to dynamic ultrasound at Barrio Norte.",
          button: "Verify Protocols",
        },
        tools: {
          title: "Admission Metrics",
          body: "Statistical panel of MSK appointments, pending reports, and first-visit resolution rate.",
          button: "Verify Protocols",
        },
      },
      metrics: {
        athletes: "REGISTERED ATHLETES:",
        reports: "MSK REPORTS:",
        act: "148 Act",
        success: "98% Success",
      },
      auditLog: "AUDIT LOG (INTEGRATED SYSTEM):",
      chatTitle: "INTELLIGENT CLINICAL ASSISTANT",
      chatConnection: "INTEGRATED CLINICAL CONNECTION (S.I.M.)",
      patientLabel: "PATIENT / ATHLETE",
      assistantLabel: "DR. PASCUAL CLINICAL ASSISTANCE",
      processing: "Clinical assistant processing with medical knowledge base...",
      placeholder: "Type your question about diagnosis or appointments...",
      consult: "Ask",
      disclaimerTitle: "CLINICAL / PROFESSIONAL DISCLAIMER:",
      disclaimer:
        "Information provided by this digital assistant is for guidance and administrative purposes only. It does not constitute a definitive medical diagnosis and does not replace an in-person evaluation by Dr. Tomás Pascual. For acute symptoms, go to the ER or emergency services.",
      quickActions: [
        {
          label: "📅 What do I have today? (Schedule mode)",
          action: "What do I have today",
          query: "What do I have today",
        },
        {
          label: "📊 Appointment Report",
          action: "Check Schedule",
          query:
            "Generate a clear report on today's schedule, priority studies with Los Pumas, and follow-up patients.",
        },
        {
          label: "🚨 Acute Injury Protocol",
          action: "Urgent Diagnosis",
          query:
            "I had acute muscle pain while training today. What is the step-by-step checklist before an MRI?",
        },
        {
          label: "💸 Request Appointment / Locations",
          action: "Locations and Appointments",
          query:
            "Where does Dr. Tomás Pascual see patients and how do I request a dynamic ultrasound or interventional appointment?",
        },
      ],
      directQueries: "DIRECT QUERIES TO THE OPERATING SYSTEM:",
      documentsChecklistTitle: "AUTOMATIC CHECKLIST IN RECONSTRUCTIONS:",
      documentsChecklistItems: [
        "1. High-resolution MRI within 48 hours post-injury.",
        "2. Record dynamic ultrasound flexion range.",
        "3. Bilateral millimeter comparison of biceps femoris.",
        "4. Upload Los Pumas rehabilitation order.",
      ],
    },
    sedes: {
      banner: {
        tag: "ACCESS & APPOINTMENTS",
        title: "DIRECT CARE LOCATIONS",
        subtitle:
          "Accredited clinics in Barrio Norte, San Isidro, and authorized high-complexity diagnostic centers",
      },
      label: "OUR CLINICAL LOCATIONS",
      heading: "Top-tier clinics",
      tel: "Tel:",
      locations: [
        {
          area: "Recoleta",
          name: "Himan Recoleta",
          address:
            "Arenales 1680, Barrio Norte, Buenos Aires. Equipped with latest radiofrequency technology and piezoelectric transducers.",
          schedule: "Monday to Friday 8:00 AM - 7:00 PM",
        },
        {
          area: "San Isidro",
          name: "Himan San Isidro",
          address:
            "Av. del Libertador 14500, San Isidro, Buenos Aires Province. Flagship center focused on federated athletes.",
          schedule: "Monday to Saturday 8:00 AM - 1:00 PM",
        },
        {
          area: "Diagnostics",
          name: "IMAXE Diagnóstico",
          address:
            "Pellegrini 1250, Buenos Aires. Leading high-performance network and referral center for complex UAR MRI studies.",
          schedule: "24-Hour MSK Medical Triage",
        },
      ],
    },
    portal: {
      banner: {
        tag: "DIGITAL PORTAL",
        title: "SELF-SERVICE PORTAL",
        subtitle:
          "Verify active coverage, required pre-study preparation, and upload credentials to the clinic",
      },
      badge: "PATIENT PORTAL",
      preparationTitle: "STUDY PREPARATION",
      preparationIntro:
        "Check which requirements you have ready to activate clinical priority admission:",
      checklist: [
        "Signed original medical order (physical or certified digital)",
        "Health insurance or private medicine card",
        "Prior authorization issued (required for interventional procedures)",
        "Previous studies uploaded (Los Pumas records, MRI films)",
      ],
      admissionStatus: "Admission Status:",
      ready: "• READY FOR ADMISSION",
      pending: "• REQUIREMENTS IN PROGRESS",
      coverageTitle: "CHECK COVERAGE",
      coveragePlaceholder: "Search your insurer (e.g. OSDE, Swiss...)",
      coverageHelp:
        "Enter your insurer name to verify direct coverage level with Dr. Tomás Pascual.",
      coverageDirect: "PRIVATE INSURANCE WITH DIRECT COVERAGE",
      coverageNotFound:
        'No direct agreement found for "{name}". Contact the clinic to verify coverage.',
      guidesTitle: "MEDICAL PDF GUIDES",
      category: "CATEGORY:",
      size: "SIZE:",
      downloading: "Downloading...",
      readyPdf: "PDF Ready",
      download: "Download",
      uploadTitle: "DIGITAL CREDENTIAL UPLOAD",
      docType: "DOCUMENT TYPE:",
      docTypes: [
        { value: "credential", label: "Health insurance card" },
        { value: "order", label: "Medical referral order" },
        { value: "mri", label: "Previous MRI report" },
      ],
      fullName: "Full name",
      contactEmail: "Contact email",
      namePlaceholder: "e.g. Nicholas P.",
      emailPlaceholder: "e.g. nick@mail.com",
      dropzone: "Drag file here or click",
      uploaded: "UPLOADED:",
      formatHint: "PDF, JPG or PNG · Max. 10 MB",
      uploading: "Uploading and indexing with CRM... ({n}%)",
      uploadButton: "Upload & Index in CRM",
      uploadSuccess: "UPLOAD SUCCESSFUL",
      uploadAnother: "Upload another file",
      procedureFallback: "PROCEDURE",
      sizeFallback: "1.2 MB",
      uploadSuccessMessage:
        "The credential/document was uploaded successfully. It will be validated at admission before your appointment.",
      coverageNotFoundLong:
        'No direct agreement found for "{name}". Non-affiliated patients may require post-visit reimbursement through the help desk.',
      formatHintLong: "Supported format: PDF, JPG, PNG (Up to 10MB)",
    },
  },
  data: {
    currentPositions: [
      {
        title: "Consulting Radiologist (Musculoskeletal Specialist)",
        institution: "Argentina National Rugby Team (Los Pumas)",
      },
      {
        title: "Board Member",
        institution: "Argentine Association of Biological Therapies (ATOBA)",
      },
      {
        title: "Staff Physician & MRI and Ultrasound Service Coordinator",
        institution: "Himan Diagnostic Center (Buenos Aires)",
      },
      {
        title: "High-Performance Sports Imaging Specialist",
        institution: "IMAXE Diagnostic Center (Buenos Aires)",
      },
      {
        title: "Adjunct Professor / Academic Speaker",
        institution: "Favaloro University (Pediatric Sports Medicine Diploma)",
      },
    ],
    educationMilestones: [
      {
        title: "University Specialist in Medical Imaging",
        institution: "University of Buenos Aires (UBA) & Argentine Radiology Society",
        period: "2015",
      },
      {
        title: "Complete Residency in Medical Imaging",
        institution: "TCVA Diagnostic Center",
        period: "2011 - 2015",
      },
      {
        title: "Medical Degree with Honors Diploma",
        institution: "Faculty of Medicine, University of Buenos Aires (UBA)",
        period: "2010",
      },
      {
        title: "Secondary Education",
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
        citation: "Submitted / In press. MS ID RG-24-0061",
        highlight:
          "Systematic analysis of hamstring re-tear-prone zones in rugby draft athletes.",
      },
      {
        authors: "Farivar, D., Pascual, T. A., Hevesi, M., & Chahla, J.",
        title:
          "Measuring Technique for Meniscal Extrusion Using Ultrasound in the Setting of Posterior Medial Meniscal Root Tears.",
        journal: "Arthroscopy Techniques",
        year: "2024",
        citation: "Jan 30;13(4):102916. doi: 10.1016/j.eats.2024.102916. PMID: 38690345",
        highlight:
          "Innovative dynamic office ultrasound technique to assess meniscal behavior under load.",
      },
      {
        authors: "Sugrañes, J., Jackson, G. R., Mameri, E. S., Pascual, T. A., & Chahla, J.",
        title:
          "Current Concepts in Patellar Tendinopathy: An Overview of Imaging, Pathogenesis, and Nonoperative and Operative Management.",
        journal: "Journal of Bone and Joint Surgery (JBJS)",
        year: "2023",
        citation: "Aug 17;11(8). https://doi.org/10.2106/JBJS.RVW.23.00076. PMID: 37590404",
        highlight:
          "State-of-the-art review of the patellar tendon (jumping) and regenerative therapies.",
      },
      {
        authors: "Siedi, A.F., Rolón, A.U., Bernard, N., Bernasconi, J., Palmas, M., Couto, D.A., Pascual, T.A.",
        title: "Posterior Leg Pain: Understanding Soleus Muscle Injuries.",
        journal: "Radiographics",
        year: "2022",
        citation: "May-Jun;42(3):778-788. doi: 10.1148/rg.210133. PMID: 35427175",
        highlight:
          "Landmark worldwide reference for classification of soleus intramuscular septum tears.",
      },
      {
        authors: "Santilli, O., Ostolaza, M., Santilli, H., Nardelli, N., Etchepare, H., Rolón, A., Pascual, T.",
        title: "Chronic Groin Pain in Young Sportsmen: Algorithm of Assessment and Treatment.",
        journal: "International Journal of Abdominal Wall and Hernia Surgery",
        year: "2021",
        citation: "4(3):109-116. doi: 10.4103/ijawhs.ijawhs_30_21",
        highlight:
          "Comprehensive dynamic diagnostic algorithm for groin pain and sports return.",
      },
    ],
    patientGuides: [
      {
        category: "REHABILITATION",
        title: "SOLEUS BIOMEDICAL RECOVERY GUIDE",
        size: "1.4 MB",
      },
      {
        category: "INTERVENTION",
        title: "ULTRASOUND-GUIDED PRP INJECTION PROTOCOL",
        size: "1.1 MB",
      },
      {
        category: "PREPARATION",
        title: "MAXIMUM REQUIREMENTS FOR DYNAMIC ULTRASOUND",
        size: "0.8 MB",
      },
      {
        category: "DIAGNOSTICS",
        title: "KEY INDICATORS IN HAMSTRING MRI",
        size: "1.5 MB",
      },
    ],
    insurances: [
      { name: "OSDE", cover: "Full coverage (Plans 210, 310, 410, 450 and 510)" },
      { name: "Swiss Medical", cover: "Full coverage (affinity and corporate plans)" },
      { name: "Galeno", cover: "Coverage with or without copay by plan (Silver, Gold, Blue)" },
      { name: "Medicus", cover: "Full coverage (Blue, Celeste, Integra plans)" },
      { name: "Omint", cover: "Coverage per network (Global, Classic, Premium plans)" },
      { name: "Sancor Salud", cover: "Direct coverage or agreed reimbursement" },
      { name: "Luis Pasteur", cover: "Full coverage (Plans N, S, P)" },
      { name: "Prevención Salud", cover: "Coverage per current plan" },
    ],
  },
};
