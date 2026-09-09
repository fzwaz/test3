"use client";

import React, { useMemo } from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ChartTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl border border-white/10 bg-[#0c0d12]/95 px-4 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.8)] backdrop-blur-xl">
      <p className="mb-1.5 text-sm font-bold text-white">{label}</p>
      <div className="flex items-center gap-2.5 text-[13px]">
        <span className="h-2.5 w-2.5 rounded-full bg-[#f36734]" />
        <span className="text-slate-400">Risk score</span>
        <span className="ml-auto pl-6 font-bold tabular-nums text-white">{payload[0]?.value}</span>
      </div>
    </div>
  );
}

/** Deterministic 30-day descending sample (SSR-safe, no randomness). */
function buildData() {
  const pts = [];
  for (let i = 0; i < 30; i++) {
    const t = i / 29;
    const base = 80 - t * 8;
    const wave = Math.sin(i * 1.1) * 1.6 + Math.sin(i * 0.5) * 1.2;
    pts.push({
      day: `Week ${Math.min(4, Math.floor(i / 7) + 1)} · D${(i % 7) + 1}`,
      score: Math.round((base + wave) * 10) / 10,
    });
  }
  return pts;
}

export default function DashboardChart() {
  const data = useMemo(buildData, []);

  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={150}>
        <LineChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: 8 }}>
          <defs>
            <linearGradient id="fortressTrend" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f36734" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#f36734" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
          <XAxis dataKey="day" tickLine={false} axisLine={false} interval={6} tick={{ fill: "#71717a", fontSize: 11 }} dy={6} />
          <YAxis domain={[68, 84]} hide />
          <Tooltip content={<ChartTooltip />} cursor={{ stroke: "rgba(249,115,22,0.4)", strokeWidth: 1 }} />
          <Line
            type="monotone"
            dataKey="score"
            stroke="#f36734"
            strokeWidth={2.5}
            fill="url(#fortressTrend)"
            dot={false}
            activeDot={{ r: 4, fill: "#f36734", stroke: "#000000", strokeWidth: 1.5 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-2 flex items-center justify-between px-1 text-[11px] text-slate-600">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#f36734]" /> Risk score
        </span>
        <span>−8% risk exposure · sample data</span>
      </div>
    </div>
  );
}
