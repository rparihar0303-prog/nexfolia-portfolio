import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ExternalLink, ImageOff } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
    {
        title: "Creative Designs",
        description:
            "Visually striking posters, banners, and digital creatives designed to attract attention and communicate clearly.",
        image: null,
        video: "public/Website Animations (1).mp4", // add video here
        tag: "Designs",
        link: "#",
    },
    {
        title: "Personal Portfolio",
        description:
            "A modern portfolio website crafted to showcase your skills, projects, and journey in a professional way.",
        image: null,
        video: "public/Website Animations (2).mp4",
        tag: "Portfolios",
        link: "#",
    },
    {
        title: "Startup Website",
        description:
            "A clean and scalable website built for early-stage startups to present ideas, build trust, and convert visitors.",
        image: null,
        video: "public/Website Animations (3).mp4",
        tag: "Websites",
        link: "#",
    },
];


const ProjectsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.section
            ref={ref}
            id="projects"
            className="section-spacing overflow-visible"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
        >
            <div className="section-container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                        Projects
                    </p>
                    <h2 className="heading-section mb-4">Work we’ve crafted</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A selection of designs, portfolio and startup websites. We’ve designed to help
                        individuals and startups present themselves professionally.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 24 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ y: -6, scale: 1.03 }}
                            className="rounded-2xl bg-white/5 backdrop-blur-xl 
                            border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)]
                            flex flex-col h-full"

                        >
                            {/* Image / Placeholder */}
                            <div className="h-48 flex items-center justify-center bg-white/5 border-b border-white/10 overflow-hidden">
                                {project.video ? (
                                    <video
                                        src={project.video}
                                        autoPlay
                                        muted
                                        playsInline
                                        onLoadedMetadata={(e) => {
                                            e.currentTarget.playbackRate = 2.20; // optional slow playback
                                        }}
                                        onEnded={(e) => {
                                            const video = e.currentTarget;
                                            setTimeout(() => {
                                                video.currentTime = 0;
                                                video.play().catch(() => { });
                                            }, 2000); // delay before replay (2 seconds)
                                        }}
                                        className="w-full h-full object-cover"
                                    />


                                ) : project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center text-muted-foreground text-sm gap-2">
                                        <ImageOff size={28} />
                                        <span>Preview coming soon</span>
                                    </div>
                                )}
                            </div>


                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                                    {project.tag}
                                </span>

                                <h3 className="text-xl font-semibold text-foreground mt-2 mb-3">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                                    {project.description}
                                </p>

                                <Link
                                    to={`/projects/${project.tag.toLowerCase()}`}
                                    className="
                                    inline-flex items-center gap-2
                                    text-sm font-semibold
                                    text-foreground
                                    hover:text-muted-foreground
                                    transition
                                    cursor-pointer
                                    ">
                                    <span>View project</span>
                                    <ExternalLink size={14} />
                                </Link>


                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default ProjectsSection;
