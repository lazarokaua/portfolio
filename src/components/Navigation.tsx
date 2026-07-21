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
    <nav className="fixed bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-50 mix-blend-difference">
      <div className="flex items-center gap-2 md:gap-6 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white shadow-2xl">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleScroll(e, item.id)}
            className="font-body text-xs md:text-sm uppercase tracking-widest hover:text-accent transition-colors px-2 md:px-0"
          >
            {item.label}
          </a>
        ))}

        <div className="w-[1px] h-4 bg-white/30 mx-2"></div>

        <button
          onClick={() => setLanguage(language === "en" ? "pt" : "en")}
          className="font-body text-xs md:text-sm uppercase tracking-widest hover:text-accent transition-colors font-bold"
        >
          {language === "en" ? "PT" : "EN"}
        </button>
      </div>
    </nav>
  );
}
