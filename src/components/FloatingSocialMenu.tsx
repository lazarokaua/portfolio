import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Share2, X } from "lucide-react";

export function FloatingSocialMenu() {
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      url: "https://linkedin.com/in/lazarokaua",
      label: "LinkedIn"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path>
        </svg>
      ),
      url: "https://github.com/lazarokaua",
      label: "GitHub"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      url: "https://instagram.com/lazarokaua_",
      label: "Instagram"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
        </svg>
      ),
      url: "https://youtube.com/@LazaroKaua7",
      label: "YouTube"
    },
  ];

  useGSAP(
    () => {
      if (!menuRef.current) return;
      const items = menuRef.current.querySelectorAll(".social-item");
      const radius = 130; // Distance from center

      if (isOpen) {
        items.forEach((item, i) => {
          // Calculate angle for a quarter circle (from 180deg to 270deg)
          // 180 = Left, 270 = Top. Since we are in the bottom right, we spread up and left.
          const angle = (180 + (90 / (links.length - 1)) * i) * (Math.PI / 180);
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          gsap.to(item, {
            x,
            y,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.5)",
            delay: i * 0.05,
          });
        });
      } else {
        gsap.to(items, {
          x: 0,
          y: 0,
          opacity: 0,
          scale: 0.5,
          duration: 0.4,
          ease: "back.in(1.2)",
          stagger: 0.03,
        });
      }
    },
    { dependencies: [isOpen], scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="fixed bottom-24 md:bottom-10 right-6 md:right-10 z-[100] flex items-center justify-center"
    >
      <div ref={menuRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-item absolute w-12 h-12 flex items-center justify-center rounded-full bg-surface border border-white/20 text-white hover:text-accent hover:border-accent hover:bg-surface-raised transition-colors shadow-lg ${
              isOpen ? "pointer-events-auto" : "pointer-events-none"
            }`}
            style={{ opacity: 0, transform: "scale(0.5)" }}
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 flex items-center justify-center rounded-full bg-accent text-bg shadow-[0_0_20px_rgba(35,198,255,0.4)] hover:shadow-[0_0_30px_rgba(35,198,255,0.6)] hover:scale-110 transition-all duration-300 z-10"
        aria-label="Toggle Social Menu"
      >
        <div className="relative w-6 h-6 flex items-center justify-center">
          <Share2
            size={24}
            className={`absolute transition-all duration-500 text-black ${
              isOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
            }`}
          />
          <X
            size={24}
            className={`absolute transition-all duration-500 text-black ${
              isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
            }`}
          />
        </div>
      </button>
    </div>
  );
}
