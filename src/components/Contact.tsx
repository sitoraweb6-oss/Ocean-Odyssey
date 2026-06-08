import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Waves, Send, ShieldAlert, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    grade: "submersible",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    // Simulate deep wave communication transit
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", grade: "submersible", message: "" });
    }, 1800);
  };

  return (
    <section id="contact" className="relative w-full py-24 md:py-32 bg-ocean-dark overflow-hidden">
      {/* Decorative bioluminescent effects */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-950/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-aqua-glow/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid lines backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Communication metrics and links - 5 cols */}
          <div className="lg:col-span-5 flex flex-col justify-center" id="contact-content-readout">
            <span className="text-xs font-mono tracking-[0.2em] text-aqua-glow uppercase block mb-3 text-glow-aqua">
              // TELECOMMUNICATIONS JUNCTION
            </span>
            <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-wider leading-tight">
              Begin Your <br />
              <strong className="font-semibold text-aqua-glow text-glow-aqua">Submersion</strong>
            </h2>
            <p className="mt-6 text-sm text-gray-400 leading-relaxed max-w-md">
              Secure your place on the next launch window. Submit your flight briefing data array, and our command vessel will communicate via acoustic wave channel.
            </p>

            {/* Operational indicators */}
            <div className="flex flex-col gap-4 mt-8 font-mono text-xs text-[#9ca3af]">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <Waves className="w-4 h-4 text-aqua-glow" />
                <div>
                  <h4 className="text-white font-bold text-[10px]">WAVECOM WAVEBAND:</h4>
                  <p className="text-[10px] text-gray-500">415.8 KHZ AC (SECURE)</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <ShieldAlert className="w-4 h-4 text-amber-500" />
                <div>
                  <h4 className="text-white font-bold text-[10px]">LAUNCH FREQUENCY:</h4>
                  <p className="text-[10px] text-gray-500">EVERY SECOND TUESDAY (WINDOW EXP-12)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Interactive Form Deck - 7 cols */}
          <div className="lg:col-span-7" id="contact-form-portal">
            <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                    id="expedition-booking-form"
                  >
                    {/* Raw alert banner */}
                    <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider border-b border-white/5 pb-2">
                      Secure Briefing Matrix Array // REF_EXP_v4.20
                    </div>

                    {/* Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-[10px] text-gray-400 uppercase">EXPLORER IDENTIFIER (NAME)</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. COMMANDER GATES"
                          className="w-full bg-white/[0.02] border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-aqua-glow/60 placeholder-gray-600 transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-[10px] text-gray-400 uppercase">COMM CHANNEL (EMAIL)</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="gates@oceanodyssey.com"
                          className="w-full bg-white/[0.02] border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-aqua-glow/60 placeholder-gray-600 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[10px] text-gray-400 uppercase">MISSION EXPEDITION GRADE</label>
                      <select
                        value={formData.grade}
                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        className="w-full bg-[#020617] border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-aqua-glow/60 transition-colors cursor-pointer"
                      >
                        <option value="submersible">Citadel Explorer (Submersible v4)</option>
                        <option value="exosuit">Abyss Crawler (Atmospheric Exosuit)</option>
                        <option value="research">Scientific Specimen Collector (Rebreather Loop)</option>
                        <option value="custom">Private Abyssal Custom Charter</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[10px] text-gray-400 uppercase">NARRATIVE MESSAGE / BRIEF NOTES</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Outline secondary scientific goals, physiological parameters, or preferred launch timelines..."
                        className="w-full bg-white/[0.02] border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-aqua-glow/60 placeholder-gray-600 transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl text-xs font-bold font-display tracking-widest bg-aqua-glow text-ocean-dark uppercase shadow-[0_0_20px_rgba(9,241,208,0.3)] hover:opacity-90 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-3 disabled:opacity-40"
                      id="submit-briefing-btn"
                    >
                      <span>{isSubmitting ? "TRANSMITTING DATA PACKET..." : "SUBMIT MISSION BRIEFING"}</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                    id="contact-submission-success"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6">
                      <CheckCircle className="w-8 h-8 text-emerald-400" />
                    </div>

                    <h3 className="font-display font-light text-2xl text-white uppercase tracking-wider mb-3">
                      Briefing <strong className="font-bold text-emerald-400">Transmitted</strong>
                    </h3>
                    <p className="text-xs text-gray-400 max-w-sm leading-relaxed mb-8">
                      Your wave packet has bypassed mesopelagic fields and safely registered on the mother capsule. Watch your secondary coordinates channel for descent authorization.
                    </p>

                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 rounded-xl text-[10px] font-mono tracking-widest text-[#9ca3af] border border-white/10 hover:border-white/30"
                    >
                      SUBMIT NEW TRANSMISSION
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
