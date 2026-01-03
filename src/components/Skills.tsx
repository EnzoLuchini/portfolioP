import React from 'react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      name: 'React',
      category: 'Frontend',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-icon">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/>
          <path d="M12 6v12M6 12h12"/>
        </svg>
      )
    },
    {
      name: 'TypeScript',
      category: 'Frontend',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-icon">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M8 8h8M8 12h8M8 16h4"/>
        </svg>
      )
    },
    {
      name: 'Node.js',
      category: 'Backend',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-icon">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      )
    },
    {
      name: 'C#',
      category: 'Backend',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-icon">
          <path d="M9 18l6-6-6-6"/>
          <path d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      )
    },
    {
      name: 'Git',
      category: 'Tools',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-icon">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 2v7m0 6v7M2 12h7m6 0h7"/>
        </svg>
      )
    },
    {
      name: 'Delphi',
      category: 'Desktop',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-icon">
          <rect x="4" y="4" width="16" height="16" rx="2"/>
          <path d="M9 9h6v6H9z"/>
        </svg>
      )
    },
    {
      name: 'SQL',
      category: 'Database',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-icon">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
        </svg>
      )
    },
    {
      name: 'REST API',
      category: 'Backend',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-icon">
          <circle cx="18" cy="18" r="3"/>
          <circle cx="6" cy="6" r="3"/>
          <path d="M13 6h3a2 2 0 0 1 2 2v7"/>
          <path d="M6 9v12"/>
        </svg>
      )
    }
  ];

  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <section id="skills" className="section">
      <h2>Habilidades Técnicas</h2>
      <p style={{ marginBottom: '3rem' }}>
        Tecnologias e ferramentas que utilizo no desenvolvimento
      </p>

      <div className="skills-container">
        {categories.map(category => (
          <div key={category} className="skills-category">
            <h3 className="skills-category-title">{category}</h3>
            <div className="skills-grid">
              {skills
                .filter(skill => skill.category === category)
                .map(skill => (
                  <div key={skill.name} className="skill-card">
                    <div className="skill-icon-wrapper">
                      {skill.icon}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
