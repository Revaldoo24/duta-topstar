export type Locale = "id" | "en";

export interface LocalizedText {
  id: string;
  en: string;
}

export interface NavItem {
  id: string;
  href: string;
  label: LocalizedText;
}

export interface HeroHighlight {
  id: string;
  label: LocalizedText;
}

export interface AboutHighlight {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface TrainingItem {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface IncomeMetric {
  id: string;
  label: LocalizedText;
  value: number;
  helper: LocalizedText;
}

export interface BenefitItem {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface TimelineStep {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface OutcomeItem {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface AmbassadorItem {
  id: string;
  name: string;
  school: string;
  photo: string;
  tiktokFollowers: number;
  instagramFollowers: number;
}

export interface GalleryItem {
  id: string;
  src: string;
  title: LocalizedText;
  alt: LocalizedText;
  width: number;
  height: number;
}

export interface FaqItem {
  id: string;
  question: LocalizedText;
  answer: LocalizedText;
}

export interface RegistrationFormData {
  fullName: string;
  nim: string;
  major: string;
  whatsapp: string;
  socialHandle: string;
  motivation: string;
}

export interface ProgramContent {
  brand: LocalizedText;
  nav: NavItem[];
  hero: {
    badge: LocalizedText;
    title: LocalizedText;
    subtitle: LocalizedText;
    primaryCta: LocalizedText;
    secondaryCta: LocalizedText;
    highlights: HeroHighlight[];
  };
  about: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    highlights: AboutHighlight[];
  };
  training: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    items: TrainingItem[];
  };
  income: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    statement: LocalizedText;
    description: LocalizedText;
    metrics: IncomeMetric[];
  };
  benefits: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    items: BenefitItem[];
  };
  timeline: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    steps: TimelineStep[];
  };
  outcomes: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    items: OutcomeItem[];
    quote: LocalizedText;
    quoteSource: LocalizedText;
  };
  ambassadors: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    leaderLabel: LocalizedText;
    followersLabel: LocalizedText;
    items: AmbassadorItem[];
  };
  gallery: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    items: GalleryItem[];
  };
  faq: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    items: FaqItem[];
  };
  finalCta: {
    title: LocalizedText;
    subtitle: LocalizedText;
    button: LocalizedText;
  };
  form: {
    title: LocalizedText;
    description: LocalizedText;
    labels: Record<keyof RegistrationFormData, LocalizedText>;
    placeholders: Record<keyof RegistrationFormData, LocalizedText>;
    submit: LocalizedText;
    submitting: LocalizedText;
    successTitle: LocalizedText;
    successDescription: LocalizedText;
    errors: {
      required: LocalizedText;
      whatsapp: LocalizedText;
    };
  };
}
