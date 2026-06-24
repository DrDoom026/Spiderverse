import { useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import UniverseSelector from '../components/UniverseSelector';

export default function Landing({ onNavigate }) {
  const universeRef = useRef(null);

  const handleEnter = () => {
    universeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.main
      data-testid="landing-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{ position: 'relative', background: '#050505', minHeight: '100vh' }}
    >
      {/* Overlays */}
      <div className="scanlines-overlay" />
      <div className="halftone-overlay" />
      <div className="grain-overlay" />

      {/* Components */}
      <Navbar />
      <HeroSection onEnter={handleEnter} />
      <UniverseSelector ref={universeRef} onNavigate={onNavigate} />
    </motion.main>
  );
}
