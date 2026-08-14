import React from 'react';

export const AboutPositioningSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-[#EBEBEB] text-[#111111] py-28 px-6 md:px-12 lg:px-16 selection:bg-[#E85500] selection:text-white border-t border-black/10"
    >
      <div className="max-w-7xl mx-auto">
        <span className="font-mono text-xs text-[#E85500] uppercase tracking-widest block mb-4 font-semibold">
          [ POSITIONING & PHILOSOPHY ]
        </span>

        {/* Large Editorial Headline Split Across Two Lines */}
        <h2 className="font-syne font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#111111] tracking-tight mb-16 max-w-5xl leading-[1.02]">
          WE DON'T BUILD WEBSITES. <br />
          <span className="text-[#E85500]">WE BUILD OPERATING SYSTEMS.</span>
        </h2>

        {/* Two-Column Positioning Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8 border-t border-black/10">
          {/* Left Column: Mission */}
          <div className="lg:col-span-6 space-y-6">
            <p className="font-sans text-base sm:text-lg text-[#333333] leading-relaxed font-normal">
              Flowchain is for businesses that are ready to operate at a different level. We eliminate friction, connect fragmented tools, and build intelligent AI infrastructure that scales revenue autonomously.
            </p>
            <p className="font-sans text-sm sm:text-base text-[#666666] leading-relaxed">
              We operate as a high-velocity digital engineering studio. Every system we ship is bespoke, production-ready, and monitored 24/7.
            </p>
          </div>

          {/* Right Column: 3 Belief Statements */}
          <div className="lg:col-span-6 flex flex-col gap-8 font-mono text-xs sm:text-sm uppercase tracking-wider font-bold">
            <div className="p-6 bg-white/70 rounded-2xl border border-black/10 flex items-start gap-3 shadow-sm hover:border-[#E85500] transition-colors">
              <span className="text-[#E85500] text-lg font-black">—</span>
              <p className="text-[#111111] leading-relaxed">
                WE BELIEVE AUTOMATION IS A HUMAN ADVANTAGE, NOT A REPLACEMENT.
              </p>
            </div>

            <div className="p-6 bg-white/70 rounded-2xl border border-black/10 flex items-start gap-3 shadow-sm hover:border-[#E85500] transition-colors">
              <span className="text-[#E85500] text-lg font-black">—</span>
              <p className="text-[#111111] leading-relaxed">
                WE BELIEVE YOUR DIGITAL PRESENCE SHOULD WORK WHILE YOU SLEEP.
              </p>
            </div>

            <div className="p-6 bg-white/70 rounded-2xl border border-black/10 flex items-start gap-3 shadow-sm hover:border-[#E85500] transition-colors">
              <span className="text-[#E85500] text-lg font-black">—</span>
              <p className="text-[#111111] leading-relaxed">
                WE BELIEVE EVERY BUSINESS DESERVES ENTERPRISE-LEVEL SYSTEMS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
