import useLenis from "./hooks/useLenis";
import UIUXSection from "./components/UIUXSection";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import VideoPortfolio from "./components/VideoPortfolio";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useLenis();

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <VideoPortfolio />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
