"use client";

import * as React from "react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * FlowchainNodeMap
 * Ultra-slim 0.3px constellation background with 100% synchronized workflow path animation.
 * Uses SVG pathLength="100" scaling so traveling light beams hit target node blobs at the exact millisecond they glow.
 */

export type NodeMapNode = {
  id: string;
  x: number; // 0-100, percent of container width
  y: number; // 0-100, percent of container height
  label?: string;
  emphasized?: boolean;
};

export type NodeMapEdge = [string, string];

export interface FlowchainNodeMapProps {
  nodes: NodeMapNode[];
  edges: NodeMapEdge[];
  glow?: "center" | "corner-tr" | "corner-bl" | "none";
  density?: "sparse" | "normal";
  className?: string;
}

const STYLES = `
.fc-node-map {
  --fc-line: color-mix(in oklch, var(--foreground, #fff) 8%, transparent);
  --fc-node-fill: color-mix(in oklch, var(--foreground, #fff) 40%, transparent);
  --fc-node-ring: color-mix(in oklch, var(--foreground, #fff) 18%, transparent);
  --fc-accent: #ffffff;
  --fc-glow: color-mix(in oklch, #EFEFE6 14%, transparent);
}

@keyframes fc-glow-breathe {
  0%, 100% { opacity: 0.6; transform: scale(0.98); }
  50% { opacity: 0.9; transform: scale(1.04); }
}

.fc-glow-center {
  background: radial-gradient(ellipse 60% 45% at 50% 55%, var(--fc-glow) 0%, transparent 70%);
  animation: fc-glow-breathe 10s ease-in-out infinite;
}
.fc-glow-corner-tr {
  background: radial-gradient(ellipse 55% 55% at 85% 15%, var(--fc-glow) 0%, transparent 70%);
  animation: fc-glow-breathe 10s ease-in-out infinite;
}
.fc-glow-corner-bl {
  background: radial-gradient(ellipse 55% 55% at 10% 90%, var(--fc-glow) 0%, transparent 70%);
  animation: fc-glow-breathe 10s ease-in-out infinite;
}

/* -------------------------------------------------- */
/* 100% SYNCHRONIZED 12s TIMELINE ANIMATIONS          */
/* -------------------------------------------------- */

/* Edge 0: website -> ai (0% to 25%) */
@keyframes fc-flow-0 {
  0% { stroke-dashoffset: 100; opacity: 0; }
  1% { stroke-dashoffset: 100; opacity: 0.95; }
  24% { opacity: 0.95; }
  25% { stroke-dashoffset: 0; opacity: 0; }
  100% { stroke-dashoffset: 0; opacity: 0; }
}

/* Edge 1: whatsapp -> ai (25% to 50%) */
@keyframes fc-flow-1 {
  0%, 25% { stroke-dashoffset: 100; opacity: 0; }
  26% { stroke-dashoffset: 100; opacity: 0.95; }
  49% { opacity: 0.95; }
  50% { stroke-dashoffset: 0; opacity: 0; }
  100% { stroke-dashoffset: 0; opacity: 0; }
}

/* Edge 2 & 3: ai -> crm & ai -> booking (50% to 75%) */
@keyframes fc-flow-2-3 {
  0%, 50% { stroke-dashoffset: 100; opacity: 0; }
  51% { stroke-dashoffset: 100; opacity: 0.95; }
  74% { opacity: 0.95; }
  75% { stroke-dashoffset: 0; opacity: 0; }
  100% { stroke-dashoffset: 0; opacity: 0; }
}

/* Node website ring & label: pulses at 0% */
@keyframes fc-pulse-website {
  0%, 2% { stroke: #ffffff; opacity: 1; r: 2.2; }
  7%, 100% { stroke: var(--fc-node-ring); opacity: 0.35; r: 1.4; }
}
@keyframes fc-text-website {
  0%, 2% { fill: #ffffff; opacity: 1; }
  7%, 100% { fill: color-mix(in oklch, var(--foreground, #fff) 18%, transparent); opacity: 0.4; }
}

/* Node whatsapp ring & label: pulses at 25% */
@keyframes fc-pulse-whatsapp {
  0%, 24% { stroke: var(--fc-node-ring); opacity: 0.35; r: 1.4; }
  25%, 27% { stroke: #ffffff; opacity: 1; r: 2.2; }
  32%, 100% { stroke: var(--fc-node-ring); opacity: 0.35; r: 1.4; }
}
@keyframes fc-text-whatsapp {
  0%, 24% { fill: color-mix(in oklch, var(--foreground, #fff) 18%, transparent); opacity: 0.4; }
  25%, 27% { fill: #ffffff; opacity: 1; }
  32%, 100% { fill: color-mix(in oklch, var(--foreground, #fff) 18%, transparent); opacity: 0.4; }
}

/* Node ai ring & label: pulses at 25% (Edge 0 arrives) AND 50% (Edge 1 arrives) */
@keyframes fc-pulse-ai {
  0%, 24% { stroke: #ffffff; opacity: 0.7; r: 1.6; }
  25%, 27% { stroke: #ffffff; opacity: 1; r: 2.5; }
  32%, 49% { stroke: #ffffff; opacity: 0.7; r: 1.6; }
  50%, 52% { stroke: #ffffff; opacity: 1; r: 2.5; }
  57%, 100% { stroke: #ffffff; opacity: 0.7; r: 1.6; }
}
@keyframes fc-text-ai {
  0%, 24% { fill: color-mix(in oklch, var(--foreground, #fff) 35%, transparent); opacity: 0.6; }
  25%, 27% { fill: #ffffff; opacity: 1; }
  32%, 49% { fill: color-mix(in oklch, var(--foreground, #fff) 35%, transparent); opacity: 0.6; }
  50%, 52% { fill: #ffffff; opacity: 1; }
  56%, 100% { fill: color-mix(in oklch, var(--foreground, #fff) 35%, transparent); opacity: 0.6; }
}

/* Node crm & booking rings & labels: pulse at 75% (Edges 2 & 3 arrive) */
@keyframes fc-pulse-crm-booking {
  0%, 74% { stroke: var(--fc-node-ring); opacity: 0.35; r: 1.4; }
  75%, 77% { stroke: #ffffff; opacity: 1; r: 2.2; }
  82%, 100% { stroke: var(--fc-node-ring); opacity: 0.35; r: 1.4; }
}
@keyframes fc-text-crm-booking {
  0%, 74% { fill: color-mix(in oklch, var(--foreground, #fff) 18%, transparent); opacity: 0.4; }
  75%, 77% { fill: #ffffff; opacity: 1; }
  82%, 100% { fill: color-mix(in oklch, var(--foreground, #fff) 18%, transparent); opacity: 0.4; }
}

/* Base lines and nodes styling */
.fc-node-dot {
  fill: var(--fc-node-fill);
}
.fc-node-ring {
  fill: none;
  stroke: var(--fc-node-ring);
  stroke-width: 0.35;
  transform-box: fill-box;
  transform-origin: center;
  animation-duration: 12s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.fc-edge-base {
  stroke: var(--fc-line);
  stroke-width: 0.3;
  fill: none;
}

.fc-flow-beam {
  stroke: #ffffff;
  stroke-width: 0.35;
  stroke-dasharray: 10 90;
  stroke-linecap: round;
  fill: none;
  animation-duration: 12s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.fc-node-label {
  fill: color-mix(in oklch, var(--foreground, #fff) 18%, transparent);
  font-size: 1.8px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: 500;
  user-select: none;
  animation-duration: 12s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
`;

