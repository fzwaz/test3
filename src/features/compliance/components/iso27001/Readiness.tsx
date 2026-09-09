"use client";

import React, { useMemo, useState } from "react";
import { Timer, ShieldCheck, LayoutGrid } from "lucide-react";
import Reveal from "@/components/reveal";
import LeadForm from "./LeadForm";

const DEFAULT_FRAMEWORKS = ["ISO 27001", "SOC 2", "DPDPA", "GDPR", "HIPAA"];
const TEAM_OPTS = ["1 – 10", "11 – 50", "51 – 200", "201 – 500", "500+"];
const CONTROLS_OPTS = [
  { id: "none", label: "Nothing documented yet", score: 15, weeks: 16 },
  { id: "partial", label: "Partially documented", score: 45, weeks: 10 },
  { id: "ready", label: "Mostly audit-ready", score: 70, weeks: 6 },
];

interface ReadinessCopy {
  eyebrow?: string;
  titleA?: string;
  titleB?: string;
  description?: string;
  frameworks?: string[];
  teamLabel?: string;
  teamSuffix?: string;
  controlsLabel?: string;
  footnote?: string;
  areasStat?: string;
  modelledNote?: string;
  weeksLabel?: string;
  formTitle?: string;
  formDesc?: string;
  formSource?: string;
  formSubmit?: string;
}

export default function Readiness({
  eyebrow = "Compliance readiness",
  titleA = "A 30-second reality check",
  titleB = "for your audit readiness.",
  description = "Pick your framework, add your team size, and tell us where your controls stand.",
  frameworks = DEFAULT_FRAMEWORKS,
  teamLabel = "Team size",
  teamSuffix = "employees",
  controlsLabel = "Where do your controls stand?",
  footnote = "Score is indicative. Full audit plan maps controls, evidence, gaps, owners, and timelines.",
  areasStat = "84+ controls checked",
  modelledNote = "Modelled on 8K+ compliance assessments.",
  weeksLabel = "To Stage 2",
  formTitle = "Get your full plan.",
  formDesc = "Controls, evidence, gaps, owners, and timelines — mapped for you.",
  formSource = "readiness-calculator",
  formSubmit = "Get my plan",
}: ReadinessCopy) {
  const [framework, setFramework] = useState(frameworks[0]);
  const [team, setTeam] = useState(TEAM_OPTS[1]);
  const [controls, setControls] = useState(CONTROLS_OPTS[1].id);

  const result = useMemo(() => {
    const base = CONTROLS_OPTS.find((c) => c.id === controls) ?? CONTROLS_OPTS[1];
    const teamAdj = TEAM_OPTS.indexOf(team) * 2;
    const readiness = Math.min(92, base.score - teamAdj + 4);
    const weeks = Math.max(3, base.weeks + TEAM_OPTS.indexOf(team));
    const evidence = Math.min(95, readiness + 8);
    const engagement =
      readiness < 35 ? "Guided programme" : readiness < 65 ? "Hybrid programme" : "Audit sprint";
    return { readiness, weeks, evidence, engagement };
  }, [controls, team]);

  const selectCls =
    "w-full bg-white/[0.04] border border-white/[0.12] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors cursor-pointer";
  const labelCls =
    "mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-slate-400";

  return (
    <section id="readiness" className="relative w-full py-16 md:py-20 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06] scroll-mt-20">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              {eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              {titleA} <span className="text-[#ff7d1c]">{titleB}</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              {description}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
          {/* Calculator */}
          <Reveal className="h-full">
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-7 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                <span className="flex items-center gap-1.5"><Timer className="h-3.5 w-3.5 text-orange-400" /> Score in ~30 sec</span>
                <span>No login</span>
                <span>100% anonymous</span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className={labelCls}>Framework</label>
                  <select value={framework} onChange={(e) => setFramework(e.target.value)} className={selectCls}>
                    {frameworks.map((f) => (
                      <option key={f} value={f} className="bg-[#0c0d12]">{f}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelCls}>{teamLabel}</label>
                  <select value={team} onChange={(e) => setTeam(e.target.value)} className={selectCls}>
                    {TEAM_OPTS.map((t) => (
                      <option key={t} value={t} className="bg-[#0c0d12]">{t} {teamSuffix}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelCls}>{controlsLabel}</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {CONTROLS_OPTS.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setControls(c.id)}
                        className={`rounded-xl border px-3 py-2.5 text-xs font-semibold transition-all cursor-pointer ${
                          controls === c.id
                            ? "border-orange-500/60 bg-orange-500/10 text-white shadow-[0_0_18px_rgba(249,115,22,0.2)]"
                            : "border-white/10 bg-white/[0.03] text-slate-400 hover:text-white hover:border-white/25"
                        }`}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Live result */}
              <div className="mt-7 rounded-xl border border-orange-500/25 bg-orange-500/[0.05] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-4">
                  Estimated readiness · {framework}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div>
                    <p className="text-2xl font-bold text-white tabular-nums">{result.readiness}%</p>
                    <p className="mt-1 text-[11px] text-slate-500 uppercase tracking-wider">Ready</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white tabular-nums">~{result.weeks} wks</p>
                    <p className="mt-1 text-[11px] text-slate-500 uppercase tracking-wider">{weeksLabel}</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white tabular-nums">{result.evidence}%</p>
                    <p className="mt-1 text-[11px] text-slate-500 uppercase tracking-wider">Evidence</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-orange-400 leading-snug pt-1">{result.engagement}</p>
                    <p className="mt-1 text-[11px] text-slate-500 uppercase tracking-wider">Engagement</p>
                  </div>
                </div>
                <div className="mt-4 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-orange-600 to-orange-400 transition-all duration-500"
                    style={{ width: `${result.readiness}%` }}
                  />
                </div>
                <p className="mt-3 text-[11px] text-slate-500">
                  {footnote}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                <span className="flex items-center gap-1.5"><LayoutGrid className="h-3.5 w-3.5 text-orange-400" /> 20+ frameworks</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-orange-400" /> {areasStat}</span>
              </div>
              <p className="mt-2 text-[11px] text-slate-600">{modelledNote}</p>
            </div>
          </Reveal>

          {/* Lead form */}
          <Reveal className="h-full" delay={0.12}>
            <div className="h-full rounded-2xl border border-white/10 bg-black/60 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white tracking-tight">{formTitle}</h3>
              <p className="mt-1 mb-5 text-[13px] text-slate-400">
                {formDesc}
              </p>
              <LeadForm source={formSource} submitLabel={formSubmit} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
