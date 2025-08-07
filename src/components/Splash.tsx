import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Leaf, BrainCircuit as Circuit } from 'lucide-react';

interface SplashProps {
  onEnterSite: () => void;
}

const Splash: React.FC<SplashProps> = ({ onEnterSite }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-dark-bg via-slate-900 to-dark-bg flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Animated Background Circuit Pattern */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-10">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M10,10 L90,10 L90,50 L50,50 L50,90 L10,90 Z"
                stroke="#4ADE80"
                strokeWidth="1"
                fill="none"
                className="animate-circuit"
                style={{ strokeDasharray: '5,5' }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="text-center z-10 px-8">
        {/* Club Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <div className="relative mx-auto w-32 h-32 mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-electric-green to-neon-blue rounded-full animate-glow"></div>
            <div className="absolute inset-2 bg-dark-bg rounded-full flex items-center justify-center">
              <div className="relative">
                <Zap className="w-12 h-12 text-electric-green absolute -top-2 -left-2" />
                <Leaf className="w-12 h-12 text-neon-blue" />
                <Circuit className="w-8 h-8 text-tech-purple absolute -bottom-1 -right-1" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Club Name */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-orbitron font-bold text-4xl md:text-6xl mb-4 bg-gradient-to-r from-electric-green via-neon-blue to-tech-purple bg-clip-text text-transparent"
        >
          TECHNO SMART
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="font-orbitron font-semibold text-2xl md:text-3xl mb-6 text-neon-blue"
        >
          CAMPUS CLUB
        </motion.h2>

        {/* Motto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mb-8"
        >
          <p className="font-poppins text-lg md:text-xl text-electric-green font-medium italic">
            "Ecofriendly Innovation Starts Here"
          </p>
        </motion.div>

        {/* University Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mb-12"
        >
          <p className="font-poppins text-sm md:text-base text-gray-300 mb-2">
            Presented by
          </p>
          <p className="font-poppins font-semibold text-base md:text-lg text-glow-white">
            MIT Art, Design & Technology University
          </p>
        </motion.div>

        {/* Enter Site Button */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
          onClick={onEnterSite}
          className="group relative px-8 py-4 bg-gradient-to-r from-electric-green to-neon-blue text-dark-bg font-orbitron font-semibold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
        >
          <span className="relative z-10">Enter Site</span>
          <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-tech-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.button>
      </div>

      {/* Floating Tech Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute top-20 left-20 text-electric-green opacity-30"
      >
        <Zap className="w-8 h-8" />
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-20 right-20 text-neon-blue opacity-30"
      >
        <Circuit className="w-12 h-12" />
      </motion.div>
    </motion.div>
  );
};

export default Splash;