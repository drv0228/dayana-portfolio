import React from "react";
import "./Skills.scss";

import ovals from "../../assets/images/skills-ovals.svg";

function Skills() {
  return (
    <section className="skills-section">
      <div>
        <p className="skills-section__content">React</p>
      </div>
      <div>
        <p className="skills-section__content">Next.JS</p>
      </div>
      <div>
        <p className="skills-section__content">TypeScript</p>
      </div>
      <div>
        <p className="skills-section__content">Javascript</p>
      </div>
      <div>
        <p className="skills-section__content">NODE.js</p>
      </div>
      <div>
        <p className="skills-section__content">SQL</p>
      </div>
      <div>
        <p className="skills-section__content redesign">APIs</p>
      </div>
      <div>
        <p className="skills-section__content redesign">CRUD Operations</p>
      </div>
      <div>
        <p className="skills-section__content">HTML</p>
      </div>
      <div>
        <p className="skills-section__content">CSS</p>
      </div>
      <div>
        <p className="skills-section__content">Tailwind CSS</p>
      </div>
      <div>
        <p className="skills-section__content">Material UI</p>
      </div>
      <div>
        <p className="skills-section__content redesign">FIREBASE</p>
      </div>

      <img
        className="skills-section__ovals"
        src={ovals}
        alt={"ovals decor for a cute design"}
      />
    </section>
  );
}

export default Skills;
