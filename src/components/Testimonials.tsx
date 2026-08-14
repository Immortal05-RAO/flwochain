import React from 'react';
import { TESTIMONIALS_DATA } from '../data/mockData';
import { Star, Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative bg-slate-950/60 border-y border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-xs font-mono text-purple-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CLIENT TESTIMONIALS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Loved By Business Owners & <br />
            <span className="text-gradient-purple">Operations Leaders</span>
          </h2>
        </div>

        {/* Testimonials Slider Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="glass-card glass-card-hover rounded-3xl p-8 relative flex flex-col justify-between border border-slate-800"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center space-x-1 mb-4 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Highlight Badge */}
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-[#00E676]/10 text-[#00E676] border border-[#00E676]/30 mb-4">
                  {t.highlight}
                </span>

                {/* Quote Content */}
                <p className="text-slate-300 text-sm leading-relaxed italic mb-8">
                  "{t.content}"
                </p>
              </div>

              {/* Author Profile */}
              <div className="flex items-center space-x-4 pt-4 border-t border-slate-800/80">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#4F8CFF]/40"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-slate-400">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
