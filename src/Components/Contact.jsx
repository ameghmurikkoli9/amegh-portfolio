import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
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
    <motion.section
      className="contact-section"
      id="contact"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="contact-container"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* LEFT SIDE */}

        <motion.div
          className="contact-left"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            className="contact-label"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            • CONTACT
          </motion.p>

          <motion.h1
            className="contact-heading"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            GET IN <br /> TOUCH
          </motion.h1>

          <motion.div
            className="contact-info"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              ameghmurikkoli9@gmail.com
            </motion.p>

            <motion.hr
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            />

            <motion.p
              className="contact-no"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              +91 876 721 66 99
            </motion.p>
          </motion.div>

          <motion.hr
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          />

          <motion.div
            className="contact-socials"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.a
              href="https://www.instagram.com/a.m.e.g.h/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <FaInstagram />
            </motion.a>

            <motion.a
              href="https://wa.me/918767216699"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <FaWhatsapp />
            </motion.a>

            <motion.a
              href="https://x.com/amegh_99"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <FaXTwitter />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/amegh-murikkoli-046120286/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <FaLinkedin />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          className="contact-right"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              Send Message
            </motion.h3>

            <motion.input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            />

            <motion.input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            />

            <motion.textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            />

            <motion.button
              type="submit"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>

      <motion.div
        className="wrap"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.a
          className="button"
          href="#home"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Scroll To Top
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Contact;