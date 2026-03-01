import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";








const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_kgzenlr",
    "template_vo7lsuo",
    form.current,
    "FpX5ixIz0pdAjBqgf"
  )
  .then(() => {
    alert("Message sent successfully 🚀");
  })
  .catch((error) => {
    console.log(error);
    alert("Something went wrong ❌");
  });

  e.target.reset();
};

  return (
    

    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <p className="contact-label">• CONTACT</p>

          <h1 className="contact-heading">
            GET IN <br /> TOUCH
          </h1>
          

          <div className="contact-info">
            <p> ameghmurikkoli9@gmail.com</p>
            <hr />
            <p className="contact-no">+91 876 721 66 99</p>
          </div>
          <hr />
          <div className="contact-socials">

  <a 
    href="https://www.instagram.com/a.m.e.g.h/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="social-icon"
  >
    <FaInstagram />
  </a>

  <a 
    href="https://wa.me/918767216699" 
    target="_blank" 
    rel="noopener noreferrer"
    className="social-icon"
  >
    <FaWhatsapp />
  </a>

  <a 
    href="https://x.com/amegh_99" 
    target="_blank" 
    rel="noopener noreferrer"
    className="social-icon"
  >
    <FaXTwitter />
  </a>
  <a 
    href="https://www.linkedin.com/in/amegh-murikkoli-046120286/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="social-icon"
  >
    <FaLinkedin />
  </a>

</div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
<form ref={form} onSubmit={sendEmail} className="contact-form">            <h3>Send Message</h3>

            <input type="text" name="from_name" placeholder="Your Name" required />
<input type="email" name="from_email" placeholder="Your Email" required />
<textarea name="message" rows="4" placeholder="Your Message" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

 
      </div>
    </section>
  );
};

export default Contact;