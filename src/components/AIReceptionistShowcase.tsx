import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface AIReceptionistShowcaseProps {
  onOpenBooking: () => void;
}

type PersonaType = 'concierge' | 'technical' | 'sales';

export const AIReceptionistShowcase: React.FC<AIReceptionistShowcaseProps> = ({ onOpenBooking }) => {
  const [activePersona, setActivePersona] = useState<PersonaType>('concierge');
  const [isSimulating, setIsSimulating] = useState(false);
  const [visibleStep, setVisibleStep] = useState<number>(4); // Default shows full transcript
  const [isFading, setIsFading] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isCardVisible, setIsCardVisible] = useState(false);

  // IntersectionObserver for entrance motion
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsCardVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const personas: { id: PersonaType; label: string }[] = [
    { id: 'concierge', label: 'Concierge AI' },
    { id: 'technical', label: 'Tech Specialist AI' },
    { id: 'sales', label: 'High-Ticket Sales AI' },
  ];

  const transcriptData: Record<PersonaType, Array<{ sender: 'caller' | 'ai'; text: string }>> = {
    concierge: [
      { sender: 'caller', text: 'Hi, I need an AI voice receptionist to handle inbound bookings for our clinic.' },
      { sender: 'ai', text: 'Hello! We build HIPAA-compliant voice agents that handle scheduling 24/7. Shall I lock in a 10-minute demo for tomorrow?' },
      { sender: 'caller', text: 'Yes, 10 AM PST works perfectly.' },
      { sender: 'ai', text: 'Done! Calendar invite dispatched to your email. Talk soon!' },
    ],
    technical: [
      { sender: 'caller', text: 'Do your voice agents support multi-step CRM webhooks and live database lookups?' },
      { sender: 'ai', text: 'Yes. Our agents execute real-time REST API queries mid-call with sub-500ms voice latency.' },
      { sender: 'caller', text: 'Excellent. Let’s start a technical architecture audit.' },
      { sender: 'ai', text: 'Understood. Reserving an engineering review slot for your team now.' },
    ],
    sales: [
      { sender: 'caller', text: 'What is the ROI on deploying AI voice agents for enterprise inbound leads?' },
      { sender: 'ai', text: 'Our clients average a 340% increase in lead velocity by capturing and qualifying 100% of after-hours calls.' },
      { sender: 'caller', text: 'Sounds solid. Can we set up an executive strategy call?' },
      { sender: 'ai', text: 'Locking in a 20-minute strategy session with Shashwat V. Rao & Dev U.' },
    ],
  };

  const handlePersonaChange = (newPersona: PersonaType) => {
    if (newPersona === activePersona) return;
    setIsFading(true);
    setTimeout(() => {
      setActivePersona(newPersona);
      setVisibleStep(4);
      setIsFading(false);
    }, 300);
  };

  const handleSimulateCall = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setVisibleStep(1);

    const timers = [
      setTimeout(() => setVisibleStep(2), 1200),
      setTimeout(() => setVisibleStep(3), 2600),
      setTimeout(() => {
        setVisibleStep(4);
        setIsSimulating(false);
      }, 4000),
    ];

    return () => timers.forEach(clearTimeout);
  };

  const currentTranscript = transcriptData[activePersona];

  return (
    <section
      id="ai-receptionist"
      className="relative w-full bg-[#111111] text-white py-16 sm:py-28 px-5 sm:px-8 md:px-12 lg:px-16 selection:bg-[#E85500] selection:text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-4">
          <h2 className="font-syne font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[0.98]">
            Your Business Never Sleeps.
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#999999] max-w-[520px] mx-auto leading-relaxed">
            Our AI voice agents answer every inbound call, qualify leads, and book appointments — 24 hours a day, zero wait time.
          </p>
        </div>

        {/* Service Type Selector (Clean text links with orange underline) */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mb-10 font-mono text-xs uppercase tracking-wider">
          {personas.map((p, idx) => (
            <React.Fragment key={p.id}>
              {idx > 0 && <span className="text-[#333333] select-none">•</span>}
              <button
                onClick={() => handlePersonaChange(p.id)}
                className={`transition-colors py-1 ${
                  activePersona === p.id
                    ? 'text-white font-bold border-b-2 border-[#E85500] pb-1'
                    : 'text-[#555555] hover:text-white'
                }`}
              >
                {p.label}
              </button>
            </React.Fragment>
          ))}
        </div>

        {/* Main Interactive Centered Card */}
        <div
          ref={cardRef}
          className={`bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl transition-all duration-700 ease-out ${
            isCardVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Column — Phone Illustration & Clean White Pill Button */}
            <div className="flex flex-col items-center justify-center text-center space-y-8 w-full">
              {/* Minimal Dark Phone Silhouette Illustration */}
              <div className="relative w-28 h-48 sm:w-32 sm:h-56 rounded-[2.2rem] bg-[#111111] border-2 border-[#2A2A2A] p-2 flex flex-col justify-between items-center shadow-xl">
                {/* Phone Speaker Notch */}
                <div className="w-10 h-1 bg-[#2A2A2A] rounded-full mt-1" />

                {/* Inner Screen Display */}
                <div className="w-full my-auto flex flex-col items-center space-y-3 px-2">
                  <div className="w-10 h-10 rounded-full bg-[#2A2A2A] flex items-center justify-center text-[#E85500] font-mono text-xs font-bold">
                    AI
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[#888888]">
                    {isSimulating ? 'CALL IN PROGRESS' : '24/7 INBOUND ACTIVE'}
                  </div>
                  {/* Single Minimal Audio Line Waveform */}
                  <div className="w-16 h-1 flex items-center justify-center gap-1">
                    {[12, 24, 16, 28, 14].map((h, i) => (
                      <div
                        key={i}
                        className="w-1 bg-white/70 rounded-full transition-all duration-300"
                        style={{ height: isSimulating ? `${h}px` : '4px' }}
                      />
                    ))}
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="w-8 h-1 bg-[#2A2A2A] rounded-full mb-1" />
              </div>

              {/* Single CTA Button — Clean White Pill Button (Hover shifts to orange) */}
              <button
                onClick={handleSimulateCall}
                disabled={isSimulating}
                className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 bg-white hover:bg-[#E85500] text-black hover:text-white font-mono text-xs font-bold uppercase tracking-wider rounded-full shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>{isSimulating ? 'Simulating Call...' : 'Simulate an Inbound Call'}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Minimal Data Stats Below Button */}
              <div className="grid grid-cols-2 gap-6 w-full max-w-xs pt-2">
                <div className="text-center">
                  <div className="font-syne font-bold text-2xl sm:text-3xl text-white">
                    100%
                  </div>
                  <div className="font-mono text-[11px] text-[#666666] uppercase mt-1">
                    Call Answer Rate
                  </div>
                </div>

                <div className="text-center">
                  <div className="font-syne font-bold text-2xl sm:text-3xl text-white">
                    &lt; 500ms
                  </div>
                  <div className="font-mono text-[11px] text-[#666666] uppercase mt-1">
                    Voice Response Latency
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column — Clean Line-by-Line Transcript Panel */}
            <div className="space-y-4 w-full">
              {/* Header Row */}
              <div className="flex items-center justify-between font-mono text-[11px] text-[#E85500] font-bold uppercase tracking-wide">
                <span>REAL-TIME CALL TRANSCRIPT</span>
                <span>LATENCY: 420MS</span>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-[#2A2A2A]" />

              {/* Conversation Transcript Stream */}
              <div
                className={`space-y-5 py-3 min-h-[260px] transition-opacity duration-300 ${
                  isFading ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {currentTranscript.slice(0, visibleStep).map((row, idx) => (
                  <div key={idx} className="space-y-1 text-sm font-sans leading-relaxed animate-fade-in">
                    <div className="font-mono text-[11px] uppercase tracking-wider font-bold">
                      {row.sender === 'caller' ? (
                        <span className="text-[#666666]">CALLER:</span>
                      ) : (
                        <span className="text-[#E85500]">FLOWCHAIN AI:</span>
                      )}
                    </div>
                    <p className={row.sender === 'caller' ? 'text-white' : 'text-[#E0E0E0]'}>
                      "{row.text}"
                    </p>
                  </div>
                ))}

                {/* 3-Dot Pulse Typing Indicator before next AI line */}
                {isSimulating && visibleStep < 4 && (
                  <div className="flex items-center gap-1.5 pt-2">
                    <span className="font-mono text-[11px] text-[#E85500] uppercase font-bold mr-2">
                      FLOWCHAIN AI:
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E85500] animate-ping" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E85500] animate-ping delay-150" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E85500] animate-ping delay-300" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar Below Card (3 Stats separated by thin vertical dividers) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 border-t border-[#2A2A2A] pt-10 text-center">
          <div className="sm:border-r border-[#2A2A2A] sm:px-4">
            <div className="font-syne font-extrabold text-3xl sm:text-4xl text-white mb-1">
              24/7
            </div>
            <div className="font-mono text-xs text-[#666666] uppercase tracking-wider">
              Always On
            </div>
          </div>

          <div className="sm:border-r border-[#2A2A2A] sm:px-4">
            <div className="font-syne font-extrabold text-3xl sm:text-4xl text-white mb-1">
              &lt; 500ms
            </div>
            <div className="font-mono text-xs text-[#666666] uppercase tracking-wider">
              Response Time
            </div>
          </div>

          <div className="sm:px-4">
            <div className="font-syne font-extrabold text-3xl sm:text-4xl text-white mb-1">
              100%
            </div>
            <div className="font-mono text-xs text-[#666666] uppercase tracking-wider">
              Call Coverage
            </div>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 bg-[#E85500] hover:bg-[#D44B00] text-white font-mono text-xs font-semibold uppercase tracking-wider rounded-full shadow-xl transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            <span>Deploy Your AI Voice Receptionist</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
