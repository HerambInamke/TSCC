import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Users } from 'lucide-react';

const MembersSection: React.FC = () => {
  const members = [
    {
      name: 'Alex Chen',
      role: 'President',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'AI & Sustainability',
      badge: 'Leadership'
    },
    {
      name: 'Maya Rodriguez',
      role: 'Vice President',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'IoT & Green Tech',
      badge: 'Innovation'
    },
    {
      name: 'David Kim',
      role: 'Technical Lead',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'Robotics & Automation',
      badge: 'Technical'
    },
    {
      name: 'Sarah Johnson',
      role: 'Environmental Officer',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'Climate Tech',
      badge: 'Sustainability'
    },
    {
      name: 'Raj Patel',
      role: 'Events Coordinator',
      image: 'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'Community Building',
      badge: 'Outreach'
    },
    {
      name: 'Emma Wilson',
      role: 'Research Head',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'Data Science',
      badge: 'Research'
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
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-neon-blue to-tech-purple bg-clip-text text-transparent">
            Our Team
          </h2>
          <p className="font-poppins text-lg text-gray-300 max-w-3xl mx-auto">
            Meet the brilliant minds driving innovation and sustainability at TSC
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-800/50 p-6 rounded-xl border border-gray-700 hover:border-neon-blue/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-neon-blue/50 group-hover:border-neon-blue transition-colors">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-electric-green to-neon-blue p-2 rounded-full">
                    {member.badge === 'Leadership' && <Star className="w-4 h-4 text-dark-bg" />}
                    {member.badge === 'Innovation' && <Award className="w-4 h-4 text-dark-bg" />}
                    {member.badge === 'Technical' && <Users className="w-4 h-4 text-dark-bg" />}
                    {member.badge === 'Sustainability' && <Star className="w-4 h-4 text-dark-bg" />}
                    {member.badge === 'Outreach' && <Award className="w-4 h-4 text-dark-bg" />}
                    {member.badge === 'Research' && <Users className="w-4 h-4 text-dark-bg" />}
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="font-orbitron font-semibold text-xl text-glow-white mb-2 group-hover:text-neon-blue transition-colors">
                    {member.name}
                  </h3>
                  <p className="font-poppins font-medium text-electric-green mb-2">
                    {member.role}
                  </p>
                  <p className="font-poppins text-sm text-gray-400 mb-3">
                    {member.expertise}
                  </p>
                  <span className="inline-block px-3 py-1 bg-tech-purple/20 text-tech-purple text-xs font-medium rounded-full border border-tech-purple/30">
                    {member.badge}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembersSection;