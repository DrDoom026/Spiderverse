import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './index.css';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Projects from './pages/Projects';
import About from './pages/About';
import Reviews from './pages/Reviews';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <AnimatePresence mode="wait">
      {currentPage === 'landing' && (
        <Landing key="landing" onNavigate={navigateTo} />
      )}
      {currentPage === 'about' && (
        <About key="about" onBack={() => navigateTo('landing')} />
      )}
      {currentPage === 'contact' && (
        <Contact key="contact" onBack={() => navigateTo('landing')} />
      )}
      {currentPage === 'gallery' && (
        <Gallery key="gallery" onBack={() => navigateTo('landing')} />
      )}
      {currentPage === 'projects' && (
        <Projects key="projects" onBack={() => navigateTo('landing')} />
      )}
      {currentPage === 'reviews' && (
        <Reviews key="reviews" onBack={() => navigateTo('landing')} />
      )}
    </AnimatePresence>
  );
}

export default App;
