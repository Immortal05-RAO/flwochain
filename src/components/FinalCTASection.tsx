import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTASection: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative w-full bg-[#E85500] text-white py-32 px-6 md:px-12 lg:px-16 selection:bg-white selection:text-[#E85500] overflow-hidden">
      {/* Background Animated Radial Gradient Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-black/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center gap-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black/20 backdrop-blur-md rounded-full text-white font-mono text-xs uppercase tracking-widest border border-white/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>START YOUR TRANSFORMATION</span>
        </div>

        <h2 className="font-syne font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-white">
          READY TO BUILD <br />
          SOMETHING THAT FLOWS?
        </h2>

        <p className="font-sans text-base sm:text-xl text-white/90 max-w-2xl leading-relaxed">
          Book a free strategy call. We'll map your automation opportunities and design your custom system architecture in 30 minutes.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenBooking}
            className="flex items-center gap-3 px-9 py-4 bg-white text-[#E85500] font-mono text-sm font-bold uppercase tracking-wider rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-slate-100 interactive-hover"
          >
            <span>Book a Call</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href="#services"
            className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white/60 hover:border-white text-white font-mono text-sm font-semibold uppercase tracking-wider rounded-full transition-all duration-300 hover:bg-white/10 interactive-hover"
          >
            <span>See Our Services</span>
          </a>
        </div>
      </div>
    </section>
  );
};
