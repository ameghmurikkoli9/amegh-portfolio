import React, { useEffect, useState } from "react";
import gsap from "gsap";
import SplitText from "./Components/SplitText";
import Navbar from "./Components/Navbar";
import Mobile from "./Components/Mobile";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import webBg from "./Images/dark-corduroy-fabric-textured-background.jpg";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    tl.to("#loader", {
      y: "-100%",
      opacity: 0,
      duration: 3,
      ease: "power4.inOut",
      delay: 1.5, 
    });

    tl.call(() => setLoading(false));
  }, []);

  return (
    <>
      {/* 🔥 LOADER */}
      {loading && (
        <div style={loaderStyle} id="loader">
          <SplitText text="AMEGH" />
        </div>
      )}

      {/* 🌐 MAIN WEBSITE (always rendered) */}
      <div id="main">
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: -1,
            width: "100vw",
            height: "100vh",
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          <img
            src={webBg}
            alt=""
            style={{
              width: "100vw",
              height: "100vh",
              objectFit: "cover",
              filter: "blur(1.5px) brightness(0.82)",
              pointerEvents: "none",
              userSelect: "none",
              position: "absolute",
              inset: 0,
            }}
            draggable={false}
          />
        </div>

        <Navbar />
        <Mobile />
        <Skills />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

const loaderStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "#000",
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

export default App;