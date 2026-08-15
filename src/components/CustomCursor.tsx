import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Position references for 60fps zero-lag animation
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on fine pointer desktop devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Instant 1:1 hardware synchronization centered on mouse tip
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
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

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Smooth continuous 60fps trailing ring animation loop
    let animId: number;
    const animate = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.3;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.3;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Sleek Inner Orange Dot - Hardware Tracked & Centered */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2.5 h-2.5 bg-[#E85500] rounded-full pointer-events-none z-[99999] will-change-transform transition-transform duration-150 ease-out ${
          isHovered
            ? 'scale-125 shadow-sm shadow-[#E85500]/60'
            : 'scale-100 shadow-sm shadow-[#E85500]/30'
        }`}
      />

      {/* Sleek Outer Ring - Controlled Nudge on Clickable Hover (NO EXPLODING BALLOON) */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 w-7 h-7 rounded-full pointer-events-none z-[99998] will-change-transform transition-all duration-200 ease-out border ${
          isHovered
            ? 'border-[#E85500] bg-[#E85500]/08 scale-110 shadow-sm shadow-[#E85500]/20'
            : 'border-black/25 bg-transparent scale-100'
        }`}
      />
    </>
  );
};
