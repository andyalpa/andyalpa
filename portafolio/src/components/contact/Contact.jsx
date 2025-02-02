import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_7r41qut", "template_9xecopv", form.current, "FXHDlwEA-I5IhBZS9")
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
      });
  };

  return (
    <div className="contact container section" id="contact">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about something!</h3>
          <p className="contact__details">
            Tired of forms? Just send me an email then. 😉
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-item">
              <input
                type="text"
                name="user_name"
                className="contact__form-input"
                placeholder="Insert your name"
                required
              />
            </div>
            <div className="contact__form-item">
              <input
                type="email"
                name="user_email"
                className="contact__form-input"
                placeholder="Insert your email"
                required
              />
            </div>
            <div className="contact__form-item contact__form-item--full">
              <input
                type="text"
                name="subject"
                className="contact__form-input"
                placeholder="Insert your subject"
                required
              />
            </div>
          </div>
          <div className="contact__form-item contact__form-item--full area">
            <textarea
              name="message"
              cols={30}
              rows={10}
              className="contact__form-input"
              placeholder="Write your message"
              required
            />
          </div>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
