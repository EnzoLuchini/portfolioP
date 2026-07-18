import React from 'react';

export interface Project {
  title: string;
  tech: string[];
  description: string;
  repoUrl?: string;
  demoUrl?: string;
}

interface ProjectCardProps extends Project {
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ index, title, tech, description, repoUrl, demoUrl }) => {
  return (
    <article className="project-card">
      <p className="project-index">{String(index).padStart(2, '0')}</p>
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="tech-badges">
        {tech.map(technology => (
          <span key={technology} className="tech-badge">
            {technology}
          </span>
        ))}
      </div>
      {(repoUrl || demoUrl) && (
        <div className="project-links">
          {repoUrl && (
            <a className="project-link" href={repoUrl} target="_blank" rel="noopener noreferrer">
              ver código →
            </a>
          )}
          {demoUrl && (
            <a className="project-link" href={demoUrl} target="_blank" rel="noopener noreferrer">
              ver ao vivo →
            </a>
          )}
        </div>
      )}
    </article>
  );
};

export default ProjectCard;
