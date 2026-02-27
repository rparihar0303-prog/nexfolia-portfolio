import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Linkedin, Instagram, Plus, Minus } from "lucide-react";
import SocialIcon from "@/components/SocialIcons";

const faqs = [
  {
    q: "Who do you work with?",
    a: "Startups, founders, and growing brands building their digital presence.",
  },
  {
    q: "How long does a project take?",
    a: "Typically 2–4 weeks, depending on scope and complexity.",
  },
  {
    q: "How is pricing structured?",
    a: "Pricing is customized based on project requirements and goals.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes, we provide continued marketing and digital support as needed.",
  },
];

const FAQItem = ({
  faq,
  index,
  isInView,
}: {
  faq: { q: string; a: string };
  index: number;
  isInView: boolean;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
      className="border-b border-border"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-base font-semibold text-foreground group-hover:text-white transition-colors duration-200 pr-4">
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex-shrink-0 text-muted-foreground group-hover:text-foreground transition-colors duration-200"
        >
          <Plus size={16} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-muted-foreground leading-relaxed pb-5 text-sm">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "2026",     label: "Founded"        },
    { value: "Remote",   label: "Global Delivery" },
    { value: "Strategy", label: "Growth Focused"  },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
      id="about"
      className="section-spacing"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* ── LEFT: existing content ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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
              A strategic digital studio focused on clarity, performance, and growth.
            </motion.h2>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nexfolia, design meets strategy. We don't just create websites and visuals — we build
                digital foundations that align with your business goals. Every project combines clarity,
                structure, and human-centered design that communicates confidence and drives results.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We help startups and brands build a strong online presence through thoughtful design,
                clear messaging, and modern digital tools—making professional branding and web presence
                accessible, affordable, and effective.
              </p>

              {/* Social Links */}
              <div className="mt-10 flex items-center gap-4">
                <span className="text-xl font-bold text-foreground tracking-wide">Follow us</span>
                <SocialIcon
                  icon={<Linkedin size={18} />}
                  label="LinkedIn"
                  href="https://www.linkedin.com/company/nexfolia-studio/"
                />
                <SocialIcon
                  icon={<Instagram size={18} />}
                  label="Instagram"
                  href="https://www.instagram.com/nexfolia.in?igsh=MTF6MXhna200MXl5Yw=="
                />
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-12 mt-6 pt-0"
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
                  whileHover={{ scale: 1.08, y: -4 }}
                  className="cursor-default"
                >
                  <p className="text-3xl font-bold text-foreground tracking-tight">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: FAQ Accordion ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-start pt-1"
          >
            <motion.p
              className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 font-medium"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              FAQs
            </motion.p>

            <motion.h2
              className="heading-section mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              Frequently Asked Questions
            </motion.h2>

            <div className="border-t border-border mt-5">
              {faqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} isInView={isInView} />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;