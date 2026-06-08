import React from "react";
import { Sparkles, ExternalLink } from "lucide-react";

// Core Attribution Component

export function CoreFooterAttribution() {
  return (
    <div 
      className="flex items-center gap-1.5 font-mono text-[10px] text-gray-500 hover:text-gray-400 transition-colors duration-300 pointer-events-auto select-none"
      id="footer-attribution-container"
    >
      <span>Developed by</span>
      <a
        href="https://sitora.org"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-0.5 font-sans font-semibold text-aqua-glow hover:text-[#38bdf8] transition-all duration-300 relative group"
        id="footer-attribution-link"
      >
        <span className="text-glow-aqua transition-all duration-300 group-hover:shadow-aqua-glow">Sitora Web</span>
        <ExternalLink className="w-3 h-3 text-aqua-glow/60 group-hover:text-aqua-glow group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
      </a>
    </div>
  );
}

export function CoreFloatingAttribution() {
  return (
    <div 
      className="fixed right-4 bottom-4 z-40 pointer-events-auto hidden sm:flex items-center gap-2 py-1.5 px-3 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 font-mono text-[9px] text-[#9ca3af] hover:border-aqua-glow/40 hover:bg-white/10 shadow-lg hover:shadow-[0_0_15px_rgba(34,211,238,0.25)] transition-all duration-500 ease-out select-none"
      id="floating-brand-attribution"
    >
      <div className="relative flex items-center justify-center w-2 h-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
        <Sparkles className="relative w-2 h-2 text-aqua-glow shrink-0 font-sans" strokeWidth={3} />
      </div>
      <span>Developed by</span>
      <a
        href="https://sitora.org"
        target="_blank"
        rel="noopener noreferrer"
        className="font-sans font-bold text-white hover:text-aqua-glow transition-all duration-300 flex items-center gap-0.5 group"
        id="floating-attribution-link"
      >
        <span className="transition-all duration-300 group-hover:text-glow-aqua">Sitora Web</span>
        <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
      </a>
    </div>
  );
}
