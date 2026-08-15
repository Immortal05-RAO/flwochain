"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageSquare, CalendarCheck, Database } from "lucide-react";
import { FlowchainNodeMap, type NodeMapNode, type NodeMapEdge } from "@/components/ui/flowchain-node-map";
import { FlowchainShowcase } from "@/components/ui/flowchain-showcase";
import { FlowchainCinematicHero } from "@/components/ui/flowchain-cinematic-hero";
import {
  PillButton,
  GlassPanel,
  StatCard,
  BarChartCard,
  LogCard,
  StepDial,
  PillTag,
} from "@/components/ui/flowchain-ui";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HERO_NODES: NodeMapNode[] = [
  { id: "website", x: 12, y: 20, label: "Website" },
  { id: "crm", x: 88, y: 15, label: "CRM" },
  { id: "whatsapp", x: 20, y: 80, label: "WhatsApp" },
  { id: "ai", x: 78, y: 75, label: "AI Agent", emphasized: true },
  { id: "booking", x: 50, y: 90, label: "Booking" },
];
const HERO_EDGES: NodeMapEdge[] = [
  ["website", "ai"],
  ["ai", "crm"],
  ["whatsapp", "ai"],
  ["ai", "booking"],
];

const GLOBAL_STYLES = `
@keyframes fc-global-laser-fall {
  0% {
    transform: translateY(-320px);
    opacity: 0;
  }
  15% {
    opacity: 0.85;
  }
  85% {
    opacity: 0.85;
  }
  100% {
    transform: translateY(115vh);
    opacity: 0;
  }
}

.fc-global-laser-beam {
  position: absolute;
  top: 0;
  width: 1.5px;
  background: linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.75) 50%, transparent 100%);
  animation: fc-global-laser-fall linear infinite;
  pointer-events: none;
}
`;

function GlobalLaserRain() {
  const beams = [
    { left: "12%", height: "220px", duration: "7s", delay: "0s" },
    { left: "24%", height: "300px", duration: "9s", delay: "2.1s" },
    { left: "36%", height: "250px", duration: "8s", delay: "0.8s" },
    { left: "48%", height: "320px", duration: "10s", delay: "3.5s" },
    { left: "60%", height: "240px", duration: "7.5s", delay: "1.4s" },
    { left: "72%", height: "280px", duration: "8.8s", delay: "2.8s" },
    { left: "84%", height: "210px", duration: "6.8s", delay: "0.4s" },
    { left: "93%", height: "260px", duration: "9.5s", delay: "4.2s" },
  ];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_STYLES }} />
      {beams.map((b, i) => (
        <div
          key={i}
          className="fc-global-laser-beam"
          style={{
            left: b.left,
            height: b.height,
            animationDuration: b.duration,
            animationDelay: b.delay,
          }}
        />
      ))}
    </div>
  );
}

