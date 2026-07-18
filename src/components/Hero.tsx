import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="topo">
      <p className="hero-eyebrow">
        <span className="prompt">$</span> whoami
        <span className="cursor" aria-hidden="true"></span>
      </p>
      <h1>
        Enzo
        <span className="surname">Luchini</span>
      </h1>
      <p className="hero-role">{'// desenvolvedor full-stack'}</p>
      <p className="hero-desc">
        Construo sistemas web com React e TypeScript, APIs com C# e soluções
        desktop com Delphi — do banco de dados à interface.
      </p>
      <div className="hero-actions">
        <a className="btn btn-primary" href="#projetos">Ver projetos</a>
        <a className="btn btn-ghost" href="mailto:luchini.enzo@outlook.com">Entrar em contato</a>
      </div>
      <p className="hero-status">
        <span className="status-dot" aria-hidden="true"></span>
        Disponível para vagas e projetos freelance
      </p>
    </section>
  );
};

export default Hero;
