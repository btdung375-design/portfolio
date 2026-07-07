export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  items: { name: string; level?: string; note?: string }[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  period: string;
  intro: string;
  tags: string[];
  hasCaseStudy: boolean;
  bullets: string[];
}

export interface Certificate {
  name: string;
  provider: string;
  year: string;
  description: string;
}

export interface Activity {
  role: string;
  organization: string;
  period: string;
  description: string;
  bullets: string[];
}
