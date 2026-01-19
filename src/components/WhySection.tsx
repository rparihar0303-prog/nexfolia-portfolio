import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Wallet, Palette, Zap, Rocket } from "lucide-react";

const reasons = [
  {
    icon: Wallet,
    title: "Student-friendly pricing",
    description: "Quality design shouldn't break the bank. We offer fair rates tailored for students and early-stage ventures.",
  },
  {
    icon: Palette,
    title: "Clean & modern design",
    description: "No templates, no clutter. Every project is crafted with attention to detail and contemporary aesthetics.",
  },
  {
    icon: Zap,
    title: "Fast delivery",
    description: "We understand deadlines. Our streamlined process ensures quick turnaround without compromising quality.",
  },
  {
    icon: Rocket,
    title: "Built for growth",
    description: "Designed by students who understand your journey. We create foundations that scale with your ambitions.",
  },
];

const WhySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-spacing border-t border-border" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.p 
            className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 font-medium"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Why Nexfolia
          </motion.p>
          <motion.h2 
            className="heading-section"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            What sets us apart
          </motion.h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center group cursor-default"
            >
              <motion.div 
                className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-secondary/80 flex items-center justify-center border border-border group-hover:border-foreground/30 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <reason.icon className="w-7 h-7 text-foreground" strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-lg font-bold text-foreground mb-3 tracking-tight">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;