import React from "react";
import "./Projects.css";
import skinova from "../Images/Project.png";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">What I Built</h2>
    
      

      <div className="project-card">

        <div className="project-image">
          <img src={skinova} alt="Skinova project preview" />
        </div>

        <div className="project-content">
          <h3>Skinova</h3>
          <p>
            A modern skincare landing page with smooth animations,
            responsive layout, and clean UI built using React.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>CSS</span>
            <span>Animations</span>
            <span>Responsive</span>
          </div>

          <div className="project-buttons">
            <a href="https://skinova-one.vercel.app" target="_blank" rel="noreferrer">
              Live Site
            </a>

            <a href="https://github.com/ameghmurikkoli9/Skinova" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Projects;
