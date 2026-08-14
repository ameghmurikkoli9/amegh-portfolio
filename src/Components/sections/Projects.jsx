import { useRef } from "react";
import { motion as Motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import projects from "../../data/projects";
import "./Projects.css";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const marqueeProjects = [...projects, ...projects];

  const handlePointerMove = (event) => {
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const rotateY = ((x / bounds.width) - 0.5) * 5;
    const rotateX = ((y / bounds.height) - 0.5) * -5;

    card.style.setProperty("--pointer-x", `${x}px`);
    card.style.setProperty("--pointer-y", `${y}px`);
    card.style.setProperty("--rotate-x", `${rotateX}deg`);
    card.style.setProperty("--rotate-y", `${rotateY}deg`);
  };

  const resetPointerEffect = (event) => {
    event.currentTarget.style.setProperty("--rotate-x", "0deg");
    event.currentTarget.style.setProperty("--rotate-y", "0deg");
  };

  return (
    <section className="projects" id="projects" ref={ref}>
      {/* Header */}
      <div className="projects-header">
        <span className="section-label">Featured Projects</span>
        <span className="projects-count">{String(projects.length).padStart(2, "0")} Selected Works</span>
      </div>

      <div className="projects-marquee">
        <div className="projects-track">
        {marqueeProjects.map((project, i) => {
          const isDuplicate = i >= projects.length;

          return (
          <Motion.div
            key={`${project.id}-${isDuplicate ? "copy" : "original"}`}
            className="project-slide"
            aria-hidden={isDuplicate || undefined}
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: (i % projects.length) * 0.1, ease: "easeOut" }}
          >
          <article
            className="project-card"
            onPointerMove={handlePointerMove}
            onPointerLeave={resetPointerEffect}
          >
            <div className="project-image-wrap">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} website preview`}
                  className={`project-image${project.imageFit === "contain" ? " project-image--contain" : ""}`}
                  loading="lazy"
                />
              ) : (
                <div className="project-image-placeholder">
                  <span className="project-placeholder-title">{project.title}</span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="project-info">
              <div className="project-info-top">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                </div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-arrow-btn"
                  aria-label={`Open ${project.title}`}
                  tabIndex={isDuplicate ? -1 : undefined}
                >
                  <ArrowRight size={18} />
                </a>
              </div>

              <p className="project-desc">{project.description}</p>

              <div className="project-stack">
                {project.techStack.map((tech) => (
                  <span key={tech} className="project-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  tabIndex={isDuplicate ? -1 : undefined}
                >
                  Live Demo <ArrowRight size={11} />
                </a>
              </div>
            </div>
          </article>
          </Motion.div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
