import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { num: '01', label: 'Sobre', href: '#sobre' },
    { num: '02', label: 'Habilidades', href: '#habilidades' },
    { num: '03', label: 'Experiência', href: '#experiencia' },
    { num: '04', label: 'Projetos', href: '#projetos' },
    { num: '05', label: 'Contato', href: '#contato' },
  ];

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <nav className="nav" aria-label="Navegação principal">
        <a href="#topo" className="logo">
          <span className="logo-prefix">~/</span>
          <span className="logo-text">enzo.luchini</span>
        </a>
        <div className="nav-links">
          {links.map(link => (
            <a key={link.href} href={link.href}>
              <span className="nav-num">{link.num}</span>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
