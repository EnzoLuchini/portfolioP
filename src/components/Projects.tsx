import React from 'react';
import ProjectCategory from './ProjectCategory';
import { Project } from './ProjectCard';

// TODO: adicionar repoUrl / demoUrl nos projetos que têm repositório público
const freelancerProjects: Project[] = [
  {
    title: 'Sistema Comercial',
    tech: ['Delphi', 'Firebird'],
    description: 'Sistema completo de vendas e controle de estoque desenvolvido para uma pequena empresa, em uso diário na operação.'
  },
  {
    title: 'Website Corporativo',
    tech: ['React', 'TypeScript'],
    description: 'Site responsivo com painel administrativo para empresa local gerenciar o próprio conteúdo.'
  }
];

const academicProjects: Project[] = [
  {
    title: 'Sistema de Gerenciamento',
    tech: ['React', 'TypeScript', 'Node.js'],
    description: 'Aplicação completa construída para dominar arquitetura full-stack moderna, do banco à interface.'
  },
  {
    title: 'API REST com C#',
    tech: ['.NET Core', 'Entity Framework'],
    description: 'API robusta desenvolvida para aprofundar conhecimentos em backend, com boas práticas de arquitetura.'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projetos" className="section">
      <p className="section-label">04 / Projetos</p>
      <h2>Trabalho selecionado</h2>

      <ProjectCategory
        title="Freelancer · clientes reais"
        description="Soluções entregues e em produção para clientes"
        projects={freelancerProjects}
        startIndex={1}
      />

      <ProjectCategory
        title="Estudos & academia"
        description="Projetos para aprender e experimentar novas tecnologias"
        projects={academicProjects}
        startIndex={freelancerProjects.length + 1}
      />
    </section>
  );
};

export default Projects;
