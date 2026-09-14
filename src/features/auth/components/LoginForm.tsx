"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, ArrowRight, CheckCircle2, Shield, LayoutDashboard } from "lucide-react";
import Reveal from "@/components/reveal";

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Enter a valid email.");
      return;
    }
    if (!form.password) {
      setError("Enter your password.");
      return;
    }
    setDone(true);
  };

  return (
    <section id="auth-form" className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">— Sign in —</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">Sign in to My Risknox.</h2>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              Self-serve customers and enterprise teams use the same portal shell — we scope your dashboard to the frameworks and
              seats you own. Forgot your login? Use the reset link — enterprise logins provisioned post-demo work here too.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <LayoutDashboard className="w-5 h-5 text-orange-400" />
                <p className="mt-2 text-sm font-bold text-white">My Risknox</p>
                <p className="text-xs text-slate-500">Evidence · tasks · billing · upgrades</p>
              </div>
              <div className="rounded-xl border border-orange-500/20 bg-orange-500/[0.06] p-4">
                <Shield className="w-5 h-5 text-orange-400" />
                <p className="mt-2 text-sm font-bold text-white">Secure by design</p>
                <p className="text-xs text-slate-500">SSO ready for enterprise</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              {!done ? (
                <form onSubmit={submit} className="space-y-4">
                  <label className="block">
                    <span className="text-xs font-mono font-bold tracking-widest uppercase text-slate-400">Work email *</span>
                    <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-white/10 bg-black px-3 py-2.5 focus-within:border-orange-500/50">
                      <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                      <input type="email" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} placeholder="you@company.com" className="w-full bg-transparent outline-none text-sm text-white placeholder:text-slate-600" />
                    </div>
                  </label>

                  <label className="block">
                    <span className="text-xs font-mono font-bold tracking-widest uppercase text-slate-400">Password *</span>
                    <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-white/10 bg-black px-3 py-2.5 focus-within:border-orange-500/50">
                      <Lock className="w-4 h-4 text-slate-500 shrink-0" />
                      <input type="password" value={form.password} onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))} placeholder="••••••••" className="w-full bg-transparent outline-none text-sm text-white placeholder:text-slate-600" />
                    </div>
                  </label>

                  <div className="flex items-center justify-between">
                    <Link href="#reset" className="text-xs text-slate-500 hover:text-white underline underline-offset-4">
                      Forgot password?
                    </Link>
                    <span className="text-xs text-slate-600">SSO? Use your provisioned login</span>
                  </div>

                  {error && <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">{error}</p>}

                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#f97316] hover:bg-[#ff7d1c] text-white font-semibold text-sm shadow-[0_0_18px_rgba(249,115,22,0.35)] transition-colors">
                    Sign in <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-center text-xs text-slate-600">
                    No account yet? <Link href="/signup" className="text-white underline underline-offset-4 hover:text-orange-400">Sign up</Link> for GRC/DMARC self-serve · Enterprise was provisioned? <Link href="/contact" className="text-white underline underline-offset-4 hover:text-orange-400">Contact sales</Link>
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Signed in — demo</h3>
                  <p className="mt-1 text-sm text-slate-400">
                    You&apos;d now land in <Link href="/my-risknox" className="text-white underline underline-offset-4">My Risknox</Link>.
                  </p>
                  <p className="mt-3 text-xs text-slate-600">Demo only — auth is mocked. Real auth would set a session and route by entitlements.</p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
