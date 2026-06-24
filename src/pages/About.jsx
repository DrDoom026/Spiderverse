import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import panel1Img from '../assets/panel1-forest.jpg';
import panel2Img from '../assets/panel2-portrait.jpg';
import panel3Img from '../assets/panel3-times.jpg';
import panel4Img from '../assets/panel4-chromatic.jpg';
import '../about.css';



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
            <span className="about-media__caption">Issue 1</span>
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
            <img src={panel2Img} alt="Spider-Man at desk, late-night coding" className="about-media__img" />
            <div className="about-media__halftone" />
            <div className="about-media__grain" />
            <span className="about-media__caption about-media__caption--alt">Origin · Issue 02</span>
          </div>

          <div className="origin-notif" data-testid="origin-anomaly-notif">
            <div className="origin-notif__label">
              <span>Anomaly Detected</span>
            </div>
            <div className="origin-notif__text">
              Subject developed an unhealthy curiosity
              about how things work.
            </div>
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
            // · ORIGIN
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
            ANOMALY DETECTED
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
            <span className="about-media__caption">Final Issue</span>
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
            // · THE JOURNEY
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
            variants={{
              hidden: { opacity: 0, scale: 0.92, y: 18 },
              show: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { duration: 0.85, ease: [0.2, 1.3, 0.4, 1] },
              },
            }}
            className="canon-event canon-event--compact"
            data-testid="canon-event-linux"
          >
            <div className="canon-event__label">
              <span>Canon Event Logged</span>
            </div>
            <div className="canon-event__text">
              [ A critical failure in the root directory that somehow stabilized my entire timeline. ]
            </div>
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
