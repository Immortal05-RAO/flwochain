import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const ringPos = useRef({ x: -100, y: -100 });
  const targetPos = useRef({ x: -100, y: -100 });
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Enable custom glow follower on fine pointer devices (desktops)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.getAttribute('data-cursor') === 'hover' ||
        target.closest('.interactive-hover')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    // Smooth continuous 60fps follower ring
    let animId: number;
    const animate = () => {
      ringPos.current.x += (targetPos.current.x - ringPos.current.x) * 0.4;
      ringPos.current.y += (targetPos.current.y - ringPos.current.y) * 0.4;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x - 18}px, ${ringPos.current.y - 18}px, 0)`;
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      ref={ringRef}
      className={`fixed top-0 left-0 w-9 h-9 rounded-full pointer-events-none z-[9998] will-change-transform border transition-all duration-200 ${
        isHovered
          ? 'border-[#E85500] bg-[#E85500]/20 scale-150 shadow-lg shadow-orange-500/30'
          : 'border-[#E85500]/50 bg-[#E85500]/5 scale-100'
      }`}
    />
  );
};
