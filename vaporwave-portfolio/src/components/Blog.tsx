import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

const blogPosts = [
  {
    title: 'On Failing Forward',
    date: 'June 2024',
    content: 'Debugging at 3AM while my cat judged me from the shadows. Progress is messy, and that\'s okay. Every error is a lesson wrapped in frustration.',
    mood: 'Contemplative'
  },
  {
    title: 'I am not a robot (yet)',
    date: 'May 2024',
    content: 'The day I made my first animation loop, I cried. Code is magic we learn to cast, and every function is a spell waiting to be perfected.',
    mood: 'Emotional'
  },
  {
    title: 'Coffee-Driven Development',
    date: 'April 2024',
    content: 'Built an entire component library fueled by nothing but caffeine and spite. Sometimes the best code comes from the most chaotic moments.',
    mood: 'Energetic'
  }
];

const Blog = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className={`min-h-screen font-mono px-6 py-2 transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-green-500/20 via-green-400/15 via-purple-500/25 to-blue-600/20 text-white' 
        : 'bg-gradient-to-br from-emerald-100/50 via-purple-100/40 to-pink-100/50 text-gray-800'
    }`}>
      <motion.h2
        className={`text-4xl md:text-5xl font-orbitron text-center mb-8 drop-shadow-lg font-bold transition-colors duration-300 ${
          isDarkMode ? 'text-pink-400' : 'text-purple-600'
        }`}
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Digital Scrolls
      </motion.h2>
      
      <div className="max-w-4xl mx-auto space-y-6">
        {blogPosts.map((post, i) => (          <motion.article
            key={post.title}
            className="bg-gradient-to-r from-gray-800/50 via-green-900/30 to-gray-900/50 p-5 rounded-lg border-l-4 border-pink-400 shadow-2xl relative overflow-hidden group backdrop-blur-sm"
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Glow effect */}            <div className="absolute inset-0 bg-gradient-to-r from-pink-400/5 via-green-400/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10">              <div className="flex justify-between items-start mb-3">
                <h3 className={`text-xl md:text-2xl font-bold font-grotesk transition-colors duration-300 ${
                  isDarkMode ? 'text-cyan-400' : 'text-emerald-600'
                }`}>{post.title}</h3>
                <div className="text-right">
                  <div className={`text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-blue-400' : 'text-purple-600'
                  }`}>{post.date}</div>
                  <div className={`text-xs italic transition-colors duration-300 ${
                    isDarkMode ? 'text-pink-400' : 'text-emerald-500'
                  }`}>{post.mood}</div>
                </div>
              </div>
              
              <p className={`leading-relaxed font-vt323 text-lg transition-colors duration-300 ${
                isDarkMode ? 'text-green-300' : 'text-emerald-700'
              }`}>
                {post.content}
              </p>
              
              {/* Terminal-style cursor */}              <motion.span
                className={`inline-block w-3 h-5 ml-1 transition-colors duration-300 ${
                  isDarkMode ? 'bg-cyan-400' : 'bg-emerald-600'
                }`}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
          </motion.article>
        ))}
          {/* Coming Soon Section */}
        <motion.div
          className="text-center mt-8 p-6 border-2 border-dashed border-pink-400/30 rounded-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        ><h3 className="text-2xl font-orbitron text-pink-400 mb-4">More Transmissions Incoming...</h3>
          <p className="text-cyan-400 font-grotesk">
            Follow my journey as I document the highs, lows, and caffeinated moments of a tech sorceress in training.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;