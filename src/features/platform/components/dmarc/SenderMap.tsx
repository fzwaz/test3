"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/reveal";

const SENDERS = [
  {
    id: "google",
    name: "Google Workspace",
    status: "Legitimate",
    tone: "good" as const,
    detail: "Corporate mail. SPF and DKIM aligned — verified on every report cycle.",
  },
  {
    id: "sendgrid",
    name: "SendGrid",
    status: "Legitimate",
    tone: "good" as const,
    detail: "Transactional mail. Authenticated via DKIM — approved sending service.",
  },
  {
    id: "unknown",
    name: "Unknown Server",
    status: "Spoofing Risk",
    tone: "bad" as const,
    detail: "Unrecognised infrastructure. Failing SPF and DKIM — isolate and investigate.",
  },
];

const TONE = {
  good: {
    card: "border-emerald-500/30 bg-emerald-500/[0.05]",
    icon: "text-emerald-400",
    pill: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    Icon: CheckCircle2,
  },
  bad: {
    card: "border-rose-500/40 bg-rose-500/[0.06] shadow-[0_0_30px_rgba(244,63,94,0.15)]",
    icon: "text-rose-400",
    pill: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    Icon: XCircle,
  },
};

export default function SenderMap() {
  const [activeId, setActiveId] = useState("unknown");
  const active = SENDERS.find((s) => s.id === activeId) ?? SENDERS[0];

  return (
    <section id="senders" className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06] scroll-mt-20">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 text-center max-w-2xl mx-auto">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              Email authentication visibility
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              Every sender. <span className="text-[#ff7d1c]">One clear answer.</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              See every service sending email on behalf of your organisation.
              Select a sender to inspect its authentication status.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-white/10 bg-white/[0.015] p-6 sm:p-10">
            {/* Central domain */}
            <div className="mx-auto max-w-[280px] rounded-2xl border border-orange-500/40 bg-orange-500/[0.07] px-6 py-4 text-center shadow-[0_0_40px_rgba(249,115,22,0.15)]">
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-orange-400">Your domain</p>
              <p className="mt-1 text-xl font-bold text-white tracking-tight">risknox.ai</p>
            </div>

            {/* Connectors */}
            <div className="mx-auto grid max-w-3xl grid-cols-3 gap-4" aria-hidden>
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex justify-center">
                  <div className={cn("w-px h-8", i === 2 ? "bg-gradient-to-b from-rose-500/70 to-rose-500/10" : "bg-gradient-to-b from-emerald-500/60 to-emerald-500/10")} />
                </div>
              ))}
            </div>

            {/* Senders */}
            <div className="mx-auto grid max-w-3xl grid-cols-1 sm:grid-cols-3 gap-4">
              {SENDERS.map((s) => {
                const t = TONE[s.tone];
                const isActive = s.id === activeId;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActiveId(s.id)}
                    className={cn(
                      "rounded-2xl border p-5 text-left transition-all cursor-pointer",
                      t.card,
                      isActive && "ring-2 ring-orange-500/60",
                    )}
                  >
                    <t.Icon className={cn("w-6 h-6 mb-3", t.icon)} />
                    <p className="text-sm font-bold text-white">{s.name}</p>
                    <span className={cn("mt-2 inline-block px-2.5 py-0.5 rounded-full border text-[11px] font-semibold", t.pill)}>
                      {s.status}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Detail */}
            <div key={active.id} className="mx-auto mt-6 max-w-3xl rounded-xl border border-white/10 bg-black/50 px-5 py-4">
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500 mb-1">
                {active.name} · authentication detail
              </p>
              <p className="text-sm text-slate-300 leading-relaxed flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                {active.detail}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
