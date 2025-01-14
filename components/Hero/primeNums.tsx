'use client';

import { useEffect, useRef } from 'react';

const PrimeNumbersBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    const generatePrimes = (max: number): number[] => {
      const isPrime = Array(max + 1).fill(true);
      isPrime[0] = isPrime[1] = false;

      for (let i = 2; i * i <= max; i++) {
        if (isPrime[i]) {
          for (let j = i * i; j <= max; j += i) {
            isPrime[j] = false;
          }
        }
      }

      return isPrime.reduce<number[]>((primes, isPrime, i) => {
        if (isPrime) primes.push(i);
        return primes;
      }, []);
    };

    const primes = generatePrimes(200);

    const circles = primes.map((prime) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 30 + 20,
      angle: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.01 + 0.005,
      prime: prime,
      color: `hsl(${Math.random() * 250 + 30}, 38%, 50%)`,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const circle of circles) {
        circle.angle += circle.speed;
        circle.x += Math.cos(circle.angle) * 0.5;
        circle.y += Math.sin(circle.angle) * 0.5;

        // Wrap around the canvas
        if (circle.x > width) circle.x = 0;
        if (circle.x < 0) circle.x = width;
        if (circle.y > height) circle.y = 0;
        if (circle.y < 0) circle.y = height;

        // Glow effect
        ctx.shadowBlur = 5;
        ctx.shadowColor = circle.color;

        // Draw the prime number
        ctx.save();
        ctx.translate(circle.x, circle.y);
        ctx.rotate(circle.angle);
        ctx.font = `${circle.size}px Arial`;
        ctx.fillStyle = circle.color;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(circle.prime.toString(), 0, 0);
        ctx.restore();
      }

      requestAnimationFrame(draw);
    };

    draw();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute left-0 top-0 h-full w-full bg-transparent"
    ></canvas>
  );
};

export default PrimeNumbersBackground;
