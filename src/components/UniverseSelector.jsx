import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const UNIVERSES = [
  {
    key: 'about',
    number: '01',
    title: 'ABOUT',
    subtitle: 'Peter Parker Universe',
    description:
      'The friendly neighborhood story — origins, obsessions, and the quiet years.',
    bg: 'https://static.prod-images.emergentagent.com/jobs/43efdf97-9cd7-4162-8978-cbe8af9896f8/images/d49cbd5055d616b7377cde8709332774aded011be2a3824833ae8c8a0ba9a67e.png',
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
    bg: 'https://static.prod-images.emergentagent.com/jobs/43efdf97-9cd7-4162-8978-cbe8af9896f8/images/0a7fa3b223a6ee84868d54887ced9ad935a841e568b13c97526c44dd080bd2ea.png',
    accent: '#00F0FF',
    portalColor: '#00F0FF',
    glow: 'card-glow-blue',
  },
  {
    key: 'gallery',
    number: '03',
    title: 'GALLERY',
    subtitle: 'Spider Noir Universe',
    description:
      'Frames in black and white — photography, sketches, and quieter visual notes.',
    bg: 'https://static.prod-images.emergentagent.com/jobs/43efdf97-9cd7-4162-8978-cbe8af9896f8/images/bbef31eb562d49a24e92e6327de40a38ed7b541005fce176d78e19329cffc864.png',
    accent: '#E5E7EB',
    portalColor: '#9CA3AF',
    glow: 'card-glow-noir',
  },
  {
    key: 'contact',
    number: '04',
    title: 'CONTACT',
    subtitle: 'LEGO Spider-Man Universe',
    description:
      'Snap the pieces together — collaborate, conspire, or just say hello.',
    bg: 'https://static.prod-images.emergentagent.com/jobs/43efdf97-9cd7-4162-8978-cbe8af9896f8/images/d31b51d761626e3124ebc27418df7c4dfbcf1e93c8366bc8fdb549f0887a53f4.png',
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

const UniverseSelector = forwardRef(({ onNavigate, ...props }, ref) => {
  const handleCardClick = (u) => {
    // Portal transition effect
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed; inset: 0; z-index: 100;
      background: radial-gradient(circle at 50% 50%, ${u.portalColor} 0%, #000 75%);
      display: flex; align-items: center; justify-content: center;
      pointer-events: none;
      clip-path: circle(0% at 50% 50%);
      transition: clip-path 0.95s cubic-bezier(0.7, 0, 0.3, 1);
    `;

    const label = document.createElement('div');
    label.className = 'font-comic chromatic-text-sm';
    label.style.cssText = `
      font-size: clamp(2rem, 6vw, 5rem);
      letter-spacing: 0.05em;
      text-align: center;
      color: #fff;
      opacity: 0;
      transform: scale(0.6);
      transition: all 0.4s ease 0.35s;
    `;
    label.textContent = `ENTERING ${u.title}`;
    overlay.appendChild(label);
    document.body.appendChild(overlay);

    requestAnimationFrame(() => {
      overlay.style.clipPath = 'circle(140% at 50% 50%)';
      label.style.opacity = '1';
      label.style.transform = 'scale(1)';
    });

    setTimeout(() => {
      /* Navigate to the Contact page after the portal animation */
      if (u.key === 'contact' && onNavigate) {
        onNavigate('contact');
      }
      overlay.style.opacity = '0';
      overlay.style.transition = 'opacity 0.4s ease';
      setTimeout(() => overlay.remove(), 400);
    }, 1800);
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
