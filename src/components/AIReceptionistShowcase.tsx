import React, { useState, useEffect } from 'react';
import { PhoneCall, Volume2, Mic, ShieldCheck, Sparkles } from 'lucide-react';

interface AIReceptionistProps {
  onOpenBooking: () => void;
}

export const AIReceptionistShowcase: React.FC<AIReceptionistProps> = ({ onOpenBooking }) => {
  const [activeLine, setActiveLine] = useState(0);

  const script = [
    { speaker: 'Caller', text: "Hi! I need to book a consultation for our team of 25." },
    { speaker: 'AI Agent', text: "Hello! I can definitely help with that. Our enterprise strategy team has openings tomorrow at 10 AM or 3 PM PST. Which works best?" },
    { speaker: 'Caller', text: "10 AM PST works great." },
    { speaker: 'AI Agent', text: "Recorded! I've sent a calendar invite to your email along with our prep deck. Is there anything else I can assist with?" },
    { speaker: 'Caller', text: "That was incredibly fast. Thank you!" },
    { speaker: 'AI Agent', text: "My pleasure! Have a wonderful day." },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLine((prev) => (prev + 1) % script.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [script.length]);

  return (
    <section className="relative w-full bg-[#0A0A0C] text-[#F5F5F3] py-28 px-6 md:px-12 lg:px-16 selection:bg-[#00D2FF] selection:text-black overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00D2FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00D2FF]/10 border border-[#00D2FF]/30 rounded-full text-[#00D2FF] font-mono text-xs uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Voice Receptionist Spotlight</span>
          </div>

          <h2 className="font-syne font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight mb-6">
            YOUR BUSINESS <br />
            <span className="text-[#00D2FF]">NEVER SLEEPS.</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-white/70 leading-relaxed">
            Our AI voice agents answer calls, qualify leads, and book appointments 24/7 — without a single hire.
          </p>
        </div>

        {/* 3 Column Layout: Left Stat | Center 3D Phone & Waveform | Right Transcript */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Stat Card */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="glass-card-dark p-8 rounded-3xl border border-white/10 shadow-2xl">
              <div className="w-12 h-12 rounded-2xl bg-[#00D2FF]/20 text-[#00D2FF] flex items-center justify-center mb-6">
                <PhoneCall className="w-6 h-6 animate-pulse" />
              </div>

              <div className="font-syne font-black text-5xl text-white mb-2">
                100%
              </div>

              <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#00D2FF] mb-3">
                Inbound Calls Handled
              </div>

              <p className="text-sm text-white/60 leading-relaxed">
                Zero wait time. Zero missed opportunities. Every lead is qualified and routed instantly into your CRM.
              </p>
            </div>

            <div className="glass-card-dark p-6 rounded-3xl border border-white/10 flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-green-400" />
                <span className="text-white/80">LATENCY: &lt; 350MS</span>
              </div>
              <span className="text-[#00D2FF] font-bold">NATURAL HUMAN VOICE</span>
            </div>
          </div>

          {/* Center Column: Animated 3D Phone with Audio Waveform */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative">
            {/* Phone Outer Shell */}
            <div className="w-72 h-[480px] bg-[#141418] rounded-[44px] border-4 border-white/20 p-4 shadow-2xl relative flex flex-col justify-between overflow-hidden glow-box-blue">
              {/* Dynamic Island */}
              <div className="w-24 h-4 bg-black rounded-full mx-auto mb-4" />

              {/* Call Header */}
              <div className="text-center font-mono space-y-1">
                <div className="text-xs text-[#00D2FF] font-bold">FLOWCHAIN AI VOICE</div>
                <div className="text-lg text-white font-syne font-bold">+1 (800) FLOW-AI</div>
                <div className="text-[10px] text-green-400 font-semibold uppercase">ACTIVE CALL • 01:24</div>
              </div>

              {/* Audio Wave Visualizer Ring */}
              <div className="flex items-center justify-center gap-1.5 py-8 my-auto">
                {[20, 45, 70, 35, 60, 25, 80, 40, 65, 30].map((h, i) => (
                  <div
                    key={i}
                    className="w-2 bg-[#00D2FF] rounded-full audio-wave-bar"
                    style={{
                      height: `${h}px`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                ))}
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 text-xs font-mono text-center pt-4 border-t border-white/10">
                <div className="p-3 rounded-full bg-white/10 text-white flex items-center justify-center gap-1">
                  <Mic className="w-3.5 h-3.5 text-[#00D2FF]" /> MUTE
                </div>
                <div className="p-3 rounded-full bg-[#00D2FF] text-black font-bold flex items-center justify-center gap-1">
                  <Volume2 className="w-3.5 h-3.5" /> SPEAKER
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Conversation Transcript */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="glass-card-dark p-6 rounded-3xl border border-white/10">
              <div className="flex items-center justify-between font-mono text-xs text-white/50 mb-4 pb-3 border-b border-white/10">
                <span>REAL-TIME CALL TRANSCRIPT</span>
                <span className="text-[#00D2FF] font-bold">AUTO-RECORDED</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {script.map((line, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      activeLine === idx
                        ? 'bg-[#00D2FF]/20 border border-[#00D2FF] text-white font-semibold'
                        : 'bg-white/5 text-white/60'
                    }`}
                  >
                    <span
                      className={`font-bold block mb-0.5 text-[10px] uppercase ${
                        line.speaker === 'AI Agent' ? 'text-[#00D2FF]' : 'text-white/40'
                      }`}
                    >
                      {line.speaker}
                    </span>
                    <p className="leading-relaxed">{line.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-4 bg-[#00D2FF] hover:bg-[#00b5dc] text-black font-mono font-bold text-xs uppercase tracking-wider rounded-full shadow-xl transition-all duration-300 hover:scale-[1.02] interactive-hover"
            >
              Test AI Voice Agent Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
