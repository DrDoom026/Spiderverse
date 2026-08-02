import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { runUniverseTransition } from '../lib/universeTransitions';

import aboutBg from '../assets/about-sleeping.jpg';
import projectsBg from '../assets/projects-logo.jpg';
import galleryBg from '../assets/gallery-noir.jpg';
import contactBg from '../assets/contact-lego.jpg';
import reviewsBg from '../assets/reviews-card-bg.jpg';

const UNIVERSES = [
  {
    key: 'about',
    number: '01',
    title: 'ABOUT',
    subtitle: 'Peter Parker Universe',
    description:
      'The friendly neighborhood story — origins, obsessions, and the quiet years.',
    bg: aboutBg,
    accent: '#D7263D',
    portalColor: '#D7263D',
    glow: 'card-glow-red',
  },
  {
    key: 'projects',
    number: '02',
    title: 'PROJECTS',
    subtitle: 'Spider-Man 2099 Universe',
    description:
      "Tomorrow's experiments — interfaces, products, and machines that swing forward.",
    bg: projectsBg,
    accent: '#00F0FF',
    portalColor: '#00F0FF',
    glow: 'card-glow-blue',
  },
  {
    key: 'gallery',
    number: '03',
    title: 'GALLERY',
    subtitle: 'Spider Noir Universe',
    description: 'Frames by my point of view.',
    bg: galleryBg,
    accent: '#E5E7EB',
    portalColor: '#9CA3AF',
    glow: 'card-glow-noir',
  },
  {
    key: 'reviews',
    number: '04',
    title: 'REVIEWS',
    subtitle: 'The Daily Review',
    description: 'Personal archives.',
    bg: reviewsBg,
    accent: '#c8b89a',
    portalColor: '#c8b89a',
    glow: 'card-glow-paper',
  },
  {
    key: 'contact',
    number: '05',
    title: 'CONTACT',
    subtitle: 'LEGO Spider-Man Universe',
    description:
      'Snap the pieces together just say hello.',
    bg: contactBg,
    accent: '#FFC700',
    portalColor: '#FFC700',
    glow: 'card-glow-lego',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.2, 0.8, 0.2, 1] },
  }),
};

const UniverseSelector = forwardRef(({ onNavigate }, ref) => {
  const handleCardClick = (u) => {
    // Per-universe dimensional travel — each portal animates uniquely
    runUniverseTransition(u.key, () => {
      if (onNavigate && ['contact', 'gallery', 'projects', 'about', 'reviews'].includes(u.key)) {
        onNavigate(u.key);
      }
    });
  };

  return (
    <section
      ref={ref}
      data-testid="universe-selector"
      style={{
        position: 'relative',
        padding: '120px 24px 140px',
        maxWidth: 1600,
        margin: '0 auto',
      }}
    >
      {/* Divider */}
      <div className="panel-divider" style={{ marginBottom: 56 }} />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: 56, maxWidth: 760 }}
      >
        <div
          className="font-body"
          style={{
            fontSize: 11,
            letterSpacing: '0.4em',
            color: '#D7263D',
            textTransform: 'uppercase',
            marginBottom: 14,
          }}
        >
          // CHOOSE YOUR UNIVERSE
        </div>
        <h2
          data-testid="universe-section-title"
          className="font-comic chromatic-text-sm"
          style={{
            fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.01em',
            margin: 0,
          }}
        >
          FOUR REALITIES. <br />
          <span className="outline-text">ONE STORY.</span>
        </h2>
        <p
          className="font-body"
          style={{
            marginTop: 18,
            fontSize: 15,
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.7)',
            maxWidth: 580,
          }}
        >
          Each card is a portal. Step into a universe, and the page is rewritten
          around you.
        </p>
      </motion.div>

      {/* Cards grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 28,
        }}
      >
        {UNIVERSES.map((u, i) => (
          <motion.div
            key={u.key}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <button
              type="button"
              onClick={() => handleCardClick(u)}
              className={`universe-card ${u.glow}`}
              data-testid={`universe-card-${u.key}`}
              style={{ width: '100%', background: '#0a0a0a', padding: 0 }}
            >
              <div className="universe-card-inner">
                {/* Background image */}
                <div
                  className="card-bg"
                  style={{ backgroundImage: `url(${u.bg})` }}
                />
                {/* Gradient overlay */}
                <div className="card-gradient" />
                {/* Halftone texture */}
                <div className="card-halftone" />

                {/* Content */}
                <div className="card-content">
                  {/* Top row */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      position: 'absolute',
                      top: 22,
                      left: 22,
                      right: 22,
                    }}
                  >
                    <span
                      className="font-display"
                      style={{
                        fontSize: 14,
                        letterSpacing: '0.4em',
                        color: u.accent,
                      }}
                    >
                      #{u.number}
                    </span>
                    <span
                      className="font-body"
                      style={{
                        fontSize: 9,
                        letterSpacing: '0.4em',
                        color: 'rgba(255,255,255,0.6)',
                        textTransform: 'uppercase',
                        border: '1px solid rgba(255,255,255,0.2)',
                        padding: '4px 8px',
                      }}
                    >
                      ENTER →
                    </span>
                  </div>

                  {/* Bottom text */}
                  <div style={{ textAlign: 'left' }}>
                    <div
                      className="font-body"
                      style={{
                        fontSize: 10,
                        letterSpacing: '0.35em',
                        color: u.accent,
                        textTransform: 'uppercase',
                        marginBottom: 8,
                      }}
                    >
                      {u.subtitle}
                    </div>
                    <div
                      className="font-comic chromatic-text-sm"
                      style={{
                        fontSize: 'clamp(1.8rem, 2.4vw, 2.6rem)',
                        lineHeight: 0.95,
                        marginBottom: 12,
                      }}
                    >
                      {u.title}
                    </div>
                    <div
                      className="font-body"
                      style={{
                        fontSize: 12.5,
                        lineHeight: 1.55,
                        color: 'rgba(255,255,255,0.72)',
                      }}
                    >
                      {u.description}
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: 80,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
          opacity: 0.55,
        }}
      >
        <div
          className="font-body"
          data-testid="footer-mark"
          style={{
            fontSize: 10,
            letterSpacing: '0.35em',
            color: 'rgba(255,255,255,0.55)',
            textTransform: 'uppercase',
          }}
        >
          NISHCHAL · ALL UNIVERSES RESERVED · {new Date().getFullYear()}
        </div>
        <div
          className="font-body"
          style={{
            fontSize: 10,
            letterSpacing: '0.35em',
            color: 'rgba(255,255,255,0.55)',
            textTransform: 'uppercase',
          }}
        >
          INSPIRED BY THE SPIDER-VERSE — NOT AFFILIATED
        </div>
      </div>
    </section>
  );
});

UniverseSelector.displayName = 'UniverseSelector';

export default UniverseSelector;
