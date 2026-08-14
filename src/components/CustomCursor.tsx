import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Position refs for 1:1 hardware tracking with zero React re-render lag
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only activate custom cursor on desktop fine pointer devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    document.body.classList.add('custom-cursor-active');

    // 1. Direct hardware-synchronized mousemove listener (0ms latency update)
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      // Update inner dot immediately on hardware mousemove (1:1 instant sync)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX - 6}px, ${e.clientY - 6}px, 0)`;
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

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    // 2. High-speed 60fps RAF loop for smooth trailing ring (0.75 lerp = zero lag)
    let animId: number;
    const animate = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.75;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.75;

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
  }, []); // Run ONCE on mount so listeners are never torn down!

  return (
    <>
      {/* Inner Orange Dot - Instant 1:1 Hardware Track */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-3 h-3 bg-[#E85500] rounded-full pointer-events-none z-[9999] will-change-transform transition-scale duration-150 ${
          isHovered ? 'scale-[2.2] shadow-orange-500/80 shadow-lg' : 'scale-100 shadow-orange-500/40 shadow-sm'
        }`}
      />

      {/* Trailing Outer Ring - High-Speed Fast Lerp */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 w-9 h-9 rounded-full pointer-events-none z-[9998] will-change-transform border transition-all duration-150 ${
          isHovered
            ? 'border-[#E85500] bg-[#E85500]/15 scale-125'
            : 'border-black/30 bg-transparent scale-100'
        }`}
      />
    </>
  );
};
