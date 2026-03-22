import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Break() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.05]);

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col items-center justify-center py-32 px-6 text-center bg-black relative overflow-hidden">
      {/* Subtle fire-like glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-orange-950/20 blur-[150px] rounded-full" />
      </div>

      <motion.div style={{ opacity, scale }} className="max-w-3xl space-y-24 relative z-10">
        <span className="cinematic-text text-red-500/50">02 / The Break</span>
        
        <div className="space-y-12">
          <h2 className="text-4xl md:text-6xl font-serif italic leading-relaxed">
            Then life changed in a day.
          </h2>
          <p className="opacity-20 text-2xl">...</p>
          <h2 className="text-4xl md:text-6xl font-serif italic">
            A fire accident.
          </h2>
          <p className="opacity-20 text-2xl">...</p>
          <h2 className="text-4xl md:text-6xl font-serif italic text-red-500/80">
            My sister.
          </h2>
        </div>

        <div className="space-y-12 text-lg md:text-xl font-light leading-relaxed text-ink/60">
          <div className="space-y-4">
            <p className="text-2xl text-ink/80">45 days.</p>
            <p>Hospitals.</p>
            <p>Silence.</p>
            <p>Pain.</p>
          </div>
          
          <div className="pt-8 space-y-4">
            <p className="text-2xl text-ink/80 italic">She healed.</p>
            <p className="opacity-20">...</p>
            <p className="text-2xl text-red-500/60 italic">But something didn't.</p>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
          className="pt-24 space-y-12"
        >
          <p className="text-2xl md:text-3xl font-serif italic text-ink/80">
            That’s when I stopped asking...<br />
            <span className="text-accent">"How to fix problems?"</span>
          </p>
          <p className="text-2xl md:text-3xl font-serif italic text-ink/80">
            And started asking...<br />
            <span className="text-accent-soft">"How to understand people?"</span>
          </p>
          
          <div className="pt-12">
            <a 
              href="https://www.youtube.com/watch?v=jchsMdaaPu0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-xs uppercase tracking-widest text-red-500/60 hover:text-red-500 transition-colors group"
            >
              <span className="w-10 h-10 rounded-full border border-red-500/20 flex items-center justify-center group-hover:bg-red-500/10 transition-colors">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </span>
              Watch the Full Story (GPT Connect 2024)
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
