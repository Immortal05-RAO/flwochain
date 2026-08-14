import React from 'react';
import { ArrowUpRight, Search, Cpu, Rocket } from 'lucide-react';

interface HowItWorksSectionProps {
  onOpenBooking: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      num: '01',
      title: 'Systems Audit & Blueprint',
      desc: 'We analyze your existing workflows, identify bottlenecks, and architect a custom digital system.',
      icon: Search,
    },
    {
      num: '02',
      title: 'Build & AI Integration',
      desc: 'We craft your high-converting website, voice receptionist, WhatsApp bots, and automated CRM pipelines.',
      icon: Cpu,
    },
    {
      num: '03',
      title: 'Launch & Continuous Flow',
      desc: 'We deploy your unified operating system, monitor lead conversion, and optimize performance 24/7.',
      icon: Rocket,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative w-full bg-[#EBEBEB] text-[#111111] py-16 sm:py-24 px-5 sm:px-8 md:px-12 lg:px-16 selection:bg-[#E85500] selection:text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-block px-3 py-1 bg-black/5 text-[#111111] font-mono text-[11px] font-bold uppercase rounded-md tracking-wider mb-3">
              METHODOLOGY
            </div>
            <h2 className="font-syne font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#111111] tracking-tight leading-[0.98]">
              THREE STEPS TO <br />
              <span className="text-[#E85500]">TOTAL FLOW.</span>
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-base text-[#666666] max-w-sm leading-relaxed">
            Our proven process transitions your business from manual chaos to automated operational flow.
          </p>
        </div>

        {/* 3 STEPS STACK (Vertical Column on Mobile with Vertical Connector Line, 3 Columns Desktop) */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Vertical Dotted Connector Line (Mobile) */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 border-l-2 border-dashed border-[#E85500]/30 lg:hidden" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative bg-white/80 rounded-3xl p-6 sm:p-8 border border-black/10 shadow-lg hover:border-[#E85500] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-syne font-black text-4xl sm:text-5xl text-[#111111]/20">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-[#E85500]/10 text-[#E85500] flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-syne font-extrabold text-xl sm:text-2xl text-[#111111] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-black/10 flex items-center justify-between text-xs font-mono text-[#888888]">
                  <span>PHASE {step.num}</span>
                  <span className="text-[#E85500] font-bold">STEP {idx + 1}/3</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 bg-[#E85500] hover:bg-[#D44B00] text-white font-mono text-xs font-semibold uppercase tracking-wider rounded-full shadow-xl transition-all duration-300 inline-flex items-center justify-center gap-3"
          >
            <span>Start Your Systems Audit</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
