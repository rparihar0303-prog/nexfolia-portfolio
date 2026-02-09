import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  Globe,
  Layout,
  FileText,
  Palette,
  Linkedin,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Websites & Portfolios",
    description:
      "Personal, business, and portfolio websites built with clean design and clear structure to showcase your work professionally.",
  },
  {
    icon: FileText,
    title: "Portfolio Decks & Presentations",
    description:
      "High-impact PDF and PPT portfolio decks, posters, banners, and presentation designs for jobs, clients, and pitches.",
  },
  {
    icon: Palette,
    title: "Branding & Identity",
    description:
      "Logo design and brand identity systems that define your visual presence and make your brand instantly recognizable.",
  },
  {
    icon: Layout,
    title: "Social Media Creatives",
    description:
      "Marketing creatives for social platforms including posts, banners, and visuals that align with your brand tone.",
  },
  {
    icon: Linkedin,
    title: "LinkedIn & Personal Branding",
    description:
      "LinkedIn profile optimization and personal branding guidance to help you stand out professionally online.",
  },
  {
    icon: Sparkles,
    title: "Custom & On-Demand Work",
    description:
      "Have a unique idea or requirement? We also work on custom projects tailored to your exact needs, goals, and vision.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      id="services"
      className="section-spacing"
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Services
          </p>
          <h2 className="heading-section mb-4">What we do</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end digital solutions designed to help students, creators,
            and businesses build a strong and professional online presence.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{
                y: -6,
                boxShadow: "0 12px 32px rgba(255,255,255,0.15)",
              }}
              className="h-full rounded-2xl 
              bg-white/5 backdrop-blur-xl 
              border border-white/10 
              p-8 flex flex-col"
            >
              <service.icon
                className="w-10 h-10 text-foreground mb-6"
                strokeWidth={1.5}
              />

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
