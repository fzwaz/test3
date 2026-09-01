"use client";

import React from "react";
import {
  Mail,
  Phone,
  MessageSquare,
  Users,
  ArrowUpRight,
  MapPin,
  Sparkles,
} from "lucide-react";

/**
 * Hero Component for the Contact Page (Dark Cyber Aesthetic).
 */
export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-transparent pt-28 sm:pt-32 lg:pt-36 pb-12 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Details Panel (6 cols) + Right Globe Orbit Visual (6 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* ========================================================================= */}
          {/* LEFT COLUMN: HEADLINE & CONTACT CARDS                                     */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start space-y-7">
            
            {/* Tag Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] font-extrabold tracking-wider uppercase rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CONTACT US</span>
            </div>

            {/* Main Hero Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Let&apos;s build a <br />
              stronger security <br />
              posture, <br />
              <span className="text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]">together.</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-lg">
              Have a question, need a product demo, or want to explore our custom GRC solutions? <br className="hidden sm:inline" />
              We&apos;d love to hear from you.
            </p>

            {/* Side-by-Side Quick Contact Cards (Email & Phone) - 2 cols on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 w-full pt-1">
              
              {/* Card 1: EMAIL US */}
              <a
                href="mailto:info@risknox.ai"
                className="group relative bg-[#090b10]/90 rounded-2xl border border-slate-800 p-4 sm:p-5 shadow-xl hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] hover:border-orange-500/50 backdrop-blur-xl transition-all duration-300 flex items-center justify-between min-w-0"
              >
                <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#1d120c] border border-[#3e2216] flex items-center justify-center text-orange-500 shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[10px] sm:text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">
                      EMAIL US
                    </span>
                    <span className="block text-xs sm:text-sm font-bold text-white group-hover:text-orange-400 transition-colors truncate">
                      info@risknox.ai
                    </span>
                  </div>
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-orange-400 group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </a>

              {/* Card 2: CALL US */}
              <a
                href="tel:+919947513687"
                className="group relative bg-[#090b10]/90 rounded-2xl border border-slate-800 p-4 sm:p-5 shadow-xl hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] hover:border-orange-500/50 backdrop-blur-xl transition-all duration-300 flex items-center justify-between min-w-0"
              >
                <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#1d120c] border border-[#3e2216] flex items-center justify-center text-orange-500 shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[10px] sm:text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">
                      CALL US
                    </span>
                    <span className="block text-xs sm:text-sm font-bold text-white group-hover:text-orange-400 transition-colors truncate">
                      +91 9947513687
                    </span>
                  </div>
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-orange-400 group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </a>

            </div>

          </div>


          {/* ========================================================================= */}
          {/* RIGHT COLUMN: GLOBAL NETWORK ORBIT                                        */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center w-full">
            
            {/* Orbital Globe Canvas Container */}
            <div className="relative w-full aspect-square max-w-[500px] flex items-center justify-center">
              
              {/* Outer Dashed Orbital Ring */}
              <div className="absolute inset-4 rounded-full border border-dashed border-slate-800/90 animate-[spin_60s_linear_infinite] pointer-events-none" />
              <div className="absolute inset-16 rounded-full border border-slate-800/40 pointer-events-none" />

              {/* Glowing Accent Dots on Orbit Ring */}
              <div className="absolute top-[8%] right-[22%] w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_12px_#f97316]" />
              <div className="absolute left-[5%] top-[48%] w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_12px_#f97316]" />
              <div className="absolute right-[5%] bottom-[35%] w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_12px_#f97316]" />

              {/* Floating Orbit Node Badges (4 Corners) */}
              
              {/* Top Left: Chat Icon Badge */}
              <div className="absolute top-[10%] left-[10%] sm:top-[12%] sm:left-[12%] z-20 group cursor-pointer transition-transform hover:scale-110">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#0d1017] border border-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center justify-center text-orange-400 group-hover:border-orange-500/60 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all">
                  <MessageSquare className="w-6 h-6" strokeWidth={1.75} />
                </div>
              </div>

              {/* Top Right: Email Icon Badge */}
              <div className="absolute top-[10%] right-[10%] sm:top-[12%] sm:right-[12%] z-20 group cursor-pointer transition-transform hover:scale-110">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#0d1017] border border-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center justify-center text-orange-400 group-hover:border-orange-500/60 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all">
                  <Mail className="w-6 h-6" strokeWidth={1.75} />
                </div>
              </div>

              {/* Bottom Left: Phone Icon Badge */}
              <div className="absolute bottom-[22%] left-[10%] sm:bottom-[24%] sm:left-[12%] z-20 group cursor-pointer transition-transform hover:scale-110">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#0d1017] border border-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center justify-center text-orange-400 group-hover:border-orange-500/60 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all">
                  <Phone className="w-6 h-6" strokeWidth={1.75} />
                </div>
              </div>

              {/* Bottom Right: Users Badge */}
              <div className="absolute bottom-[22%] right-[10%] sm:bottom-[24%] sm:right-[12%] z-20 group cursor-pointer transition-transform hover:scale-110">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#0d1017] border border-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center justify-center text-orange-400 group-hover:border-orange-500/60 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all">
                  <Users className="w-6 h-6" strokeWidth={1.75} />
                </div>
              </div>

              {/* Central Vector World Map SVG */}
              <div className="relative w-[78%] h-[78%] flex items-center justify-center">
                
                {/* Dotted Map Graphic */}
                <svg
                  viewBox="0 0 1000 500"
                  className="w-full h-auto opacity-50 filter contrast-125"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Stylized Dotted World Map Base */}
                  <g fill="#475569" opacity="0.65">
                    {/* North America */}
                    <circle cx="200" cy="140" r="3" />
                    <circle cx="220" cy="130" r="3" />
                    <circle cx="240" cy="150" r="3" />
                    <circle cx="210" cy="170" r="3" />
                    <circle cx="250" cy="180" r="3" />
                    <circle cx="230" cy="200" r="3" />
                    <circle cx="260" cy="160" r="3" />
                    <circle cx="280" cy="140" r="3" />
                    {/* South America */}
                    <circle cx="320" cy="300" r="3" />
                    <circle cx="340" cy="330" r="3" />
                    <circle cx="330" cy="360" r="3" />
                    <circle cx="350" cy="380" r="3" />
                    {/* Europe */}
                    <circle cx="500" cy="130" r="3" />
                    <circle cx="520" cy="120" r="3" />
                    <circle cx="540" cy="140" r="3" />
                    <circle cx="510" cy="150" r="3" />
                    <circle cx="530" cy="160" r="3" />
                    {/* Africa */}
                    <circle cx="520" cy="240" r="3" />
                    <circle cx="540" cy="270" r="3" />
                    <circle cx="550" cy="310" r="3" />
                    <circle cx="530" cy="330" r="3" />
                    {/* Asia */}
                    <circle cx="680" cy="150" r="3" />
                    <circle cx="720" cy="140" r="3" />
                    <circle cx="750" cy="170" r="3" />
                    <circle cx="710" cy="200" r="3" />
                    <circle cx="740" cy="230" r="3" />
                    <circle cx="780" cy="210" r="3" />
                    <circle cx="810" cy="180" r="3" />
                    {/* Middle East & India */}
                    <circle cx="600" cy="210" r="3" />
                    <circle cx="630" cy="230" r="3" />
                    <circle cx="660" cy="250" r="3" />
                    <circle cx="690" cy="270" r="3" />
                    {/* Australia */}
                    <circle cx="820" cy="350" r="3" />
                    <circle cx="850" cy="370" r="3" />
                    <circle cx="840" cy="390" r="3" />
                  </g>
                </svg>

                {/* World Map Image SVG Overlay */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
                  alt="World Map Dotted Vector"
                  className="absolute inset-0 w-full h-full object-contain opacity-20 filter invert contrast-200"
                />

                {/* Location Glowing Pin Markers */}
                <div className="absolute top-[35%] left-[28%] text-orange-500 animate-bounce">
                  <MapPin className="w-5 h-5 fill-orange-500 text-black drop-shadow-[0_0_8px_#f97316]" />
                </div>
                <div className="absolute top-[28%] right-[42%] text-orange-500 animate-bounce delay-100">
                  <MapPin className="w-5 h-5 fill-orange-500 text-black drop-shadow-[0_0_8px_#f97316]" />
                </div>
                <div className="absolute bottom-[36%] right-[25%] text-orange-500 animate-bounce delay-300">
                  <MapPin className="w-5 h-5 fill-orange-500 text-black drop-shadow-[0_0_8px_#f97316]" />
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;

