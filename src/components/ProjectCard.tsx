import React from 'react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <a 
      href={project.link} 
      className="group block relative rounded-2xl overflow-hidden glass-panel hover:-translate-y-2 transition-all duration-500 hover:shadow-solar-leaf/20 hover:shadow-2xl"
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-solar-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img 
          src={project.imageUrl} 
          alt={`Preview of ${project.title}`} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 text-xs font-semibold backdrop-blur-md bg-solar-dark/60 text-solar-accent border border-solar-accent/30 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-6 relative z-20">
        <h3 className="text-2xl font-serif text-solar-light mb-2 group-hover:text-solar-leaf transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-solar-light/70 text-sm leading-relaxed">
          {project.description}
        </p>
        
        <div className="mt-6 flex items-center text-sm font-semibold text-solar-accent group-hover:text-solar-leaf transition-colors duration-300">
          Explorar Proyecto
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </a>
  );
};
