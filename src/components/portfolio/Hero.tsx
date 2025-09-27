import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink, Code, Sparkles, Zap, Cpu, Database, Globe, ChevronDown } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

// Floating orbs for background animation
const FloatingOrb = ({ delay = 0, duration = 20, size = 200, color = "blue" }: {
  delay?: number;
  duration?: number;
  size?: number;
  color?: string;
}) => (
  <motion.div
    className={`absolute rounded-full bg-gradient-to-r ${
      color === "blue" ? "from-blue-500/20 to-cyan-500/20" :
      color === "purple" ? "from-purple-500/20 to-pink-500/20" :
      color === "green" ? "from-green-500/20 to-emerald-500/20" :
      "from-yellow-500/20 to-orange-500/20"
    } blur-3xl`}
    style={{ width: size, height: size }}
    animate={{
      x: [0, 100, -50, 50, 0],
      y: [0, -80, 120, -60, 0],
      scale: [1, 1.2, 0.8, 1.1, 1],
      opacity: [0.3, 0.6, 0.4, 0.8, 0.3],
    }}
    transition={{
      duration,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
      delay,
    }}
  />
);

// Animated code symbols
const CodeSymbols = () => {
  const symbols = ['<>', '{...}', '[]', '()', '=>', '&&', '||', '===', '!=', '++'];
  
  return (
    <div className="absolute inset-0 pointer-events-none">
      {symbols.map((symbol, i) => (
        <motion.div
          key={`symbol-${i}`}
          className="absolute text-blue-400/20 font-mono text-xl font-bold"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.5, 0],
            scale: [0, 1, 0],
            x: [0, Math.random() * 400 - 200],
            y: [0, Math.random() * 400 - 200],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "loop",
            delay: i * 1.2,
            ease: "easeInOut",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          {symbol}
        </motion.div>
      ))}
    </div>
  );
};

// Particle system
const Particles = () => (
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={`particle-${i}`}
        className="absolute w-1 h-1 bg-white/40 rounded-full"
        animate={{
          x: [0, Math.random() * 100 - 50],
          y: [0, Math.random() * -200],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          repeatType: "loop",
          delay: Math.random() * 5,
          ease: "easeOut",
        }}
        style={{
          left: `${Math.random() * 100}%`,
          top: `100%`,
        }}
      />
    ))}
  </div>
);

