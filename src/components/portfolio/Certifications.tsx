import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ExternalLink,
  Shield,
  Star,
  CheckCircle,
  Code,
  Brain,
  Zap,
  Database,
} from "lucide-react";

const certifications = [
  {
    title: "Programming with python",
    issuer: "Infosys Springboard",
    date: "jan, 2024",
    type: "Programming",
    level: "Professional",
    credentialUrl:
      "https://drive.google.com/file/d/1p47hDDCy5AR32pVibiPVnTI7Y4PymCOb/view",
    description:
      "Certification covering Python programming fundamentals and applied skills, including scripting, data handling, OOP, and building efficient, maintainable code.",
    skills: ["Python", "Scripting", "OOP", "Data Handling"],
    icon: Code,
    gradient: "from-blue-400 to-indigo-400",
    bgGradient: "from-blue-500/10 to-indigo-500/10",
    borderColor: "border-blue-400/30",
    textColor: "text-blue-400",
  },
  {
    title: "Agile and Scrum",
    issuer: "Infosys Springboard",
    date: "July, 2025",
    type: "Project Management",
    level: "Intermediate",
    credentialUrl:
      "https://drive.google.com/file/d/10XCT7_77q4PEjSO_GDHHUHQbXPfej7VZ/view",
    description:
      "Certification covering Agile principles, Scrum framework, sprint planning, and collaborative development for efficient software delivery.",
    skills: ["Agile", "Scrum", "Sprint Planning", "Team Collaboration"],
    icon: Zap,
    gradient: "from-orange-400 to-amber-400",
    bgGradient: "from-orange-500/10 to-amber-500/10",
    borderColor: "border-orange-400/30",
    textColor: "text-orange-400",
  },
  {
    title: "Full Stack Development",
    issuer: "Udemy",
    date: "2026",
    type: "Web Development",
    level: "Advanced",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-8954d46e-66a2-45e3-bd74-f36a1c7865b7/",
    description:
      "Full stack development certificate covering frontend, backend, databases, REST APIs, deployment, and modern web frameworks.",
    skills: [
      "HTML/CSS",
      "JavaScript",
      "Node.js",
      "React",
    ],
    icon: Code,
    gradient: "from-blue-400 to-indigo-400",
    bgGradient: "from-blue-500/10 to-indigo-500/10",
    borderColor: "border-blue-400/30",
    textColor: "text-blue-400",
  },
  {
    title: "FoSS Hackathon Participation",
    issuer: "FoSS (Free and Open Source Software)",
    credentialUrl:
      "https://drive.google.com/file/d/1V3yY9Fke8PoePeLrn0XfiL7oSQ3DYe9q/view?usp=sharing",
    date: "2025",
    type: "Hackathon",
    level: "Participation",
    description:
      "Participated in the FoSS Hackathon, collaborating in a competitive environment to build innovative solutions using open-source technologies.",
    skills: [
      "Problem Solving",
      "Team Collaboration",
      "Rapid Prototyping",
      "Open Source",
    ],
    icon: Zap,
    gradient: "from-green-400 to-emerald-400",
    bgGradient: "from-green-500/10 to-emerald-500/10",
    borderColor: "border-green-400/30",
    textColor: "text-green-400",
  },
];

export function Certifications() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="relative py-24 px-4" ref={ref}>
      {/* Pattern A - Simple Background */}
      <div className="absolute inset-0 bg-slate-950" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
            CERTIFICATIONS
          </h2>
          <p className="text-xl font-rajdhani text-slate-300 max-w-3xl mx-auto">
            Professional certifications validating expertise and commitment to
            continuous learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;

            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                className="group relative h-full"
              >
                {/* Certification Card */}
                <div
                  className={`relative backdrop-blur-xl bg-white/5 border ${cert.borderColor} rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:border-opacity-50 hover:shadow-2xl hover:shadow-current/10 group-hover:scale-105 h-full min-h-[500px] flex flex-col`}
                >
                  {/* Verified Badge */}
                  <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/30 border-2 border-white/20">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>

                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center shadow-lg shadow-current/20 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Title & Issuer */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-orbitron font-bold text-white mb-2 leading-tight line-clamp-2">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <Shield className="w-4 h-4 text-slate-400" />
                        <span className="font-rajdhani font-medium text-slate-300 text-base line-clamp-1">
                          {cert.issuer}
                        </span>
                      </div>

                      {/* Level & Type */}
                      <div className="flex flex-wrap gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-rajdhani font-medium bg-gradient-to-r ${cert.bgGradient} ${cert.textColor} border ${cert.borderColor}`}
                        >
                          {cert.level}
                        </span>
                        <span className="px-3 py-1 rounded-full text-sm font-rajdhani font-medium bg-slate-500/20 text-slate-300 border border-slate-400/30">
                          {cert.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="flex-1 flex flex-col">
                    <p className="text-slate-300 font-rajdhani text-sm leading-relaxed mb-6 flex-shrink-0 line-clamp-3">
                      {cert.description}
                    </p>

                    {/* Skills */}
                    <div className="mb-6 flex-1">
                      <p className="text-sm font-rajdhani text-slate-400 mb-3 flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Key Skills Covered
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, idx) => (
                          <span
                            key={skill}
                            className={`px-3 py-1 bg-gradient-to-r ${cert.bgGradient} ${cert.textColor} rounded-full text-xs font-rajdhani border ${cert.borderColor} hover:bg-opacity-30 transition-colors`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <motion.a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${cert.gradient} text-white font-rajdhani font-medium text-sm hover:shadow-lg hover:shadow-current/20 transition-all duration-300`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Certificate
                  </motion.a>

                  {/* Hover Glow Effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${cert.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                  />
                </div>

                {/* Floating Animation Elements */}
                <motion.div
                  className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${cert.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 pointer-events-none`}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl">
            <div className="text-center">
              <div className="text-2xl font-orbitron font-bold text-white">
                {certifications.length}
              </div>
              <div className="text-sm font-rajdhani text-slate-400">
                Certifications
              </div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-orbitron font-bold text-white">
                4
              </div>
              <div className="text-sm font-rajdhani text-slate-400">
                Technologies
              </div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-orbitron font-bold text-white">
                2023
              </div>
              <div className="text-sm font-rajdhani text-slate-400">
                Latest Year
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
