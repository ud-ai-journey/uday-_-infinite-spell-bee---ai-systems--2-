import { motion } from "motion/react";
import { Mail, Linkedin, FileText, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-64 px-6 md:px-24 text-center bg-gradient-to-t from-accent/5 to-transparent">
      <div className="max-w-3xl mx-auto space-y-24">
        <div className="space-y-12">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-2xl md:text-4xl font-serif italic text-ink/80"
          >
            AI is powerful.
          </motion.p>
          
          <p className="opacity-20 text-2xl">...</p>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="text-xl md:text-3xl font-serif italic text-accent/60"
          >
            But... It shouldn't replace people.
          </motion.p>

          <p className="opacity-20 text-2xl">...</p>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 2 }}
            className="text-xl md:text-3xl font-serif italic text-ink/80"
          >
            It should replace friction.
          </motion.p>

          <p className="opacity-20 text-2xl">...</p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 3 }}
            className="space-y-8"
          >
            <p className="text-xl md:text-3xl font-serif italic text-ink/80">
              And give humanity...
            </p>
            <p className="opacity-20 text-2xl">...</p>
            <p className="text-xl md:text-3xl font-serif italic text-accent-soft">
              more space to be human.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 5 }}
          className="pt-24 space-y-12 border-t border-white/5"
        >
          <div className="space-y-4 text-ink/40 italic font-serif text-xl">
            <p>Because somewhere...</p>
            <p>someone is still waiting</p>
            <p>to be seen</p>
            <p>to be heard</p>
            <p className="text-accent/60">to be understood.</p>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif text-accent pt-12">Let's build something that understands.</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 7 }}
          className="flex flex-wrap justify-center gap-8 pt-12"
        >
          <a href="mailto:ud.ai.journey@gmail.com" className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] hover:text-accent transition-colors group">
            <Mail size={18} className="opacity-50 group-hover:opacity-100" />
            Contact
          </a>
          <a href="https://www.linkedin.com/in/uday-kumar-boya-ai-innovator" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] hover:text-accent transition-colors group">
            <Linkedin size={18} className="opacity-50 group-hover:opacity-100" />
            LinkedIn
          </a>
          <a href="https://uday-cv.tiiny.site/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] hover:text-accent transition-colors group">
            <FileText size={18} className="opacity-50 group-hover:opacity-100" />
            Resume
          </a>
          <a href="https://github.com/ud-ai-journey/ud-ai-journey" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] hover:text-accent transition-colors group">
            <Github size={18} className="opacity-50 group-hover:opacity-100" />
            Github
          </a>
        </motion.div>

        <div className="pt-32 cinematic-text opacity-20">
          Designed with Empathy / 2026 / Uday
        </div>
      </div>
    </footer>
  );
}
