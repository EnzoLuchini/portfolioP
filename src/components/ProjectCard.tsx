import React from 'react';

interface ProjectCardProps {
  title: string;
  tech: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, tech, description }) => {
  // Extract tech stack into badges
  const techStack = tech.split(/\s*\+\s*/);

  return (
    <div className="project-card">
      <h4>{title}</h4>
      <div className="tech-badges">
        {techStack.map((technology, index) => (
          <span key={index} className="tech-badge">
            {technology.trim()}
          </span>
        ))}
      </div>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
