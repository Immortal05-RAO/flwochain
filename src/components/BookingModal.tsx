import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [selectedService, setSelectedService] = useState('AI Voice Receptionist & Automation');
  const [selectedTime, setSelectedTime] = useState('10:30 AM IST');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send real-time client booking email notification to flowchain05@gmail.com
      await fetch('https://formsubmit.co/ajax/flowchain05@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `🔥 New Client Meeting Booking: ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
          'Client Name': formData.name,
          'Client Email': formData.email,
          'Primary Service Requested': selectedService,
          'Meeting Time Slot (IST)': selectedTime,
          'Booking Time': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        }),
      });
    } catch (err) {
      console.error('Email dispatch error:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);

      // Fire Confetti Burst
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#E85500', '#00D2FF', '#25D366', '#FFFFFF'],
        });
      } catch {
        // Fallback silent
      }
    }
  };

  const services = [
    'AI Voice Receptionist & Phone Agents',
    'WhatsApp Automation & Lead Qualification',
    'AI Workflows & Custom Zapier/n8n Nodes',
    'High-Conversion Editorial Website Design',
    'Custom Digital Operating System / CRM',
  ];

  const timeSlots = [
    '10:00 AM IST',
    '11:30 AM IST',
    '02:00 PM IST',
    '04:30 PM IST',
    '06:00 PM IST',
  ];

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all duration-300 font-sans">
      <div className="relative w-full max-w-xl bg-[#EBEBEB] text-[#111111] rounded-3xl p-6 sm:p-8 shadow-2xl border border-black/20 overflow-hidden animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-black/5 hover:bg-[#E85500] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#E85500] uppercase tracking-widest mb-2 font-bold">
              <Sparkles className="w-4 h-4" />
              <span>Flowchain Strategy Session</span>
            </div>

            <h3 className="font-syne font-extrabold text-2xl sm:text-3xl text-[#111111] mb-2">
              RESERVE YOUR 30-MIN SYSTEM MAP
            </h3>

            <p className="font-sans text-xs sm:text-sm text-[#666666] mb-6">
              We'll analyze your workflow bottlenecks and design your custom automation architecture live on the call.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Selection */}
              <div>
                <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#444444] mb-2">
                  1. Select Primary Need
                </label>
                <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1 font-sans text-xs">
                  {services.map((svc) => (
                    <button
                      type="button"
                      key={svc}
                      onClick={() => setSelectedService(svc)}
                      className={`w-full text-left p-3 rounded-xl border font-medium transition-all ${
                        selectedService === svc
                          ? 'bg-[#E85500] text-white border-[#E85500] shadow-md'
                          : 'bg-white/70 text-[#111111] border-black/10 hover:border-[#E85500]'
                      }`}
                    >
                      {svc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slot Selector */}
              <div>
                <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#444444] mb-2">
                  2. Select Time Slot (Tomorrow)
                </label>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {timeSlots.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setSelectedTime(slot)}
                      className={`px-3 py-2 rounded-lg border transition-all ${
                        selectedTime === slot
                          ? 'bg-black text-white border-black font-bold'
                          : 'bg-white/70 text-[#111111] border-black/10 hover:border-black'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-sans text-xs">
                <div>
                  <label className="block font-mono text-[10px] font-bold uppercase text-[#666666] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 rounded-xl bg-white border border-black/10 text-[#111111] focus:outline-none focus:border-[#E85500]"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] font-bold uppercase text-[#666666] mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 rounded-xl bg-white border border-black/10 text-[#111111] focus:outline-none focus:border-[#E85500]"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#E85500] hover:bg-[#D44B00] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-full shadow-xl transition-transform hover:scale-[1.02] flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Dispatching Meeting Invite...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm Strategy Booking</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#27c93f]/20 text-[#27c93f] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-syne font-black text-3xl text-[#111111]">
              STRATEGY SESSION CONFIRMED!
            </h3>

            <p className="font-sans text-sm text-[#555555] max-w-md mx-auto leading-relaxed">
              We've sent your calendar invite to{' '}
              <strong className="text-[#111111]">{formData.email || 'your email'}</strong> for{' '}
              <span className="text-[#E85500] font-bold">{selectedTime}</span>.
            </p>

            <button
              onClick={onClose}
              className="px-8 py-3 bg-[#111111] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#E85500] transition-colors"
            >
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
