import React, { useEffect, useRef } from 'react';

const SpeedLines: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    interface Line {
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
    }

    const lines: Line[] = [];
    const maxLines = 50;

    const initLines = () => {
      for (let i = 0; i < maxLines; i++) {
        lines.push({
          x: Math.random() * width,
          y: Math.random() * height - height,
          length: Math.random() * 100 + 50,
          speed: Math.random() * 15 + 5,
          opacity: Math.random() * 0.3
        });
      }
    };

    initLines();

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      lines.forEach(line => {
        line.y += line.speed;
        
        // Reset line if it goes off screen
        if (line.y > height) {
          line.y = -line.length;
          line.x = Math.random() * width;
        }

        // Draw line
        const gradient = ctx.createLinearGradient(line.x, line.y, line.x, line.y + line.length);
        gradient.addColorStop(0, `rgba(255, 255, 255, 0)`);
        gradient.addColorStop(0.5, `rgba(255, 255, 255, ${line.opacity})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x, line.y + line.length);
        ctx.stroke();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none mix-blend-overlay"
      style={{ opacity: 0.4 }}
    />
  );
};

export default SpeedLines;