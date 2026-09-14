"use client";

import React, { useState } from "react";
import { Search, CheckCircle2, XCircle, AlertTriangle, Mail, Building2, Download, Lock, ShieldCheck } from "lucide-react";
import Reveal from "@/components/reveal";

type RecordStatus = "pass" | "fail" | "missing";
type CheckResult = { spf: RecordStatus; dkim: RecordStatus; dmarc: RecordStatus; policy?: string };

function mockCheck(domain: string): CheckResult {
  const s = domain.toLowerCase().trim();
  // deterministic simple hash
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 1000;
  // risknox.ai -> all pass for demo
  if (s.includes("risknox")) return { spf: "pass", dkim: "pass", dmarc: "pass", policy: "p=reject" };
  const pick = (n: number): RecordStatus => (n % 3 === 0 ? "pass" : n % 3 === 1 ? "fail" : "missing");
  return {
    spf: pick(h),
    dkim: pick(h + 1),
    dmarc: pick(h + 2),
    policy: pick(h + 2) === "pass" ? "p=reject" : pick(h + 2) === "fail" ? "p=none" : undefined,
  };
}

function StatusPill({ status }: { status: RecordStatus }) {
  if (status === "pass")
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
        <CheckCircle2 className="w-3.5 h-3.5" /> Pass
      </span>
    );
  if (status === "fail")
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold">
        <XCircle className="w-3.5 h-3.5" /> Fail
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold">
      <AlertTriangle className="w-3.5 h-3.5" /> Missing
    </span>
  );
}

