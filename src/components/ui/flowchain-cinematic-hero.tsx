"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { CursorDrivenParticleTypography } from "@/components/ui/cursor-driven-particles-typography";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * FlowchainCinematicHero Component
 * High-end dark cinematic hero section with:
 * - Active GSAP ScrollTrigger parallax on giant FLOWCHAIN background watermark
 * - Interactive 3D mouse parallax depth on watermark & hero content
 * - Continuous 3D floating animation for constant dynamic movement
 * - Top animated marquee ticker
 */

const STYLES = `
@keyframes cinematic-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  100% { transform: translate(-50%, -50%) scale(1.12); opacity: 0.9; }
}

@keyframes cinematic-scroll-marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes cinematic-laser-drop {
  0% { transform: translateY(-250px); opacity: 0; }
  20% { opacity: 0.85; }
  80% { opacity: 0.85; }
  100% { transform: translateY(950px); opacity: 0; }
}

@keyframes cinematic-heartbeat {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px rgba(239, 68, 68, 0.5)); }
  15%, 45% { transform: scale(1.25); filter: drop-shadow(0 0 12px rgba(239, 68, 68, 0.9)); }
  30% { transform: scale(1); }
}

@keyframes fc-watermark-pulse {
  0%, 100% {
    transform: translate(-50%, 0) scale(1);
    opacity: 0.85;
  }
  50% {
    transform: translate(-50%, -12px) scale(1.03);
    opacity: 1;
  }
}

.animate-cinematic-breathe {
  animation: cinematic-breathe 8s ease-in-out infinite alternate;
}

.animate-cinematic-marquee {
  animation: cinematic-scroll-marquee 30s linear infinite;
}

.animate-cinematic-heartbeat {
  animation: cinematic-heartbeat 2.2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
}

.animate-watermark-float {
  animation: fc-watermark-pulse 7s ease-in-out infinite;
}

.cinematic-laser-beam {
  position: absolute;
  top: 0;
  width: 1.5px;
  background: linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.85) 50%, transparent 100%);
  animation: cinematic-laser-drop 5.5s linear infinite;
  pointer-events: none;
}

.cinematic-bg-grid {
  background-size: 60px 60px;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
}

.cinematic-aurora {
  background: radial-gradient(
    circle at 50% 50%, 
    rgba(169, 190, 155, 0.2) 0%, 
    rgba(124, 58, 237, 0.14) 40%, 
    transparent 70%
  );
}

.cinematic-glass-pill {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%);
  box-shadow: 
      0 10px 30px -10px rgba(0, 0, 0, 0.6), 
      inset 0 1px 1px rgba(255, 255, 255, 0.1), 
      inset 0 -1px 2px rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.cinematic-glass-pill:hover {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%);
  border-color: rgba(255, 255, 255, 0.25);
  box-shadow: 
      0 20px 40px -10px rgba(0, 0, 0, 0.8), 
      inset 0 1px 1px rgba(255, 255, 255, 0.2);
  color: #ffffff;
}

.cinematic-giant-bg-text {
  font-size: clamp(3.5rem, 11vw, 12.5rem);
  line-height: 0.85;
  font-weight: 900;
  letter-spacing: -0.04em;
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.15);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
  -webkit-background-clip: text;
  background-clip: text;
  will-change: transform, opacity;
}

.cinematic-text-glow {
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.55) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 0px 25px rgba(255, 255, 255, 0.18));
}
`;

// Magnetic Button Primitive
type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & 
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: React.ElementType;
  };

