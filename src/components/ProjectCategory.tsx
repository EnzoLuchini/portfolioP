import React from 'react';
import { colors } from '../styles/colors';
import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  tech: string;
  description: string;
}

interface ProjectCategoryProps {
  title: string;
  description: string;
  projects: Project[];
}

const ProjectCategory: React.FC<ProjectCategoryProps> = ({ title, description, projects }) => {
  return (
    <div className="projects-category">
      <h3 style={{ color: colors.primary }}>{title}</h3>
      <p className="category-description" style={{ color: colors.grayMedium }}>
        {description}
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            tech={project.tech}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCategory;
