import React from 'react';

interface Job {
  role: string;
  company: string;
  period: string;
  description: string;
  current?: boolean;
}

const jobs: Job[] = [
  {
    role: 'Desenvolvedor',
    company: 'Tunad',
    period: '2026 — presente',
    description:
      'Desenvolvimento de aplicações em C# com integração de IA: utilizo SDKs de inteligência artificial para embarcar modelos de IA como funcionalidade dos produtos.',
    current: true,
  },
  {
    role: 'Desenvolvedor',
    company: 'Apdata do Brasil',
    period: '2024 — 2026 · 2 anos',
    description:
      'Desenvolvimento de soluções empresariais de RH com C#, Delphi e React, utilizadas por grandes empresas, com foco em performance e manutenção de sistemas críticos.',
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experiencia" className="section">
      <p className="section-label">03 / Experiência</p>
      <h2>Onde estive construindo</h2>
      <div className="experience-list">
        {jobs.map(job => (
          <div key={job.company} className={`experience-card ${job.current ? 'experience-current' : ''}`}>
            <h3>{job.role}</h3>
            <p className="experience-company">{job.company}</p>
            <p className="experience-period">{job.period}</p>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
