import React from "react";
import "./contact.css";

function Contact() {
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
        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-item">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>
            <div className="contact__form-item">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Insert your email"
              />
            </div>
            <div className="contact__form-item contact__form-item--full">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your subject"
              />
            </div>
          </div>
          <div className="contact__form-item contact__form-item--full area">
            <textarea
              type="text"
              cols={30}
              rows={10}
              className="contact__form-input"
              placeholder="Write your message"
            />
          </div>
          <button className="btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
