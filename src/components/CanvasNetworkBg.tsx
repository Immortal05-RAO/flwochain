import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulse: number;
  pulseSpeed: number;
}

export const CanvasNetworkBg: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: width / 2, y: height / 2, active: false };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const numNodes = Math.min(Math.floor((width * height) / 18000), 70);
    const nodes: Node[] = [];

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1.5,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.02,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint background glow grid
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      // Connect nodes
      const maxDistance = 140;

      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];
        nodeA.x += nodeA.vx;
        nodeA.y += nodeA.vy;
        nodeA.pulse += nodeA.pulseSpeed;

        if (nodeA.x < 0 || nodeA.x > width) nodeA.vx *= -1;
        if (nodeA.y < 0 || nodeA.y > height) nodeA.vy *= -1;

        // Mouse attraction
        if (mouse.active) {
          const dx = mouse.x - nodeA.x;
          const dy = mouse.y - nodeA.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            nodeA.x += (dx / dist) * 0.4;
            nodeA.y += (dy / dist) * 0.4;
          }
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeB.x - nodeA.x;
          const dy = nodeB.y - nodeA.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.25;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);

            // Alternating line colors between electric blue and purple
            const gradient = ctx.createLinearGradient(nodeA.x, nodeA.y, nodeB.x, nodeB.y);
            gradient.addColorStop(0, `rgba(79, 140, 255, ${alpha})`);
            gradient.addColorStop(1, `rgba(124, 58, 237, ${alpha})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Draw node points
        const glowRadius = nodeA.radius + Math.sin(nodeA.pulse) * 1.2;
        ctx.beginPath();
        ctx.arc(nodeA.x, nodeA.y, Math.max(0.5, glowRadius), 0, Math.PI * 2);
        
        ctx.fillStyle = i % 3 === 0 ? '#4F8CFF' : i % 3 === 1 ? '#7C3AED' : '#00E676';
        ctx.shadowColor = i % 2 === 0 ? '#4F8CFF' : '#7C3AED';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 opacity-60"
    />
  );
};
