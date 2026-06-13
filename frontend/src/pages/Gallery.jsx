import { motion } from 'framer-motion';
import GallerySection from '../components/GallerySection';
import '../gallery.css';

export default function Gallery({ onBack }) {
  return (
    <motion.main
      data-testid="gallery-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{ position: 'relative', background: '#0a0a0a', minHeight: '100vh' }}
    >
      {/* Back button */}
      <motion.button
        type="button"
        onClick={onBack}
        className="noir-back-btn"
        data-testid="gallery-back-btn"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5" />
          <path d="M12 19l-7-7 7-7" />
        </svg>
        <span>BACK TO MULTIVERSE</span>
      </motion.button>

      <GallerySection />
    </motion.main>
  );
}
