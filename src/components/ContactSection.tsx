import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, ArrowRight, Linkedin, Instagram } from "lucide-react";
import emailjs from "@emailjs/browser";
import SocialIcon from "@/components/SocialIcons";


const ContactSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailError, setEmailError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_cksr9es",
        "template_7a71b9o",
        formRef.current,
        "adz00TqErsRHglHMY"
      )
      .then(() => {
        setShowSuccess(true);

        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("❌ The message could not be sent. Please check your email configuration or try again later.");
      });
  };



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
      id="contact"
      className="section-spacing"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
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
              Contact
            </motion.p>
            <motion.h2
              className="heading-section mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Let's build your digital presence
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Ready to showcase your work professionally? Get in touch and let's
              discuss how we can help bring your vision to life.
            </motion.p>

            {/* Email */}
            <motion.div
              whileHover={{ x: 4 }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="mailto:nexfolia.in@gmail.com"
                className="inline-flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                  <Mail className="w-5 h-5" strokeWidth={1.5} />
                </div>

                <span className="font-semibold text-lg">
                  nexfolia.in@gmail.com
                </span>
              </a>
            </motion.div>


            {/* Profile Info Card
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 max-w-sm rounded-2xl 
              bg-white/5 backdrop-blur-xl 
              border border-white/10 
              shadow-[0_8px_32px_rgba(0,0,0,0.35)] 
              p-5"
            >
              <h4 className="text-lg font-semibold text-foreground">
                Tanishq Mangal
              </h4>

              <p className="text-sm text-muted-foreground mt-1">
                Founder & CEO – Nexfolia Studio
              </p>

              <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                Student entrepreneur focused on helping individuals build a strong and
                professional digital presence through clean professional designs and
                personalized websites.
              </p>

              <div className="flex items-center gap-4 mt-4">
  <SocialIcon
    icon={<Linkedin size={18} />}
    label="LinkedIn"
    href="https://www.linkedin.com/in/tanishq-mangal-643734304"
  />

  <SocialIcon
    icon={<Instagram size={18} />}
    label="Instagram"
    href="https://www.instagram.com/_tanishqmangal_?igsh=d3EycHZseWl3NnNo"
  />
</div>


            </motion.div> */}

          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-6"
          >

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2 tracking-wide">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/30 focus:border-foreground/50 transition-all duration-300"
                placeholder="Your name"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2 tracking-wide">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => {
                  handleChange(e);
                  setEmailError("");
                }}
                required
                className="w-full px-5 py-4 bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/30 focus:border-foreground/50 transition-all duration-300"
                placeholder="your@gmail.com"
              />
            </motion.div>
            {emailError && (
              <p className="text-red-500 text-sm mt-1">
                {emailError}
              </p>
            )}
            {/* {successMessage && (
            <p className="text-green-500 text-sm mt-2">
            {successMessage}
            </p>
          )} */}

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2 tracking-wide">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-5 py-4 bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/30 focus:border-foreground/50 transition-all duration-300 resize-none"
                placeholder="Tell us about your project..."
              />
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4">

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="w-full sm:w-auto whitespace-nowrap px-10 py-4 text-[15px] font-semibold tracking-wide text-white rounded-full 
bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(255,255,255,0.15)]
hover:bg-white/20 hover:shadow-[0_3px_10px_rgba(255,255,255,0.25)]
transition-all duration-300 inline-flex items-center justify-center gap-3"
              >
                Send Message
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <a
                href="https://wa.me/916262189941?text=Hello%20I%20want%20to%20contact%20you"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto whitespace-nowrap px-8 py-4 text-[15px] font-semibold tracking-wide text-white rounded-full 
bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(255,255,255,0.15)]
hover:bg-white/20 hover:shadow-[0_3px_10px_rgba(255,255,255,0.25)]
transition-all duration-300 inline-flex items-center justify-center gap-3"

              >
                💬 Chat on WhatsApp
              </a>

            </div>

          </motion.form>

        </div>
      </div>

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-green-600 text-white px-8 py-4 rounded-xl shadow-xl animate-fade-in">
          ✅ Message sent successfully!
        </div>
      )}

    </motion.section>
  );
};

export default ContactSection;