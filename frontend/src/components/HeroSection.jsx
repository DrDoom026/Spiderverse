import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Particles from './Particles';

// Place your spider logo at public/assets/spider-logo.png
// Falling back to the hosted version
const SPIDER_LOGO_URL = '/assets/spider-logo.png';

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.2, 0.8, 0.2, 1] },
  },
};

const HeroSection = ({ onEnter }) => {
  return (
    <section
      data-testid="hero-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        paddingTop: 80,
      }}
    >
      {/* Ambient spotlights */}
      <div
        className="spotlight-red"
        style={{ top: '-15%', left: '-15%', zIndex: 0 }}
      />
      <div
        className="spotlight-blue"
        style={{ bottom: '-25%', right: '-10%', zIndex: 0 }}
      />

      {/* Particles */}
      <Particles count={42} />

      {/* Side text */}
      <div
        aria-hidden
        className="hide-mobile"
        style={{
          position: 'absolute',
          left: 18,
          top: '50%',
          transform: 'translateY(-50%) rotate(-90deg)',
          transformOrigin: 'left top',
          fontFamily: 'Outfit, sans-serif',
          fontSize: 10,
          letterSpacing: '0.6em',
          color: 'rgba(255,255,255,0.35)',
          zIndex: 5,
          whiteSpace: 'nowrap',
        }}
      >
        ISSUE 01 — VOL. INFINITE — A MULTIVERSE PORTFOLIO
      </div>

      {/* Main hero grid */}
      <div
        className="lg-grid-2"
        style={{
          position: 'relative',
          zIndex: 4,
          maxWidth: 1600,
          margin: '0 auto',
          padding: '40px 24px 80px',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 40,
          alignItems: 'center',
          minHeight: 'calc(100vh - 80px)',
        }}
      >
        {/* Left: Text content */}
        <motion.div variants={stagger} initial="hidden" animate="show" style={{ position: 'relative' }}>
          {/* Badge */}
          <motion.div variants={fadeUp} style={{ marginBottom: 18 }}>
            <span
              className="font-body glitch-text"
              data-testid="hero-badge"
              data-text="// EARTH-616"
              style={{
                display: 'inline-block',
                padding: '8px 16px',
                border: '1px solid rgba(215,38,61,0.5)',
                color: '#D7263D',
                fontSize: 14,
                fontWeight: 'bold',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
              }}
            >
              // EARTH-616
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            data-testid="hero-name"
            className="font-comic chromatic-text"
            style={{
              fontSize: 'clamp(2.8rem, 6.6vw, 6.6rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
              margin: 0,
              whiteSpace: 'nowrap',
            }}
          >
            NISHCHAL
          </motion.h1>

          {/* Subtitle line */}
          <motion.div
            variants={fadeUp}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              marginTop: 18,
              marginBottom: 24,
            }}
          >
            <span
              style={{
                width: 56,
                height: 2,
                background: '#D7263D',
                display: 'inline-block',
              }}
            />
            <span
              className="font-body"
              style={{
                fontSize: 14,
                letterSpacing: '0.3em',
                color: '#9CA3AF',
                textTransform: 'uppercase',
              }}
            >
              Designer · Builder · Web-Slinger
            </span>
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            variants={fadeUp}
            data-testid="hero-quote"
            className="font-display"
            style={{
              fontSize: 'clamp(1.8rem, 3.4vw, 2.8rem)',
              lineHeight: 1.05,
              letterSpacing: '0.02em',
              color: '#fff',
              margin: '12px 0 18px',
              maxWidth: 560,
            }}
          >
            "With great power,{' '}
            <span style={{ color: '#D7263D', fontStyle: 'italic' }}>comes</span>{' '}
            great responsibility."
          </motion.blockquote>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            data-testid="hero-intro"
            className="font-body"
            style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.72)',
              maxWidth: 520,
              marginBottom: 36,
            }}
          >
            Every universe has a story. This one belongs to me — chasing ideas the way
            Spider-Man chases skylines. Step through the portal and pick your
            reality.
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeUp}>
            <button
              type="button"
              onClick={onEnter}
              className="enter-btn"
              data-testid="enter-multiverse-button"
            >
              <span>Enter the Multiverse</span>
              <ArrowDown size={20} style={{ transform: 'skew(10deg)' }} strokeWidth={2.5} />
            </button>
          </motion.div>
        </motion.div>

        {/* Right: Spider logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 400,
          }}
          data-testid="hero-spider-logo"
        >
          {/* Orbiting ring 1 */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotate: 360 }}
            transition={{
              opacity: { duration: 1.5, delay: 0.6 },
              rotate: { duration: 90, repeat: Infinity, ease: 'linear' },
            }}
            style={{
              position: 'absolute',
              width: 'min(85%, 620px)',
              aspectRatio: '1 / 1',
              borderRadius: '50%',
              border: '1px dashed rgba(215,38,61,0.35)',
            }}
          />

          {/* Orbiting ring 2 */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotate: -360 }}
            transition={{
              opacity: { duration: 1.5, delay: 0.7 },
              rotate: { duration: 120, repeat: Infinity, ease: 'linear' },
            }}
            style={{
              position: 'absolute',
              width: 'min(70%, 510px)',
              aspectRatio: '1 / 1',
              borderRadius: '50%',
              border: '1px solid rgba(30,58,138,0.35)',
            }}
          />

          {/* Spider logo */}
          <div
            className="floaty spider-glow"
            style={{
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '30px',
              borderRadius: '50%',
              background:
                'radial-gradient(circle at 50% 50%, rgba(215,38,61,0.6) 0%, rgba(120,30,180,0.45) 28%, rgba(30,58,138,0.3) 50%, rgba(0,0,0,0) 70%)',
            }}
          >
            <img
              src={SPIDER_LOGO_URL}
              alt="Spider-Verse emblem"
              style={{
                width: 'min(82%, 580px)',
                maxWidth: '100%',
                objectFit: 'contain',
                userSelect: 'none',
                pointerEvents: 'none',
                mixBlendMode: 'screen',
                filter: 'contrast(1.4) brightness(1.08) saturate(1.3)',
                WebkitMaskImage:
                  'radial-gradient(ellipse 60% 65% at 50% 50%, #000 35%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0) 78%)',
                maskImage:
                  'radial-gradient(ellipse 60% 65% at 50% 50%, #000 35%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0) 78%)',
              }}
              draggable={false}
            />
          </div>

          {/* Corner label */}
          <div
            style={{
              position: 'absolute',
              bottom: 8,
              right: 8,
              fontFamily: 'Bebas Neue, sans-serif',
              letterSpacing: '0.3em',
              fontSize: 12,
              color: 'rgba(255,255,255,0.5)',
              border: '1px solid rgba(255,255,255,0.15)',
              padding: '6px 10px',
            }}
          >
            ⌖ EARTH-616 · LIVE
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { duration: 1, delay: 1.6 },
          y: { duration: 2, repeat: Infinity },
        }}
        style={{
          position: 'absolute',
          bottom: 24,
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'Outfit, sans-serif',
          fontSize: 10,
          letterSpacing: '0.4em',
          color: 'rgba(255,255,255,0.55)',
          zIndex: 5,
          textAlign: 'center',
        }}
      >
        SCROLL <br />
        <span style={{ fontSize: 14 }}>▾</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
