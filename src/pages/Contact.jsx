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
      style={{ position: 'relative', background: '#f5f5f5', minHeight: '100vh', overflow: 'hidden' }}
    >
      {/* Back button designed as a LEGO sticker */}
      <motion.button
        type="button"
        onClick={onBack}
        className="contact-back-btn"
        data-testid="contact-back-btn"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <span>← BACK TO MULTIVERSE</span>
      </motion.button>

      <ContactSection />


    </motion.main>
  );
}
