import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Mobile from "./Components/Mobile";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Particles from "./Components/Particles";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      

      <Particles
        particleColors={["#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover
        alphaParticles={false}
        disableRotation={false}
        pixelRatio={1}
      />

      <Navbar 
      />
      <Mobile />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </>
    
  );
}

export default App;
