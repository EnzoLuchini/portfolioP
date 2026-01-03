import React from 'react';
import ProjectCategory from './ProjectCategory';

const Projects: React.FC = () => {
  const academicProjects = [
    {
      title: 'Sistema de Onboarding desenvolvido para a Vivo',
      tech: 'React + Java Spring Boot + PostgreSQL + MongoDB',
      description:
        'Projeto selecionado para o top 10 pela Vivo em um desafio acadêmico realizado pela faculdade FIAP, na qual mais de 50 equipes estavam inscritas. O sistema foca em facilitar o onboarding de novos funcionários na Vivo, integrando React no front-end, Java Spring Boot no back-end e bancos de dados PostgreSQL e MongoDB.',
    },
    {
      title: 'API REST com C#',
      tech: '.NET Core + Entity Framework',
      description: 'API robusta para aprofundar conhecimentos em backend',
    },
  ];

  const freelancerProjects = [
    {
      title: 'Sistema Comercial',
      tech: 'Delphi + Firebird',
      description: 'Sistema completo de vendas e estoque para pequena empresa',
    },
    {
      title: 'Website Corporativo',
      tech: 'React + TypeScript',
      description: 'Site responsivo com painel administrativo para empresa local',
    },
  ];

  return (
    <section id="projetos" className="section">
      <h2>Projetos</h2>

      <ProjectCategory
        title="Projetos Acadêmicos/Estudos"
        description="Projetos desenvolvidos durante a faculdade ou realizados para aprender e experimentar novas tecnologias"
        projects={academicProjects}
      />

      <ProjectCategory
        title="Projetos Freelancer"
        description="Soluções desenvolvidas para clientes reais"
        projects={freelancerProjects}
      />
    </section>
  );
};

export default Projects;
