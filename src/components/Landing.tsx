import { motion } from "motion/react";
import { useState, useEffect } from "react";

interface LandingProps {
  onEnter: () => void;
  key?: string;
}

export default function Landing({ onEnter }: LandingProps) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1500),
      setTimeout(() => setStep(2), 3500),
      setTimeout(() => setStep(3), 5500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg text-center px-6"
    >
      <div className="space-y-8 max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={step >= 1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5 }}
          className="text-2xl md:text-3xl font-serif italic text-ink/80"
        >
          "Am I Intelligent?"
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={step >= 2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5 }}
          className="text-xl md:text-2xl font-serif italic text-ink/60"
        >
          Or... am I just trying to understand?
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={step >= 3 ? { opacity: 1 } : {}}
          transition={{ duration: 2 }}
          className="pt-12"
        >
          <button
            onClick={onEnter}
            className="group relative px-8 py-3 overflow-hidden rounded-full border border-white/10 hover:border-accent/50 transition-colors duration-500"
          >
            <span className="relative z-10 cinematic-text group-hover:text-accent transition-colors duration-500">
              Enter the Journey
            </span>
            <motion.div 
              className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
            />
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="cinematic-text"
        >
          Uday / 2026
        </motion.div>
      </div>
    </motion.div>
  );
}
