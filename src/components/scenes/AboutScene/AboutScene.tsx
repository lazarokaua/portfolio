import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../../Utils/LanguageContext";
import { translations } from "../../Utils/Translation";

gsap.registerPlugin(ScrollTrigger);

export function AboutScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const { language } = useLanguage();
  const aboutTexts = translations[language].about;

  // Split narrative into words for reveal
  const words = aboutTexts.narrative.split(" ");

  useGSAP(
    () => {
      if (!containerRef.current || !textRef.current) return;

      const wordElements = textRef.current.querySelectorAll(".reveal-word");

      gsap.fromTo(
        wordElements,
        { opacity: 0.1 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full min-h-[100dvh] flex items-center justify-center bg-base px-6 py-24"
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <h2 className="font-body text-xs font-bold tracking-widest text-accent uppercase">
          {aboutTexts.title}
        </h2>
        
        <p
          ref={textRef}
          className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight md:leading-tight lg:leading-tight uppercase"
        >
          {words.map((word, i) => (
            <span key={i} className="inline-block mr-[0.25em]">
              <span className="reveal-word inline-block will-change-transform">
                {word}
              </span>
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
