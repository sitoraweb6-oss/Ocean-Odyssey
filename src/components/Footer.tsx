import { motion } from "motion/react";
import { Waves, Twitter, Instagram, Facebook, ArrowUp, Compass, Anchor, Cpu } from "lucide-react";
import { CoreFooterAttribution } from "./core-attribution";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#010307] border-t border-white/5 pt-16 pb-8 overflow-hidden">
      
      {/* Decorative underwater soft spot gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[150px] bg-aqua-glow/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Main Footer layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 items-start" id="footer-main-grid">
          
          {/* Logo and Pitch - 5 cols */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-full border border-white/20 overflow-hidden bg-black/40 group-hover:border-aqua-glow/60 transition-colors">
                <Waves className="w-4 h-4 text-white" />
              </div>

              <div className="flex flex-col text-left">
                <span className="font-display font-medium text-xs tracking-widest text-white leading-none">
                  OCEAN
                </span>
                <span className="font-sans text-[8px] tracking-widest text-[#9ca3af] leading-none">
                  ODYSSEY
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
              We turn your dreams of deep underwater exploration into safe, secure, and reality-altering experiences, powered by Nitrox life loops and glassmorphic submersibles.
            </p>

            {/* Social Grid */}
            <div className="flex gap-2.5 mt-2" id="footer-social-links">
              {[
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" }
              ].map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.href}
                  className="p-2 rounded-lg bg-white/[0.02] border border-white/5 hover:border-aqua-glow/45 text-[#9ca3af] hover:text-aqua-glow transition-all active:scale-95 cursor-pointer"
                  aria-label={soc.label}
                >
                  <soc.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Directories - 4 cols */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-mono text-[9px] text-[#9ca3af] uppercase tracking-widest mb-4">Launch Sites</h4>
              <ul className="flex flex-col gap-2 font-display text-[11px] text-gray-400">
                <li><a href="#destinations" className="hover:text-white transition-colors">Aegean Citadel</a></li>
                <li><a href="#destinations" className="hover:text-white transition-colors">Mariana Volcanic</a></li>
                <li><a href="#destinations" className="hover:text-white transition-colors">Southern Abyss</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[9px] text-[#9ca3af] uppercase tracking-widest mb-4">Technology</h4>
              <ul className="flex flex-col gap-2 font-display text-[11px] text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Visor HUDs</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Descent Suits</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Laser Sonar</a></li>
              </ul>
            </div>
          </div>

          {/* Core Telemetry parameters - 3 cols */}
          <div className="md:col-span-3 flex flex-col gap-4 font-mono text-[10px]">
            <h4 className="text-[#9ca3af] uppercase tracking-widest leading-none border-b border-white/5 pb-2">Status Node</h4>
            <div className="flex justify-between text-gray-500">
              <span>LATITUDE:</span>
              <span className="text-white">45.24 N</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>LONGITUDE:</span>
              <span className="text-white">12.86 W</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>NITROX FLOW:</span>
              <span className="text-aqua-glow">FLOW_SECURE</span>
            </div>
          </div>

        </div>

        {/* Bottom copy row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 text-[10px] font-mono text-gray-600" id="footer-bottom-bar">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <div className="flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-[#0df2c9]/30" />
              <span>© {currentYear} OCEAN ODYSSEY DEEP EXPEDITIONS INC. RELEASE APPROVED.</span>
            </div>
            <div className="hidden md:block w-px h-3 bg-white/10" />
            <CoreFooterAttribution />
          </div>

          {/* Scroll to Top */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-2 text-[#9ca3af] hover:text-aqua-glow cursor-pointer transition-colors px-3 py-1.5 rounded-lg hover:bg-white/[0.02]"
            id="scroll-to-top-btn"
          >
            <span>SCROLL TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#0df2c9]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
