import Navigation from './Navigation';
import { useTheme } from '@/contexts/ThemeContext';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="relative min-h-screen font-spacegrotesk transition-colors duration-500">
      {/* Main gradient background - theme aware */}
      <div className={`fixed inset-0 -z-10 animate-gradient transition-all duration-500 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-green-500/40 via-purple-500/50 to-blue-600/40'
          : 'bg-gradient-to-br from-emerald-200/60 via-purple-200/70 to-indigo-200/60'
      }`} />
      
      {/* Secondary gradient overlay - theme aware */}
      <div className={`fixed inset-0 -z-10 transition-all duration-500 ${
        isDarkMode 
          ? 'bg-gradient-to-tr from-purple-900/30 via-pink-800/20 to-cyan-600/30'
          : 'bg-gradient-to-tr from-purple-100/40 via-pink-100/30 to-cyan-100/40'
      }`} />
      
      {/* Readability layer */}
      <div className={`fixed inset-0 -z-10 transition-all duration-500 ${
        isDarkMode 
          ? 'bg-gradient-to-b from-black/20 via-transparent to-black/40'
          : 'bg-gradient-to-b from-white/10 via-transparent to-white/20'
      }`} />
      
      {/* Stardust overlay - theme aware */}
      <div className={`fixed inset-0 -z-10 pointer-events-none transition-opacity duration-500 ${
        isDarkMode 
          ? 'bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:32px_32px] opacity-20'
          : 'bg-[radial-gradient(circle,rgba(139,69,19,0.1)_1px,transparent_1px)] [background-size:32px_32px] opacity-15'
      }`} />
      
      <Navigation />
      <main className={`relative z-10 transition-colors duration-500 ${
        isDarkMode ? 'text-white' : 'text-gray-800'
      }`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;