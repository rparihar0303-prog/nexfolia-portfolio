import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function SocialProof() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Trusted by Students & Creators
        </h2>

        <p className="text-gray-400 mb-12">
          Building digital presence with clarity, creativity and consistency.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-3xl font-semibold">50+</h3>
            <p className="text-gray-400">Students Trained</p>
          </div>

          <div>
            <h3 className="text-3xl font-semibold">10+</h3>
            <p className="text-gray-400">Web Projects</p>
          </div>

          <div>
            <h3 className="text-3xl font-semibold">2026</h3>
            <p className="text-gray-400">Founded</p>
          </div>

          <div>
            <h3 className="text-3xl font-semibold">Remote</h3>
            <p className="text-gray-400">Studio Model</p>
          </div>
        </div>

        <div className="flex justify-center gap-8">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            className="flex items-center gap-2 hover:text-gray-300 transition"
          >
            <FaLinkedin size={28} /> LinkedIn
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            className="flex items-center gap-2 hover:text-gray-300 transition"
          >
            <FaInstagram size={28} /> Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
