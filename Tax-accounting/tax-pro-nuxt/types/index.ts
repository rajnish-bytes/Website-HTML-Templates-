// Common type definitions for the application

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  icon: string;
  badge?: string;
  badgeClass?: string;
  features: string[];
  price: string;
  videoUrl?: string;
  serviceFeatures?: ServiceFeature[];
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
  avatar: string;
  rating: number;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  serviceId?: string; // Optional, to filter FAQs by service
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  service?: string;
  newsletter?: boolean;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface UserPreferences {
  theme: "light" | "dark";
  notifications: boolean;
  language: string;
}
