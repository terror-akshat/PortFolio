import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, MapPin, Award, Laptop, Star } from "lucide-react";

const experience = [
  {
    role: "Full Stack Developer (Remote)",
    company: "Talent Squad Manpower Poland",
    period: "2025 - Present",
    type: "Remote Internship",
    location: "Remote",
    description:
      "Worked on full-stack web development projects involving frontend interfaces, backend APIs, and database integration in a remote collaborative environment.",
    highlights: [
      "React.js",
      "Next.js",
      "GitHub",
      "Team Collaboration",
      "Responsive UI",
    ],
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Self Employed",
    period: "2025 - Present",
    type: "Freelance",
    location: "India",
    description:
      "Developed and delivered multiple paid web applications for students and independent clients, handling complete development lifecycle from UI design to deployment.",
    highlights: [
      "Client Projects",
      "MERN Stack",
      "Machine Learning",
      "Spring Boot",
      "Authentication",
      "Deployment",
      "Database Design",
    ],
  },
];

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`experience-particle-${i}`}
          className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
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

export function ExperienceSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="relative py-24 px-4 bg-slate-900/50" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-950/20 via-yellow-950/10 to-slate-900/20" />
        <FloatingParticles />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
            EXPERIENCE
          </h2>

          <p className="text-xl font-rajdhani text-slate-300 max-w-3xl mx-auto">
            Real-world experience building scalable full stack applications and
            delivering client projects.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-blue-500 rounded-full opacity-60"></div>

          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 flex flex-col justify-start pt-32">
            {experience.map((_, index) => (
              <div
                key={`dot-${index}`}
                className="flex-1 flex items-start justify-center"
              >
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.3 + 0.5 }}
                  className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg shadow-blue-500/50 border-2 border-white/20"
                />
              </div>
            ))}
          </div>

          <div className="space-y-24 pt-16">
            {experience.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={exp.role}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -100 : 100,
                    y: 30,
                  }}
                  animate={
                    inView ?
                      {
                        opacity: 1,
                        x: 0,
                        y: 0,
                      }
                    : {}
                  }
                  transition={{
                    duration: 0.8,
                    delay: index * 0.3,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className={`flex ${
                    isLeft ? "justify-start pr-8" : "justify-end pl-8"
                  } items-center`}
                >
                  <div
                    className={`w-full max-w-lg ${
                      isLeft ? "mr-8" : "ml-8"
                    } relative group`}
                  >
                    <div
                      className={`absolute top-8 ${
                        isLeft ? "-right-8" : "-left-8"
                      } w-8 h-0.5 bg-gradient-to-r ${
                        isLeft ?
                          "from-blue-400 to-transparent"
                        : "from-transparent to-purple-400"
                      } opacity-60`}
                    />

                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:border-blue-400/30 hover:shadow-2xl hover:shadow-blue-500/10 group-hover:scale-105">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-rajdhani font-medium mb-6 bg-blue-500/20 text-blue-300 border border-blue-400/30">
                        <Laptop className="w-4 h-4" />
                        {exp.type}
                      </div>

                      <div className="space-y-4 mb-6">
                        <h3 className="text-2xl font-orbitron font-bold text-white leading-tight">
                          {exp.role}
                        </h3>

                        <div className="flex items-center gap-3 text-blue-200">
                          <Briefcase className="w-5 h-5 text-blue-400" />

                          <span className="font-rajdhani font-medium text-lg">
                            {exp.company}
                          </span>
                        </div>

                        <p className="text-slate-300 font-rajdhani text-base leading-relaxed">
                          {exp.description}
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
                              {exp.period}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <Award className="w-5 h-5 text-yellow-400" />

                          <div>
                            <p className="text-sm font-rajdhani text-slate-400">
                              Work Type
                            </p>

                            <p className="font-rajdhani font-medium text-slate-200">
                              {exp.type}
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
                              {exp.location}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-rajdhani text-slate-400 mb-3">
                          Technologies & Skills
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {exp.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm font-rajdhani border border-blue-400/20 hover:bg-blue-500/20 transition-colors"
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

export default ExperienceSection