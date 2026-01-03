import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Olá, eu sou <span className="highlight">Desenvolvedor Full Stack</span>
        </h1>
        <p>Criando experiências digitais incríveis com React, TypeScript e tecnologias modernas</p>
        <div className="buttons">
          <button className="btn-primary">Contratar</button>
          <button className="btn-secondary">Ver Projetos</button>
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="hero-decoration">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
    </section>
  );
};

export default Hero;
