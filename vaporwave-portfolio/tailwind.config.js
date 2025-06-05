/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        vt323: ['VT323', 'monospace'],
        grotesk: ['Space Grotesk', 'sans-serif'],
        spacegrotesk: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        vaporPurple: '#2c003e',
        neonPink: '#ff5ec3',
        vaporTeal: '#00f7ff',
        neonTeal: '#00f7ff',
        starlight: '#f7f8ff',
        midnightPurple: '#0c0023',
        midnight: '#0c0023',
        electricBlue: '#71faff',
        electric: '#71faff',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        pulse: 'pulse 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        gradient: 'gradient 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 110, 199, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 110, 199, 0.8)' },
        },        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
      },
    },
  },
  plugins: [],
};
