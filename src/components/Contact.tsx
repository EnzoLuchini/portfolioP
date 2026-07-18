import React, { useEffect, useRef, useState } from 'react';

const EMAIL = 'luchini.enzo@outlook.com';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => window.clearTimeout(timeoutRef.current);
  }, []);

  const handleCopy = () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setCopied(false), 2000);
    }).catch(() => {});
  };

  return (
    <section id="contato" className="section">
      <p className="section-label">05 / Contato</p>
      <h2>Vamos construir algo?</h2>
      <p className="contact-lead">
        Estou aberto a projetos freelance.
        Me chame por email — respondo rápido.
      </p>
      <div className="contact-email-wrap">
        <a className="contact-email" href={`mailto:${EMAIL}`} onClick={handleCopy}>
          {EMAIL}
        </a>
        <p className={`contact-copy-hint ${copied ? 'copied' : ''}`} aria-live="polite">
          {copied ? '✓ email copiado!' : 'clique para copiar'}
        </p>
      </div>
      <div className="contact-socials">
        <a href="https://github.com/EnzoLuchini" target="_blank" rel="noopener noreferrer">
          <span className="arrow">→</span>GitHub
        </a>
        <a href="https://www.linkedin.com/in/enzo-luchini/" target="_blank" rel="noopener noreferrer">
          <span className="arrow">→</span>LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
