// mockData.ts
import { type Program, type PECEvent,  type Testimonial } from './types';

export const PROGRAMS_DATA: Program[] = [
  {
    id: 'marriage-prep',
    title: 'Marriage Preparation & Foundational Design',
    category: 'Relationships',
    audience: 'Engaged & intentional couples',
    duration: '8 Weeks',
    description: 'Transforming potential partners into aligned companions by addressing childhood patterns and building a safe space before saying "I do."',
    image: 'https://images.unsplash.com/photo-1522685942502-d784c0293376?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'family-wellness',
    title: 'Family Wellness & Generational Restoration',
    category: 'Family',
    audience: 'Parents and family units',
    duration: '12 Weeks',
    description: 'Practical steps to restore trust through clear emotional regulation, conflict resolution, and defining a clear, grounded family vision.',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'leadership-dev',
    title: 'Leadership Development & Core Integrity',
    category: 'Leadership',
    audience: 'Executives, church leaders, and emerging changemakers',
    duration: '6 Months',
    description: 'Refining people for significance and societal impact. Move past polished theory into deep-rooted lived identity.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
  }
];

export const EVENTS_DATA: PECEvent[] = [
  {
    id: 'rrc-2026',
    title: 'Restored Relationships Conference (RRC)',
    type: 'Conference',
    date: 'September 18, 2026',
    time: '09:00 AM - 05:00 PM',
    location: 'Nairobi Millennium Hall & Streamed Globally',
    description: 'A transformative space where past wounds are recognized, pain is expressed, responsibility is owned, and true structural connection is restored.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Chidi & Amara Okocha',
    role: 'Married 7 Years',
    location: 'Lagos, Nigeria',
    quote: 'PEC helped us trace the root and not blame the victim. We shifted from structural combat into deep emotional safety.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80'
  }
];