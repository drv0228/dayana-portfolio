import React from "react";
import "./Footer.scss";

import gitIcon from "../../assets/icons/akar-icons_github-fill.svg";
import linkedln from "../../assets/icons/LinkedIn.svg";

function Footer() {
    return (
      
      <footer className="footer-section">
      <p className="footer-details">dayana</p>
      <div className="footer-icons__container">
      <a href="https://github.com/drv0228"><img className="footer-icons" src={gitIcon} alt={'icon where user can access git link of dayana'} /></a>
      <a href="https://www.linkedin.com/in/dayana-romero/"><img className="footer-icons" src={linkedln} alt={'icon where user can access linkedln link of dayana'} /></a>
      </ div>
      </footer>

      );
      };

      export default Footer;