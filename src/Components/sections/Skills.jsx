import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import htmlIcon from "../../Images/html.svg";
import cssIcon from "../../Images/css.svg";
import jsIcon from "../../Images/js.svg";
import reactIcon from "../../Images/React.svg";
import nodeIcon from "../../Images/nodejs.svg";
import mongoIcon from "../../Images/mongodb.svg";
import expressIcon from "../../Images/express-js.svg";
import gitIcon from "../../Images/git-icon.svg";
import githubIcon from "../../Images/github.svg";
import figmaIcon from "../../Images/figma.svg";
import vsCodeIcon from "../../Images/vs-code.svg";
import "./Skills.css";

const SKILLS = [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "React", icon: reactIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "MongoDB", icon: mongoIcon },
  { name: "Express.js", icon: expressIcon },
  { name: "Git", icon: gitIcon },
  { name: "GitHub", icon: githubIcon },
  { name: "Figma", icon: figmaIcon },
  { name: "VS Code", icon: vsCodeIcon },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="skills-header">
        <span className="section-label">Skills &amp; Expertise</span>
      </div>

      <div className="skills-grid">
        {SKILLS.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="skill-pill"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.35, delay: i * 0.06 }}
          >
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <span className="skill-name">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
