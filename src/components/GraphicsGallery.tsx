import React from 'react';

// ============================================================================
// 1. CINEMATIC HERO INFRASTRUCTURE (16:9 Landscape)
// ============================================================================
export const HeroInfrastructureGraphic: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative w-full overflow-hidden rounded-2xl select-none shadow-2xl bg-slate-950 ${className}`}>
    <svg viewBox="0 0 1200 675" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="heroSkyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#030712" />
          <stop offset="30%" stopColor="#0B132B" />
          <stop offset="60%" stopColor="#1E3A5F" />
          <stop offset="85%" stopColor="#D97706" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.95" />
        </linearGradient>

        <radialGradient id="heroSunFlare" cx="72%" cy="62%" r="45%">
          <stop offset="0%" stopColor="#FFFBEB" stopOpacity="1" />
          <stop offset="20%" stopColor="#FDE68A" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="pvGlassSpecular" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="35%" stopColor="#0B132B" />
          <stop offset="70%" stopColor="#0284C7" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.3" />
        </linearGradient>

        <linearGradient id="hillGreen1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#064E3B" />
          <stop offset="100%" stopColor="#022C22" />
        </linearGradient>

        <linearGradient id="hillGreen2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#047857" />
          <stop offset="100%" stopColor="#064E3B" />
        </linearGradient>

        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Sky Canvas */}
      <rect width="1200" height="675" fill="url(#heroSkyGrad)" />

      {/* Radiant Sun and Atmosphere */}
      <circle cx="860" cy="400" r="260" fill="url(#heroSunFlare)" filter="url(#softGlow)" />
      <circle cx="860" cy="400" r="42" fill="#FFFBEB" />

      {/* Distant Mountain Ridges */}
      <path d="M0 430 Q280 370 580 410 T1200 420 L1200 675 L0 675 Z" fill="#0A1826" fillOpacity="0.8" />
      <path d="M0 460 Q420 400 860 450 T1200 470 L1200 675 L0 675 Z" fill="url(#hillGreen1)" />
      <path d="M0 500 Q340 450 680 490 T1200 510 L1200 675 L0 675 Z" fill="url(#hillGreen2)" />

      {/* 132kV / 33kV High Voltage Transmission Pylons */}
      <g stroke="#0F172A" strokeWidth="2.2" opacity="0.7">
        <path d="M740 420 L760 330 L780 420 M750 365 L770 365 M745 395 L775 395" />
        <path d="M760 330 L760 320 M735 345 L785 345" />
        <path d="M920 430 L935 355 L950 430 M928 380 L942 380" />
      </g>
      {/* Power Lines connecting pylons */}
      <path d="M735 345 Q840 370 928 380" stroke="#0F172A" strokeWidth="1" opacity="0.5" fill="none" />
      <path d="M785 345 Q870 375 942 380" stroke="#0F172A" strokeWidth="1" opacity="0.5" fill="none" />

      {/* Perspective Photovoltaic Arrays Rows (Far to Near) */}
      {/* Row 4 (Distant) */}
      <g stroke="#38BDF8" strokeWidth="0.8" strokeOpacity="0.4">
        {[180, 300, 420, 540, 660, 780, 900, 1020].map((x, i) => (
          <polygon key={i} points={`${x},470 ${x + 85},465 ${x + 80},490 ${x - 5},495`} fill="url(#pvGlassSpecular)" />
        ))}
      </g>

      {/* Row 3 (Mid-distance) */}
      <g stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.55">
        {[120, 270, 420, 570, 720, 870, 1020].map((x, i) => (
          <polygon key={i} points={`${x},500 ${x + 115},495 ${x + 110},530 ${x - 5},535`} fill="url(#pvGlassSpecular)" />
        ))}
      </g>

      {/* Row 2 (Closer) */}
      <g stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.7">
        {[60, 240, 420, 600, 780, 960].map((x, i) => (
          <polygon key={i} points={`${x},540 ${x + 145},533 ${x + 135},580 ${x - 10},587`} fill="#0B132B" />
        ))}
      </g>

      {/* Row 1 (Foreground Sharp Photovoltaic Tracker Arrays) */}
      <g stroke="#0284C7" strokeWidth="1.6">
        {[20, 230, 440, 650, 860, 1070].map((x, i) => (
          <g key={i}>
            <polygon points={`${x},595 ${x + 180},585 ${x + 170},650 ${x - 10},660`} fill="#070E1E" stroke="#38BDF8" strokeWidth="1.5" />
            {/* Ground Steel Piles */}
            <line x1={x + 35} y1="640" x2={x + 35} y2="675" stroke="#94A3B8" strokeWidth="3.5" />
            <line x1={x + 140} y1="630" x2={x + 140} y2="668" stroke="#94A3B8" strokeWidth="3.5" />
            {/* Photovoltaic Cell Matrix Silhouettes */}
            <line x1={x + 85} y1="590" x2={x + 75} y2="655" stroke="#38BDF8" strokeWidth="0.9" strokeOpacity="0.7" />
            <line x1={x + 5} y1="625" x2={x + 175} y2="615" stroke="#38BDF8" strokeWidth="0.9" strokeOpacity="0.7" />
            <line x1={x + 2} y1="608" x2={x + 178} y2="598" stroke="#38BDF8" strokeWidth="0.5" strokeOpacity="0.4" />
            <line x1={x + 8} y1="642" x2={x + 172} y2="632" stroke="#38BDF8" strokeWidth="0.5" strokeOpacity="0.4" />
          </g>
        ))}
      </g>

      {/* Utility BESS Energy Storage Containers on Right Platform */}
      <g>
        {/* Container 1 (Foreground) */}
        <polygon points="1010,515 1115,500 1115,550 1010,565" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
        <polygon points="970,525 1010,515 1010,565 970,575" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />
        <polygon points="970,525 1010,515 1115,500 1075,510" fill="#FFFFFF" />
        <line x1="1030" y1="522" x2="1095" y2="512" stroke="#94A3B8" strokeWidth="1.2" />
        <line x1="1030" y1="530" x2="1095" y2="520" stroke="#94A3B8" strokeWidth="1.2" />
        <circle cx="990" cy="542" r="3" fill="#10B981" />
        <text x="1060" y="555" fill="#0F172A" fontSize="7" fontWeight="bold" fontFamily="monospace">SOLARSTOCK BESS</text>

        {/* Container 2 */}
        <polygon points="1090,535 1180,520 1180,570 1090,585" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1.5" />
        <polygon points="1050,545 1090,535 1090,585 1050,595" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1.5" />
        <circle cx="1070" cy="565" r="3" fill="#0284C7" />
      </g>

      {/* Dynamic Telemetry Glowing Line Overlays */}
      <g stroke="#10B981" strokeWidth="1.8" strokeDasharray="8 5" opacity="0.8">
        <path d="M280 625 Q580 595 970 550" />
        <path d="M580 605 Q790 575 1050 570" />
      </g>

      {/* HUD Telemetry Overlay Badge */}
      <g transform="translate(40, 40)">
        <rect width="230" height="58" rx="14" fill="#0B132B" fillOpacity="0.9" stroke="#334155" strokeWidth="1.2" />
        <circle cx="26" cy="29" r="6" fill="#10B981">
          <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
        </circle>
        <text x="42" y="24" fontFamily="sans-serif" fontSize="10.5" fontWeight="bold" fill="#F8FAFC" letterSpacing="0.05em">
          SOLAR INFRASTRUCTURE ACTIVE
        </text>
        <text x="42" y="42" fontFamily="monospace" fontSize="9.5" fill="#38BDF8">
          1100MW+ DEPLOYED REGIONAL HARVEST
        </text>
      </g>
    </svg>
  </div>
);

// ============================================================================
// 2. COMMERCIAL & INDUSTRIAL ROOFTOP SOLAR (4:3 Visual)
// ============================================================================
export const CommercialRooftopGraphic: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative w-full overflow-hidden rounded-2xl select-none shadow-lg bg-slate-900 ${className}`}>
    <svg viewBox="0 0 800 600" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cniSky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="50%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#BAE6FD" />
        </linearGradient>
        <linearGradient id="cniRoof" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E2E8F0" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>
      </defs>

      {/* Sky Canvas */}
      <rect width="800" height="600" fill="url(#cniSky)" />

      {/* Modern Industrial Skylines in Distant Background */}
      <rect x="520" y="90" width="40" height="80" fill="#93C5FD" opacity="0.6" />
      <rect x="570" y="70" width="55" height="100" fill="#93C5FD" opacity="0.7" />
      <rect x="635" y="110" width="45" height="60" fill="#93C5FD" opacity="0.5" />
      <rect x="690" y="85" width="60" height="85" fill="#93C5FD" opacity="0.6" />

      {/* Warehouse Rooftop Isometric Geometry */}
      <polygon points="40,210 660,140 790,480 170,550" fill="url(#cniRoof)" stroke="#94A3B8" strokeWidth="2.5" />
      {/* Warehouse Front Wall with Dock Doors */}
      <polygon points="170,550 790,480 790,585 170,600" fill="#334155" />
      {/* Left Outer Concrete Wall */}
      <polygon points="40,210 170,550 170,600 40,260" fill="#1E293B" />

      {/* Solar Panel Racking Rows (4 Rows of 620W N-Type Bifacials) */}
      {[0, 1, 2, 3].map((row) => {
        const yOffset = row * 68;
        const xOffset = row * 22;
        return (
          <g key={row}>
            {[0, 1, 2, 3, 4].map((col) => {
              const cx = 270 + col * 78 - xOffset;
              const cy = 190 + yOffset + col * 18;
              return (
                <g key={col}>
                  <polygon
                    points={`${cx},${cy} ${cx + 68},${cy - 9} ${cx + 78},${cy + 48} ${cx + 10},${cy + 57}`}
                    fill="#0B132B"
                    stroke="#0284C7"
                    strokeWidth="1.4"
                  />
                  {/* Subtle Wafer Split Line */}
                  <line x1={cx + 39} y1={cy - 4} x2={cx + 44} y2={cy + 52} stroke="#38BDF8" strokeWidth="0.8" strokeOpacity="0.6" />
                </g>
              );
            })}
          </g>
        );
      })}

      {/* Rooftop Inverter Skid & AC Combiner Enclosure */}
      <rect x="590" y="320" width="70" height="48" rx="5" fill="#F8FAFC" stroke="#475569" strokeWidth="2" />
      <circle cx="605" cy="336" r="3.5" fill="#10B981" />
      <circle cx="620" cy="336" r="3.5" fill="#0284C7" />
      <text x="625" y="356" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#0F172A">
        DEYE 20KW C&I
      </text>

      {/* Logistics Yard Foreground */}
      <polygon points="0,550 170,550 170,600 0,600" fill="#0F172A" />
      {/* EP Red Forklift in Logistics Yard */}
      <g transform="translate(45, 515)">
        <rect x="25" y="32" width="40" height="28" rx="4" fill="#DC2626" />
        <rect x="55" y="15" width="5" height="45" fill="#1E293B" />
        <circle cx="34" cy="60" r="8" fill="#0F172A" stroke="#475569" strokeWidth="2" />
        <circle cx="58" cy="60" r="8" fill="#0F172A" stroke="#475569" strokeWidth="2" />
      </g>

      {/* Floating Status Card */}
      <g transform="translate(30, 30)">
        <rect width="230" height="42" rx="10" fill="#0F172A" fillOpacity="0.92" stroke="#334155" strokeWidth="1" />
        <text x="16" y="26" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#38BDF8">
          5.2 MW C&I ROOFTOP
        </text>
        <text x="175" y="26" fontFamily="monospace" fontSize="10" fill="#10B981" fontWeight="bold">
          98.3% EFF
        </text>
      </g>
    </svg>
  </div>
);

