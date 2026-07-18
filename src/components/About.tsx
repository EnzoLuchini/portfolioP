import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="section">
      <p className="section-label">01 / Sobre</p>
      <h2>Do desktop à web, ponta a ponta.</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            Sou desenvolvedor full-stack com experiência em <strong>React e
            TypeScript</strong> para web moderna, <strong>C#</strong> para
            APIs e aplicações robustas, <strong>Delphi</strong> para sistemas
            desktop e <strong>Java</strong> para soluções empresariais.
          </p>
          <p>
            Hoje sou desenvolvedor na Tunad, trabalhando principalmente com C#
            e integração de IA em aplicações. Em paralelo, desenvolvo projetos
            freelancer para pequenas empresas — de sistemas comerciais completos
            a websites com painel administrativo.
          </p>
        </div>
        <div className="about-facts">
          <div>
            <p className="fact-label">Base</p>
            <p className="fact-value">Brasil</p>
          </div>
          <div>
            <p className="fact-label">Atuação</p>
            <p className="fact-value">Full-stack · Web &amp; Desktop</p>
          </div>
          <div>
            <p className="fact-label">Aberto a</p>
            <p className="fact-value">Projetos freelance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
