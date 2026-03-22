import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ExternalLink, FileText } from "lucide-react";

export default function Origin() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col justify-center py-32 px-6 md:px-24 max-w-6xl mx-auto relative">
      <motion.div style={{ opacity }} className="space-y-32">
        <div className="space-y-16">
          <span className="cinematic-text text-accent">01 / The Beginning</span>
          <h2 className="text-4xl md:text-6xl leading-tight flex flex-col gap-8">
            <span>It didn't start with AI.</span>
            <span className="opacity-20">...</span>
            <span className="italic opacity-60">It started with her.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-12 text-lg md:text-xl font-light leading-relaxed text-ink/80">
            <p>
              My sister's partial blindness was the first problem I ever tried to solve. 
              During a BSNL internship, I learned about sensors, not for a grade, but for her independence.
            </p>
            
            <div className="space-y-6 p-8 rounded-2xl border border-white/5 bg-white/[0.01]">
              <h4 className="text-accent font-serif italic text-3xl">Sophisticated Smart Blind Stick</h4>
              <ul className="space-y-3 text-sm font-mono opacity-60">
                <li className="flex gap-3">
                  <span className="text-accent">→</span>
                  <span>Ultrasonic Sensors for multi-level obstacle detection</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">→</span>
                  <span>Integrated GSM & GPS for emergency tracking</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">→</span>
                  <span>75 sticks distributed to the community</span>
                </li>
              </ul>
              
              <div className="pt-4">
                <a 
                  href="https://www.atlantis-press.com/proceedings/icete-23/125994163" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent hover:text-white transition-colors group"
                >
                  <FileText size={16} />
                  Read the ICETE Research Paper
                  <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>

            <p className="italic text-accent/80 text-2xl font-serif">
              "It wasn't a device. It was independence."
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group">
                <img 
                  src="https://res.cloudinary.com/dhmasikjw/image/upload/v1774200674/WhatsApp_Image_2026-03-22_at_08.42.50_7_a6dvqz.jpg" 
                  alt="Uday with the Smart Blind Stick" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 group">
                <img 
                  src="https://res.cloudinary.com/dhmasikjw/image/upload/v1774200674/WhatsApp_Image_2026-03-22_at_08.42.50_6_u6vpjo.jpg" 
                  alt="Close up of the device" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="pt-12">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group">
                <img 
                  src="https://res.cloudinary.com/dhmasikjw/image/upload/v1774200674/IMG-20230428-WA0017.jpg_zpzped.jpg" 
                  alt="Uday at ICETE-23 Conference" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 glass rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-[10px] uppercase tracking-widest font-mono">ICETE-23 Conference / Hyderabad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
