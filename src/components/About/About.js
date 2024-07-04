import React from "react";
import "./About.scss";

import headshot from "../../assets/images/headshot.png";
import ovals from "../../assets/images/ovals.svg";
import circle from "../../assets/images/circle.svg";
import gitIcon from "../../assets/icons/akar-icons_github-fill.svg";
import linkedln from "../../assets/icons/LinkedIn.svg";

function About() {
  return (
    <div className="about-section">
      <p className="about-title">dayana</p>
      <div className="icons-container">
        <a href="https://github.com/drv0228">
          {" "}
          <img
            className="icons"
            src={gitIcon}
            alt={"icon where user can access git link of dayana"}
          />
        </a>
        <a href="https://www.linkedin.com/in/dayana-romero/">
          <img
            className="icons"
            src={linkedln}
            alt={"icon where user can access linkedln link of dayana"}
          />
        </a>
      </div>
      <img
        className="ovals"
        src={ovals}
        alt={"ovals for a cute design"}
      />
      <img
        className="image"
        src={headshot}
        alt={"headshot of dayana, owner of the site"}
      />
      <img
        className="circle"
        src={circle}
        alt={"a circle for a cute design"}
      />
      <div className="presentation-section">
        <p className="about-presentation">Nice to</p>
        <p className="about-presentation">meet you!</p>
      </div>
      <div className="presentation-section">
        <p className="about-presentation displace">I'm</p>
        <div>
          <spam className="highlight">Dayana Romero.</spam>
        </div>
      </div>
      <p className="about-author">
        Based in the Miami, I'm a full-stack developer passionate about building
        accessible web apss that users love.
      </p>
      {/* <p className="about-contact">history of latest accomplishments</p> */}
    </div>
  );
}

export default About;
