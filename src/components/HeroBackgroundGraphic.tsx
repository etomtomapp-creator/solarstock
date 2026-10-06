import React from 'react';

export const HeroBackgroundGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden z-0 ${className}`}
      aria-hidden="true"
    >
      {/* 1. Ambient Lighting Flares */}
      {/* Top right primary emerald/cyan energy bloom */}
      <div className="absolute -top-32 -right-32 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-transparent blur-3xl" />
      
      {/* Center solar amber radiant glow */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-amber-500/10 via-orange-500/5 to-transparent blur-3xl" />

      {/* Deep bottom-left electric indigo depth pool */}
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-slate-900/40 via-cyan-950/20 to-transparent blur-3xl" />

      {/* 2. Precision Vector SVG Architectural Grid & Energy Topology */}
      <svg
        className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Subtle Grid Pattern */}
          <pattern id="heroGridPattern" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(148, 163, 184, 0.07)" strokeWidth="1" />
            <circle cx="60" cy="0" r="1.5" fill="rgba(52, 211, 153, 0.25)" />
            <circle cx="0" cy="60" r="1" fill="rgba(148, 163, 184, 0.15)" />
          </pattern>

          {/* Isometric Perspective Grid Pattern */}
          <pattern id="isoDotPattern" width="120" height="120" patternUnits="userSpaceOnUse">
            <circle cx="60" cy="60" r="1.2" fill="rgba(56, 189, 248, 0.3)" />
            <path d="M 0 60 L 120 60 M 60 0 L 60 120" stroke="rgba(16, 185, 129, 0.04)" strokeWidth="0.8" strokeDasharray="3 3" />
          </pattern>

          {/* Solar Flux Gradients */}
          <linearGradient id="fluxLine1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
            <stop offset="40%" stopColor="#10B981" stopOpacity="0.6" />
            <stop offset="65%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="fluxLine2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0" />
            <stop offset="50%" stopColor="#10B981" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#0F172A" stopOpacity="0.02" />
          </linearGradient>

          {/* Radial Mask for smooth boundary fading */}
          <mask id="heroVignetteMask">
            <radialGradient id="vignetteGrad" cx="50%" cy="50%" r="65%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.85" />
              <stop offset="95%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
            <rect width="1440" height="800" fill="url(#vignetteGrad)" />
          </mask>
        </defs>

        <g mask="url(#heroVignetteMask)">
          {/* Base Grid Canvas */}
          <rect width="1440" height="800" fill="url(#heroGridPattern)" />
          <rect width="1440" height="800" fill="url(#isoDotPattern)" />

          {/* Solar Irradiance Topographical Contour Lines */}
          <path
            d="M -100 680 C 200 640 450 720 700 650 C 950 580 1200 640 1540 560"
            fill="none"
            stroke="rgba(16, 185, 129, 0.18)"
            strokeWidth="1.5"
            strokeDasharray="6 4"
          />
          <path
            d="M -100 590 C 250 520 520 620 780 540 C 1040 460 1300 520 1540 450"
            fill="none"
            stroke="rgba(56, 189, 248, 0.15)"
            strokeWidth="1.2"
          />
          <path
            d="M -100 480 C 300 390 600 510 890 420 C 1150 340 1350 410 1540 320"
            fill="none"
            stroke="rgba(245, 158, 11, 0.12)"
            strokeWidth="1.2"
            strokeDasharray="8 6"
          />

          {/* High-Voltage Grid Interconnection Splines */}
          <path
            d="M 120 750 Q 420 580 720 480 T 1320 220"
            fill="none"
            stroke="url(#fluxLine1)"
            strokeWidth="2.5"
          />
          <path
            d="M 240 800 Q 560 620 920 440 T 1400 160"
            fill="none"
            stroke="url(#fluxLine2)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />

          {/* Grid Telemetry Nodes (Pulsing Energy Hubs) */}
          {/* Node 1: Shenzhen Hub (Tech Origin) */}
          <g transform="translate(1320, 220)">
            <circle r="18" fill="rgba(56, 189, 248, 0.12)" />
            <circle r="7" fill="rgba(56, 189, 248, 0.3)" />
            <circle r="3" fill="#38BDF8" />
            <text x="12" y="4" fill="rgba(148, 163, 184, 0.7)" fontSize="9" fontFamily="monospace" letterSpacing="1">
              NODE_01 · R&amp;D
            </text>
          </g>

          {/* Node 2: Central Grid Intertie (720, 480) */}
          <g transform="translate(720, 480)">
            <circle r="24" fill="rgba(16, 185, 129, 0.1)" />
            <circle r="9" fill="rgba(16, 185, 129, 0.25)" />
            <circle r="4" fill="#10B981" />
            <text x="14" y="4" fill="rgba(52, 211, 153, 0.85)" fontSize="9" fontFamily="monospace" letterSpacing="1">
              33kV STEP-UP BUS
            </text>
          </g>

          {/* Node 3: Regional Infeed (420, 580) */}
          <g transform="translate(420, 580)">
            <circle r="14" fill="rgba(245, 158, 11, 0.12)" />
            <circle r="6" fill="rgba(245, 158, 11, 0.25)" />
            <circle r="2.5" fill="#F59E0B" />
            <text x="12" y="4" fill="rgba(245, 158, 11, 0.75)" fontSize="9" fontFamily="monospace" letterSpacing="1">
              BESS STORAGE INFEED
            </text>
          </g>

          {/* Node 4: Microgrid Feeder (120, 750) */}
          <g transform="translate(120, 750)">
            <circle r="10" fill="rgba(56, 189, 248, 0.15)" />
            <circle r="3" fill="#38BDF8" />
          </g>

          {/* Isometric Photovoltaic Array Wireframe Silhouette (Subtle Right Background) */}
          <g transform="translate(950, 480) skewX(-25) scale(0.85)" opacity="0.45">
            {/* Row 1 */}
            <rect x="0" y="0" width="85" height="42" rx="2" fill="url(#hexGrad)" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1" />
            <rect x="95" y="0" width="85" height="42" rx="2" fill="url(#hexGrad)" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1" />
            <rect x="190" y="0" width="85" height="42" rx="2" fill="url(#hexGrad)" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1" />
            <rect x="285" y="0" width="85" height="42" rx="2" fill="url(#hexGrad)" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1" />

            {/* Row 2 */}
            <rect x="20" y="55" width="85" height="42" rx="2" fill="url(#hexGrad)" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="1" />
            <rect x="115" y="55" width="85" height="42" rx="2" fill="url(#hexGrad)" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="1" />
            <rect x="210" y="55" width="85" height="42" rx="2" fill="url(#hexGrad)" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="1" />
            <rect x="305" y="55" width="85" height="42" rx="2" fill="url(#hexGrad)" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="1" />

            {/* Row 3 */}
            <rect x="40" y="110" width="85" height="42" rx="2" fill="url(#hexGrad)" stroke="rgba(148, 163, 184, 0.2)" strokeWidth="1" />
            <rect x="135" y="110" width="85" height="42" rx="2" fill="url(#hexGrad)" stroke="rgba(148, 163, 184, 0.2)" strokeWidth="1" />
            <rect x="230" y="110" width="85" height="42" rx="2" fill="url(#hexGrad)" stroke="rgba(148, 163, 184, 0.2)" strokeWidth="1" />
            <rect x="325" y="110" width="85" height="42" rx="2" fill="url(#hexGrad)" stroke="rgba(148, 163, 184, 0.2)" strokeWidth="1" />
          </g>

          {/* Geometric Solar Compass Angle Rings (Top Left Atmospheric Accent) */}
          <g transform="translate(180, 140)" opacity="0.35">
            <circle r="120" stroke="rgba(148, 163, 184, 0.12)" strokeWidth="1" strokeDasharray="4 6" />
            <circle r="80" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="1" />
            <circle r="40" stroke="rgba(245, 158, 11, 0.25)" strokeWidth="1" strokeDasharray="2 4" />
            <line x1="-130" y1="0" x2="130" y2="0" stroke="rgba(148, 163, 184, 0.15)" strokeWidth="1" />
            <line x1="0" y1="-130" x2="0" y2="130" stroke="rgba(148, 163, 184, 0.15)" strokeWidth="1" />
            <path d="M 0 -80 L 80 0 L 0 80 L -80 0 Z" fill="none" stroke="rgba(56, 189, 248, 0.12)" strokeWidth="1" />
          </g>
        </g>
      </svg>

      {/* 3. Subtle Animated Particle Glimmer Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-slate-950/80 mix-blend-multiply" />
    </div>
  );
};
