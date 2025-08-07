import React from 'react';
import { motion } from 'framer-motion';
import doctors from '../assets/doctors.svg';
import folder from '../assets/folder.svg';
import gmail from '../assets/gmail.svg';
import phone from '../assets/phone.svg';
import googlefit from '../assets/google-fit.svg';
import hospital from '../assets/hospital.svg';
import health from '../assets/health.svg';
import whatsapp from '../assets/whatsapp.svg';
import screen from '../assets/screen.svg';
import scroll from '../assets/scroll.svg';
import homebar from '../assets/homebar.svg';
import "../index.css";
import Loader from "../components/Loader";

function Home() {
  // Club motto
  const motto = "Innovating for a Sustainable Future";
  
  // Past events data
  const pastEvents = [
    {
      id: 1,
      title: "Sustainability Hackathon 2023",
      image: "https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Students collaborated to develop innovative tech solutions for environmental challenges."
    },
    {
      id: 2,
      title: "Green Tech Workshop",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Hands-on workshop exploring renewable energy applications and sustainable computing."
    },
    {
      id: 3,
      title: "SDG Innovation Summit",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "A collaborative event focused on technological solutions for the UN Sustainable Development Goals."
    }
  ];
  
  // SDG categories
  const sdgCategories = [
    { id: 1, name: "No Poverty", color: "#E5243B" },
    { id: 2, name: "Zero Hunger", color: "#DDA63A" },
    { id: 3, name: "Good Health and Well-being", color: "#4C9F38" },
    { id: 4, name: "Quality Education", color: "#C5192D" },
    { id: 5, name: "Gender Equality", color: "#FF3A21" },
    { id: 6, name: "Clean Water and Sanitation", color: "#26BDE2" },
    { id: 7, name: "Affordable and Clean Energy", color: "#FCC30B" },
    { id: 8, name: "Decent Work and Economic Growth", color: "#A21942" },
    { id: 9, name: "Industry, Innovation and Infrastructure", color: "#FD6925" },
    { id: 10, name: "Reduced Inequality", color: "#DD1367" },
    { id: 11, name: "Sustainable Cities and Communities", color: "#FD9D24" },
    { id: 12, name: "Responsible Consumption and Production", color: "#BF8B2E" },
    { id: 13, name: "Climate Action", color: "#3F7E44" },
    { id: 14, name: "Life Below Water", color: "#0A97D9" },
    { id: 15, name: "Life on Land", color: "#56C02B" },
    { id: 16, name: "Peace, Justice and Strong Institutions", color: "#00689D" },
    { id: 17, name: "Partnerships for the Goals", color: "#19486A" }
  ];
  
  return (
    <div className="w-full py-16 bg-white">
      {/* Club Motto Banner */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-teal-500 mb-16">
        <div className="max-w-7xl mx-auto py-8 px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-white italic"
          >
            {motto}
          </motion.h2>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 mb-12">

          {/* Left Side Icons */}
          <div className="flex flex-col items-center w-[280px] max-w-4xl mx-auto py-16 space-y-0.5">

            <div className="flex justify-between w-full px-8">
              <img src={whatsapp} className="icon-size" alt="WhatsApp" />
              <img src={health} className="icon-size" alt="Health" />
            </div>

            <div className="flex justify-center w-full">
              <img src={folder} className="icon-size" alt="Folder" />
            </div>

            <div className="flex justify-between w-full px-8">
              <img src={doctors} className="icon-size" alt="Doctors" />
              <img src={hospital} className="icon-size" alt="Hospital" />
            </div>

            <div className="flex justify-center w-full">
              <img src={gmail} className="icon-size" alt="Gmail" />
            </div>

            <div className="flex justify-between w-full px-8">
              <img src={googlefit} className="icon-size" alt="Google Fit" />
              <img src={phone} className="icon-size" alt="Phone" />
            </div>
          </div>

          {/* Middle Circle Loader with Text */}
          <div className="relative flex justify-center items-center w-full">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
              <Loader />

              {/* Overlay text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-1 text-xs sm:text-sm md:text-base">
                <p className="font-semibold">Diagnosis Reports</p>
                <p className="font-semibold">Heart Reports</p>
                <p className="font-semibold">Prescriptions</p>
              </div>
            </div>
          </div>

          {/* Right Side Phone Mockup */}
          <div className="relative w-[162px] sm:w-[180px] md:w-[200px] mx-auto">
            <img src={screen} alt="banner_mobile" className="max-w-full object-contain object-center" />
            <img src={homebar} alt="home_bar" className="w-[96%] mx-auto absolute left-0 right-0 bottom-1 object-contain object-center rounded-bl-[30px] rounded-br-[30px] z-10" />
            <div className="absolute left-0 right-0 top-0 bottom-0 m-2 mx-1 overflow-hidden z-0 rounded-[30px]">
              <div className="scroll-loop h-fit w-fit">
                <img src={scroll} alt="all_records" className="w-full h-auto min-h-[200%] object-cover object-top" />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom features - Aligned with the grid above */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl">
          
          {/* Store Section - Aligned with Left Icons */}
          <div className="text-center px-4">
            <h2 className="font-bold text-xl mb-2">Store</h2>
            <p className="text-gray-500">Effortlessly organize your medical records with just one click—both digital and physical documents securely stored in one place.</p>
          </div>
          
          {/* We Do The Work Section - Aligned with Circle */}
          <div className="text-center px-4">
            <h2 className="font-bold text-xl mb-2">We Do The Work</h2>
            <p className="text-gray-500">Let our technology seamlessly manage backend tasks for efficient medical record organization.</p>
          </div>
          
          {/* Get Timeline Section - Aligned with Phone */}
          <div className="text-center px-4">
            <h2 className="font-bold text-xl mb-2">Get Timeline</h2>
            <p className="text-gray-500">Organize your medical records effortlessly with our timeline, ensuring you never worry about them again. Streamline your health journey with ease.</p>
          </div>
          
        </div>
        
        {/* Past Events Section */}
        <div className="mt-24 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: event.id * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* 17 SDGs Section */}
        <div className="mt-24 mb-16">
          <h2 className="text-3xl font-bold text-center mb-4">Our Work is Based on the 17 SDGs</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            The Sustainable Development Goals are the blueprint to achieve a better and more sustainable future for all.
            Our club's initiatives align with these global objectives.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {sdgCategories.map((sdg) => (
              <motion.div
                key={sdg.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: sdg.id * 0.05 }}
                className="p-4 rounded-lg shadow-md text-center flex flex-col items-center justify-center h-32"
                style={{ backgroundColor: `${sdg.color}20`, borderLeft: `4px solid ${sdg.color}` }}
              >
                <span className="font-bold text-lg mb-1 text-gray-800">{sdg.id}</span>
                <p className="text-sm text-gray-700">{sdg.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;