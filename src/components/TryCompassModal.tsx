"use client";

import React, { useState } from "react";
import { X, Mail, User, Lock, Compass } from "lucide-react";

interface TryCompassModalProps {
  open: boolean;
  onClose: () => void;
}

export default function TryCompassModal({ open, onClose }: TryCompassModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name.trim()) {
      setError("Please enter your full name.");
      return;
    }
    if (!email.trim() || !isValidEmail(email)) {
      setError("Please enter a valid work email.");
      return;
    }
    if (!consent) {
      setError("Please accept the consent to proceed.");
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: name,
          workEmail: email,
          companyName: "",
          honeypot: "",
          reachOutFor: "Product Demo",
          selectedProduct: "Compass",
          source: "try-compass-modal",
          consent,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || "Failed to submit. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!open) return null;

  const handleOverlayClose = () => {
    setError(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={handleOverlayClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[480px] rounded-[20px] border border-white/10 bg-[#0a0a0a] p-6 sm:p-7 shadow-2xl relative overflow-hidden"
      >
        {/* subtle orange glow like image */}
        <div className="pointer-events-none absolute -top-20 -right-20 w-56 h-56 bg-orange-500/10 rounded-full blur-3xl" />

        <button
          type="button"
          onClick={handleOverlayClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <>
            <div className="flex items-start gap-3 pr-8">
              <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                <Compass className="w-4.5 h-4.5 text-orange-400" />
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-white tracking-tight">Try Compass</h3>
                <p className="mt-1.5 text-[13px] text-slate-400 leading-relaxed">
                  Get hands-on with Compass — enter your work email and name to request trial access and see applicant
                  risk data before you price the policy.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Full Name</label>
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 focus-within:border-orange-500/60 focus-within:bg-orange-500/[0.04] transition-colors">
                  <User className="w-4 h-4 text-slate-500 shrink-0" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full bg-transparent outline-none text-sm text-white placeholder:text-slate-600"
                    autoFocus
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Work Email</label>
                <div className="flex items-center gap-2 rounded-xl border border-orange-500/60 bg-zinc-900 px-3 py-2.5 focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500 transition-colors">
                  <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full bg-transparent outline-none text-sm text-white placeholder:text-slate-600"
                  />
                </div>
              </div>

              <label className="flex items-start gap-2 cursor-pointer pt-1">
                <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1 accent-orange-500 w-3.5 h-3.5 rounded" />
                <span className="text-xs text-slate-400 leading-relaxed">I agree to be contacted about my Compass trial and follow-up from Risknox. Unsubscribe anytime.</span>
              </label>

              {error && <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">{error}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#ff7f2a] hover:bg-[#ff7d1c] text-white font-semibold text-sm shadow-[0_0_22px_rgba(255,127,54,0.45)] hover:shadow-[0_0_28px_rgba(255,127,54,0.6)] transition-all duration-200 active:scale-[0.98] disabled:opacity-60"
              >
                <Lock className="w-4 h-4" />
                {isSubmitting ? "Sending..." : "Request trial access"}
              </button>

              <p className="text-center text-[11px] text-slate-500">Takes ~10 seconds · No spam · Reviewed within 24 hours</p>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center mx-auto mb-3 shadow-[0_0_20px_rgba(249,115,22,0.5)]">
              <Compass className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white">Request received!</h4>
            <p className="mt-1 text-sm text-slate-400 leading-relaxed">Thank you — our partnerships team will set up your Compass trial and get back within 24 hours.</p>
            <button
              type="button"
              onClick={handleOverlayClose}
              className="mt-5 inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-100 transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
