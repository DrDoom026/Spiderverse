import { useMemo } from 'react';
import { motion } from 'framer-motion';

const COLORS = [
  'rgba(215, 38, 61, 0.85)',
  'rgba(30, 58, 138, 0.85)',
  'rgba(59, 130, 246, 0.7)',
  'rgba(255, 255, 255, 0.55)',
];

const Particles = ({ count = 38 }) => {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1.2,
        duration: Math.random() * 8 + 6,
        delay: Math.random() * 4,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        drift: (Math.random() - 0.5) * 40,
      })),
    [count]
  );

  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      {items.map((p) => (
        <motion.span
          key={p.id}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 0.9, 0], y: [-15, -120], x: [0, p.drift] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeOut',
          }}
          style={{
            position: 'absolute',
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
