import React, { useState } from 'react';
import {
  PhoneCall,
  MessageSquare,
  Cpu,
  Play,
  Mic,
  Send,
  RefreshCw,
  ArrowLeft,
} from 'lucide-react';

interface ServicesPageProps {
  onOpenBooking: () => void;
  onNavigateHome: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking, onNavigateHome }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // --- Demo 01: Voice Receptionist State ---
  const [voiceVoiceType, setVoiceVoiceType] = useState<'concierge' | 'technical' | 'sales'>('concierge');
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);
  const [voiceTranscriptLog, setVoiceTranscriptLog] = useState<string[]>([
    'System: AI Voice Engine Initialized (Latency: 14ms)',
    'AI: "Welcome to Flowchain Enterprise Support. How may I assist your operations today?"',
  ]);

  const handleSimulateVoice = () => {
    setIsPlayingVoice(true);
    const newLog = [
      ...voiceTranscriptLog,
      'Caller: "I want to schedule a system audit for our engineering team."',
      `AI (${voiceVoiceType.toUpperCase()} MODE): "Understood. I have locked in a 30-min strategy slot for tomorrow at 10 AM PST. Calendar confirmation dispatched."`,
    ];
    setVoiceTranscriptLog(newLog);
    setTimeout(() => setIsPlayingVoice(false), 3000);
  };

  // --- Demo 02: WhatsApp Chat Sandbox State ---
  const [waMessages, setWaMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string; time: string }>>([
    { sender: 'user', text: 'Hi! Can you give me a quote for WhatsApp lead automation?', time: '14:02' },
    { sender: 'ai', text: 'Hello! Absolutely. We build custom WhatsApp CRM engines with instant <3s AI replies.', time: '14:02' },
  ]);
  const [userCustomInput, setUserCustomInput] = useState('');

  const handleSendWaMessage = (textToSend?: string) => {
    const text = textToSend || userCustomInput;
    if (!text.trim()) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const updated = [...waMessages, { sender: 'user' as const, text, time }];
    setWaMessages(updated);
    if (!textToSend) setUserCustomInput('');

    // AI Auto-Reply Simulation
    setTimeout(() => {
      let aiResponse = 'Our AI agent processes leads 24/7, qualifies budget, and books calls directly to your calendar!';
      if (text.toLowerCase().includes('price') || text.toLowerCase().includes('quote')) {
        aiResponse = 'Flowchain systems start with a 30-min architecture call. Would you like to reserve a slot?';
      } else if (text.toLowerCase().includes('book') || text.toLowerCase().includes('yes')) {
        aiResponse = '✓ APPOINTMENT LOCKED: Strategy Call with Flowchain AI Team. Confirmation sent!';
      }

      setWaMessages((prev) => [...prev, { sender: 'ai', text: aiResponse, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    }, 1200);
  };

  // --- Demo 03: Workflow Execution State ---
  const [isExecutingWorkflow, setIsExecutingWorkflow] = useState(false);
  const [workflowLogs, setWorkflowLogs] = useState<string[]>([]);
  const [selectedTrigger, setSelectedTrigger] = useState('Stripe Payment Received');

  const handleRunWorkflow = () => {
    setIsExecutingWorkflow(true);
    setWorkflowLogs([`[0.00s] TRIGGER: ${selectedTrigger}`]);

    setTimeout(() => {
      setWorkflowLogs((prev) => [...prev, '[0.14s] AI FILTER: Scoring customer intent with GPT-4o... (Score: 98/100)']);
    }, 600);

    setTimeout(() => {
      setWorkflowLogs((prev) => [...prev, '[0.32s] CRM SYNC: Creating deal stage "Closed-Won" in HubSpot']);
    }, 1200);

    setTimeout(() => {
      setWorkflowLogs((prev) => [...prev, '[0.45s] NOTIFICATION: Dispatched Slack alert to #enterprise-deals']);
      setIsExecutingWorkflow(false);
    }, 1800);
  };



  const categories = [
    { id: 'all', name: 'All Services (6)' },
    { id: 'voice', name: 'AI Voice Receptionist' },
    { id: 'whatsapp', name: 'WhatsApp Automation' },
    { id: 'workflow', name: 'AI Workflows & Nodes' },
    { id: 'web', name: 'Web Design & CRMs' },
  ];

  return (
    <div className="min-h-screen w-full bg-[#EBEBEB] text-[#111111] pt-28 pb-20 px-6 md:px-12 lg:px-16 selection:bg-[#E85500] selection:text-white font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Back Navigation & Breadcrumb */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/10">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[#E85500] transition-colors group interactive-hover"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Main Site</span>
          </button>

          <span className="font-mono text-xs text-[#E85500] font-bold uppercase tracking-widest px-3 py-1 bg-[#E85500]/10 rounded-full">
            DEDICATED SERVICES & DEMOS LAB
          </span>
        </div>

        {/* Page Hero Header */}
        <div className="mb-16">
          <h1 className="font-syne font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#111111] tracking-tight leading-tight mb-4">
            INTERACTIVE SERVICES LAB <br />
            <span className="text-[#E85500]">& LIVE DEMO SUITE.</span>
          </h1>

          <p className="font-sans text-base sm:text-lg text-[#555555] max-w-2xl leading-relaxed">
            Test drive our autonomous voice agents, WhatsApp sales bots, workflow pipeline engines, and bespoke digital operating systems in real-time.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 pt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-[#E85500] text-white font-bold shadow-lg scale-105'
                    : 'bg-white/70 text-[#444444] border border-black/10 hover:border-[#E85500]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* DEMOS GRID */}
        <div className="space-y-24">
          {/* DEMO 01: AI VOICE RECEPTIONIST */}
          {(activeCategory === 'all' || activeCategory === 'voice') && (
            <div className="glass-card-light p-8 sm:p-10 rounded-3xl border border-black/10 shadow-2xl relative overflow-hidden">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 mb-8 border-b border-black/10">
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs text-[#00D2FF] font-bold uppercase mb-2">
                    <PhoneCall className="w-4 h-4" />
                    <span>SERVICE DEMO 01 • AI VOICE AGENTS</span>
                  </div>
                  <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-[#111111]">
                    AI Voice Receptionist Studio
                  </h2>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3 bg-[#E85500] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-full shadow-lg hover:scale-105 transition-transform"
                >
                  Deploy Voice Agent
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Control Panel */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <label className="block font-mono text-xs font-bold uppercase text-[#444444] mb-2">
                      Select Voice Persona Mode
                    </label>
                    <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                      {(['concierge', 'technical', 'sales'] as const).map((mode) => (
                        <button
                          key={mode}
                          onClick={() => setVoiceVoiceType(mode)}
                          className={`p-3 rounded-xl border text-center uppercase font-bold transition-all ${
                            voiceVoiceType === mode
                              ? 'bg-black text-white border-black shadow-md'
                              : 'bg-white text-[#111111] border-black/10 hover:border-black'
                          }`}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleSimulateVoice}
                    disabled={isPlayingVoice}
                    className="w-full py-4 bg-[#00D2FF] hover:bg-[#00b5dc] text-black font-mono font-bold text-xs uppercase tracking-wider rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                  >
                    {isPlayingVoice ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>SYNTHESIZING SPEECH...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-current" />
                        <span>Simulate Live Inbound Call</span>
                      </>
                    )}
                  </button>

                  <div className="p-4 bg-white/80 rounded-2xl border border-black/10 font-mono text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="text-[#666666]">SPEECH LATENCY:</span>
                      <span className="text-green-600 font-bold">14ms</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#666666]">ACCENT:</span>
                      <span className="font-bold">Neutral Executive</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#666666]">24/7 UPTIME:</span>
                      <span className="text-green-600 font-bold">100%</span>
                    </div>
                  </div>
                </div>

                {/* Live Console Output */}
                <div className="lg:col-span-7 bg-[#0A0A0C] text-white rounded-3xl p-6 border border-white/10 font-mono text-xs min-h-[320px] flex flex-col justify-between shadow-2xl">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-white/50">
                    <div className="flex items-center gap-2">
                      <Mic className="w-4 h-4 text-[#00D2FF] animate-pulse" />
                      <span>REAL-TIME VOICE STREAM LOG</span>
                    </div>
                    <span className="text-green-400 font-bold">LIVE AGENT ACTIVE</span>
                  </div>

                  <div className="space-y-3 my-4 overflow-y-auto max-h-[220px]">
                    {voiceTranscriptLog.map((log, i) => (
                      <div key={i} className="p-3 bg-white/5 rounded-xl border border-white/5 text-white/90 leading-relaxed">
                        {log}
                      </div>
                    ))}
                  </div>

                  {/* Waveform Bar */}
                  <div className="flex items-center justify-center gap-1 pt-2 border-t border-white/10">
                    {[12, 28, 44, 20, 36, 15, 32, 48, 18, 40].map((h, i) => (
                      <div
                        key={i}
                        className={`w-1.5 bg-[#00D2FF] rounded-full ${isPlayingVoice ? 'audio-wave-bar' : 'h-2'}`}
                        style={{ height: isPlayingVoice ? `${h}px` : '6px' }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* DEMO 02: WHATSAPP AUTOMATION SANDBOX */}
          {(activeCategory === 'all' || activeCategory === 'whatsapp') && (
            <div className="glass-card-light p-8 sm:p-10 rounded-3xl border border-black/10 shadow-2xl relative overflow-hidden">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 mb-8 border-b border-black/10">
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs text-[#25D366] font-bold uppercase mb-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>SERVICE DEMO 02 • WHATSAPP CRM</span>
                  </div>
                  <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-[#111111]">
                    Interactive WhatsApp Bot Simulator
                  </h2>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3 bg-[#25D366] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-full shadow-lg hover:scale-105 transition-transform"
                >
                  Build WhatsApp Agent
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Controls & Quick Prompts */}
                <div className="lg:col-span-5 space-y-4">
                  <label className="block font-mono text-xs font-bold uppercase text-[#444444]">
                    Click Sample Prompt to Test AI
                  </label>

                  <button
                    onClick={() => handleSendWaMessage('What are your pricing packages for enterprise?')}
                    className="w-full text-left p-3.5 bg-white rounded-2xl border border-black/10 font-sans text-xs text-[#111111] hover:border-[#25D366] transition-colors shadow-sm"
                  >
                    "What are your pricing packages for enterprise?"
                  </button>

                  <button
                    onClick={() => handleSendWaMessage('Can I book a 30-min strategy consultation tomorrow?')}
                    className="w-full text-left p-3.5 bg-white rounded-2xl border border-black/10 font-sans text-xs text-[#111111] hover:border-[#25D366] transition-colors shadow-sm"
                  >
                    "Can I book a 30-min strategy consultation tomorrow?"
                  </button>

                  <button
                    onClick={() => handleSendWaMessage('Does this sync directly with HubSpot and Stripe?')}
                    className="w-full text-left p-3.5 bg-white rounded-2xl border border-black/10 font-sans text-xs text-[#111111] hover:border-[#25D366] transition-colors shadow-sm"
                  >
                    "Does this sync directly with HubSpot and Stripe?"
                  </button>
                </div>

                {/* Right Interactive Chat Window */}
                <div className="lg:col-span-7 bg-[#0b141a] text-white rounded-3xl p-5 border border-white/10 font-sans min-h-[380px] flex flex-col justify-between shadow-2xl">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#25d366] text-white flex items-center justify-center font-bold font-syne text-xs">
                        FC
                      </div>
                      <div>
                        <div className="font-bold text-xs">Flowchain WhatsApp Bot</div>
                        <div className="text-[10px] text-[#25d366]">Online • Instant Auto-Reply</div>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] text-white/40">SIMULATED SANDBOX</span>
                  </div>

                  {/* Messages Stream */}
                  <div className="space-y-3 my-4 overflow-y-auto max-h-[260px] text-xs pr-1">
                    {waMessages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex flex-col max-w-[85%] ${
                          msg.sender === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'
                        }`}
                      >
                        <div
                          className={`p-3 rounded-2xl ${
                            msg.sender === 'user'
                              ? 'bg-[#005c4b] text-white rounded-tr-none'
                              : 'bg-[#202c33] text-white rounded-tl-none border border-white/5'
                          }`}
                        >
                          {msg.text}
                        </div>
                        <span className="text-[9px] text-white/40 font-mono mt-1">{msg.time}</span>
                      </div>
                    ))}
                  </div>

                  {/* Custom Message Input Bar */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSendWaMessage();
                    }}
                    className="flex items-center gap-2 bg-[#202c33] p-2 rounded-full border border-white/10 text-xs"
                  >
                    <input
                      type="text"
                      placeholder="Type custom customer message..."
                      value={userCustomInput}
                      onChange={(e) => setUserCustomInput(e.target.value)}
                      className="bg-transparent px-3 w-full text-white focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="w-8 h-8 rounded-full bg-[#25d366] text-black flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* DEMO 03: WORKFLOW PIPELINE NODE BUILDER */}
          {(activeCategory === 'all' || activeCategory === 'workflow') && (
            <div className="glass-card-light p-8 sm:p-10 rounded-3xl border border-black/10 shadow-2xl relative overflow-hidden">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 mb-8 border-b border-black/10">
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs text-[#FFBD2E] font-bold uppercase mb-2">
                    <Cpu className="w-4 h-4" />
                    <span>SERVICE DEMO 03 • AI WORKFLOWS</span>
                  </div>
                  <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-[#111111]">
                    Autonomous Workflow Engine Simulator
                  </h2>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3 bg-[#E85500] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-full shadow-lg hover:scale-105 transition-transform"
                >
                  Build Custom Workflow
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Controls */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <label className="block font-mono text-xs font-bold uppercase text-[#444444] mb-2">
                      Choose Pipeline Trigger
                    </label>
                    <div className="space-y-2 font-mono text-xs">
                      {['Stripe Payment Received', 'New Webhook Lead', 'WhatsApp Meeting Booked'].map((trig) => (
                        <button
                          key={trig}
                          onClick={() => setSelectedTrigger(trig)}
                          className={`w-full p-3 rounded-xl border text-left font-medium transition-all ${
                            selectedTrigger === trig
                              ? 'bg-black text-white border-black shadow-md'
                              : 'bg-white text-[#111111] border-black/10 hover:border-black'
                          }`}
                        >
                          {trig}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleRunWorkflow}
                    disabled={isExecutingWorkflow}
                    className="w-full py-4 bg-[#FFBD2E] hover:bg-[#e0a424] text-black font-mono font-bold text-xs uppercase tracking-wider rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
                  >
                    {isExecutingWorkflow ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>EXECUTING NODES...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-current" />
                        <span>Execute Pipeline Simulation</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Workflow Execution Console Log */}
                <div className="lg:col-span-7 bg-[#0A0A0C] text-white rounded-3xl p-6 border border-white/10 font-mono text-xs min-h-[320px] flex flex-col justify-between shadow-2xl">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-white/50">
                    <span className="text-[#FFBD2E] font-bold">PIPELINE EXECUTION LOG</span>
                    <span>ENGINE STATUS: READY</span>
                  </div>

                  <div className="space-y-2 my-4 min-h-[180px]">
                    {workflowLogs.length === 0 ? (
                      <div className="text-white/40 italic py-8 text-center">
                        Click "Execute Pipeline Simulation" to view real-time node execution log.
                      </div>
                    ) : (
                      workflowLogs.map((log, i) => (
                        <div key={i} className="p-3 bg-white/5 rounded-xl border border-white/5 text-[#FFBD2E] animate-fade-in">
                          {log}
                        </div>
                      ))
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/10 text-[10px] text-white/40">
                    <span>ZERO MANUAL DATA ENTRY</span>
                    <span>100% AUTOMATED</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-24 p-10 bg-[#E85500] text-white rounded-3xl text-center flex flex-col items-center gap-6 shadow-2xl">
          <h2 className="font-syne font-extrabold text-3xl sm:text-5xl">
            READY TO DEPLOY THESE SYSTEMS FOR YOUR BUSINESS?
          </h2>
          <p className="font-sans text-base text-white/90 max-w-xl">
            Reserve your 30-minute system architecture call. We'll map your exact workflows and deploy custom AI agents in days.
          </p>
          <button
            onClick={onOpenBooking}
            className="px-9 py-4 bg-white text-[#E85500] font-mono text-sm font-bold uppercase tracking-wider rounded-full shadow-2xl hover:scale-105 transition-transform"
          >
            Book Strategy Call Now →
          </button>
        </div>
      </div>
    </div>
  );
};
