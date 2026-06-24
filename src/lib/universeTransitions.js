/**
 * Universe Transition System — Each universe has its own dimensional travel.
 *
 *   earth616  → Comic panels slide in + web cracks
 *   2099      → Glitch shards + chromatic split + portal distortion
 *   noir      → Color drains away → film grain bloom → typewriter
 *   lego      → UI assembles from LEGO bricks (snap)
 *
 * Each function injects a fullscreen overlay, runs animation, calls
 * `onComplete` near the apex (so the page swap is invisible), then fades out.
 */

const ROOT_Z = 9999;

function el(tag, styles = {}, attrs = {}) {
  const n = document.createElement(tag);
  Object.assign(n.style, styles);
  Object.entries(attrs).forEach(([k, v]) => n.setAttribute(k, v));
  return n;
}

// ─────────────────────────────────────────────────────────────
// Universe themes (color identity per portal)
// ─────────────────────────────────────────────────────────────
export const UNIVERSE_THEME = {
  about: { primary: '#D7263D', secondary: '#1E3A8A', label: 'EARTH-616' },
  projects: { primary: '#00F0FF', secondary: '#FF2DAF', label: 'NUEVA YORK · 2099' },
  gallery: { primary: '#E5E7EB', secondary: '#0a0a0a', label: 'EARTH-90214' },
  contact: { primary: '#FFC700', secondary: '#D7263D', label: 'EARTH-13122 · LEGO' },
  landing: { primary: '#D7263D', secondary: '#1E3A8A', label: 'EARTH-616' },
};

// ─────────────────────────────────────────────────────────────
// EARTH-616 — Comic panel slide
// ─────────────────────────────────────────────────────────────
function transitionEarth616(onComplete) {
  const wrap = el('div', {
    position: 'fixed',
    inset: '0',
    zIndex: ROOT_Z,
    pointerEvents: 'none',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    gap: '6px',
    background: 'transparent',
  });
  for (let i = 0; i < 8; i++) {
    const panel = el('div', {
      background: i % 2 === 0 ? '#D7263D' : '#0a0a0a',
      transform: 'translateY(-110%) rotate(-2deg)',
      transition: `transform 0.55s cubic-bezier(.2,.9,.2,1) ${i * 0.05}s`,
      borderRight: '3px solid #0a0a0a',
      borderBottom: '3px solid #0a0a0a',
    });
    wrap.appendChild(panel);
  }
  document.body.appendChild(wrap);
  requestAnimationFrame(() => {
    [...wrap.children].forEach((p) => (p.style.transform = 'translateY(0) rotate(0)'));
  });
  setTimeout(() => onComplete?.(), 700);
  setTimeout(() => {
    wrap.style.transition = 'opacity 0.5s ease';
    wrap.style.opacity = '0';
    setTimeout(() => wrap.remove(), 550);
  }, 950);
}

