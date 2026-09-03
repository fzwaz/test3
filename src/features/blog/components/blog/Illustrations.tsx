import React from 'react';

/**
 * 3D Isometric Hero Shield Graphic Component.
 * Replicates the clean white 3D platform with glowing orange hexagon/shield shown in Image 1.
 */
export const HeroIsometric: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer Hexagonal Blueprint Grid Overlay */}
      <svg className="w-full max-w-[420px] h-auto drop-shadow-xl" viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background Grid Lines & Connecting Nodes */}
        <path d="M200 40 L340 120 L340 280 L200 360 L60 280 L60 120 Z" stroke="#F1F5F9" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d="M200 40 L200 360" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M60 120 L340 280" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M340 120 L60 280" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />

        {/* Decorative Floating Nodes */}
        <circle cx="95" cy="225" r="4.5" fill="#3B82F6" className="animate-pulse" />
        <circle cx="95" cy="225" r="9" stroke="#3B82F6" strokeWidth="1" opacity="0.4" />
        
        <circle cx="340" cy="205" r="4" fill="#F95722" />
        <circle cx="340" cy="205" r="8" stroke="#F95722" strokeWidth="1" opacity="0.3" />

        <circle cx="230" cy="140" r="3" fill="#F95722" />

        {/* Lower Isometric 3D Platform Layer 1 (White Shadowed Block) */}
        <path d="M200 240 L310 180 L200 120 L90 180 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
        <path d="M90 180 L200 240 L200 265 L90 205 Z" fill="#E2E8F0" />
        <path d="M310 180 L200 240 L200 265 L310 205 Z" fill="#CBD5E1" />

        {/* Upper Isometric 3D Platform Layer 2 (Glossy White Slab) */}
        <path d="M200 215 L320 150 L200 85 L80 150 Z" fill="#FFFFFF" filter="drop-shadow(0 15px 25px rgba(0,0,0,0.06))" />
        <path d="M80 150 L200 215 L200 232 L80 167 Z" fill="#F1F5F9" />
        <path d="M320 150 L200 215 L200 232 L320 167 Z" fill="#E2E8F0" />

        {/* Top Glowing 3D Orange Hex Shield Cube */}
        <g transform="translate(150, 45)">
          {/* Glowing Shadow */}
          <ellipse cx="50" cy="95" rx="35" ry="12" fill="#F95722" opacity="0.25" className="blur-sm" />
          
          {/* Orange Cube Top */}
          <path d="M50 15 L88 36 L50 57 L12 36 Z" fill="#FF7A4D" />
          
          {/* Orange Cube Left */}
          <path d="M12 36 L50 57 L50 98 L12 77 Z" fill="#F95722" />
          
          {/* Orange Cube Right */}
          <path d="M88 36 L50 57 L50 98 L88 77 Z" fill="#D94310" />
          
          {/* White Fortress Shield Emblem on Cube Front */}
          <path
            d="M50 48 C42 48 38 43 38 43 V65 C38 75 50 82 50 82 C50 82 62 75 62 65 V43 C62 43 58 48 50 48 Z"
            fill="white"
            fillOpacity="0.95"
          />
          <path
            d="M46 56 H54 M46 62 H52"
            stroke="#F95722"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
};

/**
 * Featured Post Isometric 3D Monitor & Financial Chart Visual.
 * Replicates Image 2 Featured Article Graphic.
 */
