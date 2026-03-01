import Navbar from "./Components/Navbar";
import Mobile from "./Components/Mobile";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import LiquidEther from "./Components/LiquidEther";

function App() {
  return (
    <>
      <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
        <LiquidEther
          colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
          mouseForce={20}
          cursorSize={75}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          color0="#5227FF"
          color1="#000000"
          color2="#00f5d4"
        />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
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

export default App;
