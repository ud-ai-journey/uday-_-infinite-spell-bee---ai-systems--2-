import { motion } from "motion/react";
import { Award, ExternalLink, MessageSquare, Star } from "lucide-react";

export default function Recognition() {
  return (
    <section className="py-32 px-6 md:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="cinematic-text text-accent">06 / Thought Leadership</span>
              <h2 className="text-4xl md:text-5xl font-serif italic">Industry Recognition</h2>
            </div>
            
            <div className="space-y-6 text-ink/60 leading-relaxed max-w-lg">
              <p>
                Beyond building, I contribute to the global AI discourse by evaluating the tools that shape our industry. 
                My focus is on the intersection of productivity, system limitations, and human-centric workflows.
              </p>
              
              <div className="flex items-center gap-4 p-6 rounded-2xl border border-white/5 bg-white/[0.01] group hover:border-accent/20 transition-colors">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-ink">Top Reviewer at PeerSpot</h4>
                  <p className="text-xs opacity-50 uppercase tracking-widest mt-1">Enterprise AI & LLM Specialist</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a 
                href="https://www.peerspot.com/users/uday-boya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:text-accent transition-colors group"
              >
                View PeerSpot Profile <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[
              {
                title: "LLMs & Generative AI",
                desc: "Evaluating reasoning capabilities and safety guardrails in production environments.",
                icon: Star
              },
              {
                title: "Coding Assistants",
                desc: "Analyzing developer velocity vs. code quality in AI-augmented workflows.",
                icon: MessageSquare
              },
              {
                title: "Enterprise AI Platforms",
                desc: "Assessing scalability and integration friction in large-scale deployments.",
                icon: Award
              }
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-white/5 bg-white/[0.01] space-y-3 hover:bg-white/[0.03] transition-colors"
              >
                <item.icon size={18} className="text-accent/40" />
                <h4 className="font-medium">{item.title}</h4>
                <p className="text-sm text-ink/40 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