// Backward compatibility alias
export const ProjectRooftopGraphic = CommercialRooftopGraphic;

// ============================================================================
// 3. AGRICULTURAL SOLAR DEEP-WELL PUMPING (4:3 Visual)
// ============================================================================
export const AgriculturalPumpingGraphic: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative w-full overflow-hidden rounded-2xl select-none shadow-lg bg-slate-900 ${className}`}>
    <svg viewBox="0 0 800 600" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pmpSky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0369A1" />
          <stop offset="50%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#FEF08A" />
        </linearGradient>
        <linearGradient id="pmpFields" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#15803D" />
          <stop offset="100%" stopColor="#14532D" />
        </linearGradient>
        <linearGradient id="pmpWaterFlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="50%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
      </defs>

      {/* Sunny Countryside Sky */}
      <rect width="800" height="600" fill="url(#pmpSky)" />
      <circle cx="690" cy="115" r="48" fill="#FEF08A" opacity="0.9" />

      {/* Terraced Farmland Green Plains */}
      <polygon points="0,310 800,270 800,600 0,600" fill="url(#pmpFields)" />
      <path d="M0 360 Q400 330 800 310" stroke="#166534" strokeWidth="2" opacity="0.7" fill="none" />
      <path d="M0 420 Q400 380 800 360" stroke="#166534" strokeWidth="2" opacity="0.7" fill="none" />
      <path d="M0 490 Q400 450 800 430" stroke="#166534" strokeWidth="2" opacity="0.7" fill="none" />

      {/* Ground Mount Solar Pumping Array */}
      <g transform="translate(90, 220)">
        <line x1="40" y1="130" x2="40" y2="200" stroke="#64748B" strokeWidth="4.5" />
        <line x1="200" y1="120" x2="200" y2="195" stroke="#64748B" strokeWidth="4.5" />
        <line x1="360" y1="110" x2="360" y2="190" stroke="#64748B" strokeWidth="4.5" />
        {/* PV Modules tilted toward sun */}
        <polygon points="20,135 390,95 400,180 30,220" fill="#0B132B" stroke="#0284C7" strokeWidth="2" />
        <line x1="140" y1="120" x2="150" y2="205" stroke="#38BDF8" strokeWidth="1.5" />
        <line x1="260" y1="108" x2="270" y2="192" stroke="#38BDF8" strokeWidth="1.5" />
      </g>

      {/* Plinth & SAJ VFD Controller Cabinet */}
      <rect x="520" y="375" width="85" height="22" rx="3" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="2" />
      <rect x="535" y="300" width="55" height="75" rx="6" fill="#F8FAFC" stroke="#64748B" strokeWidth="2" />
      <rect x="545" y="315" width="35" height="18" rx="2" fill="#0F172A" />
      <text x="562" y="328" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#EF4444" fontWeight="bold">50.0Hz</text>
      <text x="562" y="355" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fontWeight="bold" fill="#0284C7">SAJ VFD</text>

      {/* Submersible Pump Borehole Casing & High-Pressure Water Output */}
      <rect x="595" y="360" width="14" height="65" fill="#475569" />
      <path d="M609 365 C635 365 645 385 650 415" stroke="#0284C7" strokeWidth="12" strokeLinecap="round" fill="none" />

      {/* Gushing Irrigation Flume Water Canal */}
      <polygon points="620,415 800,435 800,540 590,510" fill="url(#pmpWaterFlow)" />
      <path d="M635 445 Q715 440 800 455" stroke="#FFFFFF" strokeWidth="2.5" strokeOpacity="0.7" fill="none" />
      <path d="M610 480 Q710 475 800 490" stroke="#FFFFFF" strokeWidth="2.5" strokeOpacity="0.7" fill="none" />

      {/* Floating Status Badge */}
      <g transform="translate(30, 30)">
        <rect width="240" height="42" rx="10" fill="#064E3B" fillOpacity="0.95" stroke="#047857" strokeWidth="1" />
        <text x="16" y="26" fontFamily="sans-serif" fontSize="11.5" fontWeight="bold" fill="#A7F3D0">
          350-BOREHOLE SOLAR PUMPING
        </text>
      </g>
    </svg>
  </div>
);

// Backward compatibility alias
export const ProjectPumpingGraphic = AgriculturalPumpingGraphic;

// ============================================================================
// 4. ELECTRIC WAREHOUSE & MATERIAL HANDLING LOGISTICS (4:3 Visual)
// ============================================================================
export const WarehouseLogisticsGraphic: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative w-full overflow-hidden rounded-2xl select-none shadow-lg bg-slate-950 ${className}`}>
    <svg viewBox="0 0 800 600" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Industrial DC Facility Interior */}
      <rect width="800" height="600" fill="#0B132B" />

      {/* Polished Epoxy Concrete Floor with Guidance Demarcations */}
      <polygon points="0,310 800,310 800,600 0,600" fill="#1E293B" />
      <line x1="400" y1="310" x2="400" y2="600" stroke="#F59E0B" strokeWidth="6" strokeDasharray="30 18" />
      <line x1="140" y1="310" x2="30" y2="600" stroke="#E2E8F0" strokeWidth="3" opacity="0.25" />
      <line x1="660" y1="310" x2="770" y2="600" stroke="#E2E8F0" strokeWidth="3" opacity="0.25" />

      {/* High-Bay Heavy Pallet Storage Racking (Left & Right) */}
      <g stroke="#0284C7" strokeWidth="3.5">
        <line x1="70" y1="40" x2="70" y2="390" />
        <line x1="210" y1="70" x2="210" y2="410" />
        <line x1="70" y1="110" x2="210" y2="130" stroke="#F59E0B" strokeWidth="4" />
        <line x1="70" y1="210" x2="210" y2="230" stroke="#F59E0B" strokeWidth="4" />
        <line x1="70" y1="310" x2="210" y2="330" stroke="#F59E0B" strokeWidth="4" />
      </g>

      {/* Solar Module Wooden Pallets on Storage Racks */}
      <rect x="85" y="70" width="115" height="38" rx="2" fill="#334155" stroke="#64748B" />
      <rect x="85" y="170" width="115" height="38" rx="2" fill="#334155" stroke="#64748B" />
      <rect x="85" y="270" width="115" height="38" rx="2" fill="#334155" stroke="#64748B" />

      {/* Centerpiece: EP Equipment Heavy 80V Li-ion Electric Forklift */}
      <g transform="translate(310, 250)">
        {/* Dual Steel Mast */}
        <rect x="185" y="20" width="18" height="200" rx="3" fill="#0F172A" />
        <rect x="170" y="20" width="14" height="200" rx="2" fill="#334155" />
        {/* Forks Lifting Tongwei 620W Pallet */}
        <rect x="200" y="90" width="130" height="80" rx="4" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
        <text x="265" y="130" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#0F172A">
          SOLARSTOCK
        </text>
        <text x="265" y="148" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#0284C7" fontWeight="bold">
          TW 620W N-TYPE PALLET
        </text>
        <path d="M200 170 L300 170 L300 178 L200 178 Z" fill="#64748B" />

        {/* EP Signature Red Electric Forklift Body */}
        <path d="M0 205 L0 120 L75 120 L115 160 L185 160 L185 205 Z" fill="#DC2626" stroke="#991B1B" strokeWidth="3" />
        <text x="50" y="190" fontFamily="sans-serif" fontSize="20" fontWeight="900" fill="#FFFFFF">
          EP 80V
        </text>

        {/* Heavy Solid Rubber Wheels */}
        <circle cx="35" cy="210" r="30" fill="#0F172A" stroke="#334155" strokeWidth="5" />
        <circle cx="170" cy="210" r="26" fill="#0F172A" stroke="#334155" strokeWidth="5" />
      </g>

      {/* Floating Depot Badge */}
      <g transform="translate(30, 30)">
        <rect width="250" height="42" rx="10" fill="#0B132B" fillOpacity="0.95" stroke="#334155" strokeWidth="1" />
        <text x="16" y="26" fontFamily="sans-serif" fontSize="11.5" fontWeight="bold" fill="#38BDF8">
          BANGKOK LOGISTICS HUB · EP FLEET
        </text>
      </g>
    </svg>
  </div>
);

