import { motion } from "framer-motion";

const HeroSection = () => {
  const words = ["Show", "your", "work"];
  
  return (
<section className="min-h-screen w-full flex items-center justify-center pt-20 md:pt-0 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
      > 
        <div className="absolute top-1/4 left-1/4 w-[420px] h-[420px] bg-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[360px] h-[360px] bg-foreground/5 rounded-full blur-3xl" />

      </motion.div>

      <div className="w-full max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="heading-display mb-6 overflow-hidden">
            <span className="flex flex-wrap justify-center gap-x-4">
              {words.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.3 + i * 0.1, 
                    duration: 0.6, 
                    ease: "easeOut" 
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <motion.span 
              className="block text-muted-foreground mt-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            >
              professionally
            </motion.span>
          </h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Portfolio decks & personal websites for students, creators, and startups.
            <span className="block mt-2 text-foreground/80 font-medium">Built by students. Designed for growth.</span>
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
              Get Started
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
    </section>
  );
};

export default HeroSection;