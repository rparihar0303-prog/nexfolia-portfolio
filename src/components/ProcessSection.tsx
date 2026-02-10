import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Share requirements",
    description:
      "Tell us about your vision, goals, and preferences. We'll understand your needs and scope the project together.",
  },
  {
    number: "02",
    title: "Design & build",
    description:
      "Our team crafts your designs and website with attention to every detail, focusing on clarity and aesthetics.",
  },
  {
    number: "03",
    title: "Review & refine",
    description:
      "We present the work for your feedback. Iterate and refine until everything feels just right.",
  },
  {
    number: "04",
    title: "Final delivery",
    description:
      "Receive your polished, ready-to-use designs or website. Launch with confidence.",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4 }}
      id="process"
      className="section-spacing"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.4 }}
          >
            <motion.p
              className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 font-medium"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              Process
            </motion.p>

            <motion.h2
              className="heading-section mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              How we work
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              A simple, collaborative process designed to deliver results efficiently.
              From first conversation to final delivery, we keep things clear and
              straightforward.
            </motion.p>
          </motion.div>

          {/* Steps */}
          <div className="space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative pl-16 pb-12 last:pb-0 group"
              >
                {/* Vertical line */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="absolute left-[15px] top-12 bottom-0 w-px bg-border"
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    style={{ originY: 0 }}
                  />
                )}

                {/* Number */}
                <motion.span
                  className="absolute left-0 top-0 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.15 }}
                >
                  {step.number}
                </motion.span>

                <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight">
                  {step.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default ProcessSection;
