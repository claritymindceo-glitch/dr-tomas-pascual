export type Locale = "es-AR" | "en" | "pt";

export const LOCALES: Locale[] = ["es-AR", "en", "pt"];

export const LOCALE_LABELS: Record<Locale, string> = {
  "es-AR": "ES",
  en: "EN",
  pt: "PT",
};

export const LOCALE_NAMES: Record<Locale, string> = {
  "es-AR": "Español (Argentina)",
  en: "English",
  pt: "Português",
};

/** Banderas por locale (emoji regional) */
export const LOCALE_FLAGS: Record<Locale, string> = {
  "es-AR": "🇦🇷",
  en: "🇺🇸",
  pt: "🇧🇷",
};

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  "es-AR": "es-AR",
  en: "en",
  pt: "pt",
};

export interface NavItem {
  id: number;
  label: string;
  short: string;
}

export interface SlideItem {
  title: string;
  subtitle: string;
  description: string;
  tag: string;
}

export interface PositionItem {
  title: string;
  institution: string;
  period?: string;
}

export interface PaperItem {
  authors: string;
  title: string;
  journal: string;
  year: string;
  citation: string;
  highlight?: string;
}

export interface PatientGuideItem {
  category: string;
  title: string;
  size: string;
}

export interface SpecialtyCard {
  num: string;
  title: string;
  headline: string;
  description: string;
  items: string[];
}

export interface InsuranceItem {
  name: string;
  cover: string;
}

export interface EnfoqueCard {
  num: string;
  title: string;
  headline: string;
  description: string;
}

export interface CredentialCard {
  label: string;
  title: string;
  description: string;
}

export interface HonorItem {
  title: string;
  description: string;
}

export interface SedeLocation {
  area: string;
  name: string;
  address: string;
  schedule: string;
}

export interface SubjectOption {
  value: string;
  label: string;
}

export interface ChipConfig {
  key: string;
  label: string;
  query: string;
}

export interface Messages {
  nav: NavItem[];
  header: {
    tagline: string;
    consult: string;
    openMenu: string;
    closeMenu: string;
  };
  pager: { previous: string; next: string };
  footer: {
    subtitle: string;
    trajectory: string;
    botConsole: string;
    publications: string;
    locations: string;
    portal: string;
    copyright: string;
    youtube: string;
    instagram: string;
    linkedin: string;
    facebook: string;
  };
  floatingChat: {
    welcome: string;
    assistantName: string;
    assistantRole: string;
    orienting: string;
    placeholder: string;
    closeChat: string;
    sendMessage: string;
    openAssistant: string;
    errorTemporary: string;
    errorSaturation: string;
    contactOffer: string;
    contactOfferAlt: string;
    systemPrompt: string;
    chips: ChipConfig[];
    yesNoChips: ChipConfig[];
  };
  assistantChat: {
    welcome: string;
    error: string;
    crmLogs: string[];
    crmCommand: string;
    crmResponse: string;
  };
  consultForm: {
    tag: string;
    title: string;
    description: string;
    closeForm: string;
    close: string;
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    messagePlaceholder: string;
    subjects: SubjectOption[];
    sending: string;
    submit: string;
    cancel: string;
    successTitle: string;
    successMessage: string;
    submitError: string;
    unexpectedError: string;
    disclaimer: string;
  };
  sections: {
    inicio: {
      slides: SlideItem[];
      slideLabel: string;
      prevSlide: string;
      nextSlide: string;
      goToSlide: string;
      welcomeTitle: string;
      welcomeP1: string;
      welcomeP2: string;
      keyboardHint: string;
    };
    enfoque: {
      banner: { tag: string; title: string; subtitle: string };
      quote: string;
      subheading: string;
      cards: EnfoqueCard[];
    };
    trayectoria: {
      banner: { tag: string; title: string; subtitle: string };
      badge: string;
      profileLabel: string;
      heading: string;
      bio1: string;
      bio2: string;
      statYears: string;
      statAwards: string;
      statPapers: string;
      credentialsTitle: string;
      credentials: CredentialCard[];
      positionsTitle: string;
      educationTitle: string;
    };
    especialidades: {
      banner: { tag: string; title: string; subtitle: string };
      label: string;
      heading: string;
      proceduresLabel: string;
      cards: SpecialtyCard[];
    };
    investigaciones: {
      banner: { tag: string; title: string; subtitle: string };
      label: string;
      heading: string;
      narrative: string;
      honorsTitle: string;
      honors: HonorItem[];
      papersTitle: string;
      paperFallback: string;
      authors: string;
      citation: string;
    };
    asistente: {
      banner: { tag: string; title: string; subtitle: string };
      consoleLabel: string;
      heading: string;
      description: string;
      badge: string;
      simLabel: string;
      tabs: { agenda: string; prevention: string; emergency: string; stats: string };
      tabContent: Record<string, { title: string; body: string; button: string }>;
      metrics: { athletes: string; reports: string; act: string; success: string };
      auditLog: string;
      chatTitle: string;
      chatConnection: string;
      patientLabel: string;
      assistantLabel: string;
      processing: string;
      placeholder: string;
      consult: string;
      disclaimerTitle: string;
      disclaimer: string;
      quickActions: Array<{ label: string; action: string; query: string }>;
      directQueries: string;
      documentsChecklistTitle: string;
      documentsChecklistItems: string[];
    };
    sedes: {
      banner: { tag: string; title: string; subtitle: string };
      label: string;
      heading: string;
      tel: string;
      locations: SedeLocation[];
    };
    portal: {
      banner: { tag: string; title: string; subtitle: string };
      badge: string;
      preparationTitle: string;
      preparationIntro: string;
      checklist: string[];
      admissionStatus: string;
      ready: string;
      pending: string;
      coverageTitle: string;
      coveragePlaceholder: string;
      coverageHelp: string;
      coverageDirect: string;
      coverageNotFound: string;
      guidesTitle: string;
      category: string;
      size: string;
      downloading: string;
      readyPdf: string;
      download: string;
      uploadTitle: string;
      docType: string;
      docTypes: SubjectOption[];
      fullName: string;
      contactEmail: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      dropzone: string;
      uploaded: string;
      formatHint: string;
      uploading: string;
      uploadButton: string;
      uploadSuccess: string;
      uploadAnother: string;
      procedureFallback: string;
      sizeFallback: string;
      uploadSuccessMessage: string;
      coverageNotFoundLong: string;
      formatHintLong: string;
    };
  };
  data: {
    currentPositions: PositionItem[];
    educationMilestones: PositionItem[];
    academicPapers: PaperItem[];
    patientGuides: PatientGuideItem[];
    insurances: InsuranceItem[];
  };
}
