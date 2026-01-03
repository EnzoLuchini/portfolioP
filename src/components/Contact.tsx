import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="section">
      <h2>Contato</h2>
      <p style={{ marginBottom: '2rem' }}>
        Vamos trabalhar juntos? Entre em contato!
      </p>
      <div className="buttons">
        <button className="btn-primary">Agendar Aula</button>
        <button className="btn-secondary">Enviar Email</button>
      </div>
    </section>
  );
};

export default Contact;
