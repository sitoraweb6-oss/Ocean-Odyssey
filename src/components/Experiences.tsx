import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, Anchor, Waves, Award, Activity, Navigation, Radio, Compass } from "lucide-react";

export default function Experiences() {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);

  const steps = [
    {
      phase: "01",
      title: "Hyperbaric Release Node",
      duration: "Hour 00:00",
      icon: Activity,
      summary: "Class-1 pressure adjustments with Nitrox alignment.",
      details: [
        "Nitrox breathing mix is calibrated to 32% oxygen to prevent decompression toxicity",
        "Submersible hulls undergo instant structural checks down to micrometer tolerances",
        "Sensors lock-on satellite connection to Ocean Odyssey surface control"
      ]
    },
    {
      phase: "02",
      title: "Vertical Oceanic Descent",
      duration: "Hour 01:20",
      icon: Waves,
      summary: "Plunge into deep solar-extinguished ocean boundaries.",
      details: [
        "Rapid bypass of the mesopelagic zone (the twilight boundary where sunlight fades)",
        "Interior cabin lighting shifts to deep crimson to accommodate human visual expansion",
        "Sonar beams map the benthic thermal draft speeds at 32 directions"
      ]
    },
    {
      phase: "03",
      title: "Benthic Outpost Lock-in",
      duration: "Hour 03:00",
      icon: Navigation,
      summary: "Secure tethering inside geothermal research capsules.",
      details: [
        "Hoses establish secondary thermal supply links with ground energy outposts",
        "Expedition teams launch micro probe drones to scan ruins or caverns before departure",
        "Power cells are toggled to quiet marine backup batteries"
      ]
    },
    {
      phase: "04",
      title: "Autonomous Extra-Vehicular Dive",
      duration: "Hour 04:30",
      icon: Anchor,
      summary: "Autonomous walks inside deep water bioluminescent trenches.",
      details: [
        "Divers disembark inside fortified atmospheric exosuits using bionic jet propulsion",
        "Specimen collectors retrieve pristine crystals or record acoustic whale frequencies",
        "HUD units provide high-range laser paths guiding divers safely back to the portal lock"
      ]
    }
  ];

  return (
    <section id="experiences" className="relative w-full py-24 md:py-32 bg-gradient-to-b from-ocean-blue to-ocean-dark overflow-hidden">
      
      {/* Decorative underwater background shapes */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-cyan-950/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6" id="experiences-header">
          <div>
            <div className="flex items-center gap-2 text-aqua-glow font-mono text-xs tracking-wider mb-2">
              <Award className="w-4 h-4 text-glow-aqua" />
              <span>EXPEDITION BLUEPRINT_SEC_14</span>
            </div>
            <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-wider">
              The <strong className="font-semibold text-aqua-glow text-glow-aqua">Expedition Plan</strong>
            </h2>
            <p className="mt-4 text-sm text-gray-400 max-w-xl leading-relaxed">
              Understand every step of your dive from vertical release lock-ins to deep-core ocean bed walks.
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-[10px] text-gray-500">
            <span>SECURE LEVEL: COMPLIANT</span>
          </div>
        </div>

        {/* Timeline Interaction Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Timeline Buttons (Step Lists) - 5 Cols */}
          <div className="lg:col-span-5 flex flex-col gap-4" id="experience-steps-list">
            {steps.map((step, idx) => {
              const active = idx === activeStepIdx;
              const Icon = step.icon;
              return (
                <button
                  key={step.phase}
                  onClick={() => setActiveStepIdx(idx)}
                  className={`text-left rounded-2xl p-4 md:p-5 border transition-all duration-500 cursor-pointer flex gap-4 items-center group relative overflow-hidden ${
                    active
                      ? "bg-white/[0.03] border-aqua-glow/30 shadow-[0_0_24px_rgba(3,19,48,0.4)]"
                      : "bg-white/[0.01] border-white/5 hover:border-white/10 hover:bg-white/[0.02]"
                  }`}
                  id={`experience-step-btn-${step.phase}`}
                >
                  {/* Subtle edge glowing */}
                  {active && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-aqua-glow shadow-[0_0_8px_rgba(9,241,208,1)]" />
                  )}

                  {/* Icon Frame */}
                  <div className={`p-3 rounded-xl border shrink-0 transition-all ${
                    active
                      ? "bg-aqua-glow/10 border-aqua-glow/40 text-aqua-glow"
                      : "bg-white/[0.02] border-white/10 text-gray-400 group-hover:text-white"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Label Text */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between font-mono text-[10px] text-gray-500 mb-1">
                      <span>PHASE {step.phase}</span>
                      <span className={active ? "text-aqua-glow" : ""}>{step.duration}</span>
                    </div>
                    <h3 className="text-sm font-semibold font-display text-white uppercase tracking-wide group-hover:text-aqua-glow transition-colors">
                      {step.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Content Display - 7 Cols */}
          <div className="lg:col-span-7" id="experience-display-portal">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStepIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col justify-between min-h-[420px]"
              >
                {/* Embedded underwater graphic background simulation */}
                <div className="absolute -right-16 -top-16 w-48 h-48 bg-aqua-glow/5 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-6 right-6 font-mono text-[100px] text-[#ffffff]/[0.01] font-extrabold select-none leading-none">
                  {steps[activeStepIdx].phase}
                </div>

                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                    <span className="text-xs font-mono text-aqua-glow tracking-widest uppercase">
                      // MISSION CHRONOPROTOCOL
                    </span>
                    <span className="text-xs font-mono text-gray-500">
                      {steps[activeStepIdx].duration}
                    </span>
                  </div>

                  <h3 className="font-display font-light text-2xl sm:text-3xl text-white tracking-wide uppercase mb-3">
                    {steps[activeStepIdx].title}
                  </h3>
                  
                  <p className="text-sm text-cyan-300 font-medium mb-6">
                    {steps[activeStepIdx].summary}
                  </p>

                  {/* Bullet specifics */}
                  <div className="flex flex-col gap-4">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">
                      Core Operations Checkpoints:
                    </span>
                    {steps[activeStepIdx].details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-3 text-xs text-gray-300 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-aqua-glow shrink-0 mt-1.5 shadow-[0_0_6px_rgba(9,241,208,1)]" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tactical specifications readout in bottom of details */}
                <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[10px]">
                  <div className="flex items-center gap-3 text-gray-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>SYSTEM INTEGRITY COMPLIANT</span>
                  </div>
                  <div className="text-[#9ca3af]">
                    DECOMPRESSION RATING: <span className="text-white">OPTIMAL</span>
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