// Backward compatibility alias
export const ProjectLogisticsGraphic = WarehouseLogisticsGraphic;

// ============================================================================
// 5. BESS MODULAR CONTAINERIZED ENERGY STORAGE SYSTEM (16:9 / 4:3)
// ============================================================================
export const BESSContainerGraphic: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative w-full overflow-hidden rounded-2xl select-none shadow-xl bg-slate-950 ${className}`}>
    <svg viewBox="0 0 800 500" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bessBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B132B" />
          <stop offset="100%" stopColor="#021B2F" />
        </linearGradient>
      </defs>

      <rect width="800" height="500" fill="url(#bessBg)" />

      {/* Grid Floor */}
      <g stroke="#1E293B" strokeWidth="1" opacity="0.4">
        {[0, 100, 200, 300, 400, 500, 600, 700, 800].map(x => (
          <line key={x} x1={x} y1="380" x2={x} y2="500" />
        ))}
        {[380, 410, 440, 470, 500].map(y => (
          <line key={y} x1="0" y1={y} x2="800" y2={y} />
        ))}
      </g>

      {/* 20FT BESS Container Isometric Exterior / Cutaway Structure */}
      {/* Container Frame */}
      <rect x="120" y="110" width="560" height="270" rx="8" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="3" />
      {/* Corner Castings */}
      <rect x="120" y="110" width="22" height="24" fill="#64748B" />
      <rect x="658" y="110" width="22" height="24" fill="#64748B" />
      <rect x="120" y="356" width="22" height="24" fill="#64748B" />
      <rect x="658" y="356" width="22" height="24" fill="#64748B" />

      {/* Left Bay: Liquid Cooling HVAC Chiller Unit */}
      <rect x="145" y="135" width="90" height="220" rx="4" fill="#0F172A" stroke="#334155" strokeWidth="2" />
      <circle cx="190" cy="180" r="28" fill="#1E293B" stroke="#0284C7" strokeWidth="2" />
      <line x1="190" y1="152" x2="190" y2="208" stroke="#38BDF8" strokeWidth="3" />
      <line x1="162" y1="180" x2="218" y2="180" stroke="#38BDF8" strokeWidth="3" />
      <text x="190" y="240" textAnchor="middle" fill="#38BDF8" fontSize="8" fontFamily="monospace" fontWeight="bold">
        LIQUID CHILLER
      </text>
      <text x="190" y="255" textAnchor="middle" fill="#10B981" fontSize="9" fontFamily="monospace" fontWeight="bold">
        ΔT &lt; 2.5°C
      </text>

      {/* Middle Bay: LiFePO4 Battery Pack Racks (Cutaway Racks 1, 2, 3) */}
      {[0, 1, 2].map((rackIdx) => {
        const rx = 250 + rackIdx * 90;
        return (
          <g key={rackIdx}>
            <rect x={rx} y="135" width="80" height="220" rx="4" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
            {[0, 1, 2, 3, 4, 5].map((modIdx) => {
              const my = 145 + modIdx * 34;
              return (
                <g key={modIdx}>
                  <rect x={rx + 5} y={my} width="70" height="26" rx="2" fill="#1E293B" stroke="#475569" strokeWidth="1" />
                  <circle cx={rx + 15} cy={my + 13} r="3" fill="#10B981" />
                  <line x1={rx + 25} y1={my + 13} x2={rx + 65} y2={my + 13} stroke="#0284C7" strokeWidth="1.5" />
                </g>
              );
            })}
            <text x={rx + 40} y="345" textAnchor="middle" fill="#94A3B8" fontSize="7" fontFamily="sans-serif">
              RACK 0{rackIdx + 1}
            </text>
          </g>
        );
      })}

      {/* Right Bay: DC Combiner, Fire Aerosol & PCS Power Conversion */}
      <rect x="535" y="135" width="125" height="220" rx="4" fill="#0F172A" stroke="#334155" strokeWidth="2" />
      <rect x="548" y="150" width="100" height="60" rx="3" fill="#1E293B" stroke="#64748B" />
      <text x="598" y="175" textAnchor="middle" fill="#F8FAFC" fontSize="9" fontWeight="bold" fontFamily="sans-serif">
        DEYE PCS 500kW
      </text>
      <text x="598" y="195" textAnchor="middle" fill="#10B981" fontSize="10" fontWeight="bold" fontFamily="monospace">
        1500V DC BUS
      </text>

      {/* Aerosol Fire Suppression Canister */}
      <rect x="585" y="225" width="28" height="65" rx="14" fill="#DC2626" />
      <text x="599" y="305" textAnchor="middle" fill="#EF4444" fontSize="7.5" fontWeight="bold">
        NFPA 855 CERT
      </text>

      {/* Top Banner Details */}
      <g transform="translate(30, 30)">
        <rect width="290" height="42" rx="10" fill="#0B132B" fillOpacity="0.9" stroke="#334155" strokeWidth="1" />
        <text x="16" y="26" fill="#10B981" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
          SOLARSTOCK BESS · 3.72MWh / 20FT
        </text>
      </g>
    </svg>
  </div>
);

// ============================================================================
// 6. TOPCON N-TYPE PHOTOVOLTAIC WAFER CUTAWAY (Engineering Graphic)
// ============================================================================
export const SolarCellCutawayGraphic: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative w-full overflow-hidden rounded-2xl select-none shadow-xl bg-slate-950 p-6 ${className}`}>
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            PHOTOVOLTAIC CELL PHYSICS & MATERIAL SCIENCE
          </span>
          <h3 className="text-lg font-bold text-white font-heading mt-0.5">
            TOPCon N-Type Bifacial Multi-Busbar (16BB) Architecture
          </h3>
        </div>
        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold rounded-lg">
          22.8% Module Efficiency
        </span>
      </div>

      <svg viewBox="0 0 800 360" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="waferGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0B132B" />
            <stop offset="50%" stopColor="#1E3A5F" />
            <stop offset="100%" stopColor="#0B132B" />
          </linearGradient>
        </defs>

        {/* Layer 1: Front 2.0mm High-Transmission Anti-Reflective Tempered Glass */}
        <g transform="translate(60, 40)">
          <rect width="680" height="24" rx="3" fill="#38BDF8" fillOpacity="0.25" stroke="#38BDF8" strokeWidth="1.5" />
          <text x="20" y="16" fill="#BAE6FD" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
            1. Front 2.0mm AR-Coated Tempered Solar Glass (94.2% Transmittance)
          </text>
        </g>

        {/* Layer 2: POE (Polyolefin Elastomer) Anti-PID Encapsulant */}
        <g transform="translate(60, 75)">
          <rect width="680" height="18" rx="2" fill="#64748B" fillOpacity="0.4" stroke="#94A3B8" strokeWidth="1" />
          <text x="20" y="13" fill="#E2E8F0" fontSize="10" fontFamily="sans-serif">
            2. High-Crosslinking POE Film (Zero Water Ingress &amp; Zero PID Degradation)
          </text>
        </g>

        {/* Layer 3: Ultra-Dense 16 Micro-Busbar Round Ribbon Grid */}
        <g transform="translate(60, 105)">
          <rect width="680" height="14" rx="2" fill="#F59E0B" fillOpacity="0.2" stroke="#F59E0B" strokeWidth="1" />
          {[...Array(16)].map((_, i) => (
            <circle key={i} cx={40 + i * 40} cy="7" r="3.5" fill="#F59E0B" />
          ))}
          <text x="660" y="11" textAnchor="end" fill="#FDE68A" fontSize="9.5" fontWeight="bold" fontFamily="monospace">
            16-BB Cylindrical Micro-Ribbons (Reduced Shadowing)
          </text>
        </g>

        {/* Layer 4: N-Type TOPCon Monocrystalline Silicon Core (Sub-surface) */}
        <g transform="translate(60, 130)">
          <rect width="680" height="60" rx="4" fill="url(#waferGrad)" stroke="#0284C7" strokeWidth="2" />
          <text x="20" y="28" fill="#FFFFFF" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
            4. N-Type High-Purity Monocrystalline Silicon Bulk (Low Oxygen, Zero LID)
          </text>
          <text x="20" y="48" fill="#38BDF8" fontSize="10" fontFamily="monospace">
            Tunnel Oxide Passivated Contact (TOPCon) · Carrier Recombination &lt; 0.05%
          </text>
        </g>

        {/* Layer 5: Rear Micro-Passivation Layer + Bifacial Glass */}
        <g transform="translate(60, 200)">
          <rect width="680" height="24" rx="3" fill="#38BDF8" fillOpacity="0.25" stroke="#38BDF8" strokeWidth="1.5" />
          <text x="20" y="16" fill="#BAE6FD" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
            5. Rear Glass &amp; Bifacial Power Generation (+15% to +25% Albedo Reflection Gain)
          </text>
        </g>

        {/* Anodized Aluminum Alloy 35mm Structural Frame */}
        <rect x="40" y="30" width="16" height="205" rx="3" fill="#475569" stroke="#94A3B8" strokeWidth="1" />
        <rect x="744" y="30" width="16" height="205" rx="3" fill="#475569" stroke="#94A3B8" strokeWidth="1" />

        {/* Solar Radiation Photons Arrows */}
        <g stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round">
          <line x1="200" y1="5" x2="200" y2="35" markerEnd="url(#arrow)" />
          <line x1="400" y1="5" x2="400" y2="35" markerEnd="url(#arrow)" />
          <line x1="600" y1="5" x2="600" y2="35" markerEnd="url(#arrow)" />
        </g>

        {/* Albedo Reflected Photons Arrows from bottom */}
        <g stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round">
          <line x1="250" y1="265" x2="250" y2="230" />
          <line x1="550" y1="265" x2="550" y2="230" />
        </g>
        <text x="400" y="260" textAnchor="middle" fill="#38BDF8" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
          Ground Albedo Irradiation (Grass, Sand, Concrete)
        </text>
      </svg>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs text-slate-400 border-t border-slate-800">
        <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
          <strong className="text-white block font-heading">30-Year Linear Warranty</strong>
          <span>Annual degradation capped at &le;0.4% per annum.</span>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
          <strong className="text-white block font-heading">-0.30%/°C Temperature Coeff</strong>
          <span>Superior high-ambient performance in 40°C+ tropical regions.</span>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
          <strong className="text-white block font-heading">IEC 61215 / 61730 Certified</strong>
          <span>Class A fire rating with extreme 5400Pa mechanical snow/wind load.</span>
        </div>
      </div>
    </div>
  </div>
);

