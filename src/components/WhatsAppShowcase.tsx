import React, { useState, useEffect } from 'react';
import { Send, Sparkles } from 'lucide-react';

interface WhatsAppShowcaseProps {
  onOpenBooking: () => void;
}

export const WhatsAppShowcase: React.FC<WhatsAppShowcaseProps> = ({ onOpenBooking }) => {
  const [chatStep, setChatStep] = useState(0);

  const messages = [
    { sender: 'user', text: "Hi! I saw your ad for workflow automation.", time: '10:04 AM' },
    { sender: 'bot', text: "Hello! Welcome to Flowchain. What is your primary bottleneck right now?", time: '10:04 AM' },
    { sender: 'user', text: "We lose leads on weekends when staff is off.", time: '10:05 AM' },
    { sender: 'bot', text: "Our WhatsApp AI Agent responds in < 3 seconds, qualifies leads, and books meetings directly into your calendar.", time: '10:05 AM' },
    { sender: 'bot', text: "Would you like to schedule a 30-minute system architecture call?", time: '10:05 AM' },
    { sender: 'user', text: "Yes, let's do tomorrow at 2 PM.", time: '10:06 AM' },
    { sender: 'bot', text: "✓ CONFIRMED: Strategy Session with Flowchain. Calendar invite sent!", time: '10:06 AM', isConfirmed: true },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setChatStep((prev) => (prev + 1) % (messages.length + 1));
    }, 2200);
    return () => clearInterval(timer);
  }, [messages.length]);

  return (
    <section className="relative w-full bg-[#EBEBEB] text-[#111111] py-28 px-6 md:px-12 lg:px-16 selection:bg-[#25D366] selection:text-white border-t border-black/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Value Prop */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#25D366]/10 rounded-full text-[#1b9a4a] font-mono text-xs uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>WhatsApp CRM Spotlight</span>
            </div>

            <h2 className="font-syne font-extrabold text-4xl sm:text-6xl text-[#111111] tracking-tight">
              YOUR SALES TEAM, <br />
              <span className="text-[#25D366]">INSIDE WHATSAPP.</span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#555555] leading-relaxed max-w-lg">
              Automated follow-ups, lead qualification, appointment booking, and customer support — all through the app your customers already use.
            </p>

            <div className="grid grid-cols-2 gap-4 w-full pt-2 font-mono text-xs">
              <div className="p-4 bg-white/70 rounded-2xl border border-black/10 shadow-sm">
                <div className="text-[#25D366] font-bold text-xl font-syne">&lt; 3 SEC</div>
                <div className="text-[#666666]">Avg Response Time</div>
              </div>
              <div className="p-4 bg-white/70 rounded-2xl border border-black/10 shadow-sm">
                <div className="text-[#25D366] font-bold text-xl font-syne">89%</div>
                <div className="text-[#666666]">Open & Click Rate</div>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="mt-4 px-8 py-4 bg-[#25D366] hover:bg-[#1fbd59] text-white font-mono text-sm font-semibold uppercase tracking-wider rounded-full shadow-xl transition-transform hover:scale-105"
            >
              Build WhatsApp Agent
            </button>
          </div>

          {/* Right Column: Animated 3D Phone Screen showing WhatsApp Thread */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-80 sm:w-96 h-[540px] bg-[#0b141a] rounded-[48px] border-8 border-[#1f2c34] p-4 shadow-2xl flex flex-col justify-between overflow-hidden relative font-sans text-white">
              {/* WhatsApp Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#25d366] flex items-center justify-center text-white font-bold font-syne">
                    FC
                  </div>
                  <div>
                    <div className="font-bold text-sm">Flowchain AI Bot</div>
                    <div className="text-[10px] text-[#25d366]">Online • Always Active</div>
                  </div>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#25d366] animate-pulse" />
              </div>

              {/* Chat Thread */}
              <div className="space-y-3 my-auto overflow-y-auto max-h-[380px] pr-1 font-sans text-xs">
                {messages.slice(0, chatStep).map((msg, i) => (
                  <div
                    key={i}
                    className={`flex flex-col max-w-[85%] ${
                      msg.sender === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'
                    }`}
                  >
                    <div
                      className={`p-3 rounded-2xl ${
                        msg.sender === 'user'
                          ? 'bg-[#005c4b] text-white rounded-tr-none'
                          : msg.isConfirmed
                          ? 'bg-[#25d366] text-black font-bold rounded-tl-none'
                          : 'bg-[#202c33] text-white rounded-tl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[9px] text-white/40 mt-1 font-mono">{msg.time}</span>
                  </div>
                ))}
              </div>

              {/* Input Footer */}
              <div className="flex items-center gap-2 bg-[#202c33] p-2 rounded-full border border-white/10 text-xs">
                <input
                  type="text"
                  placeholder="Type a message..."
                  disabled
                  className="bg-transparent px-3 w-full text-white/50 focus:outline-none"
                />
                <button className="w-8 h-8 rounded-full bg-[#25d366] text-black flex items-center justify-center">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
