import { useMemo } from 'react';

/**
 * HalftoneLayer — Authentic Spider-Verse Lichtenstein halftone dots.
 * Variants: `red`, `blue`, `cyan`, `yellow`, `cream`, `noir`
 * Sizes (dot density): `sm` (3px), `md` (6px), `lg` (10px), `xl` (16px)
 */
const COLORS = {
  red: '#D7263D',
  blue: '#1E3A8A',
  cyan: '#00F0FF',
  yellow: '#FFC700',
  cream: '#F2E9DC',
  noir: '#E5E7EB',
  magenta: '#FF2DAF',
};

const SIZES = { sm: 3, md: 6, lg: 10, xl: 16 };

export default function HalftoneLayer({
  color = 'red',
  size = 'md',
  opacity = 0.18,
  blendMode = 'screen',
  angle = 0,
  className = '',
  style = {},
}) {
  const dot = COLORS[color] || color;
  const px = SIZES[size] || size;
  const dotSize = px * 0.35;

  const styleObj = useMemo(
    () => ({
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      opacity,
      mixBlendMode: blendMode,
      transform: `rotate(${angle}deg) scale(1.4)`,
      backgroundImage: `radial-gradient(${dot} ${dotSize}px, transparent ${dotSize + 0.5}px)`,
      backgroundSize: `${px}px ${px}px`,
      ...style,
    }),
    [dot, px, dotSize, opacity, blendMode, angle, style]
  );

  return <div aria-hidden className={`halftone-layer ${className}`} style={styleObj} />;
}