// Tech icons orbiting around
const TechOrbit = () => {
  const techIcons = [
    { icon: Code, color: "text-blue-400", delay: 0 },
    { icon: Database, color: "text-green-400", delay: 2 },
    { icon: Globe, color: "text-purple-400", delay: 4 },
    { icon: Cpu, color: "text-orange-400", delay: 6 },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative w-96 h-96">
        {techIcons.map((tech, i) => {
          const IconComponent = tech.icon;
          return (
            <motion.div
              key={`tech-${i}`}
              className="absolute"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                delay: tech.delay,
              }}
              style={{
                left: "50%",
                top: "50%",
                transformOrigin: "0 150px",
                marginLeft: "-12px",
                marginTop: "-12px",
              }}
            >
              <motion.div
                animate={{
                  rotate: [0, -360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  delay: tech.delay,
                }}
                className={`w-6 h-6 ${tech.color} opacity-60`}
              >
                <IconComponent className="w-full h-full" />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// Typing animation effect
const TypingText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex(prev => prev + 1);
        } else {
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, currentIndex, delay]);

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="text-blue-400"
      >
        |
      </motion.span>
    </span>
  );
};

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const yTransform = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToNext = () => {
    document.getElementById('summary')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(34,197,94,0.1),transparent_50%)]" />
        
        {/* Floating orbs */}
        <FloatingOrb delay={0} duration={25} size={300} color="blue" />
        <FloatingOrb delay={5} duration={30} size={200} color="purple" />
        <FloatingOrb delay={10} duration={20} size={150} color="green" />
        <FloatingOrb delay={15} duration={35} size={250} color="orange" />
        
        {/* Particles */}
        <Particles />
        
        {/* Code symbols */}
        <CodeSymbols />
      </div>

      {/* Tech orbit positioned on the right side */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <TechOrbit />
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          style={{ y: yTransform, opacity: opacityTransform }}
          className="grid lg:grid-cols-12 gap-8 items-center min-h-[85vh]"
        >
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
          {/* Main Title with Advanced Animation */}
          <div className="space-y-3">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-orbitron font-bold leading-[1.1]"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                type: "spring",
                stiffness: 120,
                damping: 15
              }}
            >
              <motion.span 
                className="block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                HARIOM
              </motion.span>
              <motion.span 
                className="block text-white"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                ASTHANA
              </motion.span>
            </motion.h1>

            {/* Animated Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-lg md:text-xl lg:text-2xl font-rajdhani font-light text-slate-300"
            >
              <span>Full Stack Developer & AI Enthusiast</span>
            </motion.div>
          </div>

          {/* Tech Stack with Glowing Effects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3 max-w-4xl"
          >
            {[
              { name: "React", color: "from-cyan-400 to-blue-500" },
              { name: "TypeScript", color: "from-blue-400 to-purple-500" },
              { name: "Python", color: "from-green-400 to-emerald-500" },
              { name: "Node.js", color: "from-green-400 to-lime-500" },
              { name: "MongoDB", color: "from-emerald-400 to-teal-500" },
              { name: "AI/ML", color: "from-purple-400 to-pink-500" },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 1.4 + index * 0.08,
                  type: "spring",
                  stiffness: 200 
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                className={`px-4 py-2 rounded-lg bg-gradient-to-r ${tech.color} text-white font-rajdhani font-medium cursor-pointer shadow-lg hover:shadow-xl text-sm transition-shadow`}
              >
                {tech.name}
              </motion.div>
            ))}
          </motion.div>

          {/* Animated Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="max-w-2xl"
          >
            <p className="text-base md:text-lg font-rajdhani text-slate-300 leading-relaxed">
              Crafting innovative digital experiences with cutting-edge technology. 
              Transforming ideas into reality through code, creativity, and passion for excellence.
            </p>
          </motion.div>

          {/* CTA Buttons with Advanced Hover Effects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="default"
                size="lg"
                className="group relative px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-rajdhani font-medium text-base border-0 shadow-xl hover:shadow-2xl transition-all duration-300"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="relative flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:scale-110 group-hover:rotate-12" />
                  Explore Projects
                  <Zap className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline"
                size="lg"
                className="group px-6 py-3 bg-transparent border-2 border-white/20 hover:border-white/40 text-white hover:text-white font-rajdhani font-medium text-base backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 transition-transform group-hover:scale-110 group-hover:-translate-y-1" />
                  Download Resume
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-xs"
                  >
                    ⚡
                  </motion.div>
                </div>
              </Button>
            </motion.div>
          </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-5 hidden lg:flex flex-col items-center justify-center space-y-8"
          >
            {/* Large Visual Element */}
            <div className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-xl border border-white/10 flex items-center justify-center">
              {/* Inner rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="w-56 h-56 xl:w-64 xl:h-64 rounded-full border-2 border-dashed border-blue-400/30"
              />
              
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.4, 0.7, 0.4]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-28 h-28 xl:w-32 xl:h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 opacity-20"
                />
              </div>
              
              {/* Floating tech icons around the circle */}
              <div className="absolute inset-0">
                {[Code, Database, Globe, Cpu].map((Icon, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-6 h-6 xl:w-8 xl:h-8 text-blue-400"
                    style={{
                      left: `${50 + 35 * Math.cos((i * 90) * Math.PI / 180)}%`,
                      top: `${50 + 35 * Math.sin((i * 90) * Math.PI / 180)}%`,
                      transform: "translate(-50%, -50%)"
                    }}
                    animate={{
                      y: [0, -8, 0],
                      opacity: [0.6, 1, 0.6],
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.4,
                      ease: "easeInOut"
                    }}
                  >
                    <Icon className="w-full h-full drop-shadow-lg" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats or highlights */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="grid grid-cols-2 gap-4 w-full max-w-sm"
            >
              {[
                { number: "5+", label: "Projects" },
                { number: "3+", label: "Years Exp" },
                { number: "15+", label: "Technologies" },
                { number: "100%", label: "Dedication" }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.2 + i * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                >
                  <motion.div 
                    className="text-xl xl:text-2xl font-orbitron font-bold text-blue-400"
                    animate={{ 
                      textShadow: ["0 0 0px rgba(59, 130, 246, 0.5)", "0 0 20px rgba(59, 130, 246, 0.8)", "0 0 0px rgba(59, 130, 246, 0.5)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm font-rajdhani text-slate-400 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 4 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        onClick={scrollToNext}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors group"
        >
          <span className="text-sm font-rajdhani">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
            <motion.div 
              className="w-1 h-3 bg-current rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <ChevronDown className="w-5 h-5 opacity-60 group-hover:opacity-100" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Ambient light effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>
    </section>
  );
}