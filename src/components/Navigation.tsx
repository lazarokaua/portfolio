import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useLanguage } from "./Utils/LanguageContext";

export function Navigation() {
  const { language, setLanguage } = useLanguage();
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["hero", "about", "projects", "tech", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight / 2) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current) return;
    gsap.to(navRef.current, {
      y: isScrolled ? 0 : 0,
      duration: 0.3,
    });
  }, [isScrolled]);

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Work", id: "projects" },
    { label: "Stack", id: "tech" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-[100] px-6 py-4 md:px-12 flex items-center justify-between transition-all duration-500 ${
        isScrolled
          ? "glass-strong shadow-lg"
          : "bg-transparent"
      }`}
    >
      
      <a
        href="#hero"
        onClick={(e) => handleScroll(e, "hero")}
        className="font-display font-bold text-sm md:text-lg tracking-tight cursor-pointer transition-all duration-300 hover:opacity-80"
      >
        <span className="gradient-text">LÁZARO</span>
        <span className="text-primary">.</span>
      </a>
      
      <div className="flex items-center gap-4 md:gap-8">
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleScroll(e, item.id)}
              className={`relative font-body text-xs uppercase tracking-widest px-3 py-2 rounded-full transition-all duration-300 ${
                activeSection === item.id
                  ? "text-accent bg-accent/10"
                  : "text-primary/60 hover:text-primary hover:bg-white/5"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"></span>
              )}
            </a>
          ))}
        </div>

        <div className="hidden md:block w-[1px] h-4 bg-white/20"></div>

        <button
          onClick={() => setLanguage(language === "en" ? "pt" : "en")}
          className="font-body text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10 text-primary/70 hover:text-accent hover:border-accent/30 transition-all duration-300 font-semibold"
        >
          {language === "en" ? "PT" : "EN"}
        </button>
      </div>

    </nav>
  );
}
