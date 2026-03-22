import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

const logs = [
  {
    year: "2026",
    title: "GPT Connect Speaker",
    desc: "Human First: How 100 Days of Consistency Let AI Amplify, Not Replace, Me. Exploring the intersection of human empathy and AI systems.",
    category: "Speaking",
    link: "https://www.youtube.com/watch?v=gpOfFfJ6lFg"
  },
  {
    year: "2025",
    title: "Guru Sahayam",
    desc: "A heartfelt mission to empower teachers. Built a suite of 9 AI tools for diverse classrooms, saving up to 90% of administrative time.",
    category: "Impact",
    link: "https://guru-sahayam-ai-powe-1whl.bolt.host/"
  },
  {
    year: "2025",
    title: "Clarity AI",
    desc: "Turning complexity into understanding. A system that distills medical, legal, and financial jargon into actionable steps.",
    category: "Creation",
    link: "https://clarity-ai-30.lovable.app/"
  },
  {
    year: "2024",
    title: "GPT Connect Speaker",
    desc: "Empathy Engine: Building AI that feels heard. A talk on the soul of prompts and emotional intelligence in AI.",
    category: "Speaking",
    link: "https://www.youtube.com/watch?v=jchsMdaaPu0"
  },
  {
    year: "2024",
    title: "ADP Payroll Variance Analyzer",
    desc: "Won the internal hackathon by revolutionizing payroll variance analysis. Built a 1-click AI solution using Claude 3.5 Sonnet on AWS Bedrock.",
    category: "Impact",
    link: "https://www.youtube.com/watch?v=BtlZOgMt1gg"
  },
  {
    year: "2024",
    title: "Infinite Spell Bee",
    desc: "Gamifying the joy of language for children. Focus on adaptive learning loops and curiosity-driven exploration.",
    category: "Creation",
    link: "https://www.youtube.com/watch?v=lcytXG-UBFs"
  },
  {
    year: "2023 - Present",
    title: "ADP Core Engineering",
    desc: "Contributed to Unemployment Claims platform used by 2000+ clients. Improved onboarding workflows and automation efficiency using Python, AWS Lambda, Kafka, and MongoDB.",
    category: "Scale"
  },
  {
    year: "2023",
    title: "Sophisticated Smart Blind Stick",
    desc: "Published ICETE research paper on multi-level obstacle detection and emergency tracking. Distributed 75 sticks to the visually impaired community.",
    category: "Research & Impact"
  }
];

export default function Timeline() {
  return (
    <section className="py-32 px-6 md:px-24">
      <div className="max-w-4xl mx-auto space-y-24">
        <div className="space-y-4">
          <span className="cinematic-text text-accent">05 / Journey Logs</span>
          <h2 className="text-4xl md:text-5xl font-serif italic opacity-80">The Timeline of Impact</h2>
        </div>

        <div className="space-y-12">
          {logs.map((log, index) => (
            <motion.div 
              key={log.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col md:flex-row gap-4 md:gap-12 items-start py-8 border-b border-white/5 hover:border-accent/20 transition-colors"
            >
              <div className="font-mono text-accent/40 text-sm pt-1">{log.year}</div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-3">
                  <h4 className="text-xl font-medium group-hover:text-accent transition-colors">{log.title}</h4>
                  <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border border-white/10 text-ink/30">
                    {log.category}
                  </span>
                  {log.link && (
                    <a 
                      href={log.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent/40 hover:text-accent transition-colors"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
                <p className="text-ink/50 leading-relaxed max-w-2xl">{log.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
