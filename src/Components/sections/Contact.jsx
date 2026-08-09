import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

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
    icon: Phone,
    label: "CALL ME",
    value: "+91 876 721 66 99",
    href: "tel:+918767216699",
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({ ...currentData, [name]: value }));
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (Object.values(formData).some((value) => !value.trim())) return;

    setStatus("sending");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );

      setFormData(INITIAL_FORM_DATA);
      setStatus("success");
    } catch (error) {
      console.error("EmailJS submission failed:", error);
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
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="Your name"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="your@email.com"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.subject}
                  onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="form-submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Let's Create Something Amazing"}
              {status !== "sending" && <ArrowRight size={14} />}
            </button>

            {status === "success" && (
              <p className="form-status form-status--success" role="status">
                🚀 Boom! Your message just reached us.
              </p>
            )}
            {status === "error" && (
              <p className="form-status form-status--error" role="alert">
                ❌ Oops! Something went wrong. Please try again.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
