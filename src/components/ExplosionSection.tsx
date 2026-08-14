import React, { useState, useEffect, useRef } from 'react';
import {
  Monitor,
  Mic,
  MessageSquare,
  Cpu,
  LayoutDashboard,
  Layers,
  ArrowRight,
  Sparkles,
  RefreshCw,
} from 'lucide-react';

interface ExplosionSectionProps {
  onOpenBooking?: () => void;
}

export const ExplosionSection: React.FC<ExplosionSectionProps> = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  // IntersectionObserver to trigger entrance animation when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasTriggered(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 6 Service Cards Data with clean Desktop Offsets
  const nodes = [
    {
      id: 'website',
      name: 'Website Design & Dev',
      icon: Monitor,
      desc: 'High-conversion, fluid web design.',
      color: '#E85500',
      badge: 'MINI BROWSER',
      dx: -340,
      dy: -140,
    },
    {
      id: 'receptionist',
      name: 'AI Receptionist',
      icon: Mic,
      desc: '24/7 autonomous voice agents.',
      color: '#00D2FF',
      badge: 'LIVE WAVEFORM',
      dx: 340,
      dy: -140,
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp Automation',
      icon: MessageSquare,
      desc: 'Instant chat qualification & booking.',
      color: '#25D366',
      badge: 'AUTO-CHAT',
      dx: -370,
      dy: 0,
    },
    {
      id: 'workflows',
      name: 'AI Workflows & Nodes',
      icon: Cpu,
      desc: 'Autonomous Zapier/n8n pipelines.',
      color: '#FFBD2E',
      badge: 'PULSE NODES',
      dx: 370,
      dy: 0,
    },
    {
      id: 'crms',
      name: 'Custom Digital Systems',
      icon: LayoutDashboard,
      desc: 'Tailored CRM & internal portals.',
      color: '#A855F7',
      badge: 'DASHBOARD',
      dx: -340,
      dy: 140,
    },
    {
      id: 'integrations',
      name: 'CRM & API Integrations',
      icon: Layers,
      desc: 'Connected ecosystem & webhooks.',
      color: '#3B82F6',
      badge: 'DATA CABLES',
      dx: 340,
      dy: 140,
    },
  ];

  return (
    <section
      id="explosion"
      ref={sectionRef}
      className={`relative w-full bg-[#0A0A0C] text-[#F5F5F3] py-16 sm:py-24 px-5 sm:px-8 md:px-12 overflow-hidden selection:bg-[#E85500] selection:text-white transition-opacity duration-700 ${
        hasTriggered ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Dynamic Keyframe Animation Styles for Line Flow & Pulse */}
      <style>{`
        @keyframes dashFlow {
          0% { stroke-dashoffset: 40; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-dash-flow {
          animation: dashFlow 2s linear infinite;
        }
        @keyframes corePulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 25px rgba(232, 85, 0, 0.4); }
          50% { transform: scale(1.08); box-shadow: 0 0 45px rgba(232, 85, 0, 0.8); }
        }
        .animate-core-pulse {
          animation: corePulse 3s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto flex flex-col justify-between">
        {/* Section Header */}
        <div className="relative z-20 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#E85500] uppercase tracking-widest mb-2 font-semibold">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              <span>Signature System Transformation</span>
            </div>
            <h2 className="font-syne font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[0.98]">
              ONE CONNECTED <br />
              <span className="text-[#E85500]">DIGITAL ECOSYSTEM.</span>
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-base text-[#888888] max-w-sm leading-relaxed">
            Every component of your business connected into a unified intelligent operating system.
          </p>
        </div>

        {/* DESKTOP HUB-AND-SPOKE LAYOUT WITH LIVE ANIMATION (lg:flex) */}
        <div className="hidden lg:relative lg:flex min-h-[480px] w-full items-center justify-center my-auto">
          {/* Central Orange Hub Core Circle (FC / HUB CORE) with Breathing Pulse */}
          <div
            className={`absolute z-30 w-24 h-24 rounded-full bg-[#E85500] flex flex-col items-center justify-center text-white shadow-2xl animate-core-pulse cursor-pointer transition-all duration-500 ease-out ${
              hasTriggered ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}
          >
            <span className="font-syne font-black text-xl leading-none">FC</span>
            <span className="font-mono text-[8px] uppercase tracking-widest text-white/90 mt-1">
              HUB CORE
            </span>
          </div>

          {/* Glowing Animated Connection Lines with Flowing Dash Offsets */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {nodes.map((node) => (
              <g key={node.id}>
                {/* Dashed Line with Active Flow Animation */}
                <line
                  x1="50%"
                  y1="50%"
                  x2={`calc(50% + ${node.dx}px)`}
                  y2={`calc(50% + ${node.dy}px)`}
                  stroke={node.color}
                  strokeWidth={2.5}
                  strokeOpacity={0.7}
                  strokeDasharray="6 6"
                  className="animate-dash-flow"
                />

                {/* Pulsing Traveling Node Particle */}
                <circle
                  cx={`calc(50% + ${node.dx * 0.45}px)`}
                  cy={`calc(50% + ${node.dy * 0.45}px)`}
                  r="4"
                  fill={node.color}
                  className="animate-ping"
                />
              </g>
            ))}
          </svg>

          {/* 6 Service Cards Arranged Around Central Hub */}
          {nodes.map((node, index) => {
            const Icon = node.icon;
            const delay = 150 + index * 100;

            return (
              <div
                key={node.id}
                className={`absolute left-1/2 top-1/2 z-20 glass-card-dark p-4 rounded-2xl border border-white/15 w-56 sm:w-60 shadow-2xl transition-all duration-500 hover:border-[#E85500] hover:scale-105 ${
                  hasTriggered
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transform: `translate3d(${node.dx}px, ${node.dy}px, 0) translate(-50%, -50%)`,
                  transitionDelay: `${delay}ms`,
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className="p-1.5 rounded-lg text-white shadow-md"
                    style={{ backgroundColor: node.color }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-white/10 text-[9px] font-mono text-white/80 uppercase">
                    {node.badge}
                  </span>
                </div>

                <h3 className="font-syne font-bold text-sm text-white mb-1">
                  {node.name}
                </h3>
                <p className="text-[11px] text-white/60 mb-3 leading-snug">{node.desc}</p>

                {/* Animated Mini Demo Panels */}
                <div className="w-full h-10 rounded-lg bg-black/60 border border-white/10 p-2 flex items-center justify-between font-mono text-[9px] text-white/80">
                  {node.id === 'website' && (
                    <div className="w-full flex items-center justify-between">
                      <span className="text-[#E85500]">&lt;Hero /&gt;</span>
                      <span className="px-1.5 py-0.5 bg-green-500/20 text-green-400 rounded text-[8px] animate-pulse">
                        ACTIVE
                      </span>
                    </div>
                  )}
                  {node.id === 'receptionist' && (
                    <div className="w-full flex items-center gap-1.5">
                      <div className="flex items-center gap-1 h-4">
                        <span className="w-1 h-3 bg-[#00D2FF] animate-pulse" />
                        <span className="w-1 h-4 bg-[#00D2FF] animate-pulse delay-75" />
                        <span className="w-1 h-2 bg-[#00D2FF] animate-pulse delay-150" />
                      </div>
                      <span className="text-[#00D2FF] ml-auto text-[8px]">VOICE ON</span>
                    </div>
                  )}
                  {node.id === 'whatsapp' && (
                    <div className="w-full flex items-center justify-between text-[#25D366]">
                      <span className="animate-pulse">AI: "Confirmed!"</span>
                      <span className="text-[8px] font-bold">✓✓</span>
                    </div>
                  )}
                  {node.id === 'workflows' && (
                    <div className="w-full flex items-center gap-1 text-white/80">
                      <span>Zapier</span>
                      <span className="text-[#FFBD2E] animate-ping">→</span>
                      <span className="text-[#FFBD2E]">GPT-4o</span>
                      <span className="text-[#FFBD2E] animate-ping">→</span>
                      <span>CRM</span>
                    </div>
                  )}
                  {node.id === 'crms' && (
                    <div className="w-full flex items-center justify-between">
                      <span>Leads: 1,420</span>
                      <span className="text-purple-400 text-[8px] font-bold animate-pulse">+19.4%</span>
                    </div>
                  )}
                  {node.id === 'integrations' && (
                    <div className="w-full flex items-center justify-between text-blue-400">
                      <span>Stripe ↔ HubSpot</span>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* MOBILE STACKED CARDS LAYOUT (lg:hidden) */}
        <div className="lg:hidden flex flex-col gap-5 my-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-[#E85500] flex flex-col items-center justify-center text-white shadow-xl animate-core-pulse mb-4">
            <span className="font-syne font-black text-lg">FC</span>
            <span className="font-mono text-[8px] uppercase tracking-widest">HUB CORE</span>
          </div>

          {nodes.map((node, index) => {
            const Icon = node.icon;
            const delay = index * 80;

            return (
              <div
                key={node.id}
                className={`glass-card-dark p-5 rounded-2xl border border-white/15 w-full shadow-xl transition-all duration-500 ${
                  hasTriggered
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div
                      className="p-1.5 rounded-lg text-white"
                      style={{ backgroundColor: node.color }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-syne font-bold text-base text-white">
                      {node.name}
                    </h3>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-white/10 text-[9px] font-mono text-white/80 uppercase">
                    {node.badge}
                  </span>
                </div>

                <p className="text-xs text-white/60 mb-3 leading-relaxed">{node.desc}</p>

                <div className="w-full h-10 rounded-lg bg-black/60 border border-white/10 p-2 flex items-center justify-between font-mono text-[10px] text-white">
                  {node.id === 'website' && (
                    <div className="w-full flex items-center justify-between">
                      <span className="text-[#E85500]">&lt;Hero /&gt;</span>
                      <span className="px-1.5 py-0.5 bg-green-500/20 text-green-400 rounded text-[9px] animate-pulse">
                        ACTIVE
                      </span>
                    </div>
                  )}
                  {node.id === 'receptionist' && (
                    <div className="w-full flex items-center gap-1.5">
                      <span className="w-1 h-3 bg-[#00D2FF] animate-pulse" />
                      <span className="w-1 h-4 bg-[#00D2FF] animate-pulse delay-75" />
                      <span className="w-1 h-2 bg-[#00D2FF] animate-pulse delay-150" />
                      <span className="text-[#00D2FF] ml-auto text-[9px]">VOICE ON</span>
                    </div>
                  )}
                  {node.id === 'whatsapp' && (
                    <div className="w-full flex items-center justify-between text-[#25D366]">
                      <span className="animate-pulse">AI: "Confirmed!"</span>
                      <span>✓✓</span>
                    </div>
                  )}
                  {node.id === 'workflows' && (
                    <div className="w-full flex items-center gap-1 text-white/80">
                      <span>Zapier</span>
                      <span>→</span>
                      <span className="text-[#FFBD2E]">GPT-4o</span>
                      <span>→</span>
                      <span>CRM</span>
                    </div>
                  )}
                  {node.id === 'crms' && (
                    <div className="w-full flex items-center justify-between">
                      <span>Leads: 1,420</span>
                      <span className="text-purple-400">+19.4%</span>
                    </div>
                  )}
                  {node.id === 'integrations' && (
                    <div className="w-full flex items-center justify-between text-blue-400">
                      <span>Stripe ↔ HubSpot</span>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="relative z-20 flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/10 font-mono text-xs text-[#888888]">
          <p className="text-xs">
            Flowchain links your website, voice receptionist, WhatsApp, & CRM into one unified system.
          </p>
          <div className="flex items-center gap-2 text-[#E85500] font-semibold uppercase tracking-wider text-xs">
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  );
};
