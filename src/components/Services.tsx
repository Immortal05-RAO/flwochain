import React from 'react';
import { SERVICES_DATA } from '../data/mockData';
import { PhoneCall, MessageSquare, Cpu, Database, Bot, Sparkles, Check, ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  onOpenBooking: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  PhoneCall,
  MessageSquare,
  Cpu,
  Database,
  Bot,
  Sparkles,
};

export const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  return (
    <section id="services" className="py-24 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#4F8CFF]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#4F8CFF]/10 border border-[#4F8CFF]/30 text-xs font-mono text-[#4F8CFF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR CORE AUTOMATION CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Autonomous Systems Built for <br />
            <span className="text-gradient-blue">Maximum Revenue Impact</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            We replace fragile human handoffs with bulletproof AI architectures tailored for your specific operating environment.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => {
            const IconComponent = iconMap[service.icon] || Sparkles;

            return (
              <div
                key={service.id}
                className="glass-card glass-card-hover rounded-2xl p-8 relative flex flex-col justify-between group overflow-hidden border border-slate-800"
              >
                {/* Subtle top light gradient glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4F8CFF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-[#4F8CFF] group-hover:scale-110 group-hover:bg-[#4F8CFF]/10 group-hover:border-[#4F8CFF]/40 transition-all duration-300 shadow-lg">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    {service.badge && (
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#7C3AED]/20 text-purple-300 border border-[#7C3AED]/40">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#4F8CFF] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-[#4F8CFF] mb-4">{service.subtitle}</p>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                        <div className="mt-0.5 p-0.5 rounded bg-[#00E676]/10 text-[#00E676]">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <button
                  onClick={onOpenBooking}
                  className="w-full pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-[#4F8CFF] transition-colors"
                >
                  <span>Build This Agent</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
