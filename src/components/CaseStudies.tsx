import React from 'react';
import { CASE_STUDIES_DATA } from '../data/mockData';
import { TrendingUp, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface CaseStudiesProps {
  onOpenBooking: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenBooking }) => {
  return (
    <section id="case-studies" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00E676]/10 border border-[#00E676]/30 text-xs font-mono text-[#00E676]">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>VERIFIED CASE STUDIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Proven ROI Across <span className="text-gradient-success">Real Business Deployments</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            See how our AI agents solve high-volume friction points and add tens of thousands in bottom-line revenue.
          </p>
        </div>

        {/* 3 Premium Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES_DATA.map((study) => (
            <div
              key={study.id}
              className="glass-card glass-card-hover rounded-3xl p-8 relative flex flex-col justify-between border border-slate-800 group"
            >
              <div>
                {/* Top Category Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#4F8CFF]/10 text-[#4F8CFF] border border-[#4F8CFF]/30">
                    {study.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500">{study.client}</span>
                </div>

                {/* Big Metric Display */}
                <div className="mb-6 p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <span className="text-4xl sm:text-5xl font-extrabold text-gradient-blue font-mono block">
                    {study.metric}
                  </span>
                  <span className="text-xs font-mono text-slate-300 font-medium">
                    {study.metricLabel}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#4F8CFF] transition-colors">
                  {study.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {study.description}
                </p>

                {/* Results Bullet Points */}
                <div className="space-y-2 mb-6">
                  {study.results.map((res, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00E676] shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenBooking}
                className="w-full pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-[#4F8CFF] transition-colors"
              >
                <span>Read Full ROI Breakdown</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
