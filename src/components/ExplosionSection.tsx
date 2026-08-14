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

export const ExplosionSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0); // 0 to 1

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollableDistance = rect.height - windowHeight;

      if (totalScrollableDistance <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollableDistance));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 6 Service Nodes Data with Compact, Non-Colliding Vertically Safe Positions
  const nodes = [
    {
      id: 'website',
      name: 'Website Design & Dev',
      icon: Monitor,
      xInit: -250,
      yInit: -90,
      xExplode: -320,
      yExplode: -125,
      xNet: -230,
      yNet: -85,
      desc: 'High-conversion, fluid web design.',
      color: '#E85500',
      badge: 'Mini Browser',
    },
    {
      id: 'receptionist',
      name: 'AI Receptionist',
      icon: Mic,
      xInit: 250,
      yInit: -90,
      xExplode: 320,
      yExplode: -125,
      xNet: 230,
      yNet: -85,
      desc: '24/7 autonomous voice agents.',
      color: '#00D2FF',
      badge: 'Live Waveform',
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp Automation',
      icon: MessageSquare,
      xInit: -290,
      yInit: 10,
      xExplode: -370,
      yExplode: 10,
      xNet: -270,
      yNet: 10,
      desc: 'Instant chat qualification & booking.',
      color: '#25D366',
      badge: 'Auto-Chat',
    },
    {
      id: 'workflows',
      name: 'AI Workflows & Nodes',
      icon: Cpu,
      xInit: 290,
      yInit: 10,
      xExplode: 370,
      yExplode: 10,
      xNet: 270,
      yNet: 10,
      desc: 'Autonomous Zapier/n8n pipelines.',
      color: '#FFBD2E',
      badge: 'Pulse Nodes',
    },
    {
      id: 'crms',
      name: 'Custom Digital Systems',
      icon: LayoutDashboard,
      xInit: -240,
      yInit: 105,
      xExplode: -310,
      yExplode: 135,
      xNet: -220,
      yNet: 95,
      desc: 'Tailored CRM & internal portals.',
      color: '#A855F7',
      badge: 'Dashboard',
    },
    {
      id: 'integrations',
      name: 'CRM & API Integrations',
      icon: Layers,
      xInit: 240,
      yInit: 105,
      xExplode: 310,
      yExplode: 135,
      xNet: 220,
      yNet: 95,
      desc: 'Connected ecosystem & webhooks.',
      color: '#3B82F6',
      badge: 'Data Cables',
    },
  ];

  // Smooth interpolation calculations across scroll progress
  const explosionAmount = scrollProgress <= 0.5 ? scrollProgress * 2 : (1 - scrollProgress) * 2;
  const networkAmount = scrollProgress > 0.5 ? (scrollProgress - 0.5) * 2 : 0;

  return (
    <section
      id="explosion"
      ref={containerRef}
      className="relative h-[130vh] w-full bg-[#0A0A0C] text-[#F5F5F3] selection:bg-[#E85500] selection:text-white"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between pt-24 pb-6 px-6 md:px-12 overflow-hidden">
        {/* Section Header */}
        <div className="relative z-20 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#E85500] uppercase tracking-widest mb-1 font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Signature System Transformation</span>
            </div>
            <h2 className="font-syne font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              {scrollProgress < 0.5
                ? 'EXPLODING THE MACHINE'
                : 'RECONNECTING INTO ONE ECOSYSTEM'}
            </h2>
          </div>

          {/* Interactive Progress Indicator Bar */}
          <div className="flex flex-col items-start md:items-end font-mono text-xs text-[#888888]">
            <div className="flex items-center gap-3 mb-1">
              <span>PROGRESS:</span>
              <span className="text-[#E85500] font-bold">
                {Math.round(scrollProgress * 100)}%
              </span>
            </div>
            <div className="w-36 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#E85500] via-[#FFBD2E] to-[#00D2FF] transition-all duration-150"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Central Exploding & Connected Nodes Visualizer */}
        <div className="relative flex-1 w-full flex items-center justify-center my-auto">
          {/* Central Hub Core (Flowchain Logo) */}
          <div
            className="absolute z-30 w-20 h-20 rounded-full bg-[#E85500] flex flex-col items-center justify-center text-white shadow-2xl transition-all duration-300 glow-orange cursor-pointer"
            style={{
              transform: `scale(${0.85 + networkAmount * 0.25})`,
            }}
          >
            <span className="font-syne font-black text-lg">FC</span>
            <span className="font-mono text-[8px] uppercase tracking-widest text-white/90">
              HUB CORE
            </span>
          </div>

          {/* Connected Glowing Cable SVG Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {nodes.map((node) => {
              const x =
                node.xInit * (1 - explosionAmount) * (1 - networkAmount) +
                node.xExplode * explosionAmount * (1 - networkAmount) +
                node.xNet * networkAmount;
              const y =
                node.yInit * (1 - explosionAmount) * (1 - networkAmount) +
                node.yExplode * explosionAmount * (1 - networkAmount) +
                node.yNet * networkAmount;

              return (
                <line
                  key={node.id}
                  x1="50%"
                  y1="50%"
                  x2={`calc(50% + ${x}px)`}
                  y2={`calc(50% + ${y}px)`}
                  stroke={node.color}
                  strokeWidth={1.5 + networkAmount * 1.5}
                  strokeOpacity={0.25 + networkAmount * 0.65}
                  strokeDasharray={networkAmount > 0.4 ? '4 4' : 'none'}
                />
              );
            })}
          </svg>

          {/* 6 Compact, Non-Overlapping Service Cards */}
          {nodes.map((node) => {
            const Icon = node.icon;

            const x =
              node.xInit * (1 - explosionAmount) * (1 - networkAmount) +
              node.xExplode * explosionAmount * (1 - networkAmount) +
              node.xNet * networkAmount;

            const y =
              node.yInit * (1 - explosionAmount) * (1 - networkAmount) +
              node.yExplode * explosionAmount * (1 - networkAmount) +
              node.yNet * networkAmount;

            return (
              <div
                key={node.id}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 glass-card-dark p-3.5 rounded-2xl border border-white/15 w-52 sm:w-56 shadow-2xl transition-all duration-300 hover:border-[#E85500] hover:scale-105 interactive-hover"
                style={{
                  transform: `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), 0)`,
                  opacity: 1,
                }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div
                    className="p-1.5 rounded-lg text-white shadow-md"
                    style={{ backgroundColor: node.color }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-white/10 text-[9px] font-mono text-white/80 uppercase">
                    {node.badge}
                  </span>
                </div>

                <h3 className="font-syne font-bold text-xs sm:text-sm text-white mb-0.5">
                  {node.name}
                </h3>
                <p className="text-[10px] text-white/60 mb-2 leading-snug">{node.desc}</p>

                {/* Micro Animated Component Preview */}
                <div className="w-full h-9 rounded-lg bg-black/60 border border-white/10 p-1.5 flex items-center justify-between font-mono text-[9px] text-white/80">
                  {node.id === 'website' && (
                    <div className="w-full flex items-center justify-between">
                      <span className="text-[#E85500]">&lt;Hero /&gt;</span>
                      <span className="px-1 py-0.5 bg-green-500/20 text-green-400 rounded text-[8px]">
                        ACTIVE
                      </span>
                    </div>
                  )}
                  {node.id === 'receptionist' && (
                    <div className="w-full flex items-center gap-1">
                      <span className="w-1 h-2.5 bg-[#00D2FF] animate-pulse" />
                      <span className="w-1 h-3.5 bg-[#00D2FF] animate-pulse delay-75" />
                      <span className="w-1 h-2 bg-[#00D2FF] animate-pulse delay-150" />
                      <span className="text-[#00D2FF] ml-auto text-[8px]">VOICE ON</span>
                    </div>
                  )}
                  {node.id === 'whatsapp' && (
                    <div className="w-full flex items-center justify-between text-[#25D366]">
                      <span>AI: "Confirmed!"</span>
                      <span className="text-[8px]">✓✓</span>
                    </div>
                  )}
                  {node.id === 'workflows' && (
                    <div className="w-full flex items-center gap-1 text-white/80 text-[8px]">
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
                      <span className="text-purple-400 text-[8px]">+19.4%</span>
                    </div>
                  )}
                  {node.id === 'integrations' && (
                    <div className="w-full flex items-center justify-between text-blue-400">
                      <span>Stripe ↔ HubSpot</span>
                      <RefreshCw className="w-2.5 h-2.5 animate-spin" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Explanation */}
        <div className="relative z-20 flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-white/10 font-mono text-xs text-[#888888]">
          <p className="text-[11px]">
            {scrollProgress < 0.5
              ? 'Every component of your business separated into discrete intelligent nodes.'
              : 'Flowchain links your website, voice receptionist, WhatsApp, & CRM into one unified system.'}
          </p>
          <div className="flex items-center gap-2 text-[#E85500] font-semibold uppercase tracking-wider text-[11px]">
            <span>Scroll to continue</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </section>
  );
};
