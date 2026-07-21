import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import profilePic from "../../assets/profile.jpeg";
import { Lock } from "lucide-react";
import claudePic from "../../assets/svg/500px-Claude_AI_symbol.svg.webp";
import neovimPic from "../../assets/svg/500px-Neovim-mark.svg.webp";
import intellijPic from "../../assets/svg/IntelliJ_IDEA_icon.svg";

gsap.registerPlugin(ScrollTrigger);

// Custom SVG Icons for the Dock
const PostmanIcon = () => (
  <svg viewBox="0 0 128 128" width="100%" height="100%">
    <path fill="#f37036" d="M113.117 26.066C92.168-1.062 53.191-6.07 26.062 14.883c-27.125 20.953-32.128 59.93-11.175 87.055 20.957 27.124 59.937 32.124 87.058 11.167 27.114-20.953 32.118-59.918 11.172-87.039Zm0 0"></path>
    <path fill="#fff" d="M91.078 24.164a10.038 10.038 0 0 0-5.781 2.426 10.028 10.028 0 0 0-1.54 13.465 10.028 10.028 0 0 0 13.276 2.715h.002v.001l.156.155a10.63 10.63 0 0 0 1.965-1.45A10.341 10.341 0 0 0 99 27.107v-.002l-8.844 8.789-.156-.155 8.844-8.793a10.038 10.038 0 0 0-7.766-2.78zM79.434 38.551c-4.24-.007-11.163 4.799-28.067 21.703l.084.086c-.092-.032-.185-.035-.185-.035l-6.364 6.308a1.035 1.035 0 0 0 .93 1.762l10.914-2.328a.307.307 0 0 0 .092-.17l.242.25-3.72 3.69h-.18l-22.086 22.26 7.086 6.824a1.254 1.254 0 0 0 1.476.149 1.327 1.327 0 0 0 .645-1.356l-1.035-4.5a.534.534 0 0 1 0-.62 117.285 117.285 0 0 0 26.738-17.583l-4.535-4.537.086-.014-2.69-2.689.172-.174.182.186-.094.091 7.137 7.293v-.003c13.68-12.954 23.39-23.367 20.865-30.375a3.83 3.83 0 0 0-1.107-2.208v.004a3.778 3.778 0 0 0-.483-.306c-.083-.088-.156-.178-.244-.264l-.066.066a3.778 3.778 0 0 0-.582-.29l.289-.292c-1.796-1.6-3.28-2.924-5.5-2.93zM30.94 92.21l-5.171 5.172v.004a1.03 1.03 0 0 0-.457 1.125 1.035 1.035 0 0 0 .921.789l12.672.875-7.965-7.965z"></path>
    <path fill="#f37036" d="M91.95 23.31a11.047 11.047 0 0 0-7.759 3.17 10.988 10.988 0 0 0-2.39 11.641c-4.741-2.03-11.155 1.51-31.106 21.457a.932.932 0 0 0-.037.094 1.242 1.242 0 0 0-.119.062l-6.309 6.364a1.97 1.97 0 0 0-.363 2.324 2.012 2.012 0 0 0 1.707.984l.313-.203 8.424-1.797-4.03 4.067a.873.873 0 0 0-.054.166l-19.75 19.799a.798.798 0 0 0-.192.238l-5.086 5.09a1.967 1.967 0 0 0-.414 2.043 1.995 1.995 0 0 0 1.656 1.265l12.618.88a1.01 1.01 0 0 0 .52-.415.886.886 0 0 0 0-1.035l-.026-.025a2.243 2.243 0 0 0 .705-.58 2.237 2.237 0 0 0 .406-1.876l-.984-4.187a126.725 126.725 0 0 0 26.334-16.861 1.091 1.091 0 0 0 .248.103c.254-.019.492-.128.672-.308 13.55-12.83 21.515-21.622 21.515-28.602a8.03 8.03 0 0 0-.431-2.85 10.957 10.957 0 0 0 3.845.83l-.015.004a11.219 11.219 0 0 0 5.183-1.45.775.775 0 0 0 .004.001.835.835 0 0 0 .617-.055 9.398 9.398 0 0 0 2.07-1.652 10.873 10.873 0 0 0 3.258-7.758 10.873 10.873 0 0 0-3.257-7.758.93.93 0 0 0-.118-.091 11.045 11.045 0 0 0-7.656-3.078zm-.087 1.772a9.27 9.27 0 0 1 5.586 1.914l-8.068 8.117a.84.84 0 0 0-.076.098.83.83 0 0 0-.239.55.832.832 0 0 0 .313.65h.002l6.1 6.1a9.044 9.044 0 0 1-10.028-1.913c-2.586-2.6-3.336-6.504-1.953-9.891 1.383-3.39 4.68-5.605 8.363-5.625zm7.12 3.432a8.87 8.87 0 0 1 2.033 5.674 9.15 9.15 0 0 1-2.688 6.464 9.989 9.989 0 0 1-1.098.895L92.307 36.7l-.963-.963.265-.265 7.373-6.96zm-.366 4.193a.777.777 0 0 0-.55.031.731.731 0 0 0-.36.426.73.73 0 0 0 .05.559 2.226 2.226 0 0 1-.257 2.328.64.64 0 0 0-.195.488c.004.184.07.36.195.492a.58.58 0 0 0 .414 0 .68.68 0 0 0 .672-.207 3.573 3.573 0 0 0 .465-3.777v.004a.777.777 0 0 0-.434-.344zM79.34 39.43a5.584 5.584 0 0 1 3.31 1.226 4.756 4.756 0 0 0-2.681 1.34L57.162 64.701l-4.476-4.476c11.828-11.772 19.06-17.921 23.556-19.936a5.584 5.584 0 0 1 3.098-.86zm3.965 2.96a2.895 2.895 0 0 1 2.043.844 2.786 2.786 0 0 1 .879 2.121 2.869 2.869 0 0 1-.985 2.07l-24.25 21.106-2.617-2.617 22.887-22.68a2.895 2.895 0 0 1 2.043-.843zm2.994 6.698c-1.69 6.702-10.647 15.783-19.987 24.607l-3.777-3.773L86.3 49.088zM51.367 61.547l.274.27 3.513 3.513-9.63 2.06 5.843-5.843zm5.793 5.84.004.004 1.168 1.195a1.086 1.086 0 0 0 .018.084l.078.012.248.254.82.84-5.385.66 3.05-3.05zm3.867 4.076 3.578 3.576A126.992 126.992 0 0 1 38.75 91.695a1.44 1.44 0 0 0-.777 1.653l1.035 4.5a.31.31 0 0 1 0 .363.31.31 0 0 1-.414 0l-6.102-6.152L51.3 72.975l9.728-1.512zm-29.933 21.94.869.814 4.492 4.492-10.016-.648 4.655-4.659z"></path>
  </svg>
);

