export interface Destination {
  id: string;
  title: string;
  depth: string;
  temperature: string;
  description: string;
  image: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Experience {
  id: string;
  phase: string;
  title: string;
  duration: string;
  description: string;
  details: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatarSeed: string;
  comment: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
