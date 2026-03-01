import React from "react";
import "./About.css";
import profileImg from "../Images/About-img.jpg";

const About = () => {
  return (
    <div className="about-wrapper" id="about">
      <h2>A Little About Me</h2>
      <section className="about-section">
        <div className="about-container">
          <div className="about-image">
            <img src={profileImg} alt="Amegh" />
          </div>

          <div className="about-content">
            <h4>Hi, I'm Amegh 👋</h4>

            <p>
              I’m a Frontend Developer passionate about crafting modern,
              interactive, and visually engaging web experiences. I specialize
              in React and advanced animations, focusing on performance, clean
              architecture, and smooth user interactions that make every
              interface feel alive and intuitive.
            </p>

            <div className="about-skills">
              <div>1. UI / UX Focus</div>
              <div>2. React Development</div>
              <div>3. Smooth Animations</div>
              <div>4. Clean Code</div>
            </div>
            <a href="#contact">
              <button className="about-btn" href="#contact">
                Contact Me
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
