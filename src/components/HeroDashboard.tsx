import React, { useState, useEffect } from 'react';
import { PhoneCall, MessageSquare, Cpu, Database, Calendar, CheckCircle2, Activity, Zap } from 'lucide-react';

export const HeroDashboard: React.FC = () => {
  const [tickerIndex, setTickerIndex] = useState(0);

  const liveFeedItems = [
    {
      id: '1',
      icon: PhoneCall,
      color: 'text-[#4F8CFF]',
      bg: 'bg-[#4F8CFF]/10',
      border: 'border-[#4F8CFF]/30',
      title: 'Incoming Voice Call',
      subtitle: '+1 (555) 234-8901 • Retell AI Voice Agent',
      status: 'Active • 240ms Latency',
      badge: '✓ Answered in 0.4s',
      wave: true,
    },
    {
      id: '2',
      icon: MessageSquare,
      color: 'text-[#00E676]',
      bg: 'bg-[#00E676]/10',
      border: 'border-[#00E676]/30',
      title: 'WhatsApp Automation',
      subtitle: 'Dispatched catalog & payment link',
      status: 'Meta Cloud API • Sent',
      badge: '✓ 100% Instant Reply',
      wave: false,
    },
    {
      id: '3',
      icon: Cpu,
      color: 'text-[#7C3AED]',
      bg: 'bg-[#7C3AED]/10',
      border: 'border-[#7C3AED]/30',
      title: 'n8n AI Processing',
      subtitle: 'Parsed unstructured PDF intake document',
      status: 'Claude 3.5 Sonnet • 18ms',
      badge: '✓ Autonomous Flow',
      wave: false,
    },
    {
      id: '4',
      icon: Database,
      color: 'text-amber-400',
      bg: 'bg-amber-400/10',
      border: 'border-amber-400/30',
      title: 'CRM Updated',
      subtitle: 'HubSpot Deal #9402 set to Qualified (Score 96)',
      status: '2-way Live Sync',
      badge: '✓ Record Updated',
      wave: false,
    },
    {
      id: '5',
      icon: Calendar,
      color: 'text-[#4F8CFF]',
      bg: 'bg-[#4F8CFF]/10',
      border: 'border-[#4F8CFF]/30',
      title: 'Appointment Booked',
      subtitle: 'Strategy Session with CEO confirmed for 2:30 PM',
      status: 'Google Calendar API',
      badge: '✓ Calendar Synced',
      wave: false,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % liveFeedItems.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [liveFeedItems.length]);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Ambient background glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#4F8CFF]/30 via-[#7C3AED]/20 to-[#00E676]/30 blur-2xl opacity-75 animate-pulse-slow pointer-events-none" />

      {/* Main Container Card */}
      <div className="relative glass-card rounded-2xl p-5 border border-slate-700/60 shadow-2xl overflow-hidden backdrop-blur-xl">
        {/* Header bar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-[#00E676] animate-ping" />
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-[#4F8CFF]" />
              <span className="font-mono text-xs text-slate-200 tracking-wider font-semibold">
                FLOWCHAIN OS v4.2 • LIVE
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-[#4F8CFF]/10 text-[#4F8CFF] border border-[#4F8CFF]/30">
              60 FPS ACTIVE
            </span>
          </div>
        </div>

        {/* Live Metrics Header Row */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800/80">
            <span className="text-[10px] text-slate-400 block font-medium">Uptime</span>
            <span className="text-sm font-bold text-white font-mono flex items-center gap-1">
              99.99% <CheckCircle2 className="w-3 h-3 text-[#00E676]" />
            </span>
          </div>
          <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800/80">
            <span className="text-[10px] text-slate-400 block font-medium">Avg Latency</span>
            <span className="text-sm font-bold text-[#4F8CFF] font-mono">18ms</span>
          </div>
          <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800/80">
            <span className="text-[10px] text-slate-400 block font-medium">AI Tasks 24h</span>
            <span className="text-sm font-bold text-[#00E676] font-mono">14,290</span>
          </div>
        </div>

        {/* Live Animated Ticker Stream */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-xs text-slate-400 px-1 font-mono uppercase tracking-wider text-[10px]">
            <span>Real-time Operational Stream</span>
            <span className="text-[#00E676] flex items-center gap-1">
              <Zap className="w-3 h-3" /> Auto-sync
            </span>
          </div>

          {liveFeedItems.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = index === tickerIndex;

            return (
              <div
                key={item.id}
                className={`p-3 rounded-xl border transition-all duration-500 flex items-center justify-between ${
                  isActive
                    ? `${item.bg} ${item.border} shadow-lg scale-[1.02] bg-slate-900/95`
                    : 'bg-slate-900/50 border-slate-800/60 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${item.bg} ${item.color}`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-semibold text-slate-100">{item.title}</span>
                      {item.wave && isActive && (
                        <div className="flex items-center space-x-0.5 h-3">
                          <span className="w-0.5 bg-[#4F8CFF] wave-bar" style={{ animationDelay: '0s' }}></span>
                          <span className="w-0.5 bg-[#4F8CFF] wave-bar" style={{ animationDelay: '0.2s' }}></span>
                          <span className="w-0.5 bg-[#4F8CFF] wave-bar" style={{ animationDelay: '0.4s' }}></span>
                        </div>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400 truncate max-w-[200px]">{item.subtitle}</p>
                  </div>
                </div>

                <div className="text-right flex flex-col items-end">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 font-medium">
                    {item.badge}
                  </span>
                  <span className="text-[9px] text-slate-500 font-mono mt-0.5">{item.status}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Audio Visualizer Bar at Bottom */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#4F8CFF] animate-ping" />
            <span className="font-mono text-[11px] text-slate-300">Voice Synthesis: Human Natural</span>
          </div>
          <span className="font-mono text-[10px] text-slate-500">Retell / ElevenLabs Bridge</span>
        </div>
      </div>
    </div>
  );
};
