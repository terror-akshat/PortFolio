import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Code2, Lightbulb, Rocket } from 'lucide-react';

export function Summary() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const stats = [
    { number: "700+", label: "LeetCode Problems", icon: Brain },
    { number: "5+", label: "Projects Built", icon: Code2 },
    { number: "15+", label: "Technologies", icon: Lightbulb },
    { number: "100%", label: "Passion", icon: Rocket }
  ];

  const highlights = [
    {
      icon: Brain,
      title: "Problem Solver",
      description: "700+ LeetCode problems solved with algorithmic thinking",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code2,
      title: "Full-Stack Developer",
      description: "MERN stack expertise with modern web technologies",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Lightbulb,
      title: "AI Enthusiast",
      description: "Machine learning and artificial intelligence applications",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Rocket,
      title: "Innovation Driven",
      description: "Building futuristic solutions for real-world challenges",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 dark:from-gray-900/50 dark:via-gray-900 dark:to-gray-800/50" ref={ref}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            x: [0, -120, 0],
            y: [0, 80, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-60 right-20 w-40 h-40 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            x: [0, 80, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-1/2 w-28 h-28 bg-gradient-to-r from-pink-400/10 to-yellow-400/10 rounded-full blur-xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with enhanced animation */}
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
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 relative">
              ABOUT ME
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-lg -z-10 rounded-lg"
              />
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Passionate about creating innovative solutions through code
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.8,
                  delay: 0.6 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="text-center group"
              >
                <div className="card-glow p-6 rounded-2xl backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-gray-700/30 hover:border-white/40 dark:hover:border-gray-600/50 transition-all duration-300 group-hover:scale-105">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center"
                  >
                    <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Enhanced Summary Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="card-accent-glow rounded-3xl backdrop-blur-lg bg-white/20 dark:bg-gray-800/20 border border-white/30 dark:border-gray-700/30 p-8 relative overflow-hidden">
              {/* Card background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative z-10"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-3"
                  />
                  Who Am I?
                </h3>
                
                <div className="space-y-6 text-lg leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="text-gray-700 dark:text-gray-300"
                  >
                    <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Innovative Software Developer
                    </span> with proficiency in C++, Java, and Python, experienced in developing scalable applications using the MERN stack. 
                    Passionate about leveraging technology to solve complex problems and create meaningful impact.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="text-gray-600 dark:text-gray-400"
                  >
                    With a strong foundation in computer science fundamentals and hands-on experience in 
                    full-stack development, I bring creative solutions to challenging technical problems. 
                    My journey includes building innovative projects ranging from face detection systems to 
                    comprehensive web applications.
                  </motion.p>
                </div>

                {/* Interactive CTA */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="mt-8"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center group"
                  >
                    Let's Connect
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="ml-2 group-hover:ml-3 transition-all duration-200"
                    >
                      →
                    </motion.span>
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
                  animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.6 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="group cursor-pointer"
                >
                  <div className="card-glow h-full p-6 text-center rounded-2xl backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-gray-700/30 hover:border-white/40 dark:hover:border-gray-600/50 transition-all duration-500 relative overflow-hidden">
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10 space-y-4">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${highlight.color} flex items-center justify-center shadow-lg group-hover:shadow-xl`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                          {highlight.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>

                    {/* Shine effect */}
                    <motion.div
                      initial={{ x: '-100%', opacity: 0 }}
                      whileHover={{ x: '100%', opacity: [0, 1, 0] }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex justify-center mt-20"
        >
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.2 
                }}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
