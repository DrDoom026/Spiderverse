import { motion } from 'framer-motion';

const LEGO_SPIDERMAN_URL = '/assets/lego-spiderman.jpg';
const CITY_BG_URL = '/assets/city-night-bg.png';

/* ─── Social links config ─── */
const SOCIAL_LINKS = [
  {
    key: 'instagram',
    label: 'INSTAGRAM',
    url: '#',
    color: '#E1306C',
    bgGrad: 'linear-gradient(135deg, #833AB4, #E1306C, #F77737)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="5"/>
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    key: 'github',
    label: 'GITHUB',
    url: '#',
    color: '#f0f0f0',
    bgGrad: 'linear-gradient(135deg, #24292e, #40464d)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    key: 'email',
    label: 'EMAIL',
    url: 'mailto:hello@example.com',
    color: '#4FC3F7',
    bgGrad: 'linear-gradient(135deg, #1565C0, #42A5F5)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M22 7l-10 7L2 7"/>
      </svg>
    ),
  },
  {
    key: 'twitter',
    label: 'TWITTER',
    url: '#',
    color: '#1DA1F2',
    bgGrad: 'linear-gradient(135deg, #0d8ecf, #1DA1F2)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    key: 'linkedin',
    label: 'LINKEDIN',
    url: '#',
    color: '#0A66C2',
    bgGrad: 'linear-gradient(135deg, #004182, #0A66C2)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

/* ─── Animation variants ─── */
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] },
  },
};

/* ─── Spider-web SVG corner decoration ─── */
const SpiderWebCorner = ({ position = 'top-left', size = 28, color = 'rgba(255,255,255,0.12)' }) => {
  const styles = {
    position: 'absolute',
    width: size,
    height: size,
    zIndex: 3,
    opacity: 0.7,
    ...(position === 'top-left' && { top: -2, left: -2 }),
    ...(position === 'top-right' && { top: -2, right: -2, transform: 'scaleX(-1)' }),
    ...(position === 'bottom-left' && { bottom: -2, left: -2, transform: 'scaleY(-1)' }),
    ...(position === 'bottom-right' && { bottom: -2, right: -2, transform: 'scale(-1)' }),
  };
  return (
    <svg style={styles} viewBox="0 0 40 40" fill="none">
      <path d="M0 0 Q20 5 40 0" stroke={color} strokeWidth="0.8" />
      <path d="M0 0 Q5 20 0 40" stroke={color} strokeWidth="0.8" />
      <path d="M0 0 L40 40" stroke={color} strokeWidth="0.5" opacity="0.5" />
      <path d="M0 0 Q15 10 30 30" stroke={color} strokeWidth="0.4" opacity="0.4" />
      <path d="M0 0 Q10 15 20 35" stroke={color} strokeWidth="0.4" opacity="0.3" />
    </svg>
  );
};

/* ─── Comic scratch texture (inline SVG bg) ─── */
const ComicScratchOverlay = () => (
  <div
    style={{
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      opacity: 0.06,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='15' x2='60' y2='18' stroke='white' stroke-width='0.3'/%3E%3Cline x1='10' y1='40' x2='55' y2='42' stroke='white' stroke-width='0.2'/%3E%3Cline x1='5' y1='55' x2='45' y2='53' stroke='white' stroke-width='0.3'/%3E%3C/svg%3E")`,
      backgroundSize: '60px 60px',
      borderRadius: 'inherit',
    }}
  />
);

/* ─── Halftone dots decoration ─── */
const HalftoneAccent = ({ style }) => (
  <div
    style={{
      position: 'absolute',
      width: 80,
      height: 80,
      opacity: 0.08,
      backgroundImage: 'radial-gradient(circle, #4488ff 1px, transparent 1px)',
      backgroundSize: '5px 5px',
      pointerEvents: 'none',
      ...style,
    }}
  />
);


