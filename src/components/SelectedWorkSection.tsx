import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface SelectedWorkProps {
  onOpenBooking: () => void;
}

export const SelectedWorkSection: React.FC<SelectedWorkProps> = ({ onOpenBooking }) => {
  const projects = [
    {
      id: 'apex-capital',
      title: 'Apex Capital',
      category: 'AI Automation • Portfolio CRM',
      result: '4.2x Faster Deal Flow',
      desc: 'Automated deal sourcing, lead scoring, and instant WhatsApp founder updates.',
      bgGradient: 'from-orange-600/30 to-amber-900/40',
      accentColor: '#E85500',
    },
    {
      id: 'veloce-mobility',
      title: 'Veloce Mobility',
      category: 'Voice Receptionist • Logistics',
      result: '100% Calls Answered',
      desc: '24/7 autonomous dispatch AI voice agent handling 1,200+ driver inquiries daily.',
      bgGradient: 'from-blue-600/30 to-cyan-900/40',
      accentColor: '#00D2FF',
    },
    {
      id: 'aura-health',
      title: 'Aura Health Clinics',
      category: 'WhatsApp Booking • Patient CRM',
      result: '+$142,000 Mo. Revenue',
      desc: 'Automated appointment scheduling & reminder flow reducing no-shows by 84%.',
      bgGradient: 'from-emerald-600/30 to-teal-900/40',
      accentColor: '#25D366',
    },
    {
      id: 'kinetix-commerce',
      title: 'Kinetix Enterprise',
      category: 'Website Design • Custom System',
      result: '+310% Conversion Lift',
      desc: 'High-speed editorial e-commerce platform integrated directly into inventory webhooks.',
      bgGradient: 'from-purple-600/30 to-indigo-900/40',
      accentColor: '#A855F7',
    },
  ];

  return (
    <section
      id="work"
      className="relative w-full bg-[#EBEBEB] text-[#111111] py-28 px-6 md:px-12 lg:px-16 selection:bg-[#E85500] selection:text-white border-t border-black/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <span className="font-mono text-xs text-[#E85500] uppercase tracking-widest block mb-2 font-semibold">
              [ PORTFOLIO ]
            </span>
            <h2 className="font-syne font-extrabold text-4xl sm:text-6xl text-[#111111] tracking-tight">
              SELECTED WORK.
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#666666] max-w-md leading-relaxed">
            Case studies of digital systems engineered for high-growth enterprises.
          </p>
        </div>

        {/* 4 Projects Grid with 3D Tilt Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={onOpenBooking}
              className="glass-card-light rounded-3xl p-8 border border-black/10 flex flex-col justify-between min-h-[420px] relative overflow-hidden group hover:border-[#E85500] transition-all duration-500 hover:-translate-y-3 shadow-2xl interactive-hover cursor-pointer"
            >
              {/* Card Dynamic Gradient Accent Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#666666]">
                    {project.category}
                  </span>
                  <span
                    className="font-mono text-xs font-extrabold px-3 py-1 bg-black/5 rounded-full text-[#111111]"
                    style={{ color: project.accentColor }}
                  >
                    {project.result}
                  </span>
                </div>

                <h3 className="font-syne font-black text-3xl sm:text-4xl text-[#111111] mb-3 group-hover:text-[#E85500] transition-colors">
                  {project.title}
                </h3>

                <p className="font-sans text-sm text-[#555555] max-w-md leading-relaxed">
                  {project.desc}
                </p>
              </div>

              {/* Card Footer with Hover Arrow */}
              <div className="relative z-10 flex items-center justify-between pt-8 border-t border-black/10 font-mono text-xs text-[#111111] font-bold uppercase tracking-wider">
                <span>View System Specs</span>
                <div className="w-10 h-10 rounded-full bg-[#111111] text-white flex items-center justify-center group-hover:bg-[#E85500] group-hover:scale-110 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
