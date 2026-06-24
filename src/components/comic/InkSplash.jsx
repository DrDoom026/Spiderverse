import { motion } from 'framer-motion';

/**
 * InkSplash — SVG ink splatter / ink-blot for Spider-Verse comic feel.
 * Random organic blob for backgrounds, accents, behind type.
 */

const BLOBS = [
  'M61,-58C75,-44,79,-22,77,-3C75,16,67,32,54,46C40,60,20,72,-1,73C-22,74,-44,64,-58,48C-72,32,-78,11,-75,-9C-72,-29,-60,-47,-44,-58C-29,-69,-15,-72,3,-74C22,-76,46,-73,61,-58Z',
  'M55,-50C68,-36,73,-15,69,3C65,21,52,37,36,49C20,61,1,69,-19,68C-39,67,-60,57,-69,40C-78,23,-75,0,-67,-18C-58,-36,-44,-49,-28,-58C-12,-67,5,-72,21,-69C37,-66,42,-64,55,-50Z',
  'M48,-46C61,-31,69,-12,68,6C67,24,57,42,42,52C26,62,5,64,-15,61C-35,57,-54,48,-63,32C-72,16,-71,-7,-62,-23C-53,-38,-37,-46,-21,-52C-4,-58,13,-62,28,-58C42,-54,42,-54,48,-46Z',
  'M44,-40C57,-26,64,-9,62,8C60,25,49,42,33,52C18,62,-2,65,-22,60C-42,55,-62,42,-66,25C-70,8,-58,-13,-46,-29C-34,-45,-22,-56,-6,-58C9,-60,29,-54,44,-40Z',
];

export default function InkSplash({
  color = '#0a0a0a',
  size = 220,
  rotate = 0,
  opacity = 1,
  index = 0,
  className = '',
  style = {},
  animate = false,
}) {
  const path = BLOBS[index % BLOBS.length];

  const inner = (
    <svg
      viewBox="-100 -100 200 200"
      width={size}
      height={size}
      aria-hidden
      style={{ display: 'block', overflow: 'visible' }}
    >
      <path d={path} fill={color} opacity={opacity} transform={`rotate(${rotate})`} />
    </svg>
  );

  if (animate) {
    return (
      <motion.div
        className={`ink-splash ${className}`}
        initial={{ scale: 0, rotate: rotate - 45, opacity: 0 }}
        animate={{ scale: 1, rotate, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.2, 1.4, 0.4, 1] }}
        style={{ position: 'absolute', pointerEvents: 'none', ...style }}
      >
        {inner}
      </motion.div>
    );
  }

  return (
    <div
      className={`ink-splash ${className}`}
      style={{ position: 'absolute', pointerEvents: 'none', ...style }}
      aria-hidden
    >
      {inner}
    </div>
  );
}
