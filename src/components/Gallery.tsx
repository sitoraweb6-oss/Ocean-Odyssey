import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Camera, Compass, Eye, X, ZoomIn, Info, ShieldCheck } from "lucide-react";

const heroDiver = "/images/hero_diver_1780916310242.png";
const underwaterCity = "/images/underwater_city_1780916327953.png";
const bioluminescentCave = "/images/bioluminescent_cave_1780916344504.png";
const whaleAbyss = "/images/whale_abyss_1780916364228.png";

export default function Gallery() {
  const [filter, setFilter] = useState<string>("ALL");
  const [selectedImage, setSelectedImage] = useState<any | null>(null);

  const galleryItems = [
    {
      id: "whale",
      title: "The Cetacean Titan",
      category: "TITANS",
      depth: "3,800m",
      location: "Southern Abundsen Basin",
      image: whaleAbyss,
      gear: "Cine-Acoustic Sonar v4",
      iso: "ISO 3200",
      shutter: "1/400s",
      aperture: "f/2.8",
      description: "A breathtaking high-shutter capture of a colossal blue whale drifting alongside an active probe submarine."
    },
    {
      id: "diver",
      title: "First Deep Descent",
      category: "EXPLORERS",
      depth: "120m",
      location: "Explorer Gulf Surface",
      image: heroDiver,
      gear: "Dome Cam Mark VIII",
      iso: "ISO 400",
      shutter: "1/80s",
      aperture: "f/1.4",
      description: "A close-up exploration profile showing a diver's glowing HUD helmet adjusting after sub-surface release."
    },
    {
      id: "city",
      title: "Neptune Flooded Citadel",
      category: "ARCHAEOLOGY",
      depth: "1,200m",
      location: "Aegean Submerged Ruin",
      image: underwaterCity,
      gear: "Robotic Probe Cam 9",
      iso: "ISO 1600",
      shutter: "1/60s",
      aperture: "f/2.0",
      description: "Wide-span photograph of the sunken city architectural arches glowing under deep research dome lights."
    },
    {
      id: "cavern",
      title: "Neon Volcanic Shafts",
      category: "CAVERNS",
      depth: "11,000m",
      location: "Mariana Obsidian Caves",
      image: bioluminescentCave,
      gear: "Luminescent Lens 12",
      iso: "ISO 6400",
      shutter: "1/120s",
      aperture: "f/1.2",
      description: "Brimming with thermal neon crystals, this deep-core lava cave photograph proves microbial colonies thrive in absolute darkness."
    }
  ];

  const categories = ["ALL", "TITANS", "ARCHAEOLOGY", "EXPLORERS", "CAVERNS"];

  const filteredItems = filter === "ALL"
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="relative w-full py-24 md:py-32 bg-ocean-dark overflow-hidden">
      
      {/* Visual background details */}
      <div className="absolute top-1/4 right-[5%] w-72 h-72 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[8%] w-80 h-80 bg-teal-950/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6" id="gallery-header">
          <div>
            <div className="flex items-center gap-2 text-aqua-glow font-mono text-xs tracking-wider mb-2">
              <Camera className="w-4 h-4 text-glow-aqua" />
              <span>EXPEDITION CAPTURES_UNSPLASHED</span>
            </div>
            <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-wider">
              Visual <strong className="font-semibold text-aqua-glow text-glow-aqua">Archives</strong>
            </h2>
            <p className="mt-4 text-sm text-gray-400 max-w-xl leading-relaxed">
              Vivid digital snapshots retrieved by high-pressure camera probes, tracking marine giants and sunken archaeology in 4K resolution.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-2 bg-white/[0.03] p-1.5 rounded-2xl border border-white/5" id="gallery-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-[10px] font-mono tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                  filter === cat
                    ? "bg-aqua-glow text-ocean-dark font-bold shadow-[0_0_12px_rgba(9,241,208,0.3)]"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
                id={`gallery-category-tab-${cat.toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Gallery Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="gallery-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                key={item.id}
                className="group relative h-[380px] rounded-2xl overflow-hidden border border-white/5 bg-ocean-blue shadow-lg hover:border-aqua-glow/30 transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedImage(item)}
                id={`gallery-item-${item.id}`}
              >
                {/* Visual Glass overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10 z-10 transition-opacity duration-500 group-hover:opacity-40" />

                {/* Main image */}
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Category tags */}
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                  <span className="font-mono text-[9px] tracking-widest uppercase bg-black/60 backdrop-blur-md px-2.5 py-1 text-white border border-white/10 rounded">
                    {item.category}
                  </span>
                  <span className="font-mono text-[9px] bg-aqua-glow text-black px-2 py-1 rounded font-bold">
                    {item.depth}
                  </span>
                </div>

                {/* Bottom Capture Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col justify-end">
                  <span className="text-[10px] font-mono text-aqua-glow tracking-widest uppercase mb-1">
                    {item.location}
                  </span>
                  <h3 className="font-display text-sm font-semibold tracking-wider text-white uppercase group-hover:text-aqua-glow transition-all">
                    {item.title}
                  </h3>
                  
                  {/* Action triggers */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[9px] font-mono text-gray-500">{item.gear}</span>
                    <span className="text-aqua-glow inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider">
                      <span>EXPAND VIEW</span>
                      <ZoomIn className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Expanded Image Modal overlay */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 md:p-8"
              onClick={() => setSelectedImage(null)}
              id="gallery-fullscreen-modal"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 180 }}
                className="relative bg-ocean-dark max-w-5xl w-full rounded-3xl overflow-hidden border border-white/15 flex flex-col lg:flex-row shadow-2xl"
                onClick={(e) => e.stopPropagation()} // Prevent closing
              >
                
                {/* Left Side: Massive Capture Backdrop */}
                <div className="lg:w-7/12 relative aspect-video lg:aspect-auto h-[300px] lg:h-[550px] bg-black">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute top-4 left-4 font-mono text-[9px] bg-black/60 border border-white/10 rounded px-2.5 py-1 text-white uppercase select-none">
                    RETRIEVAL DEPTH: {selectedImage.depth}
                  </div>
                </div>

                {/* Right Side: Specifications and descriptions */}
                <div className="lg:w-5/12 p-6 sm:p-8 flex flex-col justify-between" id="gallery-metadata">
                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span className="text-[10px] font-mono text-aqua-glow tracking-widest uppercase block mb-1">
                          {selectedImage.location}
                        </span>
                        <h4 className="font-display font-bold text-xl text-white tracking-wider uppercase">
                          {selectedImage.title}
                        </h4>
                      </div>
                      <button
                        onClick={() => setSelectedImage(null)}
                        className="p-1.5 rounded-lg border border-white/10 hover:border-white/30 text-white cursor-pointer hover:bg-white/5 active:scale-95 transition-all"
                        id="close-gallery-modal-btn"
                        aria-label="Close details"
                      >
                        <X className="w-5 h-5 text-aqua-glow" />
                      </button>
                    </div>

                    <p className="text-xs text-gray-300 leading-relaxed mb-6">
                      {selectedImage.description}
                    </p>

                    {/* Camera properties panel */}
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 mb-6">
                      <div className="flex items-center gap-2 font-mono text-[10px] text-gray-400 border-b border-white/5 pb-2 mb-3">
                        <Camera className="w-3.5 h-3.5 text-aqua-glow" />
                        <span>PROBE SENSOR CALIBRATION</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                        <div className="flex flex-col">
                          <span className="text-[9px] text-[#9ca3af] uppercase">LENS SPEED</span>
                          <span className="text-white font-medium">{selectedImage.aperture}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[9px] text-[#9ca3af] uppercase">SHUTTER</span>
                          <span className="text-white font-medium">{selectedImage.shutter}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[9px] text-[#9ca3af] uppercase">SENSITIVITY</span>
                          <span className="text-white font-medium">{selectedImage.iso}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[9px] text-[#9ca3af] uppercase">REC GEAR</span>
                          <span className="text-aqua-glow font-medium">{selectedImage.gear}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Safety compliance sign-off */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-gray-400">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>SONAR CLEANED_VERIFIED</span>
                    </div>
                    
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="px-4 py-2 rounded-xl text-[10px] font-mono font-bold uppercase tracking-widest text-black bg-aqua-glow hover:opacity-90 active:scale-95 transition-all"
                    >
                      CONTINUE
                    </button>
                  </div>

                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
