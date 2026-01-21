import { motion } from "framer-motion";
import nexfoliaLogo from "../assets/my-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-16 md:py-20">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.img
              src={nexfoliaLogo}
              alt="Nexfolia Studio"
              className="h-12 md:h-14 w-auto mb-4 cursor-pointer will-change-transform"

              whileHover={{
                scale: 1.02,
                rotate: -1,
                boxShadow: "0px 0px 20px rgba(255,255,255,0.13)"
              }}

              transition={{
                type: "spring",
                stiffness: 1000,
                damping: 20
              }}
            />

            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Student-led digital studio creating clean, modern websites and portfolios.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col items-start md:items-end gap-3 text-sm"
          >
            <p className="text-muted-foreground font-medium">Founded 2026</p>
            <motion.a
              href="mailto:nexustanishq@gmail.com"
              className="text-foreground hover:text-muted-foreground transition-colors duration-300 font-medium"
              whileHover={{ x: -5 }}
              transition={{ duration: 0.2 }}
            >
              nexustanishq@gmail.com
            </motion.a>
          </motion.div>


        </div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 pt-8 border-t border-border"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
        >
          <p className="font-medium">© 2026 Nexfolia Studio. All rights reserved.</p>
          <p className="text-foreground/60">Built by students. Designed for growth.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;