// ============================================================================
// 7. REGIONAL SUPPLY CHAIN & LOGISTICS ROUTE MAP (Global Graphic)
// ============================================================================
export const RegionalLogisticsMapGraphic: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative w-full overflow-hidden rounded-2xl select-none shadow-xl bg-slate-950 p-6 ${className}`}>
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            CROSS-BORDER LOGISTICS &amp; FULFILLMENT NETWORK
          </span>
          <h3 className="text-lg font-bold text-white font-heading mt-0.5">
            Regional Hubs &amp; Direct Factory Shipping Lanes
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-mono text-emerald-400 font-semibold">Active Dispatch</span>
        </div>
      </div>

      <svg viewBox="0 0 900 450" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Abstract World Grid Lines */}
        <g stroke="#1E293B" strokeWidth="0.8" opacity="0.4">
          {[0, 150, 300, 450, 600, 750, 900].map(x => (
            <line key={x} x1={x} y1="0" x2={x} y2="450" />
          ))}
          {[0, 90, 180, 270, 360, 450].map(y => (
            <line key={y} x1="0" y1={y} x2="900" y2={y} />
          ))}
        </g>

        {/* Simplified Continents Silhouette */}
        {/* Eurasia & Asia landmass */}
        <path
          d="M180 80 Q320 60 460 70 T700 80 Q800 120 780 220 Q720 280 620 280 Q560 340 500 360 Q440 280 340 250 Q240 240 180 180 Z"
          fill="#0F172A"
          stroke="#1E293B"
          strokeWidth="1.5"
        />
        {/* Africa & Middle East */}
        <path
          d="M260 210 Q320 200 360 220 Q370 290 320 370 Q270 380 240 300 Z"
          fill="#0F172A"
          stroke="#1E293B"
          strokeWidth="1.5"
        />

        {/* Sea Shipping Trade Lanes (Curved Dashed Paths) */}
        {/* Ningbo/Shenzhen -> Bangkok */}
        <path d="M680 170 Q620 220 560 260" stroke="#0284C7" strokeWidth="2.5" strokeDasharray="6 4" fill="none" />
        {/* Ningbo/Shenzhen -> Chittagong/Dhaka */}
        <path d="M680 170 Q580 190 480 220" stroke="#10B981" strokeWidth="2.5" strokeDasharray="6 4" fill="none" />
        {/* Bangkok -> Bay of Bengal / South Asia */}
        <path d="M560 260 Q520 240 480 220" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 4" fill="none" />
        {/* Shenzhen -> Dubai / Middle East */}
        <path d="M680 170 Q520 180 360 210" stroke="#F59E0B" strokeWidth="2" strokeDasharray="6 4" fill="none" />

        {/* Node 1: Shenzhen & Ningbo (Tier-1 Factory Consolidation) */}
        <g transform="translate(680, 170)">
          <circle cx="0" cy="0" r="14" fill="#0284C7" fillOpacity="0.3" />
          <circle cx="0" cy="0" r="7" fill="#0284C7" />
          <rect x="15" y="-18" width="160" height="36" rx="6" fill="#0B132B" stroke="#0284C7" strokeWidth="1" />
          <text x="24" y="-4" fill="#FFFFFF" fontSize="10" fontWeight="bold">Shenzhen &amp; Ningbo Hub</text>
          <text x="24" y="10" fill="#38BDF8" fontSize="8" fontFamily="monospace">Direct Tier-1 Factory R&amp;D</text>
        </g>

        {/* Node 2: Bangkok (ASEAN Distribution Depot) */}
        <g transform="translate(560, 260)">
          <circle cx="0" cy="0" r="14" fill="#10B981" fillOpacity="0.3" />
          <circle cx="0" cy="0" r="7" fill="#10B981" />
          <rect x="-175" y="10" width="160" height="36" rx="6" fill="#0B132B" stroke="#10B981" strokeWidth="1" />
          <text x="-166" y="24" fill="#FFFFFF" fontSize="10" fontWeight="bold">Bangkok Central Depot</text>
          <text x="-166" y="38" fill="#34D399" fontSize="8" fontFamily="monospace">MHE &amp; Buffer Storage</text>
        </g>

        {/* Node 3: Dhaka / Chittagong (South Asia Operations) */}
        <g transform="translate(480, 220)">
          <circle cx="0" cy="0" r="14" fill="#38BDF8" fillOpacity="0.3" />
          <circle cx="0" cy="0" r="7" fill="#38BDF8" />
          <rect x="-175" y="-42" width="165" height="36" rx="6" fill="#0B132B" stroke="#38BDF8" strokeWidth="1" />
          <text x="-166" y="-28" fill="#FFFFFF" fontSize="10" fontWeight="bold">Dhaka Engineering Desk</text>
          <text x="-166" y="-14" fill="#BAE6FD" fontSize="8" fontFamily="monospace">Field Support &amp; RMA Center</text>
        </g>

        {/* Node 4: Dubai Trade Corridor (Middle East Gateway) */}
        <g transform="translate(360, 210)">
          <circle cx="0" cy="0" r="12" fill="#F59E0B" fillOpacity="0.3" />
          <circle cx="0" cy="0" r="6" fill="#F59E0B" />
          <rect x="-145" y="-38" width="135" height="30" rx="5" fill="#0B132B" stroke="#F59E0B" strokeWidth="1" />
          <text x="-137" y="-24" fill="#FFFFFF" fontSize="9" fontWeight="bold">Dubai Trade Corridor</text>
          <text x="-137" y="-12" fill="#FDE68A" fontSize="7.5" fontFamily="monospace">MENA Transit Partner</text>
        </g>
      </svg>
    </div>
  </div>
);

// ============================================================================
// 8. TECHNICAL ENERGY FLOW & SCHEMATIC (SCHEMATIC DIAGRAM)
// ============================================================================
export const EnergyFlowGraphic: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`p-6 bg-slate-950 text-white rounded-3xl border border-slate-800 shadow-xl space-y-6 ${className}`}>
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
          SYSTEM ARCHITECTURE &amp; ENERGY FLOW
        </span>
        <h4 className="text-lg font-bold font-heading text-white mt-0.5">
          Unified Solar, Inverter, Storage &amp; Critical Load Energy Routing
        </h4>
      </div>
      <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold rounded-lg shrink-0">
        Active MPPT Routing (98.3%)
      </span>
    </div>

    {/* Graphical Flow Nodes */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
      {/* Node 1: Solar Array Generation */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-3 relative">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase font-bold text-slate-400">1. Generation</span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
        </div>
        <div className="h-16 bg-slate-950 rounded-xl p-2 flex items-center justify-center border border-slate-800">
          <svg viewBox="0 0 100 50" className="w-full h-full">
            <rect x="10" y="5" width="80" height="40" rx="3" fill="#0B132B" stroke="#0284C7" strokeWidth="1.5" />
            <line x1="30" y1="5" x2="30" y2="45" stroke="#38BDF8" strokeWidth="0.8" />
            <line x1="50" y1="5" x2="50" y2="45" stroke="#38BDF8" strokeWidth="0.8" />
            <line x1="70" y1="5" x2="70" y2="45" stroke="#38BDF8" strokeWidth="0.8" />
          </svg>
        </div>
        <div>
          <div className="font-bold text-xs text-white">Tier-1 Bifacial PV Array</div>
          <div className="font-mono text-emerald-400 text-[11px] font-semibold mt-0.5">800V DC String MPPT</div>
        </div>
      </div>

      {/* Node 2: Core Hybrid Inverter */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-emerald-500/40 flex flex-col justify-between space-y-3 relative shadow-lg shadow-emerald-500/5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase font-bold text-emerald-400">2. Core Conversion</span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="h-16 bg-slate-950 rounded-xl p-2 flex items-center justify-center border border-slate-800">
          <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-700 flex flex-col items-center justify-center">
            <div className="w-8 h-4 rounded bg-slate-950 border border-blue-500 text-[7px] text-cyan-400 font-mono text-center leading-4 font-bold">
              98.3%
            </div>
          </div>
        </div>
        <div>
          <div className="font-bold text-xs text-white">Deye / SAJ Hybrid Inverter</div>
          <div className="font-mono text-slate-400 text-[11px] mt-0.5">&lt;10ms Auto Transfer</div>
        </div>
      </div>

      {/* Node 3: LiFePO4 Energy Storage */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-3 relative">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase font-bold text-slate-400">3. Storage Bank</span>
          <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
        </div>
        <div className="h-16 bg-slate-950 rounded-xl p-2 flex items-center justify-center border border-slate-800">
          <div className="w-20 h-10 rounded bg-slate-900 border border-slate-700 flex items-center justify-around px-2">
            <div className="w-2.5 h-6 bg-emerald-500 rounded-sm" />
            <div className="w-2.5 h-6 bg-emerald-500 rounded-sm" />
            <div className="w-2.5 h-6 bg-emerald-500 rounded-sm" />
            <div className="w-2.5 h-6 bg-slate-700 rounded-sm" />
          </div>
        </div>
        <div>
          <div className="font-bold text-xs text-white">Prismatic LiFePO4 ESS</div>
          <div className="font-mono text-blue-400 text-[11px] font-semibold mt-0.5">6,000+ Cycles (90% DoD)</div>
        </div>
      </div>

      {/* Node 4: Facilities / Grid Loads */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-3 relative">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase font-bold text-slate-400">4. Critical Delivery</span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="h-16 bg-slate-950 rounded-xl p-2 flex items-center justify-center border border-slate-800">
          <svg viewBox="0 0 100 50" className="w-full h-full">
            <polygon points="50,10 20,40 80,40" fill="#1E293B" stroke="#10B981" strokeWidth="1.5" />
            <rect x="42" y="25" width="16" height="15" fill="#10B981" />
          </svg>
        </div>
        <div>
          <div className="font-bold text-xs text-white">Facility Critical Loads</div>
          <div className="font-mono text-emerald-400 text-[11px] font-semibold mt-0.5">230V / 400V 50Hz Clean</div>
        </div>
      </div>
    </div>

    {/* Bottom Key Insight */}
    <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/80 text-xs text-slate-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
      <div>
        Direct DC coupling eliminates multiple inverter conversion stages, preserving <strong className="text-white">98.3% total system efficiency</strong>.
      </div>
      <span className="text-[11px] font-mono text-emerald-400 shrink-0">
        Certified IEC 62109-1/2
      </span>
    </div>
  </div>
);
