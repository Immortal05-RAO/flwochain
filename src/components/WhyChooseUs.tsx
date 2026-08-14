import React from 'react';
import { STATS_DATA } from '../data/mockData';
import { ShieldCheck, Zap } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 relative bg-slate-950/60 border-y border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#4F8CFF]/10 border border-[#4F8CFF]/30 text-xs font-mono text-[#4F8CFF]">
            <Zap className="w-3.5 h-3.5" />
            <span>MEASURABLE BUSINESS OUTCOMES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Why High-Growth Companies Choose <br />
            <span className="text-gradient-blue">Flow Chain</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            We don't sell software licenses. We engineer custom AI operational infrastructure that delivers guaranteed speed, accuracy, and labor savings.
          </p>
        </div>

        {/* 4 Stats Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS_DATA.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-3xl p-8 relative flex flex-col justify-between border border-slate-800 text-center group"
            >
              {/* Radial gradient background */}
              <div className="absolute inset-0 bg-radial from-[#4F8CFF]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 space-y-4">
                {/* Metric Counter */}
                <div className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight font-mono flex items-center justify-center">
                  <span className="text-gradient-blue">{stat.value}</span>
                  <span className="text-[#4F8CFF]">{stat.suffix}</span>
                </div>

                {/* Label */}
                <h3 className="text-lg font-bold text-slate-100">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed">
                  {stat.desc}
                </p>
              </div>

              {/* Progress Ring Visual */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-center space-x-2 text-[11px] font-mono text-[#00E676]">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Metric</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
