import React from "react";
import "./Projects.scss";

import dayify from "../../assets/images/dayify.png";
import memory from "../../assets/images/memory-game.png";
import inStock from "../../assets/images/instock.png";
import cocktaillandia from "../../assets/images/cocktaillandia.png";
import brainflix from "../../assets/images/brainflix.png";

function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-section__nav">
        <h1>Projects</h1>
        <h4 className="projects-section__contact">CONTACT ME</h4>
      </div>
    <div className="projects-section__gallery">
        <div className="projects-section__project">
      <img
        className="projects-section__images"
        src={dayify}
        alt={"dayify's project"}
      />
      <h2>DAYIFY</h2>

      <div className="projects-section__tech-stack">
        <h3>HTML</h3>
        <h3>CSS</h3>
        <h3>SASS</h3>
        <h3>REACT</h3>
        <h3>NODE</h3>
      </div>
      <div className="projects-section__links">
        <h4>VIEW PROJECT</h4>
        <a href="https://github.com/drv0228/dayify-client"><h4>VIEW CODE</h4></a>
      </div>
      </div>

      <div className="projects-section__project">
      <img
        className="projects-section__images"
        src={memory}
        alt={"dayify's project"}
      />
      <h2>MEMORY</h2>

      <div className="projects-section__tech-stack">
        <h3>HTML</h3>
        <h3>CSS</h3>
        <h3>SASS</h3>
        <h3>REACT</h3>
        <h3>NODE</h3>
      </div>
      <div className="projects-section__links">
        <h4>VIEW PROJECT</h4>
        <a href="https://github.com/drv0228/memory-game"><h4>VIEW CODE</h4></a>
      </div>
      </div>

      <div className="projects-section__project">
      <img
        className="projects-section__images"
        src={inStock}
        alt={"dayify's project"}
      />
      <h2>INSTOCK</h2>

      <div className="projects-section__tech-stack">
        <h3>HTML</h3>
        <h3>CSS</h3>
        <h3>SASS</h3>
        <h3>REACT</h3>
        <h3>NODE</h3>
      </div>
      <div className="projects-section__links">
        <h4>VIEW PROJECT</h4>
        {/* <h4>VIEW CODE</h4> */}
      </div>
</div>
<div className="projects-section__project">
      <img
        className="projects-section__images"
        src={cocktaillandia}
        alt={"dayify's project"}
      />
      <h2>COCKTAILLANDIA</h2>

      <div className="projects-section__tech-stack">
        <h3>HTML</h3>
        <h3>CSS</h3>
        <h3>SASS</h3>
        <h3>REACT</h3>
        <h3>NODE</h3>
      </div>
      <div className="projects-section__links">
        <h4>VIEW PROJECT</h4>
        <a href="https://github.com/drv0228/cocktailLandia">
          <h4>VIEW CODE</h4>
        </a>
      </div>
</div>
<div className="projects-section__project">
      <img
        className="projects-section__images"
        src={brainflix}
        alt={"dayify's project"}
      />
      <h2>BRAINFLIX</h2>

      <div className="projects-section__tech-stack">
        <h3>HTML</h3>
        <h3>CSS</h3>
        <h3>SASS</h3>
        <h3>REACT</h3>
        <h3>NODE</h3>
      </div>
      <div className="projects-section__links">
        <h4>VIEW PROJECT</h4>
        {/* <h4>VIEW CODE</h4> */}
      </div>
      </div>
      </div>
    </section>
  );
}

export default Projects;
