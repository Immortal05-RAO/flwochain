import React, { useState } from 'react';
import { INDUSTRIES_DATA, type Industry } from '../data/mockData';
import { 
  Utensils, Home, Stethoscope, GraduationCap, Scale, Scissors, 
  Building, Dumbbell, HardHat, ShoppingBag, Car, TrendingUp, Sparkles, ArrowRight
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Utensils, Home, Stethoscope, GraduationCap, Scale, Scissors,
  Building, Dumbbell, HardHat, ShoppingBag, Car, TrendingUp
};

interface IndustriesProps {
  onOpenBooking: () => void;
}

export const Industries: React.FC<IndustriesProps> = ({ onOpenBooking }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>(INDUSTRIES_DATA[1]);

  return (
    <section id="industries" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00E676]/10 border border-[#00E676]/30 text-xs font-mono text-[#00E676]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TAILORED INDUSTRY ARCHITECTURES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineered for <span className="text-gradient-success">Your Specific Industry</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Select your industry to see how our custom AI employees handle your daily operational workflows.
          </p>
        </div>

        {/* 12 Industry Grid Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
          {INDUSTRIES_DATA.map((ind) => {
            const Icon = iconMap[ind.icon] || Sparkles;
            const isSelected = selectedIndustry.id === ind.id;

            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind)}
                className={`p-4 rounded-xl text-left transition-all duration-300 flex flex-col items-start space-y-2 border ${
                  isSelected
                    ? 'bg-gradient-to-br from-[#4F8CFF]/20 to-[#7C3AED]/20 border-[#4F8CFF] shadow-lg shadow-[#4F8CFF]/20 scale-105'
                    : 'glass-card border-slate-800 hover:border-slate-600 hover:bg-slate-900/80'
                }`}
              >
                <div className={`p-2 rounded-lg ${isSelected ? 'bg-[#4F8CFF] text-white' : 'bg-slate-900 text-slate-400'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {ind.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Detail Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-700/80 shadow-2xl relative overflow-hidden bg-gradient-to-br from-[#0B0F19] to-[#050505]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-2xl bg-[#4F8CFF]/10 text-[#4F8CFF] border border-[#4F8CFF]/30">
                  {React.createElement(iconMap[selectedIndustry.icon] || Sparkles, { className: 'w-8 h-8' })}
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {selectedIndustry.name}
                  </h3>
                  <span className="text-xs font-mono text-[#00E676]">CUSTOM AI EMPLOYEE BLUEPRINT</span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-mono text-slate-400 uppercase tracking-wider">Automated Workflow Execution:</h4>
                <p className="text-lg text-slate-200 leading-relaxed font-normal bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
                  "{selectedIndustry.useCase}"
                </p>
              </div>

              <div className="flex items-center space-x-3 text-sm font-semibold">
                <span className="text-slate-400">Measured Business Impact:</span>
                <span className="px-3 py-1 rounded-full bg-[#00E676]/10 text-[#00E676] border border-[#00E676]/30 font-mono">
                  ⚡ {selectedIndustry.impact}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#4F8CFF] to-[#7C3AED] text-white font-bold text-sm shadow-xl shadow-[#4F8CFF]/20 hover:scale-105 transition-all flex items-center justify-center space-x-2"
              >
                <span>Deploy Industry AI Agent</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
