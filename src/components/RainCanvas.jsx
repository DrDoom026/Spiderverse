import { useEffect, useRef } from 'react';

/**
 * RainCanvas — Animated diagonal rain for the noir gallery.
 * 80 drops, subtle opacity 0.12-0.18, diagonal fall.
 */
export default function RainCanvas() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let drops = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createDrop = () => ({
      x: Math.random() * (canvas.width + 200),
      y: Math.random() * -canvas.height,
      length: Math.random() * 22 + 10,
      speed: Math.random() * 2.2 + 1.8,
      windSpeed: Math.random() * 0.8 + 0.4,
      opacity: Math.random() * 0.06 + 0.12,
      thickness: Math.random() * 0.7 + 0.3,
    });

    const init = () => {
      resize();
      drops = Array.from({ length: 80 }, createDrop);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drops.forEach((drop) => {
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        // Diagonal fall — wind pushes drops to the left
        ctx.lineTo(
          drop.x - drop.length * 0.3,
          drop.y + drop.length
        );
        ctx.strokeStyle = `rgba(170, 180, 200, ${drop.opacity})`;
        ctx.lineWidth = drop.thickness;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Move diagonally
        drop.y += drop.speed;
        drop.x -= drop.windSpeed;

        // Reset when off screen
        if (drop.y > canvas.height + drop.length || drop.x < -50) {
          drop.y = Math.random() * -300;
          drop.x = canvas.width + Math.random() * 200;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    init();
    animate();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="rain-canvas"
      aria-hidden="true"
    />
  );
}
