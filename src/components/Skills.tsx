import React from 'react';

interface SkillGroup {
  category: string;
  items: string[];
}

const Skills: React.FC = () => {
  const groups: SkillGroup[] = [
    { category: 'frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML & CSS'] },
    { category: 'backend', items: ['C# / .NET', 'Node.js', 'Java Spring Boot', 'Entity Framework', 'REST APIs'] },
    { category: 'ia', items: ['Integração de IA', 'SDKs de IA'] },
    { category: 'mobile', items: ['Flutter', 'Xamarin'] },
    { category: 'desktop', items: ['Delphi'] },
    { category: 'banco de dados', items: ['SQL Server', 'Oracle', 'PostgreSQL', 'MongoDB', 'Firebird'] },
    { category: 'práticas', items: ['Git', 'Agile / Scrum', 'Code Review', 'TDD'] },
  ];

  return (
    <section id="habilidades" className="section">
      <p className="section-label">02 / Habilidades</p>
      <h2>Stack &amp; ferramentas</h2>
      <div className="skills-rows">
        {groups.map(group => (
          <div key={group.category} className="skills-row">
            <p className="skills-row-title">{group.category}</p>
            <div className="skills-chips">
              {group.items.map(item => (
                <span key={item} className="chip">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
