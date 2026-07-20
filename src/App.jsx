import Navbar from "./Components/layout/Navbar";
import Footer from "./Components/layout/Footer";
import Hero from "./Components/sections/Hero";
import Projects from "./Components/sections/Projects";
import Workflow from "./Components/sections/Workflow";
import Skills from "./Components/sections/Skills";
import Contact from "./Components/sections/Contact";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <div className="process-skills-grid">
          <Workflow />
          <Skills />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
