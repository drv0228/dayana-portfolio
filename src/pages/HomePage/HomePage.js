import React from "react";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";

function HomePage() {
  return (
    <main>
      <About />
      <Skills />
      <Projects />
      <Contact />
      
    </main>
  );
}

export default HomePage;

