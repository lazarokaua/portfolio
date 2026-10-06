import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroScene } from "./scenes/HeroScene";
import { AboutScene } from "./scenes/AboutScene/AboutScene";
import { ProjectsScene } from "./scenes/ProjectsScene/ProjectsScene";
import { TechScene } from "./scenes/TechScene/TechScene";
import { ContactScene } from "./scenes/ContactScene/ContactScene";
import { Navigation } from "./Navigation";
import { FloatingSocialMenu } from "./FloatingSocialMenu";

gsap.registerPlugin(ScrollTrigger);

export function Portfolio() {
  useEffect(() => {
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
      <ContactScene />
    </main>
  );
}
