import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import landingBg from '../assets/landing-falling.jpg';
import neonSpiderLogo from '../assets/spider-logo-neon.jpg';
import '../hero.css';

/**
 * HeroSection — Cinematic Still (Earth-616)
 *
 * Layout: Option 1A — Full-bleed Spider-Man falling through neon NYC, text
 * stack bottom-left, small neon spider logo top-right as an issue mark.
 *
 * Effects:
 *  • Slow Ken Burns zoom on background
 *  • Subtle mouse parallax (translates inner bg layer)
 *  • Soft animated film grain (SVG noise)
 *  • Occasional chromatic-aberration pulse (every ~8.5s, ~200ms)
 *
 * Tone: cinematic, mature, Spider-Verse movie-inspired.
 * Content (UNCHANGED): NISHCHAL, "With great power, comes great
 * responsibility.", Designer · Builder · Web-Slinger, every-universe-has...
 */

const HeroSection = ({ onEnter }) => {
  const bgInnerRef = useRef(null);

  // Mouse parallax — subtle, GPU-friendly
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    let frame = null;
    const handleMove = (e) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        const node = bgInnerRef.current;
        if (!node) return;
        const x = (e.clientX / window.innerWidth - 0.5) * -18; // ±9px
        const y = (e.clientY / window.innerHeight - 0.5) * -14; // ±7px
        node.style.setProperty('--px', `${x}px`);
        node.style.setProperty('--py', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="cine-hero" data-testid="hero-section">
      {/* ───────── Background image (Ken Burns) ───────── */}
      <div className="cine-hero__bg" aria-hidden>
        <div
          ref={bgInnerRef}
          className="cine-hero__bg-inner"
          style={{ backgroundImage: `url(${landingBg})` }}
        />
      </div>

      {/* Atmosphere */}
      <div className="cine-hero__vignette" aria-hidden />
      <div className="cine-hero__bottom-gradient" aria-hidden />
      <div className="cine-hero__left-gradient" aria-hidden />
      <div className="cine-hero__halftone" aria-hidden />
      <div className="cine-hero__grain" aria-hidden />
      <div className="cine-hero__chroma" aria-hidden />

      {/* ───────── Top-right issue mark (neon spider logo) ───────── */}
      <div className="cine-hero__issuemark" data-testid="hero-spider-logo">
        <div className="cine-hero__issuemark-meta">
          <span>ISSUE 01</span>
          <strong>EARTH-616</strong>
        </div>
        <img
          src={neonSpiderLogo}
          alt="Spider-Verse issue mark"
          className="cine-hero__issuemark-logo"
          draggable={false}
        />
      </div>

      {/* ───────── Bottom-left content stack ───────── */}
      <motion.div
        className="cine-hero__content"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.16, delayChildren: 0.35 } },
        }}
      >
        <motion.div
          className="cine-hero__eyebrow"
          data-testid="hero-badge"
          variants={{
            hidden: { opacity: 0, y: 14 },
            show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.2, 0.8, 0.2, 1] } },
          }}
        >
          // EARTH-616
        </motion.div>

        <motion.h1
          className="cine-hero__name"
          data-testid="hero-name"
          variants={{
            hidden: { opacity: 0, y: 32 },
            show: { opacity: 1, y: 0, transition: { duration: 1.05, ease: [0.2, 0.8, 0.2, 1] } },
          }}
        >
          NISHCHAL<span className="cine-hero__name-accent">.</span>
        </motion.h1>

        <motion.div
          className="cine-hero__roleline"
          variants={{
            hidden: { opacity: 0, y: 14 },
            show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] } },
          }}
        >
          <span className="cine-hero__roleline-dot" aria-hidden />
          Designer · Builder · Web-Slinger
        </motion.div>

        <motion.blockquote
          className="cine-hero__quote"
          data-testid="hero-quote"
          variants={{
            hidden: { opacity: 0, y: 18 },
            show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] } },
          }}
        >
          “With great power, <span className="cine-hero__quote-accent">comes</span> great responsibility.”
        </motion.blockquote>

        <motion.p
          className="cine-hero__intro"
          data-testid="hero-intro"
          variants={{
            hidden: { opacity: 0, y: 14 },
            show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.2, 0.8, 0.2, 1] } },
          }}
        >
          Every universe has a story. This one belongs to me — chasing ideas the
          way Spider-Man chases skylines. Step through the portal and pick your
          reality.
        </motion.p>

        <motion.button
          type="button"
          onClick={onEnter}
          className="cine-hero__cta"
          data-testid="enter-multiverse-button"
          variants={{
            hidden: { opacity: 0, y: 14 },
            show: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] } },
          }}
        >
          <span>Enter the Multiverse</span>
          <span className="cine-hero__cta-arrow" aria-hidden>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 2v10M2.5 7.5L7 12l4.5-4.5" />
            </svg>
          </span>
        </motion.button>
      </motion.div>

      {/* ───────── Bottom-right frame meta ───────── */}
      <div className="cine-hero__frame-meta hide-mobile" aria-hidden>
        <strong>SCENE 01 / IV</strong>
        <span className="cine-hero__frame-meta-rule" />
        <span>A MULTIVERSE PORTFOLIO</span>
      </div>
    </section>
  );
};

export default HeroSection;
