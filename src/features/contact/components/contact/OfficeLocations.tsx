"use client";

import React from "react";

export interface OfficeLocationCard {
  id: string;
  title: string;
  addressLines: string[];
  imageSrc: string;
}

const OFFICE_CARDS: OfficeLocationCard[] = [
  {
    id: "kochi",
    title: "India – Kochi",
    addressLines: [
      "Floor 1, Integrated Startup Complex",
      "Kochi Tower 1, Kerala Technology",
      "Innovation Zone HMT Road, KINFRA",
      "Hi-Tech Park Industrial Area",
      "Kalamassery, Ernakulam,",
      "Kerala – 683503",
    ],
    imageSrc: "/img/kochi.png",
  },
  {
    id: "trivandrum",
    title: "India – Thiruvananthapuram",
    addressLines: [
      "Risknox.AI, Room No: 15, 1st floor,",
      "CSIR-NIIST Innovation centre,",
      "Industrial Estate P.O,",
      "Pappanamcode,",
      "Thiruvananthapuram,",
      "Kerala 695019",
    ],
    imageSrc: "/img/trivandrum.png",
  },
  {
    id: "saudi",
    title: "Saudi Arabia – Al Khobar",
    addressLines: [
      "4th Floor, YBA Kanoo Airlines Center",
      "King Abdul Aziz Street",
      "Al Khobar – 31952,",
      "Saudi Arabia",
    ],
    imageSrc: "/img/saudi.png",
  },
  {
    id: "bahrain",
    title: "Bahrain – Northern Governorate",
    addressLines: [
      "Office 31, Building 78, Avenue 23",
      "Saar – 527,",
      "Northern Governorate",
      "Kingdom of Bahrain",
    ],
    imageSrc: "/img/bahrain.png",
  },
];

/**
 * OfficeLocations Component.
 * Displays "OUR OFFICES - We're global, so you're covered." 4-card grid
 * with location building photography and full address details.
 */
export const OfficeLocations: React.FC = () => {
  return (
    <section className="py-16 bg-transparent border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center mb-12 space-y-3">
          <span className="text-[11px] font-extrabold tracking-widest text-orange-400 uppercase bg-orange-500/10 border border-orange-500/30 px-3.5 py-1 rounded-full">
            OUR OFFICES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            We&apos;re global, so <span className="text-orange-500 drop-shadow-[0_0_12px_rgba(249,115,22,0.5)]">you&apos;re covered.</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-lg mx-auto">
            Visit or reach out to our regional cybersecurity engineering centers.
          </p>
        </div>

        {/* 4-Card Office Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OFFICE_CARDS.map((office) => (
            <div
              key={office.id}
              className="bg-[#080a10]/90 border border-slate-800/90 hover:border-orange-500/50 rounded-[28px] p-5 shadow-2xl hover:shadow-[0_0_25px_rgba(249,115,22,0.12)] backdrop-blur-xl transition-all duration-300 flex flex-col group"
            >
              {/* Building Location Image */}
              <div className="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden mb-5 border border-slate-800 shadow-inner">
                <img
                  src={office.imageSrc}
                  alt={office.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
              </div>

              {/* Office Location Title */}
              <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:text-orange-400 transition-colors leading-snug mb-3">
                {office.title}
              </h3>

              {/* Address Lines */}
              <div className="text-xs text-slate-400 font-normal leading-relaxed space-y-0.5">
                {office.addressLines.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OfficeLocations;