const MagneticButton = React.forwardRef<HTMLElement, MagneticButtonProps>(
  ({ className, children, as: Component = "button", ...props }, forwardedRef) => {
    const localRef = useRef<HTMLElement>(null);

    useEffect(() => {
      if (typeof window === "undefined") return;
      const element = localRef.current;
      if (!element) return;

      const ctx = gsap.context(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const h = rect.width / 2;
          const w = rect.height / 2;
          const x = e.clientX - rect.left - h;
          const y = e.clientY - rect.top - w;

          gsap.to(element, {
            x: x * 0.35,
            y: y * 0.35,
            rotationX: -y * 0.12,
            rotationY: x * 0.12,
            scale: 1.05,
            ease: "power2.out",
            duration: 0.4,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            ease: "elastic.out(1, 0.3)",
            duration: 1.2,
          });
        };

        element.addEventListener("mousemove", handleMouseMove as EventListener);
        element.addEventListener("mouseleave", handleMouseLeave as EventListener);

        return () => {
          element.removeEventListener("mousemove", handleMouseMove as EventListener);
          element.removeEventListener("mouseleave", handleMouseLeave as EventListener);
        };
      }, element);

      return () => ctx.revert();
    }, []);

    return (
      <Component
        ref={(node: HTMLElement | null) => {
          if (localRef) (localRef as React.MutableRefObject<HTMLElement | null>).current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) (forwardedRef as React.MutableRefObject<HTMLElement | null>).current = node;
        }}
        className={cn("cursor-pointer", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
MagneticButton.displayName = "MagneticButton";

const MarqueeContent = () => (
  <div className="flex items-center space-x-12 px-6">
    <span>CONNECTED BUSINESS ARCHITECTURE</span> <span className="text-[#A9BE9B]">✦</span>
    <span>AUTOMATED WORKFLOWS</span> <span className="text-purple-400">✦</span>
    <span>ZERO MISSED LEADS</span> <span className="text-[#A9BE9B]">✦</span>
    <span>24/7 AI AGENTS</span> <span className="text-purple-400">✦</span>
    <span>INSTANT RESPONSE</span> <span className="text-[#A9BE9B]">✦</span>
  </div>
);

export function FlowchainCinematicHero({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!containerRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. ScrollTrigger Parallax & Dynamic Growth on Giant FLOWCHAIN Particle Watermark
      if (giantTextRef.current) {
        gsap.fromTo(
          giantTextRef.current,
          {
            xPercent: -50,
            left: "50%",
            scale: 0.65,
            y: "5vh",
            opacity: 0.5,
          },
          {
            xPercent: -50,
            left: "50%",
            scale: 2.2,
            y: "-35vh",
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }

      // 2. ScrollTrigger Parallax on Marquee & Heading
      if (marqueeRef.current) {
        gsap.to(marqueeRef.current, {
          x: "-8vw",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // 3. Mouse Move 3D Tilt & Parallax Depth
      const handleMouseMove = (e: MouseEvent) => {
        const { innerWidth, innerHeight } = window;
        const mouseX = (e.clientX / innerWidth - 0.5) * 40;
        const mouseY = (e.clientY / innerHeight - 0.5) * 40;

        if (giantTextRef.current) {
          gsap.to(giantTextRef.current, {
            x: `calc(-50% + ${mouseX * -0.6}px)`,
            y: mouseY * -0.6,
            duration: 1.2,
            ease: "power2.out",
          });
        }

        if (headingRef.current) {
          gsap.to(headingRef.current, {
            rotationY: mouseX * 0.08,
            rotationX: -mouseY * 0.08,
            duration: 1,
            ease: "power2.out",
          });
        }
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToContent = () => {
    const target = document.getElementById("insights");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className={cn("relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-[#0A0A0B] text-[#F5F5F3] pt-24 pb-8", className)}
    >
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      {/* Ambient Aurora Glow & Background Grid */}
      <div className="cinematic-aurora absolute left-1/2 top-1/2 h-[65vh] w-[85vw] -translate-x-1/2 -translate-y-1/2 animate-cinematic-breathe rounded-[50%] blur-[90px] pointer-events-none z-0" />
      <div className="cinematic-bg-grid absolute inset-0 z-0 pointer-events-none" />

      {/* Vertical Falling Laser Rain Layer */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="cinematic-laser-beam left-[16%] h-36" style={{ animationDelay: "0s" }} />
        <div className="cinematic-laser-beam left-[32%] h-48" style={{ animationDelay: "1.5s" }} />
        <div className="cinematic-laser-beam left-[50%] h-40" style={{ animationDelay: "0.8s" }} />
        <div className="cinematic-laser-beam left-[68%] h-44" style={{ animationDelay: "2.4s" }} />
        <div className="cinematic-laser-beam left-[84%] h-32" style={{ animationDelay: "1.0s" }} />
      </div>

      {/* Giant Cursor-Driven Particle FLOWCHAIN Background Watermark with Dynamic Scroll Growth */}
      <div
        ref={giantTextRef}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 w-full max-w-[1250px] h-[360px] z-0 pointer-events-auto select-none opacity-85"
      >
        <CursorDrivenParticleTypography
          text="FLOWCHAIN"
          fontSize={150}
          particleSize={1.8}
          particleDensity={4}
          dispersionStrength={20}
          returnSpeed={0.08}
          color="rgba(255, 255, 255, 0.7)"
        />
      </div>

      {/* 1. Diagonal Sleek Top Marquee Ticker */}
      <div ref={marqueeRef} className="absolute top-20 left-0 w-full overflow-hidden border-y border-white/10 bg-black/40 backdrop-blur-md py-3.5 z-10 -rotate-1 scale-105 shadow-2xl">
        <div className="flex w-max animate-cinematic-marquee text-xs md:text-sm font-bold tracking-[0.3em] text-white/60 uppercase">
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </div>

      {/* 2. Main Center Hero Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 mt-16 w-full max-w-5xl mx-auto text-center">
        {/* Headline */}
        <h1
          ref={headingRef}
          className="text-6xl md:text-8xl lg:text-9xl font-black cinematic-text-glow tracking-tighter mb-6 transition-transform duration-200"
        >
          Ready to begin?
        </h1>

        <p className="max-w-xl text-base md:text-xl font-light text-white/60 mb-10">
          Connect your business with automated workflows that scale your revenue 24/7.
        </p>

        {/* Interactive Magnetic Pills */}
        <div className="flex flex-col items-center gap-6 w-full">
          {/* Primary Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 w-full">
            <MagneticButton
              as="button"
              className="cinematic-glass-pill px-10 py-5 rounded-full text-white font-bold text-sm md:text-base flex items-center gap-3 group"
            >
              <span>See How It Works</span>
              <ArrowUpRight className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
            </MagneticButton>

            <MagneticButton
              as="button"
              className="rounded-full bg-[#F5F5F3] px-10 py-5 font-bold text-sm md:text-base text-black shadow-2xl hover:bg-white transition-colors"
            >
              Start a Project
            </MagneticButton>
          </div>

          {/* Secondary Nav Links */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 w-full mt-2">
            <MagneticButton as="a" href="#insights" className="cinematic-glass-pill px-6 py-3 rounded-full text-white/70 font-medium text-xs md:text-sm hover:text-white">
              Workflow
            </MagneticButton>
            <MagneticButton as="a" href="#automation" className="cinematic-glass-pill px-6 py-3 rounded-full text-white/70 font-medium text-xs md:text-sm hover:text-white">
              Automation
            </MagneticButton>
            <MagneticButton as="a" href="#showcase" className="cinematic-glass-pill px-6 py-3 rounded-full text-white/70 font-medium text-xs md:text-sm hover:text-white">
              Showcase
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* 3. Bottom Bar / Credits */}
      <div className="relative z-20 w-full pt-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <div className="text-white/40 text-[10px] md:text-xs font-semibold tracking-widest uppercase order-2 md:order-1">
          © 2026 FLOWCHAIN. ALL RIGHTS RESERVED.
        </div>

        {/* "Crafted with Love" Badge */}
        <div className="cinematic-glass-pill px-6 py-3 rounded-full flex items-center gap-2 order-1 md:order-2 cursor-default">
          <span className="text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest">Crafted with</span>
          <span className="animate-cinematic-heartbeat text-sm md:text-base text-red-500">❤</span>
          <span className="text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest">by</span>
          <span className="text-white font-black text-xs md:text-sm tracking-normal ml-1">Flowchain</span>
        </div>

        {/* Scroll Down Arrow */}
        <MagneticButton
          as="button"
          onClick={scrollToContent}
          className="w-12 h-12 rounded-full cinematic-glass-pill flex items-center justify-center text-white/60 hover:text-white group order-3"
          aria-label="Scroll down to content"
        >
          <ArrowDown className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" />
        </MagneticButton>
      </div>
    </section>
  );
}
