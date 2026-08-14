import React from 'react';
import { ArrowUpRight, Sparkles, Phone, Mail } from 'lucide-react';

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
          <span>HAVE AN IDEA? LET'S BUILD IT.</span>
        </div>

        <h2 className="font-syne font-extrabold text-3xl sm:text-5xl lg:text-7xl tracking-tight leading-[0.98] text-white break-words">
          READY TO WORK SMARTER, <br />
          MOVE FASTER & GROW BETTER?
        </h2>

        <p className="font-sans text-sm sm:text-base text-[#AAAAAA] max-w-md mx-auto leading-relaxed">
          Book a strategy session with Shashwat V. Rao & Dev U. We'll audit your workflows and build your custom digital operating system.
        </p>

        {/* Contact Numbers Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs text-white/90 bg-white/5 px-6 py-2.5 rounded-full border border-white/10 my-2">
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-[#E85500]" />
            <a href="mailto:flowchain05@gmail.com" className="hover:text-[#E85500] transition-colors font-bold">
              flowchain05@gmail.com
            </a>
          </div>
          <span>•</span>
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#E85500]" />
            <a href="tel:9686071617" className="hover:text-[#E85500] transition-colors font-bold">
              +91 96860 71617
            </a>
            <span>/</span>
            <a href="tel:8951648748" className="hover:text-[#E85500] transition-colors font-bold">
              +91 89516 48748
            </a>
          </div>
        </div>

        {/* Buttons: Vertical Full-Width Stack on Mobile (<=768px), Horizontal Row Desktop */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-2">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto min-h-[48px] px-8 py-4 bg-[#E85500] hover:bg-[#D44B00] text-white font-mono text-xs font-semibold uppercase tracking-wider rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
          >
            <span>Book Strategy Call</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href="mailto:flowchain05@gmail.com"
            className="w-full sm:w-auto min-h-[48px] px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Email Us Directly</span>
          </a>
        </div>
      </div>
    </section>
  );
};
