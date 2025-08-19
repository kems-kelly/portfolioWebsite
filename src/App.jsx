import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Experiences from "./components/Experiences/Experiences";
import Footer from "./components/Footer/Footer";
import HeaderMain from "./components/Header/HeaderMain";
import HeroSection from "./components/HeroSection/HeroSection";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div>
      <HeaderMain />
      <HeroSection />
      <CustomCursor />
      <About />
      <Skills />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
