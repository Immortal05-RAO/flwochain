import React, { useState } from 'react';
import { X, Play, ShieldCheck, Sparkles } from 'lucide-react';

interface VideoDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const VideoDemoModal: React.FC<VideoDemoModalProps> = ({ isOpen, onClose, onOpenBooking }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-card rounded-3xl max-w-3xl w-full p-6 sm:p-8 border border-slate-700/80 shadow-2xl relative bg-[#0A0E17] text-white">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#7C3AED]/10 text-purple-300 text-xs font-mono border border-[#7C3AED]/30 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FLOW CHAIN ARCHITECTURE DEMO</span>
          </div>
          <h3 className="text-2xl font-extrabold text-white">Interactive System Walkthrough</h3>
        </div>

        {/* Video / Interactive Player Viewport */}
        <div className="relative aspect-video rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden flex items-center justify-center group mb-6">
          {!isPlaying ? (
            <div className="text-center space-y-4 p-6">
              <button
                onClick={() => setIsPlaying(true)}
                className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#4F8CFF] to-[#7C3AED] text-white flex items-center justify-center mx-auto shadow-2xl shadow-[#4F8CFF]/50 group-hover:scale-110 transition-transform"
              >
                <Play className="w-7 h-7 fill-white ml-1" />
              </button>
              <h4 className="text-lg font-bold text-slate-200">
                Watch 3-Min Executive AI Walkthrough
              </h4>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                See how Retell AI voice synthesis, n8n multi-step workflows, and HubSpot 2-way sync handle 500+ daily inbound calls autonomously.
              </p>
            </div>
          ) : (
            <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-slate-950 to-slate-900 animate-in fade-in">
              <div className="flex items-center justify-between text-xs font-mono text-[#00E676]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00E676] animate-ping" />
                  SIMULATING LIVE VOICE & WORKFLOW DEMO
                </span>
                <span>02:45 / 03:00</span>
              </div>

              {/* Simulated Waveform & Logs */}
              <div className="my-auto space-y-4 text-center">
                <div className="flex items-center justify-center space-x-1.5 h-12">
                  {[...Array(24)].map((_, i) => (
                    <span
                      key={i}
                      className="w-1.5 rounded-full bg-[#4F8CFF] wave-bar"
                      style={{
                        height: `${12 + Math.sin(i * 0.8) * 24}px`,
                        animationDelay: `${i * 0.05}s`,
                      }}
                    />
                  ))}
                </div>

                <p className="text-sm font-mono text-slate-200 bg-slate-900/90 p-3 rounded-xl border border-slate-800 max-w-lg mx-auto">
                  🔊 "Hello, thanks for calling Aura Dining. I have secured your table for 4 guests tomorrow at 7:30 PM and sent the confirmation to your WhatsApp."
                </p>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-2 border-t border-slate-800">
                <span>AI Voice Agent • Sub-400ms Latency</span>
                <button
                  onClick={() => setIsPlaying(false)}
                  className="text-[#4F8CFF] hover:underline"
                >
                  Replay Demo
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
            <ShieldCheck className="w-4 h-4 text-[#00E676]" />
            <span>Tested & Production Verified</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#4F8CFF] to-[#7C3AED] text-white font-bold text-xs shadow-lg hover:scale-105 transition-transform"
          >
            Book Free Strategy Call
          </button>
        </div>

      </div>
    </div>
  );
};
