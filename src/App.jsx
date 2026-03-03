import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Mobile from "./Components/Mobile";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <>
    
      
        <Navbar />
        <Mobile />
        <Skills />
        <About />
        <Projects />
        <Contact />
    </>
  );
}

export default App;
