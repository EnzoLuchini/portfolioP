import React from 'react';
import { Header, Hero, About, Skills, Experience, Projects, Contact } from './components';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
