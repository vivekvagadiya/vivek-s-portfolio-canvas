import AmbientBackground from "@/components/layout/AmbientBackground";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Principles from "@/components/sections/Principles";
import Contact from "@/components/sections/Contact";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-[#09090b] text-white">
      <AmbientBackground />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Principles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
