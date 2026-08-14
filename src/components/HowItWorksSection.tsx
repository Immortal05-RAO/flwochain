import React from 'react';
import { Compass, Cpu, TrendingUp, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      num: '01',
      title: 'Discovery Call',
      desc: 'We map your business architecture, identify operational bottlenecks, and design a custom automation roadmap around your revenue goals.',
      icon: Compass,
    },
    {
      num: '02',
      title: 'We Build It',
      desc: 'Custom-engineered AI agents, high-conversion web portals, and workflow pipelines — built zero-template with enterprise security.',
      icon: Cpu,
    },
    {
      num: '03',
      title: 'You Scale',
      desc: 'Your business runs 24/7 on autopilot. We continually optimize prompt logic, monitor node health, and scale infrastructure as you grow.',
      icon: TrendingUp,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative w-full bg-[#EBEBEB] text-[#111111] py-28 px-6 md:px-12 lg:px-16 selection:bg-[#E85500] selection:text-white border-t border-black/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <span className="font-mono text-xs text-[#E85500] uppercase tracking-widest block mb-2 font-semibold">
              [ METHODOLOGY ]
            </span>
            <h2 className="font-syne font-extrabold text-4xl sm:text-6xl text-[#111111] tracking-tight">
              HOW FLOWCHAIN WORKS.
            </h2>
          </div>

          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 px-6 py-3 bg-[#E85500] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-full shadow-lg hover:bg-[#D44B00] transition-transform hover:scale-105"
          >
            <span>Reserve Discovery Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.num}
                className="glass-card-light p-8 rounded-3xl border border-black/10 flex flex-col justify-between relative group hover:border-[#E85500] transition-all duration-300 hover:-translate-y-2 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-syne font-black text-6xl text-[#E85500]/25 group-hover:text-[#E85500] transition-colors">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#E85500]/10 flex items-center justify-center text-[#E85500] group-hover:bg-[#E85500] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-syne font-extrabold text-2xl text-[#111111] mb-3">
                    {step.title}
                  </h3>

                  <p className="font-sans text-sm text-[#555555] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-black/10 font-mono text-[10px] text-[#888888] flex items-center justify-between uppercase">
                  <span>STEP {step.num} OF 03</span>
                  <span className="text-[#E85500] font-bold">FLOWCHAIN METHOD</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
