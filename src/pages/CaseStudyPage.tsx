import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, ImageOff } from "lucide-react";

const caseStudies = {
  "developer-portfolio": {
    title: "Developer Portfolio Website",
    subtitle:
      "A modern personal portfolio website built to showcase skills, projects, and achievements professionally.",
    problem:
      "The client needed a clean and modern portfolio to present projects professionally and attract freelance opportunities.",
    solution:
      "We designed a responsive, minimal, and fast website using modern tools and smooth animations to create a premium experience.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    live: "#",
  },
};

const CaseStudyPage = () => {
  const { projectId } = useParams();
  const project = caseStudies[projectId as keyof typeof caseStudies];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        Project not found
      </div>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl w-full text-center">

        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition mb-10"
        >
          <ArrowLeft size={16} />
          Back
        </Link>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14"
        >
          <h1 className="heading-section mb-4">{project.title}</h1>
          <p className="text-lg text-muted-foreground">{project.subtitle}</p>
        </motion.div>

        {/* Preview Image Section */}
        <div className="h-80 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-16">
          <div className="flex flex-col items-center text-muted-foreground gap-2">
            <ImageOff size={36} />
            <span>Project preview coming soon</span>
          </div>
        </div>

        {/* Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-semibold mb-3">Problem</h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Solution</h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Live Button */}
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition"
        >
          View Live Project
          <ExternalLink size={16} />
        </a>

      </div>
    </section>
  );
};

export default CaseStudyPage;
