import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Compass, Waves, Shield, Thermometer, ShieldAlert, Layers, ArrowRight, Eye, CheckCircle2 } from "lucide-react";

const underwaterCity = "/images/underwater_city_1780916327953.png";
const bioluminescentCave = "/images/bioluminescent_cave_1780916344504.png";
const whaleAbyss = "/images/whale_abyss_1780916364228.png";

export default function Destinations() {
  const [selectedDestId, setSelectedDestId] = useState<string>("citadel");

  const destinations = [
    {
      id: "citadel",
      title: "Neptune Submerged Citadel",
      region: "Aegean Seabed Outpost",
      depth: "1,200 Meters",
      temp: "7°C / 44°F",
      visibility: "Excellent (Bioluminescent Glow)",
      duration: "4-Day Mission",
      image: underwaterCity,
      description: "Explore the legendary ruins of a flooded futuristic metropolis. Walk through reinforced glass bio-domes, marvel at geothermal currents driving underwater turbine farms, and observe advanced research submersibles charting long-lost archives.",
      features: ["Walk inside bioluminescent glass biodomes", "Tour geothermal vents and power generators", "Pilot mini-submersibles through ancient arches"]
    },
    {
      id: "cavern",
      title: "Bioluminescent Crystal Caves",
      region: "Mariana Volcanic Arch",
      depth: "11,000 Meters",
      temp: "1.5°C / 34°F",
      visibility: "Moderate (Glow-assisted)",
      duration: "6-Day Mission",
      image: bioluminescentCave,
      description: "Descend into the deepest abyss of the earth. Guided through pressurized volcanic vents glowing with neon purple crystals, divers will study extremely rare extreme-philic lifeforms, glowing algae systems, and breathtaking rock formations untouched by solar rays.",
      features: ["Super-deep pressure proofing dive suit", "Excavate glowing crystal samples safely", "Map the sub-ocean volcanic chimneys"]
    },
    {
      id: "abyss",
      title: "Whale Whispering Hollow",
      region: "Southern Amundsen Basin",
      depth: "3,800 Meters",
      temp: "2°C / 35°F",
      visibility: "High Range (Laser assisted)",
      duration: "3-Day Mission",
      image: whaleAbyss,
      description: "An ethereal cetacean playground. Submerge into dark crystalline trenches where majestic blue whales migrate in dense pods. Using non-invasive acoustic frequency synthesizers, you can monitor their communications in absolute serenity.",
      features: ["Cetacean acoustic synthesis listener", "Interact with giant bioluminescent squid species", "Laser-guided high range ocean navigation"]
    }
  ];

  const currentDest = destinations.find((d) => d.id === selectedDestId) || destinations[0];

  return (
    <section id="destinations" className="relative w-full py-24 md:py-32 bg-ocean-dark overflow-hidden">
      {/* Decorative vertical coordinates overlay */}
      <div className="absolute right-8 top-1/4 writing-mode-v select-none text-[10px] font-mono text-gray-700 tracking-[0.3em] uppercase hidden md:block">
        OUTPOST MAPPER_SECTOR_09
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6" id="destinations-header">
          <div>
            <div className="flex items-center gap-2 text-aqua-glow font-mono text-xs tracking-wider mb-2">
              <Compass className="w-4 h-4 animate-spin-slow" />
              <span>LAUNCH WINDOW ACTIVE</span>
            </div>
            <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-wider">
              Abyssal <strong className="font-semibold text-aqua-glow text-glow-aqua">Destinations</strong>
            </h2>
            <p className="mt-4 text-sm text-gray-400 max-w-xl leading-relaxed">
              Embark on highly localized, technologically superior deep underwater expeditions designed to map ruins, interact with marine titans, and unearth ancient crystals.
            </p>
          </div>

          <div className="flex gap-2 font-mono text-[10px] text-gray-500">
            <span>MAP RESOLUTION: 4K SONAR</span>
          </div>
        </div>

        {/* Master Selector Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Visual Selector Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4" id="dest-selector-list">
            {destinations.map((dest) => {
              const isSelected = dest.id === selectedDestId;
              return (
                <button
                  key={dest.id}
                  onClick={() => setSelectedDestId(dest.id)}
                  className={`text-left rounded-2xl overflow-hidden transition-all duration-500 border p-1 ${
                    isSelected
                      ? "bg-gradient-to-r from-ocean-blue to-ocean-light border-aqua-glow/40 shadow-xl shadow-cyan-950/20"
                      : "bg-white/[0.01] border-white/5 hover:border-white/15 hover:bg-white/[0.03]"
                  } cursor-pointer group`}
                  id={`dest-card-selector-${dest.id}`}
                >
                  <div className="flex gap-4 p-3 items-center">
                    {/* Tiny Thumb */}
                    <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-white/10 relative">
                      <img
                        src={dest.image}
                        alt={dest.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {isSelected && (
                        <div className="absolute inset-0 bg-aqua-glow/20 flex items-center justify-center">
                          <Eye className="w-5 h-5 text-white" />
                        </div>
                      )}
                    </div>

                    {/* Metadata summary */}
                    <div className="flex flex-col flex-1">
                      <span className="text-[10px] font-mono text-aqua-glow uppercase tracking-widest mb-1">
                        {dest.region}
                      </span>
                      <h3 className="text-sm font-semibold font-display tracking-wider text-white">
                        {dest.title}
                      </h3>
                      
                      <div className="flex gap-4 mt-2 font-mono text-[10px] text-gray-400">
                        <span className="flex items-center gap-1">
                          <Thermometer className="w-3 h-3 text-[#9ca3af]" /> {dest.temp}
                        </span>
                        <span className="flex items-center gap-1">
                          <Layers className="w-3 h-3 text-[#9ca3af]" /> {dest.depth}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Big Immersive Interactive Review (7 cols) */}
          <div className="lg:col-span-7" id="dest-display-portal">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentDest.id}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.6 }}
                className="glass-panel rounded-3xl overflow-hidden flex flex-col border border-white/10 shadow-2xl relative"
              >
                {/* Immersive Photo Header with glowing depth */}
                <div className="relative h-[250px] sm:h-[320px] overflow-hidden border-b border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#010610] via-transparent to-transparent z-10" />
                  <img
                    src={currentDest.image}
                    alt={currentDest.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Floating Coordinates over photo */}
                  <div className="absolute top-4 right-4 z-20 font-mono text-[9px] bg-black/60 border border-white/10 rounded px-2.5 py-1 text-white uppercase select-none">
                    SECTOR ADMIT_REF: {currentDest.id.toUpperCase()}_v09
                  </div>
                </div>

                {/* Submersion technical specifications block */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 py-4 bg-white/[0.02] border-b border-white/5 font-mono text-xs">
                  <div className="flex flex-col">
                    <span className="text-[9px] text-[#9ca3af] uppercase mb-0.5">TARGET DEPTH</span>
                    <span className="text-white font-bold text-glow-white">{currentDest.depth}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] text-[#9ca3af] uppercase mb-0.5">WATER TEMP</span>
                    <span className="text-white font-bold">{currentDest.temp}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] text-[#9ca3af] uppercase mb-0.5">VISIBILITY RANGE</span>
                    <span className="text-cyan-400 font-bold">{currentDest.visibility}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] text-[#9ca3af] uppercase mb-0.5">EXPEDITION TIMER</span>
                    <span className="text-[#0df2c9] font-bold">{currentDest.duration}</span>
                  </div>
                </div>

                {/* Narrative content and checklists */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono text-glow-aqua text-aqua-glow tracking-widest uppercase mb-2 block">
                      {currentDest.region}
                    </span>
                    <h3 className="font-display font-light text-2xl md:text-3xl tracking-wide text-white mb-4 uppercase">
                      {currentDest.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#d1d5db] leading-relaxed mb-6">
                      {currentDest.description}
                    </p>

                    {/* Features checklist */}
                    <div className="flex flex-col gap-2.5 mb-8">
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">
                        Included Subsume Modules:
                      </span>
                      {currentDest.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-aqua-glow shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Operational triggers */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-white/5">
                    <a
                      href="#contact"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-500 text-white font-semibold text-xs tracking-wider uppercase text-center shadow-lg active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>BOOK EXPEDITION PASS</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    
                    <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500">
                      <Shield className="w-3.5 h-3.5 text-aqua-glow" />
                      <span>Class-1 Pressurized Protocol applied.</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
