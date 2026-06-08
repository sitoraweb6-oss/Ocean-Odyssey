import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Waves, HelpCircle, Compass, Layers, Phone, Image, Award } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navMenuItems = [
    { label: "Destinations", href: "#destinations", icon: Compass },
    { label: "Features", href: "#features", icon: Layers },
    { label: "Gallery", href: "#gallery", icon: Image },
    { label: "Experience", href: "#experiences", icon: Award },
    { label: "FAQ", href: "#faq", icon: HelpCircle },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active link detection
      const sections = ["hero", "destinations", "features", "gallery", "experiences", "faq", "contact"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 90;
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
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-4 left-0 right-0 z-50 px-4 md:px-8 max-w-7xl mx-auto transition-all duration-500`}
        id="app-navbar"
      >
        <div
          className={`flex items-center justify-between w-full rounded-2xl px-5 md:px-8 py-3 transition-all duration-500 ${
            isScrolled
              ? "glass-navbar py-2 shadow-2xl shadow-cyan-950/40"
              : "bg-transparent border-b border-white/5 py-4"
          }`}
        >
          {/* Logo inspired by the reference picture "OCEAN ODYSSEY" */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center gap-2 group cursor-pointer"
            id="nav-logo-link"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-white/30 overflow-hidden bg-black/40 group-hover:border-aqua-glow/60 transition-colors" id="nav-logo-icon">
              {/* Animated Wave in the middle of our logo */}
              <div className="absolute inset-0 flex flex-col justify-end">
                <motion.div
                  animate={{
                    y: [0, -3, 0, -2, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                  className="w-full h-1/2 bg-gradient-to-t from-aqua-glow/40 to-cyan-500/10 pointer-events-none"
                />
              </div>
              <Waves className="w-5 h-5 text-white group-hover:text-aqua-glow transition-colors z-10" />
            </div>

            <div className="flex flex-col text-left" id="nav-logo-text">
              <span className="font-display font-bold text-sm tracking-widest text-white leading-none">
                OCEAN
              </span>
              <span className="font-sans text-[10px] tracking-widest text-[#9ca3af] group-hover:text-aqua-glow transition-colors leading-none">
                ODYSSEY
              </span>
            </div>
          </a>

          {/* Desktop Navigation list */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 px-2 py-1.5 rounded-full border border-white/10" id="desktop-nav">
            {navMenuItems.map((item) => {
              const active = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                    active ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                  id={`nav-link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="navActiveBg"
                      className="absolute inset-0 bg-aqua-glow/15 border border-aqua-glow/40 rounded-full -z-10"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Connected Trigger Status & CTA Buttons */}
          <div className="hidden sm:flex items-center gap-4" id="nav-actions">
            {/* Real-time Indicator inspired by premium UI */}
            <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] font-mono text-emerald-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              SYS LOG_LIVE
            </div>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="px-5 py-2 rounded-xl text-xs font-semibold tracking-wider bg-white text-ocean-dark border border-white hover:bg-transparent hover:text-white transition-all duration-300 text-glow-white shadow-lg active:scale-95"
              id="nav-connect-btn"
            >
              LET'S CONNECT
            </a>
          </div>

          {/* Hamburger Menu Toggle Button */}
          <div className="flex items-center lg:hidden gap-3" id="nav-mobile-toggle">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="sm:hidden px-3 py-1.5 rounded-lg text-[10px] font-semibold tracking-wider bg-white text-ocean-dark"
            >
              CONNECT
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 active:scale-90 transition-all cursor-pointer"
              aria-label="Toggle menu"
              id="hamburger-btn"
            >
              {isOpen ? <X className="w-5 h-5 text-aqua-glow" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Glass Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-xl lg:hidden flex flex-col justify-between p-6 pt-32"
            id="mobile-drawer"
          >
            {/* Animated bubbles in the background background of drawer */}
            <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
              <div className="absolute top-[20%] left-[10%] w-24 h-24 rounded-full bg-aqua-glow/20 blur-2xl" />
              <div className="absolute top-[60%] right-[10%] w-32 h-32 rounded-full bg-cyan-500/20 blur-3xl" />
            </div>

            <div className="flex flex-col gap-6" id="mobile-nav-items">
              <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase border-b border-white/5 pb-2">
                Mission Directories
              </span>
              <nav className="flex flex-col gap-4">
                {navMenuItems.map((item, index) => {
                  const Icon = item.icon;
                  const active = activeSection === item.href.slice(1);
                  return (
                    <motion.a
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`flex items-center gap-4 py-2 border-b border-white/5 font-display text-lg tracking-widest uppercase transition-colors ${
                        active ? "text-aqua-glow font-semibold" : "text-white/70 hover:text-white"
                      }`}
                      id={`mobile-nav-link-${item.label.toLowerCase()}`}
                    >
                      <Icon className={`w-5 h-5 ${active ? "text-aqua-glow" : "text-white/40"}`} />
                      {item.label}
                    </motion.a>
                  );
                })}
              </nav>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4 z-10"
              id="mobile-nav-footer"
            >
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                <Waves className="w-5 h-5 text-aqua-glow" />
                <div>
                  <h4 className="text-xs font-bold tracking-wider text-white">OCEAN ODYSSEY</h4>
                  <p className="text-[10px] text-gray-400">Deep Expedition Node v1.4</p>
                </div>
              </div>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full py-3 rounded-xl bg-aqua-glow text-black font-semibold text-center tracking-wider text-sm hover:opacity-90 active:scale-95 transition-all"
                id="mobile-contact-btn"
              >
                START EXPEDITION
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
