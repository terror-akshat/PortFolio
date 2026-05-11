import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, Code, Star } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const projects = [
  {
    title: "Cullture Platform",
    subtitle: "Culture & Community Engagement Platform",
    description:
      "A modern full-stack platform designed to connect users through cultural events, community interactions, and digital engagement features with scalable backend architecture.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    link: "https.//culture-platform.netlify.app",
    github: "https://github.com/terror-akshat/Cullture-platform",
    status: "Completed",
    category: "Full-Stack Web Application",
    projectType: "client",
    year: "2025",
    features: [
      "Authentication & authorization",
      "Community-driven platform",
      "Responsive modern UI",
      "Scalable backend architecture",
    ],
  },

  {
    title: "Inventory Management System",
    subtitle: "Business Inventory & Stock Management",
    description:
      "A full-stack inventory management solution for managing products, stock tracking, inventory operations, and business workflows with secure role-based access.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    link: "https://invenm.netlify.app/login",
    github: "https://github.com/terror-akshat/Inventory-management",
    status: "Completed",
    category: "Business Management System",
    projectType: "client",
    year: "2025",
    features: [
      "Inventory & stock tracking",
      "Role-based authentication",
      "Product management",
      "Dashboard analytics",
    ],
  },
  {
    title: "Swasth Care",
    subtitle: "Hospital Management System",
    description:
      "A scalable hospital management system built to digitalize patient records, billing, ward allocation, and OPD workflows.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    link: "https://grand-mooncake-4b0873.netlify.app",
    github: "https://github.com/terror-akshat",
    status: "Completed",
    category: "Full-Stack (MERN)",
    projectType: "personal",
    year: "2025",
    features: [
      "Role-based authentication",
      "Ward & bed management",
      "Patient history",
      "Secure uploads",
    ],
  },

  {
    title: "TryBe",
    subtitle: "AI-Based Product Discovery",
    description:
      "Hackathon project introducing semantic vibe-based search using AI embeddings.",
    tech: ["React.js", "Node.js", "MongoDB", "Sentence Transformers"],
    link: "https://github.com/terror-akshat/TryBe",
    github: "https://github.com/terror-akshat/TryBe",
    status: "Hackathon",
    category: "AI + Full-Stack",
    projectType: "personal",
    year: "2025",
    features: [
      "Semantic search",
      "Embedding similarity",
      "Video feed",
      "Product discovery",
    ],
  },

  {
    title: "BoardMeet",
    subtitle: "Collaborative Whiteboard",
    description:
      "Real-time collaborative whiteboard with synchronized drawing and video communication.",
    tech: ["React.js", "Node.js", "WebRTC", "Socket.io"],
    link: "https://charming-chebakia-38d373.netlify.app/",
    github: "https://github.com/terror-akshat",
    status: "Completed",
    category: "Real-Time App",
    projectType: "personal",
    year: "2024",
    features: [
      "Real-time sync",
      "Video calling",
      "WebSockets",
      "Live collaboration",
    ],
  },

  {
    title: "Social Media Content Analyzer",
    subtitle: "LLM-Based Content Analysis",
    description:
      "AI-powered application for OCR extraction and sentiment analysis using LLMs.",
    tech: ["Python", "Groq API", "Docker", "JavaScript"],
    link: "https://mellow-raindrop-819a89.netlify.app/",
    github: "https://github.com/terror-akshat",
    status: "Completed",
    category: "AI / NLP",
    projectType: "personal",
    year: "2024",
    features: [
      "OCR extraction",
      "Sentiment analysis",
      "LLM integration",
      "Docker deployment",
    ],
  },

  {
    title: "Brief View",
    subtitle: "AI Text & Video Summarizer",
    description:
      "Flask-based AI app that summarizes long-form text and video content.",
    tech: ["Python", "Flask", "Hugging Face", "NLP"],
    link: "https://github.com/terror-akshat/Brief-View",
    github: "https://github.com/terror-akshat/Brief-View",
    status: "Completed",
    category: "AI / NLP",
    projectType: "personal",
    year: "2024",
    features: [
      "Video summarization",
      "Speech extraction",
      "Bullet summaries",
      "Optimized inference",
    ],
  },

  {
    title: "Journey Junction",
    subtitle: "Travel Planning Platform",
    description:
      "Responsive travel planning and journaling application with interactive UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/terror-akshat/Journey-Junction",
    github: "https://github.com/terror-akshat/Journey-Junction",
    status: "Completed",
    category: "Frontend App",
    projectType: "personal",
    year: "2023",
    features: [
      "Travel planner",
      "Responsive design",
      "Journey journals",
      "Interactive UI",
    ],
  },
];

export function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all" ? projects : (
      projects.filter((project) => project.projectType === activeFilter)
    );

  return (
    <section
      className="py-24 px-4 relative overflow-hidden bg-background"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
            PROJECTS
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real-world applications, freelance solutions, and innovative AI
            projects.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-14 flex-wrap">
          {["all", "client", "personal"].map((type) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 capitalize text-sm font-medium
              ${
                activeFilter === type ?
                  "bg-blue-500 text-white border-blue-400 shadow-lg shadow-blue-500/20"
                : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
              }`}
            >
              {type === "all" ? "All Projects" : `${type} Projects`}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group h-full"
            >
              <div className="h-full p-6 rounded-2xl backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 border border-white/40 dark:border-gray-700/40 hover:border-blue-400/40 transition-all duration-500 flex flex-col min-h-[520px]">
                {/* Top Row */}
                <div className="flex items-start justify-between mb-5">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.projectType === "client" ?
                        "bg-green-500/20 text-green-300 border border-green-400/20"
                      : "bg-purple-500/20 text-purple-300 border border-purple-400/20"
                    }`}
                  >
                    {project.projectType === "client" ?
                      "Client Project"
                    : "Personal Project"}
                  </span>

                  <span className="text-xs text-gray-500">{project.year}</span>
                </div>

                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-blue-300 mb-2">
                    {project.subtitle}
                  </p>

                  <p className="text-xs text-gray-400">{project.category}</p>
                </div>

                {/* Description */}
                <div className="mb-5 min-h-[90px]">
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-5">
                  <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-3 flex items-center">
                    <Star className="w-3 h-3 mr-2" />
                    Features
                  </h4>

                  <div className="space-y-2">
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center text-sm text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-3 flex items-center">
                    <Code className="w-3 h-3 mr-2" />
                    Tech Stack
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md bg-white/10 border border-white/10 text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="outline" size="sm" className="w-full">
                      <FaGithub className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </a>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button size="sm" className="w-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
