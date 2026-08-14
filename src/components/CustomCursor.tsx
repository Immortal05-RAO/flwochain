import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Use refs to prevent re-render thrashing and animation loop desync
  const posRef = useRef({ x: -100, y: -100 });
  const trailingRef = useRef({ x: -100, y: -100 });

  const innerDotRef = useRef<HTMLDivElement>(null);
  const outerRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable custom cursor on fine pointer devices (desktops)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
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

    // Single 60fps requestAnimationFrame loop for ultra-smooth tracking
    let animId: number;
    const animate = () => {
      // Lerp trailing ring towards mouse position
      trailingRef.current.x += (posRef.current.x - trailingRef.current.x) * 0.35;
      trailingRef.current.y += (posRef.current.y - trailingRef.current.y) * 0.35;

      if (innerDotRef.current) {
        innerDotRef.current.style.transform = `translate3d(${posRef.current.x - 6}px, ${posRef.current.y - 6}px, 0)`;
      }

      if (outerRingRef.current) {
        outerRingRef.current.style.transform = `translate3d(${trailingRef.current.x - 18}px, ${trailingRef.current.y - 18}px, 0)`;
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
      {/* Inner Orange Dot */}
      <div
        ref={innerDotRef}
        className={`fixed top-0 left-0 w-3 h-3 bg-[#E85500] rounded-full pointer-events-none z-[9999] will-change-transform transition-scale duration-200 ${
          isHovered ? 'scale-[2.2] shadow-orange-500/80 shadow-lg' : 'scale-100 shadow-orange-500/40 shadow-sm'
        }`}
      />

      {/* Trailing Ring */}
      <div
        ref={outerRingRef}
        className={`fixed top-0 left-0 w-9 h-9 rounded-full pointer-events-none z-[9998] will-change-transform border transition-all duration-200 ${
          isHovered
            ? 'border-[#E85500] bg-[#E85500]/15 scale-125'
            : 'border-black/30 bg-transparent scale-100'
        }`}
      />
    </>
  );
};
