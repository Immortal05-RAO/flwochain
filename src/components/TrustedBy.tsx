import React from 'react';
import { Cpu, ShieldCheck, Zap, Layers, Globe, Radio, Sparkles, Terminal, Activity } from 'lucide-react';

export const TrustedBy: React.FC = () => {
  const logos = [
    { name: 'NEXA LABS', icon: Cpu },
    { name: 'APEX HEALTH', icon: ShieldCheck },
    { name: 'AURA DINING', icon: Activity },
    { name: 'VANGUARD REALTY', icon: Globe },
    { name: 'OMNIFLOW AI', icon: Zap },
    { name: 'HORIZON LEGAL', icon: Layers },
    { name: 'SPECTRA TELECOM', icon: Radio },
    { name: 'ELEVATE VENTURES', icon: Sparkles },
    { name: 'QUANTUM STACK', icon: Terminal },
  ];

  return (
    <section className="py-12 border-y border-slate-900 bg-[#050505]/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="text-xs font-mono tracking-widest text-slate-400 uppercase">
          POWERING AI WORKFLOWS FOR FORWARD-THINKING ENTERPRISES
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex space-x-12 animate-marquee whitespace-nowrap py-2">
          {[...logos, ...logos, ...logos].map((logo, idx) => {
            const Icon = logo.icon;
            return (
              <div
                key={idx}
                className="flex items-center space-x-3 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer group"
              >
                <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 group-hover:border-[#4F8CFF]/40 transition-colors">
                  <Icon className="w-4 h-4 text-[#4F8CFF]" />
                </div>
                <span className="font-mono text-sm tracking-wider font-semibold group-hover:text-white">
                  {logo.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
