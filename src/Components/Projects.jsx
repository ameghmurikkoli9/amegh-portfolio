import React from "react";
import "./Projects.css";
import skinova from "../Images/Project.png";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Projects = () => {
    
  return (
    <motion.section id="projects" className="projects-section" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
      <motion.h2 className="projects-title" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>What I Built</motion.h2>
    
      

      <motion.div className="project-card" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>

        <motion.div className="project-image" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <motion.img src={skinova} alt="Skinova project preview" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} />
        </motion.div>

        <motion.div className="project-content" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <motion.h3 variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>Skinova</motion.h3>
          <motion.p variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            A modern skincare landing page with smooth animations,
            responsive layout, and clean UI built using React.
          </motion.p>

          <motion.div className="tech-stack" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <motion.span variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>React</motion.span>
            <motion.span variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>CSS</motion.span>
            <motion.span variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>Animations</motion.span>
            <motion.span variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>Responsive</motion.span>
          </motion.div>

          <motion.div className="project-buttons" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <motion.a href="https://skinova-one.vercel.app" target="_blank" rel="noreferrer" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              Live Site
            </motion.a>

            <motion.a href="https://github.com/ameghmurikkoli9/Skinova" target="_blank" rel="noreferrer" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              GitHub
            </motion.a>
          </motion.div>
        </motion.div>

      </motion.div>

    </motion.section>
  );
};

export default Projects;
