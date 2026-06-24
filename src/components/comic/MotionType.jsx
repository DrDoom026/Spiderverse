import { motion } from 'framer-motion';

/**
 * MotionType — Letter-by-letter motion typography reveal.
 * Each letter tumbles in with random jitter, mimicking comic SFX.
 */

const letterVariants = {
  hidden: { opacity: 0, y: 40, rotate: -8, scale: 0.7 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      delay: i * 0.045,
      duration: 0.6,
      ease: [0.2, 1.4, 0.4, 1],
    },
  }),
};

export default function MotionType({
  text,
  className = '',
  style = {},
  trigger = 'inView',
  baseDelay = 0,
  jitter = true,
  as: Tag = 'span',
}) {
  const letters = text.split('');
  const MotionTag = motion[Tag] || motion.span;

  return (
    <MotionTag
      className={className}
      style={{ display: 'inline-flex', flexWrap: 'wrap', whiteSpace: 'pre', ...style }}
      initial="hidden"
      {...(trigger === 'inView'
        ? { whileInView: 'show', viewport: { once: true, amount: 0.4 } }
        : { animate: 'show' })}
    >
      {letters.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          custom={i + (baseDelay * 22) / 0.045}
          variants={letterVariants}
          style={{
            display: 'inline-block',
            transformOrigin: '50% 100%',
            ...(jitter && { rotate: ((i % 5) - 2) * 1.5 + 'deg' }),
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </MotionTag>
  );
}
