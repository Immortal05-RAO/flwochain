import React, { useEffect, useState } from 'react';

export const CursorGlow: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, input, .glass-card, [role="button"]')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden transition-opacity duration-300"
      style={{ opacity: position.x === -100 ? 0 : 1 }}
    >
      <div
        className={`absolute rounded-full transition-all duration-200 cubic-bezier(0.1, 1, 0.1, 1) ${
          isHovered
            ? 'w-[450px] h-[450px] bg-radial from-[#4F8CFF]/20 via-[#7C3AED]/10 to-transparent blur-[80px]'
            : 'w-[300px] h-[300px] bg-radial from-[#4F8CFF]/15 via-[#7C3AED]/5 to-transparent blur-[60px]'
        }`}
        style={{
          transform: `translate(${position.x - (isHovered ? 225 : 150)}px, ${
            position.y - (isHovered ? 225 : 150)
          }px)`,
        }}
      />
    </div>
  );
};
