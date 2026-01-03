import React from 'react';
import { colors } from '../styles/colors';

const Experience: React.FC = () => {
  const cardStyle = {
    background: colors.backgroundCard,
    borderColor: `${colors.primary}33`
  };

  return (
    <section id="experiencia" className="section">
      <h2 style={{ color: colors.white }}>Experiência</h2>
      <div className="experience-card" style={cardStyle}>
        <h3 style={{ color: colors.primary }}>Desenvolvedor Full-Stack</h3>
        <h4 style={{ color: colors.secondary }}>Apdata</h4>
        <p className="experience-period" style={{ color: colors.grayMedium }}>2023 - Presente (2 anos)</p>
        <p style={{ color: colors.grayLight }}>Desenvolvimento de soluções empresariais utilizando tecnologias modernas, focando em performance e escalabilidade.</p>
      </div>
    </section>
  );
};

export default Experience;
