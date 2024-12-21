import React from "react";

import "./Projects.scss";
import cheffy from "../../assets/images/cheffy.gif";
import learningHub from "../../assets/images/learningHub.gif";
import forum from "../../assets/images/forum.png";
import dayify from "../../assets/images/dayify.png";
import inStore from "../../assets/images/InStore.png";
import cocktaillandia from "../../assets/images/cocktaillandia.png";

function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-section__nav">
        <h1 className="projects-section__title">Latest Projects</h1>
        {/* <h4 className="projects-section__contact" onClick={handleContactClick}>
          CONTACT ME
        </h4> */}
      </div>
      <div className="projects-section__gallery">
        <div className="projects-section__project">
          <img
            className="projects-section__images"
            src={cheffy}
            alt={"Recipe Finder's project"}
          />
          <h2 className="projects-section__titles">CHEFFY</h2>

          <div className="projects-section__tech-stack">
            <h3>TypeScript</h3>
            <h3>Next.JS</h3>
            <h3>Tailwind CSS</h3>
            <h3>AI</h3>
          </div>
          <div className="projects-section__links">
            <a href="https://cheffyguru.com/">
              <h4>VIEW PROJECT</h4>
            </a>
            <a href="https://github.com/drv0228">
              <h4>VIEW CODE</h4>
            </a>
          </div>
        </div>

        <div className="projects-section__project">
          <img
            className="projects-section__images"
            src={learningHub}
            alt={"Learning Hub's project"}
          />
          <h2 className="projects-section__titles">MVP LEARNING HUB</h2>

          <div className="projects-section__tech-stack">
            <h3>JavaScript</h3>
            <h3>CSS</h3>
            <h3>REACT</h3>
            <h3>FIREBASE</h3>
          </div>
          <div className="projects-section__links">
            <a href="https://communiti-learninghub.web.app/">
              <h4>VIEW PROJECT</h4>
            </a>
            <a href="https://github.com/makeitMVPadmin/P4_Member_Achievement/tree/develop">
              <h4>VIEW CODE</h4>
            </a>
          </div>
        </div>

        <div className="projects-section__project">
          <img
            className="projects-section__images"
            src={forum}
            alt={"dayify's project"}
          />
          <h2 className="projects-section__titles">MVP FORUM</h2>

          <div className="projects-section__tech-stack">
            <h3>JavaScript</h3>
            {/* <h3>CSS</h3> */}
            <h3>REACT</h3>
            <h3>FIREBASE</h3>
          </div>
          <div className="projects-section__links">
            <a href="https://forum-630fc.web.app/">
              <h4>VIEW PROJECT</h4>
            </a>
            <a href="https://github.com/makeitMVPadmin/P3Forum-">
              <h4>VIEW CODE</h4>
            </a>
          </div>
        </div>

        <div className="projects-section__project">
          <img
            className="projects-section__images"
            src={inStore}
            alt={"dayify's project"}
          />
          <h2 className="projects-section__titles">INSTORE</h2>

          <div className="projects-section__tech-stack">
            <h3>JavaScript</h3>
            <h3>REACT</h3>
            <h3>NODE.js</h3>
            <h3>SQL</h3>
          </div>
          <div className="projects-section__links">
            {/* <a href="https://mystore-inventory-mng.netlify.app/">
              <h4>VIEW PROJECT</h4>
            </a> */}
            <a href="https://github.com/drv0228/instore">
              <h4>VIEW CODE</h4>
            </a>
          </div>
        </div>

        <div className="projects-section__project">
          <img
            className="projects-section__images"
            src={cocktaillandia}
            alt={"dayify's project"}
          />
          <h2 className="projects-section__titles">COCKTAILLANDIA</h2>

          <div className="projects-section__tech-stack">
            <h3>JavaScript</h3>
            <h3>REACT</h3>
            <h3>NODE.js</h3>
            <h3>APIs</h3>
          </div>
          <div className="projects-section__links">
            <a href="https://cocktaillandia.netlify.app">
              <h4>VIEW PROJECT</h4>
            </a>
            <a href="https://github.com/drv0228/cocktailLandia">
              <h4>VIEW CODE</h4>
            </a>
          </div>
        </div>

        <div className="projects-section__project">
          <img
            className="projects-section__images"
            src={dayify}
            alt={"dayify's project"}
          />
          <h2 className="projects-section__titles">DAYIFY</h2>

          <div className="projects-section__tech-stack">
            <h3>JavaScript</h3>
            <h3>REACT</h3>
            <h3>NODE.js</h3>
            <h3>APIs</h3>
          </div>
          <div className="projects-section__links">
            {/* <h4>VIEW PROJECT</h4> */}
            <a href="https://github.com/drv0228/dayify-client">
              <h4>VIEW CODE</h4>
            </a>
          </div>
        </div>

        {/* <div className="projects-section__project">
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
          <a href="https://github.com/drv0228/memory-game">
            <h4>VIEW CODE</h4>
          </a>
        </div>
        </div> */}

        {/* <div className="projects-section__project">
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
          {/* <h4>VIEW PROJECT</h4> */}
        {/* <a href="https://github.com/drv0228/">
            <h4>VIEW CODE</h4>
          </a>
        </div> */}
        {/* </div> */}
      </div>
    </section>
  );
}

export default Projects;
