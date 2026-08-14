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
      badge: 'CHAPTER 01',
    },
    {
      word: 'CONVERSATION',
      subtitle: 'Instant 24/7 client engagement.',
      desc: 'Capture every lead via WhatsApp, webchat, and phone instantly.',
      bgColor: 'bg-[#EAE8E3]',
      badge: 'CHAPTER 02',
    },
    {
      word: 'AI',
      subtitle: 'Intelligence embedded directly into operations.',
      desc: 'Voice receptionists and chat agents that qualify and convert.',
      bgColor: 'bg-[#E5E7EB]',
      badge: 'CHAPTER 03',
    },
    {
      word: 'AUTOMATION',
      subtitle: 'Zero manual data entry or friction.',
      desc: 'Instant booking, CRM updates, and automated follow-ups.',
      bgColor: 'bg-[#E2E8F0]',
      badge: 'CHAPTER 04',
    },
    {
      word: 'SYSTEM',
      subtitle: 'A unified operating system driving non-stop growth.',
      desc: 'Everything connected, everything automated, everything flowing.',
      bgColor: 'bg-[#0A0A0C]',
      badge: 'FINAL CONVERGENCE',
      isDark: true,
    },
  ];

  const current = chapters[activeChapter];

  return (
    <section
      id="story"
      className="relative w-full py-16 sm:py-28 px-5 sm:px-8 md:px-12 lg:px-16 selection:bg-[#E85500] selection:text-white"
    >
      {/* DESKTOP INTERACTIVE TAB DISPLAY (md:block) */}
      <div
        className={`hidden md:block w-full rounded-3xl p-12 transition-colors duration-700 ${
          current.bgColor
        } ${current.isDark ? 'text-white' : 'text-[#111111]'}`}
      >
        <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[60vh]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-current/10 pb-6 mb-8">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-[#E85500]" />
              <span>The Flowchain Narrative Architecture</span>
            </div>

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

          {/* Chapter Display */}
          <div className="my-auto py-8 flex flex-col items-start gap-5">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#E85500] px-3 py-1 bg-[#E85500]/10 rounded-full">
              {current.badge}
            </span>

            <h2 className="font-syne font-black text-6xl lg:text-8xl xl:text-9xl leading-none tracking-tighter uppercase">
              {current.word}
            </h2>

            <p className="font-syne font-bold text-2xl lg:text-3xl max-w-3xl leading-snug">
              {current.subtitle}
            </p>

            <p className="font-sans text-base opacity-75 max-w-xl leading-relaxed">
              {current.desc}
            </p>
          </div>

          {/* Bottom Nav */}
          <div className="flex items-center justify-between pt-6 border-t border-current/10 font-mono text-xs">
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
      </div>

      {/* MOBILE STACKED VERTICAL CHAPTERS (md:hidden) */}
      <div className="md:hidden space-y-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#E85500] uppercase tracking-widest mb-2 font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Narrative Architecture</span>
          </div>
          <h3 className="font-syne font-extrabold text-3xl text-[#111111]">
            THE FIVE CHAPTERS.
          </h3>
        </div>

        {chapters.map((ch) => (
          <div
            key={ch.word}
            className={`rounded-3xl p-6 border border-black/10 flex flex-col items-center text-center space-y-4 ${
              ch.bgColor
            } ${ch.isDark ? 'text-white border-white/10' : 'text-[#111111]'}`}
          >
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#E85500] px-3 py-1 bg-[#E85500]/10 rounded-full">
              {ch.badge}
            </span>

            <h4 className="font-syne font-black text-4xl sm:text-5xl tracking-tight leading-none uppercase">
              {ch.word}
            </h4>

            <p className="font-syne font-bold text-lg leading-snug">
              {ch.subtitle}
            </p>

            <p className="font-sans text-xs opacity-80 max-w-xs leading-relaxed">
              {ch.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
