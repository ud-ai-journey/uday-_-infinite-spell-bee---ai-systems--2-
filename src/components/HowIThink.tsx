import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function HowIThink() {
  const steps = [
    { label: "Person", desc: "I start with a person. Not a problem." },
    { label: "Empathy", desc: "I sit with the problem until it becomes personal." },
    { label: "Prompt Design", desc: "Architecting intelligence in .md files and Excalidraw." },
    { label: "Orchestration", desc: "Building end-to-end apps with Bolt, Lovable, Replit, and Cursor." },
    { label: "Creation", desc: "Only then... I build." }
  ];

  return (
    <section className="py-32 px-6 md:px-24 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto space-y-24">
        <div className="space-y-4 text-center">
          <span className="cinematic-text text-accent">04 / The Orchestration</span>
          <h2 className="text-4xl md:text-6xl font-serif italic">
            "I don't just write code.<br />
            I design intelligence."
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2" />
          
          <div className="grid md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="space-y-4 bg-bg p-6 border border-white/5 rounded-xl md:border-none md:bg-transparent md:p-0"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-mono text-xs mb-4">
                  0{index + 1}
                </div>
                <h4 className="text-xl font-serif text-accent/80">{step.label}</h4>
                <p className="text-sm text-ink/50 leading-relaxed">{step.desc}</p>
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center py-4">
                    <ArrowRight className="rotate-90 text-white/10" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 pt-12">
          <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01] space-y-4">
            <h5 className="cinematic-text text-accent-soft">The Toolset</h5>
            <div className="flex flex-wrap gap-2">
              {["Bolt", "Lovable", "Replit", "Cursor", "Claude", "Supabase"].map(tool => (
                <span key={tool} className="px-3 py-1 rounded-full border border-white/10 text-[10px] uppercase tracking-widest text-ink/40">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01] space-y-4">
            <h5 className="cinematic-text text-accent-soft">The Philosophy</h5>
            <p className="text-ink/60 leading-relaxed italic">
              "I didn't plan this journey. I just kept building."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
