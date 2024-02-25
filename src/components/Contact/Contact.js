import React from "react";
import "./Contact.scss";

import ovals from "../../assets/images/Ovals.svg";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <p className="contact-section__title">Contact</p>
        <p className="contact-section__message">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I'll get back to you as soon as possible.
        </p>
      </div>
      <form className="contact-section_form">
        <input className="form-values" type="text" placeholder="NAME"></input>
        <input className="form-values" type="text" placeholder="EMAIL"></input>
        <input
          className="form-values input-message"
          type="text"
          placeholder="MESSAGE"
        ></input>
        <button className="contact-section_form--button">SEND MESSAGE</button>
      </form>
      <img
        className="contact-section__ovals"
        src={ovals}
        alt={"ovals image for a cute design"}
      />
    </section>
  );
}

export default Contact;
