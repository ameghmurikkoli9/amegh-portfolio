import { useEffect, useRef } from "react";
import gsap from "gsap";

const SplitText = ({ text }) => {
  const ref = useRef();

  useEffect(() => {
    const chars = ref.current.querySelectorAll(".char");

    gsap.fromTo(
      chars,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <h1 style={nameStyle} ref={ref}>
      {text.split("").map((char, i) => (
        <span key={i} className="char" style={{ display: "inline-block" }}>
          {char}
        </span>
      ))}
    </h1>
  );
};

const nameStyle = {
    fontSize: "clamp(2.5rem, 10vw, 8rem)", 
    fontWeight: "bold",
    letterSpacing: "clamp(2px, 1vw, 5px)",
    fontFamily: "'Caveat', cursive",
    textAlign: "center",
    padding: "0 10px",
    wordBreak: "break-word",
  };

export default SplitText;