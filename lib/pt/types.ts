export interface PortugueseGuide {
  slug: string;
  sourceSlug: string;
  title: string;
  description: string;
  excerpt: string;
  quickAnswer: string;
  date: string;
  bodyMarkdown: string;
  faqs: { question: string; answer: string }[];
  sources?: { label: string; href: string }[];
}

export interface PortugueseRegion {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  bodyMarkdown: string;
  faqs: { question: string; answer: string }[];
}
