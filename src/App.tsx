import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Landing from "./components/Landing";
import Origin from "./components/Origin";
import Break from "./components/Break";
import Projects from "./components/Projects";
import SoulOfEngine from "./components/SoulOfEngine";
import HowIThink from "./components/HowIThink";
import Timeline from "./components/Timeline";
import Recognition from "./components/Recognition";
import Footer from "./components/Footer";

export default function App() {
  const [isEntered, setIsEntered] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleEnter = () => {
    setIsEntered(true);
    // Delay showing content to allow landing exit animation to finish
    setTimeout(() => setShowContent(true), 1500);
  };

  return (
    <div className="relative min-h-screen bg-bg overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!isEntered && (
          <Landing key="landing" onEnter={handleEnter} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showContent && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Background Ambient Glows */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-soft/5 blur-[120px] rounded-full" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full" />
            </div>

            <Origin />
            <Break />
            <Projects />
            <SoulOfEngine />
            
            {/* Optional: Try Something Section */}
            <section className="py-32 px-6 md:px-24 text-center">
              <div className="max-w-4xl mx-auto p-12 md:p-24 rounded-3xl border border-white/5 bg-white/[0.01] space-y-8">
                <span className="cinematic-text text-accent">Try Something</span>
                <h2 className="text-3xl md:text-4xl font-serif italic">"She doesn't talk to AI. She feels heard."</h2>
                <a 
                  href="https://youtube.com/shorts/hmRH4Z-pr-I?si=t7ZFeMFccwag51aK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-video w-full max-w-2xl mx-auto rounded-xl bg-black/40 border border-white/10 flex items-center justify-center group cursor-pointer hover:border-accent/30 transition-all overflow-hidden relative"
                >
                  <img 
                    src="https://img.youtube.com/vi/hmRH4Z-pr-I/maxresdefault.jpg" 
                    alt="Empathy Engine Demo" 
                    className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700 grayscale group-hover:grayscale-0"
                  />
                  <div className="text-center space-y-4 relative z-10">
                    <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform bg-black/40 backdrop-blur-sm">
                      <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                    </div>
                    <p className="cinematic-text">Watch the Empathy Engine in Action</p>
                    <p className="text-[10px] uppercase tracking-widest opacity-40">Featuring my sister / soul.md demo</p>
                  </div>
                </a>
              </div>
            </section>

            <HowIThink />
            <Timeline />
            <Recognition />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>

      {/* Progress Indicator (Subtle) */}
      {showContent && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4"
        >
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-white/20" />
          ))}
        </motion.div>
      )}
    </div>
  );
}
