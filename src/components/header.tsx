"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ShieldCheck,
  FileCheck,
  Database,
  Layers,
  Sparkles,
  CheckCircle2,
  PhoneCall,
  SlidersHorizontal,
  Menu,
  X,
  ArrowRight,
  ShieldAlert,
  Activity,
  Compass,
  Scale,
  Cpu,
  Lock,
  Globe2,
} from "lucide-react";

interface HeaderProps {
  currentPath?: string;
}

export default function Header({ currentPath }: HeaderProps) {
  const routerPathname = usePathname();
  const pathname = routerPathname || currentPath || "/";
  const [platformOpen, setPlatformOpen] = useState(false);
  const [complianceOpen, setComplianceOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobilePlatformExpanded, setMobilePlatformExpanded] = useState(false);
  const [mobileComplianceExpanded, setMobileComplianceExpanded] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const platformTimerRef = useRef<NodeJS.Timeout | null>(null);
  const complianceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Hover handlers with 180ms leave delay
  const handlePlatformEnter = () => {
    if (platformTimerRef.current) clearTimeout(platformTimerRef.current);
    setComplianceOpen(false);
    setPlatformOpen(true);
  };

  const handlePlatformLeave = () => {
    platformTimerRef.current = setTimeout(() => {
      setPlatformOpen(false);
    }, 180);
  };

  const handleComplianceEnter = () => {
    if (complianceTimerRef.current) clearTimeout(complianceTimerRef.current);
    setPlatformOpen(false);
    setComplianceOpen(true);
  };

  const handleComplianceLeave = () => {
    complianceTimerRef.current = setTimeout(() => {
      setComplianceOpen(false);
    }, 180);
  };

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setPlatformOpen(false);
        setComplianceOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      if (platformTimerRef.current) clearTimeout(platformTimerRef.current);
      if (complianceTimerRef.current) clearTimeout(complianceTimerRef.current);
    };
  }, []);

  const closeAll = () => {
    setPlatformOpen(false);
    setComplianceOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-4 left-0 right-0 z-50 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300"
    >
      {/* Outer Pill Container */}
      <div className="relative">
        <div className="h-14 md:h-16 px-4 md:px-6 rounded-xl md:rounded-2xl bg-white/[0.04] backdrop-blur-2xl backdrop-saturate-150 border border-white/[0.12] shadow-[0_16px_36px_rgba(0,0,0,0.6)] flex items-center justify-between transition-all duration-200">
          {/* 1. Left: Logo */}
          <Link
            href="/"
            onClick={closeAll}
            className="group flex items-center gap-2.5 select-none flex-shrink-0"
          >
            {/* Transparent logo icon */}
            <div className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center flex-shrink-0 group-hover:opacity-90 transition-opacity">
              <Image
                src="/icon.png"
                alt="Risknox"
                width={36}
                height={36}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <span className="font-bold tracking-tight text-white text-lg md:text-xl transition-colors group-hover:text-orange-100">
              Risknox
            </span>
          </Link>

          {/* 2. Center: Desktop Nav Links (hidden below md) */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5 text-[11px] lg:text-xs">
            {/* Home Link */}
            <Link
              href="/"
              onClick={closeAll}
              className={`px-2.5 py-1.5 rounded-lg transition-colors font-medium ${
                pathname === "/"
                  ? "text-orange-400 font-semibold"
                  : "text-slate-300 hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              Home
            </Link>

            {/* Platform Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={handlePlatformEnter}
              onMouseLeave={handlePlatformLeave}
            >
              <button
                type="button"
                onClick={() => setPlatformOpen((prev) => !prev)}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg transition-all duration-200 cursor-pointer ${
                  platformOpen || pathname.startsWith("/platform")
                    ? "text-orange-400 bg-white/[0.1] shadow-[0_0_12px_rgba(249,115,22,0.3)]"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.08]"
                }`}
                aria-expanded={platformOpen}
              >
                <span>Platform</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    platformOpen ? "rotate-180 text-orange-400" : ""
                  }`}
                />
              </button>

              {/* Platform Dropdown Content */}
              {platformOpen && (
                <div className="absolute top-full mt-3 -left-4 w-[330px] rounded-2xl bg-[#0c0d12]/95 backdrop-blur-2xl border border-white/[0.12] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_20px_rgba(249,115,22,0.12)] animate-in fade-in slide-in-from-top-2 overflow-hidden z-50">
                  {/* Ambient Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-[40px] pointer-events-none" />

                  <div className="space-y-1 relative z-10">
                    {/* Fortress */}
                    <Link
                      href="/platform/fortress"
                      onClick={closeAll}
                      className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] transition-all"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#231711] border border-[#3e2216] flex items-center justify-center flex-shrink-0 group-hover:border-orange-500/50 group-hover:bg-[#2c1d15] transition-all">
                        <ShieldAlert className="w-4 h-4 text-orange-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-xs group-hover:text-orange-400 transition-colors flex items-center gap-1.5">
                          Fortress
                        </div>
                        <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                          Attack Surface Management
                        </p>
                      </div>
                    </Link>

                    {/* Pulse */}
                    <Link
                      href="/platform/pulse"
                      onClick={closeAll}
                      className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] transition-all"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#231711] border border-[#3e2216] flex items-center justify-center flex-shrink-0 group-hover:border-orange-500/50 group-hover:bg-[#2c1d15] transition-all">
                        <Activity className="w-4 h-4 text-orange-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-xs group-hover:text-orange-400 transition-colors flex items-center gap-1.5">
                          Pulse
                        </div>
                        <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                          Continuous Monitoring & Detection
                        </p>
                      </div>
                    </Link>

                    {/* Compass */}
                    <Link
                      href="/platform/compass"
                      onClick={closeAll}
                      className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] transition-all"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#231711] border border-[#3e2216] flex items-center justify-center flex-shrink-0 group-hover:border-orange-500/50 group-hover:bg-[#2c1d15] transition-all">
                        <Compass className="w-4 h-4 text-orange-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-xs group-hover:text-orange-400 transition-colors flex items-center gap-1.5">
                          Compass
                        </div>
                        <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                          Governance, Risk & Compliance
                        </p>
                      </div>
                    </Link>

                    {/* Accord */}
                    <Link
                      href="/platform/accord"
                      onClick={closeAll}
                      className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] transition-all"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#231711] border border-[#3e2216] flex items-center justify-center flex-shrink-0 group-hover:border-orange-500/50 group-hover:bg-[#2c1d15] transition-all">
                        <Scale className="w-4 h-4 text-orange-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-xs group-hover:text-orange-400 transition-colors flex items-center gap-1.5">
                          Accord
                        </div>
                        <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                          Risk Quantification & Analytics
                        </p>
                      </div>
                    </Link>
                  </div>

                  {/* Bottom link */}
                  <div className="mt-2 pt-2 border-t border-white/[0.08]">
                    <Link
                      href="/platform"
                      onClick={closeAll}
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-[11px] text-orange-400 hover:text-orange-300 hover:bg-orange-500/10 transition-all font-medium"
                    >
                      <span>Explore Full Platform Suite</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Compliance Mega Menu Trigger */}
            <div
              className="static"
              onMouseEnter={handleComplianceEnter}
              onMouseLeave={handleComplianceLeave}
            >
              <button
                type="button"
                onClick={() => setComplianceOpen((prev) => !prev)}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg transition-all duration-200 cursor-pointer ${
                  complianceOpen || pathname.startsWith("/compliance")
                    ? "text-orange-400 bg-white/[0.1] shadow-[0_0_12px_rgba(249,115,22,0.3)]"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.08]"
                }`}
                aria-expanded={complianceOpen}
              >
                <span>Compliance</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    complianceOpen ? "rotate-180 text-orange-400" : ""
                  }`}
                />
              </button>
            </div>

            {/* Solutions Link */}
            <Link
              href="/solution"
              onClick={closeAll}
              className={`relative px-2.5 py-1.5 rounded-lg transition-colors font-medium ${
                pathname.startsWith("/solution")
                  ? "text-orange-400 font-semibold after:content-[''] after:absolute after:-bottom-[18px] after:left-1/2 after:-translate-x-1/2 after:w-7 after:h-[2px] after:bg-orange-500 after:rounded-full after:shadow-[0_0_8px_#f97316]"
                  : "text-slate-300 hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              Solutions
            </Link>

            {/* Partners */}
            <Link
              href="/partner"
              onClick={closeAll}
              className={`relative px-2.5 py-1.5 rounded-lg transition-colors font-medium ${
                pathname.startsWith("/partner")
                  ? "text-orange-400 font-semibold after:content-[''] after:absolute after:-bottom-[18px] after:left-1/2 after:-translate-x-1/2 after:w-7 after:h-[2px] after:bg-orange-500 after:rounded-full after:shadow-[0_0_8px_#f97316]"
                  : "text-slate-300 hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              Partners
            </Link>

            {/* Resources */}
            <Link
              href="/resources"
              onClick={closeAll}
              className={`px-2.5 py-1.5 rounded-lg transition-colors font-medium ${
                pathname.startsWith("/resource")
                  ? "text-orange-400 font-semibold"
                  : "text-slate-300 hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              Resources
            </Link>

            {/* Why Risknox */}
            <Link
              href="/why-risknox"
              onClick={closeAll}
              className={`px-2.5 py-1.5 rounded-lg transition-colors font-medium ${
                pathname.startsWith("/why")
                  ? "text-orange-400 font-semibold"
                  : "text-slate-300 hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              Why Risknox
            </Link>

            {/* Under attack? urgent link */}
            <Link
              href="/incident-response"
              onClick={closeAll}
              className="px-2.5 py-1.5 rounded-lg text-orange-400 font-semibold hover:text-orange-300 hover:bg-orange-500/10 transition-all flex items-center gap-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span>Under attack?</span>
            </Link>
          </nav>

          {/* 3. Right: CTA Button (Desktop) & Hamburger (Mobile) */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA Button */}
            <Link
              href="/contact"
              onClick={closeAll}
              className="hidden sm:inline-flex items-center justify-center gap-2 px-4 md:px-5 py-2 text-xs md:text-sm font-semibold text-white bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500 hover:border-orange-400 rounded-full shadow-[0_0_18px_rgba(249,115,22,0.45)] hover:shadow-[0_0_24px_rgba(249,115,22,0.65)] transition-all duration-200 active:scale-95 backdrop-blur-md cursor-pointer"
            >
              <span>Contact sales</span>
              <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.08] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-orange-400" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Compliance Mega Menu Container (Desktop Full Width) */}
        {complianceOpen && (
          <div
            onMouseEnter={handleComplianceEnter}
            onMouseLeave={handleComplianceLeave}
            className="absolute top-full mt-3 left-0 right-0 rounded-2xl bg-[#080808]/98 backdrop-blur-3xl border border-white/[0.12] shadow-[0_24px_60px_-12px_rgba(0,0,0,0.9),0_0_35px_-5px_rgba(249,115,22,0.2)] animate-in fade-in slide-in-from-top-2 overflow-hidden z-50"
          >
            {/* Dual Ambient Glows */}
            <div className="absolute -top-24 left-10 w-96 h-96 bg-orange-500/12 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -top-24 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 p-6 md:p-8 space-y-6">
              {/* Top Header Section */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                <div className="space-y-1.5 max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-[11px] font-medium">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Compliance Hub</span>
                    <span className="text-white/40">•</span>
                    <span className="font-mono text-[10px] text-orange-300">
                      Fortress + Accord Powered
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                    Get audit-ready — without hiring a GRC team.
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400">
                    Continuous automated evidence collection powered by Fortress monitoring & Accord governance workflows.
                  </p>
                </div>

                <Link
                  href="/compliance"
                  onClick={closeAll}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#141416] hover:bg-[#1c1c20] border border-white/[0.1] text-xs font-semibold text-white transition-all self-start md:self-center hover:border-orange-500/50"
                >
                  <span>Explore Compliance Hub</span>
                  <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
                </Link>
              </div>

              {/* Middle Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left (col-span-8): Primary Certification Frameworks */}
                <div className="lg:col-span-8 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-orange-400" />
                    <span>Primary Certification Frameworks</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                    {/* ISO 27001 */}
                    <Link
                      href="/compliance/iso-27001"
                      onClick={closeAll}
                      className="group p-4 rounded-xl bg-[#111113] border border-[#202024] hover:border-orange-500/40 hover:bg-[#161619] transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-[#f97316]">
                            <ShieldCheck className="w-4 h-4" />
                          </div>
                          <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20">
                            Fast Track
                          </span>
                        </div>
                        <h4 className="font-bold text-white text-sm group-hover:text-orange-400 transition-colors">
                          ISO 27001 Readiness
                        </h4>
                        <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                          End-to-end ISMS policy engine and real-time gap remediation.
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-orange-400 font-medium">
                        <span>Get audit-ready</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </Link>

                    {/* SOC 2 */}
                    <Link
                      href="/compliance/soc-2"
                      onClick={closeAll}
                      className="group p-4 rounded-xl bg-[#111113] border border-[#202024] hover:border-orange-500/40 hover:bg-[#161619] transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-[#3b82f6]">
                            <FileCheck className="w-4 h-4" />
                          </div>
                          <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            Type I & II
                          </span>
                        </div>
                        <h4 className="font-bold text-white text-sm group-hover:text-orange-400 transition-colors">
                          SOC 2 Readiness
                        </h4>
                        <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                          Automated trust service criteria tests and auditor-ready evidence vault.
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-blue-400 group-hover:text-orange-400 font-medium transition-colors">
                        <span>Get audit-ready</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </Link>

                    {/* DPDPA */}
                    <Link
                      href="/compliance/dpdpa-data-mapping"
                      onClick={closeAll}
                      className="group p-4 rounded-xl bg-[#111113] border border-[#202024] hover:border-orange-500/40 hover:bg-[#161619] transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-[#a855f7]">
                            <Database className="w-4 h-4" />
                          </div>
                          <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
                            Accord Module
                          </span>
                        </div>
                        <h4 className="font-bold text-white text-sm group-hover:text-orange-400 transition-colors">
                          DPDPA Data Flow Mapping
                        </h4>
                        <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                          Automated data principal consent & lineage discovery engine.
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-purple-400 group-hover:text-orange-400 font-medium transition-colors">
                        <span>Get audit-ready</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Right (col-span-4): More Frameworks */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    <Layers className="w-4 h-4 text-blue-400" />
                    <span>More Frameworks</span>
                  </div>

                  <div className="space-y-2">
                    {/* NIST CSF 2.0 */}
                    <Link
                      href="/compliance/nist"
                      onClick={closeAll}
                      className="group flex items-center justify-between p-2.5 rounded-xl bg-[#111113] border border-[#202024] hover:border-orange-500/35 hover:bg-[#151518] transition-all"
                    >
                      <div className="flex items-center gap-2.5">
                        <Lock className="w-4 h-4 text-slate-400 group-hover:text-orange-400 transition-colors" />
                        <div>
                          <div className="text-xs font-semibold text-white group-hover:text-orange-400 transition-colors">
                            NIST CSF 2.0
                          </div>
                          <div className="text-[10px] text-slate-400">
                            Identify, Protect, Detect, Respond, Recover
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-white transition-colors" />
                    </Link>

                    {/* GDPR Alignment */}
                    <Link
                      href="/compliance/gdpr"
                      onClick={closeAll}
                      className="group flex items-center justify-between p-2.5 rounded-xl bg-[#111113] border border-[#202024] hover:border-orange-500/35 hover:bg-[#151518] transition-all"
                    >
                      <div className="flex items-center gap-2.5">
                        <Globe2 className="w-4 h-4 text-slate-400 group-hover:text-orange-400 transition-colors" />
                        <div>
                          <div className="text-xs font-semibold text-white group-hover:text-orange-400 transition-colors">
                            GDPR Alignment
                          </div>
                          <div className="text-[10px] text-slate-400">
                            EU privacy controls and DPIA registers
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-white transition-colors" />
                    </Link>

                    {/* PCI DSS v4.0 */}
                    <Link
                      href="/compliance/pci-dss"
                      onClick={closeAll}
                      className="group flex items-center justify-between p-2.5 rounded-xl bg-[#111113] border border-[#202024] hover:border-orange-500/35 hover:bg-[#151518] transition-all"
                    >
                      <div className="flex items-center gap-2.5">
                        <ShieldAlert className="w-4 h-4 text-slate-400 group-hover:text-orange-400 transition-colors" />
                        <div>
                          <div className="text-xs font-semibold text-white group-hover:text-orange-400 transition-colors">
                            PCI DSS v4.0
                          </div>
                          <div className="text-[10px] text-slate-400">
                            Cardholder data environment protection
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-white transition-colors" />
                    </Link>

                    {/* EU AI Act */}
                    <Link
                      href="/compliance/eu-ai-act"
                      onClick={closeAll}
                      className="group flex items-center justify-between p-2.5 rounded-xl bg-[#111113] border border-[#202024] hover:border-orange-500/35 hover:bg-[#151518] transition-all"
                    >
                      <div className="flex items-center gap-2.5">
                        <Cpu className="w-4 h-4 text-slate-400 group-hover:text-orange-400 transition-colors" />
                        <div>
                          <div className="text-xs font-semibold text-white group-hover:text-orange-400 transition-colors">
                            EU AI Act
                          </div>
                          <div className="text-[10px] text-slate-400">
                            Model risk classification & transparency
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-white transition-colors" />
                    </Link>
                  </div>

                  {/* Custom builder box */}
                  <Link
                    href="/compliance/custom-builder"
                    onClick={closeAll}
                    className="block p-2.5 rounded-xl border border-dashed border-white/20 hover:border-orange-500/60 bg-white/[0.02] hover:bg-orange-500/[0.04] transition-all text-[11px] text-slate-300"
                  >
                    Custom or local frameworks?{" "}
                    <span className="text-orange-400 font-semibold hover:underline">
                      Use Custom Builder →
                    </span>
                  </Link>
                </div>
              </div>

              {/* Bottom Action Bar */}
              <div className="pt-4 border-t border-white/[0.08] bg-gradient-to-r from-orange-500/[0.04] to-blue-500/[0.04] -mx-6 -mb-6 md:-mx-8 md:-mb-8 p-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Self-serve automated builder or full enterprise managed rollout.</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <Link
                    href="/contact/rollout"
                    onClick={closeAll}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-[#141417] hover:bg-[#1e1e23] border border-white/10 text-xs font-medium text-white transition-all"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
                    <span>Talk to us about a managed rollout</span>
                  </Link>

                  <Link
                    href="/grc-builder"
                    onClick={closeAll}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-xs font-semibold text-white shadow-[0_0_16px_rgba(249,115,22,0.4)] transition-all active:scale-95"
                  >
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                    <span>Build your GRC program</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 4. Mobile Menu Overlay & Drawer (below md) */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 rounded-2xl bg-black/95 backdrop-blur-2xl border border-white/[0.12] p-4 max-h-[85vh] overflow-y-auto shadow-[0_20px_50px_rgba(0,0,0,0.9)] animate-in fade-in slide-in-from-top-2 space-y-3 z-50">
          {/* Main Mobile Links */}
          <Link
            href="/"
            onClick={closeAll}
            className="block px-3.5 py-2 rounded-lg text-sm font-semibold text-orange-400 bg-white/[0.04]"
          >
            Home
          </Link>

          {/* Platform Accordion */}
          <div className="rounded-xl bg-white/[0.02] border border-white/[0.08] overflow-hidden">
            <button
              type="button"
              onClick={() => setMobilePlatformExpanded((prev) => !prev)}
              className="w-full flex items-center justify-between p-3 text-sm font-semibold text-white hover:text-orange-400 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-orange-400" />
                <span>Platform</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobilePlatformExpanded ? "rotate-180 text-orange-400" : ""
                }`}
              />
            </button>

            {mobilePlatformExpanded && (
              <div className="px-3 pb-3 space-y-2 pt-1 border-t border-white/[0.06]">
                <Link
                  href="/platform/fortress"
                  onClick={closeAll}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/[0.06] text-xs text-slate-300"
                >
                  <ShieldAlert className="w-4 h-4 text-orange-400" />
                  <div>
                    <div className="font-semibold text-white">Fortress</div>
                    <div className="text-[10px] text-slate-400">Attack Surface Management</div>
                  </div>
                </Link>
                <Link
                  href="/platform/pulse"
                  onClick={closeAll}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/[0.06] text-xs text-slate-300"
                >
                  <Activity className="w-4 h-4 text-orange-400" />
                  <div>
                    <div className="font-semibold text-white">Pulse</div>
                    <div className="text-[10px] text-slate-400">Continuous Monitoring & Detection</div>
                  </div>
                </Link>
                <Link
                  href="/platform/compass"
                  onClick={closeAll}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/[0.06] text-xs text-slate-300"
                >
                  <Compass className="w-4 h-4 text-orange-400" />
                  <div>
                    <div className="font-semibold text-white">Compass</div>
                    <div className="text-[10px] text-slate-400">Governance, Risk & Compliance</div>
                  </div>
                </Link>
                <Link
                  href="/platform/accord"
                  onClick={closeAll}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/[0.06] text-xs text-slate-300"
                >
                  <Scale className="w-4 h-4 text-orange-400" />
                  <div>
                    <div className="font-semibold text-white">Accord</div>
                    <div className="text-[10px] text-slate-400">Risk Quantification & Analytics</div>
                  </div>
                </Link>

                <Link
                  href="/platform"
                  onClick={closeAll}
                  className="block text-center py-2 rounded-lg bg-orange-500/10 text-orange-400 font-semibold text-xs border border-orange-500/20"
                >
                  Explore Full Platform Suite →
                </Link>
              </div>
            )}
          </div>

          {/* Compliance Accordion */}
          <div className="rounded-xl bg-white/[0.02] border border-white/[0.08] overflow-hidden">
            <button
              type="button"
              onClick={() => setMobileComplianceExpanded((prev) => !prev)}
              className="w-full flex items-center justify-between p-3 text-sm font-semibold text-white hover:text-orange-400 transition-colors"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-orange-400" />
                <span>Compliance Hub</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileComplianceExpanded ? "rotate-180 text-orange-400" : ""
                }`}
              />
            </button>

            {mobileComplianceExpanded && (
              <div className="px-3 pb-3 space-y-2 pt-1 border-t border-white/[0.06]">
                <div className="p-2.5 rounded-lg bg-orange-500/10 border border-orange-500/25 text-xs text-slate-200 space-y-1">
                  <div className="font-bold text-white flex items-center gap-1.5 text-orange-300">
                    <Sparkles className="w-3.5 h-3.5" />
                    Get audit-ready fast
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Continuous automated evidence collection for ISO 27001, SOC 2, DPDPA and more.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-1.5 pt-1">
                  <Link
                    href="/compliance/iso-27001"
                    onClick={closeAll}
                    className="p-2 rounded-lg bg-white/[0.03] text-xs text-white font-medium hover:text-orange-400 flex items-center justify-between"
                  >
                    <span>ISO 27001 Readiness</span>
                    <span className="text-[10px] text-orange-400">Fast Track</span>
                  </Link>
                  <Link
                    href="/compliance/soc-2"
                    onClick={closeAll}
                    className="p-2 rounded-lg bg-white/[0.03] text-xs text-white font-medium hover:text-orange-400 flex items-center justify-between"
                  >
                    <span>SOC 2 Readiness</span>
                    <span className="text-[10px] text-blue-400">Type I & II</span>
                  </Link>
                  <Link
                    href="/compliance/dpdpa-data-mapping"
                    onClick={closeAll}
                    className="p-2 rounded-lg bg-white/[0.03] text-xs text-white font-medium hover:text-orange-400 flex items-center justify-between"
                  >
                    <span>DPDPA Data Flow Mapping</span>
                    <span className="text-[10px] text-purple-400">Accord Module</span>
                  </Link>
                  <Link
                    href="/compliance"
                    onClick={closeAll}
                    className="p-2 rounded-lg bg-orange-500/10 text-xs text-orange-400 font-semibold text-center mt-1"
                  >
                    View All Compliance Frameworks →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/solution"
            onClick={closeAll}
            className={`block px-3.5 py-2 rounded-lg text-sm transition-colors ${
              pathname.startsWith("/solution")
                ? "text-orange-400 font-semibold bg-orange-500/10"
                : "text-slate-300 hover:text-white hover:bg-white/[0.08]"
            }`}
          >
            Solutions
          </Link>
          <Link
            href="/partner"
            onClick={closeAll}
            className={`block px-3.5 py-2 rounded-lg text-sm transition-colors ${
              pathname.startsWith("/partner")
                ? "text-orange-400 font-semibold bg-orange-500/10"
                : "text-slate-300 hover:text-white hover:bg-white/[0.08]"
            }`}
          >
            Partners
          </Link>
          <Link
            href="/resources"
            onClick={closeAll}
            className={`block px-3.5 py-2 rounded-lg text-sm transition-colors ${
              pathname.startsWith("/resource")
                ? "text-orange-400 font-semibold bg-orange-500/10"
                : "text-slate-300 hover:text-white hover:bg-white/[0.08]"
            }`}
          >
            Resources
          </Link>
          <Link
            href="/why-risknox"
            onClick={closeAll}
            className={`block px-3.5 py-2 rounded-lg text-sm transition-colors ${
              pathname.startsWith("/why")
                ? "text-orange-400 font-semibold bg-orange-500/10"
                : "text-slate-300 hover:text-white hover:bg-white/[0.08]"
            }`}
          >
            Why Risknox
          </Link>
          <Link
            href="/incident-response"
            onClick={closeAll}
            className="block px-3.5 py-2 rounded-lg text-sm font-semibold text-orange-400 hover:bg-orange-500/10"
          >
            Under attack?
          </Link>

          {/* Mobile Bottom Action CTAs */}
          <div className="pt-3 border-t border-white/[0.1] space-y-2">
            <Link
              href="/grc-builder"
              onClick={closeAll}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm shadow-[0_0_20px_rgba(249,115,22,0.4)]"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Build Your GRC Program</span>
            </Link>
            <Link
              href="/contact"
              onClick={closeAll}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.15] text-white font-semibold text-sm"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 text-orange-400" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