/* ─── MAIN CONTACT SECTION ─── */
function ContactSection() {
  return (
    <section
      data-testid="contact-section"
      className="contact-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* ─── Cinematic city background ─── */}
      <div className="contact-bg">
        <img
          src={CITY_BG_URL}
          alt=""
          aria-hidden="true"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 60%',
          }}
        />
      </div>

      {/* Dark overlays for atmosphere */}
      <div className="contact-bg-overlay" />
      <div className="contact-vignette" />

      {/* Comic halftone dots accent decorations */}
      <HalftoneAccent style={{ top: '12%', left: '5%', transform: 'rotate(15deg)' }} />
      <HalftoneAccent style={{ top: '25%', right: '15%', transform: 'rotate(-10deg)' }} />
      <HalftoneAccent style={{ bottom: '20%', left: '10%', transform: 'rotate(25deg)' }} />
      <HalftoneAccent style={{ bottom: '8%', right: '5%', transform: 'rotate(-20deg)' }} />

      {/* ─── Main content layout ─── */}
      <motion.div
        className="contact-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* ─── GIANT CONTACT TITLE ─── */}
        <motion.div variants={fadeUp} className="contact-title-wrapper">
          {/* Decorative spider icon above title */}
          <motion.div
            variants={fadeIn}
            style={{ textAlign: 'center', marginBottom: 12 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.6 }}>
              <circle cx="12" cy="8" r="3" fill="#D7263D" />
              <ellipse cx="12" cy="15" rx="5" ry="6" fill="#D7263D" />
              <line x1="7" y1="10" x2="1" y2="5" stroke="#D7263D" strokeWidth="1.2" />
              <line x1="17" y1="10" x2="23" y2="5" stroke="#D7263D" strokeWidth="1.2" />
              <line x1="7" y1="13" x2="0" y2="14" stroke="#D7263D" strokeWidth="1.2" />
              <line x1="17" y1="13" x2="24" y2="14" stroke="#D7263D" strokeWidth="1.2" />
              <line x1="8" y1="17" x2="2" y2="22" stroke="#D7263D" strokeWidth="1.2" />
              <line x1="16" y1="17" x2="22" y2="22" stroke="#D7263D" strokeWidth="1.2" />
            </svg>
          </motion.div>

          <h2
            className="contact-title font-comic"
            data-text="CONTACT"
          >
            CONTACT
          </h2>

          {/* Decorative underline */}
          <div className="contact-title-divider">
            <span className="divider-line" />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
              <circle cx="12" cy="8" r="2.5" fill="#D7263D" />
              <ellipse cx="12" cy="14.5" rx="4" ry="5" fill="#D7263D" />
              <line x1="8" y1="10" x2="3" y2="6" stroke="#D7263D" strokeWidth="1" />
              <line x1="16" y1="10" x2="21" y2="6" stroke="#D7263D" strokeWidth="1" />
              <line x1="8.5" y1="13" x2="2" y2="14" stroke="#D7263D" strokeWidth="1" />
              <line x1="15.5" y1="13" x2="22" y2="14" stroke="#D7263D" strokeWidth="1" />
            </svg>
            <span className="divider-line" />
          </div>
        </motion.div>

        {/* ─── Two-column layout: Buttons + Spider-Man ─── */}
        <div className="contact-grid">
          {/* ─── LEFT: Contact buttons ─── */}
          <motion.div
            variants={containerVariants}
            className="contact-buttons-area"
          >
            {/* Top row: 3 buttons */}
            <div className="contact-buttons-row">
              {SOCIAL_LINKS.slice(0, 3).map((link, i) => (
                <motion.a
                  key={link.key}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn"
                  data-testid={`contact-btn-${link.key}`}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{
                    scale: 1.05,
                    y: -4,
                    transition: { type: 'spring', stiffness: 400, damping: 15 },
                  }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    '--btn-accent': link.color,
                    '--btn-bg': link.bgGrad,
                  }}
                >
                  <SpiderWebCorner position="top-left" size={22} color="rgba(255,255,255,0.15)" />
                  <SpiderWebCorner position="bottom-right" size={20} color="rgba(255,255,255,0.1)" />
                  <ComicScratchOverlay />
                  <div className="contact-btn-glow" />
                  <span className="contact-btn-icon">{link.icon}</span>
                  <span className="contact-btn-label font-comic">{link.label}</span>
                  {/* Comic halftone dots on button */}
                  <div className="contact-btn-halftone" />
                </motion.a>
              ))}
            </div>

            {/* Bottom row: 2 buttons */}
            <div className="contact-buttons-row contact-buttons-row-bottom">
              {SOCIAL_LINKS.slice(3).map((link, i) => (
                <motion.a
                  key={link.key}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn"
                  data-testid={`contact-btn-${link.key}`}
                  variants={fadeUp}
                  custom={i + 3}
                  whileHover={{
                    scale: 1.05,
                    y: -4,
                    transition: { type: 'spring', stiffness: 400, damping: 15 },
                  }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    '--btn-accent': link.color,
                    '--btn-bg': link.bgGrad,
                  }}
                >
                  <SpiderWebCorner position="top-left" size={22} color="rgba(255,255,255,0.15)" />
                  <SpiderWebCorner position="bottom-right" size={20} color="rgba(255,255,255,0.1)" />
                  <ComicScratchOverlay />
                  <div className="contact-btn-glow" />
                  <span className="contact-btn-icon">{link.icon}</span>
                  <span className="contact-btn-label font-comic">{link.label}</span>
                  <div className="contact-btn-halftone" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ─── RIGHT: LEGO Spider-Man ─── */}
          <motion.div
            className="contact-spiderman-area"
            variants={scaleIn}
          >
            <div className="spiderman-container">
              {/* Glow behind */}
              <div className="spiderman-glow" />

              {/* Spider-Man image */}
              <motion.img
                src={LEGO_SPIDERMAN_URL}
                alt="LEGO Spider-Man swinging through the city"
                className="spiderman-image"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                draggable={false}
              />

              {/* Spider web decoration in bottom-right */}
              <svg
                className="spiderman-web-decor"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path d="M100 100 Q60 90 50 50" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
                <path d="M100 100 Q80 60 50 50" stroke="rgba(255,255,255,0.15)" strokeWidth="0.6" />
                <path d="M100 100 Q90 70 70 50" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />
                <path d="M100 100 Q70 80 50 70" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                {/* Connecting arcs */}
                <path d="M55 55 Q65 52 75 55" stroke="rgba(255,255,255,0.1)" strokeWidth="0.4" fill="none" />
                <path d="M60 65 Q72 60 82 63" stroke="rgba(255,255,255,0.08)" strokeWidth="0.4" fill="none" />
                <path d="M65 75 Q78 70 88 72" stroke="rgba(255,255,255,0.06)" strokeWidth="0.4" fill="none" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* ─── ENDING MESSAGE ─── */}
        <motion.div
          className="contact-ending"
          variants={fadeUp}
        >
          <div className="ending-line" />
          <p className="ending-text font-comic">
            SEE YOU ACROSS THE{' '}
            <span className="ending-highlight">MULTIVERSE</span>.
          </p>
          <div className="ending-line" />
        </motion.div>
      </motion.div>

      {/* Floating ambient particles */}
      <ContactParticles />
    </section>
  );
}

export default ContactSection;


/* ─── Contact-specific floating particles ─── */
function ContactParticles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1.5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 8 + 10,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.25 + 0.05,
    color: i % 3 === 0 ? '#D7263D' : i % 3 === 1 ? '#4488ff' : '#ffffff',
  }));

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2 }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() > 0.5 ? 10 : -10, 0],
            opacity: [p.opacity, p.opacity * 1.8, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: p.color,
            filter: `blur(${p.size > 3 ? 1 : 0}px)`,
          }}
        />
      ))}
    </div>
  );
}
