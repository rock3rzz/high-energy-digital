import React from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface CaseStudy {
  id: number;
  client: string;
  metric: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  quote: string;
  role?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}