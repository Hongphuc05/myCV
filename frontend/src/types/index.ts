export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  params?: string;
  icon: string;
  backgroundImage?: string;
  demoImages?: string[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
}
