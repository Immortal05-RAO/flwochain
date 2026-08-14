import React, { useState } from 'react';
import { DEMO_PRESET_SCENARIOS } from '../data/mockData';
import { Play, CheckCircle2, Loader2, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';

interface InteractiveDemoProps {
  onOpenBooking: () => void;
}

export const InteractiveDemo: React.FC<InteractiveDemoProps> = ({ onOpenBooking }) => {
  const [selectedScenario, setSelectedScenario] = useState(DEMO_PRESET_SCENARIOS[0]);
  const [customPrompt, setCustomPrompt] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(-1);
  const [executionLogs, setExecutionLogs] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleRunSimulator = (promptText?: string) => {
    const textToRun = promptText || customPrompt || selectedScenario.prompt;
    setIsRunning(true);
    setIsCompleted(false);
    setActiveStepIndex(0);
    setExecutionLogs([`[INIT] Triggering workflow for prompt: "${textToRun}"`]);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < selectedScenario.steps.length) {
        setActiveStepIndex(step);
        const currentStepObj = selectedScenario.steps[step];
        setExecutionLogs((prev) => [
          ...prev,
          `[${currentStepObj.time}] ${currentStepObj.title}: ${currentStepObj.status}`,
        ]);
      } else {
        clearInterval(interval);
        setIsRunning(false);
        setIsCompleted(true);
        setExecutionLogs((prev) => [...prev, `[COMPLETE] Workflow finished successfully in 64ms`]);
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.8 },
            colors: ['#4F8CFF', '#7C3AED', '#00E676'],
          });
        } catch (e) {}
      }
    }, 900);
  };

  return (
    <section id="interactive-demo" className="py-24 relative">
      {/* Glow background */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#7C3AED]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-xs font-mono text-purple-300">
            <Terminal className="w-3.5 h-3.5" />
            <span>INTERACTIVE WORKFLOW SANDBOX</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Test Drive Our <span className="text-gradient-blue">Autonomous AI Engine</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Experience how our AI receives a natural language input, updates your CRM, triggers instant WhatsApp replies, and syncs calendar slots in real-time.
          </p>
        </div>

        {/* Main Interactive Terminal Container */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-700/80 shadow-2xl overflow-hidden bg-[#0A0E17]/90">
          
          {/* Top Preset Scenario Chips */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono text-slate-400 uppercase">Select Scenario:</span>
              <div className="flex flex-wrap gap-2">
                {DEMO_PRESET_SCENARIOS.map((scen) => (
                  <button
                    key={scen.id}
                    onClick={() => {
                      setSelectedScenario(scen);
                      setCustomPrompt(scen.prompt);
                      setActiveStepIndex(-1);
                      setIsCompleted(false);
                      setExecutionLogs([]);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      selectedScenario.id === scen.id
                        ? 'bg-[#4F8CFF] text-white shadow-md shadow-[#4F8CFF]/30'
                        : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {scen.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2 text-xs font-mono text-[#00E676]">
              <span className="w-2 h-2 rounded-full bg-[#00E676] animate-ping" />
              <span>Sandbox Ready</span>
            </div>
          </div>

          {/* Interactive Prompt Input Box */}
          <div className="mb-8">
            <div className="relative flex items-center">
              <input
                type="text"
                value={customPrompt || selectedScenario.prompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                placeholder="Type a request (e.g. 'I want to book an appointment for tomorrow at 3 PM')..."
                className="w-full py-4 pl-5 pr-36 rounded-2xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#4F8CFF] font-sans transition-all shadow-inner"
              />
              <button
                onClick={() => handleRunSimulator()}
                disabled={isRunning}
                className="absolute right-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#4F8CFF] to-[#7C3AED] text-white font-bold text-xs shadow-lg flex items-center space-x-2 hover:scale-105 active:scale-95 disabled:opacity-50 transition-all"
              >
                {isRunning ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-white" />
                    <span>Run AI Workflow</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Real-time Visual Execution Graph */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Step Nodes Column */}
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                Execution Steps Sequence:
              </span>

              {selectedScenario.steps.map((st, idx) => {
                const isActive = idx === activeStepIndex;
                const isPassed = idx < activeStepIndex || isCompleted;

                return (
                  <div
                    key={st.step}
                    className={`p-4 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                      isActive
                        ? 'bg-[#4F8CFF]/15 border-[#4F8CFF] shadow-lg shadow-[#4F8CFF]/20 scale-[1.01]'
                        : isPassed
                        ? 'bg-slate-900/90 border-[#00E676]/40'
                        : 'bg-slate-950/60 border-slate-800/80 opacity-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs ${
                          isActive
                            ? 'bg-[#4F8CFF] text-white animate-pulse'
                            : isPassed
                            ? 'bg-[#00E676]/20 text-[#00E676]'
                            : 'bg-slate-800 text-slate-500'
                        }`}
                      >
                        {isPassed ? <CheckCircle2 className="w-4 h-4" /> : `0${st.step}`}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-200">{st.title}</h4>
                        <p className="text-[11px] text-slate-400">{st.status}</p>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                      {st.time}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Execution Console Terminal */}
            <div className="lg:col-span-5 bg-slate-950 rounded-2xl p-5 border border-slate-800 font-mono text-xs text-slate-300 h-full flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-[10px] text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" />
                    <span className="ml-2">flowchain-stdout.log</span>
                  </span>
                  <span>JSON Payload</span>
                </div>

                <div className="space-y-1.5 overflow-y-auto max-h-[220px] text-[11px] leading-relaxed">
                  {executionLogs.length === 0 ? (
                    <p className="text-slate-600 italic">
                      Click "Run AI Workflow" to see real-time log traces & payload routing...
                    </p>
                  ) : (
                    executionLogs.map((log, i) => (
                      <p
                        key={i}
                        className={
                          log.includes('[COMPLETE]')
                            ? 'text-[#00E676] font-bold'
                            : log.includes('[INIT]')
                            ? 'text-[#4F8CFF]'
                            : 'text-slate-300'
                        }
                      >
                        {log}
                      </p>
                    ))
                  )}
                </div>
              </div>

              {isCompleted && (
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between animate-in fade-in">
                  <span className="text-[11px] text-[#00E676]">✓ All System Nodes Synced</span>
                  <button
                    onClick={onOpenBooking}
                    className="text-[11px] text-[#4F8CFF] underline hover:text-white"
                  >
                    Build this for your company →
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
