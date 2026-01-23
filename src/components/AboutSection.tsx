import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Instagram } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "2026", label: "Founded" },
    { value: "Remote", label: "First" },
    { value: "Student", label: "Led" },
  ];

  return (
    <section id="about" className="section-spacing border-t border-border" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.p
            className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 font-medium"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            About Us
          </motion.p>

          <motion.h2
            className="heading-section mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A student-led digital studio focused on clarity and craft.
          </motion.h2>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nexfolia is a web design studio focused on building clean, modern websites
              and portfolio platforms for students, creators, small businesses, and
              early-stage startups.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to make professional web presence accessible, affordable,
              and fast. We believe great design should be simple—no clutter, no
              complexity, just clarity.
            </p>
            {/* Social Links */}
            <div className="mt-10 flex items-center gap-4">
              <span className="text-lg font-semibold text-muted-foreground tracking-wide">
                Follow us
              </span>

              <a
                href="https://www.linkedin.com/company/nexfolia-studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full 
      bg-white/5 backdrop-blur-md 
      border border-white/10
      hover:bg-white/10 hover:scale-110
      transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://www.instagram.com/nexfoliastudio?igsh=c2x5YnUxeDhqc3k2"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full 
      bg-white/5 backdrop-blur-md 
      border border-white/10
      hover:bg-white/10 hover:scale-110
      transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
            </div>

          </motion.div>

          <motion.div
            className="flex flex-wrap gap-12 mt-12 pt-8 border-t border-border"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="cursor-default"
              >
                <p className="text-3xl font-bold text-foreground tracking-tight">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;