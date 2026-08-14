import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const StoryNarrativeSection: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    {
      word: 'WEBSITE',
      subtitle: 'The digital front door to your business.',
      desc: 'High-conversion design built for authority and clarity.',
      bgColor: 'bg-[#EBEBEB]',
      accentColor: '#111111',
      badge: 'CHAPTER 01',
    },
    {
      word: 'CONVERSATION',
      subtitle: 'Instant 24/7 client engagement.',
      desc: 'Capture every lead via WhatsApp, webchat, and phone instantly.',
      bgColor: 'bg-[#EAE8E3]',
      accentColor: '#25D366',
      badge: 'CHAPTER 02',
    },
    {
      word: 'AI',
      subtitle: 'Intelligence embedded directly into operations.',
      desc: 'Voice receptionists and chat agents that qualify and convert.',
      bgColor: 'bg-[#E5E7EB]',
      accentColor: '#00D2FF',
      badge: 'CHAPTER 03',
    },
    {
      word: 'AUTOMATION',
      subtitle: 'Zero manual data entry or friction.',
      desc: 'Instant booking, CRM updates, and automated follow-ups.',
      bgColor: 'bg-[#E2E8F0]',
      accentColor: '#E85500',
      badge: 'CHAPTER 04',
    },
    {
      word: 'SYSTEM',
      subtitle: 'A unified operating system driving non-stop growth.',
      desc: 'Everything connected, everything automated, everything flowing.',
      bgColor: 'bg-[#0A0A0C]',
      accentColor: '#E85500',
      badge: 'FINAL CONVERGENCE',
      isDark: true,
    },
  ];

  const current = chapters[activeChapter];

  return (
    <section
      id="story"
      className={`relative w-full py-28 px-6 md:px-12 lg:px-16 transition-colors duration-700 ${
        current.bgColor
      } ${current.isDark ? 'text-white' : 'text-[#111111]'} selection:bg-[#E85500] selection:text-white`}
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[70vh]">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-current/10 pb-6 mb-12">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-[#E85500]" />
            <span>The Flowchain Narrative Architecture</span>
          </div>

          {/* Chapter Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            {chapters.map((ch, idx) => (
              <button
                key={ch.word}
                onClick={() => setActiveChapter(idx)}
                className={`px-3 py-1.5 rounded-full transition-all duration-300 ${
                  activeChapter === idx
                    ? 'bg-[#E85500] text-white font-bold shadow-md'
                    : 'bg-black/5 hover:bg-black/10 text-current/70'
                }`}
              >
                0{idx + 1} {ch.word}
              </button>
            ))}
          </div>
        </div>

        {/* Center Editorial Chapter Display */}
        <div className="my-auto py-12 flex flex-col items-start gap-6">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#E85500] px-3 py-1 bg-[#E85500]/10 rounded-full">
            {current.badge}
          </span>

          <h2 className="font-syne font-black text-6xl sm:text-8xl lg:text-[140px] leading-none tracking-tighter uppercase">
            {current.word}
          </h2>

          <p className="font-syne font-bold text-xl sm:text-3xl max-w-3xl leading-snug">
            {current.subtitle}
          </p>

          <p className="font-sans text-sm sm:text-lg opacity-75 max-w-xl leading-relaxed">
            {current.desc}
          </p>
        </div>

        {/* Bottom Interactive Nav Controls */}
        <div className="flex items-center justify-between pt-8 border-t border-current/10 font-mono text-xs">
          <span>CHAPTER 0{activeChapter + 1} OF 05</span>

          <button
            onClick={() => setActiveChapter((prev) => (prev + 1) % chapters.length)}
            className="flex items-center gap-2 text-[#E85500] font-bold uppercase tracking-wider hover:scale-105 transition-transform"
          >
            <span>NEXT CHAPTER</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
