import { useLanguage } from "./Utils/LanguageContext";

export function Navigation() {
  const { language, setLanguage } = useLanguage();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Intro", id: "hero" },
    { label: "Ethos", id: "about" },
    { label: "Work", id: "projects" },
    { label: "Stack", id: "tech" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-6 md:px-12 flex items-center justify-between mix-blend-difference pointer-events-none">
      
      <div className="text-white font-body font-bold text-sm md:text-lg tracking-widest pointer-events-auto hover:text-accent transition-colors cursor-pointer" onClick={(e) => handleScroll(e as any, "hero")}>
        LÁZARO.
      </div>
      
      <div className="flex items-center gap-4 md:gap-8 pointer-events-auto">
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleScroll(e, item.id)}
              className="font-body text-xs uppercase tracking-widest text-white/80 hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block w-[1px] h-4 bg-white/30"></div>

        <button
          onClick={() => setLanguage(language === "en" ? "pt" : "en")}
          className="font-body text-xs uppercase tracking-widest text-white hover:text-accent transition-colors font-bold"
        >
          {language === "en" ? "PT" : "EN"}
        </button>
      </div>

    </nav>
  );
}
