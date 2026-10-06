import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../../Utils/LanguageContext";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function ContactScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const { language } = useLanguage();

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const elements = sectionRef.current.querySelectorAll(".contact-reveal");
      gsap.fromTo(
        elements,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full py-32 md:py-48 px-6 md:px-12 bg-base overflow-hidden"
    >
      {/* Background accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-deep/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
        <span className="contact-reveal font-body text-xs font-bold tracking-widest text-accent uppercase">
          {language === "en" ? "Get in Touch" : "Entre em Contato"}
        </span>

        <h2 className="contact-reveal font-display text-4xl md:text-6xl lg:text-8xl uppercase tracking-tighter leading-none">
          {language === "en" ? (
            <>
              <span className="text-primary">Let's build </span>
              <span className="gradient-text">something</span>
              <br />
              <span className="gradient-text">together</span>
              <span className="text-primary">.</span>
            </>
          ) : (
            <>
              <span className="text-primary">Vamos construir </span>
              <span className="gradient-text">algo</span>
              <br />
              <span className="gradient-text">juntos</span>
              <span className="text-primary">.</span>
            </>
          )}
        </h2>

        <p className="contact-reveal font-body text-secondary text-base md:text-lg max-w-md">
          {language === "en"
            ? "Have a project in mind or just want to chat? I'm always open to new opportunities and ideas."
            : "Tem um projeto em mente ou quer bater um papo? Estou sempre aberto a novas oportunidades e ideias."}
        </p>

        <div className="contact-reveal flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a
            href="mailto:contact.lazarokaua@gmail.com"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-deep to-accent rounded-full text-white font-body font-semibold text-sm uppercase tracking-widest hover:shadow-glow hover:scale-105 transition-all duration-300"
          >
            {language === "en" ? "Send an Email" : "Enviar Email"}
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
          
          <a
            href="https://linkedin.com/in/lazarokaua"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 text-primary/70 font-body font-semibold text-sm uppercase tracking-widest hover:border-accent/30 hover:text-accent hover:shadow-glow transition-all duration-300"
          >
            LinkedIn
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="relative max-w-7xl mx-auto mt-32 pt-8 border-t border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-body text-xs text-muted">
            © {new Date().getFullYear()} Lázaro Kauã. {language === "en" ? "All rights reserved." : "Todos os direitos reservados."}
          </span>
          <span className="font-body text-xs text-muted">
            {language === "en" ? "Designed & built with" : "Projetado & construído com"}
            <span className="text-accent mx-1">♦</span>
            React + GSAP + TypeScript
          </span>
        </div>
      </div>
    </section>
  );
}
