import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { workflow } from "../../data/skills";
import "./Workflow.css";

export default function Workflow() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="workflow" ref={ref}>
      <div className="workflow-header">
        <span className="section-label">My Workflow</span>
      </div>

      <div className="workflow-steps">
        {workflow.map((item, i) => (
          <motion.div
            key={item.step}
            className="workflow-step"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45, delay: i * 0.1 }}
          >
            <span className="workflow-num">{item.step}</span>
            <div>
              <h3 className="workflow-title">{item.title}</h3>
              <p className="workflow-desc">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
