import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../../Utils/LanguageContext";
import { translations } from "../../Utils/Translation";
import { ExternalLink } from "lucide-react";
import { projectsData, ProjectCategory, ProjectItem } from "./projectsData";

gsap.registerPlugin(ScrollTrigger, Flip);

export function ProjectsScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const flipStateRef = useRef<Flip.FlipState | null>(null);
  const isInitialMount = useRef(true);

  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");
  const { language } = useLanguage();
  const texts = translations[language].projects;

  const categories: { key: ProjectCategory; label: string }[] = [
    { key: "all", label: texts.categories.all },
    { key: "frontend", label: texts.categories.frontend },
    { key: "backend", label: texts.categories.backend },
    { key: "automation", label: texts.categories.automation },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((proj) => proj.category === selectedCategory);

  const getCategoryCount = (cat: ProjectCategory) => {
    if (cat === "all") return projectsData.length;
    return projectsData.filter((p) => p.category === cat).length;
  };

  const getCategoryBadgeLabel = (category: ProjectItem["category"]) => {
    switch (category) {
      case "frontend":
        return texts.categories.frontend;
      case "backend":
        return texts.categories.backend;
      case "automation":
        return texts.categories.automation;
      default:
        return "";
    }
  };

  const handleCategoryChange = (category: ProjectCategory) => {
    if (category === selectedCategory || !cardsContainerRef.current) return;
    // 1. Grava a posição dos cards no DOM atual
    flipStateRef.current = Flip.getState(
      cardsContainerRef.current.querySelectorAll(".project-card")
    );
    // 2. Atualiza a categoria ativa no React
    setSelectedCategory(category);
  };

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Animação de entrada na primeira carga da página
      if (isInitialMount.current) {
        isInitialMount.current = false;

        const cards = sectionRef.current.querySelectorAll(".project-card");
        cards.forEach((card, i) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              delay: i * 0.1,
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
        return;
      }

      // Reordenação fluida com GSAP Flip ao filtrar categorias
      if (flipStateRef.current && cardsContainerRef.current) {
        Flip.from(flipStateRef.current, {
          targets: cardsContainerRef.current.querySelectorAll(".project-card"),
          duration: 0.65,
          ease: "power3.inOut",
          stagger: 0.04,
          absolute: false,
          onEnter: (elements) =>
            gsap.fromTo(
              elements,
              { opacity: 0, scale: 0.96, y: 20 },
              { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "power2.out" }
            ),
          onLeave: (elements) =>
            gsap.to(elements, { opacity: 0, scale: 0.96, duration: 0.25 }),
          onComplete: () => {
            ScrollTrigger.refresh();
          },
        });
        flipStateRef.current = null;
      }
    },
    { dependencies: [selectedCategory], scope: sectionRef }
  );

  return (
    <section id="projects" ref={sectionRef} className="relative w-full py-32 bg-base overflow-hidden">
      
      {/* Title */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 md:mb-14">
        <h2 className="font-display text-4xl md:text-7xl lg:text-8xl gradient-text uppercase tracking-tighter">
          {texts.title}
        </h2>
      </div>

      {/* Category Filter Tabs */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 md:mb-16">
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-surface/70 border border-white/5 backdrop-blur-md w-fit">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.key;
            const count = getCategoryCount(cat.key);
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => handleCategoryChange(cat.key)}
                className={`group relative flex items-center gap-2.5 px-4 md:px-5 py-2 md:py-2.5 rounded-xl font-body text-xs md:text-sm transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-accent/15 text-accent border border-accent/30 shadow-glow-sm font-semibold"
                    : "text-muted hover:text-primary hover:bg-white/5 border border-transparent"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] md:text-xs px-2 py-0.5 rounded-full transition-colors ${
                    isActive
                      ? "bg-accent/25 text-accent font-bold"
                      : "bg-white/5 text-muted group-hover:text-primary"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Case Study Cards Container */}
      <div
        ref={cardsContainerRef}
        className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-8 md:gap-6 min-h-[300px]"
      >
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 text-muted border border-dashed border-white/10 rounded-2xl">
            <p className="font-body text-sm md:text-[15px]">{texts.emptyState}</p>
          </div>
        ) : (
          filteredProjects.map((proj, idx) => (
            <a
              key={proj.id}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group relative flex flex-col md:flex-row items-stretch overflow-hidden rounded-2xl border border-white/5 bg-surface hover:border-accent/20 transition-all duration-500 hover:shadow-glow-lg cursor-pointer"
            >
              {/* Number */}
              <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20">
                <span className="font-display text-5xl md:text-7xl font-bold text-white/[0.04] group-hover:text-accent/10 transition-colors duration-500">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Image Section */}
              <div className="relative w-full md:w-[45%] aspect-video md:aspect-auto overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title[language]}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 will-change-transform"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-surface opacity-0 md:opacity-100"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent md:hidden"></div>
              </div>

              {/* Content Section */}
              <div className="relative flex-1 flex flex-col justify-center gap-4 md:gap-5 p-6 md:p-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-body text-[10px] md:text-xs font-bold text-accent tracking-widest uppercase">
                    {proj.year}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40"></span>
                  <span className="font-body text-[10px] md:text-xs font-semibold px-2.5 py-0.5 rounded-full border border-accent/20 text-accent/90 bg-accent/10 uppercase tracking-wider">
                    {getCategoryBadgeLabel(proj.category)}
                  </span>
                  {proj.inProduction && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] md:text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.2)] uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      {language === "en" ? "In Production" : "Em Produção"}
                    </span>
                  )}
                  <span className="w-6 h-[1px] bg-white/10 hidden sm:block"></span>
                  <span className="font-body text-[10px] md:text-xs text-muted uppercase tracking-wider hidden sm:inline">
                    {proj.linkType === "linkedin" ? "Case Study" : "Repository"}
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-4xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                  {proj.title[language]}
                </h3>

                <p className="font-body text-sm md:text-[15px] text-slate-300 leading-relaxed max-w-lg">
                  {proj.description[language]}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="font-body text-[10px] md:text-xs px-3 py-1 rounded-full border border-white/10 text-muted group-hover:border-accent/20 group-hover:text-accent/70 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link indicator */}
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-body text-xs uppercase tracking-widest text-muted group-hover:text-accent transition-colors duration-300">
                    {proj.linkType === "linkedin" ? texts.linkedinButton : texts.githubButton}
                  </span>
                  <ExternalLink size={14} className="text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
              </div>
            </a>
          ))
        )}
      </div>
    </section>
  );
}
