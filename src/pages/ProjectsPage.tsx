import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowLeft, ImageOff } from "lucide-react";
import { useState, useEffect } from "react";

const projectsData = {
    designs: [
        {
            title: "Instagram Poster Series",
            description:
                "A modern social media campaign designed to improve engagement and brand recognition.",
            tech: ["Canva", "Illustrator"],
            images: [],
            live: "/Instagram_poster_nexfolia.png",
        },
        // {
        //     title: "Startup Branding Kit",
        //     description:
        //         "Complete branding package including logo, banners, and pitch visuals.",
        //     tech: ["Figma", "Illustrator"],
        //     images: [],
        //     live: "#",
        // },
          {
            title: "UI/UX Designs",
            description:
                 "Modern UI/UX designs focused on usability, clean layout, and engaging user experience.",
            tech: ["Figma", "Illustrator"],
            images: [],
            live: "/loginpage.png",
        },
    ],

    portfolios: [
        {
            title: "Developer Portfolio",
            description:
                "A modern personal portfolio website with animations and responsive UI.",
            tech: ["React", "Tailwind", "Framer Motion"],
            images: [
                "/portfolio1.png",
                "/portfolio2.png",
                "/portfolio3.png",
                "/portfolio4.png",
            ],

            live: "https://rohit-parihar-portfolio.vercel.app/",
        },
    ],

    // websites: [
    //     {
    //         title: "Startup Landing Page",
    //         description:
    //             "Conversion-focused landing page built for early-stage startups.",
    //         tech: ["React", "Vite", "Tailwind"],
    //         images: [],
    //         live: "#",
    //     },
    // ],
};

/* Project Card Component */
const ProjectCard = ({ project, index }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const isTouchDevice =
        typeof window !== "undefined" &&
        ("ontouchstart" in window || navigator.maxTouchPoints > 0);


    useEffect(() => {
        if (!project.images || project.images.length === 0) return;
        if (isHovered && !isTouchDevice) return;

        const interval = setInterval(() => {
            setCurrentImage(prev =>
                prev === project.images.length - 1 ? 0 : prev + 1
            );
        }, 2000);

        return () => clearInterval(interval);
    }, [project.images, isHovered, isTouchDevice]);


    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="rounded-2xl bg-white/5 backdrop-blur-xl 
            border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)] overflow-hidden"
        >

            {/* Image Slider */}
            <div
                className="relative h-44 bg-white/5 border-b border-white/10 overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >


                {project.images && project.images.length > 0 ? (
                    <>
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentImage}
                                src={project.images[currentImage]}
                                alt={project.title}
                                initial={{ x: 120, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -120, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </AnimatePresence>

                        {/* Dots */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                            {project.images.map((_, i) => (
                                <span
                                    key={i}
                                    className={`w-2 h-2 rounded-full ${i === currentImage ? "bg-white" : "bg-white/40"
                                        }`}
                                />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center h-full text-muted-foreground text-sm gap-2">
                        <ImageOff size={28} />
                        <span>Preview coming soon</span>
                    </div>
                )}

            </div>


            {/* Content */}
            <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

                <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                </p>

                {/* Tech Stack */}
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

                {/* Live Link */}
                <a
                    href={project.live}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition"
                >
                    View Live
                    <ExternalLink size={14} />
                </a>
            </div>
        </motion.div>
    );
};


const ProjectsPage = () => {
    const { category } = useParams();

    const projects =
        projectsData[category as keyof typeof projectsData] || [];

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

                {/* Projects Grid */}
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
