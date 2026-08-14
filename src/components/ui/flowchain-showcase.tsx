"use client";

import { Play, ArrowUpRight, ArrowDown, Globe, MessageSquare, Database, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * FlowchainShowcase Hero Section
 * Fully animated hero section with:
 * - Animated curved SVG path light signals (flowing along bezier curves)
 * - Vertical falling laser rain trails
 * - Glowing pulsing corner node badges
 * - Ambient play button pulse aura
 */

const STYLES = `
@keyframes fc-svg-flow {
  0% {
    stroke-dashoffset: 100;
    opacity: 0;
  }
  15% {
    opacity: 0.95;
  }
  85% {
    opacity: 0.95;
  }
  100% {
    stroke-dashoffset: -20;
    opacity: 0;
  }
}

@keyframes fc-laser-fall {
  0% {
    transform: translateY(-250px);
    opacity: 0;
  }
  20% {
    opacity: 0.85;
  }
  80% {
    opacity: 0.85;
  }
  100% {
    transform: translateY(850px);
    opacity: 0;
  }
}

@keyframes fc-showcase-pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
}

@keyframes fc-badge-glow {
  0%, 100% {
    box-shadow: 0 0 0px rgba(169, 190, 155, 0);
    border-color: rgba(255, 255, 255, 0.15);
  }
  50% {
    box-shadow: 0 0 25px rgba(169, 190, 155, 0.45);
    border-color: rgba(169, 190, 155, 0.6);
  }
}

@keyframes fc-play-pulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.3);
  }
  50% {
    transform: scale(1.06);
    box-shadow: 0 0 0 18px rgba(255, 255, 255, 0);
  }
}

.fc-curved-flow-line {
  stroke: #A9BE9B;
  stroke-width: 1.5;
  stroke-dasharray: 16 90;
  stroke-linecap: round;
  fill: none;
  animation: fc-svg-flow 4.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

.fc-vertical-laser {
  position: absolute;
  top: 0;
  width: 1.5px;
  background: linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.85) 50%, transparent 100%);
  animation: fc-laser-fall 5.5s linear infinite;
  pointer-events: none;
}

.fc-showcase-badge-pulse {
  animation: fc-showcase-pulse 3s ease-in-out infinite;
}

.fc-node-badge-glow {
  animation: fc-badge-glow 4s ease-in-out infinite;
}

.fc-play-button-pulse {
  animation: fc-play-pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
`;

export function FlowchainShowcase({ className }: { className?: string }) {
  return (
    <section className={cn("relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-[#0A0A0B] text-[#F5F5F3] px-6 pt-28 pb-10 md:px-16", className)}>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      {/* Ambient Aurora Glow (Top-Right & Bottom-Left) */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#A9BE9B]/20 via-emerald-950/10 to-transparent blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-[550px] w-[550px] rounded-full bg-gradient-to-tr from-[#A9BE9B]/15 via-teal-950/10 to-transparent blur-[110px]" />

      {/* Fine Starry Particle Grid Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:36px_36px] opacity-60" />

      {/* ------------------------------------------------------------- */}
      {/* VERTICAL LASER RAIN ANIMATED BACKGROUND LAYER                  */}
      {/* ------------------------------------------------------------- */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="fc-vertical-laser left-[18%] h-36" style={{ animationDelay: "0s" }} />
        <div className="fc-vertical-laser left-[34%] h-48" style={{ animationDelay: "1.5s" }} />
        <div className="fc-vertical-laser left-[50%] h-40" style={{ animationDelay: "0.8s" }} />
        <div className="fc-vertical-laser left-[66%] h-44" style={{ animationDelay: "2.4s" }} />
        <div className="fc-vertical-laser left-[82%] h-32" style={{ animationDelay: "1.0s" }} />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* SVG CURVED NODE MAP CONNECTOR LAYER (ANIMATED)                */}
      {/* ------------------------------------------------------------- */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-80"
        viewBox="0 0 1000 720"
        preserveAspectRatio="none"
      >
        {/* Top-Left Curve (Website) to Center */}
        <path
          d="M 60 160 Q 160 160, 220 240 T 340 280"
          stroke="rgba(255, 255, 255, 0.12)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M 60 160 Q 160 160, 220 240 T 340 280"
          pathLength="100"
          className="fc-curved-flow-line"
          style={{ animationDelay: "0s" }}
        />

        {/* Bottom-Left Curve (WhatsApp) to Center */}
        <path
          d="M 60 480 Q 160 480, 230 420 T 350 380"
          stroke="rgba(255, 255, 255, 0.12)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M 60 480 Q 160 480, 230 420 T 350 380"
          pathLength="100"
          className="fc-curved-flow-line"
          style={{ animationDelay: "1.1s" }}
        />

        {/* Top-Right Curve (CRM) to Center */}
        <path
          d="M 940 200 Q 830 200, 770 260 T 670 300"
          stroke="rgba(255, 255, 255, 0.12)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M 940 200 Q 830 200, 770 260 T 670 300"
          pathLength="100"
          className="fc-curved-flow-line"
          style={{ animationDelay: "2.2s" }}
        />

        {/* Bottom-Right Curve (AI Agent) to Center */}
        <path
          d="M 940 480 Q 840 480, 770 430 T 650 380"
          stroke="rgba(255, 255, 255, 0.12)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M 940 480 Q 840 480, 770 430 T 650 380"
          pathLength="100"
          className="fc-curved-flow-line"
          style={{ animationDelay: "3.3s" }}
        />
      </svg>

      {/* ------------------------------------------------------------- */}
      {/* CORNER NODE BADGES & FLOWCHAIN METRIC LABELS                 */}
      {/* ------------------------------------------------------------- */}
      {/* 1. Top-Left Node (Website) */}
      <div className="absolute left-8 top-36 z-10 hidden items-center gap-3 md:flex lg:left-16">
        <div className="fc-node-badge-glow flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md shadow-lg" style={{ animationDelay: "0s" }}>
          <Globe className="h-5 w-5 text-white" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-sm font-semibold text-white/95">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A9BE9B] fc-showcase-badge-pulse" />
            <span>Website</span>
          </div>
          <span className="text-xs text-white/50">Instant Lead Capture</span>
        </div>
      </div>

      {/* 2. Bottom-Left Node (WhatsApp) */}
      <div className="absolute bottom-32 left-8 z-10 hidden items-center gap-3 md:flex lg:left-16">
        <div className="fc-node-badge-glow flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md shadow-lg" style={{ animationDelay: "1.1s" }}>
          <MessageSquare className="h-5 w-5 text-white" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-sm font-semibold text-white/95">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A9BE9B] fc-showcase-badge-pulse" />
            <span>WhatsApp</span>
          </div>
          <span className="text-xs text-white/50">24/7 Auto Response</span>
        </div>
      </div>

      {/* 3. Top-Right Node (CRM) */}
      <div className="absolute right-8 top-36 z-10 hidden items-center gap-3 md:flex lg:right-16">
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2 text-sm font-semibold text-white/95">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A9BE9B] fc-showcase-badge-pulse" />
            <span>CRM</span>
          </div>
          <span className="text-xs text-white/50">Auto-Synced Pipeline</span>
        </div>
        <div className="fc-node-badge-glow flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md shadow-lg" style={{ animationDelay: "2.2s" }}>
          <Database className="h-5 w-5 text-white" />
        </div>
      </div>

      {/* 4. Bottom-Right Node (AI Agent) */}
      <div className="absolute bottom-32 right-8 z-10 hidden items-center gap-3 md:flex lg:right-16">
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2 text-sm font-semibold text-white/95">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A9BE9B] fc-showcase-badge-pulse" />
            <span>AI Agent</span>
          </div>
          <span className="text-xs text-white/50">Human Handoff Ready</span>
        </div>
        <div className="fc-node-badge-glow flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md shadow-lg" style={{ animationDelay: "3.3s" }}>
          <Bot className="h-5 w-5 text-white" />
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* CENTER HERO AREA & CTAS                                       */}
      {/* ------------------------------------------------------------- */}
      <div className="relative z-20 flex flex-1 flex-col items-center justify-center py-16">
        {/* Play Button Trigger with Pulsing Aura */}
        <button
          aria-label="Play workflow video demo"
          className="fc-play-button-pulse group relative mb-10 flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-white/40 hover:bg-white/20"
        >
          <div className="absolute inset-0 rounded-full bg-white/10 blur-md transition-all group-hover:bg-white/20" />
          <Play className="relative ml-0.5 h-6 w-6 fill-white text-white" />
        </button>

        {/* Pill Badge */}
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2 text-xs font-medium text-white/80 backdrop-blur-md shadow-inner md:text-sm">
          <span className="text-[#A9BE9B]">✦</span>
          <span>Connected Business Architecture</span>
          <ArrowUpRight className="h-4 w-4 opacity-60" />
        </div>

        {/* Prominent Scaled Headline */}
        <h1 className="max-w-5xl text-center text-6xl font-medium tracking-tight text-white leading-[1.05] md:text-8xl lg:text-9xl">
          Connect your business.
        </h1>

        {/* Larger Subtitle */}
        <p className="mt-8 max-w-2xl text-center text-base font-light text-white/70 md:text-xl">
          Dive into a connected system, where automation meets business growth.
        </p>

        {/* Action Buttons */}
        <div className="mt-12 flex items-center gap-5">
          <button className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.04] px-9 py-4 text-base font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/[0.08] hover:scale-[1.02]">
            <span>See How It Works</span>
            <ArrowUpRight className="h-5 w-5 opacity-70" />
          </button>

          <button className="rounded-full bg-[#F5F5F3] px-9 py-4 text-base font-medium text-black shadow-2xl transition-all duration-300 hover:bg-white hover:scale-[1.02]">
            Start a Project
          </button>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* BOTTOM BAR / SCROLL & HORIZONS INDICATORS                     */}
      {/* ------------------------------------------------------------- */}
      <div className="relative z-20 flex w-full items-center justify-between pt-6">
        {/* Bottom Left Badge */}
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/60 backdrop-blur-md">
          <ArrowDown className="h-3.5 w-3.5 text-white/40" />
          <span>01/03 . Scroll to explore</span>
        </div>

        {/* Bottom Right Step Indicator */}
        <div className="flex items-center gap-4 text-xs">
          <span className="font-medium text-white/80">FLOWCHAIN Horizons</span>
          <div className="flex items-center gap-1.5">
            <span className="h-1 w-6 rounded-full bg-white" />
            <span className="h-1 w-6 rounded-full bg-white/20" />
            <span className="h-1 w-6 rounded-full bg-white/20" />
            <span className="h-1 w-6 rounded-full bg-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
