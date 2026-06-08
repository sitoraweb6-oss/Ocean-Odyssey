import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, Command, ArrowRight, Quote, Sparkles } from "lucide-react";

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonials = [
    {
      id: "1",
      name: "Marcus Vance",
      role: "Marine Archaeologist",
      initials: "MV",
      avatarColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      comment: "Descent to Neptune Citadel was a career-defining achievement. Stepping out into the ocean trench enclosed in the titanium exosuit was surreal. The Sonar HUD was pinpoint accurate. Pure cinema.",
      rating: 5,
      outpostVisited: "Aegean Outpost 1"
    },
    {
      id: "2",
      name: "Sophia Sterling",
      role: "Bioluminescence Researcher",
      initials: "SS",
      avatarColor: "bg-teal-500/20 text-teal-400 border-teal-500/30",
      comment: "The Nitrox mixtures and atmospheric rebreathers inside the Mariana crystal shafts worked flawlessly. Our oxygen levels remaining optimal for 12 hours straight enabled stunning microbial samples.",
      rating: 5,
      outpostVisited: "Mariana Shaft Node"
    },
    {
      id: "3",
      name: "Dr. Ethan Thorne",
      role: "Acoustic Ecologist",
      initials: "ET",
      avatarColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      comment: "Sitting in the Southern Plain watching blue whale pods converse via the non-invasive frequency listeners is a memory I will carry forever. Absolute respect is paid to marine habitats.",
      rating: 5,
      outpostVisited: "Southern Amundsen Plain"
    }
  ];

  return (
    <section id="testimonials" className="relative w-full py-24 bg-ocean-dark overflow-hidden">
      {/* Decorative underwater gradients */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-950/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="testimonials-header">
          <span className="text-xs font-mono tracking-[0.2em] text-aqua-glow uppercase block mb-3 text-glow-aqua">
            // VOICE FROM THE LOWER OUTPOSTS
          </span>
          <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-wider">
            Explorer <strong className="font-semibold text-aqua-glow text-glow-aqua">Testimonials</strong>
          </h2>
          <div className="h-0.5 w-16 bg-white/20 mx-auto mt-6" />
        </div>

        {/* Testimonials Interaction Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Switcher buttons - 5 cols */}
          <div className="lg:col-span-4 flex flex-col gap-3" id="testimonial-switching-panel">
            {testimonials.map((test, index) => {
              const active = index === activeIdx;
              return (
                <button
                  key={test.id}
                  onClick={() => setActiveIdx(index)}
                  className={`text-left rounded-2xl p-4 border transition-all duration-300 flex items-center gap-4 cursor-pointer ${
                    active
                      ? "bg-white/[0.03] border-aqua-glow/30 shadow-lg"
                      : "bg-white/[0.01] border-white/5 hover:border-white/10 hover:bg-white/[0.02]"
                  }`}
                  id={`testimonial-btn-${test.id}`}
                >
                  {/* Procedural initials profile bubble */}
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center font-display font-bold text-sm shrink-0 ${test.avatarColor}`}>
                    {test.initials}
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">{test.name}</h3>
                    <p className="text-[10px] text-gray-400 capitalize">{test.role}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Card Display - 8 cols */}
          <div className="lg:col-span-8" id="testimonial-active-bubble">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden"
              >
                {/* Giant decoration quote mark */}
                <Quote className="absolute right-6 top-6 w-20 h-20 text-white/[0.02] pointer-events-none" />

                <div className="flex flex-col h-full justify-between">
                  <div>
                    {/* Stars element */}
                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: testimonials[activeIdx].rating }).map((_, i) => (
                        <span key={i} className="text-aqua-glow text-base">★</span>
                      ))}
                    </div>

                    <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-light italic mb-8">
                      "{testimonials[activeIdx].comment}"
                    </p>
                  </div>

                  {/* Comment Author metadata */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-white/5 pt-6 gap-4">
                    <div>
                      <h4 className="font-display font-semibold text-sm tracking-wide text-white uppercase">
                        {testimonials[activeIdx].name}
                      </h4>
                      <p className="text-xs text-gray-500 font-mono">
                        {testimonials[activeIdx].role}
                      </p>
                    </div>

                    {/* Visited parameters */}
                    <div className="flex items-center gap-2 px-3 py-1 bg-white/[0.02] border border-white/5 rounded-full font-mono text-[9px] text-[#9ca3af]">
                      <Sparkles className="w-3 h-3 text-glow-aqua text-aqua-glow" />
                      <span>VISITED: {testimonials[activeIdx].outpostVisited.toUpperCase()}</span>
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
