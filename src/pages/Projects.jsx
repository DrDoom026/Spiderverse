import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projectsData';
import '../projects.css';
import spiderLogo from '../assets/projects/spider2099-logo.png';

// Spider symbol and logo components using the new red geometric spider logo
const SpiderSymbol = ({ className }) => (
  <img
    src={spiderLogo}
    alt="Spider Symbol"
    className={className}
    style={{
      width: '100%',
      height: '100%',
      display: 'inline-block',
      verticalAlign: 'middle',
      objectFit: 'contain',
    }}
  />
);

const Spider2099Logo = ({ className, size = 32 }) => (
  <img
    src={spiderLogo}
    alt="Spider 2099 Logo"
    className={className}
    style={{
      width: size,
      height: size,
      display: 'inline-block',
      verticalAlign: 'middle',
      objectFit: 'contain',
    }}
  />
);

// Import hero assets
import portalBg from '../assets/projects/spider2099-portal.jpg';
import closerBg from '../assets/projects/spider2099-back.jpg';

export default function Projects({ onBack }) {
  return (
    <motion.main
      data-testid="projects-page"
      className="projects-2099"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Film grain overlay */}
      <div className="projects-grain" />

      {/* Back button */}
      <motion.button
        type="button"
        onClick={onBack}
        className="projects-back-btn"
        data-testid="projects-back-btn"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5" />
          <path d="M12 19l-7-7 7-7" />
        </svg>
        <span>BACK TO MULTIVERSE</span>
      </motion.button>

      {/* ───────── ZONE 1: HERO HEADER ───────── */}
      <section className="projects-hero">
        {/* Portal background */}
        <div className="projects-hero__bg">
          <img src={portalBg} alt="Multiverse portal tunnel" />
        </div>
        <div className="projects-hero__overlay" />
        <div className="projects-hero__grain" />

        {/* Text content — bottom-left */}
        <motion.div
          className="projects-hero__content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="projects-hero__eyebrow">// ARCHIVE_2099</div>

          <h1 className="projects-hero__title">
            PR
            <span className="projects-hero__spider-o">
              <SpiderSymbol />
            </span>
            JECTS
          </h1>

          <div className="projects-hero__subtitle">
            Ideas. Code. Experiments.<br />
            Fragments from different timelines.
          </div>
        </motion.div>


      </section>

      {/* ───────── ZONE 2: PROJECT CARDS ───────── */}
      <section className="projects-section">
        <div className="projects-timeline">
          {projectsData.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* ───────── ZONE 3: CLOSING — MIGUEL QUOTE ───────── */}
      <section className="projects-closer">
        <div className="projects-closer__bg">
          <img src={closerBg} alt="Miguel O'Hara" />
        </div>
        <div className="projects-closer__overlay" />

        <motion.div
          className="projects-closer__content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p className="projects-closer__quote">
            I DON&apos;T SAVE EVERYONE.<br />
            I SAVE WHAT MATTERS.<br />
            THAT&apos;S MY JOB.
          </p>
          <div className="projects-closer__attribution">— MIGUEL O&apos;HARA</div>
        </motion.div>

        {/* Watermark */}
        <motion.div
          className="projects-closer__watermark"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          2099
        </motion.div>

        {/* Spider logo bottom-left */}
        <div className="projects-closer__spider">
          <Spider2099Logo />
        </div>
      </section>
    </motion.main>
  );
}
