import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import panel1Img from '../assets/panel1-rooftop.png';
import panel2Img from '../assets/panel2-portrait.jpg';
import panel3Img from '../assets/panel3-times.jpg';
import panel4Img from '../assets/panel4-chromatic.jpg';
import '../about.css';

// Inline SVG icons (lucide-react v1 doesn't ship Github/Linkedin/Mail/Twitter)
const IconGithub = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.05.78 2.12v3.14c0 .31.21.68.8.56C20.21 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z"/>
  </svg>
);
const IconLinkedin = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45ZM22.23 0H1.77C.79 0 0 .78 0 1.74v20.52C0 23.22.79 24 1.77 24h20.46C23.21 24 24 23.22 24 22.26V1.74C24 .78 23.21 0 22.23 0Z"/>
  </svg>
);
const IconMail = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="3" y="5" width="18" height="14" rx="2"/>
    <path d="m3 7 9 6 9-6"/>
  </svg>
);
const IconTwitter = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
    <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.99l-5.47-7.16L4.2 22H.94l8.04-9.19L0 2h7.16l4.94 6.53L18.24 2Zm-2.45 18h1.82L7.27 4h-1.9l10.42 16Z"/>
  </svg>
);

/**
 * About — Peter Parker Universe (Earth-616 origin story).
 *
 * Four cinematic comic panels. Text is the HERO. Imagery supports the text.
 * Classic Spider-Verse Peter Parker aesthetics: rooftop contemplation,
 * cinematic typography, halftone & comic accents (mature, not Saturday cartoon).
 */

// Shared motion variants
const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};

