import { motion } from "framer-motion";

const clients = [
  "SupeeB",
  "Supeebkart",
  "SupeeB",
  "Supeebkart",
  "SupeeB",
  "Supeebkart",
  "SupeeB",
  "Supeebkart"
];

const ClientsSection = () => {
  return (
    <section className="py-24 overflow-hidden bg-background">
      
      <div className="section-container text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
          Our Clients
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {/* Duplicate array for infinite loop */}
          {[...clients, ...clients].map((client, index) => (
            <span
              key={index}
              className="text-muted-foreground text-lg md:text-xl font-medium tracking-wide"
            >
              {client}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;