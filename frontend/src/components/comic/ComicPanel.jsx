import { motion } from 'framer-motion';

/**
 * ComicPanel — A bordered comic frame with optional caption, sound-effect,
 * jitter rotation and reveal animation. Composable container.
 */

export default function ComicPanel({
  children,
  rotate = 0,
  border = 4,
  background = '#fff',
  shadow = '8px 8px 0 #0a0a0a',
  caption,
  captionPos = 'top-left', // top-left | top-right | bottom-left | bottom-right
  delay = 0,
  className = '',
  style = {},
  reveal = true,
  inViewMargin = '-60px',
  flexFill = false,
}) {
  const captionStyle = {
    position: 'absolute',
    background: '#FFD60A',
    color: '#0a0a0a',
    border: '3px solid #0a0a0a',
    padding: '6px 12px',
    fontFamily: "'Bangers', cursive",
    letterSpacing: '0.06em',
    fontSize: 14,
    lineHeight: 1,
    zIndex: 3,
    boxShadow: '3px 3px 0 #0a0a0a',
    ...{
      'top-left': { top: -14, left: 16 },
      'top-right': { top: -14, right: 16 },
      'bottom-left': { bottom: -14, left: 16 },
      'bottom-right': { bottom: -14, right: 16 },
    }[captionPos],
  };

  const Wrap = reveal ? motion.div : 'div';
  const motionProps = reveal
    ? {
        initial: { opacity: 0, scale: 0.92, rotate: rotate - 4 },
        whileInView: { opacity: 1, scale: 1, rotate },
        viewport: { once: true, margin: inViewMargin },
        transition: { duration: 0.6, delay, ease: [0.2, 0.9, 0.3, 1] },
      }
    : {};

  return (
    <Wrap
      className={`comic-panel ${className}`}
      style={{
        position: 'relative',
        background,
        border: `${border}px solid #0a0a0a`,
        boxShadow: shadow,
        overflow: 'hidden',
        ...(flexFill && { display: 'flex', alignItems: 'stretch' }),
        ...style,
      }}
      {...motionProps}
    >
      {caption && <span style={captionStyle}>{caption}</span>}
      {children}
    </Wrap>
  );
}
