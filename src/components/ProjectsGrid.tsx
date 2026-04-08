import React from 'react';
import type { Project } from '../data/projects';
import { ProjectCard } from './ProjectCard';

interface ProjectsGridProps {
  projects: Project[];
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-serif font-bold text-solar-light mb-12 text-center flex items-center justify-center gap-4">
        <span className="w-12 h-px bg-solar-accent/50"></span>
        Obras Creadas
        <span className="w-12 h-px bg-solar-accent/50"></span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
