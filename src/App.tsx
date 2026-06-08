import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, Layers, Waves, Sparkles, Anchor, Radio } from "lucide-react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Experiences from "./components/Experiences";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [coords, setCoords] = useState({ x: -100, y: -100 });
  const [activeOutpostMsg, setActiveOutpostMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Track mouse global coordinate for screen ambient spotlight
    const handleGlobalMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);

    // Dynamic telemetry logger simulating a high-end control panel
    const messages = [
      "ESTABLISHING SAT-LINK WITH EXPLORER SUB-BENTHIC DECK...",
      "NITROX OXIDATION SYSTEM: COMPLIANT & LOCKED (32% O2)",
      "CALIBRATING SONAR ARRAYS... DEEPEST MARIANA NODE ONLINE",
      "METRICS RECEIVED: SECTOR 09 GULF OF EXPEDITION IS SAFE"
    ];
    let msgIdx = 0;
    setActiveOutpostMsg(messages[0]);
    const intv = setInterval(() => {
      msgIdx = (msgIdx + 1) % messages.length;
      setActiveOutpostMsg(messages[msgIdx]);
    }, 5000);

    // Premium visual entering loader sequence
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      clearInterval(intv);
      clearTimeout(loadTimer);
    };
  }, []);

  return (
    <>
      {/* 1. Cinematic Entering Loader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-[#020617] flex flex-col items-center justify-center p-6 text-center select-none"
            id="system-main-loader"
          >
            {/* Pulsating Water waves logo */}
            <div className="relative w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center mb-8 bg-black/40 shadow-[0_0_40px_rgba(3,19,48,0.6)] overflow-hidden">
              <motion.div
                animate={{
                  y: ["40%", "10%", "40%"]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut"
                }}
                className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-aqua-glow/35 to-transparent"
              />
              <Waves className="w-8 h-8 text-white text-glow-white shrink-0 z-10" />
            </div>

            {/* Structured Text items */}
            <h1 className="font-display font-light text-2xl md:text-3xl tracking-[0.25em] text-white uppercase">
              OCEAN <span className="font-bold text-aqua-glow text-glow-aqua">ODYSSEY</span>
            </h1>
            
            <p className="mt-4 font-mono text-[10px] text-gray-500 tracking-widest uppercase">
              // LOADING TACTICAL DESCENT PROTOCOLS
            </p>

            {/* Dynamic system log line */}
            <div className="mt-8 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5 font-mono text-[9px] text-[#0df2c9] max-w-sm w-full shadow-lg">
              <span className="relative flex h-1.5 w-1.5 inline-block mr-2 align-middle">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              AUTHENTICATING CAPTAIN IDENTIFIER...
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Primary Page Layout */}
      <div 
        className="relative min-h-screen bg-ocean-dark text-gray-200 overflow-x-hidden selection:bg-aqua-glow/30 selection:text-white"
        id="app-scroller-node"
      >
        {/* Frosted Glass Theme Backdrop Accent Layers */}
        <div className="absolute inset-0 bg-slate-950/60 pointer-events-none -z-10" />
        <div className="absolute inset-x-0 top-0 h-full min-h-screen ambient-glow pointer-events-none z-0" />
        <div className="absolute inset-0 dot-pattern opacity-[0.25] pointer-events-none z-0" />

        {/* Cinematic Global Ambient Mouse Glow (Spotlight Tracking) on Desktop */}
        <div
          className="hidden md:block pointer-events-none fixed z-30 w-[400px] h-[400px] rounded-full bg-aqua-glow/3 blur-[90px] transition-transform duration-100 -translate-x-1/2 -translate-y-1/2 opacity-60"
          style={{
            left: `${coords.x}px`,
            top: `${coords.y}px`
          }}
          id="global-cursor-spotlight-overlay"
        />

        {/* Global sticky/floating header widget */}
        <Navbar />

        {/* Cinematic content blocks */}
        <main className="relative" id="main-content-flow-group">
          
          {/* Main Hero block */}
          <Hero />

          {/* Abyssal Launch Locations */}
          <Destinations />

          {/* Sub-Surface features specs */}
          <Features />

          {/* Photo captures lightbox */}
          <Gallery />

          {/* Step Preparation blueprint */}
          <Experiences />

          {/* Testimonial logs */}
          <Testimonials />

          {/* Common procedures FAQ */}
          <FAQ />

          {/* Briefing submission form */}
          <Contact />

        </main>

        {/* Footer directories */}
        <Footer />

        {/* REAL-TIME COMMAND TELEMETRY ticker overlayed inside the left side margins */}
        <div 
          className="fixed left-4 bottom-4 z-40 hidden xl:flex items-center gap-3 py-1.5 px-3 bg-black/60 backdrop-blur-md rounded-lg border border-white/5 font-mono text-[9px] text-[#9ca3af]"
          id="global-marginal-control-ticker"
        >
          <Radio className="w-3.5 h-3.5 text-aqua-glow animate-pulse shrink-0" />
          <span className="tracking-widest uppercase">
            {activeOutpostMsg}
          </span>
        </div>

      </div>
    </>
  );
}
