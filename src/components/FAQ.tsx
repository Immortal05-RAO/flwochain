import React, { useState } from 'react';
import { FAQ_DATA } from '../data/mockData';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQ_DATA.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#4F8CFF]/10 border border-[#4F8CFF]/30 text-xs font-mono text-[#4F8CFF]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Everything You Need to <span className="text-gradient-blue">Know</span>
          </h2>
        </div>

        {/* Search Bar */}
        <div className="mb-8 relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. 'pricing', 'CRM', 'voice calls')..."
            className="w-full py-4 pl-12 pr-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#4F8CFF] transition-all"
          />
          <Search className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-[#4F8CFF]/50 bg-slate-900/90' : 'border-slate-800'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white flex items-center gap-3">
                    <span className="text-xs font-mono text-[#4F8CFF] font-medium">0{idx + 1}</span>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#4F8CFF] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-slate-300 text-sm leading-relaxed border-t border-slate-800/80 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
