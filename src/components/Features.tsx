import { motion } from "motion/react";
import { Tv, ShieldAlert, Cpu, Orbit, Sparkles, Navigation } from "lucide-react";

export default function Features() {
  const techFeatures = [
    {
      id: "helmets",
      title: "Bioluminescent Visor HUDs",
      desc: "Real-time sonar mapping, oxygen parameters, and temperature curves projected directly into your pressure visor.",
      icon: Tv,
      metric: "LUMENS_12,000"
    },
    {
      id: "exosuits",
      title: "Atmospheric Exosuits",
      desc: "Micro-welded carbon alloy chassis rated for 11,000 meters depth. Experience raw seafloors in complete, joint-free safety.",
      icon: ShieldAlert,
      metric: "PRESSURE_1,500 ATM"
    },
    {
      id: "synthesizers",
      title: "Aqua-Breathing Synthesizers",
      desc: "Advanced rebreather loops pulling dissolved oxygen directly from water, stretching expedition timelines up to 48 hours.",
      icon: Cpu,
      metric: "REBREATH_O2_98%"
    },
    {
      id: "sonar",
      title: "Laser Topography Sonar",
      desc: "Instantaneous 3D holographs of cave networks and wreck sites, identifying mineral ores and deep caverns instantly.",
      icon: Orbit,
      metric: "RANGE_1,200M"
    },
    {
      id: "propulsion",
      title: "Thermobaric Jet Thrusters",
      desc: "Sub-acoustic silent bionic fins driving rapid swimming speeds with zero sound interference for marine life conservation.",
      icon: Sparkles,
      metric: "MAX_SPEED_18 KTS"
    },
    {
      id: "satellite",
      title: "Quantum Comms Array",
      desc: "Encrypted quantum-node telemetry channels communicating zero-latency feeds back to the surface ship during deep currents.",
      icon: Navigation,
      metric: "FEED_SECURE"
    }
  ];

  return (
    <section id="features" className="relative w-full py-24 md:py-32 bg-gradient-to-b from-ocean-dark to-ocean-blue overflow-hidden">
      
      {/* Decorative absolute background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-aqua-glow/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative vertical coordinates overlay */}
      <div className="absolute left-8 top-1/3 writing-mode-v select-none text-[10px] font-mono text-gray-700 tracking-[0.3em] uppercase hidden md:block">
        TACTICAL_GEAR_SPEC_DATA
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20" id="features-header">
          <span className="text-xs font-mono tracking-[0.2em] text-aqua-glow uppercase block mb-3 text-glow-aqua">
            // SUB-SURFACE COGNITIVE SUITE
          </span>
          <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-wider">
            Futuristic <strong className="font-semibold text-aqua-glow text-glow-aqua">Technologies</strong>
          </h2>
          <div className="h-0.5 w-16 bg-white/20 mx-auto mt-6" />
          <p className="mt-6 text-sm text-gray-400 leading-relaxed">
            Our deep ocean missions utilize state-of-the-art military and science alloys, designed to bypass human limits and safeguard lives inside extreme benthic fields.
          </p>
        </div>

        {/* Feature Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="features-grid">
          {techFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                key={feat.id}
                className="glass-panel p-6 rounded-2xl relative overflow-hidden group hover:border-aqua-glow/30 hover:bg-white/[0.03] transition-all duration-500 flex flex-col justify-between h-[280px]"
                id={`tech-feature-card-${feat.id}`}
              >
                {/* Visual Accent Hover Overlays */}
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-aqua-glow/[0.02] group-hover:bg-aqua-glow/[0.06] rounded-full blur-xl transition-colors duration-500" />
                <div className="absolute top-0 right-0 h-10 w-10 bg-[#0df2c9]/5 rounded-bl-3xl border-b border-l border-white/5 group-hover:border-aqua-glow/20 transition-all duration-500" />

                <div>
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 group-hover:bg-aqua-glow/10 group-hover:border-aqua-glow/40 transition-all duration-500">
                      <Icon className="w-6 h-6 text-white group-hover:text-aqua-glow transition-colors" />
                    </div>
                    {/* Diagnostic Metric */}
                    <span className="font-mono text-[9px] text-[#9ca3af] tracking-widest bg-white/[0.02] px-2.5 py-1 rounded border border-white/5">
                      {feat.metric}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <h3 className="font-display text-base font-semibold tracking-wider text-white uppercase group-hover:text-aqua-glow transition-colors">
                    {feat.title}
                  </h3>
                  <p className="mt-3 text-xs text-gray-400 tracking-wide leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                {/* Tactical card footer element */}
                <div className="flex items-center justify-between border-t border-white/5 pt-4 text-[9px] font-mono text-gray-500 uppercase mt-auto">
                  <span>ACTIVE REVISION_v4.2</span>
                  <span className="text-aqua-glow/65 group-hover:text-aqua-glow transition-colors">READY FOR DEPLOYMENT</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section Bottom CTA */}
        <div className="mt-16 text-center" id="features-bottom-action">
          <p className="text-xs text-gray-500 font-mono">
            *All systems undergo mandatory hyperbaric safety runs before sub-surface ignition.
          </p>
        </div>

      </div>
    </section>
  );
}
