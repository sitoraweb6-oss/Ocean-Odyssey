import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Waves, ArrowRight, ShieldCheck, Anchor, ChevronLeft, ChevronRight, Share2 } from "lucide-react";
const heroDiver = "/images/hero_diver_1780916310242.png";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [bubbles, setBubbles] = useState<Array<{ id: number; left: number; size: number; delay: number; duration: number }>>([]);
  const [activeGuideStep, setActiveGuideStep] = useState(0);

  // Parallax scroll effects using motion
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 500], [0, 80]);
  const portalY = useTransform(scrollY, [0, 500], [0, -30]);
  const overlayY = useTransform(scrollY, [0, 500], [0, 30]);

  const guides = [
    {
      num: "01",
      title: "Expert Companions",
      desc: "Our bio-engineers and deep-sea divers ensure a certified, safe and unforgettable journey below.",
    },
    {
      num: "02",
      title: "Submersibles v4",
      desc: "Airtight pressure cabin rated for depths exceeding 4,000 meters under intense ocean forces.",
    },
    {
      num: "03",
      title: "Hyper-Navigation",
      desc: "Instant live radar mapping the ocean peaks, coral abysses and hidden underwater trenches.",
    }
  ];

  useEffect(() => {
    // Generate organic bubbles
    const bubbleArray = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // percentage x-axis
      size: Math.random() * 14 + 6, // 6px to 20px
      delay: Math.random() * 8, // animation delays
      duration: Math.random() * 12 + 8, // speed of rising
    }));
    setBubbles(bubbleArray);

    // Mouse movement listener for micro-parallax
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        const x = (e.clientX / clientWidth - 0.5) * 35; // depth modifier
        const y = (e.clientY / clientHeight - 0.5) * 35;
        setMousePos({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleNextGuide = () => {
    setActiveGuideStep((prev) => (prev + 1) % guides.length);
  };

  const handlePrevGuide = () => {
    setActiveGuideStep((prev) => (prev - 1 + guides.length) % guides.length);
  };

  const handleExploreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = document.querySelector("#destinations");
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full min-h-screen bg-ocean-dark flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Liquid Shimmer Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#01091a]/95 via-ocean-dark to-ocean-dark z-0" />

      {/* Bioluminescent Deep-sea Glow Layers */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vh] rounded-full bg-cyan-950/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[35vw] h-[35vh] rounded-full bg-aqua-glow/5 blur-[150px] pointer-events-none" />

      {/* Light ray / sun beams cutting through deep ocean */}
      <div className="absolute top-0 left-[15%] w-[70%] h-full light-beam opacity-45 pointer-events-none z-1 z-above" />

      {/* Dynamic Bubble Emitter */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="bubble"
            style={{
              left: `${bubble.left}%`,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              animation: `floatUp ${bubble.duration}s linear infinite`,
              animationDelay: `${bubble.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Interactive Laser/Neon Grid Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px] bg-center [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35 z-1 pointer-events-none" />

      {/* Outer Content Layout Container */}
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-8 h-full flex flex-col justify-between z-10 pt-16 md:pt-24 pb-8">
        
        {/* TOP STATUS AND COORDS BADGES */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-full text-xs font-mono text-gray-500 mb-8 md:mb-0">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 bg-white/[0.02] border border-white/5 py-1 px-4 rounded-full"
          >
            <span className="text-aqua-glow">DEPTH COORDINATES</span>
            <span className="text-white">52°14'18.2\"N 9°42'12.4\"W</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 text-right"
          >
            <span>OUTER SECTOR: GULF OF EXPEDITION</span>
            <span className="text-aqua-glow">[SYS ACTIVE]</span>
          </motion.div>
        </div>

        {/* OVERSIZED TYPOGRAPHY BEHIND HERO PORTAL */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none">
          <motion.h1
            style={{
              y: textY,
              x: mousePos.x * -0.3,
            }}
            className="font-display font-extrabold text-[16vw] md:text-[20vw] leading-none text-white tracking-[0.18em] uppercase text-center flex items-center justify-center select-none opacity-[0.25]"
          >
            OC
            <span className="text-stroke-white select-none">E</span>
            AN
          </motion.h1>
        </div>

        {/* CENTER SUITE: INTERACTIVE SUBJECT PORTAL OVERLAPPING TEXT */}
        <div className="relative flex flex-col items-center justify-center my-auto py-12 md:py-16">
          <motion.div
            style={{
              y: portalY,
              x: mousePos.x * 0.4,
              rotateX: mousePos.y * -0.05,
              rotateY: mousePos.x * 0.05,
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="group relative z-10 w-[280px] sm:w-[320px] md:w-[400px] h-[340px] sm:h-[400px] md:h-[490px] rounded-[50px] md:rounded-[70px] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(3,19,48,0.7)] hover:border-aqua-glow/40 transition-colors duration-700 bg-ocean-blue"
            id="hero-portal-subject"
          >
            {/* Soft Reflection overlay on top */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 z-20 pointer-events-none transition-opacity group-hover:opacity-60 duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark via-transparent to-transparent z-10 pointer-events-none" />

            {/* Glowing Aqua Inner Ring */}
            <div className="absolute inset-2 rounded-[42px] md:rounded-[62px] border border-cyan-500/15 pointer-events-none z-10" />

            {/* Generated Hero Image mapped securely */}
            <motion.img
              src={heroDiver}
              alt="Futuristic glowing deep-sea dive helmet underwater visual"
              referrerPolicy="no-referrer"
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 12,
                ease: "easeInOut",
              }}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700"
            />

            {/* Scanner line scanning across diver */}
            <motion.div
              animate={{
                top: ["-5%", "105%"]
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "linear"
              }}
              className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-aqua-glow/50 to-transparent shadow-[0_0_12px_rgba(9,241,208,0.7)] pointer-events-none z-20"
            />
          </motion.div>

          {/* FRONT FOREGROUND TEXT OVERLAY BELOW PORTAL */}
          <motion.div
            style={{
              y: overlayY,
              x: mousePos.x * 0.2,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-center mt-6 md:mt-10 z-20 max-w-xl px-4 pointer-events-auto"
            id="hero-typography-caption-container"
          >
            <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl tracking-[0.25em] text-white uppercase text-glow-white leading-tight">
              ODYSSEY
            </h2>
            <p className="mt-4 text-xs sm:text-sm tracking-widest text-[#9ca3af] leading-relaxed max-w-md mx-auto">
              We turn your dreams of underwater adventure into reality. Venture into uncharted aquatic outposts with elite technologies.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleExploreClick}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-xs font-bold tracking-wider bg-aqua-glow text-ocean-dark border border-aqua-glow shadow-[0_0_20px_rgba(9,241,208,0.4)] hover:bg-transparent hover:text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                id="hero-explore-cta"
              >
                <span>DISCOVER THE ABYSS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#experiences"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-xs font-medium tracking-wider text-white border border-white/10 hover:border-white/30 backdrop-blur-md bg-white/[0.02] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                id="hero-experience-cta"
              >
                <span>COMPARE SUBVERSIBLES</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM SECTION - FLOATING INFO TILES & CONTROLS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end w-full z-20 mt-4">
          
          {/* BOTTOM LEFT: FLOATING INFO CARD */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="md:col-span-5 lg:col-span-4"
            id="hero-floating-card-root"
          >
            <div className="glass-panel p-5 rounded-2xl relative overflow-hidden group">
              {/* Internal abstract mini decoration */}
              <div className="absolute right-0 top-0 h-12 w-12 bg-aqua-glow/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-start gap-4 h-[120px]" id="floating-card-body">
                <span className="font-display font-medium text-2xl text-aqua-glow text-glow-aqua shrink-0">
                  {guides[activeGuideStep].num}.
                </span>
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="font-display text-sm font-semibold tracking-wider text-white uppercase">
                      {guides[activeGuideStep].title}
                    </h3>
                    <p className="mt-2 text-[11px] tracking-wide text-gray-400 leading-normal line-clamp-3">
                      {guides[activeGuideStep].desc}
                    </p>
                  </div>
                  {/* Indicators and buttons */}
                  <div className="flex items-center justify-between mt-4">
                    {/* Dots indicator */}
                    <div className="flex gap-1.5">
                      {guides.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveGuideStep(i)}
                          className={`w-1.5 h-1.5 rounded-full transition-all ${
                            activeGuideStep === i ? "bg-aqua-glow w-3" : "bg-white/20"
                          }`}
                        />
                      ))}
                    </div>
                    {/* Left Right arrows matches the picture */}
                    <div className="flex gap-1">
                      <button
                        onClick={handlePrevGuide}
                        className="p-1 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 active:scale-95 text-white transition-all"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={handleNextGuide}
                        className="p-1 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 active:scale-95 text-white transition-all"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="hidden md:block md:col-span-2 lg:col-span-4" />

          {/* BOTTOM RIGHT: LUXURY METADATA STATS */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="md:col-span-5 lg:col-span-4 flex flex-col gap-3 font-mono text-[10px]"
          >
            <div className="flex justify-between items-center text-[#9ca3af] border-b border-white/5 pb-1">
              <span>ATMOSPHERIC PRESSURE:</span>
              <span className="text-white">398.2 ATM</span>
            </div>
            <div className="flex justify-between items-center text-[#9ca3af] border-b border-white/5 pb-1">
              <span>OXYGEN MIX LEVEL:</span>
              <span className="text-aqua-glow">NITROX 32% (OPTIMAL)</span>
            </div>
            <div className="flex justify-between items-center text-[#9ca3af]">
              <span>COMMUNICATION LINK:</span>
              <span className="text-emerald-400 flex items-center gap-1">
                SECURE SATELLITE <Anchor className="w-3 h-3 text-emerald-400" />
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
