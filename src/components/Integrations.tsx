import React, { useState } from 'react';
import { INTEGRATIONS_DATA } from '../data/mockData';
import { Sparkles, Layers } from 'lucide-react';

export const Integrations: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'AI Models', 'Voice & Telecom', 'Workflows', 'CRM', 'Productivity'];

  const filtered = activeCategory === 'All'
    ? INTEGRATIONS_DATA
    : INTEGRATIONS_DATA.filter((item) => item.category === activeCategory);

  return (
    <section id="integrations" className="py-24 relative bg-slate-950/40 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#4F8CFF]/10 border border-[#4F8CFF]/30 text-xs font-mono text-[#4F8CFF]">
            <Layers className="w-3.5 h-3.5" />
            <span>NATIVE TECH ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Seamless 2-Way Sync With <br />
            <span className="text-gradient-blue">Every Software You Use</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Flow Chain integrates directly into your existing infrastructure. Zero workflow migration or downtime required.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#4F8CFF] to-[#7C3AED] text-white font-bold shadow-lg shadow-[#4F8CFF]/20'
                  : 'glass-card border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-5 border border-slate-800 flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-[#4F8CFF] group-hover:scale-110 group-hover:border-[#4F8CFF] transition-all mb-3 shadow-md">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-slate-100 group-hover:text-[#4F8CFF] transition-colors">
                {item.name}
              </h3>
              <span className="text-[10px] font-mono text-slate-500 mt-0.5">{item.category}</span>
              <span className="text-[9px] font-mono text-[#00E676] mt-2 px-2 py-0.5 rounded bg-[#00E676]/10 border border-[#00E676]/20">
                {item.highlight}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
