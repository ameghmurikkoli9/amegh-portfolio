import img from "../Images/Amegh.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import "./Mobile.css";
import { TbWorld } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import bg from "../Images/spiral.jpg";

const Mobile = () => {
  const [overlayHeight, setOverlayHeight] = useState(0);
  const phoneRef = useRef(null);
  const ref = useRef(null);
  const [currentTime, setCurrentTime] = useState("");
  useEffect(() => {
    if (ref.current) {
      setOverlayHeight(ref.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: phoneRef,
    offset: ["start end", "end end"],
  });

  // move up slowly while scrolling
  const y = useTransform(scrollYProgress, [0, 1], [overlayHeight, 0]);
  return (
    <>
      <section className="mobile-intro">
        <motion.div
          className="hero-bg"
          animate={{ y: [-20, 20, -20] }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <img src={bg} alt="background" />
        </motion.div>
        <div className="phone" ref={phoneRef}>
          <span className="btn volume-up" />
          <span className="btn volume-down" />
          <span className="btn power" />

          <div
            className="phone-screen"
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="status-bar">
              <div className="status-left">👋 Hello</div>
              <div className="status-right">{currentTime}</div>
            </div>

            <div className="hero-name">
              <div className="first">Amegh</div>
            </div>

            <motion.div className="overlay" ref={ref} style={{ y }}>
              {" "}
              <div className="drag-handle" />
              <div className="overlay-row top-row">
                <div className="role">
                  <div>
                    I'm a <strong>Web-designer</strong>
                  </div>
                  <div>and Developer</div>
                </div>

              
                  <div className="socials">
                    <a
                      className="icon"
                      href="https://x.com/amegh_99"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      X
                    </a>
                    <a
                      className="icon"
                      href="https://www.instagram.com/a.m.e.g.h/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram size={20} />
                    </a>
                    <a
                      className="icon"
                      href="https://www.linkedin.com/in/amegh-murikkoli-046120286/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  </div>
              </div>
              <div className="quote">
                “I design and code beautifully simple things and i love what i
                do”
              </div>
              <div className="overlay-row bottom-row">
                <div className="left">
                  <div className="cta-row">
                    <button className="btn-primary">
                      Get Started{" "}
                      <span>
                        <MdArrowOutward className="arrow-icon" size={15} />
                      </span>
                    </button>
                    <button className="btn-ghost">My Works</button>
                  </div>
                </div>
                <div className="right">
                  <div className="worldwide">
                    <div className="globe">
                      <TbWorld size={25} strokeWidth={1.5} />
                    </div>
                    <div className="world">Available Worldwide</div>
                  </div>

                  <a className="contact" href="#contact">
                    Contact me{" "}
                    <span>
                      <MdArrowOutward className="arrow-icon" size={15} />
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mobile;
