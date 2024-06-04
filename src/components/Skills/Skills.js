import React from "react";
import "./Skills.scss";

import ovals from "../../assets/images/skills-ovals.svg";

function Skills() {
    return (
        <section className="skills-section">
     <div><p className="skills-section__content">HTML</p></div>
       <div><p className="skills-section__content">CSS</p></div>
       <div><p className="skills-section__content">Javascript</p></div>
       <div><p className="skills-section__content redesign">FIREBASE</p></div>
       <div><p className="skills-section__content">React</p></div>
       <div><p className="skills-section__content">Sass</p></div>
       <img
        className="skills-section__ovals"
        src={ovals}
        alt={"ovals image for a cute design"}
      />
        </section>
    );
};

export default Skills;