import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative p-3 rounded-full border-2 transition-all duration-300 ${
        isDarkMode 
          ? 'border-cyan-400/50 bg-black/20 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10' 
          : 'border-purple-400/50 bg-white/20 text-purple-600 hover:border-purple-400 hover:bg-purple-400/10'
      } backdrop-blur-sm`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDarkMode ? 0 : 180 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex items-center justify-center w-6 h-6"
      >
        {isDarkMode ? (
          // Moon icon for dark mode
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            🌙
          </motion.div>
        ) : (
          // Sun icon for light mode  
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            ☀️
          </motion.div>
        )}
      </motion.div>
      
      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-full blur-md transition-opacity duration-300 ${
        isDarkMode 
          ? 'bg-cyan-400/20 opacity-0 group-hover:opacity-50' 
          : 'bg-purple-400/20 opacity-0 group-hover:opacity-50'
      }`} />
    </motion.button>
  );
};

export default ThemeToggle;
