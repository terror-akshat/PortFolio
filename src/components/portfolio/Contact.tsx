import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Github, Linkedin, Code, MapPin, Send, MessageCircle, Calendar, ExternalLink, Heart, Coffee } from 'lucide-react';

const contactInfo = [
  {
    label: "Email",
    value: "akshat.agarwal9292@gmail.com",
    href: "mailto:akshat.agarwal9292@gmail.com",
    icon: Mail,
    gradient: "from-red-400 to-pink-400",
    bgGradient: "from-red-500/10 to-pink-500/10",
    borderColor: "border-red-400/30",
    description: "Drop me a line anytime"
  },
  {
    label: "Phone",
    value: "+91 8081310879",
    href: "tel:+918081310879",
    icon: Phone,
    gradient: "from-green-400 to-emerald-400",
    bgGradient: "from-green-500/10 to-emerald-500/10",
    borderColor: "border-green-400/30",
    description: "Let's have a conversation"
  },
  {
    label: "Location",
    value: "Kanpur, India",
    href: "#",
    icon: MapPin,
    gradient: "from-blue-400 to-cyan-400",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-400/30",
    description: "Available for remote work"
  }
];

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/terror-akshat",
    gradient: "from-purple-400 to-indigo-400",
    bgGradient: "from-purple-500/10 to-indigo-500/10",
    borderColor: "border-purple-400/30",
    description: "Code repositories and projects",
    stats: "70+ Repositories"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/akshat-agarwal-55946a27a/",
    gradient: "from-blue-400 to-sky-400",
    bgGradient: "from-blue-500/10 to-sky-500/10",
    borderColor: "border-blue-400/30",
    description: "Professional network",
    stats: "700+ Connections"
  },
  {
    name: "LeetCode",
    icon: Code,
    href: "https://leetcode.com/u/Akshat_CSAI/",
    gradient: "from-orange-400 to-yellow-400",
    bgGradient: "from-orange-500/10 to-yellow-500/10",
    borderColor: "border-orange-400/30",
    description: "Problem solving journey",
    stats: "700+ Problems"
  }
];

// Floating particles for animated background
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`contact-particle-${i}`}
          className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30"
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            opacity: [0.1, 0.6, 0.1],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: Math.random() * 3,
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

export function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="relative py-24 px-4 bg-slate-900/50" ref={ref}>
      {/* Pattern B - Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-pink-950/10 to-slate-900/20" />
        <FloatingParticles />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
            GET IN TOUCH
          </h2>
          <p className="text-xl font-rajdhani text-slate-300 max-w-3xl mx-auto">
            Ready to bring your next project to life? Let's create something extraordinary together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="block group"
                  >
                    <div className={`backdrop-blur-xl bg-white/5 border ${contact.borderColor} rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:border-opacity-50 hover:shadow-2xl hover:shadow-current/10 group-hover:scale-105`}>
                      
                      <div className="flex items-center gap-4">
                        {/* Icon */}
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center shadow-lg shadow-current/20 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-xl font-orbitron font-bold text-white mb-1">
                            {contact.label}
                          </h3>
                          <p className="text-sm font-rajdhani text-slate-400 mb-2">
                            {contact.description}
                          </p>
                          <p className="font-rajdhani font-medium text-slate-200 break-all">
                            {contact.value}
                          </p>
                        </div>

                        {/* Hover indicator */}
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                          <ExternalLink className="w-5 h-5 text-slate-400" />
                        </div>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-orbitron font-bold text-white">
                Connect With Me
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 30 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                      className="block group"
                    >
                      <div className={`backdrop-blur-xl bg-white/5 border ${social.borderColor} rounded-2xl p-4 hover:bg-white/10 transition-all duration-500 hover:border-opacity-50 hover:shadow-2xl hover:shadow-current/10 group-hover:scale-105`}>
                        
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${social.gradient} flex items-center justify-center shadow-lg shadow-current/20 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          
                          <div className="flex-1">
                            <h4 className="font-orbitron font-bold text-white">
                              {social.name}
                            </h4>
                            <p className="text-sm text-slate-400">
                              {social.description}
                            </p>
                          </div>

                          <div className="text-right flex-shrink-0">
                            <p className="text-sm font-rajdhani font-medium text-slate-200 mb-1">
                              {social.stats}
                            </p>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <ExternalLink className="w-4 h-4 text-slate-400" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col space-y-6 h-full"
          >
            {/* Main CTA Card */}
            <div className="backdrop-blur-xl bg-white/5 border border-purple-400/30 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 flex-1 flex flex-col">
              
              {/* Content Section */}
              <div className="flex-1 flex flex-col justify-center items-center text-center space-y-6">
                {/* Animated Icon */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center shadow-2xl shadow-purple-500/30"
                >
                  <MessageCircle className="w-10 h-10 text-white" />
                </motion.div>
                
                {/* Text Content */}
                <div className="space-y-4 max-w-md">
                  <h3 className="text-2xl font-orbitron font-bold text-white">
                    Let's Build Something Amazing
                  </h3>
                  <p className="font-rajdhani text-slate-300 leading-relaxed">
                    I'm passionate about creating innovative solutions and would love to discuss your next project. Whether it's a web application, mobile app, or something entirely new, let's make it happen!
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4 flex-shrink-0">
                <motion.a
                  href="mailto:hariomasthana.cseai.29@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block w-full py-3 px-6 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-rajdhani font-medium text-center hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 inline mr-2" />
                  Send Email
                </motion.a>
                
                <motion.a
                  href="tel:+917678804451"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block w-full py-3 px-6 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-rajdhani font-medium text-center hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 inline mr-2" />
                  Call Now
                </motion.a>
              </div>
            </div>

            {/* Bottom Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Availability Status */}
              <div className="backdrop-blur-xl bg-white/5 border border-green-400/30 rounded-2xl p-4 flex flex-col justify-center h-full">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="font-orbitron font-medium text-green-400 text-sm">Available</span>
                </div>
                <p className="text-xs font-rajdhani text-slate-300 mb-3">
                  Currently accepting new opportunities
                </p>
                <div className="space-y-1 mt-auto">
                  <div className="flex items-center gap-1 text-xs font-rajdhani text-slate-400">
                    <Calendar className="w-3 h-3" />
                    <span>Response: &lt;24h</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-rajdhani text-slate-400">
                    <Coffee className="w-3 h-3" />
                    <span>Always ready</span>
                  </div>
                </div>
              </div>

              {/* Fun Fact */}
              <div className="backdrop-blur-xl bg-white/5 border border-pink-400/30 rounded-2xl p-4 flex flex-col justify-center items-center text-center h-full">
                <div className="flex flex-col items-center justify-center flex-1">
                  <Heart className="w-5 h-5 text-pink-400 mb-2" />
                  <p className="text-xs font-rajdhani text-slate-300 leading-relaxed">
                    "Great projects start with great conversations!"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}