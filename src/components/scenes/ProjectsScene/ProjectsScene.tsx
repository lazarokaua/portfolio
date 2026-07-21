import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../../Utils/LanguageContext";
import { translations } from "../../Utils/Translation";
import dashboardImage from "../../../assets/dashboard.jpeg";
import simmonGame from "../../../assets/simmoGame.png";
import deviceManagement from "../../../assets/deviceManagement.png";
import spotify from "../../../assets/spotify.png";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  image: string;
  year: string;
  link: string;
  linkType?: "github" | "linkedin";
}

export function ProjectsScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const { language } = useLanguage();
  const texts = translations[language].projects;
  
  console.log("DEBUG PROJECTS TEXTS:", texts);
  console.log("DEBUG LANGUAGE:", language);

  const projects: Project[] = [
    {
      title: texts.project1Title,
      description: texts.project1Description,
      image: dashboardImage,
      year: "2025",
      link: "https://www.linkedin.com/posts/lazarokaua_frontend-reactjs-typescript-activity-7477692453190492160-Y8nJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEDTT28Biyr9pTF7MORUR2U0WEkYsCYpHfE",
      linkType: "linkedin",
    },
    {
      title: texts.project2Title,
      description: texts.project2Description,
      image: deviceManagement,
      year: "2024",
      link: "https://github.com/lazarokaua/device-management",
      linkType: "github",
    },
    {
      title: texts.project3Title,
      description: texts.project3Description,
      image: simmonGame,
      year: "2024",
      link: "https://github.com/lazarokaua/simon-game",
      linkType: "github",
    },
    {
      title: texts.project4Title,
      description: texts.project4Description,
      image: spotify,
      year: "2023",
      link: "https://github.com/lazarokaua/spotify-clone",
      linkType: "github",
    },
  ];

  useGSAP(
    () => {
      if (!sectionRef.current || !lineRef.current) return;

      // Animate the central timeline filling up
      gsap.to(lineRef.current, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      // Animate each project card revealing
      const cards = sectionRef.current.querySelectorAll(".timeline-card");
      cards.forEach((card, i) => {
        const direction = i % 2 === 0 ? 50 : -50;
        
        gsap.fromTo(
          card,
          { opacity: 0, x: direction, y: 50 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="projects" ref={sectionRef} className="relative w-full py-32 bg-base overflow-hidden">
      
      {/* Title */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24 md:mb-40">
        <h2 className="font-display text-4xl md:text-7xl lg:text-8xl text-accent uppercase tracking-tighter">
          {texts.title}
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* The Central / Left Timeline Line */}
        <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2" />
        <div 
          ref={lineRef}
          className="absolute left-[39px] md:left-1/2 top-0 w-[2px] bg-accent -translate-x-1/2 origin-top"
          style={{ height: "0%" }} 
        />

        {/* Project Items */}
        <div className="flex flex-col gap-32">
          {projects.map((proj, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[39px] md:left-1/2 top-1/2 w-4 h-4 rounded-full bg-accent -translate-x-1/2 -translate-y-1/2 z-10 border-4 border-base" />

                {/* Empty Space for the other side on desktop */}
                <div className="hidden md:block w-1/2" />

                {/* Card Content */}
                <div className="timeline-card w-full md:w-1/2 pl-16 md:pl-0 flex flex-col gap-6">
                  
                  {/* Image */}
                  <div className="relative w-full aspect-video overflow-hidden bg-surface-raised border border-white/10 group">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-80 filter grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 will-change-transform"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-3xl md:text-5xl uppercase tracking-tighter text-primary">
                        {proj.title}
                      </h3>
                      <span className="font-body text-xs md:text-sm font-bold text-accent tracking-widest uppercase">
                        {proj.year}
                      </span>
                    </div>

                    <p style={{ color: '#d1d5db', whiteSpace: 'normal', wordBreak: 'break-word', display: 'block', opacity: 1, visibility: 'visible', zIndex: 9999, fontSize: '1rem', lineHeight: '1.5' }}>
                      {proj.description || "Descrição em breve..."}
                    </p>

                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-fit mt-2 px-6 py-3 border border-white/20 text-white font-body text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition-colors"
                    >
                      {proj.linkType === "linkedin" ? texts.linkedinButton : texts.githubButton}
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
