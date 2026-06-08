import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const faqs = [
    {
      id: "faq-1",
      question: "Is deep-sea exploration dangerous at these massive depths?",
      answer: "No. Safety is our primary engineering milestone. Our fleet utilizes Class-1 custom-welded titanium submersibles and military-grade carbon-link atmospheric dive suits (exosuits) rated to handle over 1,500 atmospheric pressures, resulting in zero pressure-breach incidents throughout our dive history."
    },
    {
      id: "faq-2",
      question: "Do I need pre-certification or advanced scuba diving licenses?",
      answer: "Scuba licenses are not required. For passengers inside the submersibles, zero physical training is needed. For divers planning extra-vehicular walking on ocean beds, we conduct a comprehensive, comfortable 2-day hydro-gravity alignment program at our shallow-water Greek training outposts."
    },
    {
      id: "faq-3",
      question: "How long do sub-surface expeditions typically spend underwater?",
      answer: "A standard dive session averages 4 to 10 hours. In extra-vehicular dives, our high-performance Aqua-Scribe rebreather units filter dissolved oxygen directly from the surrounding sea water, extending the safety breathing threshold up to 48 hours for contingency operations."
    },
    {
      id: "faq-4",
      question: "What is your policy regarding marine ecosystem protection?",
      answer: "We adhere strictly to a non-invasive directive. Our submersibles operate using passive sub-acoustic bionic induction jets, resulting in near-zero noise pollution. We forbid material extraction unless specifically authorized for scientific research of crystal microbial colonies."
    }
  ];

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative w-full py-24 bg-gradient-to-b from-ocean-dark to-ocean-blue overflow-hidden">
      
      {/* Background visual indicators */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-cyan-900/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="faq-header">
          <span className="text-xs font-mono tracking-[0.2em] text-aqua-glow uppercase block mb-3 text-glow-aqua">
            // OPERATIONAL SAFETY & DIRECTIVES
          </span>
          <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-wider">
            Common <strong className="font-semibold text-aqua-glow text-glow-aqua">Questions</strong>
          </h2>
          <div className="h-0.5 w-16 bg-white/20 mx-auto mt-6" />
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-4" id="faq-accordions-group">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-white/[0.03] border-aqua-glow/30 shadow-[0_0_15px_rgba(3,19,48,0.3)]"
                    : "bg-white/[0.01] border-white/5 hover:border-white/10"
                }`}
                id={`faq-accordion-item-${faq.id}`}
              >
                {/* Header button click */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left py-5 px-6 flex justify-between items-center gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-4 h-4 shrink-0 transition-colors ${isOpen ? "text-aqua-glow" : "text-white/40"}`} />
                    <span className="font-display text-sm sm:text-base font-semibold text-white tracking-wide uppercase">
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Indicator arrows */}
                  <div className="shrink-0 p-1 rounded-lg bg-white/5 border border-white/5">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-aqua-glow" /> : <ChevronDown className="w-4 h-4 text-[#9ca3af]" />}
                  </div>
                </button>

                {/* Expanded Answer with nice animations */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 px-6 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Safety signoff indicator */}
        <div className="mt-12 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center gap-3 justify-center text-xs tracking-wider font-mono text-cyan-400">
          <ShieldCheck className="w-4 h-4 text-glow-aqua" />
          <span>VESSEL INSPECTIONS COMPLY WITH GLOBAL DEEP-SAFETY PROTOCOLS</span>
        </div>

      </div>
    </section>
  );
}
