import React, { useEffect, useRef } from 'react';

export const ThreeHeroCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetX = useRef(0);
  const targetY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);

  useEffect(() => {
    let animationFrameId: number;

    // 1. Mouse Move Handler (PC / Desktop)
    const handleMouseMove = (e: MouseEvent) => {
      const windowWidth = window.innerWidth || 1;
      const windowHeight = window.innerHeight || 1;
      const normX = (e.clientX - windowWidth / 2) / (windowWidth / 2);
      const normY = (e.clientY - windowHeight / 2) / (windowHeight / 2);
      targetX.current = Math.max(-1, Math.min(1, normX));
      targetY.current = Math.max(-1, Math.min(1, normY));
    };

    // 2. Mobile Device Orientation Handler (Phone Gyroscope Tilt)
    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma === null || e.beta === null) return;
      // Gamma (roll): -45deg to +45deg left/right tilt
      const normX = Math.max(-1, Math.min(1, e.gamma / 30));
      // Beta (pitch): 0deg to 60deg front/back tilt (centered at 30deg)
      const normY = Math.max(-1, Math.min(1, (e.beta - 30) / 30));
      targetX.current = normX;
      targetY.current = normY;
    };

    // 3. Touch Move Fallback Handler (Drag on Mobile Screen)
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const windowWidth = window.innerWidth || 1;
        const windowHeight = window.innerHeight || 1;
        const normX = (touch.clientX - windowWidth / 2) / (windowWidth / 2);
        const normY = (touch.clientY - windowHeight / 2) / (windowHeight / 2);
        targetX.current = Math.max(-1, Math.min(1, normX));
        targetY.current = Math.max(-1, Math.min(1, normY));
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('deviceorientation', handleDeviceOrientation, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Request Permission for iOS 13+ DeviceOrientation if available
    if (
      typeof DeviceOrientationEvent !== 'undefined' &&
      typeof (DeviceOrientationEvent as any).requestPermission === 'function'
    ) {
      const requestGyro = () => {
        (DeviceOrientationEvent as any)
          .requestPermission()
          .then((permissionState: string) => {
            if (permissionState === 'granted') {
              window.addEventListener('deviceorientation', handleDeviceOrientation, { passive: true });
            }
          })
          .catch(console.error);
        window.removeEventListener('touchstart', requestGyro);
      };
      window.addEventListener('touchstart', requestGyro);
    }

    // 4. Smooth 60fps Spring Interpolation Loop
    const renderLoop = () => {
      currentX.current += (targetX.current - currentX.current) * 0.08;
      currentY.current += (targetY.current - currentY.current) * 0.08;

      if (containerRef.current) {
        const rotY = currentX.current * 22; // max 22deg 3D Y rotation
        const rotX = -currentY.current * 22; // max 22deg 3D X rotation
        const transX = currentX.current * 25; // max 25px X translation
        const transY = currentY.current * 25; // max 25px Y translation

        containerRef.current.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(
          2
        )}deg) rotateY(${rotY.toFixed(2)}deg) translate3d(${transX.toFixed(
          1
        )}px, ${transY.toFixed(1)}px, 0px)`;
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] sm:h-[480px] md:h-[540px] flex items-center justify-center pointer-events-none select-none z-10 transition-transform duration-100 ease-out"
      style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
    >
      {/* Dynamic Keyframe Animation Styles for Floating Bobbing & Accent Glows */}
      <style>{`
        @keyframes heroImgBob {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-hero-img-bob {
          animation: heroImgBob 4s ease-in-out infinite;
        }
        @keyframes accentBob1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(6deg); }
        }
        .animate-accent-1 {
          animation: accentBob1 3.5s ease-in-out infinite;
        }
        @keyframes accentBob2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(12px) rotate(-8deg); }
        }
        .animate-accent-2 {
          animation: accentBob2 4.2s ease-in-out infinite;
        }
      `}</style>

      {/* Floating Accent 1: WhatsApp Green Sphere Icon */}
      <div
        className="absolute top-2 left-4 md:-left-4 z-20 w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold text-lg shadow-xl animate-accent-1 border-2 border-white"
        style={{ transform: 'translateZ(30px)' }}
      >
        💬
      </div>

      {/* Floating Accent 2: Orange Glowing Ring */}
      <div
        className="absolute top-12 right-2 md:-right-6 z-20 w-14 h-14 rounded-full border-4 border-[#E85500] animate-accent-2 opacity-85 shadow-lg flex items-center justify-center"
        style={{ transform: 'translateZ(45px)' }}
      >
        <span className="w-4 h-4 rounded-full bg-[#E85500] animate-ping" />
      </div>

      {/* Floating Accent 3: Cyan Waveform Badge */}
      <div
        className="absolute bottom-16 -left-2 md:-left-8 z-20 px-3 py-1.5 bg-[#00D2FF] text-black font-mono font-bold text-[10px] uppercase rounded-full shadow-lg animate-accent-2 border border-white"
        style={{ transform: 'translateZ(35px)' }}
      >
        AUDIO // 14ms
      </div>

      {/* Floating Accent 4: Mini Gray Browser Window Card */}
      <div
        className="absolute bottom-6 right-4 md:right-0 z-20 p-2.5 bg-white/90 backdrop-blur-md rounded-xl border border-black/10 shadow-xl font-mono text-[10px] text-[#111111] animate-accent-1"
        style={{ transform: 'translateZ(40px)' }}
      >
        <div className="flex items-center gap-1 mb-1">
          <span className="w-2 h-2 rounded-full bg-red-400" />
          <span className="w-2 h-2 rounded-full bg-green-400" />
        </div>
        <span className="text-[#E85500] font-bold">&lt;Flowchain /&gt;</span>
      </div>

      {/* Transparent PNG Cutout Orange Retro Computer (NO SQUARE BG BOX) */}
      <img
        src="/hero_orange_computer.png"
        alt="Flowchain Orange Retro AI Computer Cutout"
        className="relative z-10 max-h-[85%] md:max-h-[92%] w-auto object-contain animate-hero-img-bob transition-all duration-300"
        style={{
          filter: 'drop-shadow(0px 25px 45px rgba(0,0,0,0.22))',
          transform: 'translateZ(20px)',
        }}
      />
    </div>
  );
};
