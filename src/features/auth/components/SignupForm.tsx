"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Building2, User, ArrowRight, CheckCircle2, Shield, X } from "lucide-react";
import Reveal from "@/components/reveal";

export default function SignupForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", password: "", plan: "Build Your Own GRC" });
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showLogin, setShowLogin] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loginDone, setLoginDone] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!form.name.trim() || !form.email.trim() || !form.company.trim() || !form.password.trim()) {
      setError("Please fill all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Enter a valid work email.");
      return;
    }
    if (form.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    // Hit Zoho (Contacts + Deal Closed Won on payment) — Website – Self-serve Signup, Section 6/7
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.name,
          workEmail: form.email,
          companyName: form.company,
          source: "grc-builder",
          Product_Interest: form.plan.includes("DMARC") ? "DMARC" : "Compliance/GRC",
          Company_Size: "Unknown",
          Industry: "Unknown",
          Region: "India",
          selectedPlan: form.plan,
        }),
      });
    } catch {}
    setDone(true);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginForm.email)) {
      setLoginError("Enter a valid email.");
      return;
    }
    if (!loginForm.password) {
      setLoginError("Enter your password.");
      return;
    }
    setLoginDone(true);
    setTimeout(() => {
      setShowLogin(false);
      // keep success visible briefly; user can close and see dashboard in real app
    }, 1200);
  };

  return (
    <section id="auth-form" className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">— Self-serve — Section 7 —</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">Sign up to auto-provision.</h2>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              For Compliance/GRC and DMARC Monitoring customers who pay online without a sales conversation. Enterprise
              Pulse/Fortress/Compass/Accord is provisioned by the team post-demo — <span className="text-slate-300">see Section 7</span>.
            </p>
            <div className="mt-6 space-y-3">
              <div className="rounded-xl border border-orange-500/20 bg-orange-500/[0.06] p-4">
                <p className="text-xs font-mono font-bold tracking-widest uppercase text-orange-400">Included after sign up</p>
                <p className="mt-1 text-sm text-slate-300">My Risknox dashboard scoped to your frameworks, billing & invoices, upgrade path, evidence/task center.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <p className="text-xs font-mono font-bold tracking-widest uppercase text-slate-500">Enterprise?</p>
                <p className="mt-1 text-sm text-slate-400">
                  Don&apos;t self-register — <Link href="/contact" className="text-white underline underline-offset-4 hover:text-orange-400">book a demo</Link>. We provision Pulse/Fortress/Compass/Accord and set your entitlements.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              {!done ? (
                <form onSubmit={submit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="text-xs font-mono font-bold tracking-widest uppercase text-slate-400">Full name *</span>
                      <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-white/10 bg-black px-3 py-2.5 focus-within:border-orange-500/50">
                        <User className="w-4 h-4 text-slate-500 shrink-0" />
                        <input value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} placeholder="Jane Doe" className="w-full bg-transparent outline-none text-sm text-white placeholder:text-slate-600" />
                      </div>
                    </label>
                    <label className="block">
                      <span className="text-xs font-mono font-bold tracking-widest uppercase text-slate-400">Work email *</span>
                      <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-white/10 bg-black px-3 py-2.5 focus-within:border-orange-500/50">
                        <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                        <input type="email" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} placeholder="you@company.com" className="w-full bg-transparent outline-none text-sm text-white placeholder:text-slate-600" />
                      </div>
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="text-xs font-mono font-bold tracking-widest uppercase text-slate-400">Company *</span>
                      <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-white/10 bg-black px-3 py-2.5 focus-within:border-orange-500/50">
                        <Building2 className="w-4 h-4 text-slate-500 shrink-0" />
                        <input value={form.company} onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))} placeholder="Acme India Pvt. Ltd." className="w-full bg-transparent outline-none text-sm text-white placeholder:text-slate-600" />
                      </div>
                    </label>
                    <label className="block">
                      <span className="text-xs font-mono font-bold tracking-widest uppercase text-slate-400">Password *</span>
                      <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-white/10 bg-black px-3 py-2.5 focus-within:border-orange-500/50">
                        <Lock className="w-4 h-4 text-slate-500 shrink-0" />
                        <input type="password" value={form.password} onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))} placeholder="••••••••" className="w-full bg-transparent outline-none text-sm text-white placeholder:text-slate-600" />
                      </div>
                    </label>
                  </div>

                  <label className="block">
                    <span className="text-xs font-mono font-bold tracking-widest uppercase text-slate-400">I want</span>
                    <select value={form.plan} onChange={(e) => setForm((p) => ({ ...p, plan: e.target.value }))} className="mt-1.5 w-full h-11 px-3 rounded-xl border border-white/10 bg-black text-sm text-white focus:outline-none focus:border-orange-500/50">
                      <option>Build Your Own GRC</option>
                      <option>DMARC Monitoring — Paid tier</option>
                      <option>Both</option>
                    </select>
                  </label>

                  <div className="rounded-xl bg-orange-500/10 border border-orange-500/20 p-3 flex items-start gap-2">
                    <Shield className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                    <p className="text-xs text-orange-200 leading-relaxed">Self-serve customers: after payment you&apos;re auto-provisioned and the onboarding wizard pre-loads your frameworks&apos; controls.</p>
                  </div>

                  {error && <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">{error}</p>}

                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#f97316] hover:bg-[#ff7d1c] text-white font-semibold text-sm shadow-[0_0_18px_rgba(249,115,22,0.35)] transition-colors">
                    Create account <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-center text-xs text-slate-600">
                    Already have an account?{" "}
                    <button type="button" onClick={() => { setShowLogin(true); setLoginDone(false); setLoginError(null); }} className="text-white underline underline-offset-4 hover:text-orange-400 cursor-pointer">
                      Log in
                    </button>{" "}
                    · Enterprise? <Link href="/contact" className="text-white underline underline-offset-4 hover:text-orange-400">Contact sales</Link>
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Check your email</h3>
                  <p className="mt-1 text-sm text-slate-400">We&apos;ve sent a verification link to <span className="text-white font-medium">{form.email}</span>. Verify to provision your My Risknox workspace.</p>
                  <p className="mt-3 text-xs text-slate-600">Demo only — no account is created. In production this would trigger Razorpay/Stripe checkout → auto-provisioning per Section 7.</p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Login popup — credentials only, no page navigation */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setShowLogin(false)}>
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 sm:p-7 shadow-2xl relative overflow-hidden">
            <div className="pointer-events-none absolute -top-20 -right-20 w-56 h-56 bg-orange-500/10 rounded-full blur-3xl" />
            <button type="button" onClick={() => setShowLogin(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-colors" aria-label="Close">
              <X className="w-4 h-4" />
            </button>

            {!loginDone ? (
              <>
                <div className="flex items-center gap-3 pr-8">
                  <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                    <Lock className="w-4.5 h-4.5 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-white tracking-tight">Log in to My Risknox</h3>
                    <p className="mt-1 text-[13px] text-slate-400 leading-relaxed">Enter your credentials to continue.</p>
                  </div>
                </div>

                <form onSubmit={handleLogin} className="mt-6 space-y-4">
                  <label className="block">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Work email</span>
                    <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-white/10 bg-black px-3 py-2.5 focus-within:border-orange-500/50">
                      <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                      <input type="email" value={loginForm.email} onChange={(e) => setLoginForm((p) => ({ ...p, email: e.target.value }))} placeholder="you@company.com" className="w-full bg-transparent outline-none text-sm text-white placeholder:text-slate-600" autoFocus />
                    </div>
                  </label>
                  <label className="block">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Password</span>
                    <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-white/10 bg-black px-3 py-2.5 focus-within:border-orange-500/50">
                      <Lock className="w-4 h-4 text-slate-500 shrink-0" />
                      <input type="password" value={loginForm.password} onChange={(e) => setLoginForm((p) => ({ ...p, password: e.target.value }))} placeholder="••••••••" className="w-full bg-transparent outline-none text-sm text-white placeholder:text-slate-600" />
                    </div>
                  </label>
                  <div className="flex items-center justify-between">
                    <Link href="/login" onClick={() => setShowLogin(false)} className="text-xs text-slate-500 hover:text-white underline underline-offset-4">
                      Go to full login page
                    </Link>
                    <a href="#reset" className="text-xs text-slate-500 hover:text-white underline underline-offset-4">
                      Forgot password?
                    </a>
                  </div>
                  {loginError && <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">{loginError}</p>}
                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#f97316] hover:bg-[#ff7d1c] text-white font-semibold text-sm shadow-[0_0_18px_rgba(249,115,22,0.35)] transition-colors">
                    Log in <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-center text-xs text-slate-600">
                    No account? Stay on this page and <button type="button" onClick={() => setShowLogin(false)} className="text-white underline underline-offset-4">create one</button>.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Signed in</h4>
                <p className="mt-1 text-sm text-slate-400">Welcome back — you can now access your My Risknox dashboard.</p>
                <Link href="/my-risknox" onClick={() => setShowLogin(false)} className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-100 transition-colors">
                  Go to My Risknox <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
