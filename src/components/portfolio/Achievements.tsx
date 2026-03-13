import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Trophy,
  Star,
  Users,
  Target,
  Award,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const achievements = [
  {
    title: "Top 100 – Myntra HackerRamp 2025",
    description: "National hackathon recognizing innovative digital solutions",
    icon: Trophy,
    stats: "Top 100",
    year: "2025",
    color: "from-yellow-400 to-orange-500",
    shadowColor: "shadow-yellow-500/25",
  },
  {
    title: "Amazon ML Challenge",
    description: "Ranked in the Top 15% among 7100+ participants",
    icon: Target,
    stats: "Top 15%",
    year: "2025",
    color: "from-blue-400 to-purple-500",
    shadowColor: "shadow-blue-500/25",
  },
  {
    title: "Adobe India Hackathon",
    description: "Secured a position in the Top 100  participants",
    icon: Star,
    stats: "Top 100",
    year: "2025",
    color: "from-pink-400 to-rose-500",
    shadowColor: "shadow-pink-500/25",
  },
  {
    title: "Won 1st prize in IOT Event",
    description: "Secured a position in the Top 100 participants",
    icon: Star,
    stats: "1",
    year: "2023",
    color: "from-blue-400 to-rose-500",
    shadowColor: "shadow-pink-500/25",
  },
  {
    title: "Ignitia Tech Event Lead",
    description: "Achieved the highest student participation among all events",
    icon: Users,
    stats: "Event Lead",
    year: "2024",
    color: "from-green-400 to-emerald-500",
    shadowColor: "shadow-green-500/25",
  },
  {
    title: "LeetCode Problems",
    description: "Consistent algorithmic problem solving",
    icon: Target,
    stats: "800+",
    year: "Ongoing",
    color: "from-indigo-400 to-cyan-500",
    shadowColor: "shadow-indigo-500/25",
  },
  {
    title: "5★ HackerRank (Java)",
    description: "Demonstrated strong proficiency in Java programming",
    icon: Star,
    stats: "4★",
    year: "2024",
    color: "from-orange-400 to-amber-500",
    shadowColor: "shadow-orange-500/25",
  },
];

export function Achievements() {
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
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 dark:via-blue-400/5 to-transparent"></div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-20 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-30"
        />
        <motion.div
          animate={{
            rotate: [0, 180, 360],
            y: [0, -20, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-1/4 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-15"
        />
      </div>

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
              ACHIEVEMENTS
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium"
          >
            Recognition and milestones in technical excellence
          </motion.p>
        </motion.div>

        {/* Achievements Grid - No Boxes */}
        <div className="space-y-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 80, rotateX: -15 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{
                  duration: 1,
                  delay: 0.5 + index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                className={`relative flex items-center justify-center ${
                  isEven ? "flex-row" : "flex-row-reverse"
                } gap-8 md:gap-16`}
              >
                {/* Content Side */}
                <motion.div
                  className={`flex-1 max-w-md ${isEven ? "text-left" : "text-right"}`}
                  whileHover={{ scale: 1.05, x: isEven ? 10 : -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Title and Year */}
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                  >
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                      {achievement.title}
                    </h3>
                    <span className="inline-block px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                      {achievement.year}
                    </span>
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed font-medium"
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  >
                    {achievement.description}
                  </motion.p>

                  {/* Progress Bar */}
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={inView ? { opacity: 1, scaleX: 1 } : {}}
                    transition={{ duration: 1.2, delay: 1 + index * 0.1 }}
                    className={`h-1 bg-gradient-to-r ${achievement.color} rounded-full ${achievement.shadowColor} shadow-lg`}
                    style={{ transformOrigin: isEven ? "left" : "right" }}
                  />
                </motion.div>

                {/* Central Icon and Stats */}
                <motion.div
                  className="flex flex-col items-center space-y-4"
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                  transition={{
                    duration: 1,
                    delay: 0.6 + index * 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 400 },
                  }}
                >
                  {/* Icon with glow */}
                  <div
                    className={`relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center ${achievement.shadowColor} shadow-2xl`}
                  >
                    <IconComponent className="w-10 h-10 md:w-12 md:h-12 text-white" />

                    {/* Pulsing ring */}
                    <motion.div
                      animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${achievement.color} opacity-30`}
                    />
                  </div>

                  {/* Stats */}
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  >
                    <div
                      className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}
                    >
                      {achievement.stats}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Connecting Line */}
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={inView ? { scaleX: 1, opacity: 0.4 } : {}}
                  transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                  className={`absolute top-1/2 transform -translate-y-1/2 h-0.5 bg-gradient-to-r ${achievement.color} hidden lg:block z-0`}
                  style={{
                    left: isEven ? "calc(40% + 2rem)" : "50%",
                    right: isEven ? "50%" : "calc(40% + 2rem)",
                    transformOrigin: isEven ? "left" : "right",
                  }}
                />

                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={`particle-${achievement.title}-${i}`}
                      animate={{
                        y: [0, -20, 0],
                        x: [0, Math.random() * 40 - 20, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        delay: i * 0.5 + index * 0.3,
                        ease: "easeInOut",
                      }}
                      className={`absolute w-2 h-2 bg-gradient-to-r ${achievement.color} rounded-full`}
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${30 + i * 20}%`,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 2 }}
          className="mt-32 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="space-y-3"
            >
              <motion.div className="w-16 h-16 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/25">
                <Trophy className="w-8 h-8 text-white" />
              </motion.div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                4
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                Major Awards
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="space-y-3"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/25"
              >
                <Star className="w-8 h-8 text-white" />
              </motion.div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                5★
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                Max Rating
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="space-y-3"
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-16 h-16 mx-auto bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/25"
              >
                <Target className="w-8 h-8 text-white" />
              </motion.div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                700+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                Problems Solved
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="space-y-3"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-16 h-16 mx-auto bg-gradient-to-r from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/25"
              >
                <TrendingUp className="w-8 h-8 text-white" />
              </motion.div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                0.41%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                Top Percentile
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
