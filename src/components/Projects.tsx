import { motion } from "motion/react";
import { ExternalLink, Play, Cpu, Heart, Brain, Sparkles, Zap, Search, BookOpen, Code } from "lucide-react";

const projects = [
  {
    id: "empathy-engine",
    title: "Empathy Engine",
    hook: "I built something... not to answer questions.",
    problem: "But to sit with someone when they don't have answers. My sister didn't need a calculator; she needed to feel heard.",
    solution: "A multi-mode AI system (Empathy, Stories, Game, Learn, Entertainment) with prompt-engineered emotional intelligence (soul.md). It adapts in real-time to voice and text inputs.",
    tech: "Gemini 2.5 Flash Native Audio / soul.md architecture",
    icon: Heart,
    color: "from-violet-500/20 to-transparent",
    video: "https://www.youtube.com/embed/hmRH4Z-pr-I",
    link: "https://youtube.com/shorts/hmRH4Z-pr-I?si=t7ZFeMFccwag51aK",
    isCenterpiece: true
  },
  {
    id: "guru-sahayam",
    title: "Guru Sahayam",
    hook: "From a son’s love for his father to a gift for all teachers.",
    problem: "For 25 years, my father Madhu Sudan taught Telugu and Social Studies. I watched him come home exhausted—not from teaching, but from the endless paperwork and the struggle to provide personalized feedback in a multicultural classroom.",
    solution: "A suite of 9 AI tools (Lesson Plans, Quizzes, Feedback, Stories) supporting 13 languages. It gives teachers back their time, their joy, and their power to truly impact lives.",
    tech: "Google Gemini 2.5-flash / Voice Integration / Visual Learning / Safety Filters",
    icon: Sparkles,
    color: "from-amber-500/20 to-transparent",
    video: "https://www.youtube.com/embed/w307SvyRRHc",
    link: "https://guru-sahayam-ai-powe-1whl.bolt.host/"
  },
  {
    id: "clarity-ai",
    title: "Clarity AI",
    hook: "Clarity shouldn't require a degree.",
    problem: "We don’t struggle because we’re not intelligent. We struggle because the world is written in complexity—medical reports, legal notices, and jargon-filled bank emails.",
    solution: "Turns complex documents into simple explanations, clear action steps, and risk insights. It replaces confusion, not people.",
    tech: "Vibecoded / Lovable / OpenAI / Structured Reasoning / TTS",
    icon: Search,
    color: "from-blue-500/20 to-transparent",
    video: "https://www.youtube.com/embed/bm-Kc5Fd-BE",
    link: "https://clarity-ai-30.lovable.app/"
  },
  {
    id: "boundary-brains",
    title: "Boundary Brains",
    hook: "I didn't just build a quiz. I built a stadium.",
    problem: "Engaging 500 colleagues during the ADP internal cricket championship wasn't about questions—it was about concurrency. We needed a system that could handle 400-500 live users simultaneously without breaking a sweat.",
    solution: "A high-performance quiz engine with 25 timely unlocked rounds and a real-time math-based leaderboard. Beyond the code, I launched an AI-powered marketing campaign—with AI-generated music, lyrics, and visuals—that drove 5k+ impressions in a single day.",
    tech: "Lovable AI / Real-time Concurrency / AI Marketing (Suno, EDI)",
    icon: Brain,
    color: "from-emerald-500/20 to-transparent",
    video: "https://www.youtube.com/embed/2jWSNigdkeI",
    link: "https://boundarybrains.lovable.app",
    adLink: "https://www.youtube.com/shorts/PQi6t8og2w0"
  },
  {
    id: "smart-blind-stick",
    title: "Smart Blind Stick",
    hook: "Independence shouldn't be a luxury.",
    problem: "Traditional blind sticks fail to recognize obstacles, leading to accidents and a cycle of dependence that often results in isolation and depression for the visually impaired.",
    solution: "A sophisticated electronic aid using ultrasonic sensors for real-time obstacle detection with haptic and auditory feedback. Presented at the ICETE Conference, this project integrates GSM/GPS modules to ensure safety by sending live location alerts to guardians in case of emergencies.",
    tech: "Arduino UNO / Ultrasonic Sensors / GSM & GPS Modules",
    icon: Zap,
    color: "from-cyan-500/20 to-transparent",
    image: "https://res.cloudinary.com/dhmasikjw/image/upload/v1774200674/IMG-20230428-WA0017.jpg_zpzped.jpg",
    link: "https://res.cloudinary.com/dhmasikjw/image/upload/v1774200674/IMG-20230428-WA0017.jpg_zpzped.jpg"
  },
  {
    id: "infinite-spell-bee",
    title: "Infinite Spell Bee",
    hook: "I didn't want people to 'learn words'.",
    problem: "I wanted them to get lost in them. Static materials fail to spark long-term curiosity and adaptive learning.",
    solution: "A 'Word → Journey' system that acts as a curiosity engine for language learning. It adapts to the learner's pace and turns spelling into an infinite adventure.",
    tech: "React / Generative AI / Gamification / TTS",
    icon: BookOpen,
    color: "from-pink-500/20 to-transparent",
    video: "https://www.youtube.com/embed/lcytXG-UBFs",
    link: "https://www.youtube.com/watch?v=lcytXG-UBFs"
  },
  {
    id: "adp-payroll-variance-analyzer",
    title: "ADP Payroll Variance Analyzer",
    hook: "Say goodbye to days spent on tedious comparisons.",
    problem: "The manual process of Enterprise 6 variance workflows (Z99, ALPAY, RPDE) used to take days of tedious manual comparison and writing.",
    solution: "An enterprise-grade AI solution that transforms variance analysis into a 1-click operation. It automatically detects variances and generates audit-ready AI commentary matching professional standards.",
    tech: "Anthropic Claude 3.5 Sonnet / AWS Bedrock / React / Enterprise 6 Workflows",
    icon: Zap,
    color: "from-orange-500/20 to-transparent",
    video: "https://www.youtube.com/embed/BtlZOgMt1gg",
    link: "https://www.youtube.com/watch?v=BtlZOgMt1gg"
  }
];

