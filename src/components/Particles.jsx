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
        left: (i * 17) % 100,
        top: (i * 23) % 100,
        size: ((i * 7) % 30) / 10 + 1.2,
        duration: ((i * 13) % 80) / 10 + 6,
        delay: ((i * 9) % 40) / 10,
        color: COLORS[(i * 3) % COLORS.length],
        drift: ((i * 11) % 40) - 20,
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
