import React from 'react';
import { motion } from 'framer-motion';

const SDGSection: React.FC = () => {
  const sdgGoals = [
    { id: 1, title: 'No Poverty', color: 'bg-red-500', icon: '🏠' },
    { id: 2, title: 'Zero Hunger', color: 'bg-yellow-600', icon: '🌾' },
    { id: 3, title: 'Good Health', color: 'bg-green-500', icon: '🏥' },
    { id: 4, title: 'Quality Education', color: 'bg-red-600', icon: '📚' },
    { id: 5, title: 'Gender Equality', color: 'bg-orange-500', icon: '⚖️' },
    { id: 6, title: 'Clean Water', color: 'bg-cyan-500', icon: '💧' },
    { id: 7, title: 'Clean Energy', color: 'bg-yellow-500', icon: '⚡' },
    { id: 8, title: 'Economic Growth', color: 'bg-red-700', icon: '📈' },
    { id: 9, title: 'Innovation', color: 'bg-orange-600', icon: '🏭' },
    { id: 10, title: 'Reduced Inequalities', color: 'bg-pink-500', icon: '🤝' },
    { id: 11, title: 'Sustainable Cities', color: 'bg-orange-400', icon: '🏙️' },
    { id: 12, title: 'Responsible Consumption', color: 'bg-yellow-700', icon: '♻️' },
    { id: 13, title: 'Climate Action', color: 'bg-green-600', icon: '🌍' },
    { id: 14, title: 'Life Below Water', color: 'bg-blue-500', icon: '🐟' },
    { id: 15, title: 'Life on Land', color: 'bg-green-700', icon: '🌳' },
    { id: 16, title: 'Peace & Justice', color: 'bg-blue-600', icon: '⚖️' },
    { id: 17, title: 'Partnerships', color: 'bg-blue-700', icon: '🤝' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-electric-green to-tech-purple bg-clip-text text-transparent">
            UN SDG Goals
          </h2>
          <p className="font-poppins text-lg text-gray-300 max-w-3xl mx-auto">
            Our commitment to achieving the United Nations Sustainable Development Goals through technology and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {sdgGoals.map((goal, index) => (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group cursor-pointer"
            >
              <div className={`${goal.color} p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[120px] flex flex-col items-center justify-center text-center`}>
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                  {goal.icon}
                </div>
                <div className="text-white font-orbitron font-semibold text-xs leading-tight">
                  <div className="bg-black/20 px-1 py-0.5 rounded text-[10px] mb-1">
                    SDG {goal.id}
                  </div>
                  {goal.title}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="font-poppins text-gray-400 max-w-2xl mx-auto">
            Through our projects and initiatives, we actively contribute to multiple SDGs, focusing on sustainable technology solutions that create positive environmental and social impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SDGSection;