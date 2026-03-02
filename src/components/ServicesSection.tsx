import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Globe,
  Layout,
  FileText,
  Palette,
  Linkedin,
  Sparkles,
} from "lucide-react";

/* =============================
   SUB SERVICES (Your Current Cards)
============================= */

const serviceGroups = [
  {
    title: "Brand & Creative",
    description:
      "Strategic brand identity and creative assets that define your presence and communicate your value clearly.",
    services: [
      {
        icon: Palette,
        title: "Branding & Identity",
      },
      {
        icon: Layout,
        title: "Social Media Creatives",
      },
      {
        icon: FileText,
        title: "Portfolio Decks & Presentations",
      },
    ],
  },
  {
    title: "Web & Digital",
    description:
      "High-performance digital experiences built with clarity, structure, and conversion-focused strategy.",
    services: [
      {
        icon: Globe,
        title: "Websites & Portfolios",
      },
      {
        icon: Sparkles,
        title: "Custom & On-Demand Work",
      },
    ],
  },
  {
    title: "Personal Growth",
    description:
      "Personal branding and positioning systems to help founders and professionals build authority online.",
    services: [
      {
        icon: Linkedin,
        title: "LinkedIn & Personal Branding",
      },
    ],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Services
          </p>
          <h2 className="heading-section mb-4">What we do</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Structured service systems designed to help brands scale with clarity,
            performance, and strategic execution.
          </p>
        </div>

        {/* OUTER MAIN CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {serviceGroups.map((group, index) => (
            <motion.div
              key={group.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            >
              {/* Outer Card Title */}
              <h3 className="text-2xl font-semibold text-white mb-4">
                {group.title}
              </h3>

              <p className="text-white/60 mb-8 text-sm leading-relaxed">
                {group.description}
              </p>

              <button
                onClick={() => toggleCard(index)}
                className="text-sm font-medium text-white border border-white/20 px-5 py-2 rounded-full hover:bg-white/10 transition"
              >
                {activeIndex === index ? "Close" : "Explore Services"}
              </button>

              {/* INNER CARDS */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden mt-10"
                  >
                    <div className="space-y-6">
                      {group.services.map((service, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-4 border border-white/10 rounded-xl p-4 bg-white/[0.02]"
                        >
                          <service.icon
                            className="w-6 h-6 text-white/70"
                            strokeWidth={1.5}
                          />
                          <span className="text-white/80 text-sm font-medium">
                            {service.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          ))}

        </div>

      </div>
    </motion.section>
  );
};

export default ServicesSection;