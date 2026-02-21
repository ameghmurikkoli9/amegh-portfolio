import React, { useRef } from "react";
import "./Skills.css";
import { motion, useInView } from "framer-motion";
import html from "../Images/html.svg";
import css from "../Images/css.svg";
import js from "../Images/js.svg";
import react from "../Images/React.svg";
import git from "../Images/git-icon.svg";
import github from "../Images/github.jpg";
import vscode from "../Images/vs-code.svg";
import devtools from "../Images/devtools.svg";
import node from "../Images/nodejs.svg";
import express from "../Images/express-js.svg";
import mongo from "../Images/mongodb.svg";
import figma from "../Images/figma.svg";
import { tr } from "framer-motion/client";

const LettersPullUp = ({ text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const letters = text.split("");
  const variants = {
    
    initial: { y: 12, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.035,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <span ref={ref} style={{ display: "inline-block" }}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={variants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          custom={i}
          style={{ display: "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
};
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

const Skills = () => {
  return (
    <>
      <h2 className="skills-title">
        <LettersPullUp text="Tools Behind My Work" />
      </h2>
      <div className="skills">
        <motion.div
          className="skill frontend"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {" "}
          <motion.h2
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          >Core Skills</motion.h2>
          <motion.img
           variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="html" src={html} alt="HTML" />
          <motion.img 
           variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="css" src={css} alt="CSS" />
          <motion.img 
           variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="js" src={js} alt="JavaScript" />
          <motion.img 
           variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="react" src={react} alt="React" />
        </motion.div>
        <motion.div
          className="skill tools"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {" "}
          <motion.h2
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>Development Tools</motion.h2>
          <motion.img variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
           className="git" src={git} alt="Git" />
          <motion.img  variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="github" src={github} alt="GitHub" />
          <motion.img  variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="vscode" src={vscode} alt="VS Code" />
          <motion.img  variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="devtools" src={devtools} alt="DevTools" />
        </motion.div>
        <motion.div
          className="skill learning"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {" "}
          <motion.h2
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          >Currently Exploring</motion.h2>
          <motion.img  variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="node" src={node} alt="Node.js" />
          <motion.img  variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="express" src={express} alt="Express.js" />
          <motion.img variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
           className="mongo" src={mongo} alt="MongoDB" />
          <motion.img variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="figma" src={figma} alt="Figma" />
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
