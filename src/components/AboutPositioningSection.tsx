import React from 'react';
import { Sparkles, Phone, Mail, UserCheck } from 'lucide-react';

export const AboutPositioningSection: React.FC = () => {
  const beliefs = [
    'Websites should be sales engines, not static digital brochures.',
    'AI voice and chat agents must sound human and handle complex logic.',
    'Every tool in your stack must communicate instantly without manual entry.',
  ];

  return (
    <section
      id="about"
      className="relative w-full bg-[#EBEBEB] text-[#111111] py-16 sm:py-28 px-5 sm:px-8 md:px-12 lg:px-16 selection:bg-[#E85500] selection:text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#E85500] uppercase tracking-widest mb-4 font-semibold">
          <Sparkles className="w-4 h-4" />
          <span>ABOUT FLOWCHAIN</span>
        </div>

        {/* Large Powerful Hero Headline */}
        <h2 className="font-syne font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#111111] tracking-tight mb-8 sm:mb-12 max-w-4xl leading-[0.98] break-words uppercase">
          WORK SMARTER. <br />
          MOVE FASTER. <br />
          <span className="text-[#E85500]">GROW BETTER.</span>
        </h2>

        {/* Structured Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-black/10 pt-8 sm:pt-12">
          {/* Left Column: What We Do & Founders Card */}
          <div className="lg:col-span-6 space-y-6">
            <p className="font-sans text-base sm:text-lg md:text-xl text-[#222222] leading-relaxed font-semibold">
              Flowchain is a digital systems and AI automation studio building premium digital experiences and intelligent systems for modern businesses.
            </p>

            <p className="font-sans text-xs sm:text-sm text-[#555555] leading-relaxed">
              We engineer high-conversion web architecture, 24/7 AI voice receptionists, WhatsApp lead capture engines, and connected workflow automations that eliminate operational friction.
            </p>

            {/* Founders & Leadership Card */}
            <div className="p-5 bg-white/80 rounded-2xl border border-black/10 shadow-sm space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-[#E85500] font-bold uppercase">
                <UserCheck className="w-4 h-4" />
                <span>LEADERSHIP & EXECUTIVE TEAM</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[#111111] pt-1">
                <div className="p-3 bg-black/5 rounded-xl">
                  <span className="text-[#888888] block text-[10px] uppercase font-semibold">FOUNDER</span>
                  <span className="font-bold text-sm">Shashwat V. Rao</span>
                </div>
                <div className="p-3 bg-black/5 rounded-xl">
                  <span className="text-[#888888] block text-[10px] uppercase font-semibold">FOUNDER</span>
                  <span className="font-bold text-sm">Dev U.</span>
                </div>
                <div className="p-3 bg-black/5 rounded-xl">
                  <span className="text-[#888888] block text-[10px] uppercase font-semibold">COO</span>
                  <span className="font-bold text-sm">Nithin KN</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#E85500] block mb-1">
              HAVE AN IDEA? LET'S BUILD IT.
            </span>

            {/* Direct Contact Info Box */}
            <div className="p-5 bg-black text-white rounded-2xl shadow-xl space-y-3 font-mono text-xs">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#E85500]" />
                <a href="mailto:flowchain05@gmail.com" className="hover:text-[#E85500] font-bold transition-colors">
                  flowchain05@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 border-t border-white/10 pt-3">
                <Phone className="w-4 h-4 text-[#E85500]" />
                <div className="flex flex-wrap gap-3 text-white">
                  <a href="tel:9686071617" className="hover:text-[#E85500] transition-colors font-bold">
                    +91 96860 71617
                  </a>
                  <span>•</span>
                  <a href="tel:8951648748" className="hover:text-[#E85500] transition-colors font-bold">
                    +91 89516 48748
                  </a>
                </div>
              </div>
            </div>

            {/* Philosophy List */}
            <div className="space-y-3 pt-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#888888] block">
                OUR PHILOSOPHY:
              </span>
              {beliefs.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#E85500] font-bold text-lg leading-none mt-0.5">—</span>
                  <p className="font-sans text-xs sm:text-sm text-[#333333] leading-normal font-medium">
                    {b}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
