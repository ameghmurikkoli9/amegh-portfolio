import { useRef } from "react";
import { motion as Motion, useInView } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Check } from "lucide-react";
import { about, capabilities } from "../../data/profile";
import "./About.css";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about-intro">
        <span className="about-watermark" aria-hidden="true">ABOUT</span>

        <div className="about-meta">
          <span className="section-label">{about.eyebrow}</span>
          <span className="about-meta-line" />
          <span className="about-meta-note">Full Stack / Design &amp; Development</span>
        </div>

        <Motion.div
          className="about-heading-wrap"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <h2 className="about-heading">
            {about.heading}
            <em>{about.headingAccent}</em>
          </h2>
        </Motion.div>

        <Motion.div
          className="about-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          <div className="about-copy-label">
            <span>Profile / 01</span>
            <span>Developer Dossier</span>
          </div>
          <div className="about-copy-body">
            {about.paragraphs.map((paragraph, index) => (
              <p key={paragraph} className={index === 0 ? "about-copy-lead" : undefined}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className="about-copy-footer">
            <span className="about-availability"><i /> Available for select projects</span>
            <a href="#contact" className="about-copy-cta">
              Let&apos;s talk <ArrowUpRight size={16} />
            </a>
          </div>
        </Motion.div>

        <ArrowDownRight className="about-heading-icon" size={40} />

        <div className="about-focus-list">
          {about.focus.map((item, index) => (
            <span key={item} className="about-focus-item">
              <span className="about-focus-index">0{index + 1}</span>
              <span>{item}</span>
              <Check size={14} />
            </span>
          ))}
        </div>
      </div>

      <div className="capabilities">
        <div className="capabilities-header">
          <span className="section-label">What I Build</span>
          <p>Focused solutions from interface to deployment.</p>
        </div>

        <div className="capabilities-grid">
          {capabilities.map((capability, index) => (
            <Motion.article
              key={capability.title}
              className="capability-card"
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.16 + index * 0.1 }}
            >
              <span className="capability-index">0{index + 1}</span>
              <div className="capability-main">
                <span className="capability-kicker">Core Capability</span>
                <h3>{capability.title}</h3>
              </div>
              <div className="capability-detail">
                <p>{capability.description}</p>
                <div className="capability-tools">
                  {capability.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </div>
              <span className="capability-arrow" aria-hidden="true">
                <ArrowUpRight size={20} />
              </span>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
