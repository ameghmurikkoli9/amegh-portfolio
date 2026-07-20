import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Mail, MapPin, Globe } from "lucide-react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "EMAIL ME",
    value: "ameghmurikkoli9@gmail.com",
    href: "mailto:ameghmurikkoli9@gmail.com",
  },
  {
    icon: MapPin,
    label: "LOCATION",
    value: "India",
    href: null,
  },
  {
    icon: Globe,
    label: "GITHUB",
    value: "github.com/ameghmurikkoli9",
    href: "https://github.com/ameghmurikkoli9",
  },
];

export default function Contact() {
  const formRef = useRef(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact-inner">
        {/* Left column */}
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label contact-section-label">
            Let&apos;s Collaborate
          </span>
          <h2 className="contact-heading">
            HAVE A PROJECT
            <br />
            IN MIND?
          </h2>
          <p className="contact-sub">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="contact-info-list">
            {CONTACT_INFO.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="contact-info-item">
                  <div className="contact-info-icon">
                    <Icon size={16} />
                  </div>
                  <div>
                    <span className="contact-info-label">{item.label}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="contact-info-value contact-info-link"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-info-value">{item.value}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right column — form */}
        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact-form"
            noValidate
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="from_name"
                  type="text"
                  className="form-input"
                  placeholder="Your name"
                  required
                  autoComplete="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="reply_to"
                  type="email"
                  className="form-input"
                  placeholder="your@email.com"
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject" className="form-label">
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                className="form-input"
                placeholder="Project idea, collaboration..."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message" className="form-label">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                className="form-input form-textarea"
                placeholder="Tell me about your project..."
                rows={5}
                required
              />
            </div>

            <button
              type="submit"
              className="form-submit"
              disabled={status === "loading"}
            >
              {status === "loading"
                ? "Sending..."
                : "Let's Create Something Amazing"}
              <ArrowRight size={14} />
            </button>

            {status === "success" && (
              <p className="form-status form-status--success">
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="form-status form-status--error">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
