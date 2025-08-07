import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Globe } from 'lucide-react';

const ClubOverview: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To foster innovative thinking and sustainable technological solutions that address global environmental challenges.',
      color: 'text-electric-green'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a diverse community of tech enthusiasts, environmental advocates, and future innovators.',
      color: 'text-neon-blue'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Developing cutting-edge solutions that merge technology with environmental consciousness.',
      color: 'text-tech-purple'
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'Creating meaningful change through technology-driven environmental initiatives and awareness programs.',
      color: 'text-yellow-400'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-electric-green to-neon-blue bg-clip-text text-transparent">
            Club Overview
          </h2>
          <p className="font-poppins text-lg text-gray-300 max-w-3xl mx-auto">
            The Techno Smart Campus Club is a dynamic community of students passionate about leveraging technology for environmental sustainability and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-dark-bg/80 p-6 rounded-lg border border-gray-700 hover:border-electric-green/50 transition-all duration-300 h-full">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-slate-800 group-hover:bg-slate-700 transition-colors ${feature.color}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="font-orbitron font-semibold text-xl mb-3 text-glow-white group-hover:text-electric-green transition-colors">
                  {feature.title}
                </h3>
                <p className="font-poppins text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubOverview;