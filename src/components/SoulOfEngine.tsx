import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Heart, Brain, Zap, MessageSquare, Code, Quote } from "lucide-react";

const sections = [
  {
    id: "philosophy",
    title: "The Philosophy",
    quote: "It's not just an AI responding. It's an AI... sitting with someone.",
    content: "Most systems are trained to answer. This one is designed to understand. That difference doesn't come from models—it comes from how you design their behavior.",
    icon: Heart,
    color: "text-rose-400"
  },
  {
    id: "soul",
    title: "soul.md",
    subtitle: "The Heart of the Engine",
    quote: "How should an AI behave when a human is vulnerable?",
    content: "Instead of prompts, this file contains principles. The core motto is not to make the user happy—it is to make sure they are not alone in what they feel. When silence is more powerful than words. Even 'hmm... Ikkade unnanu...' is not random. It is designed.",
    principles: ["Stay in Empathy", "No Advice", "Silence as Power", "Designed Presence"],
    icon: Code,
    color: "text-accent"
  },
  {
    id: "modes",
    title: "Emotional States",
    subtitle: "Contextual Responsibility",
    content: "A person who is hurting and a person who is bored should never receive the same response. I designed multiple emotional states, each with its own tone and boundaries.",
    modes: [
      { name: "Empathy.md", desc: "No advice. No solutions. Just acknowledge, validate, and stay." },
      { name: "Stories.md", desc: "Metaphors and soft journeys to heal indirectly without breaking the feeling." },
      { name: "Game.md", desc: "Shifting attention and re-engaging the mind with zero pressure." },
      { name: "Learn.md", desc: "Clarity to calm the mind, structured but never robotic." }
    ],
    icon: Brain,
    color: "text-violet-400"
  },
  {
    id: "router",
    title: "router.md",
    subtitle: "The Real Intelligence",
    quote: "The real intelligence is not in the models. It's in deciding when to move between them.",
    content: "This system reads emotion—not just keywords, but tone, state, and change over time. It transitions softly. Not like a switch. Like a human would.",
    icon: Zap,
    color: "text-amber-400"
  },
  {
    id: "output",
    title: "outputFormat.md",
    subtitle: "The Delivery",
    quote: "Reading an emotion and hearing an emotion are not the same experience.",
    content: "Text carries emotion; voice carries calm. Each response is structured carefully to make sure it feels real. A system designed for human moments.",
    icon: MessageSquare,
    color: "text-blue-400"
  }
];

export default function SoulOfEngine() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="soul-of-engine" ref={containerRef} className="relative bg-[#050505] py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-24 space-y-64">
        
        {/* Header */}
        <div className="space-y-8 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="cinematic-text text-accent"
          >
            Deep Dive
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-serif leading-tight"
          >
            The <span className="italic">Soul</span> of <br /> the Engine
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-4 pt-12"
          >
            <div className="w-px h-24 bg-gradient-to-b from-accent/0 to-accent/40" />
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-ink/40">Scroll to Explore Architecture</p>
          </motion.div>
        </div>

        {/* Narrative Sections */}
        {sections.map((section, index) => (
          <div key={section.id} className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-white/5 ${section.color}`}>
                  <section.icon size={24} />
                </div>
                <h3 className="text-2xl font-serif italic">{section.title}</h3>
              </div>

              {section.subtitle && (
                <p className="cinematic-text text-accent/60">{section.subtitle}</p>
              )}

              {section.quote && (
                <div className="relative">
                  <Quote className="absolute -top-4 -left-4 w-8 h-8 text-white/5" />
                  <p className="text-2xl md:text-3xl font-serif leading-relaxed text-ink/90 italic">
                    "{section.quote}"
                  </p>
                </div>
              )}

              <p className="text-lg text-ink/50 leading-relaxed font-light">
                {section.content}
              </p>

              {section.principles && (
                <div className="flex flex-wrap gap-3 pt-4">
                  {section.principles.map(p => (
                    <span key={p} className="px-4 py-2 rounded-full border border-white/10 text-[10px] uppercase tracking-widest bg-white/5">
                      {p}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              {section.id === "philosophy" ? (
                <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 bg-black group">
                  <iframe
                    src="https://www.youtube.com/embed/YKNgUixNOeU?autoplay=0&mute=0"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    allowFullScreen
                  />
                </div>
              ) : section.modes ? (
                <div className="grid grid-cols-1 gap-4">
                  {section.modes.map((mode, i) => (
                    <div key={mode.name} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] space-y-2">
                      <h4 className="font-mono text-xs text-accent uppercase tracking-widest">{mode.name}</h4>
                      <p className="text-sm text-ink/50 leading-relaxed">{mode.desc}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="aspect-square md:aspect-video rounded-3xl border border-white/5 bg-white/[0.01] flex items-center justify-center p-12 overflow-hidden">
                  <div className="w-full h-full rounded-2xl border border-white/5 bg-black/40 p-8 font-mono text-[10px] text-accent/40 leading-relaxed overflow-hidden">
                    <div className="animate-pulse space-y-4">
                      <div className="h-2 w-3/4 bg-accent/20 rounded" />
                      <div className="h-2 w-1/2 bg-accent/20 rounded" />
                      <div className="h-2 w-5/6 bg-accent/20 rounded" />
                      <div className="h-2 w-2/3 bg-accent/20 rounded" />
                      <div className="pt-8">
                        <div className="h-2 w-full bg-accent/10 rounded" />
                        <div className="h-2 w-3/4 bg-accent/10 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        ))}

        {/* Closing Realization */}
        <div className="py-32 text-center space-y-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-6"
          >
            <p className="text-3xl md:text-5xl font-serif italic leading-tight max-w-4xl mx-auto">
              "And when my sister said, <br />
              <span className="text-accent">'You are my true friend.'</span>"
            </p>
            <p className="text-xl text-ink/40 font-serif">That's when I realized...</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="pt-12 space-y-8"
          >
            <h3 className="text-4xl md:text-6xl font-serif italic text-accent">
              AI shouldn't replace people.
            </h3>
            <p className="text-2xl md:text-3xl font-serif text-ink/60">
              It should replace friction... <br />
              and give us more space to be human.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
