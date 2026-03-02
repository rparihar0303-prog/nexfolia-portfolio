import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priyansh Goyal",
    role: "Founder, SupeeB",
    review:
      "Nexfolia helped us redefine our clothing brand online. The website perfectly captures our aesthetic and significantly improved engagement and conversions.",
  },
  {
    name: "Tushar Mangal",
    role: "Founder, Supeebkart",
    review:
      "They didn’t just design a website — they built a digital foundation that reflects our vision and supports long-term growth.",
  },
  {
    name: "Aarav Sharma",
    role: "Startup Founder",
    review:
      "Professional, strategic, and highly detail-oriented. Nexfolia delivers clarity and performance together.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-background text-foreground py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="uppercase tracking-[0.3em] text-xs text-muted-foreground mb-4">
            Testimonials
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            What Our Clients <br className="hidden sm:block" />
            Say About Nexfolia
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-2xl border border-border bg-secondary/30 backdrop-blur-xl hover:border-foreground/30 transition-all duration-300 group"
            >
              {/* Soft Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>

              <p className="text-base leading-relaxed text-muted-foreground mb-6 relative z-10">
                “{item.review}”
              </p>

              <div className="relative z-10">
                <h3 className="text-base font-semibold text-foreground">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;