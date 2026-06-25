import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryData } from '../data/galleryData';
import RainCanvas from './RainCanvas';

// Atmosphere images (hardcoded — these are NOT gallery photos)
import noirAtmo1 from '../assets/gallery/noir1.jpg';
import noirAtmo2 from '../assets/gallery/noir3.jpg';

/**
 * GallerySection — Spider-Noir Visual Archive (Earth-90214)
 * 
 * THREE ZONES, ONE SCROLL:
 *   Zone 1 — Hero header with ghost silhouette
 *   Zone 2 — Universe atmosphere (2 cinematic Spider-Noir shots)
 *   Zone 3 — Personal gallery (asymmetric evidence wall)
 */

/* =========================================
   ANIMATION VARIANTS
   ========================================= */

const headerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

const headerChild = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.2, 0.8, 0.2, 1] },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.2, 0.8, 0.2, 1] },
  },
};

/* =========================================
   LAYOUT PATTERN
   ========================================= */

/**
 * Returns a CSS class based on the photo's position index.
 * The pattern cycles: full → left → right → full-short → left → right → ...
 */
const getLayoutClass = (index) => {
  const patterns = [
    'noir-photo--full',
    'noir-photo--left',
    'noir-photo--right',
    'noir-photo--full-short',
  ];
  return patterns[index % patterns.length];
};


/* =========================================
   COMPONENT
   ========================================= */

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const isOpen = lightboxIndex !== null;

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (galleryData.length === 0) return;
    setLightboxIndex((prev) => (prev + 1) % galleryData.length);
  }, []);

  const goPrev = useCallback(() => {
    if (galleryData.length === 0) return;
    setLightboxIndex((prev) => (prev - 1 + galleryData.length) % galleryData.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handler);
    // Prevent body scroll while lightbox is open
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [isOpen, goNext, goPrev]);

  const currentPhoto = isOpen ? galleryData[lightboxIndex] : null;

  return (
    <section
      className="noir-gallery"
      data-testid="gallery-section"
      id="gallery-noir"
    >
      {/* === Atmospheric layers (entire page) === */}
      <RainCanvas />
      <div className="noir-grain" aria-hidden="true" />
      <div className="noir-vignette" aria-hidden="true" />


      {/* ============================================
          ZONE 1 & 2: HERO ATMOSPHERE
          ============================================ */}
      <div className="noir-atmosphere">

        {/* First image — full viewport bleed with header overlay */}
        <motion.div
          className="noir-atmo__first"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <img
            src={noirAtmo1}
            alt="Spider-Noir silhouette against the cityscape"
            loading="lazy"
          />
          
          <motion.div 
            className="noir-atmo__first-overlay"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="noir-header__badge" variants={headerChild}>
              Earth-90214 · Spider-Noir
            </motion.div>
            <motion.div className="noir-header__eyebrow" variants={headerChild}>
              Visual Archive
            </motion.div>
            <motion.h1 className="noir-header__title" variants={headerChild}>
              SHADOWS
              <span>DON'T LIE</span>
            </motion.h1>
            <motion.p className="noir-header__quote" variants={headerChild}>
              "Every photograph is evidence that a moment existed."
            </motion.p>
          </motion.div>

          <div className="noir-atmo__first-label">
            Earth-90214 / The Docks
          </div>
        </motion.div>

        {/* Second image — offset right with vertical text */}
        <motion.div
          className="noir-atmo__second"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="noir-atmo__second-text">
            MAN IN SHADOWS
          </div>
          <div className="noir-atmo__second-image">
            <img
              src={noirAtmo2}
              alt="Spider-Noir descending through darkness"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>


      {/* Zone divider — amber line + archive text */}
      <div className="noir-divider">
        <div className="noir-divider__line" />
        <div className="noir-divider__text">
          — personal archive below —
        </div>
      </div>


      {/* ============================================
          ZONE 3: PERSONAL GALLERY
          ============================================ */}
      <div className="noir-personal">
        {galleryData.length > 0 ? (
          galleryData.map((photo, index) => (
            <motion.article
              key={photo.id}
              className={`noir-photo ${getLayoutClass(index)}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.15 }}
              onClick={() => openLightbox(index)}
            >
              <div className="noir-photo__wrapper">
                {/* Card number */}
                <div className="noir-photo__number">
                  {photo.id}
                </div>

                {/* Photo */}
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="noir-photo__image"
                  loading="lazy"
                />

                {/* Hover info — bottom-left */}
                <div className="noir-photo__info">
                  <div className="noir-photo__title">{photo.title}</div>
                  <div className="noir-photo__meta">{photo.meta}</div>
                </div>
              </div>
            </motion.article>
          ))
        ) : (
          <motion.div 
            className="noir-empty-state"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{
              gridColumn: '1 / -1',
              textAlign: 'center',
              padding: '80px 24px',
              fontFamily: "'Special Elite', cursive",
              color: 'rgba(255, 255, 255, 0.25)',
              fontSize: '14px',
              letterSpacing: '0.15em',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" style={{ opacity: 0.4 }}>
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
            <p>NO EVIDENCE LOGGED. ARCHIVE AWAITING DEVELOPMENTS.</p>
          </motion.div>
        )}
      </div>


      {/* === Section Footer === */}
      <footer className="noir-footer">
        <div className="noir-footer__rule" />
        <div className="noir-footer__content">
          <p className="noir-footer__quote">
            "In the end, every shadow tells the same story — someone was standing in the light."
          </p>
          <span className="noir-footer__label">
            Gallery · Earth-90214
          </span>
        </div>
      </footer>

      {/* ============================================
          LIGHTBOX — Fullscreen Photo Viewer
          ============================================ */}
      <AnimatePresence>
        {isOpen && currentPhoto && (
          <motion.div
            className="noir-lightbox"
            data-testid="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            {/* Counter */}
            <div className="noir-lightbox__counter">
              {String(lightboxIndex + 1).padStart(2, '0')} / {String(galleryData.length).padStart(2, '0')}
            </div>

            {/* Close button */}
            <button
              type="button"
              className="noir-lightbox__close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>

            {/* Prev arrow */}
            {galleryData.length > 1 && (
              <button
                type="button"
                className="noir-lightbox__nav noir-lightbox__nav--prev"
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                aria-label="Previous photo"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            )}

            {/* Image */}
            <motion.img
              key={currentPhoto.id}
              src={currentPhoto.src}
              alt={currentPhoto.title}
              className="noir-lightbox__image"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              draggable={false}
            />

            {/* Next arrow */}
            {galleryData.length > 1 && (
              <button
                type="button"
                className="noir-lightbox__nav noir-lightbox__nav--next"
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                aria-label="Next photo"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            )}

            {/* Photo info */}
            <div className="noir-lightbox__info">
              <div className="noir-lightbox__title">{currentPhoto.title}</div>
              {currentPhoto.meta && (
                <div className="noir-lightbox__meta">{currentPhoto.meta}</div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
