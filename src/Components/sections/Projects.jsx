import { useRef } from "react";
import { motion as Motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import projects from "../../data/projects";
import "./Projects.css";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);
  const hasMoreProjects = projects.length > featuredProjects.length;

  return (
    <section className="projects" id="projects" ref={ref}>
      {/* Header */}
      <div className="projects-header">
        <span className="section-label">Featured Projects</span>
        <span className="projects-count">03 Selected Works</span>
      </div>

      {/* Grid */}
      <div className="projects-grid">
        {featuredProjects.map((project, i) => (
          <Motion.article
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: i * 0.14, ease: "easeOut" }}
          >
            {/* Thumbnail */}
            <div className="project-image-wrap">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} website preview`}
                  className="project-image"
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
                >
                  Live Demo <ArrowRight size={11} />
                </a>
              </div>
            </div>
          </Motion.article>
        ))}
      </div>

      {hasMoreProjects && (
        <div className="projects-more-wrap">
          <a
            href="https://github.com/ameghmurikkoli9?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="projects-view-more"
          >
            View More Projects <ArrowRight size={15} />
          </a>
        </div>
      )}
    </section>
  );
}
