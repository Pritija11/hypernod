import type { LucideIcon } from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export type Solution = {
  slug: string;
  index: string;
  title: string;
  summary: string;
  description: string;
  features: string[];
  audience: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  description: string;
  features: string[];
  audience: string;
};

export type WhyPoint = {
  icon: LucideIcon;
  title: string;
  description: string;
};
