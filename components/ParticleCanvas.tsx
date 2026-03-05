'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  angle: number;
  color: string;
  width: number;
  height: number;
  speed: number;
  orbitAngle: number;
  orbitRadius: number;
  type: 'inner' | 'outer';
  vx: number;
  vy: number;
  opacity: number;
}

const INNER_COLORS = [
  '#e53935', '#f44336', '#ef6c00', '#fb8c00', '#fdd835',
  '#43a047', '#1e88e5', '#2196f3', '#5e35b1', '#7e57c2',
  '#d81b60', '#ec407a', '#00acc1',
];

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];

    const init = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      particles = [];

      // Burst center: kanan atas (area jersey images)
      const bx = canvas.width * 0.75;
      const by = canvas.height * 0.38;

      // Inner burst — colorful dashes orbiting di area kanan (sekitar jersey)
      for (let i = 0; i < 80; i++) {
        const orbitAngle = (i / 80) * Math.PI * 2;
        const orbitRadius = 60 + Math.random() * 140;
        particles.push({
          x: bx + Math.cos(orbitAngle) * orbitRadius,
          y: by + Math.sin(orbitAngle) * orbitRadius,
          angle: orbitAngle + Math.PI / 2,
          color: INNER_COLORS[Math.floor(Math.random() * INNER_COLORS.length)],
          width: 2 + Math.random() * 2,
          height: 7 + Math.random() * 9,
          speed: 0.0015 + Math.random() * 0.002,
          orbitAngle,
          orbitRadius,
          type: 'inner',
          vx: 0,
          vy: 0,
          opacity: 0.6 + Math.random() * 0.4,
        });
      }

      // Outer scattered — blue/indigo kecil di seluruh layar
      for (let i = 0; i < 180; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push({
          x,
          y,
          angle: Math.random() * Math.PI * 2,
          color: Math.random() > 0.35 ? '#3d5afe' : '#7c4dff',
          width: 1 + Math.random() * 1.5,
          height: 3 + Math.random() * 6,
          speed: 0,
          orbitAngle: 0,
          orbitRadius: 0,
          type: 'outer',
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          opacity: 0.2 + Math.random() * 0.35,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const bx = canvas.width * 0.75;
      const by = canvas.height * 0.38;

      for (const p of particles) {
        if (p.type === 'inner') {
          p.orbitAngle += p.speed;
          p.x = bx + Math.cos(p.orbitAngle) * p.orbitRadius;
          p.y = by + Math.sin(p.orbitAngle) * p.orbitRadius;
          p.angle = p.orbitAngle + Math.PI / 2;
        } else {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -10) p.x = canvas.width + 10;
          if (p.x > canvas.width + 10) p.x = -10;
          if (p.y < -10) p.y = canvas.height + 10;
          if (p.y > canvas.height + 10) p.y = -10;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.roundRect(-p.width / 2, -p.height / 2, p.width, p.height, p.width / 2);
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const obs = new ResizeObserver(init);
    obs.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      obs.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  );
}
