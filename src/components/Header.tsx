import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import nexfoliaLogo from "@/assets/nexfolia-logo.png";
import myLogo from "../assets/my-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50"
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            <motion.a 
              href="#" 
              className="flex items-center gap-3 relative z-50 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img 
                src={myLogo} 
                alt="Nexfolia Studio" 
                className="h-10 md:h-12 w-auto"
                
                whileHover={{
                  scale: 1.02,
                  // rotate: 1,
                  boxShadow: "0px 0px 18px rgba(255,255,255,0.20)"
                }}

                transition={{
                  type: "spring",
                  stiffness: 1000,
                  damping: 20
                }}
              />
            </motion.a>

            
            <nav className="hidden md:flex items-center gap-10">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                  className="relative text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </nav>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold tracking-wide bg-foreground text-background rounded-full hover:bg-foreground/90 transition-all duration-300"
            >
              Get Started
            </motion.a>

            {/* Mobile menu button */}
            <motion.button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground relative z-50"
              aria-label="Menu"
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span 
                  className="w-full h-0.5 bg-foreground origin-left"
                  animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? -1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span 
                  className="w-full h-0.5 bg-foreground"
                  animate={{ opacity: isMenuOpen ? 0 : 1, x: isMenuOpen ? 20 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span 
                  className="w-full h-0.5 bg-foreground origin-left"
                  animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.nav
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-background border-l border-border z-40 md:hidden flex flex-col justify-center px-8"
            >
              <div className="space-y-8">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4, ease: "easeOut" }}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-3xl font-semibold text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1, duration: 0.4, ease: "easeOut" }}
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-foreground text-background rounded-full mt-4"
                >
                  Get Started
                </motion.a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;