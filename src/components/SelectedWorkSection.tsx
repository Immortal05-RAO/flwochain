import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface SelectedWorkSectionProps {
  onOpenBooking: () => void;
}

export const SelectedWorkSection: React.FC<SelectedWorkSectionProps> = ({ onOpenBooking }) => {
  const projects = [
    {
      title: 'Aetheria Systems',
      category: 'AI Automation & CRM',
      metrics: '+340% Lead Velocity',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      desc: 'Autonomous enterprise CRM pipeline with instant WhatsApp qualification.',
    },
    {
      title: 'Kuro Studio',
      category: 'High-Conversion Web Design',
      metrics: '4.8x Conversion Rate',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      desc: 'Editorial WebGL brand identity and interactive sales portal.',
    },
    {
      title: 'Vanguard Health',
      category: 'AI Voice Receptionist',
      metrics: '100% Inbound Answered',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
      desc: '24/7 HIPAA-compliant voice receptionist booking 80+ patient appointments daily.',
    },
  ];

  return (
    <section
      id="work"
      className="relative w-full bg-[#EBEBEB] text-[#111111] py-16 sm:py-28 px-5 sm:px-8 md:px-12 lg:px-16 selection:bg-[#E85500] selection:text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-block px-3 py-1 bg-[#E85500] text-white font-mono text-[11px] font-bold uppercase rounded-md tracking-wider mb-3">
              SELECTED WORK
            </div>
            <h2 className="font-syne font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#111111] tracking-tight leading-[0.98]">
              DIGITAL SYSTEMS <br />
              <span className="text-[#E85500]">IN ACTION.</span>
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-base text-[#666666] max-w-sm leading-relaxed">
            Real operational transformations engineered for ambitious digital brands.
          </p>
        </div>

        {/* Project Cards Grid: Single Column Stack on Mobile (<=768px), 3 Columns Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((proj) => (
            <div
              key={proj.title}
              onClick={onOpenBooking}
              className="bg-white/80 rounded-3xl p-5 sm:p-6 border border-black/10 shadow-lg hover:border-[#E85500] transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              {/* 16:9 Image Aspect Ratio */}
              <div>
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-5 bg-black/10">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 right-3 px-2.5 py-1 bg-black/80 backdrop-blur-md text-white font-mono text-[10px] font-bold rounded-full uppercase">
                    {proj.metrics}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-[#E85500] font-mono text-[10px] font-bold uppercase tracking-wider block">
                    {proj.category}
                  </span>

                  <h3 className="font-syne font-extrabold text-xl sm:text-2xl text-[#111111] flex items-center justify-between">
                    <span>{proj.title}</span>
                  </h3>

                  <p className="text-xs text-[#555555] leading-relaxed">
                    {proj.desc}
                  </p>
                </div>
              </div>

              {/* Tappable 44x44 Action Button */}
              <div className="pt-4 mt-4 border-t border-black/10 flex items-center justify-between">
                <span className="font-mono text-xs text-[#888888] uppercase">Explore System</span>
                <div className="min-w-[44px] min-h-[44px] rounded-full bg-black/5 text-[#111111] group-hover:bg-[#E85500] group-hover:text-white flex items-center justify-center transition-colors">
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
