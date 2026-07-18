import React from 'react';
import ProjectCard, { Project } from './ProjectCard';

interface ProjectCategoryProps {
  title: string;
  description: string;
  projects: Project[];
  startIndex?: number;
}

const ProjectCategory: React.FC<ProjectCategoryProps> = ({ title, description, projects, startIndex = 1 }) => {
  return (
    <div className="projects-category">
      <h3>{title}</h3>
      <p className="category-description">{description}</p>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} index={startIndex + i} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCategory;
