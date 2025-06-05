import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

const Contact = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className={`min-h-screen px-6 py-2 flex flex-col items-center text-center relative overflow-hidden transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-green-500/20 via-green-400/15 via-purple-500/25 to-blue-600/20 text-white' 
        : 'bg-gradient-to-br from-emerald-100/50 via-purple-100/40 to-pink-100/50 text-gray-800'
    }`}>
      {/* Background Effects */}
      <div className={`absolute inset-0 bg-[radial-gradient(#FF6EC7_1px,transparent_1px)] [background-size:40px_40px] opacity-5 animate-pulse ${
        !isDarkMode && 'opacity-3'
      }`} />
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10"
      >
        <h2 className={`text-4xl md:text-5xl font-orbitron mb-8 drop-shadow-lg font-bold transition-colors duration-300 ${
          isDarkMode ? 'text-pink-400' : 'text-purple-600'
        }`}>
          Summoning Circle
        </h2>        <p className={`max-w-lg mb-6 text-lg font-grotesk transition-colors duration-300 ${
          isDarkMode ? 'text-cyan-400' : 'text-emerald-600'
        }`}>
          Need a pixel witch for your next spell? Whether it&apos;s a website, a collab, or just a vibe check &mdash; I&apos;m one incantation away.
        </p>
      </motion.div><motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col items-center gap-6 text-lg z-10"
      >          <motion.a
          href="mailto:tiffanywanjiku69@gmail.com"          className={`px-8 py-4 font-grotesk rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 font-semibold ${
            isDarkMode 
              ? 'bg-gradient-to-r from-pink-400 to-cyan-400 text-black' 
              : 'bg-gradient-to-r from-emerald-500 to-purple-500 text-white'
          }`}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          ✨ Cast Email Spell ✨
        </motion.a>
        
        <div className="flex flex-wrap items-center justify-center gap-8">
          <motion.a
            href="https://github.com/Tiffany-kay"
            target="_blank"
            rel="noopener noreferrer"            className={`relative px-6 py-3 font-grotesk border rounded-full overflow-hidden group backdrop-blur-sm ${
              isDarkMode
                ? 'text-cyan-400 border-cyan-400 bg-black/20'
                : 'text-emerald-600 border-emerald-600 bg-white/20'
            }`}
            whileHover={{ y: -5 }}
          >
            <span className={`absolute inset-0 opacity-10 blur-md transition-all duration-500 group-hover:opacity-30 ${
              isDarkMode ? 'bg-cyan-400' : 'bg-emerald-600'
            }`} />
            <span className="relative z-10">🔗 GitHub</span>
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/tiffany-gathoni-51358b352"
            target="_blank"
            rel="noopener noreferrer"
            className={`relative px-6 py-3 font-grotesk border rounded-full overflow-hidden group backdrop-blur-sm ${
              isDarkMode
                ? 'text-blue-400 border-blue-400 bg-black/20'
                : 'text-indigo-600 border-indigo-600 bg-white/20'
            }`}
            whileHover={{ y: -5 }}
          >
            <span className={`absolute inset-0 opacity-10 blur-md transition-all duration-500 group-hover:opacity-30 ${
              isDarkMode ? 'bg-blue-400' : 'bg-indigo-600'
            }`} />
            <span className="relative z-10">💼 LinkedIn</span>
          </motion.a>
        </div>
      </motion.div>

      {/* Floating Elements */}      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-pink-400 rounded-full opacity-60"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-6 h-6 bg-cyan-400 rounded-full opacity-40"
        animate={{ y: [10, -15, 10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};
export default Contact;