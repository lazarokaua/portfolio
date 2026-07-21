import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../../Utils/LanguageContext";
import { translations } from "../../Utils/Translation";
import simmonGame from "../../../assets/simmoGame.png";
import deviceManagement from "../../../assets/deviceManagement.png";
import spotify from "../../../assets/spotify.png";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  image: string;
  year: string;
}

export function ProjectsScene() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { language } = useLanguage();
  const texts = translations[language].projects;

  const projects: Project[] = [
    {
      title: texts.project1Title,
      description: texts.project1Description,
      image: deviceManagement,
      year: "2024",
    },
    {
      title: texts.project2Title,
      description: texts.project2Description,
      image: simmonGame, // Using the image from assets
      year: "2024",
    },
    {
      title: "Clone Spotify",
      description: "Front-end project for alura's front-end immersion.",
      image: spotify,
      year: "2023",
    }
  ];

  useGSAP(
    () => {
      if (!wrapRef.current || !trackRef.current) return;

      const track = trackRef.current;
      const images = track.querySelectorAll(".project-image");
      
      // Calculate horizontal scroll distance
      const distance = track.scrollWidth - window.innerWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top top",
          end: () => `+=${distance + window.innerWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Horizontal translation of the track
      tl.to(track, {
        x: -distance,
        ease: "none",
      });

      // Subtle parallax effect on images as they scroll horizontally
      images.forEach((img) => {
        gsap.to(img, {
          x: 100, // Move image slightly in opposite direction
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            containerAnimation: tl,
            start: "left right",
            end: "right left",
            scrub: true,
          },
        });
      });
    },
    { scope: wrapRef }
  );

  return (
    <section id="projects" ref={wrapRef} className="relative w-full overflow-hidden bg-base">
      
      {/* Title that stays fixed on the left while panning */}
      <div className="absolute top-12 left-6 md:left-12 z-10 mix-blend-difference">
        <h2 className="font-display text-2xl md:text-4xl text-accent uppercase tracking-tight">
          {texts.title}
        </h2>
      </div>

      <div
        ref={trackRef}
        className="flex h-[100dvh] items-center gap-12 md:gap-32 px-[10vw] md:px-[20vw] pt-20"
      >
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="group relative flex-shrink-0 w-[80vw] md:w-[60vw] max-w-[800px] flex flex-col gap-6"
          >
            {/* Image Container with hidden overflow for parallax */}
            <div className="relative w-full aspect-[16/9] overflow-hidden bg-surface-raised border border-white/5">
              <img
                src={proj.image}
                alt={proj.title}
                className="project-image absolute inset-0 w-full h-full object-cover opacity-80 filter grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 will-change-transform scale-110 -left-[50px]" 
                /* Image is scaled up and offset left to allow parallax movement to the right */
              />
            </div>

            {/* Meta */}
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
              <h3 className="font-display text-3xl md:text-5xl uppercase tracking-tighter">
                {proj.title}
              </h3>
              <span className="font-body text-sm font-mono text-secondary">
                {proj.year}
              </span>
            </div>
            
            <p className="font-body text-secondary text-sm md:text-base max-w-xl line-clamp-2 md:line-clamp-none">
              {proj.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
