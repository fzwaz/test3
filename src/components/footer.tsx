"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const navColumns = [
  {
    heading: "PLATFORM",
    links: [
      { label: "Pulse", href: "https://pulse.risknox.ai", external: true },
      { label: "Fortress", href: "#fortress" },
      { label: "Compass", href: "https://compass.risknox.ai", external: true },
      { label: "Accord", href: "https://accord.risknox.ai", external: true },
      { label: "DMARC Monitoring", href: "/platform/dmarc-monitoring" },
    ],
  },
  {
    heading: "COMPLIANCE",
    links: [
      { label: "ISO 27001", href: "#iso27001" },
      { label: "SOC 2", href: "#soc2" },
      { label: "DPDPA Mapping", href: "#dpdpa" },
      { label: "Build Your GRC", href: "#grc" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    heading: "COMPANY",
    links: [
      { label: "Why Risknox", href: "#why" },
      { label: "About", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Resources", href: "#resources" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "PARTNERS",
    links: [
      { label: "Become a Partner", href: "#partner" },
      { label: "Try Compass", href: "#compass" },
    ],
  },
  {
    heading: "ACCOUNT",
    links: [
      { label: "Sign up", href: "/signup" },
      { label: "Log in", href: "/login" },
      { label: "My Risknox", href: "/my-risknox" },
    ],
  },
];

const offices = [
  { city: "Kochi", country: "India" },
  { city: "Thiruvananthapuram", country: "India" },
  { city: "Al Khobar", country: "Saudi Arabia" },
  { city: "Bahrain", country: "Bahrain" },
];

export default function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-white/[0.07] w-full relative z-20">
      {/* ── Main Grid ── */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-16">

          {/* ── Left: Brand Block ── */}
          <div className="space-y-5">
            {/* Logo + Name */}
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/icon.png" alt="Risknox Logo" width={26} height={26} className="object-contain" />
              <span className="text-white font-bold text-lg tracking-tight">Risknox.ai</span>
            </Link>

            {/* Tagline */}
            <p className="text-slate-400 text-sm leading-relaxed max-w-[230px]">
              Full-stack cyber risk intelligence for the teams who stay secure.
            </p>

            {/* Offices */}
            <div className="space-y-2 pt-1">
              <p className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-widest">
                Offices
              </p>
              <div className="space-y-1">
                {offices.map((o) => (
                  <p key={o.city} className="text-xs text-slate-400">
                    <span className="text-slate-300">{o.city}</span>
                    <span className="text-slate-600 mx-1">·</span>
                    <span>{o.country}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg border border-white/[0.1] bg-white/[0.03] hover:border-[#f36734]/60 hover:bg-[#f36734]/10 flex items-center justify-center text-slate-400 hover:text-[#f36734] transition-all duration-200"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="w-9 h-9 rounded-lg border border-white/[0.1] bg-white/[0.03] hover:border-[#f36734]/60 hover:bg-[#f36734]/10 flex items-center justify-center text-slate-400 hover:text-[#f36734] transition-all duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg border border-white/[0.1] bg-white/[0.03] hover:border-[#f36734]/60 hover:bg-[#f36734]/10 flex items-center justify-center text-slate-400 hover:text-[#f36734] transition-all duration-200"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Right: Nav Columns ── */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {navColumns.map((col) => (
              <div key={col.heading} className="space-y-4">
                <p className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-widest">
                  {col.heading}
                </p>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {"external" in link && link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-slate-400 hover:text-white transition-colors duration-150"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-slate-400 hover:text-white transition-colors duration-150"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-xs text-slate-500">
            © 2026 Risknox.ai. All rights reserved.
          </p>

          {/* Legal links + Systems Status */}
          <div className="flex items-center gap-6">
            <Link href="#privacy" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
