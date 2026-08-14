import React from 'react';
import { Sparkles } from 'lucide-react';

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
          <span>OUR PHILOSOPHY & POSITIONING</span>
        </div>

        {/* Large Editorial Headline */}
        <h2 className="font-syne font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#111111] tracking-tight mb-8 sm:mb-12 max-w-4xl leading-[1.02] break-words">
          WE DON'T BUILD WEBSITES. <br />
          <span className="text-[#E85500]">WE BUILD OPERATING SYSTEMS.</span>
        </h2>

        {/* Single Column Layout on Mobile (Headline -> Paragraph -> Beliefs) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-black/10 pt-8 sm:pt-12">
          <div className="lg:col-span-6 space-y-4">
            <p className="font-sans text-sm sm:text-base md:text-lg text-[#333333] leading-relaxed">
              Most agency sites look pretty, but stall out when a prospect wants to take action. We build connected digital operating systems that capture, qualify, and convert leads automatically.
            </p>
            <p className="font-sans text-xs sm:text-sm text-[#666666] leading-relaxed">
              By combining high-conversion editorial web design with 24/7 AI voice receptionists and automated WhatsApp pipelines, Flowchain eliminates operational friction.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4 pt-4 lg:pt-0">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#E85500] block mb-2">
              CORE BELIEFS:
            </span>

            {beliefs.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-[#E85500] font-bold text-lg leading-none mt-0.5">—</span>
                <p className="font-sans text-sm sm:text-base text-[#111111] leading-normal font-medium">
                  {b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