export default function FreeCheck() {
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState<CheckResult | null>(null);
  const [checkedDomain, setCheckedDomain] = useState("");
  const [showGate, setShowGate] = useState(false);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [consent, setConsent] = useState(false);
  const [gateError, setGateError] = useState<string | null>(null);
  const [unlocked, setUnlocked] = useState(false);

  const handleCheck = (e?: React.FormEvent) => {
    e?.preventDefault();
    const d = domain.trim().replace(/^https?:\/\//, "").replace(/\/.*$/, "");
    if (!d || !d.includes(".")) return;
    setCheckedDomain(d);
    setResult(mockCheck(d));
    setUnlocked(false);
    setShowGate(false);
  };

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    setGateError(null);
    if (!company.trim()) {
      setGateError("Please enter your company name.");
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setGateError("Please enter a valid work email.");
      return;
    }
    const free = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "aol.com", "icloud.com"];
    const dom = email.split("@")[1]?.toLowerCase();
    if (dom && free.includes(dom)) {
      setGateError("Please use your work email (no Gmail/Yahoo).");
      return;
    }
    if (!consent) {
      setGateError("Please accept the consent.");
      return;
    }
    // Hit Zoho (Leads — Website – DMARC Check) with CRM custom fields; server handles fallback email
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: company,
          workEmail: email,
          companyName: company,
          source: "dmarc-check",
          Product_Interest: "DMARC",
          Domain: checkedDomain,
          SPF: result?.spf,
          DKIM: result?.dkim,
          DMARC: result?.dmarc,
          policy: result?.policy,
        }),
      });
    } catch {
      // swallow — fallback handled server-side, never block user
    }
    setUnlocked(true);
    setShowGate(false);
  };

  const handleDownload = () => {
    if (!result || !checkedDomain) return;
    const txt = `DMARC Monitoring — Free Report\nDomain: ${checkedDomain}\nSPF: ${result.spf}\nDKIM: ${result.dkim}\nDMARC: ${result.dmarc} ${result.policy ? `(${result.policy})` : ""}\n\nSpoofing risk: ${result.dmarc !== "pass" ? "Elevated — attackers can spoof your domain until DMARC is at p=reject." : "Controlled — DMARC enforcement is present."}\nDetailed record analysis gated — this is your basic pass/fail view; full report would include raw TXT records, alignment, and remediation steps.\n`;
    const blob = new Blob([txt], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `DMARC-${checkedDomain}-report.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="dmarc-free-check" className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">— Free tool — Second lead magnet —</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              Check your domain <span className="text-[#ff7d1c]">in seconds.</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              Domain input → instant SPF/DKIM/DMARC status per record — pass/fail/missing — shown immediately, no email
              required. Full report with detailed analysis and PDF is gated, mirroring RiskBite.
            </p>
          </div>
        </Reveal>

        <div className="rounded-2xl border border-white/10 bg-white/[0.015] overflow-hidden">
          {/* Input bar */}
          <form onSubmit={handleCheck} className="p-6 sm:p-7 border-b border-white/10 bg-black/40">
            <div className="flex flex-col sm:flex-row gap-3 max-w-2xl">
              <div className="flex-1 relative">
                <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">
                  <Search className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder="acme.com"
                  className="w-full h-[46px] pl-10 pr-4 rounded-xl border border-white/10 bg-white/[0.04] text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-orange-500/50 focus:bg-orange-500/[0.04]"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 h-[46px] rounded-xl bg-[#f97316] hover:bg-[#ff7d1c] text-white font-semibold text-sm shadow-[0_0_18px_rgba(249,115,22,0.35)] transition-colors shrink-0"
              >
                <Search className="w-4 h-4" />
                Check now
              </button>
            </div>
            <p className="mt-2 text-xs font-mono text-slate-500">Try risknox.ai → all pass · try acme.test → mixed</p>
          </form>

          {/* Results */}
          <div className="p-6 sm:p-7">
            {!result ? (
              <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-8 text-center">
                <ShieldCheck className="w-8 h-8 text-slate-600 mx-auto" />
                <p className="mt-3 text-sm font-semibold text-white">Enter a domain to see SPF / DKIM / DMARC</p>
                <p className="mt-1 text-xs text-slate-500">Pass / fail / missing per record — instant, no email.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Pass/fail — always visible */}
                <div className="lg:col-span-5">
                  <p className="text-xs font-mono font-bold tracking-widest uppercase text-slate-500 mb-3">
                    Basic view — no email required · {checkedDomain}
                  </p>
                  <div className="space-y-2.5">
                    {[
                      { k: "SPF", v: result.spf, note: "Verify who can send" },
                      { k: "DKIM", v: result.dkim, note: "Verify the message" },
                      { k: "DMARC", v: result.dmarc, note: result.policy ? result.policy : "No policy" },
                    ].map((r) => (
                      <div key={r.k} className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3.5">
                        <span className="flex items-center gap-2.5">
                          <span className="font-mono text-sm font-bold text-white">{r.k}</span>
                          <span className="text-xs text-slate-500 hidden sm:inline">{r.note}</span>
                        </span>
                        <StatusPill status={r.v as RecordStatus} />
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-slate-500">
                    Spoofing risk: {result.dmarc !== "pass" ? "Elevated until DMARC is enforced." : "Controlled at this record level."}
                  </p>
                </div>

                {/* Gated full report */}
                <div className="lg:col-span-7">
                  <div className="rounded-2xl border border-white/10 bg-black overflow-hidden">
                    <div className="px-5 py-3.5 border-b border-white/10 bg-white/[0.02] flex items-center justify-between">
                      <span className="text-xs font-mono font-bold tracking-widest uppercase text-slate-400">Full report — detailed analysis + PDF</span>
                      <span className={`inline-flex items-center gap-1.5 text-xs font-bold ${unlocked ? "text-emerald-400" : "text-slate-500"}`}>
                        {unlocked ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5" /> Unlocked
                          </>
                        ) : (
                          <>
                            <Lock className="w-3.5 h-3.5" /> Gated
                          </>
                        )}
                      </span>
                    </div>

                    <div className="relative p-6 sm:p-7">
                      {!unlocked && (
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60 backdrop-blur-[6px] z-10 flex items-end justify-center pb-8 pointer-events-none">
                          <button
                            type="button"
                            onClick={() => setShowGate(true)}
                            className="pointer-events-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm shadow-xl hover:bg-zinc-100 transition-colors"
                          >
                            <Lock className="w-4 h-4" /> Enter work email to unlock
                          </button>
                        </div>
                      )}

                      <div className={unlocked ? "" : "opacity-70"}>
                        <div className="space-y-4">
                          <div>
                            <p className="text-xs font-mono font-bold tracking-widest uppercase text-orange-400">Raw record analysis (sample)</p>
                            <div className="mt-2 rounded-xl bg-white/[0.04] border border-white/10 p-3 font-mono text-xs text-slate-300 leading-relaxed">
                              v=spf1 {result.spf === "pass" ? "include:_spf.google.com ~all — aligned" : result.spf === "fail" ? "no valid SPF — fail" : "no SPF record — missing"}
                              <br />
                              DKIM: {result.dkim === "pass" ? "selector present & valid" : result.dkim === "fail" ? "selector fail" : "no DKIM — missing"}
                              <br />
                              DMARC: {result.dmarc === "pass" ? `v=DMARC1; ${result.policy}; rua=mailto:dmarc@${checkedDomain}` : result.dmarc === "fail" ? "v=DMARC1; p=none — monitor only" : "no DMARC — missing"}
                            </div>
                          </div>
                          <div>
                            <p className="text-xs font-mono font-bold tracking-widest uppercase text-slate-500">Spoofing risk explanation</p>
                            <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                              {result.dmarc === "pass" && result.policy === "p=reject"
                                ? "DMARC at p=reject — spoofed mail is blocked at receivers that enforce it. Monitor reputation for drift."
                                : result.dmarc === "missing"
                                  ? "No DMARC — anyone can spoof your domain at major receivers. Add DMARC starting at p=none, then enforce."
                                  : "DMARC below enforcement — spoofed mail can still reach inboxes. Harden SPF/DKIM, then move to p=quarantine → p=reject."}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-3">
                            <button
                              type="button"
                              onClick={handleDownload}
                              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                              disabled={!unlocked}
                            >
                              <Download className="w-4 h-4" /> Download PDF
                            </button>
                            <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs">
                              Lead magnet #2 — same CRM integration as RiskBite (Section 6)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                    Basic pass/fail is instant and free. Full report is gated — mirrors RiskBite. CRM fields: domain, SPF/DKIM/DMARC per record, policy, spoofing risk.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Gate modal — reuse RiskBite pattern */}
        {showGate && !unlocked && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setShowGate(false)}>
            <form onSubmit={handleUnlock} onClick={(e) => e.stopPropagation()} className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 sm:p-7 shadow-2xl">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <h4 className="text-lg font-bold text-white tracking-tight">Unlock your DMARC report</h4>
                  <p className="mt-1 text-sm text-slate-400 leading-relaxed">Work email + company name for your detailed record analysis, risk explanation, and PDF.</p>
                </div>
                <button type="button" onClick={() => setShowGate(false)} className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white shrink-0">
                  ✕
                </button>
              </div>
              <div className="space-y-4">
                <label className="block">
                  <span className="text-xs font-mono font-bold tracking-widest uppercase text-slate-400">Work email</span>
                  <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 focus-within:border-orange-500/50">
                    <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" className="w-full bg-transparent outline-none text-sm text-white placeholder:text-slate-600" autoFocus />
                  </div>
                </label>
                <label className="block">
                  <span className="text-xs font-mono font-bold tracking-widest uppercase text-slate-400">Company name</span>
                  <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 focus-within:border-orange-500/50">
                    <Building2 className="w-4 h-4 text-slate-500 shrink-0" />
                    <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Acme India Pvt. Ltd." className="w-full bg-transparent outline-none text-sm text-white placeholder:text-slate-600" />
                  </div>
                </label>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1 accent-orange-500" />
                  <span className="text-xs text-slate-400 leading-relaxed">I agree to receive my DMARC report and follow-up from Risknox. Unsubscribe anytime.</span>
                </label>
                {gateError && <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">{gateError}</p>}
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#f97316] hover:bg-[#ff7d1c] text-white font-semibold text-sm shadow-[0_0_18px_rgba(249,115,22,0.35)] transition-colors">
                  <Lock className="w-4 h-4" /> Unlock & send my PDF
                </button>
                <p className="text-center text-xs text-slate-600">Takes ~10 seconds · No spam · Zoho CRM lead like RiskBite</p>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
