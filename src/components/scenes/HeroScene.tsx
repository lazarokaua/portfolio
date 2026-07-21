import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../Utils/LanguageContext";
import profilePic from "../../assets/profile.jpeg";

gsap.registerPlugin(ScrollTrigger);

export function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const { language } = useLanguage();

  const title = "CREATIVE\nDEVELOPER";
  const lines = title.split("\n");

  useGSAP(
    () => {
      if (!containerRef.current || !textRef.current) return;

      const chars = textRef.current.querySelectorAll(".char");
      
      // Initial Reveal Animation
      gsap.fromTo(
        chars,
        { y: 200, opacity: 0, rotateZ: 10 },
        {
          y: 0,
          opacity: 1,
          rotateZ: 0,
          duration: 1.2,
          stagger: 0.05,
          ease: "power4.out",
          delay: 0.2,
        }
      );

      gsap.fromTo(
        subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 1, ease: "power2.out" }
      );

      // Scroll Hijack / Parallax
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      tl.to(chars, {
        y: (i) => -100 - i * 10,
        opacity: 0,
        stagger: 0.02,
        ease: "none",
      });

      tl.to(
        subRef.current,
        {
          y: -50,
          opacity: 0,
          ease: "none",
        },
        0
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-base"
    >
      <div className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-4 z-50">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-white/20 hover:border-accent transition-colors">
          <img 
            src={profilePic} 
            alt="Lázaro Kauã" 
            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-body text-xs font-bold tracking-widest text-secondary">
            LÁZARO KAUÃ
          </span>
          <span className="font-body text-[10px] uppercase tracking-widest text-accent">
            {language === "en" ? "Available for work" : "Disponível para freelas"}
          </span>
        </div>
      </div>

      <h1
        ref={textRef}
        className="text-massive text-center flex flex-col items-center justify-center overflow-hidden"
      >
        {lines.map((line, lineIndex) => (
          <div key={lineIndex} className="overflow-hidden flex">
            {line.split("").map((char, charIndex) => (
              <span
                key={charIndex}
                className="char inline-block will-change-transform origin-bottom"
                style={{ whiteSpace: char === " " ? "pre" : "normal" }}
              >
                {char}
              </span>
            ))}
          </div>
        ))}
      </h1>

      <p
        ref={subRef}
        className="mt-8 font-body text-[#d1d5db] max-w-sm text-center text-sm md:text-base leading-relaxed px-4"
      >
        {language === "en"
          ? "Building immersive digital experiences. Breaking the grid, pushing the limits of the browser."
          : "Construindo experiências digitais imersivas. Quebrando o grid, ultrapassando os limites do navegador."}
      </p>
    </section>
  );
}
