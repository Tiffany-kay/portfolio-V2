import { motion } from 'framer-motion';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode } = useTheme();
  const navItems = [
    { name: 'Origin', href: '#hero' },
    { name: 'Lore', href: '#about' },
    { name: 'Spells', href: '#skills' },
    { name: 'Artifacts', href: '#projects' },
    { name: 'Challenges', href: '#labs' },
    { name: 'Contact', href: '#contact' },
    { name: 'Log', href: '#blog' }
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b transition-all duration-500 ${
        isDarkMode 
          ? 'bg-black/80 border-pink-500/30' 
          : 'bg-white/80 border-purple-400/30'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">        <div className="flex items-center justify-between">
          {/* Left Side - Logo + Theme Toggle */}
          <div className="flex items-center gap-4">
            <motion.div
              className={`text-xl font-orbitron font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-pink-400' : 'text-purple-600'
              }`}
              whileHover={{ scale: 1.05, textShadow: isDarkMode ? "0 0 10px #ff5ec3" : "0 0 10px #7c3aed" }}
            >
              TG.exe
            </motion.div>

            {/* Theme Toggle - Now on left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <ThemeToggle />
            </motion.div>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`transition-colors font-grotesk relative group cursor-pointer px-3 py-2 rounded-md border border-transparent ${
                  isDarkMode
                    ? 'text-cyan-400 hover:text-pink-400 hover:bg-pink-400/10 hover:border-pink-400/30'
                    : 'text-purple-600 hover:text-emerald-600 hover:bg-emerald-400/10 hover:border-emerald-400/30'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isDarkMode ? 'bg-pink-400' : 'bg-emerald-600'
                }`} />
              </motion.a>
            ))}
          </div>

          {/* Right Side - Mobile Menu */}
          <div className="flex items-center">
            {/* Mobile Menu Button */}
            <motion.button
              className={`md:hidden transition-colors ${
                isDarkMode ? 'text-cyan-400 hover:text-pink-400' : 'text-purple-600 hover:text-emerald-600'
              }`}
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-6 flex flex-col justify-around">
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="pt-4 pb-2 space-y-3">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}                className={`block transition-colors font-grotesk py-3 px-4 cursor-pointer rounded-md border border-transparent ${
                  isDarkMode
                    ? 'text-cyan-400 hover:text-pink-400 hover:bg-pink-400/10 hover:border-pink-400/30'
                    : 'text-purple-600 hover:text-emerald-600 hover:bg-emerald-400/10 hover:border-emerald-400/30'
                }`}
                whileHover={{ x: 10 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
