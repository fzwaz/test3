import React from "react";

interface CircuitTraceProps {
  /** Full stepped path (same `d` as the grey base track). */
  d: string;
  /** Terminus node coordinates (end of `d`). */
  endX: number;
  endY: number;
  strokeWidth?: number;
  color?: string;
  /** Full draw → fade loop length in seconds. */
  duration?: number;
  /**
   * Phase offset in seconds (loops the cycle partway in). Use half the
   * duration on a second instance so the two cards pulse out of step.
   */
  phase?: number;
}

/**
 * Animated circuit trace: an orange overlay draws left→right along the grey
 * base track with a glowing head node glued to the draw front. Everything
 * runs on one shared SMIL timeline with uniform pacing, so line and node
 * can never drift apart — pure SVG, no JS runtime.
 */
export default function CircuitTrace({
  d,
  endX,
  endY,
  strokeWidth = 2,
  color = "#ff7936",
  duration = 4.5,
  phase = 0,
}: CircuitTraceProps) {
  const begin = `${-phase}s`;
  return (
    <g>
      {/* Orange progress overlay — uniform draw + synced fade */}
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        strokeDasharray="1"
        strokeDashoffset={1}
      >
        <animate
          attributeName="stroke-dashoffset"
          from="1"
          to="0"
          dur={`${duration}s`}
          begin={begin}
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          keyTimes="0;0.05;0.85;1"
          dur={`${duration}s`}
          begin={begin}
          repeatCount="indefinite"
        />
      </path>
      {/* Traveling head node — plain paced motion over the same duration,
          so it stays glued to the draw front */}
      <g opacity={0}>
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          keyTimes="0;0.05;0.85;1"
          dur={`${duration}s`}
          begin={begin}
          repeatCount="indefinite"
        />
        <circle r={7} fill={color} opacity={0.3} />
        <circle r={3} fill={color} />
        <animateMotion dur={`${duration}s`} begin={begin} repeatCount="indefinite" path={d} />
      </g>
      {/* Static terminus node */}
      <circle cx={endX} cy={endY} r={3} fill={color} />
      <circle cx={endX} cy={endY} r={7} fill={color} opacity={0.3} />
    </g>
  );
}
