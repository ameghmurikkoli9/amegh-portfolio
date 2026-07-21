import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import userPhoto from "../../Images/image-Photoroom.png";
import "./Hero.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: delay ?? 0, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Top info bar */}
      <div className="hero-topbar">
        <span className="hero-topbar-left">Full Stack Developer</span>
        <a href="#contact" className="hero-topbar-right">
          Available for Freelance &amp; Collaborations
          <ArrowRight size={12} />
        </a>
      </div>

      {/* Main area */}
      <div className="hero-body">
        {/* Giant PORTFOLIO background text */}
        <div className="hero-portfolio-text" aria-hidden="true">
          PORTFOLIO
        </div>

        {/* User photo — sits above the bg text */}
        <motion.div
          className="hero-photo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          <img src={userPhoto} alt="Amegh Murikkoli" />
        </motion.div>

        

        {/* Name + bio — bottom left */}
        <div className="hero-name-block">
          <motion.p
            className="hero-hi"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
          >
            HI, I&apos;M
          </motion.p>

          <motion.h1
            className="hero-name"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.35}
          >
            AMEGH
            <br />
            MURIKKOLI
          </motion.h1>

          <motion.p
            className="hero-role"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.5}
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            className="hero-bio"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.62}
          >
            I craft digital experiences that are fast, purposeful, and built to
            perform. From concept to code — with clarity and impact.
          </motion.p>

          <motion.a
            href="#projects"
            className="hero-cta"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.78}
          >
            View My Work <ArrowRight size={14} />
          </motion.a>
        </div>

        {/* Stats — bottom right */}
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {[
            { label: "BASED IN", value: "INDIA" },
            { label: "EXPERIENCE", value: "1+ YEARS" },
            { label: "AVAILABLE", value: "WORLDWIDE" },
          ].map((stat) => (
            <div key={stat.label} className="hero-stat">
              <span className="hero-stat-label">{stat.label}</span>
              <strong className="hero-stat-value">{stat.value}</strong>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
