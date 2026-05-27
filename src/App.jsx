import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './index.css';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <AnimatePresence mode="wait">
      {currentPage === 'landing' && (
        <Landing
          key="landing"
          onNavigate={navigateTo}
        />
      )}
      {currentPage === 'contact' && (
        <Contact
          key="contact"
          onBack={() => navigateTo('landing')}
        />
      )}
      {currentPage === 'gallery' && (
        <Gallery
          key="gallery"
          onBack={() => navigateTo('landing')}
        />
      )}
    </AnimatePresence>
  );
}

export default App;