const About = ({ onBack }) => {
  return (
    <motion.main
      className="about-page"
      key="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      data-testid="about-page"
    >
      <Navbar />

      <button
        type="button"
        onClick={onBack}
        className="about-back"
        data-testid="about-back-button"
      >
        <ArrowLeft size={14} strokeWidth={2.2} />
        Back to Multiverse
      </button>

      {/* ═══════════════ PANEL 1 — INTRODUCTION ═══════════════ */}
      <section
        className="about-panel about-panel--split"
        data-testid="about-panel-1"
      >
        <div className="about-panel__atmosphere about-panel__atmosphere--red" />
        <div className="about-panel__grain" />

        <motion.div
          className="about-panel__media about-panel__media--right"
          initial={{ opacity: 0, x: 50, rotate: 2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="about-media">
            <img src={panel1Img} alt="Spider-Man on rooftop" className="about-media__img" />
            <div className="about-media__halftone" />
            <div className="about-media__grain" />
            <span className="about-media__caption">Panel 01 / Rooftop</span>
          </div>
        </motion.div>

        <motion.div
          className="about-text about-panel__text--left"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={reveal} className="about-text__eyebrow">
            // EARTH-616 · INTRODUCTION
          </motion.div>

          <motion.p variants={reveal} className="about-opener" data-testid="about-opener">
            Alright, let’s do this one last time.”
          </motion.p>

          <motion.p variants={reveal} className="about-text__body">
            My name is <strong>Nishchal</strong>. I’m a Computer Science student, a
            chronic late-night rabbit-hole diver, and apparently, the sole defender
            of my own personal corner of the multiverse.
          </motion.p>
        </motion.div>

        <div className="about-panel__index">
          <strong>I</strong>
          <span className="about-panel__index-rule" />
          Introduction
        </div>
      </section>

      {/* ═══════════════ PANEL 2 — RADIOACTIVE CURIOSITY ═══════════════ */}
      <section
        className="about-panel about-panel--split"
        data-testid="about-panel-2"
      >
        <div className="about-panel__atmosphere about-panel__atmosphere--blue" />
        <div className="about-panel__grain" />

        <motion.div
          className="about-panel__media about-panel__media--left"
          initial={{ opacity: 0, x: -50, rotate: -2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="about-media" style={{
            boxShadow: '10px 10px 0 #1E3A8A, 10px 10px 0 3px #0a0a0a, 0 30px 60px rgba(0, 0, 0, 0.55)',
          }}>
            <img src={panel2Img} alt="Spider-Man portrait" className="about-media__img" />
            <div className="about-media__halftone" />
            <div className="about-media__grain" />
            <span className="about-media__caption about-media__caption--alt">Origin · Issue 02</span>
          </div>
        </motion.div>

        <motion.div
          className="about-text about-panel__text--right"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={reveal} className="about-text__eyebrow">
            // PANEL 02 · ORIGIN
          </motion.div>

          <motion.h2 variants={reveal} className="about-text__title">
            Radioactive <span className="accent">Curiosity.</span>
          </motion.h2>

          <motion.p variants={reveal} className="about-text__body">
            My origin story didn’t involve a genetically altered spider. Instead, I
            was bitten by a <em>radioactive curiosity</em>. Whether it’s breaking
            and rebuilding Linux configs or trying to understand how the universe
            ticks at 2&nbsp;AM. The more complex a system is, the more I feel
            compelled to figure out how it works.
          </motion.p>

          <motion.p variants={reveal} className="about-text__body">
            When I’m not staring at a terminal window, I’m usually looking at the
            world through a camera lens, a film screen, or a deep sci-fi concept.
            I love stories, whether they’re told through a perfectly framed
            photograph, or a stunning cinematic sequence.
          </motion.p>
        </motion.div>

        <div className="about-panel__index">
          <strong>II</strong>
          <span className="about-panel__index-rule" />
          Radioactive Curiosity
        </div>
      </section>

      {/* ═══════════════ PANEL 3 — CANON EVENT ═══════════════ */}
      <section
        className="about-panel about-panel--full"
        data-testid="about-panel-3"
      >
        <div
          className="about-panel__bg-full"
          style={{ backgroundImage: `url(${panel3Img})` }}
        />
        <div className="about-panel__atmosphere about-panel__atmosphere--yellow" />
        <div className="about-panel__grain" />

        <motion.div
          className="about-panel__center"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={reveal} className="about-text__eyebrow">
            // PANEL 03 · ANOMALY DETECTED
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.92, y: 18 },
              show: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { duration: 0.85, ease: [0.2, 1.3, 0.4, 1] },
              },
            }}
            className="canon-event"
            data-testid="canon-event-card"
          >
            <div className="canon-event__label">
              <span>Canon Event Detected</span>
            </div>
            <div className="canon-event__text">
              [ Social battery found dead after minimal human interaction. ]
            </div>
          </motion.div>

          <motion.p variants={reveal} className="about-text__body">
            Yeah, I’m naturally introverted, and honestly? I consider it a
            superpower. While other people are looking for a crowd, you can usually
            find me at a café, a restaurant, or a cinema by myself. Solitude isn’t
            lonely to me; it’s my personal sanctum where I think, create, and
            recharge my batteries. If you give me a choice between a crowded club
            and a quiet mountain trail that offers some actual perspective, I’m
            taking the mountain every single time.
          </motion.p>
        </motion.div>

        <div className="about-panel__index">
          <strong>III</strong>
          <span className="about-panel__index-rule" />
          Canon Event
        </div>
      </section>

      {/* ═══════════════ PANEL 4 — THE JOURNEY ═══════════════ */}
      <section
        className="about-panel about-panel--split"
        data-testid="about-panel-4"
        style={{ paddingBottom: '140px' }}
      >
        <div className="about-panel__atmosphere about-panel__atmosphere--full" />
        <div className="about-panel__grain" />

        <motion.div
          className="about-panel__media about-panel__media--right"
          initial={{ opacity: 0, x: 50, rotate: 1.5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="about-media" style={{
            boxShadow: '12px 12px 0 #FF2DAF, 12px 12px 0 3px #0a0a0a, 0 40px 80px rgba(255, 45, 175, 0.18)',
          }}>
            <img src={panel4Img} alt="Spider-Verse iconic" className="about-media__img" />
            <div className="about-media__halftone" />
            <div className="about-media__grain" />
            <span className="about-media__caption">Final Frame</span>
          </div>
        </motion.div>

        <motion.div
          className="about-text about-panel__text--left"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={reveal} className="about-text__eyebrow">
            // PANEL 04 · THE JOURNEY
          </motion.div>

          <motion.h2 variants={reveal} className="about-text__title">
            A map of the <span className="accent">journey.</span>
          </motion.h2>

          <motion.p variants={reveal} className="about-text__body">
            At my core, I’m just someone who loves the process of learning. Every
            photo I take, and every glitch I debug is just another step in
            understanding the world a little better than I did yesterday.
          </motion.p>

          <motion.p variants={reveal} className="about-text__body">
            This portfolio is a map of that journey, a collection of things I’ve
            built, captured, and discovered across my own little universe. Drop a
            line if you want to talk shop, swap dotfiles, or discuss cinema.
          </motion.p>

          <motion.div
            variants={reveal}
            className="about-contact"
            data-testid="about-contact-links"
          >
            <a href="https://github.com/DrDoom026" target="_blank" rel="noreferrer" data-testid="contact-github">
              <IconGithub /> GitHub
            </a>
            <a href="#" data-testid="contact-linkedin">
              <IconLinkedin /> LinkedIn
            </a>
            <a href="mailto:hello@nishchal.dev" data-testid="contact-email">
              <IconMail /> Email
            </a>
            <a href="#" data-testid="contact-twitter">
              <IconTwitter /> X / Twitter
            </a>
          </motion.div>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 1.2, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] },
              },
            }}
            className="about-closing"
            data-testid="about-closing"
          >
            See You Across The Multiverse.
          </motion.p>
        </motion.div>

        <div className="about-panel__index">
          <strong>IV</strong>
          <span className="about-panel__index-rule" />
          The Journey
        </div>
      </section>
    </motion.main>
  );
};

export default About;
