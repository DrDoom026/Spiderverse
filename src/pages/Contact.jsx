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

      {/* ═══════════════ POST-CREDIT SCENE ═══════════════ */}
      <section className="post-credit" data-testid="post-credit-scene">
        <div className="post-credit__grain" aria-hidden="true" />
        <div className="post-credit__inner">
          <div className="post-credit__status" data-testid="post-credit-status">
            <span className="post-credit__status-dot" />
            <span className="post-credit__status-text">Earth-616 · Status: Active</span>
          </div>

          <h2 className="post-credit__title">
            Current <span className="post-credit__title-accent">Mission</span>
          </h2>

          <ul className="post-credit__mission" data-testid="post-credit-mission">
            <li>Build.</li>
            <li>Learn.</li>
            <li>Create.</li>
          </ul>

          <p className="post-credit__signoff">See You Across The Multiverse.</p>

          <div className="post-credit__meta">
            <span>// END · ISSUE 01</span>
            <span>· TO BE CONTINUED ·</span>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
