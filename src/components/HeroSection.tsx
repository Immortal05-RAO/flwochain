import React from 'react';
import { ArrowUpRight, TrendingUp, ChevronDown } from 'lucide-react';
import { ThreeHeroCanvas } from './ThreeHeroCanvas';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-[#EBEBEB] text-[#111111] pt-28 sm:pt-36 md:pt-40 pb-16 px-5 sm:px-8 md:px-12 lg:px-16 flex flex-col justify-between overflow-hidden selection:bg-[#E85500] selection:text-white"
    >
      {/* Ghosted Vector SVG Watermark (High Visibility & Ghosted Contrast) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl px-4 pointer-events-none select-none overflow-hidden z-0">
        <svg
          className="w-full h-auto opacity-70 md:opacity-85 drop-shadow-md"
          viewBox="0 0 1000 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            x="50%"
            y="55%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="Syne, sans-serif"
            fontWeight="900"
            fontSize="145"
            letterSpacing="-4"
          >
            FLOWCHAIN
          </text>
        </svg>
      </div>

      {/* Top Bar Metadata */}
      <div className="relative z-10 flex items-center justify-between font-mono text-xs text-[#666666] mb-6">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 bg-black/5 rounded-md font-semibold text-[#111111]">
            [1 / 7]
          </span>
          <span className="hidden sm:inline-block uppercase tracking-wider">
            Flowchain OS • Digital Systems Studio
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#27c93f] animate-pulse" />
          <span className="uppercase tracking-widest text-[10px] sm:text-[11px] font-semibold text-[#222222]">
            Accepting Cohorts
          </span>
        </div>
      </div>

      {/* Main Grid: Single Column on Mobile (<=768px), 12 Columns on Desktop */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto max-w-7xl mx-auto w-full">
        {/* Headline & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          <h1 className="font-syne font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[76px] leading-[0.98] tracking-tight text-[#111111] break-words">
            BUILDING <br />
            DIGITAL SYSTEMS <br />
            <span className="text-[#E85500]">THAT FLOW.</span>
          </h1>

          <p className="font-sans text-sm sm:text-base md:text-lg text-[#444444] max-w-xl leading-relaxed font-normal">
            We craft AI automation, intelligent workflows, and premium digital experiences that drive real business growth.
          </p>

          {/* Buttons: Stacked Full-Width on Mobile, Inline Row on Desktop */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-2">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 bg-[#E85500] hover:bg-[#D44B00] text-white font-mono text-xs font-semibold uppercase tracking-wider rounded-full shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href="#services"
              className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 bg-transparent border border-black/20 hover:border-black text-[#111111] font-mono text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>See Our Work</span>
            </a>
          </div>
        </div>

        {/* 3D Workstation & Stat Callout Card */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end relative w-full">
          {/* 3D Central Workstation (Scaled to Viewport Bounds) */}
          <div className="w-full max-w-[340px] sm:max-w-md mx-auto">
            <ThreeHeroCanvas />
          </div>

          {/* Stat Callout Card (Moved Below 3D Canvas on Mobile, Centered) */}
          <div className="w-full max-w-xs mx-auto lg:mx-0 mt-4 lg:absolute lg:top-0 lg:right-2 z-20 glass-card-light p-4 sm:p-5 rounded-2xl shadow-xl border border-black/10">
            <div className="flex items-center justify-between gap-3 mb-1">
              <span className="font-syne font-black text-2xl sm:text-3xl text-[#111111]">
                340%
              </span>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#E85500]/15 flex items-center justify-center text-[#E85500]">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
            <div className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#E85500] mb-1">
              Efficiency Gain
            </div>
            <p className="text-[11px] text-[#666666] leading-tight">
              Our clients automate what slows them down.
            </p>
          </div>
        </div>
      </div>

      {/* Social Icons Stack (Hidden on Mobile, Desktop Only) */}
      <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 flex-col gap-4 text-[#666666]">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="p-2.5 bg-[#EBEBEB]/90 rounded-full border border-black/10 hover:border-[#E85500] hover:text-[#E85500] transition-colors"
          title="LinkedIn"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z"/>
          </svg>
        </a>
        <a
          href="https://x.com"
          target="_blank"
          rel="noreferrer"
          className="p-2.5 bg-[#EBEBEB]/90 rounded-full border border-black/10 hover:border-[#E85500] hover:text-[#E85500] transition-colors"
          title="X / Twitter"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
      </div>

      {/* Bottom Scroll Prompt */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-6 text-center">
        <a
          href="#explosion"
          className="flex flex-col items-center gap-1.5 text-xs font-mono text-[#666666] hover:text-[#E85500] transition-colors"
        >
          <span className="uppercase tracking-widest text-[10px]">
            SCROLL TO EXPLODE SYSTEM
          </span>
          <div className="w-5 h-7 border-2 border-black/20 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-[#E85500] rounded-full animate-bounce" />
          </div>
          <ChevronDown className="w-3.5 h-3.5 animate-pulse" />
        </a>
      </div>
    </section>
  );
};
