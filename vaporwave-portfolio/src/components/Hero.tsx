'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const Hero = () => {
  const { isDarkMode } = useTheme();  return (
    <section className={`relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6 py-16 transition-all duration-500 ${
      isDarkMode ? 'text-white' : 'text-gray-800'
    } container`}>
      <div className={`absolute inset-0 transition-all duration-500 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-green-500 via-green-400 via-purple-500 to-blue-600' 
          : 'bg-gradient-to-br from-emerald-200 via-purple-200 to-pink-200'
      }`} />
      <div className={`absolute w-full h-full bg-[radial-gradient(#FF6EC7_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none animate-pulse z-0 ${
        !isDarkMode && 'opacity-5'
      }`} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10"
      >        <div className={`w-32 h-32 rounded-full border-4 shadow-xl animate-float bg-white overflow-hidden mb-6 transition-all duration-300 ${
          isDarkMode ? 'border-cyan-400' : 'border-purple-400'
        }`}>
          <Image
            src="/pnp.png"
            alt="Tiffany Gathoni"
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className={`mt-4 text-4xl md:text-6xl font-orbitron drop-shadow-lg font-bold transition-colors duration-300 ${
          isDarkMode ? 'text-pink-400' : 'text-purple-600'
        }`}>
          Tiffany Gathoni
        </h1>        <p className={`mt-2 text-lg md:text-xl font-vt323 transition-colors duration-300 ${
          isDarkMode ? 'text-cyan-400' : 'text-emerald-600'
        }`}>
          Frontend Developer | AI enthusiast and developer | Cloud Professional under Training |Tech Alchemist | Digital Dreamer
        </p>
        <p className={`italic text-sm mt-1 transition-colors duration-300 ${
          isDarkMode ? 'text-blue-300' : 'text-emerald-500'
        }`}>&quot;Code like a rebel, dream like a poet.&quot;</p>
      </motion.div>      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="flex flex-col items-center gap-6 mt-6 z-10"
      >        {/* View Resume Button */}
        <motion.a
          href="/Tiffany-Gathoni-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-8 py-3 font-grotesk rounded-full shadow-lg transition-all hover:scale-105 font-semibold border-2 relative overflow-hidden group ${
            isDarkMode
              ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:shadow-cyan-400/50 border-cyan-200/50 hover:border-cyan-300/70'
              : 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:shadow-purple-500/50 border-purple-200/50 hover:border-purple-300/70'
          }`}
          whileHover={{ y: -2, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${
            isDarkMode ? 'bg-gradient-to-r from-pink-400 to-cyan-400' : 'bg-gradient-to-r from-emerald-400 to-purple-400'
          }`} />
          <span className="relative z-10 flex items-center gap-2">
            📄 View My Resume
          </span>
        </motion.a>

        {/* Enhanced Hire Me Button */}
        <motion.a
          href="mailto:tiffanywanjiku69@gmail.com" 
          className={`px-10 py-4 font-grotesk rounded-full shadow-2xl transition-all hover:scale-110 font-bold text-lg border-2 relative overflow-hidden group ${
            isDarkMode 
              ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white hover:shadow-pink-500/50 border-white/20 hover:border-white/40'
              : 'bg-gradient-to-r from-emerald-500 via-purple-500 to-blue-500 text-white hover:shadow-emerald-500/50 border-emerald-200/50 hover:border-emerald-300/70'
          }`}
          whileHover={{ y: -3, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${
            isDarkMode ? 'bg-gradient-to-r from-cyan-400 to-pink-400' : 'bg-gradient-to-r from-indigo-400 to-purple-400'
          }`} />
          <span className="relative z-10 flex items-center gap-2">
            ✨ Hire Me ✨
          </span>
        </motion.a>

        {/* View Projects Button */}
        <motion.a 
          href="#projects"          className={`relative px-8 py-3 font-grotesk border-2 rounded-full overflow-hidden group font-semibold transition-colors ${
            isDarkMode
              ? 'text-cyan-400 border-cyan-400 hover:text-white'
              : 'text-emerald-600 border-emerald-600 hover:text-white'
          }`}
          whileHover={{ y: -2, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >          <span className={`absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-20 ${
            isDarkMode ? 'bg-cyan-400' : 'bg-emerald-600'
          }`} />
          <span className="relative z-10">View Projects</span>
        </motion.a>{/* Social Links */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-8 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >          <motion.a
            href="https://github.com/Tiffany-kay"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors text-sm font-grotesk px-3 py-2 border rounded-full backdrop-blur-sm ${
              isDarkMode
                ? 'text-cyan-400 hover:text-pink-400 border-cyan-400/30 hover:border-pink-400/50 bg-black/20'
                : 'text-purple-600 hover:text-emerald-600 border-purple-400/30 hover:border-emerald-400/50 bg-white/20'
            }`}
            whileHover={{ scale: 1.1, y: -2 }}
          >
            🔗 GitHub
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/tiffany-gathoni-51358b352"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors text-sm font-grotesk px-3 py-2 border rounded-full backdrop-blur-sm ${
              isDarkMode
                ? 'text-cyan-400 hover:text-pink-400 border-cyan-400/30 hover:border-pink-400/50 bg-black/20'
                : 'text-purple-600 hover:text-emerald-600 border-purple-400/30 hover:border-emerald-400/50 bg-white/20'
            }`}
            whileHover={{ scale: 1.1, y: -2 }}
          >
            💼 LinkedIn
          </motion.a>          <motion.a
            href="https://twitter.com/tifkayq"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors text-sm font-grotesk px-3 py-2 border rounded-full backdrop-blur-sm ${
              isDarkMode
                ? 'text-cyan-400 hover:text-pink-400 border-cyan-400/30 hover:border-pink-400/50 bg-black/20'
                : 'text-purple-600 hover:text-emerald-600 border-purple-400/30 hover:border-emerald-400/50 bg-white/20'
            }`}
            whileHover={{ scale: 1.1, y: -2 }}
          >
            Twitter
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;