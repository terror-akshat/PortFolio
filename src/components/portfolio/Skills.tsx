import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Wrench, Brain, BookOpen } from 'lucide-react';
// Technology Icons
import { 
  SiPython, SiJavascript, SiCplusplus, SiMysql,
  SiExpress, SiNodedotjs, SiReact, SiDjango,
  SiGit, SiMongodb,
  SiPandas, SiNumpy, SiScikitlearn, SiTensorflow,
  SiTypescript,
  SiPostman,
  SiDocker,
  SiLinux
} from 'react-icons/si';
import { FaJava, FaDatabase, FaGraduationCap, FaCommentDots } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: [
      { name: "Python", icon: SiPython, color: "#3776ab" },
      { name: "Java", icon: FaJava, color: "#f89820" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "SQL", icon: SiMysql, color: "#4479a1" }
    ],
    color: "primary"
  },
  {
    title: "Frameworks",
    icon: Database,
    skills: [
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "React", icon: SiReact, color: "#61dafb" },
      // { name: "F", icon: SiDjango, color: "#092e20" }
    ],
    color: "secondary"
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "VS Code", icon: VscCode, color: "#007acc" },
      { name: "Postman", icon: SiPostman, color: "#ff9800" },
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "Linux", icon: SiLinux, color: "#47a248" },

    ],
    color: "neon-cyan"
  },
  {
    title: "ML & Data",
    icon: Brain,
    skills: [
      { name: "NLP", icon: SiPandas, color: "#150458" },
      { name: "Gen-Ai", icon: SiNumpy, color: "#013243" },
    ],
    color: "highlight"
  },
  {
    title: "Coursework",
    icon: BookOpen,
    skills: [
      { name: "OS", icon: FaGraduationCap, color: "#6366f1" },
      { name: "Data Structures", icon: FaDatabase, color: "#8b5cf6" },
      { name: "RDBMS", icon: FaDatabase, color: "#06b6d4" },
      { name: "OOP", icon: Code, color: "#f59e0b" },
      { name: "System-Design", icon: Wrench, color: "#f59e0b" }
      
    ],
    color: "secondary"
  },
  {
    title: "APIs & Concepts",
    icon: BookOpen,
    skills: [
      { name: "REST", icon: FaCommentDots, color: "#ef4444" },
      { name: "Microservices", icon: FaCommentDots, color: "#3b82f6" },
    ],
    color: "secondary"
  }
];

interface SkillItem {
  name: string;
  icon: any;
  color: string;
}

const SkillCube = ({ skill, index, categoryColor }: { skill: SkillItem; index: number; categoryColor: string }) => {
  const IconComponent = skill.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      className="group"
    >
      <div className="skills-item-card h-28 w-full flex flex-col items-center justify-center p-4 text-center group-hover:scale-105 transition-all duration-300 bg-white/5 dark:bg-gray-800/20 backdrop-blur-sm border border-white/10 dark:border-gray-700/30 rounded-xl hover:border-white/30 dark:hover:border-gray-600/50 hover:bg-white/10 dark:hover:bg-gray-800/30">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/20 to-white/5 dark:from-gray-700/50 dark:to-gray-800/30 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg backdrop-blur-sm">
          <IconComponent 
            className="w-7 h-7" 
            style={{ color: skill.color }}
          />
        </div>
        <p className="font-medium text-xs text-gray-700 dark:text-gray-300 leading-tight">
          {skill.name}
        </p>
      </div>
    </motion.div>
  );
};

export function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-blue-50/30 via-white to-purple-50/30 dark:from-gray-900/50 dark:via-gray-900 dark:to-gray-800/50 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_60%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05),transparent_60%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_60%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block"
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-300 bg-clip-text text-transparent mb-6">
              SKILLS
            </h2>
          </motion.div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technical expertise across multiple domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 items-stretch">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 80 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: categoryIndex * 0.15,
                  type: "spring",
                  stiffness: 80
                }}
                className="group"
              >
                {/* Category Container with uniform height */}
                <div className="skills-category-card h-full rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500">
                  
                  {/* Category Header */}
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 dark:from-blue-400/30 dark:to-purple-500/30 backdrop-blur-sm border border-blue-300/30 dark:border-blue-400/20 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <IconComponent className="w-10 h-10 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {category.title}
                    </h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                  </div>

                  {/* Skills Grid with uniform card sizes */}
                  <div className="grid grid-cols-2 gap-3 min-h-[240px]">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillCube 
                        key={skill.name} 
                        skill={skill} 
                        index={skillIndex} 
                        categoryColor={category.color}
                      />
                    ))}
                    {/* Fill empty slots to maintain grid alignment */}
                    {Array.from({ length: Math.max(0, 4 - category.skills.length) }).map((_, emptyIndex) => (
                      <div key={`${category.title}-empty-${emptyIndex}`} className="h-28 opacity-0"></div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex justify-center mt-16"
        >
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
}
