import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Calendar,
  MapPin,
  Award,
  Star,
  Briefcase,
  CheckCircle,
} from "lucide-react";

const experienceItems = [
  {
    role: "Software Engineer",
    company: "Nagarro",
    period: "Nov 2025 - Present",
    status: "Ongoing",
    location: "India",
    description:
      "Building scalable, high-performance web applications as a full-stack developer with focus on user-centric solutions and software quality.",
    highlights: [
      "Implemented end-to-end features with React and Node.js",
      "Optimized application performance and reliability",
      "Collaborated with product, design, and QA teams for delivery",
    ],
  },
  {
    role: "Project Intern, Infosys SpringBoard",
    company: "Infosys SpringBoard",
    period: "Aug 2025 - Oct 2025",
    status: "Completed",
    location: "Remote / Kanpur, India",
    description:
      "Worked as a Java Developer Intern building an AI-driven urban fleet management solution to optimize city-wide fleet operations.",
    highlights: [
      "Developed backend microservices for route optimization",
      "Integrated AI pipeline for fleet utilization and demand forecasting",
      "Collaborated with cross-functional teams to deliver project milestones",
    ],
  },
];

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`experience-particle-${i}`}
          className="absolute w-2 h-2 bg-emerald-500/20 rounded-full"
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="relative py-24 px-4 bg-slate-900/50" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 via-blue-950/10 to-slate-900/20" />
        <FloatingParticles />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
            EXPERIENCE
          </h2>
          <p className="text-xl font-rajdhani text-slate-300 max-w-3xl mx-auto">
            Professional experience tracking a career path focused on
            impact-driven software engineering
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 via-teal-400 to-blue-500 rounded-full opacity-60"></div>

          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 flex flex-col justify-start pt-32">
            {experienceItems.map((_, index) => (
              <div
                key={`dot-${index}`}
                className="flex-1 flex items-start justify-center"
              >
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.3 + 0.5 }}
                  className="w-4 h-4 rounded-full bg-gradient-to-r from-emerald-400 to-blue-500 shadow-lg shadow-emerald-500/50 border-2 border-white/20"
                />
              </div>
            ))}
          </div>

          <div className="space-y-24 pt-16">
            {experienceItems.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100, y: 30 }}
                  animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.3,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className={`flex ${isLeft ? "justify-start pr-8" : "justify-end pl-8"} items-center`}
                >
                  <div
                    className={`w-full max-w-lg ${isLeft ? "mr-8" : "ml-8"} relative group`}
                  >
                    <div
                      className={`absolute top-8 ${isLeft ? "-right-8" : "-left-8"} w-8 h-0.5 bg-gradient-to-r ${isLeft ? "from-emerald-400 to-transparent" : "from-transparent to-blue-400"} opacity-60`}
                    />

                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:border-emerald-400/30 hover:shadow-2xl hover:shadow-emerald-500/10 group-hover:scale-105">
                      <div
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-rajdhani font-medium mb-6 ${item.status === "Ongoing" ? "bg-teal-500/20 text-teal-300 border border-teal-400/30" : "bg-green-500/20 text-green-300 border border-green-400/30"}`}
                      >
                        {item.status === "Ongoing" ?
                          <Briefcase className="w-4 h-4" />
                        : <CheckCircle className="w-4 h-4" />}
                        {item.status}
                      </div>

                      <div className="space-y-4 mb-6">
                        <h3 className="text-2xl font-orbitron font-bold text-white leading-tight">
                          {item.role}
                        </h3>
                        <div className="flex items-center gap-3 text-teal-200">
                          <span className="font-rajdhani font-medium text-lg">
                            {item.company}
                          </span>
                        </div>
                        <p className="text-slate-300 font-rajdhani text-base leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 gap-4 mb-6">
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-purple-400" />
                          <div>
                            <p className="text-sm font-rajdhani text-slate-400">
                              Duration
                            </p>
                            <p className="font-rajdhani font-medium text-slate-200">
                              {item.period}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-green-400" />
                          <div>
                            <p className="text-sm font-rajdhani text-slate-400">
                              Location
                            </p>
                            <p className="font-rajdhani font-medium text-slate-200">
                              {item.location}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-rajdhani text-slate-400 mb-3">
                          Key Contributions
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="px-3 py-1 bg-emerald-500/10 text-emerald-300 rounded-full text-sm font-rajdhani border border-emerald-400/20 hover:bg-emerald-500/20 transition-colors"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
