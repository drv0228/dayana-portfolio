import React from "react";
import "./Footer.scss";

import gitIcon from "../../assets/icons/akar-icons_github-fill.svg";
import linkedln from "../../assets/icons/LinkedIn.svg";

function Footer() {
    return (
      
      <footer className="footer-section">
      <p className="footer-details">dayana</p>
      <div className="icons-container">
        <img className="icons" src={gitIcon} alt={'icon where user can access git link of dayana'} />
      <img className="icons" src={linkedln} alt={'icon where user can access linkedln link of dayana'} />
      </ div>
      </footer>

      );
      };

      export default Footer;