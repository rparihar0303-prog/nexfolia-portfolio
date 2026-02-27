import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
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

  const servicesMenu = [
    {
      title: "Web & Digital",
      items: [
        "Websites & Portfolios",
        "Portfolio Decks & Presentations",
      ],
    },
    {
      title: "Brand & Creative",
      items: [
        "Branding & Identity",
        "Social Media Creatives",
      ],
    },
    {
      title: "Personal Growth",
      items: [
        "LinkedIn & Personal Branding",
        "Custom & On-Demand Work",
      ],
    },
  ];

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            <span className="uppercase tracking-widest text-lg md:text-xl font-semibold">
              NEXFOLIA
            </span>


            <nav className="hidden md:flex items-center gap-10 relative">
              {navItems.map((item, i) =>
                item.label === "Services" ? (
                  <div key="services" className="relative group">

                    {/* Services Button */}
                    <span className="flex items-center gap-1 text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition cursor-pointer">
                      Services
                      <ChevronDown
                        size={16}
                        className="transition-transform duration-300 group-hover:rotate-180"
                      />
                    </span>

                    {/* Mega Dropdown */}
                    <div
                      className="absolute left-1/2 -translate-x-1/2 top-10 
                      w-[400px] opacity-0 invisible 
                      group-hover:opacity-100 group-hover:visible
                      transition-all duration-300 z-50"
                    >
                      <div
                        className="rounded-2xl bg-background/95 backdrop-blur-xl 
                        border border-border shadow-2xl 
                        p-8 flex flex-col space-y-8"
                      >
                        {servicesMenu.map((section, index) => (
                          <div key={index} className="flex flex-col space-y-3">

                            {/* Section Title */}
                            <h4 className="font-semibold text-foreground text-base">
                              {section.title}
                            </h4>

                            {/* Items */}
                            <div className="flex flex-col space-y-2">
                              {section.items.map((service, i) => (
                                <a
                                  key={i}
                                  href="/#services"
                                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                                >
                                  • {service}
                                </a>
                              ))}
                            </div>

                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                    className="text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition"
                  >
                    {item.label}
                  </motion.a>
                )
              )}
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
              Start Your Project
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