import React, { useState } from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/mockData';
import { CheckCircle2, Sparkles } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-24 relative bg-slate-950/40 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-xs font-mono text-purple-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>RAPID DEPLOYMENT METHODOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            From Audit to Production in <br />
            <span className="text-gradient-purple">Under 14 Days</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Our structured 5-step engineering framework ensures zero downtime, seamless API integration, and immediate ROI.
          </p>
        </div>

        {/* Desktop 5-Step Connected Timeline */}
        <div className="hidden lg:grid grid-cols-5 gap-4 relative mb-12">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-slate-800 -translate-y-1/2 z-0" />
          <div
            className="absolute top-1/2 left-0 h-[2px] bg-gradient-to-r from-[#4F8CFF] to-[#7C3AED] -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${(activeStep / (HOW_IT_WORKS_STEPS.length - 1)) * 100}%` }}
          />

          {HOW_IT_WORKS_STEPS.map((item, idx) => {
            const isCurrent = idx === activeStep;
            const isCompleted = idx < activeStep;

            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(idx)}
                className="relative z-10 flex flex-col items-center text-center cursor-pointer group"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center font-mono font-bold text-lg transition-all duration-300 ${
                    isCurrent
                      ? 'bg-gradient-to-tr from-[#4F8CFF] to-[#7C3AED] text-white shadow-xl shadow-[#4F8CFF]/30 scale-110 ring-4 ring-[#4F8CFF]/20'
                      : isCompleted
                      ? 'bg-[#00E676]/20 border border-[#00E676] text-[#00E676]'
                      : 'bg-slate-900 border border-slate-700 text-slate-400 group-hover:border-slate-500'
                  }`}
                >
                  {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : item.step}
                </div>

                <h3
                  className={`mt-4 text-sm font-bold transition-colors ${
                    isCurrent ? 'text-[#4F8CFF]' : 'text-slate-300 group-hover:text-white'
                  }`}
                >
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Detailed Step Showcase Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-700/80 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#4F8CFF]">
                <span>STEP {HOW_IT_WORKS_STEPS[activeStep].step} OF 05</span>
                <span>•</span>
                <span>IMPLEMENTATION PHASE</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {HOW_IT_WORKS_STEPS[activeStep].title}
              </h3>

              <p className="text-slate-300 text-base leading-relaxed">
                {HOW_IT_WORKS_STEPS[activeStep].description}
              </p>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-mono space-y-1">
                <span className="text-[#00E676] font-bold block">✓ KEY DELIVERABLE</span>
                <p>{HOW_IT_WORKS_STEPS[activeStep].detail}</p>
              </div>

              {/* Step selector pills for mobile */}
              <div className="flex lg:hidden flex-wrap gap-2 pt-2">
                {HOW_IT_WORKS_STEPS.map((s, idx) => (
                  <button
                    key={s.step}
                    onClick={() => setActiveStep(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      idx === activeStep
                        ? 'bg-[#4F8CFF] text-white font-bold'
                        : 'bg-slate-900 text-slate-400 border border-slate-800'
                    }`}
                  >
                    Step {s.step}
                  </button>
                ))}
              </div>
            </div>

            {/* Visual Node Diagram for Step */}
            <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl p-6 border border-slate-800 flex flex-col justify-center space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800 text-[10px]">
                <span>PHASE GRAPH</span>
                <span className="text-[#00E676]">STATUS: READY</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-[#4F8CFF]/30 text-[#4F8CFF]">
                ⚡ {HOW_IT_WORKS_STEPS[activeStep].title} Engine Init
              </div>
              <div className="flex justify-center text-slate-600">↓</div>
              <div className="p-3 rounded-lg bg-slate-950 border border-purple-500/30 text-purple-300">
                🔄 Automated API Payload Verification
              </div>
              <div className="flex justify-center text-slate-600">↓</div>
              <div className="p-3 rounded-lg bg-slate-950 border border-[#00E676]/30 text-[#00E676]">
                ✅ Production Deployment Complete
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
