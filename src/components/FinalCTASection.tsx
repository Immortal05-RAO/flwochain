import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface FinalCTASectionProps {
  onOpenBooking: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative w-full bg-[#0A0A0C] text-white py-20 sm:py-32 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden selection:bg-[#E85500] selection:text-white">
      {/* Background Glow Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E85500]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#E85500] uppercase tracking-widest px-3.5 py-1.5 bg-[#E85500]/10 rounded-full font-semibold">
          <Sparkles className="w-4 h-4" />
          <span>START YOUR TRANSFORMATION</span>
        </div>

        <h2 className="font-syne font-extrabold text-3xl sm:text-5xl lg:text-7xl tracking-tight leading-[0.98] text-white break-words">
          READY TO BUILD <br />
          SOMETHING THAT FLOWS?
        </h2>

        <p className="font-sans text-sm sm:text-base text-[#888888] max-w-sm sm:max-w-md mx-auto leading-relaxed">
          Book a 20-minute strategy session. We'll audit your current workflows and map out a custom digital system.
        </p>

        {/* Buttons: Vertical Full-Width Stack on Mobile (<=768px), Horizontal Row Desktop */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto min-h-[48px] px-8 py-4 bg-[#E85500] hover:bg-[#D44B00] text-white font-mono text-xs font-semibold uppercase tracking-wider rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
          >
            <span>Book Strategy Call</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href="mailto:hello@flowchain.ai"
            className="w-full sm:w-auto min-h-[48px] px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Contact via Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};
