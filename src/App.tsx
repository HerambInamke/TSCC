import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Splash from './components/Splash';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Members from './pages/Members';
import Events from './pages/Events';
import Articles from './pages/Articles';
import Memories from './pages/Memories';
import Apply from './pages/Apply';
import Feedback from './pages/Feedback';
import Contact from './pages/Contact';

function App() {
  const [showSplash, setShowSplash] = React.useState(true);

  const handleEnterSite = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <Splash onEnterSite={handleEnterSite} />;
  }

  return (
    <Router>
      <div className="bg-dark-bg min-h-screen text-glow-white">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/members" element={<Members />} />
            <Route path="/events" element={<Events />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/memories" element={<Memories />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.main>
      </div>
    </Router>
  );
}

export default App;