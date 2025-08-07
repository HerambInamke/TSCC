import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Award, Lightbulb } from 'lucide-react';

const ActivitiesSection: React.FC = () => {
  const activities = [
    {
      year: '2024',
      title: 'Green Tech Hackathon',
      description: 'Organized a 48-hour hackathon focusing on sustainable technology solutions with 200+ participants.',
      icon: Lightbulb,
      color: 'text-electric-green',
      bgColor: 'bg-electric-green/10',
      borderColor: 'border-electric-green/30'
    },
    {
      year: '2024',
      title: 'Solar Panel Installation Drive',
      description: 'Led campus-wide initiative to install 50 solar panels, reducing carbon footprint by 30%.',
      icon: Award,
      color: 'text-neon-blue',
      bgColor: 'bg-neon-blue/10',
      borderColor: 'border-neon-blue/30'
    },
    {
      year: '2023',
      title: 'AI for Climate Workshop',
      description: 'Conducted workshops on using artificial intelligence for climate change mitigation strategies.',
      icon: Users,
      color: 'text-tech-purple',
      bgColor: 'bg-tech-purple/10',
      borderColor: 'border-tech-purple/30'
    },
    {
      year: '2023',
      title: 'Smart Campus Initiative',
      description: 'Implemented IoT-based smart systems for energy monitoring and waste management across campus.',
      icon: Calendar,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      borderColor: 'border-yellow-400/30'
    },
    {
      year: '2023',
      title: 'Environmental Awareness Campaign',
      description: 'Launched multimedia campaign reaching 5000+ students about sustainable technology practices.',
      icon: Lightbulb,
      color: 'text-pink-400',
      bgColor: 'bg-pink-400/10',
      borderColor: 'border-pink-400/30'
    },
    {
      year: '2022',
      title: 'Zero Waste Challenge',
      description: 'Achieved zero waste goal for club events through innovative recycling and composting programs.',
      icon: Award,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/30'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-tech-purple to-electric-green bg-clip-text text-transparent">
            Past Activities
          </h2>
          <p className="font-poppins text-lg text-gray-300 max-w-3xl mx-auto">
            A timeline of our impactful initiatives and achievements in sustainable technology
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-green via-neon-blue to-tech-purple"></div>

          <div className="space-y-12">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-electric-green to-neon-blue rounded-full border-4 border-dark-bg"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className={`${activity.bgColor} ${activity.borderColor} border rounded-xl p-6 hover:scale-105 transition-all duration-300 group`}>
                    <div className="flex items-center mb-4">
                      <div className={`${activity.bgColor} p-3 rounded-lg ${activity.color} group-hover:scale-110 transition-transform`}>
                        <activity.icon className="w-6 h-6" />
                      </div>
                      <span className={`ml-3 font-orbitron font-bold text-sm ${activity.color} bg-dark-bg px-3 py-1 rounded-full`}>
                        {activity.year}
                      </span>
                    </div>
                    <h3 className="font-orbitron font-semibold text-xl text-glow-white mb-3 group-hover:text-electric-green transition-colors">
                      {activity.title}
                    </h3>
                    <p className="font-poppins text-gray-400 group-hover:text-gray-300 transition-colors">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;