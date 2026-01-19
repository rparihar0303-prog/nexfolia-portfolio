import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Briefcase, FileText } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Personal Websites",
    description:
      "Clean, minimal personal sites that showcase who you are. Perfect for professionals looking to establish their online presence.",
  },
  {
    icon: Briefcase,
    title: "Portfolio Websites",
    description:
      "Modern portfolio platforms for students, creators, and YouTubers. Designed to highlight your best work beautifully.",
  },
  {
    icon: FileText,
    title: "Portfolio Decks",
    description:
      "Professional PDF and PPT portfolio decks that impress. Ideal for job applications, client pitches, and presentations.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-spacing bg-secondary/50" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.p 
            className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 font-medium"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.25, delay: 0.001 }}
          >
            Services
          </motion.p>
          <motion.h2 
            className="heading-section"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.25, delay: 0.001 }}
          >
            What we create
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.15, delay: index * 0.02 }}
            
            whileHover={{ 
              y: -6,
              scale: 1.04,
              boxShadow: "0 12px 28px rgba(255,255,255,0.15)",
              borderColor: "rgba(255,255,255,0.25)",
              transition: {          // ✅ hover animation speed here
                type: "spring",
                stiffness: 520,
                damping: 18,
              }
            }}
            
            className="bg-background border border-border rounded-xl p-8 transition-all duration-100 cursor-pointer group"
          >

              <motion.div
                whileHover={{ scale: 1.12, rotate: 4 }}
                transition={{ type: "spring", stiffness: 900, damping: 14 }}
                className="inline-block"
              >
                <service.icon className="w-10 h-10 text-foreground mb-6" strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight group-hover:text-foreground/90 transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;