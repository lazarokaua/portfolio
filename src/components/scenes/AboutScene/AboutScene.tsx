import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../../Utils/LanguageContext";
import { translations } from "../../Utils/Translation";
import profilePic from "../../../assets/profile.jpeg";

gsap.registerPlugin(ScrollTrigger);

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!counterRef.current || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={counterRef} className="font-display text-4xl md:text-5xl font-bold gradient-text">
      {count}{suffix}
    </span>
  );
}

export function AboutScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const { language } = useLanguage();
  const aboutTexts = translations[language].about;

  const words = aboutTexts.narrative.split(" ");

  const stats: StatItem[] = [
    { value: 3, suffix: "+", label: language === "en" ? "Years of Experience" : "Anos de Experiência" },
    { value: 9, suffix: "+", label: language === "en" ? "Projects Built" : "Projetos Criados" },
    { value: 15, suffix: "+", label: language === "en" ? "Technologies" : "Tecnologias" },
  ];

  useGSAP(
    () => {
      if (!containerRef.current || !textRef.current) return;

      const wordElements = textRef.current.querySelectorAll(".reveal-word");

      gsap.fromTo(
        wordElements,
        { opacity: 0.08 },
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

      const photoEl = containerRef.current.querySelector(".about-photo");
      if (photoEl) {
        gsap.fromTo(
          photoEl,
          { opacity: 0, scale: 0.9, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: photoEl,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      const statElements = containerRef.current.querySelectorAll(".stat-item");
      gsap.fromTo(
        statElements,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statElements[0],
            start: "top 85%",
            toggleActions: "play none none reverse",
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
      <div className="max-w-6xl mx-auto w-full">
        {/* Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* Photo Side */}
          <div className="md:col-span-4 flex justify-center md:justify-start">
            <div className="about-photo relative">
              {/* Gradient border ring */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-deep via-accent to-accent-hot rounded-2xl"></div>
                <div className="absolute inset-[2px] rounded-2xl overflow-hidden bg-base">
                  <img
                    src={profilePic}
                    alt="Lázaro Kauã"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 glass rounded-full px-4 py-2 flex items-center gap-2 shadow-glow">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-xs font-body font-semibold text-primary/80">
                  {language === "en" ? "Open to work" : "Disponível"}
                </span>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="md:col-span-8 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h2 className="font-body text-xs font-bold tracking-widest text-accent uppercase">
                {aboutTexts.title}
              </h2>
              
              <p
                ref={textRef}
                className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight md:leading-tight lg:leading-tight"
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

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 md:gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-item flex flex-col gap-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <span className="font-body text-xs md:text-sm text-muted uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
