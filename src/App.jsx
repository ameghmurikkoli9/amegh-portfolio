import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Workflow from "./components/sections/Workflow";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
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