import React from 'react';
import './App.css';
import ContactInfo from './components/ContactInfo';

interface NavButtonProps {
  sectionId: string;
  label: string;
}

const App: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error("Section ID not found:", sectionId);
    }
  };

  const NavButton = ({ sectionId, label }: NavButtonProps) => (
    <button className="button" onClick={() => scrollToSection(sectionId)}>
      {label}
    </button>
  );

  return (
    <div>
      <section id="hero" className="hero">
        <h1 className="welcome">WELCOME</h1>
        <nav className="nav">
          <NavButton sectionId="about" label="About" />
          <NavButton sectionId="projects" label="Projects" />
          <NavButton sectionId="resume" label="Resume" />
          <NavButton sectionId="contact" label="Contact" />
        </nav>
      </section>

      <section id="about" className="section about">About Section</section>
      <section id="projects" className="section projects">Projects Section</section>
      <section id="resume" className="section resume">Resume Section</section>
      <section id="contact" className="section contact">
        <ContactInfo/>
      </section>
    </div>
  );
};

export default App;
