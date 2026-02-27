import { Linkedin, Instagram, } from "lucide-react";
import { Mail } from "lucide-react";
import SocialIcon from "@/components/SocialIcons";

const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-border/50 mt-24 overflow-hidden">

      {/* Subtle Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="section-container py-20">

        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-16">

          {/* Brand Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold tracking-wide">
              NEXFOLIA
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Digital studio crafting modern websites, branding, and creative systems built for growth.
            </p>

            <div className="space-y-3 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:nexustanishq@gmail.com"
                  className="hover:text-foreground transition"
                >
                  nexustanishq@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:nexusrohit18@gmail.com"
                  className="hover:text-foreground transition"
                >
                  nexusrohit18@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-6">

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
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground">
              Services
            </h4>

            <div className="space-y-3 text-sm text-muted-foreground">
              <a href="#services" className="block hover:text-foreground transition">
                Websites & Portfolios
              </a>
              <a href="#services" className="block hover:text-foreground transition">
                Portfolio Decks & Presentations
              </a>
              <a href="#services" className="block hover:text-foreground transition">
                Branding & Identity
              </a>
              <a href="#services" className="block hover:text-foreground transition">
                Social Media Creatives
              </a>
              <a href="#services" className="block hover:text-foreground transition">
                LinkedIn & Personal Branding
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground">
              Company
            </h4>

            <div className="space-y-3 text-sm text-muted-foreground">
              <a href="#home" className="block hover:text-foreground transition">
                Home
              </a>
              <a href="#about" className="block hover:text-foreground transition">
                About
              </a>
              <a href="#services" className="block hover:text-foreground transition">
                Services
              </a>
              <a href="#projects" className="block hover:text-foreground transition">
                Projects
              </a>
              <a href="#contact" className="block hover:text-foreground transition">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground">
              Legal
            </h4>

            <div className="space-y-4 text-sm text-muted-foreground">

              <p>Privacy Policy</p>
              <p>Terms & Conditons</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-16 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2026 Nexfolia Studio. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;