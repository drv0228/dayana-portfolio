import React from "react";
import "./Contact.scss";
import emailjs from "emailjs-com"; // Import the EmailJS library

import decor from "../../assets/images/contact_decor.svg";

function Contact() {
  const handleMessage = (e) => {
    e.preventDefault();

    const emailJsParams = {
      serviceID: "service_pnn4umk",
      templateID: "template_adpkgoi",
      userID: "HJGzWgqJmIcrfFzp7",
    };

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Set the parameters for the email template
    const emailParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(
        emailJsParams.serviceID,
        emailJsParams.templateID,
        emailParams,
        emailJsParams.userID
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        // Reset the form fields
        e.target.reset();
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
          I would love to hear about you and how I could help. Please
          fill in the form, and I'll get back to you as soon as possible.
        </p>
      </div>
      <form className="contact-section_form" onSubmit={handleMessage}>
        <input
          className="form-values"
          required
          type="text"
          maxlength="30"
          name="name"
          placeholder="NAME"
          pattern="[A-Za-z\s]{1,50}"
          title="Only letters and spaces allowed"
        ></input>
        <input
          className="form-values"
          required
          type="email"
          name="email"
          maxlength="30"
          placeholder="EMAIL"
        ></input>
        <textarea
          required
          className="form-values input-message"
          type="text"
          name="message"
          placeholder="MESSAGE"
          rows="5"
        ></textarea>

        <button className="contact-section_form--button" type="submit">
          SEND MESSAGE
        </button>
      </form>
      <img
        className="contact-section__ovals"
        src={decor}
        alt={"ovals decor for a cute design"}
      />
    </section>
  );
}

export default Contact;


