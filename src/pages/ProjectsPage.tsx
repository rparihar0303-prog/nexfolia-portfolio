import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft, ImageOff } from "lucide-react";

const projectsData = {
  designs: [
    {
      title: "Social Media Creative Campaign",
      description:
        "A modern social media campaign designed to improve engagement and brand recognition.",
      tech: ["Canva", "Illustrator"],

      // ADD ALL YOUR DESIGNS HERE
      gallery: [
        "/Instagram_poster_nexfolia.png",
        "/poster2.png",
        "/poster3.png",
        "/poster4.png"
      ],
    },

    {
      title: "UI/UX Designs",
      description:
        "Modern UI/UX designs focused on usability, clean layout, and engaging user experience.",
      tech: ["Figma", "Illustrator"],

      gallery: [
        "/loginpage.png",
        "/dashboard.png",
        "/mobile-ui.png"
      ],
    },
  ],

  portfolios: [
    {
      title: "Developer Portfolio",
      description:
        "A modern personal portfolio website with animations and responsive UI.",
      tech: ["React", "Tailwind", "Framer Motion"],
      gallery: [
        "/portfolio1.png",
        "/portfolio2.png",
        "/portfolio3.png",
        "/portfolio4.png",
      ],
      live: "https://rohit-parihar-portfolio.vercel.app/",
    },
  ],

  websites: [
    {
      title: "Startup Website",
      description:
        "A clean and scalable website built for early-stage startups to present ideas, build trust, and convert visitors.",
      tech: ["React", "Tailwind", "Framer Motion"],
      gallery: [
        "/startup1.png",
        "/startup2.png",
        "/startup3.png",
      ],
      live: "https://supeeb-website.vercel.app/",
    },
  ],
};

/* Project Card */
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="rounded-2xl bg-white/5 backdrop-blur-xl 
      border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)] overflow-hidden"
    >

      {/* Preview Section */}
      <div className="relative h-44 bg-white/5 border-b border-white/10 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-muted-foreground text-sm gap-2">
          <ImageOff size={28} />
          <span>Click below to view designs</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

        <p className="text-muted-foreground text-sm mb-4">
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full 
              bg-white/10 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Designs Button */}
        {project.gallery && (
          <a
            href={project.gallery[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition"
          >
            View Designs
            <ExternalLink size={14} />
          </a>
        )}

        {/* For live websites */}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition ml-4"
          >
            Visit Website
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const ProjectsPage = () => {
  const { category } = useParams();

  const projects = projectsData[category] || [];

  return (
    <section className="section-spacing min-h-screen">
      <div className="section-container">

        {/* Back Button */}
        <div className="mb-10 flex items-center justify-between">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
          >
            <ArrowLeft size={16} />
            Back
          </Link>
        </div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="heading-section capitalize">
            {category} Projects
          </h1>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A collection of high-quality digital work crafted with attention
            to detail, clarity, and modern design standards.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsPage;