/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'electric-green': '#4ADE80',
        'neon-blue': '#22D3EE',
        'dark-bg': '#0F172A',
        'glow-white': '#F8FAFC',
        'tech-purple': '#7C3AED',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'circuit': 'circuit 3s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'slideIn': 'slideIn 0.5s ease-out',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #4ADE80, 0 0 10px #4ADE80, 0 0 15px #4ADE80' },
          '100%': { boxShadow: '0 0 10px #4ADE80, 0 0 20px #4ADE80, 0 0 30px #4ADE80' }
        },
        circuit: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    },
  },
  plugins: [],
};