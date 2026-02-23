import { motion } from "framer-motion";

const HeroSection = () => {
  const words = ["Show", "your", "work"];

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
className="min-h-screen w-full flex items-center justify-center pt-24 md:pt-20 relative overflow-hidden px-4 sm:px-6"    >
      {/* Glass Blue Floating Bubbles */}
      <motion.div className="absolute inset-0 overflow-hidden">

        {/* Bubble 1 */}
        <motion.div
          className="absolute top-1/4 left-[18%] w-[260px] h-[260px] rounded-full
               bg-blue-500/10 backdrop-blur-xl
               border border-blue-400/20
               shadow-[0_0_80px_rgba(59,130,246,0.25)]"
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Bubble 2 */}
        <motion.div
          className="absolute bottom-1/4 right-[15%] w-[320px] h-[320px] rounded-full
               bg-gradient-to-br from-blue-400/15 to-cyan-300/10
               backdrop-blur-xl
               border border-blue-300/20
               shadow-[0_0_100px_rgba(56,189,248,0.25)]"
          animate={{
            y: [0, 50, 0],
            x: [0, -25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-[18%] left-[10%] w-[90px] h-[90px] rounded-full
             bg-gradient-to-br from-blue-400/20 to-cyan-300/10
             backdrop-blur-md
             border border-blue-300/30
             shadow-[0_0_40px_rgba(59,130,246,0.35)]"
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-[15%] right-[12%] w-[70px] h-[70px] rounded-full
             bg-gradient-to-tr from-blue-500/15 to-indigo-400/10
             backdrop-blur-md
             border border-blue-400/20
             shadow-[0_0_35px_rgba(99,102,241,0.35)]"
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

      </motion.div>

      {/* ✅ CENTERED BOX WRAPPER FIX */}
      <div className="w-full px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-center mb-8">
              <span className="block">Show your work</span>
              <span className="block text-foreground/70 mt-2">
                professionally
              </span>
            </h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Nexfolia builds refined brands and high-performance websites designed to help startups scale.
              <span className="block mt-4 text-foreground font-semibold">
                Build Digital Foundations
                That Drive Growth.
              </span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold tracking-wide bg-foreground text-background rounded-full transition-all duration-300 w-full sm:w-auto"
              >
                Request a Proposal
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>

              <motion.a
                href="#services"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold tracking-wide border-2 border-border text-foreground rounded-full transition-all duration-300 w-full sm:w-auto"
              >
                View Services
              </motion.a>
            </motion.div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
            <div className="w-px h-10 bg-gradient-to-b from-foreground/50 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;