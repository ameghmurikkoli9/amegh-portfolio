import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./PillNav.css";

const PillNav = ({
  items,
  activeHref,
  ease = "power3.easeOut",
  baseColor = "#fff",
  pillColor = "#060010",
  hoveredPillTextColor = "#060010",
  pillTextColor
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;

  const circleRefs = useRef([]);
  const tlRefs = useRef([]);
  const [open, setOpen] = useState(false);
  

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle, i) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;

        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(
          R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))
        ) + 1;

        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`
        });

        const label = pill.querySelector(".pill-label");
        const white = pill.querySelector(".pill-label-hover");

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        const tl = gsap.timeline({ paused: true });

        tl.to(circle, { scale: 1.2, duration: 0.6, ease }, 0);

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 0.6, ease }, 0);
        }

        if (white) {
          tl.to(white, { y: 0, opacity: 1, duration: 0.6, ease }, 0);
        }

        tlRefs.current[i] = tl;
      });
    };

    layout();
    window.addEventListener("resize", layout);
    return () => window.removeEventListener("resize", layout);
  }, [items, ease]);

  const handleEnter = (i) => {
    tlRefs.current[i]?.play();
  };

  const handleLeave = (i) => {
    tlRefs.current[i]?.reverse();
  };

  const cssVars = {
    ["--base"]: baseColor,
    ["--pill-bg"]: pillColor,
    ["--hover-text"]: hoveredPillTextColor,
    ["--pill-text"]: resolvedPillTextColor
  };

  return (
    <div className="pill-nav-container">
      <nav className="pill-nav" style={cssVars}>

        {/* HAMBURGER */}
        <button className="hamburger" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* DESKTOP NAV */}
        <div className="pill-nav-items desktop">
          <ul className="pill-list">
            {items.map((item, i) => (
              <li key={i}>
                <a
                  href={item.href}
                  className={`pill ${
                    activeHref === item.href ? "is-active" : ""
                  }`}
                  onMouseEnter={() => handleEnter(i)}
                  onMouseLeave={() => handleLeave(i)}
                >
                  <span
                    className="hover-circle"
                    ref={(el) => (circleRefs.current[i] = el)}
                  />
                  <span className="label-stack">
                    <span className="pill-label">{item.label}</span>
                    <span className="pill-label-hover">
                      {item.label}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="mobile-menu">
            <ul>
              {items.map((item, i) => (
                <li key={i}>
                  <a href={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

      </nav>
    </div>
  );
};

export default PillNav;