export default function FlowchainHomepage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const insightsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect prefers-reduced-motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      gsap.set(".fc-hero-fade", { opacity: 1, y: 0 });
      gsap.set(".fc-reveal", { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fc-hero-fade",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 1,
          ease: "power3.out",
        }
      );

      gsap.to(".fc-node-map", {
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.utils.toArray<HTMLElement>(".fc-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#0A0A0B] text-[#F5F5F3] font-sans">
      {/* Global Page-Wide Vertical Laser Rain */}
      <GlobalLaserRain />

      {/* NAV */}
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between px-8 py-5 backdrop-blur-md bg-[#0A0A0B]/60">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Flowchain Logo" className="h-7 w-7 object-contain drop-shadow-[0_0_10px_rgba(244,135,61,0.5)] transition-transform hover:scale-110" />
          <span className="text-lg font-bold tracking-wider">FLOWCHAIN</span>
        </div>
        <div className="hidden gap-8 text-sm text-white/60 md:flex">
          <a href="#insights" className="hover:text-white">Workflow</a>
          <a href="#automation" className="hover:text-white">Automation</a>
          <a href="#showcase" className="hover:text-white">Showcase</a>
        </div>
        <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 hover:text-white">
          <span className="text-xs">•••</span>
        </button>
      </nav>

      {/* CINEMATIC HERO SECTION */}
      <FlowchainCinematicHero />

      {/* INSIGHTS */}
      <section id="insights" ref={insightsRef} className="relative px-6 py-24 md:px-16">
        <GlassPanel className="fc-reveal relative overflow-hidden p-8 md:p-12">
          <FlowchainNodeMap nodes={[]} edges={[]} glow="corner-tr" />
          <h2 className="relative text-2xl md:text-4xl font-medium">See automation at work.</h2>
          <p className="relative mt-2 max-w-md text-sm text-white/50">
            Real numbers from real automated workflows — not vanity metrics.
          </p>

          <div className="relative mt-10 grid grid-cols-1 gap-4 md:grid-cols-4">
            <StatCard value="94%" label="Faster First Response" className="md:col-span-2" />
            <BarChartCard
              title="Leads Recovered This Month"
              className="md:col-span-2"
              bars={[
                { label: "W1", value: 40, color: "#9CA3AF" },
                { label: "W2", value: 55, color: "#9CA3AF" },
                { label: "W3", value: 70, color: "#9CA3AF" },
                { label: "W4", value: 90, color: "#F5F5F3" },
              ]}
            />
            <StatCard value="19.2%" sublabel="+$2.7k avg" label="Conversion Lift" />
            <StatCard value="24s" sublabel="avg across channels" label="Response Time" />
            <BarChartCard
              title="Automation Coverage by Channel"
              className="md:col-span-2"
              bars={[
                { label: "Web", value: 80, color: "#C98A8A" },
                { label: "WA", value: 65, color: "#A9BE9B" },
                { label: "CRM", value: 90, color: "#C9B48A" },
                { label: "Mail", value: 50, color: "#9CA3AF" },
              ]}
            />
          </div>
        </GlassPanel>
      </section>

      {/* AUTOMATION IN ACTION */}
      <section id="automation" className="relative px-6 py-24 md:px-16">
        <GlassPanel className="fc-reveal p-8 md:p-12">
          <h2 className="text-2xl md:text-4xl font-medium">Watch a lead become a customer.</h2>
          <p className="mt-2 max-w-md text-sm text-white/50">
            One conversation. Fully automated. Every step logged.
          </p>
          <PillButton variant="secondary" className="mt-6">How It Works?</PillButton>

          <div className="mt-10 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div className="flex flex-col gap-3">
              <LogCard icon={MessageSquare} label="Lead Captured" sublabel="Website Form" value="just now" />
              <LogCard icon={Database} label="AI Response Sent" sublabel="Auto-reply" value="12s" />
              <LogCard icon={CalendarCheck} label="Appointment Booked" sublabel="CRM Synced" value="1m" />
            </div>
            <div className="flex flex-col items-center gap-4">
              <StepDial label="Step 03 · Booked" progress={75} />
              <div className="flex items-center gap-2 text-xs text-white/40">
                <span>Pending</span>
                <span className="h-px w-6 bg-white/20" />
                <span>Confirmed</span>
                <span className="h-px w-6 bg-white/20" />
                <span className="text-[#A9BE9B]">Done</span>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {["24/7 Active", "Multi-Channel", "Zero Missed Leads", "CRM Synced", "Instant Response", "Human Handoff Ready"].map(
              (tag) => (
                <PillTag key={tag}>{tag}</PillTag>
              )
            )}
          </div>
        </GlassPanel>
      </section>

      {/* SHOWCASE SECTION */}
      <div id="showcase">
        <FlowchainShowcase className="fc-reveal" />
      </div>

      {/* FINAL CTA */}
      <section className="relative flex h-[70vh] w-full flex-col items-center justify-center overflow-hidden">
        <FlowchainNodeMap nodes={HERO_NODES} edges={HERO_EDGES} glow="center" density="sparse" />
        <h2 className="fc-reveal text-center text-4xl md:text-6xl font-medium tracking-tight">
          What could you automate?
        </h2>
        <p className="fc-reveal mt-4 max-w-md text-center text-sm text-white/50">
          Tell us how your business works — we'll show you where Flowchain fits in.
        </p>
        <PillButton variant="primary" className="fc-reveal mt-8">Start a Project</PillButton>
      </section>

      {/* FOOTER */}
      <footer className="flex flex-col items-center gap-4 border-t border-white/[0.06] px-8 py-10 text-xs text-white/30 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#A9BE9B]" />
          <span>FLOWCHAIN — Connect your business. Automate everything.</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white/60">Privacy</a>
          <a href="#" className="hover:text-white/60">Terms</a>
          <a href="#" className="hover:text-white/60">Contact</a>
        </div>
        <span>© 2026 Flowchain</span>
      </footer>
    </div>
  );
}
