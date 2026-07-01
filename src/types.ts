// types.ts
export interface Program {
  id: string;
  title: string;
  description: string;
  category: string;
  audience: string;
  duration: string;
  image: string;
}

export interface PECEvent {
  id: string;
  title: string;
  type: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  image: string;
}