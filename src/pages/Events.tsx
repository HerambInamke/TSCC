import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, ArrowRight, Award } from 'lucide-react';

const Events: React.FC = () => {
  const upcomingEvents = [
    {
      title: 'Green Innovation Summit 2024',
      date: '2024-03-15',
      time: '09:00 AM - 06:00 PM',
      location: 'MIT ADT University Auditorium',
      description: 'Join industry leaders and innovators for a day of sustainable technology discussions and networking.',
      attendees: '500+',
      type: 'Summit',
      status: 'registration-open',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1'
    },
    {
      title: 'AI for Climate Workshop',
      date: '2024-02-28',
      time: '02:00 PM - 05:00 PM',
      location: 'Tech Lab Building A',
      description: 'Hands-on workshop on using artificial intelligence to tackle climate change challenges.',
      attendees: '50',
      type: 'Workshop',
      status: 'registration-open',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1'
    },
    {
      title: 'Sustainable Tech Hackathon',
      date: '2024-04-10',
      time: '48 Hours',
      location: 'Innovation Hub',
      description: '48-hour hackathon focused on creating innovative solutions for environmental challenges.',
      attendees: '200+',
      type: 'Hackathon',
      status: 'coming-soon',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1'
    }
  ];

  const pastEvents = [
    {
      title: 'Green Tech Expo 2023',
      date: '2023-11-20',
      attendees: '800+',
      description: 'Showcased 50+ sustainable technology projects from students and industry partners.',
      achievements: ['Best Innovation Award', '15 Startup Pitches', '5 Industry Partnerships'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1'
    },
    {
      title: 'Smart Campus Challenge',
      date: '2023-09-15',
      attendees: '150+',
      description: 'Students competed to design IoT solutions for smart campus infrastructure.',
      achievements: ['12 Teams Participated', 'Smart Energy Solution Winner', 'Industry Mentorship'],
      image: 'https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1'
    },
    {
      title: 'Environmental Tech Talk Series',
      date: '2023-08-10',
      attendees: '300+',
      description: 'Monthly talk series featuring environmental technology experts and researchers.',
      achievements: ['8 Expert Speakers', 'Live Streaming', 'Q&A Sessions'],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1'
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-dark-bg via-slate-900 to-dark-bg">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-orbitron font-bold text-4xl md:text-6xl mb-6 bg-gradient-to-r from-electric-green via-neon-blue to-electric-green bg-clip-text text-transparent"
          >
            Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-poppins text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Join us for exciting events, workshops, and competitions that drive sustainable innovation
          </motion.p>
        </div>
      </motion.section>

      {/* Upcoming Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl mb-6 bg-gradient-to-r from-electric-green to-neon-blue bg-clip-text text-transparent">
              Upcoming Events
            </h2>
            <p className="font-poppins text-lg text-gray-300">
              Don't miss these exciting opportunities to learn, network, and innovate
            </p>
          </motion.div>

          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-slate-800/30 rounded-2xl border border-gray-700 hover:border-electric-green/50 transition-all duration-300 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    <div className="lg:col-span-1">
                      <div className="h-64 lg:h-full relative overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            event.status === 'registration-open' 
                              ? 'bg-electric-green text-dark-bg' 
                              : 'bg-yellow-500 text-dark-bg'
                          }`}>
                            {event.status === 'registration-open' ? 'Registration Open' : 'Coming Soon'}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2 p-8">
                      <div className="flex items-center mb-4">
                        <span className="px-3 py-1 bg-neon-blue/20 text-neon-blue text-sm font-medium rounded-full border border-neon-blue/30 mr-3">
                          {event.type}
                        </span>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Users className="w-4 h-4 mr-1" />
                          {event.attendees} attendees
                        </div>
                      </div>

                      <h3 className="font-orbitron font-bold text-2xl md:text-3xl text-glow-white mb-4 group-hover:text-electric-green transition-colors">
                        {event.title}
                      </h3>

                      <p className="font-poppins text-gray-300 mb-6 leading-relaxed">
                        {event.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center text-gray-400">
                          <Calendar className="w-5 h-5 mr-3 text-electric-green" />
                          <span className="font-poppins text-sm">{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <Clock className="w-5 h-5 mr-3 text-neon-blue" />
                          <span className="font-poppins text-sm">{event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <MapPin className="w-5 h-5 mr-3 text-tech-purple" />
                          <span className="font-poppins text-sm">{event.location}</span>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center space-x-2 px-6 py-3 rounded-full font-orbitron font-semibold transition-all duration-300 ${
                          event.status === 'registration-open'
                            ? 'bg-gradient-to-r from-electric-green to-neon-blue text-dark-bg hover:from-neon-blue hover:to-tech-purple'
                            : 'bg-slate-700 text-gray-300 cursor-not-allowed'
                        }`}
                        disabled={event.status !== 'registration-open'}
                      >
                        <span>{event.status === 'registration-open' ? 'Register Now' : 'Coming Soon'}</span>
                        {event.status === 'registration-open' && <ArrowRight className="w-4 h-4" />}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl mb-6 bg-gradient-to-r from-tech-purple to-electric-green bg-clip-text text-transparent">
              Past Events
            </h2>
            <p className="font-poppins text-lg text-gray-300">
              Celebrating our successful events and their achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-slate-800/50 rounded-xl border border-gray-700 hover:border-tech-purple/50 transition-all duration-300 overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center bg-dark-bg/80 px-3 py-1 rounded-full">
                        <Users className="w-4 h-4 mr-2 text-electric-green" />
                        <span className="text-glow-white text-sm font-medium">{event.attendees}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <Calendar className="w-4 h-4 mr-2 text-neon-blue" />
                      <span className="font-poppins text-sm text-gray-400">
                        {new Date(event.date).toLocaleDateString()}
                      </span>
                    </div>

                    <h3 className="font-orbitron font-bold text-xl text-glow-white mb-3 group-hover:text-tech-purple transition-colors">
                      {event.title}
                    </h3>

                    <p className="font-poppins text-gray-400 text-sm mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    <div>
                      <h4 className="font-orbitron font-semibold text-sm text-electric-green mb-2">Key Achievements</h4>
                      <ul className="space-y-1">
                        {event.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center text-gray-400 text-xs">
                            <Award className="w-3 h-3 text-electric-green mr-2 flex-shrink-0" />
                            <span className="font-poppins">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;