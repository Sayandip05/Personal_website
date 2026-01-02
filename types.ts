export type NavItem = 'Home' | 'About' | 'Work' | 'Playground' | 'Contact';

export interface Message {
  role: 'user' | 'assistant';
  text: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface PlaygroundItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconColor: string;
  tags: string[];
  link: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  techStack: string[];
  icon: string;
  link?: string;
}