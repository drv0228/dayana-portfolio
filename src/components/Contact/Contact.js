import React from "react";
import "./Contact.scss";
import emailjs from "emailjs-com"; // Import the EmailJS library

import ovals from "../../assets/images/Ovals.svg";

function Contact() {
    const handleMessage = (e) => {
        e.preventDefault();
    
        const emailJsParams = {
          serviceID: "service_pnn4umk",
          templateID: "template_adpkgoi",
          userID: "HJGzWgqJmIcrfFzp7",
        };
    
        const formData = new FormData(e.target);
        const userName = formData.get("userName");
        const userEmail = formData.get("userEmail");
        const userMessage = formData.get("userMessage");
    
        // Set the parameters for the email template
        const emailParams = {
          from_name: userName,
          from_email: userEmail,
          message: userMessage,
        };
    
        // Send the email using EmailJS
        emailjs.send(emailJsParams.serviceID, emailJsParams.templateID, emailParams, emailJsParams.userID)
          .then((response) => {
            console.log("Email sent successfully:", response);
            
          })
          .catch((error) => {
            console.error("Email sending failed:", error);
            
          });
      };
    

  return (
    <section className="contact-section">
      <div className="contact-container">
        <p className="contact-section__title">Contact</p>
        <p className="contact-section__message">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I'll get back to you as soon as possible.
        </p>
      </div>
      <form className="contact-section_form" onSubmit={handleMessage}>
        <input className="form-values" required type="text" name="userName" placeholder="NAME"></input>
        <input className="form-values" required type="email" name="userEmail" placeholder="EMAIL"></input>
        <input required
          className="form-values input-message"
          type="text" name="userMessage"
          placeholder="MESSAGE"
        ></input>
        <button className="contact-section_form--button" type="submit">SEND MESSAGE</button>
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
