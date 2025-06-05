import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

const AboutMe = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className={`min-h-screen px-6 py-2 flex flex-col items-center text-center relative overflow-hidden transition-all duration-500 ${
      isDarkMode 
        ? 'text-white bg-gradient-to-br from-green-500/20 via-green-400/15 via-purple-500/25 to-blue-600/20' 
        : 'text-gray-800 bg-gradient-to-br from-emerald-100/50 via-purple-100/40 to-pink-100/50'
    }`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,110,199,0.1)_0%,transparent_70%)] pointer-events-none" />
      
      <motion.h2
        className={`text-3xl md:text-5xl font-orbitron mb-6 font-bold relative z-10 transition-colors duration-300 ${
          isDarkMode ? 'text-pink-400' : 'text-purple-600'
        }`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Origin Lore
      </motion.h2>      <motion.p
        className={`max-w-3xl text-lg font-grotesk leading-relaxed relative z-10 transition-colors duration-300 ${
          isDarkMode ? 'text-cyan-400' : 'text-emerald-600'
        }`}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Dynamic and driven tech sorceress with a passion for building stylish digital experiences.
        I specialize in frontend development using React, TailwindCSS, and TypeScript&mdash;and I&apos;m slowly mastering backend sorcery with Flask, Node, and Django.
        <br /><br />
        I&apos;ve tutored beginners, built eCommerce platforms, and created IoT projects like Smart Waste Detection systems. Currently working on a Gen Z fashion app called Drip Check and obsessed with AI-driven design.
        <br /><br />
        Desperation isn&apos;t weakness. It&apos;s a spark. And I&apos;m here to set the web ablaze.
      </motion.p>
    </section>
  );
};

export default AboutMe;
