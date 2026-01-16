
import { Service, PortfolioItem, Testimonial } from '../types';

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Modular Kitchen Interior',
    description: 'Bespoke culinary spaces designed for efficiency and aesthetic appeal.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800',
    category: 'Kitchen'
  },
  {
    id: 's2',
    title: 'Luxury Living Room Decor',
    description: 'Transform your gathering spaces into a haven of comfort and style.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800',
    category: 'Living'
  },
  {
    id: 's3',
    title: 'Modern Office Interior',
    description: 'Productive environments that inspire creativity and professional growth.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    category: 'Commercial'
  },
  {
    id: 's4',
    title: 'Custom Furniture Design',
    description: 'Unique pieces tailored specifically to your home architecture.',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800',
    category: 'Furniture'
  },
  {
    id: 's5',
    title: 'Wall Painting & Texture',
    description: 'Artistic wall finishes that add depth and character to every room.',
    image: 'https://images.unsplash.com/photo-1562664377-709f2c337eb2?auto=format&fit=crop&q=80&w=800',
    category: 'Decor'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'The Minimalist Loft',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800',
    description: 'A clean, open-concept loft focusing on natural light and white textures.'
  },
  {
    id: 'p2',
    title: 'Scandinavian Serenity',
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80&w=800',
    description: 'Soft wood tones and muted palettes create a restful sanctuary.'
  },
  {
    id: 'p3',
    title: 'Industrial Chic Office',
    category: 'Office',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800',
    description: 'Exposed brick and metal accents meet high-end ergonomic design.'
  },
  {
    id: 'p4',
    title: 'The Copper Kitchen',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1556909212-d5b604d7c902?auto=format&fit=crop&q=80&w=800',
    description: 'Bold copper fixtures and dark stone countertops in a modern layout.'
  },
  {
    id: 'p5',
    title: 'Bohemian Terrace',
    category: 'Decor',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800',
    description: 'Indoor-outdoor living with vibrant patterns and natural textures.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Eleanor Vance',
    role: 'Homeowner',
    content: 'Lumière completely transformed our space. The attention to detail in the copper accents is exactly what we dreamed of.',
    avatar: 'https://i.pravatar.cc/150?u=eleanor'
  },
  {
    id: 't2',
    name: 'Julian Thorne',
    role: 'Architect',
    content: 'As a fellow professional, I admire their commitment to luxury and functionality. Truly world-class designers.',
    avatar: 'https://i.pravatar.cc/150?u=julian'
  }
];
