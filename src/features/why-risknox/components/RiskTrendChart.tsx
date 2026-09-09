"use client";

import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Line,
  Area,
} from "recharts";

export interface TrendPoint {
  date: string;
  /** Daily detections / signals ingested (bars). */
  detections: number;
  /** Quantified financial exposure, $K (orange area). */
  exposure: number;
  /** Resolved / remediated exposure (light line). */
  resolved: number;
}

/** Deterministic 30-day sample telemetry (SSR-safe, no randomness). */
function buildData(): TrendPoint[] {
  const pts: TrendPoint[] = [];
  for (let i = 0; i < 30; i++) {
    const t = i / 29;
    const wave = Math.sin(t * Math.PI * 2 - 0.6) * 0.5 + 0.5;
    const ripple = Math.sin(i * 1.7) * 0.5 + 0.5;
    pts.push({
      date: `Jan ${i + 1}`,
      detections: Math.round(28 + wave * 26 + ripple * 10),
      exposure: Math.round(52 + (1 - wave) * 34 + ripple * 6),
      resolved: Math.round(30 + wave * 22 + (1 - ripple) * 6),
    });
  }
  return pts;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function TrendTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  const val = (key: string) => payload.find((p: { dataKey: string }) => p.dataKey === key)?.value;
  const rows = [
    { dot: "#f36734", name: "Exposure $K", value: val("exposure") },
    { dot: "#71717a", name: "Detections", value: val("detections") },
    { dot: "#d4d4d8", name: "Resolved", value: val("resolved") },
  ];
  return (
    <div className="rounded-xl border border-white/10 bg-[#0c0d12]/95 px-4 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.8)] backdrop-blur-xl">
      <p className="mb-2 text-sm font-bold text-white">{label}</p>
      <div className="space-y-1.5">
        {rows.map((r) => (
          <div key={r.name} className="flex items-center gap-2.5 text-[13px]">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: r.dot }} />
            <span className="text-slate-400">{r.name}</span>
            <span className="ml-auto pl-6 font-bold tabular-nums text-white">{r.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const LEGEND = [
  { dot: "#f36734", name: "Exposure $K" },
  { dot: "#71717a", name: "Detections" },
  { dot: "#d4d4d8", name: "Resolved" },
];

export default function RiskTrendChart() {
  const data = useMemo(buildData, []);

  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: 8 }} barCategoryGap={2}>
          <defs>
            <linearGradient id="exposureFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f36734" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#f36734" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            interval={4}
            tick={{ fill: "#71717a", fontSize: 12 }}
            dy={6}
          />
          <YAxis hide />
          <Tooltip content={<TrendTooltip />} cursor={{ fill: "rgba(255,255,255,0.04)" }} />
          <Bar dataKey="detections" fill="#3a3a42" radius={[4, 4, 0, 0]} maxBarSize={18} />
          <Area
            type="monotone"
            dataKey="exposure"
            stroke="#f36734"
            strokeWidth={2}
            fill="url(#exposureFill)"
            dot={false}
            activeDot={{ r: 4, fill: "#f36734", stroke: "#000000", strokeWidth: 1.5 }}
          />
          <Line
            type="monotone"
            dataKey="resolved"
            stroke="#d4d4d8"
            strokeWidth={1.5}
            dot={false}
            activeDot={{ r: 3.5, fill: "#d4d4d8", stroke: "#000000", strokeWidth: 1.5 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 px-1">
        {LEGEND.map((l) => (
          <span key={l.name} className="flex items-center gap-2 text-xs text-slate-400">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: l.dot }} />
            {l.name}
          </span>
        ))}
        <span className="ml-auto text-[11px] text-slate-600">Sample telemetry</span>
      </div>
    </div>
  );
}