// Helper map to pick exact keyframe animation for each edge index
function getEdgeAnimationClass(index: number) {
  if (index === 0) return "fc-flow-0";
  if (index === 1) return "fc-flow-1";
  return "fc-flow-2-3";
}

// Helper map to pick exact keyframe animation for each node ID
function getNodeRingAnimationName(id: string) {
  if (id === "website") return "fc-pulse-website";
  if (id === "whatsapp") return "fc-pulse-whatsapp";
  if (id === "ai") return "fc-pulse-ai";
  return "fc-pulse-crm-booking";
}

function getNodeLabelAnimationName(id: string) {
  if (id === "website") return "fc-text-website";
  if (id === "whatsapp") return "fc-text-whatsapp";
  if (id === "ai") return "fc-text-ai";
  return "fc-text-crm-booking";
}

export function FlowchainNodeMap({
  nodes,
  edges,
  glow = "center",
  density = "sparse",
  className,
}: FlowchainNodeMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  const nodeById = React.useMemo(() => {
    const map = new Map<string, NodeMapNode>();
    nodes.forEach((n) => map.set(n.id, n));
    return map;
  }, [nodes]);

  return (
    <div className={cn("fc-node-map absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      {glow !== "none" && (
        <div
          className={cn(
            "absolute inset-0",
            glow === "center" && "fc-glow-center",
            glow === "corner-tr" && "fc-glow-corner-tr",
            glow === "corner-bl" && "fc-glow-corner-bl"
          )}
        />
      )}
      <svg
        ref={svgRef}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className={cn("absolute inset-0 h-full w-full", density === "sparse" ? "opacity-70" : "opacity-90")}
      >
        {/* Base edge lines + synchronized light signal paths */}
        {edges.map(([fromId, toId], i) => {
          const from = nodeById.get(fromId);
          const to = nodeById.get(toId);
          if (!from || !to) return null;
          const pathD = `M ${from.x} ${from.y} L ${to.x} ${to.y}`;
          const animClass = getEdgeAnimationClass(i);

          return (
            <React.Fragment key={`edge-group-${i}`}>
              <path
                className="fc-edge-base"
                d={pathD}
              />
              <path
                className="fc-flow-beam"
                d={pathD}
                pathLength="100"
                style={{ animationName: animClass }}
              />
            </React.Fragment>
          );
        })}

        {/* Nodes with synchronized ring pulses and text label popups */}
        {nodes.map((n) => {
          const ringAnim = getNodeRingAnimationName(n.id);
          const labelAnim = getNodeLabelAnimationName(n.id);

          return (
            <g key={n.id} className="fc-node">
              <circle className="fc-node-dot" cx={n.x} cy={n.y} r={0.4} />
              <circle
                className={cn("fc-node-ring", n.emphasized && "emphasized")}
                cx={n.x}
                cy={n.y}
                r={1.4}
                style={{ animationName: ringAnim }}
              />
              {n.label && (
                <text
                  className="fc-node-label"
                  x={n.x + 2.2}
                  y={n.y + 0.5}
                  style={{ animationName: labelAnim }}
                >
                  {n.label}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
