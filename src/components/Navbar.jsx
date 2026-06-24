import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      data-testid="landing-navbar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        background: scrolled ? 'rgba(5,5,5,0.55)' : 'transparent',
        borderBottom: scrolled
          ? '1px solid rgba(255,255,255,0.06)'
          : '1px solid transparent',
        transition: 'all 0.35s ease',
      }}
    >
      <div
        style={{
          maxWidth: 1600,
          margin: '0 auto',
          padding: '18px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <div
          className="font-display"
          style={{ fontSize: 22, letterSpacing: '0.25em', color: '#fff' }}
          data-testid="navbar-logo"
        >
          NSC<span style={{ color: '#D7263D' }}>.</span>
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <span
            className="font-body"
            style={{
              fontSize: 11,
              letterSpacing: '0.35em',
              color: '#9CA3AF',
              textTransform: 'uppercase',
            }}
            data-testid="navbar-tag"
          >
            // EARTH-616 / Active
          </span>
          <div
            aria-hidden
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#D7263D',
              boxShadow: '0 0 12px #D7263D',
            }}
          />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
