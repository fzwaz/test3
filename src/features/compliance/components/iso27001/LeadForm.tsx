"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const REVENUE_BANDS = [
  "< ₹5 Cr",
  "₹5 - 25 Cr",
  "₹25 - 100 Cr",
  "₹100 - 500 Cr",
  "> ₹500 Cr",
];

interface LeadFormProps {
  source: string;
  submitLabel: string;
  showRevenue?: boolean;
}

export default function LeadForm({ source, submitLabel, showRevenue = true }: LeadFormProps) {
  const [form, setForm] = useState({
    fullName: "",
    phoneNumber: "",
    workEmail: "",
    companyName: "",
    revenue: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName.trim() || !form.workEmail.trim() || !form.companyName.trim()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          workEmail: form.workEmail,
          companyName: form.companyName,
          phoneNumber: form.phoneNumber,
          reachOutFor: "Service Inquiry",
          selectedService: "SOC2 & ISO 27001",
          requirements: `ISO 27001 inquiry (${source}).${form.revenue ? ` Annual revenue: ${form.revenue}.` : ""}`,
        }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div className="flex flex-col items-center gap-3 py-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-emerald-400" />
        <p className="font-semibold text-white">Request received.</p>
        <p className="text-sm text-slate-400">
          Our compliance team will reply within 24 hours.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full bg-white/[0.04] border border-white/[0.12] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500 placeholder:text-slate-600 transition-colors";

  return (
    <form onSubmit={submit} className="space-y-3">
      <div>
        <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          Full name*
        </label>
        <input required placeholder="Full name" value={form.fullName} onChange={set("fullName")} className={inputCls} />
      </div>
      <div>
        <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          Phone number
        </label>
        <input placeholder="Phone number" value={form.phoneNumber} onChange={set("phoneNumber")} className={inputCls} />
      </div>
      <div>
        <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          Work email*
        </label>
        <input required type="email" placeholder="Work email" value={form.workEmail} onChange={set("workEmail")} className={inputCls} />
      </div>
      <div>
        <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          Company*
        </label>
        <input required placeholder="Company name" value={form.companyName} onChange={set("companyName")} className={inputCls} />
      </div>
      {showRevenue && (
        <div>
          <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Annual revenue
          </label>
          <select value={form.revenue} onChange={set("revenue")} className={`${inputCls} ${form.revenue ? "" : "text-slate-600"}`}>
            <option value="" className="bg-[#0c0d12]">Select revenue band…</option>
            {REVENUE_BANDS.map((b) => (
              <option key={b} value={b} className="bg-[#0c0d12]">{b}</option>
            ))}
          </select>
        </div>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all hover:bg-orange-600 active:scale-[0.98] disabled:opacity-60 cursor-pointer"
      >
        <span>{status === "sending" ? "Sending…" : submitLabel}</span>
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </button>
      {status === "error" && (
        <p className="text-center text-xs text-red-400">Something went wrong. Please try again.</p>
      )}
      <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
        Secure · No spam · Reply &lt; 24h
      </p>
    </form>
  );
}
