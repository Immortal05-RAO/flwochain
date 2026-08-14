import React from 'react';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { HeroDashboard } from './HeroDashboard';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenVideoDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenVideoDemo }) => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Dynamic Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#4F8CFF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-[#7C3AED]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-[#4F8CFF]/30 text-xs font-semibold text-slate-200 shadow-xl">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4F8CFF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4F8CFF]"></span>
              </span>
              <span className="text-[#4F8CFF] font-mono uppercase tracking-wider text-[11px]">Flow Chain v4.0 Release</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">Next-Gen Autonomous AI</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              "We build <br className="hidden sm:inline" />
              <span className="text-gradient-blue relative inline-block">
                AI Employees
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#4F8CFF]/40" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,0 Q50,12 100,0" fill="none" stroke="currentColor" strokeWidth="3" />
                </svg>
              </span>
              <br />
              that work 24/7."
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              AI Employees That Never Sleep. We build AI Voice Agents, WhatsApp Automation, Workflow Systems, CRM Integrations and Custom AI Solutions that save businesses hundreds of hours every month.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#4F8CFF] via-[#7C3AED] to-[#4F8CFF] text-white font-bold text-base shadow-xl shadow-[#4F8CFF]/25 hover:shadow-2xl hover:shadow-[#4F8CFF]/40 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center space-x-3 group"
              >
                <span>Book Free Strategy Call</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenVideoDemo}
                className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card text-slate-200 font-semibold text-base border border-slate-700/80 hover:border-[#4F8CFF]/50 hover:bg-slate-800/80 transition-all duration-300 flex items-center justify-center space-x-3 group"
              >
                <div className="w-7 h-7 rounded-full bg-[#4F8CFF]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 text-[#4F8CFF] fill-[#4F8CFF]" />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Trust highlights */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-400 font-medium">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00E676]" />
                <span>Zero Downtime Setup</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00E676]" />
                <span>Sub-500ms Voice Latency</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00E676]" />
                <span>ROI Guaranteed</span>
              </div>
            </div>

          </div>

          {/* Right Floating Live Dashboard */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <HeroDashboard />
          </div>

        </div>
      </div>
    </section>
  );
};
