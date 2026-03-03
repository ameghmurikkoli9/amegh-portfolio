import React from "react";
import "./About.css";
import profileImg from "../Images/About-img.jpg";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const About = () => {
  return (
    <motion.div
      className="about-wrapper"
      id="about"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        A Little About Me
      </motion.h2>

      <motion.section
        className="about-section"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="about-container"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="about-image"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.img
              src={profileImg}
              alt="Amegh"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            />
          </motion.div>

          <motion.div
            className="about-content"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h4
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              Hi, I'm Amegh 👋
            </motion.h4>

            <motion.p
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              I’m a Frontend Developer passionate about crafting modern,
              interactive, and visually engaging web experiences. I specialize
              in React and advanced animations, focusing on performance, clean
              architecture, and smooth user interactions that make every
              interface feel alive and intuitive.
            </motion.p>

            <motion.div
              className="about-skills"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                1. UI / UX Focus
              </motion.div>

              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                2. React Development
              </motion.div>

              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                3. Smooth Animations
              </motion.div>

              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                4. Clean Code
              </motion.div>
            </motion.div>

            <motion.a
              href="#contact"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.button
                className="about-btn"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                Contact Me
              </motion.button>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default About;