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
      className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-base border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

        {/* Section Title */}
        <div className="md:col-span-4 stagger-reveal">
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter text-primary">
            {texts.title}
          </h2>
          <p className="mt-4 font-body text-[#d1d5db] text-sm max-w-xs">
            {language === "en"
              ? "The core architecture and tools I use to build robust, scalable applications."
              : "A arquitetura central e ferramentas que utilizo para construir aplicações robustas e escaláveis."}
          </p>
        </div>

        {/* Bento / Tech Grid */}
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
          {STACKS.map((stack, idx) => (
            <div
              key={idx}
              className="stagger-reveal bg-surface border border-white/5 p-6 md:p-8 flex flex-col gap-6"
            >
              <h3 className="font-body text-xs font-bold tracking-widest text-accent uppercase">
                {stack.category}
              </h3>

              <ul className="flex flex-col gap-4">
                {stack.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 font-body text-lg md:text-xl text-primary group cursor-default">
                    <i className={`${item.icon} text-2xl text-white/40 group-hover:text-accent transition-colors duration-300`} />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{item.name}</span>
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
