import React, { useState } from 'react';
import { Mic, Sparkles, Volume2, ArrowRight } from 'lucide-react';

interface AIReceptionistShowcaseProps {
  onOpenBooking: () => void;
}

export const AIReceptionistShowcase: React.FC<AIReceptionistShowcaseProps> = ({ onOpenBooking }) => {
  const [isPlayingCall, setIsPlayingCall] = useState(false);
  const [activePersona, setActivePersona] = useState<'concierge' | 'technical' | 'sales'>('concierge');

  const personas = [
    { id: 'concierge', name: 'Concierge AI', desc: 'Friendly booking & general inquiry handler.' },
    { id: 'technical', name: 'Tech Specialist AI', desc: 'Deep technical qualification & spec intake.' },
    { id: 'sales', name: 'High-Ticket Sales AI', desc: 'Enterprise lead qualification & executive booking.' },
  ];

  return (
    <section className="relative w-full bg-[#0A0A0C] text-white py-16 sm:py-28 px-5 sm:px-8 md:px-12 lg:px-16 selection:bg-[#00D2FF] selection:text-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00D2FF] uppercase tracking-widest px-3 py-1 bg-[#00D2FF]/10 rounded-full">
            <Sparkles className="w-4 h-4" />
            <span>24/7 VOICE AGENT SHOWCASE</span>
          </div>

          <h2 className="font-syne font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[0.98]">
            YOUR 24/7 AI <br />
            <span className="text-[#00D2FF]">VOICE RECEPTIONIST.</span>
          </h2>

          <p className="font-sans text-xs sm:text-base text-[#888888] max-w-xl mx-auto leading-relaxed">
            Never lose a lead to voicemail again. Human-sounding AI phone agents that handle inbound calls in under 500ms.
          </p>
        </div>

        {/* Persona Selector Tabs (Mobile Stack / Scroll) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {personas.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePersona(p.id as any)}
              className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                activePersona === p.id
                  ? 'bg-[#00D2FF] text-black font-bold shadow-lg shadow-cyan-500/20'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* MAIN SHOWCASE CONTAINER: Single Column Stack on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-card-dark p-6 sm:p-10 rounded-3xl border border-white/15">
          {/* Phone Call Simulator Box */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center text-center space-y-6 w-full">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-[#00D2FF] to-blue-600 p-1 flex items-center justify-center shadow-2xl">
              <div className="w-full h-full rounded-full bg-[#0A0A0C] flex flex-col items-center justify-center p-4">
                <Mic className={`w-8 h-8 text-[#00D2FF] ${isPlayingCall ? 'animate-bounce' : ''}`} />
                <span className="font-mono text-[9px] text-[#00D2FF] mt-1 uppercase">
                  {isPlayingCall ? 'LIVE CALL ACTIVE' : 'STANDBY'}
                </span>
              </div>
            </div>

            {/* Audio Waveform Visualizer */}
            <div className="w-full flex items-center justify-center gap-1.5 h-10">
              {[16, 28, 12, 36, 20, 32, 14, 24, 38, 18].map((h, i) => (
                <div
                  key={i}
                  className="w-1.5 bg-[#00D2FF] rounded-full transition-all duration-300"
                  style={{
                    height: isPlayingCall ? `${Math.min(36, h * (1 + Math.random()))}px` : '8px',
                  }}
                />
              ))}
            </div>

            {/* Simulate Call Button */}
            <button
              onClick={() => setIsPlayingCall(!isPlayingCall)}
              className="w-full sm:w-auto min-h-[48px] px-8 py-3 bg-[#00D2FF] text-black font-mono font-bold text-xs uppercase tracking-wider rounded-full flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              <Volume2 className="w-4 h-4" />
              <span>{isPlayingCall ? 'End Call Demo' : 'Simulate Inbound Call'}</span>
            </button>
          </div>

          {/* Transcript Log & Metrics */}
          <div className="lg:col-span-6 space-y-4 w-full">
            <div className="font-mono text-xs text-[#00D2FF] uppercase font-bold flex items-center justify-between border-b border-white/10 pb-2">
              <span>REAL-TIME CALL TRANSCRIPT</span>
              <span>LATENCY: 420MS</span>
            </div>

            <div className="bg-black/60 rounded-2xl p-4 sm:p-5 border border-white/10 space-y-3 text-xs sm:text-sm font-sans leading-relaxed">
              <div className="flex items-start gap-2">
                <span className="font-mono text-[10px] text-[#00D2FF] uppercase mt-0.5">Caller:</span>
                <p className="text-white/80">"Hi, I need a custom AI voice receptionist for my medical clinic."</p>
              </div>

              <div className="flex items-start gap-2">
                <span className="font-mono text-[10px] text-green-400 uppercase mt-0.5">Flowchain AI:</span>
                <p className="text-white font-medium">"Hello! Absolutely. We build HIPAA-compliant voice agents. Can I book a 10-minute demo for you tomorrow?"</p>
              </div>

              <div className="flex items-start gap-2">
                <span className="font-mono text-[10px] text-[#00D2FF] uppercase mt-0.5">Caller:</span>
                <p className="text-white/80">"Yes, 2:00 PM PST works."</p>
              </div>

              <div className="flex items-start gap-2">
                <span className="font-mono text-[10px] text-green-400 uppercase mt-0.5">Flowchain AI:</span>
                <p className="text-white font-medium">"Done! Calendar invite dispatched to your email. Talk soon!"</p>
              </div>
            </div>

            {/* Key Stat Cards Stack */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 bg-white/5 rounded-2xl border border-white/10 text-center">
                <span className="font-syne font-extrabold text-xl sm:text-2xl text-white block">100%</span>
                <span className="font-mono text-[10px] text-[#888888] uppercase">Call Answer Rate</span>
              </div>
              <div className="p-3 bg-white/5 rounded-2xl border border-white/10 text-center">
                <span className="font-syne font-extrabold text-xl sm:text-2xl text-[#00D2FF] block">&lt; 500ms</span>
                <span className="font-mono text-[10px] text-[#888888] uppercase">Voice Latency</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 bg-white text-black hover:bg-[#00D2FF] font-mono text-xs font-semibold uppercase tracking-wider rounded-full transition-colors inline-flex items-center justify-center gap-2"
          >
            <span>Build Your AI Voice Receptionist</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
