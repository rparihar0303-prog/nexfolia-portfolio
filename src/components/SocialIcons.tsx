import { motion } from "framer-motion";

interface SocialIconProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const SocialIcon = ({ icon, label, href }: SocialIconProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group z-50"
      whileHover={{ y: -6, scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Tooltip */}
      <span
        className="
          absolute -top-11 left-1/2 -translate-x-1/2
          z-50
          opacity-0 group-hover:opacity-100
          translate-y-2 group-hover:translate-y-0
          transition-all duration-200
          whitespace-nowrap rounded-md
          bg-black px-3 py-1 text-xs text-white
          shadow-xl pointer-events-none
        "
      >
        {label}
      </span>

      {/* Icon */}
      <div
        className="
          w-12 h-12 rounded-full
          bg-white/10 backdrop-blur-xl
          border border-white/20
          flex items-center justify-center
          text-white
          hover:bg-white/20
          transition-all duration-300
        "
      >
        {icon}
      </div>
    </motion.a>
  );
};

export default SocialIcon;
