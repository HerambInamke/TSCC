import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Calendar, Users, Award, Clock } from 'lucide-react';

const Memories: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const memories = [
    {
      id: 1,
      title: 'Green Tech Hackathon 2023',
      date: '2023-11-20',
      category: 'Hackathon',
      participants: '200+',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      description: 'Our flagship hackathon brought together innovative minds to solve environmental challenges.'
    },
    {
      id: 2,
      title: 'Solar Panel Installation',
      date: '2023-09-15',
      category: 'Project',
      participants: '50+',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      description: 'Successfully installed 25 solar panels across campus buildings.'
    },
    {
      id: 3,
      title: 'Team Building Workshop',
      date: '2023-08-10',
      category: 'Workshop',
      participants: '80+',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      description: 'Strengthening bonds and building collaborative skills among team members.'
    },
    {
      id: 4,
      title: 'Industry Expert Talk',
      date: '2023-07-22',
      category: 'Seminar',
      participants: '150+',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      description: 'Inspiring session with leading environmental technology experts.'
    },
    {
      id: 5,
      title: 'Smart Campus Demo',
      date: '2023-06-05',
      category: 'Demo',
      participants: '100+',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      description: 'Showcasing our IoT-based smart campus solutions to the university community.'
    },
    {
      id: 6,
      title: 'Environmental Cleanup Drive',
      date: '2023-05-18',
      category: 'Community',
      participants: '120+',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      description: 'Community initiative to clean and green our local environment.'
    },
    {
      id: 7,
      title: 'Innovation Fair 2023',
      date: '2023-04-12',
      category: 'Exhibition',
      participants: '300+',
      image: 'https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      description: 'Annual showcase of student innovations in sustainable technology.'
    },
    {
      id: 8,
      title: 'Coding Bootcamp',
      date: '2023-03-28',
      category: 'Workshop',
      participants: '60+',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      description: 'Intensive coding bootcamp focused on green tech applications.'
    },
    {
      id: 9,
      title: 'Award Ceremony',
      date: '2023-02-14',
      category: 'Awards',
      participants: '200+',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      description: 'Recognizing outstanding contributions to sustainable innovation.'
    }
  ];

  const categories = ['All', 'Hackathon', 'Project', 'Workshop', 'Seminar', 'Demo', 'Community', 'Exhibition', 'Awards'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredMemories = selectedCategory === 'All' 
    ? memories 
    : memories.filter(memory => memory.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredMemories.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredMemories.length) % filteredMemories.length);
    }
  };

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
            Memories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-poppins text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Capturing the moments that define our journey in sustainable innovation
          </motion.p>
        </div>
      </motion.section>

      {/* Category Filter */}
      <section className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-poppins font-medium text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-electric-green to-neon-blue text-dark-bg'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-electric-green border border-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl mb-6 bg-gradient-to-r from-tech-purple to-electric-green bg-clip-text text-transparent">
              Our Journey Timeline
            </h2>
            <p className="font-poppins text-lg text-gray-300 max-w-3xl mx-auto">
              A month-by-month chronicle of our club's activities and achievements
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-green via-neon-blue to-tech-purple"></div>

            <div className="space-y-12">
              {memories.map((memory, index) => {
                // Extract month and year from the date
                const date = new Date(memory.date);
                const month = date.toLocaleString('default', { month: 'long' });
                const year = date.getFullYear();
                
                return (
                  <motion.div
                    key={memory.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
                  >
                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-electric-green to-neon-blue rounded-full border-4 border-dark-bg"></div>

                    <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                      <div className="bg-slate-800/50 p-6 rounded-xl border border-gray-700 hover:border-neon-blue/50 transition-all duration-300 flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3 flex-shrink-0">
                          <img 
                            src={memory.image} 
                            alt={memory.title} 
                            className="w-full h-40 object-cover rounded-lg shadow-lg"
                          />
                        </div>
                        <div className="md:w-2/3">
                          <div className="flex items-center mb-3">
                            <Clock className="w-5 h-5 text-electric-green mr-3" />
                            <span className="font-orbitron font-bold text-electric-green bg-dark-bg px-3 py-1 rounded-full text-sm">
                              {month} {year}
                            </span>
                          </div>
                          <h3 className="font-orbitron font-semibold text-xl text-glow-white mb-2">
                            {memory.title}
                          </h3>
                          <p className="font-poppins text-gray-400 mb-3">
                            {memory.description}
                          </p>
                          <div className="flex items-center text-sm text-gray-500">
                            <Users className="w-4 h-4 mr-1" />
                            <span>{memory.participants} participants</span>
                            <span className="mx-2">•</span>
                            <span className="bg-slate-700 text-electric-green px-2 py-0.5 rounded-full text-xs">
                              {memory.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            <AnimatePresence>
              {filteredMemories.map((memory, index) => (
                <motion.div
                  key={memory.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative overflow-hidden rounded-xl bg-slate-800 hover:bg-slate-700 transition-all duration-300">
                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src={memory.image}
                        alt={memory.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    {/* Overlay Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium mr-2 ${
                          memory.category === 'Hackathon' ? 'bg-electric-green/20 text-electric-green border border-electric-green/30' :
                          memory.category === 'Project' ? 'bg-neon-blue/20 text-neon-blue border border-neon-blue/30' :
                          memory.category === 'Workshop' ? 'bg-tech-purple/20 text-tech-purple border border-tech-purple/30' :
                          'bg-yellow-400/20 text-yellow-400 border border-yellow-400/30'
                        }`}>
                          {memory.category}
                        </span>
                      </div>
                      <h3 className="font-orbitron font-semibold text-sm text-glow-white mb-1 line-clamp-2">
                        {memory.title}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{new Date(memory.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-3 h-3 mr-1" />
                          <span>{memory.participants}</span>
                        </div>
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-electric-green/50 rounded-xl transition-colors duration-300" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark-bg/95 backdrop-blur-lg z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <div className="relative max-w-7xl mx-auto px-4">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 bg-slate-800/80 rounded-full hover:bg-slate-700 transition-colors"
              >
                <X className="w-6 h-6 text-glow-white" />
              </button>

              {/* Navigation Buttons */}
              {filteredMemories.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-slate-800/80 rounded-full hover:bg-slate-700 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-glow-white" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-slate-800/80 rounded-full hover:bg-slate-700 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-glow-white" />
                  </button>
                </>
              )}

              {/* Image and Info */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="lg:col-span-2">
                  <img
                    src={filteredMemories[selectedImage].image}
                    alt={filteredMemories[selectedImage].title}
                    className="w-full h-auto max-h-[70vh] object-contain rounded-xl"
                  />
                </div>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium mr-3 ${
                        filteredMemories[selectedImage].category === 'Hackathon' ? 'bg-electric-green/20 text-electric-green border border-electric-green/30' :
                        filteredMemories[selectedImage].category === 'Project' ? 'bg-neon-blue/20 text-neon-blue border border-neon-blue/30' :
                        filteredMemories[selectedImage].category === 'Workshop' ? 'bg-tech-purple/20 text-tech-purple border border-tech-purple/30' :
                        'bg-yellow-400/20 text-yellow-400 border border-yellow-400/30'
                      }`}>
                        {filteredMemories[selectedImage].category}
                      </span>
                    </div>
                    <h2 className="font-orbitron font-bold text-2xl md:text-3xl text-glow-white mb-4">
                      {filteredMemories[selectedImage].title}
                    </h2>
                    <p className="font-poppins text-gray-300 leading-relaxed">
                      {filteredMemories[selectedImage].description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-5 h-5 mr-3 text-electric-green" />
                      <div>
                        <p className="font-poppins text-xs text-gray-500">Date</p>
                        <p className="font-poppins text-sm">
                          {new Date(filteredMemories[selectedImage].date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Users className="w-5 h-5 mr-3 text-neon-blue" />
                      <div>
                        <p className="font-poppins text-xs text-gray-500">Participants</p>
                        <p className="font-poppins text-sm">{filteredMemories[selectedImage].participants}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Memories;