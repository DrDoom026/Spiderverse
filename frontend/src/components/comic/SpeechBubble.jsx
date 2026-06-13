import { motion } from 'framer-motion';

/**
 * SpeechBubble — Comic-book speech / thought / narration box.
 * variants: `speech` (rounded with tail), `thought` (cloud), `caption` (yellow box), `whisper` (dashed)
 */

export default function SpeechBubble({
  variant = 'caption',
  children,
  rotate = -1.5,
  width = 280,
  tailSide = 'left',
  bg,
  color = '#0a0a0a',
  className = '',
  style = {},
  delay = 0,
}) {
  const baseStyle = {
    position: 'relative',
    display: 'inline-block',
    width,
    transform: `rotate(${rotate}deg)`,
    color,
    fontFamily: "'Bangers', cursive",
    letterSpacing: '0.05em',
    fontSize: 18,
    lineHeight: 1.15,
    padding: '14px 18px',
    ...style,
  };

  if (variant === 'caption') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12, rotate: rotate - 4 }}
        whileInView={{ opacity: 1, y: 0, rotate }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay, ease: [0.2, 0.8, 0.2, 1] }}
        className={`bubble bubble--caption ${className}`}
        style={{
          ...baseStyle,
          background: bg || '#FFD60A',
          border: '3px solid #0a0a0a',
          boxShadow: '6px 6px 0 #0a0a0a',
        }}
      >
        {children}
      </motion.div>
    );
  }

  if (variant === 'whisper') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={`bubble bubble--whisper ${className}`}
        style={{
          ...baseStyle,
          background: bg || '#fff',
          border: '2px dashed #0a0a0a',
          color: '#0a0a0a',
        }}
      >
        {children}
      </motion.div>
    );
  }

  // speech & thought share the bubble base
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, rotate: rotate - 8 }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, delay, ease: [0.2, 1.3, 0.4, 1] }}
      className={`bubble bubble--${variant} ${className}`}
      style={{
        ...baseStyle,
        background: bg || '#fff',
        borderRadius: variant === 'thought' ? '50% 45% 50% 45%' : '22px',
        border: '3px solid #0a0a0a',
        boxShadow: '5px 5px 0 #0a0a0a',
      }}
    >
      {children}
      {variant === 'speech' && (
        <svg
          width="36"
          height="28"
          viewBox="0 0 36 28"
          style={{
            position: 'absolute',
            bottom: -22,
            [tailSide]: 24,
          }}
        >
          <path
            d="M2 2 L30 2 L8 26 Z"
            fill={bg || '#fff'}
            stroke="#0a0a0a"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path d="M2 2 L8 26" stroke={bg || '#fff'} strokeWidth="4" />
        </svg>
      )}
    </motion.div>
  );
}
