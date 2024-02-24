import React from "react";
import "./About.scss";

import headshot from "../../assets/images/headshot.png";
import ovals from "../../assets/images/ovals.svg";
import oval from "../../assets/images/Oval.svg";
import gitIcon from "../../assets/icons/akar-icons_github-fill.svg";
import linkedln from "../../assets/icons/LinkedIn.svg";

function About() {
    return (
      
      <div className="about-section">
      <p className="about-title">dayana</p>
      <div className="icons-container"><img className="icons" src={gitIcon} alt={'icon where user can access git link of dayana'} />
      <img className="icons" src={linkedln} alt={'icon where user can access linkedln link of dayana'} /></div>
      <img className="ovals" src={ovals} alt={'ovals image for a cute design'} />
      <img className="image" src={headshot} alt={'headshot of dayana, owner of the site'} />
      <img className="circle" src={oval} alt={'circle image for a cute design'} />
      <div className="presentation-section"><p className="about-presentation">Nice to</p><p className="about-presentation">meet you!</p></div>
      <div className="presentation-section"><p className="about-presentation displace">I'm</p><div><spam className="highlight">Dayana Romero.</spam></div></div>
      <p className="about-author">Based in the Miami, I'm a full-stack developer passionate about building accessible web apss that users love.</p>
      <p className="about-contact">CONTACT ME</p>
      </div>
      
    );
};

    export default About;