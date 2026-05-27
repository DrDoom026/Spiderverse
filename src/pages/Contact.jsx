import { motion } from 'framer-motion';
import ContactSection from '../components/ContactSection';
import '../contact.css';

export default function Contact({ onBack }) {
  return (
    <motion.main
      data-testid="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{ position: 'relative', background: '#050505', minHeight: '100vh' }}
    >
      {/* Same overlays as Landing for consistency */}
      <div className="scanlines-overlay" />
      <div className="halftone-overlay" />
      <div className="grain-overlay" />

      {/* Back button */}
      <motion.button
        type="button"
        onClick={onBack}
        className="back-btn contact-back-btn"
        data-testid="contact-back-btn"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5" />
          <path d="M12 19l-7-7 7-7" />
        </svg>
        <span>BACK TO MULTIVERSE</span>
      </motion.button>

      <ContactSection />
    </motion.main>
  );
}
