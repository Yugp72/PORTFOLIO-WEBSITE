import React from "react";
import '../assets/styles/Contact.scss';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          {/* <span className="section-label">Contact</span> */}
          <h1>Get in Touch</h1>
          <p>
            Want to chat? Just shoot me an{" "}
            <a
              href="mailto:yugp7202@gmail.com"
              className="email-link"
            >
              email with your query
            </a>{" "}
            and I'll respond whenever I can. I will ignore all soliciting.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
