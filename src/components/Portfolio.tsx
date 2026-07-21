import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroScene } from "./scenes/HeroScene";
import { AboutScene } from "./scenes/AboutScene/AboutScene";
import { ProjectsScene } from "./scenes/ProjectsScene/ProjectsScene";
import { TechScene } from "./scenes/TechScene/TechScene";
import { Footer } from "./scenes/Footer";
import { Navigation } from "./Navigation";
import { FloatingSocialMenu } from "./FloatingSocialMenu";
import CustomCursor from "./CustomCursor";
import { LanguageProvider } from "./Utils/LanguageContext";


gsap.registerPlugin(ScrollTrigger);

export function Portfolio() {
  useEffect(() => {
    // Lenis is often used with GSAP for smooth scrolling,
    // but since we are relying on native scroll hijacking
    // with GSAP ScrollTrigger, we just ensure triggers are refreshed.
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="portfolio-container bg-base text-primary min-h-screen overflow-x-hidden">
      <Navigation />
      <FloatingSocialMenu />
      <HeroScene />
      <AboutScene />
      <ProjectsScene />
      <TechScene />
    </main>
  );
}
