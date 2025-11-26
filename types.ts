import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tools: string[];
  imageUrl: string;
  stats?: { label: string; value: string }[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ToolItem {
  name: string;
  category: 'Language' | 'Software' | 'Database' | 'Viz';
  icon: LucideIcon;
  color: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
