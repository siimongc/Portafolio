import appBudgetImage from '../assets/app-budget-image.png';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Personal Budget',
    description: 'Aplicación para planificar y distribuir ingresos mensuales en categorías configurables.',
    imageUrl: appBudgetImage,
    link: 'https://personal-budget-vb69.vercel.app',
    tags: ['React', 'TypeScript', 'Tailwind']
  },
  {
    id: '2',
    title: 'Solar Node',
    description: 'Dashboard descentralizado para la gestión y distribución inteligente de energía solar en comunidades.',
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop', // Solar panels / sun
    link: '#',
    tags: ['Web3', 'TypeScript', 'Tailwind']
  },
  {
    id: '3',
    title: 'Raíces Digitales',
    description: 'Aplicación web que conecta conocimientos ancestrales agrícolas con Machine Learning para optimizar cultivos locales.',
    imageUrl: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1000&auto=format&fit=crop', // Wisdom / agriculture / fields
    link: '#',
    tags: ['Python', 'React', 'AI']
  }
];
