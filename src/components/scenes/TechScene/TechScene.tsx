import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../../Utils/LanguageContext";
import { translations } from "../../Utils/Translation";

gsap.registerPlugin(ScrollTrigger);

const STACKS = [
  {
    category: "Front-end",
    items: [
      { name: "React", icon: "devicon-react-original" },
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "TypeScript", icon: "devicon-typescript-plain" },
      { name: "TailwindCSS", icon: "devicon-tailwindcss-original" },
      { name: "GSAP", icon: "devicon-javascript-plain" },
    ],
  },
  {
    category: "Back-end",
    items: [
      { name: "Java", icon: "devicon-java-plain" },
      { name: "Python", icon: "devicon-python-plain" },
      { name: "Spring Boot", icon: "devicon-spring-original" },
      { name: "Go Lang", icon: "devicon-go-original-wordmark" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
    ],
  },
  {
    category: "Dev & Ops",
    items: [
      { name: "Docker", icon: "devicon-docker-plain" },
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
      { name: "Git", icon: "devicon-git-plain" },
      { name: "Figma", icon: "devicon-figma-plain" },
      { name: "Linux", icon: "devicon-linux-plain" },
    ],
  },
];

const ALL_TECH_NAMES = STACKS.flatMap((s) => s.items.map((i) => i.name));

export function TechScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const texts = translations[language].tech;

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const elements = containerRef.current.querySelectorAll(".stagger-reveal");
      gsap.fromTo(
        elements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="tech"
      ref={containerRef}
      className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-base overflow-hidden"
    >
      {/* Marquee Background */}
      <div className="absolute inset-0 flex flex-col justify-center gap-8 pointer-events-none opacity-[0.03] select-none overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee-left">
          {[...ALL_TECH_NAMES, ...ALL_TECH_NAMES, ...ALL_TECH_NAMES].map((name, i) => (
            <span key={i} className="font-display text-[8rem] md:text-[12rem] uppercase tracking-tighter mx-8 font-bold">
              {name}
            </span>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

        {/* Section Title */}
        <div className="md:col-span-4 stagger-reveal">
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter gradient-text">
            {texts.title}
          </h2>
          <p className="mt-4 font-body text-secondary text-sm max-w-xs">
            {language === "en"
              ? "The core architecture and tools I use to build robust, scalable applications."
              : "A arquitetura central e ferramentas que utilizo para construir aplicações robustas e escaláveis."}
          </p>
        </div>

        {/* Glass Tech Grid */}
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {STACKS.map((stack, idx) => (
            <div
              key={idx}
              className="stagger-reveal glass rounded-xl p-6 md:p-8 flex flex-col gap-6 hover:border-accent/20 hover:shadow-glow transition-all duration-500 group"
            >
              <h3 className="font-body text-xs font-bold tracking-widest text-accent uppercase">
                {stack.category}
              </h3>

              <ul className="flex flex-col gap-4">
                {stack.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 font-body text-lg md:text-xl text-primary cursor-default group/item">
                    <i className={`${item.icon} text-2xl text-muted group-hover/item:text-accent transition-colors duration-300`} />
                    <span className="group-hover/item:translate-x-2 group-hover/item:text-accent transition-all duration-300">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
