"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ChevronDown } from "lucide-react";

/** Shared pill button — primary (solid light fill) and secondary (outline) */
export function PillButton({
  variant = "primary",
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" }) {
  return (
    <button
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300",
        variant === "primary" &&
          "bg-[#F5F5F3] text-black hover:bg-white hover:scale-[1.02]",
        variant === "secondary" &&
          "border border-white/15 bg-white/[0.03] text-white/90 hover:border-white/30 hover:bg-white/[0.06]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

/** Shared dark frosted panel/card — the ONLY surface treatment used site-wide */
export function GlassPanel({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-white/[0.08] bg-[#121316]/80 backdrop-blur-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

export function StatCard({
  value,
  label,
  sublabel,
  className,
}: {
  value: string;
  label: string;
  sublabel?: string;
  className?: string;
}) {
  return (
    <GlassPanel className={cn("p-6", className)}>
      <div className="text-3xl font-semibold text-[#F5F5F3] tracking-tight">{value}</div>
      <div className="mt-2 text-sm text-white/50">{label}</div>
      {sublabel && <div className="mt-1 text-xs text-white/30">{sublabel}</div>}
    </GlassPanel>
  );
}

export function BarChartCard({
  title,
  bars,
  className,
}: {
  title: string;
  bars: { label: string; value: number; color: string }[];
  className?: string;
}) {
  const max = Math.max(...bars.map((b) => b.value));
  return (
    <GlassPanel className={cn("p-6", className)}>
      <div className="text-sm text-white/50 mb-4">{title}</div>
      <div className="flex items-end gap-3 h-24">
        {bars.map((b, i) => (
          <div key={i} className="flex flex-col items-center gap-2 flex-1">
            <div
              className="w-full rounded-sm transition-all duration-700"
              style={{
                height: `${(b.value / max) * 100}%`,
                backgroundColor: b.color,
                opacity: 0.85,
              }}
            />
            <span className="text-[10px] uppercase tracking-wide text-white/30">{b.label}</span>
          </div>
        ))}
      </div>
    </GlassPanel>
  );
}

export function LogCard({
  icon: Icon,
  label,
  sublabel,
  value,
}: {
  icon: React.ElementType;
  label: string;
  sublabel: string;
  value: string;
}) {
  return (
    <GlassPanel className="flex items-center justify-between p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06]">
          <Icon className="h-4 w-4 text-[#A9BE9B]" />
        </div>
        <div>
          <div className="text-sm text-white/90">{label}</div>
          <div className="text-xs text-white/40">{sublabel}</div>
        </div>
      </div>
      <div className="text-xs text-white/40">{value}</div>
    </GlassPanel>
  );
}

export function StepDial({ label, progress }: { label: string; progress: number }) {
  const circumference = 2 * Math.PI * 42;
  const offset = circumference - (progress / 100) * circumference;
  return (
    <div className="relative flex h-40 w-40 items-center justify-center">
      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
        <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke="#A9BE9B"
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000"
        />
      </svg>
      <span className="absolute text-sm text-white/70">{label}</span>
    </div>
  );
}

export function PillTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/50">
      {children}
    </span>
  );
}

export function ScrollHint() {
  return (
    <div className="flex items-center gap-2 text-xs text-white/30">
      <span>Scroll to explore</span>
      <ChevronDown className="h-3 w-3" />
    </div>
  );
}

export { ArrowUpRight };
