import { Github, Linkedin, Instagram } from "lucide-react";
import "./Footer.css";

const SOCIAL_LINKS = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/amegh-murikkoli-046120286/",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/ameghmurikkoli9",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/a.m.e.g.h/",
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Left: social links */}
        <div className="footer-social">
          <span className="footer-connect-label">Let&apos;s Connect</span>
          <div className="footer-social-icons">
            {SOCIAL_LINKS.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={item.label}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Center: quote */}
        <div className="footer-quote">
          <blockquote>
            &ldquo;Good design is not just how it looks,
            <br />
            it&apos;s how it works.&rdquo;
          </blockquote>
        </div>

        {/* Right: resume + copyright */}
        <div className="footer-right">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-resume-btn"
          >
            Download My Resume →
          </a>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Amegh Murikkoli
          </p>
        </div>
      </div>
    </footer>
  );
}
