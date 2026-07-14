import appBudgetImage from '../assets/app-budget-image.png';
import imageBrain from '../assets/imagebrain.png';
import prMaria from '../assets/pr-maria.png';
import f1Dashboard from '../assets/f1-dashboard.png';

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
    title: 'Portafolio',
    description: '',
    imageUrl: prMaria,
    link: 'https://portafolio-mar-ajo.vercel.app/',
    tags: ['TypeScript', 'Tailwind']
  },
  {
    id: '3',
    title: 'Second Brain',
    description: 'Mi primer RAG',
    imageUrl: imageBrain,
    link: 'https://personal-rag-psi.vercel.app/',
    tags: ['Python', 'React', 'AI']
  },
  {
    id: '4',
    title: 'F1 Dashboard',
    description: 'Panel interactivo con datos y estadísticas de Fórmula 1.',
    imageUrl: f1Dashboard,
    link: 'https://f1-dashboard-ten-phi.vercel.app/',
    tags: ['React', 'TypeScript', 'Tailwind']
  }
];
