import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Star } from 'lucide-react';

const education = [
  {
    degree: "B.Tech in Computer Science and Engineering (AI)",
    institution: "Pranveer Singh Institute of Technology, Kanpur",
    period: "2022 - Present",
    gpa: "8.7 CGPA / 10",
    status: "In Progress",
    location: "Kanpur, India",
    description: "Pursuing B.Tech CSE (AI) focusing on algorithms, machine learning, data structures, and intelligent systems.",
    highlights: ["Artificial Intelligence", "Data Structures", "Machine Learning", "Algorithms"]
  },
  {
    degree: "Intermediate (12th)",
    institution: "Kendriya Vidyalaya, Armapur, Kanpur",
    period: "2021",
    gpa: "96.80% - 2nd Position in School",
    status: "Completed",
    location: "Kanpur, India",
    description: "Achieved top academic rank in senior secondary education with high proficiency in science and mathematics.",
    highlights: ["Physics", "Chemistry", "Mathematics", "Computer Science"]
  },
  {
    degree: "High School (10th)",
    institution: "Secondary School",
    period: "2020 - 2021",
    gpa: "73.8%",
    status: "Completed",
    location: "India",
    description: "Foundation education completed with strong academic performance across all subjects.",
    highlights: ["Mathematics", "Science", "English", "Social Studies","Physical Education"]
  }
];

// Floating particles for animated background
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`education-particle-${i}`}
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

export function Education() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="relative py-24 px-4 bg-slate-900/50" ref={ref}>
      {/* Pattern B - Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-purple-950/10 to-slate-900/20" />
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
            EDUCATION
          </h2>
          <p className="text-xl font-rajdhani text-slate-300 max-w-3xl mx-auto">
            Academic journey shaping the foundation of knowledge and innovation
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-blue-500 rounded-full opacity-60"></div>

          {/* Timeline Connector Dots */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 flex flex-col justify-start pt-32">
            {education.map((_, index) => (
              <div key={`dot-${index}`} className="flex-1 flex items-start justify-center">
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
            {education.map((edu, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={edu.degree}
                  initial={{ 
                    opacity: 0, 
                    x: isLeft ? -100 : 100,
                    y: 30 
                  }}
                  animate={inView ? { 
                    opacity: 1, 
                    x: 0,
                    y: 0 
                  } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.3,
                    type: "spring",
                    stiffness: 100
                  }}
                  className={`flex ${isLeft ? 'justify-start pr-8' : 'justify-end pl-8'} items-center`}
                >
                  {/* Education Card */}
                  <div 
                    className={`w-full max-w-lg ${isLeft ? 'mr-8' : 'ml-8'} relative group`}
                  >
                    {/* Connecting Line to Timeline */}
                    <div 
                      className={`absolute top-8 ${isLeft ? '-right-8' : '-left-8'} w-8 h-0.5 bg-gradient-to-r ${isLeft ? 'from-blue-400 to-transparent' : 'from-transparent to-purple-400'} opacity-60`}
                    />

                    {/* Card */}
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:border-blue-400/30 hover:shadow-2xl hover:shadow-blue-500/10 group-hover:scale-105">
                      {/* Status Badge */}
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-rajdhani font-medium mb-6 ${
                        edu.status === 'In Progress' 
                          ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30' 
                          : 'bg-green-500/20 text-green-300 border border-green-400/30'
                      }`}>
                        {edu.status === 'In Progress' ? <BookOpen className="w-4 h-4" /> : <Star className="w-4 h-4" />}
                        {edu.status}
                      </div>

                      {/* Header */}
                      <div className="space-y-4 mb-6">
                        <h3 className="text-2xl font-orbitron font-bold text-white leading-tight">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center gap-3 text-blue-200">
                          <GraduationCap className="w-5 h-5 text-blue-400" />
                          <span className="font-rajdhani font-medium text-lg">
                            {edu.institution}
                          </span>
                        </div>
                        <p className="text-slate-300 font-rajdhani text-base leading-relaxed">
                          {edu.description}
                        </p>
                      </div>

                      {/* Details Grid */}
                      <div className="grid grid-cols-1 gap-4 mb-6">
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-purple-400" />
                          <div>
                            <p className="text-sm font-rajdhani text-slate-400">Duration</p>
                            <p className="font-rajdhani font-medium text-slate-200">
                              {edu.period}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <Award className="w-5 h-5 text-yellow-400" />
                          <div>
                            <p className="text-sm font-rajdhani text-slate-400">Performance</p>
                            <p className="font-rajdhani font-medium text-slate-200">
                              {edu.gpa}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-green-400" />
                          <div>
                            <p className="text-sm font-rajdhani text-slate-400">Location</p>
                            <p className="font-rajdhani font-medium text-slate-200">
                              {edu.location}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div>
                        <p className="text-sm font-rajdhani text-slate-400 mb-3">Key Subjects</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((highlight, idx) => (
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