// ─────────────────────────────────────────────────────────────
// 2099 — Glitch shards + portal
// ─────────────────────────────────────────────────────────────
function transition2099(onComplete) {
  const overlay = el('div', {
    position: 'fixed',
    inset: '0',
    zIndex: ROOT_Z,
    pointerEvents: 'none',
    background:
      'radial-gradient(circle at 50% 50%, rgba(255,45,175,0.95) 0%, rgba(0,240,255,0.95) 35%, #050017 75%)',
    opacity: '0',
    transition: 'opacity 0.35s ease',
    mixBlendMode: 'normal',
  });
  document.body.appendChild(overlay);

  // shards
  const shards = el('div', {
    position: 'fixed',
    inset: '0',
    zIndex: ROOT_Z + 1,
    pointerEvents: 'none',
    overflow: 'hidden',
  });
  for (let i = 0; i < 14; i++) {
    const w = 40 + Math.random() * 220;
    const h = 4 + Math.random() * 18;
    const shard = el('div', {
      position: 'absolute',
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${w}px`,
      height: `${h}px`,
      background: i % 2 ? '#00F0FF' : '#FF2DAF',
      transform: 'translateX(-150vw) skewX(-25deg)',
      filter: 'blur(1px)',
      boxShadow: `0 0 14px ${i % 2 ? '#00F0FF' : '#FF2DAF'}`,
      transition: `transform 0.7s cubic-bezier(.2,.9,.2,1) ${i * 0.04}s`,
    });
    shards.appendChild(shard);
  }
  document.body.appendChild(shards);

  // label
  const label = el(
    'div',
    {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%) scale(0.7)',
      zIndex: ROOT_Z + 2,
      fontFamily: "'Bangers', cursive",
      fontSize: 'clamp(2rem, 6vw, 5rem)',
      letterSpacing: '0.06em',
      color: '#fff',
      opacity: '0',
      textAlign: 'center',
      textShadow: '-3px 0 #FF2DAF, 3px 0 #00F0FF',
      transition: 'all 0.4s ease 0.25s',
      pointerEvents: 'none',
    }
  );
  label.textContent = '// 2099';
  document.body.appendChild(label);

  requestAnimationFrame(() => {
    overlay.style.opacity = '1';
    [...shards.children].forEach((s) => (s.style.transform = 'translateX(0) skewX(-25deg)'));
    label.style.opacity = '1';
    label.style.transform = 'translate(-50%,-50%) scale(1)';
  });

  setTimeout(() => onComplete?.(), 850);
  setTimeout(() => {
    overlay.style.opacity = '0';
    shards.style.transition = 'opacity 0.4s';
    shards.style.opacity = '0';
    label.style.opacity = '0';
    setTimeout(() => {
      overlay.remove();
      shards.remove();
      label.remove();
    }, 450);
  }, 1200);
}

// ─────────────────────────────────────────────────────────────
// Noir — Desaturate + grain bloom
// ─────────────────────────────────────────────────────────────
function transitionNoir(onComplete) {
  const desat = el('div', {
    position: 'fixed',
    inset: '0',
    zIndex: ROOT_Z,
    pointerEvents: 'none',
    background: '#0a0a0a',
    opacity: '0',
    transition: 'opacity 0.5s ease',
    backdropFilter: 'grayscale(0)',
  });
  document.body.appendChild(desat);

  const grain = el('div', {
    position: 'fixed',
    inset: '-20%',
    zIndex: ROOT_Z + 1,
    pointerEvents: 'none',
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
    backgroundSize: '180px',
    opacity: '0',
    transition: 'opacity 0.5s ease',
    mixBlendMode: 'screen',
  });
  document.body.appendChild(grain);

  const label = el('div', {
    position: 'fixed',
    inset: '0',
    zIndex: ROOT_Z + 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Special Elite', monospace",
    color: '#e8d9b8',
    fontSize: 'clamp(1.4rem, 4vw, 3rem)',
    letterSpacing: '0.25em',
    opacity: '0',
    transition: 'opacity 0.5s ease 0.2s',
    pointerEvents: 'none',
    textAlign: 'center',
  });
  label.innerHTML = '<span>EARTH—90214</span>';
  document.body.appendChild(label);

  requestAnimationFrame(() => {
    desat.style.opacity = '1';
    grain.style.opacity = '0.35';
    label.style.opacity = '1';
  });

  setTimeout(() => onComplete?.(), 900);
  setTimeout(() => {
    [desat, grain, label].forEach((n) => (n.style.opacity = '0'));
    setTimeout(() => [desat, grain, label].forEach((n) => n.remove()), 550);
  }, 1300);
}

// ─────────────────────────────────────────────────────────────
// LEGO — Assemble from bricks
// ─────────────────────────────────────────────────────────────
function transitionLego(onComplete) {
  const COLS = 14;
  const ROWS = 10;
  const wrap = el('div', {
    position: 'fixed',
    inset: '0',
    zIndex: ROOT_Z,
    pointerEvents: 'none',
    display: 'grid',
    gridTemplateColumns: `repeat(${COLS}, 1fr)`,
    gridTemplateRows: `repeat(${ROWS}, 1fr)`,
    background: 'transparent',
  });
  const palette = ['#E63946', '#FFC700', '#1E88E5', '#2EC4B6', '#FF7A00', '#0a0a0a'];
  const total = COLS * ROWS;
  for (let i = 0; i < total; i++) {
    const brick = el(
      'div',
      {
        position: 'relative',
        background: palette[Math.floor(Math.random() * palette.length)],
        opacity: '0',
        transform: `translate(${(Math.random() - 0.5) * 80}vw, ${
          (Math.random() - 0.5) * 80
        }vh) rotate(${(Math.random() - 0.5) * 60}deg) scale(0.4)`,
        transition: `all 0.5s cubic-bezier(.2,1.5,.4,1) ${(i / total) * 0.4}s`,
        boxShadow: 'inset -4px -4px 0 rgba(0,0,0,.25), inset 4px 4px 0 rgba(255,255,255,.25)',
      }
    );
    // stud
    const stud = el('div', {
      position: 'absolute',
      top: '15%',
      left: '38%',
      width: '24%',
      height: '24%',
      borderRadius: '50%',
      background: 'inherit',
      boxShadow: 'inset -2px -2px 0 rgba(0,0,0,.25), 0 1px 2px rgba(0,0,0,.3)',
    });
    brick.appendChild(stud);
    wrap.appendChild(brick);
  }
  document.body.appendChild(wrap);

  requestAnimationFrame(() => {
    [...wrap.children].forEach((b) => {
      b.style.opacity = '1';
      b.style.transform = 'translate(0,0) rotate(0) scale(1)';
    });
  });

  setTimeout(() => onComplete?.(), 750);
  setTimeout(() => {
    wrap.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    wrap.style.opacity = '0';
    setTimeout(() => wrap.remove(), 550);
  }, 1100);
}

// ─────────────────────────────────────────────────────────────
// Dispatcher
// ─────────────────────────────────────────────────────────────
export function runUniverseTransition(target, onComplete) {
  switch (target) {
    case 'about':
    case 'landing':
      return transitionEarth616(onComplete);
    case 'projects':
      return transition2099(onComplete);
    case 'gallery':
      return transitionNoir(onComplete);
    case 'contact':
      return transitionLego(onComplete);
    default:
      onComplete?.();
  }
}
