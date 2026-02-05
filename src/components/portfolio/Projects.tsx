import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, Code, Star } from "lucide-react";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "Swasth Care",
    subtitle: "Hospital Management System",
    description:
      "A scalable hospital management system built to digitalize patient records, billing, ward allocation, and OPD workflows, reducing manual errors and patient waiting time.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary"],
    link: "grand-mooncake-4b0873.netlify.app",
    status: "Completed",
    category: "Full-Stack (MERN)",
    year: "2025",
    features: [
      "Role-based authentication (Admin/Master/User)",
      "Ward & bed management",
      "Patient history and billing",
      "Secure report uploads using Cloudinary",
    ],
  },
  {
    title: "TryBe",
    subtitle: "AI-Based Product Discovery (Myntra Hackathon)",
    description:
      "A Myntra hackathon project introducing short-form product videos and vibe-based semantic search using sentence transformer embeddings to improve user engagement.",
    tech: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Sentence Transformers",
      "NLP",
      "Cosine Similarity",
    ],
    link: "https://github.com/terror-akshat/TryBe",
    status: "Hackathon Project",
    category: "AI + Full-Stack",
    year: "2025",
    features: [
      "Instagram-like product video feed",
      "Semantic vibe-based search",
      "Embedding-based similarity matching",
      "Enhanced product discovery experience",
    ],
  },
  {
    title: "BoardMeet",
    subtitle: "Real-Time Collaborative Whiteboard",
    description:
      "A real-time collaborative whiteboard supporting two-user peer interaction with synchronized drawing and video communication using WebRTC and WebSockets.",
    tech: ["React.js", "Node.js", "WebRTC", "Socket.io", "JavaScript"],
    link: "https://charming-chebakia-38d373.netlify.app/",
    status: "Completed",
    category: "Real-Time Web App",
    year: "2024",
    features: [
      "Real-time drawing synchronization",
      "Peer-to-peer video calling",
      "Low-latency WebSocket communication",
      "Live collaboration support",
    ],
  },
  {
    title: "Social Media Content Analyzer",
    subtitle: "LLM-Based Content Analysis Tool",
    description:
      "A web application that extracts text from PDFs and images using OCR and applies LLM-based sentiment analysis to generate actionable content insights.",
    tech: ["Python", "Groq LLM API", "Docker", "HTML", "CSS", "JavaScript"],
    link: "https://mellow-raindrop-819a89.netlify.app/",
    status: "Completed",
    category: "AI / NLP",
    year: "2024",
    features: [
      "OCR-based text extraction",
      "LLM-powered sentiment analysis",
      "Content drafting assistance",
      "Dockerized deployment on Render & Netlify",
    ],
  },
  {
    title: "Brief View",
    subtitle: "AI Text & Video Summarizer",
    description:
      "A Flask-based AI application that summarizes long text and video content by extracting speech from videos and generating concise bullet-point summaries.",
    tech: ["Python", "Flask", "Hugging Face (T5-small)", "NLP", "NLTK"],
    link: "https://github.com/terror-akshat/Brief-View",
    status: "Completed",
    category: "AI / NLP",
    year: "2024",
    features: [
      "Video-to-text conversion",
      "Low-memory transformer-based summarization",
      "Bullet-point summaries",
      "Optimized for performance",
    ],
  },
  {
    title: "Journey Junction",
    subtitle: "Travel Planning & Journal Web Application",
    description:
      "A front-end focused travel web application that allows users to plan journeys, maintain travel journals, and manage trip-related information through an interactive and responsive UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/terror-akshat/Journey-Junction",
    status: "Completed",
    category: "Frontend Web Application",
    year: "2023",
    features: [
      "Travel planning interface",
      "Journey journal creation",
      "Interactive and responsive design",
      "Client-side form validation",
    ],
  },
  {
    title: "Photo Analyzer",
    subtitle: "AI-Based Image Analysis Tool",
    description:
      "A lightweight web application that analyzes uploaded images to extract meaningful information using AI-based image processing techniques, focusing on visual understanding and content insights.",
    tech: [
      "Python",
      "Computer Vision",
      "Machine Learning",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    link: "https://photo-analyzer-al39.onrender.com",
    status: "Completed",
    category: "AI / Computer Vision",
    year: "2024",
    features: [
      "Image upload and analysis",
      "AI-based visual feature extraction",
      "User-friendly web interface",
      "Fast and lightweight processing",
    ],
  },
];

export function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      className="py-24 px-4 relative overflow-hidden bg-background dark:bg-background"
      ref={ref}
    >
      {/* Simple Background - Pattern A */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, type: "spring", stiffness: 80 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block relative"
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-300 bg-clip-text text-transparent mb-6">
              PROJECTS
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Innovative solutions built with cutting-edge technologies
          </motion.p>
        </motion.div>

        {/* All Projects in Single Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group cursor-pointer h-full"
              >
                <div className="card-glow h-full p-6 rounded-2xl backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 border border-white/40 dark:border-gray-700/40 hover:border-white/60 dark:hover:border-gray-600/60 transition-all duration-500 relative overflow-hidden flex flex-col min-h-[500px]">
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === "Ongoing" ?
                          "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                        : "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <div className="flex flex-col h-full space-y-4">
                    {/* Header - Fixed Height */}
                    <div className="min-h-[120px] flex flex-col justify-start pt-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text transition-all duration-300 line-clamp-2 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2 line-clamp-1">
                        {project.subtitle}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        {project.category} • {project.year}
                      </p>
                    </div>

                    {/* Description - Fixed Height */}
                    <div className="min-h-[80px] flex items-start">
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-4">
                        {project.description.length > 140 ?
                          `${project.description.substring(0, 140)}...`
                        : project.description}
                      </p>
                    </div>

                    {/* Key Features - Fixed Height */}
                    <div className="min-h-[80px] flex flex-col justify-start">
                      <h4 className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wide flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Key Features
                      </h4>
                      <div className="grid grid-cols-2 gap-1">
                        {project.features.slice(0, 4).map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center text-xs text-gray-600 dark:text-gray-400"
                          >
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mr-2 flex-shrink-0"></div>
                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack - Fixed Height */}
                    <div className="min-h-[80px] flex flex-col justify-start">
                      <h4 className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wide flex items-center">
                        <Code className="w-3 h-3 mr-1" />
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-white/70 dark:bg-gray-700/70 border border-gray-200/50 dark:border-gray-600/50 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 5 && (
                          <span className="px-2 py-1 text-xs text-gray-500 dark:text-gray-400 font-medium">
                            +{project.tech.length - 5}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions - Fixed at Bottom */}
                    <div className="flex gap-3 pt-4 mt-auto">
                      <a
                        href="https://github.com/terror-akshat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          variant="accent"
                          size="sm"
                          className="w-full text-xs font-medium"
                        >
                          <FaGithub className="w-3 h-3 mr-2" />
                          View Code
                        </Button>
                      </a>
                      <Button
                        asChild
                        variant="glass"
                        size="sm"
                        className="flex-1 text-xs font-medium"
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-3 h-3 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Subtle shine effect */}
                  <motion.div
                    initial={{ x: "-100%", opacity: 0 }}
                    whileHover={{ x: "100%", opacity: [0, 0.5, 0] }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex justify-center mt-20"
        >
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