export const FeaturedIsometric: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg className="w-full max-w-[280px] h-auto" viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shadow base */}
        <ellipse cx="150" cy="200" rx="100" ry="25" fill="#F95722" opacity="0.08" className="blur-md" />

        {/* Isometric Base Stand */}
        <path d="M150 170 L210 135 L150 100 L90 135 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
        <path d="M90 135 L150 170 L150 180 L90 145 Z" fill="#F1F5F9" />
        <path d="M210 135 L150 170 L150 180 L210 145 Z" fill="#E2E8F0" />

        {/* 3D Monitor Panel */}
        <g transform="translate(30, 20)">
          {/* Screen Border */}
          <path d="M120 40 L230 100 L120 160 L10 100 Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
          {/* Inner Screen Display */}
          <path d="M120 48 L218 100 L120 152 L22 100 Z" fill="#FAFAFA" stroke="#F95722" strokeWidth="1" strokeOpacity="0.3" />
          
          {/* Financial Trend Line Chart (Orange Graph) */}
          <path
            d="M40 105 L70 90 L100 115 L140 75 L170 100 L200 80"
            stroke="#F95722"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Glowing chart points */}
          <circle cx="70" cy="90" r="3.5" fill="#F95722" />
          <circle cx="100" cy="115" r="3.5" fill="#F95722" />
          <circle cx="140" cy="75" r="4.5" fill="#F95722" stroke="white" strokeWidth="1.5" />
          <circle cx="170" cy="100" r="3.5" fill="#F95722" />
          <circle cx="200" cy="80" r="4.5" fill="#F95722" stroke="white" strokeWidth="1.5" />
        </g>

        {/* Floating 3D Cubes */}
        <path d="M230 70 L250 58 L230 46 L210 58 Z" fill="#FF7A4D" />
        <path d="M210 58 L230 70 L230 85 L210 73 Z" fill="#F95722" />
        <path d="M250 58 L230 70 L230 85 L250 73 Z" fill="#D94310" />

        <path d="M60 70 L75 60 L60 50 L45 60 Z" fill="#FFFFFF" stroke="#E2E8F0" />
        <path d="M45 60 L60 70 L60 80 L45 70 Z" fill="#F1F5F9" />
        <path d="M75 60 L60 70 L60 80 L75 70 Z" fill="#E2E8F0" />
      </svg>
    </div>
  );
};

/**
 * Article Card Isometric Visuals based on theme type.
 */
export const ArticleIsometric: React.FC<{
  type: 'threat-intel' | 'compliance' | 'security-eng' | 'risk-quant' | 'industry-insights' | 'financial';
  className?: string;
}> = ({ type, className }) => {
  const themeColors = {
    'threat-intel': { bg: '#EFF6FF', border: '#BFDBFE', main: '#3B82F6', dark: '#1D4ED8' },
    compliance: { bg: '#ECFDF5', border: '#A7F3D0', main: '#10B981', dark: '#047857' },
    'security-eng': { bg: '#F5F3FF', border: '#DDD6FE', main: '#8B5CF6', dark: '#6D28D9' },
    'risk-quant': { bg: '#FFF7ED', border: '#FFEDD5', main: '#F95722', dark: '#C2410C' },
    'industry-insights': { bg: '#FFFBEB', border: '#FEF3C7', main: '#F59E0B', dark: '#B45309' },
    financial: { bg: '#FFF7ED', border: '#FFEDD5', main: '#F95722', dark: '#C2410C' },
  };

  const theme = themeColors[type] || themeColors['risk-quant'];

  return (
    <div className={`relative flex items-center justify-center py-6 bg-gradient-to-b from-[#121217] to-[#09090b] ${className}`}>
      <svg className="w-full max-w-[200px] h-[130px]" viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Base Grid Platform */}
        <path d="M100 110 L165 75 L100 40 L35 75 Z" fill={theme.bg} stroke={theme.border} strokeWidth="1.5" />
        <path d="M35 75 L100 110 L100 116 L35 81 Z" fill={theme.border} opacity="0.6" />
        <path d="M165 75 L100 110 L100 116 L165 81 Z" fill={theme.border} />

        {/* 3D Floating Isometric Component */}
        <g transform="translate(60, 25)">
          {/* Top Face */}
          <path d="M40 10 L75 30 L40 50 L5 30 Z" fill="#FFFFFF" stroke={theme.main} strokeWidth="1.5" />
          {/* Left Face */}
          <path d="M5 30 L40 50 L40 70 L5 50 Z" fill={theme.bg} stroke={theme.main} strokeWidth="1.5" />
          {/* Right Face */}
          <path d="M75 30 L40 50 L40 70 L75 50 Z" fill={theme.main} fillOpacity="0.15" stroke={theme.main} strokeWidth="1.5" />

          {/* Central Icon Emblem */}
          <circle cx="40" cy="30" r="10" fill={theme.main} />
          <path d="M36 30 L39 33 L45 27" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Secondary Decorative Cube */}
        <path d="M150 45 L162 38 L150 31 L138 38 Z" fill={theme.main} />
        <path d="M138 38 L150 45 L150 55 L138 48 Z" fill={theme.dark} />
        <path d="M162 38 L150 45 L150 55 L162 48 Z" fill={theme.main} opacity="0.8" />
      </svg>
    </div>
  );
};