export function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lidRef = useRef<HTMLDivElement>(null);
  const instructionRef = useRef<HTMLDivElement>(null);
  
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setDate(now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(
    () => {
      if (!containerRef.current || !lidRef.current) return;

      // Start with lid closed
      gsap.set(lidRef.current, { rotateX: -90 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%", // Scroll distance to open and stay pinned
          scrub: 1,
          pin: true,
        },
      });

      // Open the lid
      tl.to(lidRef.current, {
        rotateX: 0,
        ease: "none", // Linear mapping to scroll
      });

      // Fade out scroll instruction
      if (instructionRef.current) {
        tl.to(instructionRef.current, {
          opacity: 0,
          duration: 0.2,
        }, 0);
      }
      
    },
    { scope: containerRef }
  );

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-base"
    >
      {/* Background Grid Pattern (matches reference) */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none z-0"></div>
      
      {/* Macbook Container */}
      <div 
        className="relative z-10 w-[85vw] md:w-[70vw] max-w-[900px] aspect-[16/10]"
        style={{ perspective: "2000px" }}
      >
        {/* Lid (Screen) */}
        <div 
          ref={lidRef}
          className="absolute bottom-0 w-full h-full z-20"
          style={{ transformOrigin: "bottom", transformStyle: "preserve-3d" }}
        >
          {/* Front of Lid (Screen) */}
          <div className="absolute inset-0 bg-black rounded-t-xl md:rounded-t-3xl border-[4px] md:border-[12px] border-neutral-900 overflow-hidden flex flex-col shadow-[0_-20px_50px_rgba(255,255,255,0.05)]" style={{ backfaceVisibility: "hidden" }}>
            
            {/* Screen Content - MacOS Lockscreen */}
            <div className="relative w-full h-full bg-gradient-to-br from-[#1a1c29] via-[#0f111a] to-[#2a1b18] overflow-hidden flex flex-col items-center">
              
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] md:w-[150px] h-[16px] md:h-[24px] bg-neutral-900 rounded-b-xl z-50 flex items-center justify-center">
                 <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/10 ml-6 md:ml-10"></div>
              </div>

              {/* Time and Date */}
              <div className="mt-8 md:mt-12 flex flex-col items-center">
                <span className="text-white/80 text-[10px] md:text-xs font-medium tracking-wide">{date}</span>
                <span className="text-white text-4xl md:text-7xl font-bold tracking-tight mt-1">{time}</span>
              </div>

              {/* Profile Login */}
              <div className="flex-1 flex flex-col items-center justify-center -mt-4 md:-mt-8">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white/20 mb-3 md:mb-4 shadow-lg">
                  <img src={profilePic} alt="Lázaro Kauã" className="w-full h-full object-cover" />
                </div>
                <h2 className="text-white text-lg md:text-2xl font-semibold">Lázaro Kauã</h2>
                <p className="text-accent text-xs md:text-sm font-medium mt-1">Creative Developer</p>
                <div className="mt-4 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/10">
                  <Lock size={12} className="text-white/70 md:w-4 md:h-4" />
                </div>
              </div>

              {/* MacOS Dock */}
              <div className="absolute bottom-3 md:bottom-6 flex items-center justify-center gap-2 md:gap-3 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-xl overflow-hidden shadow-sm hover:scale-110 transition-transform cursor-pointer flex items-center justify-center bg-transparent">
                  <img src={neovimPic} alt="Neovim" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-xl overflow-hidden shadow-sm hover:scale-110 transition-transform cursor-pointer flex items-center justify-center">
                  <img src={claudePic} alt="Claude" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-xl overflow-hidden shadow-sm hover:scale-110 transition-transform cursor-pointer bg-white p-1 flex items-center justify-center">
                  <PostmanIcon />
                </div>
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-xl overflow-hidden shadow-sm hover:scale-110 transition-transform cursor-pointer flex items-center justify-center bg-transparent">
                  <img src={intellijPic} alt="IntelliJ" className="w-full h-full object-contain" />
                </div>
              </div>

            </div>
          </div>
          
        </div>

        {/* Base (Keyboard Bottom Part / Lip) */}
        <div className="absolute -bottom-1 md:-bottom-2 left-1/2 -translate-x-1/2 w-[105%] h-3 md:h-5 bg-gradient-to-b from-[#555] to-[#111] rounded-b-2xl md:rounded-b-[40px] rounded-t-sm z-30 flex items-start justify-center shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
          {/* Thumb notch */}
          <div className="w-[15%] h-1 md:h-1.5 bg-[#222] rounded-b-md"></div>
        </div>
      </div>

      {/* Instruction text (disappears on scroll) */}
      <div 
        ref={instructionRef}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-neutral-500 text-[10px] md:text-xs tracking-[0.2em] animate-pulse pointer-events-none z-50"
      >
        <span>SCROLL TO ENTER</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
      </div>

    </section>
  );
}
