import React from 'react';

export const ThreeHeroCanvas: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] sm:h-[480px] md:h-[540px] flex items-center justify-center pointer-events-none select-none z-10">
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
      <div className="absolute top-2 left-4 md:-left-4 z-20 w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold text-lg shadow-xl animate-accent-1 border-2 border-white">
        💬
      </div>

      {/* Floating Accent 2: Orange Glowing Ring */}
      <div className="absolute top-12 right-2 md:-right-6 z-20 w-14 h-14 rounded-full border-4 border-[#E85500] animate-accent-2 opacity-85 shadow-lg flex items-center justify-center">
        <span className="w-4 h-4 rounded-full bg-[#E85500] animate-ping" />
      </div>

      {/* Floating Accent 3: Cyan Waveform Badge */}
      <div className="absolute bottom-16 -left-2 md:-left-8 z-20 px-3 py-1.5 bg-[#00D2FF] text-black font-mono font-bold text-[10px] uppercase rounded-full shadow-lg animate-accent-2 border border-white">
        AUDIO // 14ms
      </div>

      {/* Floating Accent 4: Mini Gray Browser Window Card */}
      <div className="absolute bottom-6 right-4 md:right-0 z-20 p-2.5 bg-white/90 backdrop-blur-md rounded-xl border border-black/10 shadow-xl font-mono text-[10px] text-[#111111] animate-accent-1">
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
        }}
      />
    </div>
  );
};
