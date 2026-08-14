import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Enable class on body so standard cursor hides on fine pointer devices
    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]') ||
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

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Smooth trailing effect
  useEffect(() => {
    let animationFrameId: number;

    const updateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2,
      }));
      animationFrameId = requestAnimationFrame(updateTrailing);
    };

    animationFrameId = requestAnimationFrame(updateTrailing);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        className="fixed top-0 left-0 w-3 h-3 bg-[#E85500] rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(${position.x - 6}px, ${position.y - 6}px, 0) scale(${isHovered ? 2.5 : 1})`,
          boxShadow: isHovered ? '0 0 20px rgba(232, 85, 0, 0.8)' : '0 0 10px rgba(232, 85, 0, 0.4)',
        }}
      />

      {/* Trailing Outer Ring */}
      <div
        className={`fixed top-0 left-0 w-9 h-9 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out border ${
          isHovered
            ? 'border-[#E85500] bg-[#E85500]/15 scale-150'
            : 'border-[#111111]/30 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x - 18}px, ${trailingPos.y - 18}px, 0)`,
        }}
      />
    </>
  );
};
