import appBudgetImage from '../assets/app-budget-image.png';
import imageBrain from '../assets/imagebrain.png';
import prMaria from '../assets/pr-maria.png';

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
    tags: ['Web3', 'TypeScript', 'Tailwind']
  },
  {
    id: '3',
    title: 'Second Brain',
    description: 'Mi primer RAG',
    imageUrl: imageBrain,
    link: 'https://personal-rag-psi.vercel.app/',
    tags: ['Python', 'React', 'AI']
  }
];