export default function Projects() {
  return (
    <section className="py-32 px-6 md:px-24">
      <div className="max-w-7xl mx-auto space-y-32">
        <div className="space-y-4">
          <span className="cinematic-text text-accent">03 / The Narrative System</span>
          <h2 className="text-4xl md:text-6xl font-serif">
            Systems I Built to <br />
            <span className="italic opacity-60 text-accent-soft">Solve Real Feelings</span>
          </h2>
        </div>

        <div className="space-y-64">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}
            >
              <div className="flex-1 space-y-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-accent/60">
                    <project.icon size={20} />
                    <span className="font-mono text-xs uppercase tracking-widest">{project.id}</span>
                  </div>
                  <h3 className={`text-3xl md:text-5xl font-serif ${project.isCenterpiece ? 'text-accent' : ''}`}>
                    {project.title}
                  </h3>
                  <p className="text-xl italic text-accent/80 font-serif">{project.hook}</p>
                </div>

                <div className="space-y-6 text-ink/70 leading-relaxed">
                  <div>
                    <span className="cinematic-text block mb-2">The Friction</span>
                    <p>{project.problem}</p>
                  </div>
                  <div>
                    <span className="cinematic-text block mb-2">The Manifestation</span>
                    <p>{project.solution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="px-4 py-2 rounded-full border border-white/5 bg-white/5 text-xs font-mono text-ink/50">
                    {project.tech}
                  </div>
                </div>

                <div className="pt-8 flex gap-8">
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-accent transition-colors group"
                    >
                      Explore Journey <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  )}
                  {project.adLink && (
                    <a 
                      href={project.adLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-accent transition-colors group"
                    >
                      Watch Ad <Play size={14} className="group-hover:scale-110 transition-transform" />
                    </a>
                  )}
                  {project.id === "empathy-engine" && (
                    <a 
                      href="#soul-of-engine"
                      className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-accent transition-colors group"
                    >
                      Architecture <Code size={14} className="group-hover:rotate-12 transition-transform" />
                    </a>
                  )}
                </div>
              </div>

              <div className="flex-1 w-full aspect-video relative group overflow-hidden rounded-2xl border border-white/10">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} z-10 opacity-50`} />
                {project.video ? (
                  project.video.includes('youtube.com') || project.video.includes('youtu.be') ? (
                    <iframe
                      src={`${project.video}?autoplay=1&mute=1&loop=1&playlist=${project.video.split('/').pop()}`}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100 pointer-events-none"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  ) : (
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                    >
                      <source src={project.video} type="video/mp4" />
                    </video>
                  )
                ) : project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  />
                ) : null}
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <Play size={24} fill="currentColor" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
