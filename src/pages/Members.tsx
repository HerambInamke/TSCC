import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Users, Mail, Linkedin, Github, BookOpen, GraduationCap, History } from 'lucide-react';

const Members: React.FC = () => {
  const leadership = [
    {
      name: 'Alex Chen',
      role: 'President',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'AI & Sustainability',
      bio: 'Leading TSC with a vision for sustainable tech innovation. Expert in machine learning applications for environmental solutions.',
      achievements: ['National Green Tech Award Winner', 'Published 3 research papers', 'Led 15+ successful projects'],
      social: { email: 'alex.chen@mitadt.edu', linkedin: '#', github: '#' }
    },
    {
      name: 'Maya Rodriguez',
      role: 'Vice President',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'IoT & Green Tech',
      bio: 'Passionate about IoT solutions for smart cities. Specializes in sensor networks and data analytics for environmental monitoring.',
      achievements: ['Smart Campus Project Lead', 'IoT Innovation Certificate', 'Mentored 25+ students'],
      social: { email: 'maya.rodriguez@mitadt.edu', linkedin: '#', github: '#' }
    }
  ];

  const coreTeam = [
    {
      name: 'David Kim',
      role: 'Technical Lead',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'Robotics & Automation',
      department: 'Computer Science Engineering'
    },
    {
      name: 'Sarah Johnson',
      role: 'Environmental Officer',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'Climate Tech',
      department: 'Environmental Engineering'
    },
    {
      name: 'Raj Patel',
      role: 'Events Coordinator',
      image: 'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'Community Building',
      department: 'Management Studies'
    },
    {
      name: 'Emma Wilson',
      role: 'Research Head',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'Data Science',
      department: 'Data Science & Analytics'
    },
    {
      name: 'Arjun Sharma',
      role: 'Technology Officer',
      image: 'https://images.pexels.com/photos/3831849/pexels-photo-3831849.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'Software Development',
      department: 'Information Technology'
    },
    {
      name: 'Lisa Wang',
      role: 'Marketing Head',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'Digital Marketing',
      department: 'Communication Design'
    }
  ];

  const exMembers = [
    {
      name: 'James Wilson',
      role: 'Former President',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'Renewable Energy',
      achievements: ['Founded TSC in 2018', 'Secured initial funding', 'Established university partnerships'],
      currentPosition: 'Senior Engineer at GreenTech Solutions'
    },
    {
      name: 'Priya Mehta',
      role: 'Former Technical Lead',
      image: 'https://images.pexels.com/photos/3760089/pexels-photo-3760089.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'Full Stack Development',
      achievements: ['Developed TSC web platform', 'Led 3 hackathons', 'Mentored 10+ junior developers'],
      currentPosition: 'Software Architect at Microsoft'
    }
  ];

  const faculty = [
    {
      name: 'Dr. Robert Chen',
      role: 'Faculty Advisor',
      image: 'https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'Sustainable Computing',
      department: 'Computer Science',
      bio: 'Guiding TSC with 15+ years of experience in sustainable computing research and industry collaborations.',
      achievements: ['Published 30+ research papers', 'Received Excellence in Teaching Award', 'Industry consultant for green tech initiatives']
    },
    {
      name: 'Prof. Anita Desai',
      role: 'Technical Mentor',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'IoT Systems',
      department: 'Electronics Engineering',
      bio: 'Specializes in IoT systems design with a focus on energy efficiency and environmental applications.',
      achievements: ['IEEE Senior Member', 'Smart City Project Lead', 'Developed 5 patented IoT solutions']
    }
  ];

  const hod = {
    name: 'Dr. Vikram Sharma',
    role: 'Head of Department',
    image: 'https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    expertise: 'Computer Science & Sustainability',
    department: 'School of Technology',
    bio: 'Leading the School of Technology with a vision to integrate sustainability across all technical disciplines and research initiatives.',
    achievements: ['Ph.D. from MIT', 'Author of "Sustainable Computing in the 21st Century"', 'Recipient of National Science Award'],
    social: { email: 'vikram.sharma@mitadt.edu', linkedin: '#' }
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
            className="font-orbitron font-bold text-4xl md:text-6xl mb-6 bg-gradient-to-r from-neon-blue via-electric-green to-neon-blue bg-clip-text text-transparent"
          >
            Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-poppins text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Meet the brilliant minds driving innovation and sustainability at TSC
          </motion.p>
        </div>
      </motion.section>

      {/* Head of Department */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl mb-6 bg-gradient-to-r from-tech-purple to-neon-blue bg-clip-text text-transparent">
              Head of Department
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-tech-purple/5 to-neon-blue/5 p-8 rounded-2xl border border-tech-purple/20 hover:border-tech-purple/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
                  <div className="relative mb-4 md:mb-0 md:mr-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-tech-purple/50 group-hover:border-tech-purple transition-colors">
                      <img
                        src={hod.image}
                        alt={hod.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-tech-purple to-neon-blue p-2 rounded-full">
                      <GraduationCap className="w-4 h-4 text-dark-bg" />
                    </div>
                  </div>
                  
                  <div className="text-center md:text-left flex-1">
                    <h3 className="font-orbitron font-bold text-2xl text-glow-white mb-2 group-hover:text-tech-purple transition-colors">
                      {hod.name}
                    </h3>
                    <p className="font-poppins font-semibold text-tech-purple mb-2 text-lg">
                      {hod.role}
                    </p>
                    <span className="inline-block px-3 py-1 bg-tech-purple/20 text-tech-purple text-sm font-medium rounded-full border border-tech-purple/30 mb-4">
                      {hod.expertise}
                    </span>
                  </div>
                </div>

                {hod.bio && (
                  <p className="font-poppins text-gray-400 mb-6 leading-relaxed">
                    {hod.bio}
                  </p>
                )}

                {hod.achievements && (
                  <div className="mb-6">
                    <h4 className="font-orbitron font-semibold text-lg text-glow-white mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {hod.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center text-gray-400">
                          <Award className="w-4 h-4 text-tech-purple mr-3 flex-shrink-0" />
                          <span className="font-poppins text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {hod.social && (
                  <div className="flex space-x-4">
                    {hod.social.email && (
                      <a href={`mailto:${hod.social.email}`} className="p-2 bg-slate-800 rounded-lg hover:bg-tech-purple/20 transition-colors">
                        <Mail className="w-5 h-5 text-tech-purple" />
                      </a>
                    )}
                    {hod.social.linkedin && (
                      <a href={hod.social.linkedin} className="p-2 bg-slate-800 rounded-lg hover:bg-neon-blue/20 transition-colors">
                        <Linkedin className="w-5 h-5 text-neon-blue" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Faculty Advisors */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl mb-6 bg-gradient-to-r from-neon-blue to-electric-green bg-clip-text text-transparent">
              Faculty Advisors
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {faculty.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-neon-blue/5 to-electric-green/5 p-8 rounded-2xl border border-neon-blue/20 hover:border-neon-blue/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
                    <div className="relative mb-4 md:mb-0 md:mr-6">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-neon-blue/50 group-hover:border-neon-blue transition-colors">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-electric-green to-neon-blue p-2 rounded-full">
                        <BookOpen className="w-4 h-4 text-dark-bg" />
                      </div>
                    </div>
                    
                    <div className="text-center md:text-left flex-1">
                      <h3 className="font-orbitron font-bold text-2xl text-glow-white mb-2 group-hover:text-neon-blue transition-colors">
                        {member.name}
                      </h3>
                      <p className="font-poppins font-semibold text-neon-blue mb-2 text-lg">
                        {member.role}
                      </p>
                      <span className="inline-block px-3 py-1 bg-electric-green/20 text-electric-green text-sm font-medium rounded-full border border-electric-green/30 mb-4">
                        {member.expertise}
                      </span>
                    </div>
                  </div>

                  {member.bio && (
                    <p className="font-poppins text-gray-400 mb-6 leading-relaxed">
                      {member.bio}
                    </p>
                  )}

                  <div className="mb-4">
                    <h4 className="font-orbitron font-semibold text-lg text-glow-white mb-3">Department</h4>
                    <p className="font-poppins text-gray-400">
                      <GraduationCap className="w-4 h-4 text-electric-green inline mr-2" />
                      {member.department}
                    </p>
                  </div>

                  {member.achievements && (
                    <div className="mb-6">
                      <h4 className="font-orbitron font-semibold text-lg text-glow-white mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {member.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center text-gray-400">
                            <Award className="w-4 h-4 text-electric-green mr-3 flex-shrink-0" />
                            <span className="font-poppins text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl mb-6 bg-gradient-to-r from-neon-blue to-tech-purple bg-clip-text text-transparent">
              Leadership Team
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {leadership.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-neon-blue/5 to-tech-purple/5 p-8 rounded-2xl border border-neon-blue/20 hover:border-neon-blue/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
                    <div className="relative mb-4 md:mb-0 md:mr-6">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-neon-blue/50 group-hover:border-neon-blue transition-colors">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-electric-green to-neon-blue p-2 rounded-full">
                        <Star className="w-4 h-4 text-dark-bg" />
                      </div>
                    </div>
                    
                    <div className="text-center md:text-left flex-1">
                      <h3 className="font-orbitron font-bold text-2xl text-glow-white mb-2 group-hover:text-neon-blue transition-colors">
                        {member.name}
                      </h3>
                      <p className="font-poppins font-semibold text-neon-blue mb-2 text-lg">
                        {member.role}
                      </p>
                      <span className="inline-block px-3 py-1 bg-electric-green/20 text-electric-green text-sm font-medium rounded-full border border-electric-green/30 mb-4">
                        {member.expertise}
                      </span>
                    </div>
                  </div>

                  {member.bio && (
                    <p className="font-poppins text-gray-400 mb-6 leading-relaxed">
                      {member.bio}
                    </p>
                  )}

                  {member.achievements && (
                    <div className="mb-6">
                      <h4 className="font-orbitron font-semibold text-lg text-glow-white mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {member.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center text-gray-400">
                            <Award className="w-4 h-4 text-electric-green mr-3 flex-shrink-0" />
                            <span className="font-poppins text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {member.social && (
                    <div className="flex space-x-4">
                      {member.social.email && (
                        <a href={member.social.email} className="p-2 bg-slate-800 rounded-lg hover:bg-electric-green/20 transition-colors">
                          <Mail className="w-5 h-5 text-electric-green" />
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="p-2 bg-slate-800 rounded-lg hover:bg-neon-blue/20 transition-colors">
                          <Linkedin className="w-5 h-5 text-neon-blue" />
                        </a>
                      )}
                      {member.social.github && (
                        <a href={member.social.github} className="p-2 bg-slate-800 rounded-lg hover:bg-tech-purple/20 transition-colors">
                          <Github className="w-5 h-5 text-tech-purple" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl mb-6 bg-gradient-to-r from-electric-green to-neon-blue bg-clip-text text-transparent">
              Core Team
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-slate-800/50 p-6 rounded-xl border border-gray-700 hover:border-neon-blue/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-neon-blue/50 group-hover:border-neon-blue transition-colors mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <h3 className="font-orbitron font-semibold text-xl text-glow-white mb-2 group-hover:text-neon-blue transition-colors">
                      {member.name}
                    </h3>
                    <p className="font-poppins font-medium text-electric-green mb-2">
                      {member.role}
                    </p>
                    <p className="font-poppins text-sm text-gray-400 mb-3">
                      {member.department}
                    </p>
                    <span className="inline-block px-3 py-1 bg-tech-purple/20 text-tech-purple text-xs font-medium rounded-full border border-tech-purple/30">
                      {member.expertise}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ex-Members */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl mb-6 bg-gradient-to-r from-tech-purple to-neon-blue bg-clip-text text-transparent">
              Alumni Members
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {exMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-tech-purple/5 to-neon-blue/5 p-8 rounded-2xl border border-tech-purple/20 hover:border-tech-purple/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
                    <div className="relative mb-4 md:mb-0 md:mr-6">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-tech-purple/50 group-hover:border-tech-purple transition-colors">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-tech-purple to-neon-blue p-2 rounded-full">
                        <History className="w-4 h-4 text-dark-bg" />
                      </div>
                    </div>
                    
                    <div className="text-center md:text-left flex-1">
                      <h3 className="font-orbitron font-bold text-2xl text-glow-white mb-2 group-hover:text-tech-purple transition-colors">
                        {member.name}
                      </h3>
                      <p className="font-poppins font-semibold text-tech-purple mb-2 text-lg">
                        {member.role}
                      </p>
                      <span className="inline-block px-3 py-1 bg-tech-purple/20 text-tech-purple text-sm font-medium rounded-full border border-tech-purple/30 mb-4">
                        {member.expertise}
                      </span>
                    </div>
                  </div>

                  {member.achievements && (
                    <div className="mb-6">
                      <h4 className="font-orbitron font-semibold text-lg text-glow-white mb-3">Key Contributions</h4>
                      <ul className="space-y-2">
                        {member.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center text-gray-400">
                            <Award className="w-4 h-4 text-tech-purple mr-3 flex-shrink-0" />
                            <span className="font-poppins text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mb-4">
                    <h4 className="font-orbitron font-semibold text-lg text-glow-white mb-3">Current Position</h4>
                    <p className="flex items-center text-gray-400">
                      <BookOpen className="w-4 h-4 text-tech-purple mr-3 flex-shrink-0" />
                      <span className="font-poppins text-sm">{member.currentPosition}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-electric-green/10 via-neon-blue/10 to-tech-purple/10 p-12 rounded-2xl border border-electric-green/20">
            <Users className="w-16 h-16 text-electric-green mx-auto mb-6" />
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl mb-6 bg-gradient-to-r from-electric-green to-neon-blue bg-clip-text text-transparent">
              Ready to Join Our Mission?
            </h2>
            <p className="font-poppins text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Be part of a community that's shaping the future through sustainable technology innovation. Your skills and passion can make a real difference.
            </p>
            <motion.a
              href="/apply"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-electric-green to-neon-blue text-dark-bg font-orbitron font-semibold text-lg px-8 py-4 rounded-full hover:from-neon-blue hover:to-tech-purple transition-all duration-300"
            >
              Apply Now
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Members;