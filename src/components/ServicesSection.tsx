import React, { useState, useEffect } from 'react';
import {
  Monitor,
  MessageSquare,
  PhoneCall,
  Cpu,
  LayoutDashboard,
  ArrowUpRight,
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  // WhatsApp Auto Chat Animation Steps
  const [waStep, setWaStep] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setWaStep((prev) => (prev + 1) % 4);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="services"
      className="relative w-full bg-[#EBEBEB] text-[#111111] py-16 sm:py-24 px-5 sm:px-8 md:px-12 lg:px-16 selection:bg-[#E85500] selection:text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="inline-block px-3 py-1 bg-[#E85500] text-white font-mono text-[11px] font-bold uppercase rounded-md tracking-wider mb-3">
              OUR SERVICES
            </div>
            <h2 className="font-syne font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#111111] tracking-tight leading-[0.98]">
              FIVE TOOLS. <br />
              <span className="text-[#E85500]">ONE SYSTEM.</span>
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-base text-[#666666] max-w-sm leading-relaxed lg:text-right">
            Every service is designed to work together — building a complete digital ecosystem for your business.
          </p>
        </div>

        {/* BENTO GRID: Single Column on Mobile (<=768px), 12 Columns on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* LEFT COLUMN (8 cols desktop, full-width mobile) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* CARD 01: WEBSITE DESIGN */}
            <div
              onClick={onOpenBooking}
              className="bg-white/80 rounded-3xl p-5 sm:p-8 border border-black/10 shadow-lg hover:border-[#E85500] transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E85500]/10 text-[#E85500] flex items-center justify-center font-bold">
                    <Monitor className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#888888]">01</span>
                  <h3 className="font-syne font-extrabold text-lg sm:text-2xl text-[#111111]">
                    Website Design
                  </h3>
                </div>
                <div className="min-w-[36px] min-h-[36px] rounded-full border border-black/10 flex items-center justify-center text-[#111111] group-hover:bg-[#E85500] group-hover:border-[#E85500] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Browser Window Mockup */}
              <div className="w-full bg-[#FAFAFA] rounded-2xl border border-black/10 p-3 sm:p-4 mb-5 shadow-inner">
                <div className="flex items-center gap-2 pb-2 border-b border-black/10 text-xs font-mono text-black/40">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <span className="ml-1 text-[10px] sm:text-[11px] text-black/60 font-sans truncate">flowchain.ai/client</span>
                </div>
                <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-4 pb-1">
                  <div className="h-12 sm:h-16 rounded-xl bg-white border border-black/10 shadow-sm" />
                  <div className="h-12 sm:h-16 rounded-xl bg-white border border-black/10 shadow-sm" />
                  <div className="h-12 sm:h-16 rounded-xl bg-white border border-black/10 shadow-sm" />
                </div>
              </div>

              <div>
                <span className="text-[#E85500] font-bold text-xs font-mono uppercase block mb-1">
                  Premium. Conversion-Focused.
                </span>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  Handcrafted websites that don't just look stunning — they turn visitors into paying customers with strategic UX and performance optimization.
                </p>
              </div>
            </div>

            {/* INNER GRID (2 Columns desktop, 1 Column mobile) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* CARD 03: AI RECEPTIONIST */}
              <div
                onClick={onOpenBooking}
                className="bg-white/80 rounded-3xl p-5 sm:p-6 border border-black/10 shadow-lg hover:border-[#E85500] transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center">
                        <PhoneCall className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#888888]">03</span>
                      <h3 className="font-syne font-bold text-base text-[#111111]">
                        AI Receptionist
                      </h3>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-[#111111] group-hover:bg-[#E85500] group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="w-full h-32 sm:h-36 bg-[#0E0E12] rounded-2xl p-3 flex flex-col items-center justify-center text-center relative mb-4 shadow-xl">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 p-0.5 relative mb-2 animate-pulse">
                      <div className="w-full h-full rounded-full bg-[#0E0E12] flex items-center justify-center text-white text-base sm:text-lg font-syne font-bold">
                        🤖
                      </div>
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-[#0E0E12]" />
                    </div>
                    <span className="font-mono text-[10px] text-white/50">Lead qualified ✓</span>
                  </div>
                </div>

                <div>
                  <span className="text-[#E85500] font-bold text-xs font-mono uppercase block mb-1">
                    Never Miss a Call.
                  </span>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    AI phone agents that answer, qualify leads, and book appointments 24/7 — no staff needed.
                  </p>
                </div>
              </div>

              {/* CARD 04: AI AUTOMATION */}
              <div
                onClick={onOpenBooking}
                className="bg-white/80 rounded-3xl p-5 sm:p-6 border border-black/10 shadow-lg hover:border-[#E85500] transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-600 flex items-center justify-center">
                        <Cpu className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#888888]">04</span>
                      <h3 className="font-syne font-bold text-base text-[#111111]">
                        AI Automation
                      </h3>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-[#111111] group-hover:bg-[#E85500] group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="w-full h-32 sm:h-36 bg-[#0E0E12] rounded-2xl p-3 flex flex-col justify-between font-mono text-[10px] text-white mb-4 shadow-xl">
                    <div className="flex items-center justify-between my-auto px-1 flex-wrap gap-1">
                      <span className="px-1.5 py-0.5 bg-amber-500/20 text-amber-400 rounded">Lead</span>
                      <span>→</span>
                      <span className="px-1.5 py-0.5 bg-cyan-500/20 text-cyan-400 rounded">AI</span>
                      <span>→</span>
                      <span className="px-1.5 py-0.5 bg-green-500/20 text-green-400 rounded">WhatsApp</span>
                      <span>→</span>
                      <span className="px-1.5 py-0.5 bg-orange-500/20 text-orange-400 rounded">CRM</span>
                    </div>
                    <span className="text-[9px] text-white/40 text-left">Processing: ✓</span>
                  </div>
                </div>

                <div>
                  <span className="text-[#E85500] font-bold text-xs font-mono uppercase block mb-1">
                    Remove Manual Work.
                  </span>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    Connect your business processes and eliminate repetitive tasks with intelligent automation workflows.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 05: CUSTOM DIGITAL SYSTEMS */}
            <div
              onClick={onOpenBooking}
              className="bg-white/80 rounded-3xl p-5 sm:p-8 border border-black/10 shadow-lg hover:border-[#E85500] transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                    <LayoutDashboard className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#888888]">05</span>
                  <h3 className="font-syne font-extrabold text-lg sm:text-2xl text-[#111111]">
                    Custom Digital Systems
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-[#111111] group-hover:bg-[#E85500] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="w-full bg-[#0E0E12] rounded-2xl p-4 mb-5 shadow-xl text-white font-mono">
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3 text-xs">
                  <div className="p-2 sm:p-2.5 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-[9px] sm:text-[10px] text-white/50">Leads</div>
                    <div className="font-bold text-base sm:text-lg text-white">142</div>
                  </div>
                  <div className="p-2 sm:p-2.5 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-[9px] sm:text-[10px] text-white/50">Booked</div>
                    <div className="font-bold text-base sm:text-lg text-white">38</div>
                  </div>
                  <div className="p-2 sm:p-2.5 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-[9px] sm:text-[10px] text-white/50">Revenue</div>
                    <div className="font-bold text-base sm:text-lg text-[#E85500]">$12k</div>
                  </div>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#E85500] w-3/4 rounded-full" />
                </div>
              </div>

              <div>
                <span className="text-[#E85500] font-bold text-xs font-mono uppercase block mb-1">
                  Built for Your Business.
                </span>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  Tailored CRMs, internal tools, and executive portals engineered specifically around your exact operational needs.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (4 cols desktop, full-width mobile): CARD 02 - WHATSAPP AUTOMATION */}
          <div className="lg:col-span-4 flex flex-col">
            <div
              onClick={onOpenBooking}
              className="bg-white/80 rounded-3xl p-5 sm:p-8 border border-black/10 shadow-lg hover:border-[#E85500] transition-all duration-300 group cursor-pointer flex flex-col justify-between h-full space-y-5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 text-green-600 flex items-center justify-center font-bold">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#888888]">02</span>
                  <h3 className="font-syne font-extrabold text-lg sm:text-2xl text-[#111111]">
                    WhatsApp Automation
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-[#111111] group-hover:bg-[#E85500] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* WhatsApp Phone Mockup Container */}
              <div className="w-full bg-[#E4DDD6] rounded-2xl p-3 sm:p-4 flex-1 flex flex-col justify-between shadow-inner font-sans border border-black/10 min-h-[380px] sm:min-h-[440px]">
                <div className="bg-[#005e54] text-white p-2.5 rounded-xl flex items-center justify-between text-xs font-bold shadow-md">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span>Flowchain AI</span>
                  </div>
                  <span className="text-[10px] text-green-200 font-normal">Online 24/7</span>
                </div>

                <div className="space-y-3 my-auto text-xs py-2">
                  {waStep >= 0 && (
                    <div className="bg-white p-2.5 rounded-2xl max-w-[90%] ml-auto text-[#111111] shadow-sm leading-snug">
                      Hi, I need info on pricing for our team.
                      <div className="text-[9px] text-black/40 text-right mt-0.5 font-mono">09:41</div>
                    </div>
                  )}

                  {waStep >= 1 && (
                    <div className="bg-white p-2.5 rounded-2xl max-w-[90%] mr-auto text-[#111111] shadow-sm leading-snug">
                      Hey! 🚀 Our starter automation plan is $299/mo. Want a demo?
                      <div className="text-[9px] text-black/40 text-right mt-0.5 font-mono">09:41</div>
                    </div>
                  )}

                  {waStep >= 2 && (
                    <div className="bg-[#dcf8c6] p-2.5 rounded-2xl max-w-[90%] ml-auto text-[#111111] shadow-sm font-semibold leading-snug">
                      Yes please! Tomorrow 10am works.
                      <div className="text-[9px] text-black/40 text-right mt-0.5 font-mono">09:42</div>
                    </div>
                  )}

                  {waStep >= 3 && (
                    <div className="bg-white p-2.5 rounded-2xl max-w-[90%] mr-auto text-[#111111] shadow-sm border-l-4 border-green-500 leading-snug">
                      <span className="text-green-600 font-bold block">✓ DEMO CONFIRMED</span>
                      <span className="text-[11px] text-[#333333]">Invite sent to your email!</span>
                      <div className="text-[9px] text-black/40 text-right mt-0.5 font-mono">09:42</div>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-black/10 font-mono text-[9px] sm:text-[10px]">
                  <div className="p-1.5 bg-white/80 rounded-xl text-center">
                    <span className="text-black/50 block">RESPONSE</span>
                    <span className="font-bold text-green-600">&lt; 3 SEC</span>
                  </div>
                  <div className="p-1.5 bg-white/80 rounded-xl text-center">
                    <span className="text-black/50 block">CONVERSION</span>
                    <span className="font-bold text-[#E85500]">+42%</span>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-[#E85500] font-bold text-xs font-mono uppercase block mb-1">
                  Conversations That Convert.
                </span>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  Automated lead capture, follow-ups, reminders, and sales conversations at scale — while you sleep.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
