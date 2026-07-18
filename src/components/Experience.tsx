import React from 'react';

const START_YEAR = 2023;

const Experience: React.FC = () => {
  const years = new Date().getFullYear() - START_YEAR;

  return (
    <section id="experiencia" className="section">
      <p className="section-label">03 / Experiência</p>
      <h2>Onde estive construindo</h2>
      <div className="experience-card">
        <h3>Desenvolvedor Full-Stack</h3>
        <p className="experience-company">Apdata</p>
        <p className="experience-period">
          {START_YEAR} — presente · {years} {years === 1 ? 'ano' : 'anos'}
        </p>
        <p>
          Desenvolvimento de soluções empresariais de RH utilizadas por grandes
          empresas, com foco em performance, escalabilidade e manutenção de
          sistemas críticos.
        </p>
      </div>
    </section>
  );
};

export default Experience;
