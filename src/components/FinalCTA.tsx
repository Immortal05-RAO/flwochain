import React from 'react';
import { Calendar, Play, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface FinalCTAProps {
  onOpenBooking: () => void;
  onOpenVideoDemo: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking, onOpenVideoDemo }) => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Animated Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4F8CFF]/20 via-[#7C3AED]/20 to-[#00E676]/20 opacity-50 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="glass-card rounded-3xl p-10 sm:p-16 border border-[#4F8CFF]/30 shadow-2xl text-center space-y-8 relative overflow-hidden bg-gradient-to-br from-[#0B0F19] via-[#050505] to-[#0A0E17]">
          
          {/* Top Pill */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#4F8CFF]/10 border border-[#4F8CFF]/30 text-xs font-mono text-[#4F8CFF] shadow-lg">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START YOUR AUTOMATION JOURNEY TODAY</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Ready to Put <span className="text-gradient-blue">AI to Work?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Book a free strategy session and discover how much time and money AI can save your business within 14 days.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-gradient-to-r from-[#4F8CFF] via-[#7C3AED] to-[#00E676] text-white font-extrabold text-base shadow-2xl shadow-[#4F8CFF]/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center space-x-3 group"
            >
              <Calendar className="w-5 h-5" />
              <span>Book a Free Strategy Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenVideoDemo}
              className="w-full sm:w-auto px-8 py-5 rounded-2xl glass-card text-white font-bold text-base border border-slate-700 hover:border-[#4F8CFF] transition-all flex items-center justify-center space-x-3"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Get a Demo</span>
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00E676]" /> 30-Min Audit Call
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00E676]" /> Custom System Architecture
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00E676]" /> Guaranteed ROI
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
