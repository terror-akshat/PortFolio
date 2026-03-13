import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Heart,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code2,
  Calendar,
  Clock,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#summary" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "40guptaaman@gmail.com",
    href: "mailto:akshat.agarwal9292@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8887468010",
    href: "tel:+918887468010",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kanpur, India",
    href: "#",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/fussionAman",
    color: "hover:text-purple-400",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/aman-gupta-9b9394260/",
    color: "hover:text-blue-400",
  },
  {
    name: "LeetCode",
    icon: Code2,
    href: "https://leetcode.com/u/gupta_aman107/",
    color: "hover:text-orange-400",
  },
];

// Floating particles for animated background
const FooterParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`footer-particle-${i}`}
          className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: Math.random() * 4,
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

export function Footer() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-slate-950 border-t border-white/10"
      ref={ref}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent" />
        <FooterParticles />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="space-y-6">
                {/* Logo */}
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/25"
                  >
                    <span className="text-white font-orbitron font-bold text-xl">
                      AG
                    </span>
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-orbitron font-bold text-white">
                      AMAN GUPTA
                    </h3>
                    <p className="text-slate-400 font-rajdhani">
                      Full Stack Developer & Problem Solver
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 font-rajdhani leading-relaxed max-w-md">
                  Passionate about creating innovative digital solutions that
                  make a difference. Specializing in modern web technologies
                  with a focus on user experience and performance.
                </p>

                {/* Status */}
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-green-400 font-rajdhani font-medium">
                    Available for new opportunities
                  </span>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 transition-colors duration-300 ${social.color} hover:border-current/30 hover:bg-current/10`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-lg font-orbitron font-bold text-white mb-6">
                Quick Links
              </h4>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
                    whileHover={{ x: 5 }}
                    className="block text-slate-400 hover:text-white transition-colors duration-300 font-rajdhani hover:text-blue-400"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h4 className="text-lg font-orbitron font-bold text-white mb-6">
                Get In Touch
              </h4>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <motion.a
                      key={contact.label}
                      href={contact.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: -5 }}
                      className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-300 group"
                    >
                      <IconComponent className="w-4 h-4 text-blue-400 group-hover:text-blue-300" />
                      <div>
                        <p className="text-xs font-rajdhani text-slate-500">
                          {contact.label}
                        </p>
                        <p className="font-rajdhani text-sm">{contact.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-rajdhani font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <ArrowUp className="w-4 h-4" />
                Back to Top
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-white/10"
        >
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <div className="flex items-center gap-2 text-slate-400 font-rajdhani">
                <span>© {currentYear} Aman Gupta.</span>
                <span>Crafted with</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span>using React & TypeScript</span>
              </div>

              {/* Last Updated */}
              <div className="flex items-center gap-4 text-xs font-rajdhani text-slate-500">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>Last updated: March 2026</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
