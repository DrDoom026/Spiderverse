import { motion } from 'framer-motion';
import legoSpiderman from '../assets/contact/lego-spiderman.jpg';

const SOCIAL_LINKS = [
  {
    key: 'instagram',
    label: 'INSTAGRAM',
    url: 'https://www.instagram.com/nish_chal_7?igsh=MWxtdjczdXNhbWNiZA==',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    key: 'email',
    label: 'EMAIL',
    url: 'mailto:karnnishchal026@gmail.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 7L2 7" />
      </svg>
    ),
  },
  {
    key: 'twitter',
    label: 'TWITTER',
    url: 'https://x.com/Nishchal026',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.1177z" />
      </svg>
    ),
  },
  {
    key: 'linkedin',
    label: 'LINKEDIN',
    url: 'https://www.linkedin.com/in/nishchal-karn-b5a8b1384?',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] },
  },
};

const buttonContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.6,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export default function ContactSection() {
  return (
    <section
      className="contact-hero"
      data-testid="contact-section"
      id="contact-lego"
    >
      {/* === Base image: full viewport bleed === */}
      <div className="contact-hero__bg">
        <img
          src={legoSpiderman}
          alt="LEGO Spider-Man swinging through a bright cityscape"
          loading="eager"
        />
      </div>

      {/* === Aesthetic layers (matching gallery skeletal structure but opposite mood) === */}
      <div className="contact-hero__left-gradient" aria-hidden="true" />
      <div className="contact-hero__bottom-gradient" aria-hidden="true" />
      <div className="contact-hero__grain" aria-hidden="true" />

      {/* === Mid-Left overlay content === */}
      <motion.div
        className="contact-hero__overlay"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="contact-hero__badge" variants={childVariants}>
          Lego Earth
        </motion.div>

        <motion.div className="contact-hero__eyebrow" variants={childVariants}>
          Get In Touch
        </motion.div>

        <motion.h1 className="contact-hero__title" variants={childVariants} data-testid="contact-heading">
          <span className="char-c">S</span>
          <span className="char-o">E</span>
          <span className="char-n">N</span>
          <span className="char-t">D</span>
          <span className="contact-hero__title-space" aria-hidden="true">&nbsp;</span>
          <span className="char-a">A</span>
          <span className="contact-hero__title-space" aria-hidden="true">&nbsp;</span>
          <span className="char-c2">S</span>
          <span className="char-t2">I</span>
          <span className="char-n">G</span>
          <span className="char-t">N</span>
          <span className="char-a">A</span>
          <span className="char-c">L</span>
        </motion.h1>


        {/* --- Social links stacked column --- */}
        <motion.div
          className="contact-hero__buttons-column"
          variants={buttonContainerVariants}
        >
          {SOCIAL_LINKS.map((link) => (
            <motion.a
              key={link.key}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-sticker-btn"
              data-testid={`contact-btn-${link.key}`}
              variants={buttonVariants}
            >
              <span className="contact-sticker-btn__icon">{link.icon}</span>
              <span className="contact-sticker-btn__label">{link.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* === Bottom-Left Universe Location Label === */}
      <div className="contact-hero__bottom-left-label">
        Earth-Lego / The City
      </div>

      {/* === Bottom-Center Cinematic Multiverse Label === */}
      <div className="contact-hero__bottom-center-label">
        See You Across The Multiverse
      </div>
    </section>
  );
}
