import React from "react";
import "./Skills.scss";

import ovals from "../../assets/images/skills-ovals.svg";

function Skills() {
    return (
        <section className="skills-section">
       <p className="skills-section__content">HTML</p>
       <p className="skills-section__content">CSS</p>
       <p className="skills-section__content">Javascript</p>
       <p className="skills-section__content">Accessibility</p>
       <p className="skills-section__content">React</p>
       <p className="skills-section__content">Sass</p>
       <img
        className="skills-section__ovals"
        src={ovals}
        alt={"ovals image for a cute design"}
      />
        </section>
    );
};

export default Skills;