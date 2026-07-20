import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import projects from "../../data/projects";
import "./Projects.css";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="projects" id="projects" ref={ref}>
      {/* Header */}
      <div className="projects-header">
        <span className="section-label">Featured Projects</span>
        <a href="#" className="projects-view-all">
          View All Projects <ArrowRight size={13} />
        </a>
      </div>

      {/* Grid */}
      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: i * 0.14, ease: "easeOut" }}
          >
            {/* Thumbnail */}
            <div className="project-image-wrap">
              <span className="project-num">{project.number}</span>
              <div className="project-image-placeholder">
                <span className="project-placeholder-title">{project.title}</span>
              </div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-ext-link"
                aria-label={`View ${project.title} live`}
              >
                <ExternalLink size={16} />
              </a>
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
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link project-link--alt"
                >
                  GitHub <ArrowRight size={11} />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
