import React from 'react';
import { Product } from '../types';

interface ProductArtworkProps {
  product: Product;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'detail';
}

const ProductArtworkComponent: React.FC<ProductArtworkProps> = ({
  product,
  className = '',
  size = 'md'
}) => {
  const artType = product.artType;

  // Visual aspect container with pure white background as strictly required
  return (
    <div
      className={`relative w-full flex items-center justify-center bg-white select-none overflow-hidden ${className}`}
      style={{ backgroundColor: '#ffffff' }}
    >
      {/* Background subtle studio reflection plate */}
      <div className="absolute inset-0 bg-radial from-slate-50/60 via-white to-white pointer-events-none" />

      {/* Hardware Graphic Component */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-3 sm:p-5">
        {artType === 'inverter_hybrid' && (
          <svg viewBox="0 0 400 320" className="w-full h-full max-h-72 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Soft ground shadow */}
            <ellipse cx="200" cy="285" rx="140" ry="12" fill="#0f172a" fillOpacity="0.08" />
            {/* Main Chassis Body */}
            <rect x="90" y="45" width="220" height="230" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2.5" />
            <rect x="94" y="49" width="212" height="222" rx="10" fill="#FFFFFF" />
            {/* Deye Signature Cyan/Blue Accent Edge */}
            <path d="M90 55 C90 49 94 45 100 45 L112 45 L112 275 L100 275 C94 275 90 271 90 265 Z" fill="#0284C7" />
            <path d="M288 45 L300 45 C306 45 310 49 310 55 L310 265 C310 271 306 275 300 275 L288 275 Z" fill="#E2E8F0" />
            {/* Top Heat Sink Fins */}
            <g stroke="#94A3B8" strokeWidth="1.5">
              <line x1="120" y1="45" x2="120" y2="35" />
              <line x1="135" y1="45" x2="135" y2="35" />
              <line x1="150" y1="45" x2="150" y2="35" />
              <line x1="165" y1="45" x2="165" y2="35" />
              <line x1="180" y1="45" x2="180" y2="35" />
              <line x1="195" y1="45" x2="195" y2="35" />
              <line x1="210" y1="45" x2="210" y2="35" />
              <line x1="225" y1="45" x2="225" y2="35" />
              <line x1="240" y1="45" x2="240" y2="35" />
              <line x1="255" y1="45" x2="255" y2="35" />
              <line x1="270" y1="45" x2="270" y2="35" />
            </g>
            {/* Brand Logo Text Header */}
            <text x="125" y="75" fontFamily="sans-serif" fontSize="12" fontWeight="700" fill="#0F172A" letterSpacing="0.05em">
              {product.brand.toUpperCase()}
            </text>
            <text x="125" y="88" fontFamily="sans-serif" fontSize="7.5" fontWeight="600" fill="#64748B">
              HYBRID ENERGY STORAGE INVERTER
            </text>
            {/* Digital Color Touch LCD Screen */}
            <rect x="125" y="100" width="150" height="95" rx="6" fill="#0B132B" stroke="#334155" strokeWidth="1.5" />
            <rect x="130" y="105" width="140" height="85" rx="4" fill="#030712" />
            {/* Screen Telemetry Graphic */}
            <circle cx="160" cy="142" r="22" stroke="#0284C7" strokeWidth="2.5" strokeDasharray="100 20" />
            <text x="160" y="140" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#38BDF8" fontWeight="600">
              {product.powerRating?.split(' ')[0] || '8.0kW'}
            </text>
            <text x="160" y="151" textAnchor="middle" fontFamily="sans-serif" fontSize="6.5" fill="#94A3B8">
              ACTIVE PV
            </text>
            <path d="M190 135 L215 135 M215 135 L215 155 M215 155 L245 155" stroke="#10B981" strokeWidth="1.5" />
            <rect x="230" y="125" width="30" height="16" rx="2" fill="#1E293B" stroke="#10B981" strokeWidth="1" />
            <text x="245" y="136" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#10B981" fontWeight="bold">98.2%</text>
            <text x="135" y="180" fontFamily="monospace" fontSize="6" fill="#64748B">GRID 230V · 50.0Hz · SOC 92%</text>
            {/* LED Status Dots */}
            <circle cx="140" cy="212" r="3.5" fill="#10B981" />
            <circle cx="160" cy="212" r="3.5" fill="#0284C7" />
            <circle cx="180" cy="212" r="3.5" fill="#E2E8F0" />
            <text x="195" y="214" fontFamily="sans-serif" fontSize="7" fill="#64748B">NORMAL / INVERTING</text>
            {/* Bottom Terminals & DC Rotary Switch */}
            <rect x="125" y="235" width="30" height="24" rx="4" fill="#DC2626" />
            <rect x="135" y="243" width="10" height="8" rx="2" fill="#FFFFFF" />
            <text x="140" y="268" textAnchor="middle" fontFamily="sans-serif" fontSize="6" fill="#64748B">DC ISOLATOR</text>
            <rect x="180" y="242" width="95" height="15" rx="3" fill="#1E293B" />
            <circle cx="195" cy="249" r="3" fill="#94A3B8" />
            <circle cx="210" cy="249" r="3" fill="#94A3B8" />
            <circle cx="225" cy="249" r="3" fill="#94A3B8" />
            <circle cx="240" cy="249" r="3" fill="#94A3B8" />
            <circle cx="255" cy="249" r="3" fill="#94A3B8" />
          </svg>
        )}

        {artType === 'inverter_string' && (
          <svg viewBox="0 0 400 320" className="w-full h-full max-h-72 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="200" cy="285" rx="130" ry="10" fill="#0f172a" fillOpacity="0.08" />
            {/* Main Inverter Chassis */}
            <rect x="105" y="55" width="190" height="215" rx="14" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2.5" />
            <rect x="110" y="60" width="180" height="205" rx="10" fill="#FFFFFF" />
            {/* Side Heat Sink Ribs */}
            <g stroke="#94A3B8" strokeWidth="2">
              <line x1="95" y1="80" x2="105" y2="80" />
              <line x1="95" y1="100" x2="105" y2="100" />
              <line x1="95" y1="120" x2="105" y2="120" />
              <line x1="95" y1="140" x2="105" y2="140" />
              <line x1="95" y1="160" x2="105" y2="160" />
              <line x1="95" y1="180" x2="105" y2="180" />
              <line x1="95" y1="200" x2="105" y2="200" />
              <line x1="295" y1="80" x2="305" y2="80" />
              <line x1="295" y1="100" x2="305" y2="100" />
              <line x1="295" y1="120" x2="305" y2="120" />
              <line x1="295" y1="140" x2="305" y2="140" />
              <line x1="295" y1="160" x2="305" y2="160" />
              <line x1="295" y1="180" x2="305" y2="180" />
              <line x1="295" y1="200" x2="305" y2="200" />
            </g>
            {/* Brand Header */}
            <text x="130" y="90" fontFamily="sans-serif" fontSize="13" fontWeight="800" fill="#0F172A">
              {product.brand.toUpperCase()}
            </text>
            <text x="130" y="102" fontFamily="sans-serif" fontSize="7" fontWeight="600" fill="#0284C7">
              ON-GRID STRING INVERTER
            </text>
            {/* Center Matrix Display */}
            <rect x="130" y="120" width="140" height="60" rx="6" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
            <text x="140" y="145" fontFamily="monospace" fontSize="11" fill="#38BDF8" fontWeight="bold">
              {product.powerRating || '10.0 kW'}
            </text>
            <text x="140" y="162" fontFamily="monospace" fontSize="7" fill="#10B981">
              STATUS: GRID RUNNING 98.3%
            </text>
            {/* Dual MPPT Indicator Bars */}
            <rect x="130" y="195" width="65" height="18" rx="3" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1" />
            <text x="135" y="207" fontFamily="sans-serif" fontSize="7" fill="#475569">MPPT 1: OK</text>
            <rect x="205" y="195" width="65" height="18" rx="3" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1" />
            <text x="210" y="207" fontFamily="sans-serif" fontSize="7" fill="#475569">MPPT 2: OK</text>
            {/* Bottom Connector Bar */}
            <rect x="130" y="235" width="140" height="18" rx="3" fill="#1E293B" />
            <circle cx="150" cy="244" r="3" fill="#E2E8F0" />
            <circle cx="170" cy="244" r="3" fill="#E2E8F0" />
            <circle cx="210" cy="244" r="3" fill="#E2E8F0" />
            <circle cx="230" cy="244" r="3" fill="#E2E8F0" />
            <circle cx="250" cy="244" r="3" fill="#E2E8F0" />
          </svg>
        )}

        {artType === 'inverter_offgrid' && (
          <svg viewBox="0 0 400 320" className="w-full h-full max-h-72 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="200" cy="285" rx="130" ry="10" fill="#0f172a" fillOpacity="0.08" />
            {/* Heavy-duty IP65 Enclosure */}
            <rect x="100" y="50" width="200" height="225" rx="8" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="2.5" />
            <rect x="106" y="56" width="188" height="213" rx="6" fill="#FFFFFF" />
            {/* Corner Hex Bolts */}
            <circle cx="112" cy="62" r="2.5" fill="#64748B" />
            <circle cx="288" cy="62" r="2.5" fill="#64748B" />
            <circle cx="112" cy="262" r="2.5" fill="#64748B" />
            <circle cx="288" cy="262" r="2.5" fill="#64748B" />
            {/* Logo and Rating */}
            <text x="130" y="85" fontFamily="sans-serif" fontSize="13" fontWeight="800" fill="#0F172A">
              {product.brand.toUpperCase()}
            </text>
            <text x="130" y="98" fontFamily="sans-serif" fontSize="7.5" fontWeight="600" fill="#D97706">
              IP65 OFF-GRID SOLAR INVERTER
            </text>
            {/* High-Contrast LCD Screen */}
            <rect x="125" y="112" width="150" height="75" rx="4" fill="#0A0F1D" stroke="#334155" strokeWidth="1.5" />
            <text x="135" y="135" fontFamily="monospace" fontSize="9" fill="#F59E0B">
              OUTPUT: 230VAC 50Hz
            </text>
            <text x="135" y="152" fontFamily="monospace" fontSize="8" fill="#10B981">
              BATT 48V · CHG 120A
            </text>
            <text x="135" y="169" fontFamily="monospace" fontSize="7.5" fill="#60A5FA">
              PV 5.2kW · MPPT DUAL
            </text>
            {/* Status Indicator Bar */}
            <rect x="125" y="200" width="150" height="20" rx="3" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
            <circle cx="140" cy="210" r="3.5" fill="#10B981" />
            <text x="150" y="213" fontFamily="sans-serif" fontSize="7" fill="#475569">SOLAR</text>
            <circle cx="190" cy="210" r="3.5" fill="#0284C7" />
            <text x="200" y="213" fontFamily="sans-serif" fontSize="7" fill="#475569">BATTERY</text>
            <circle cx="240" cy="210" r="3.5" fill="#10B981" />
            <text x="250" y="213" fontFamily="sans-serif" fontSize="7" fill="#475569">LOAD</text>
            {/* Bottom Sealed Cable Ingress Ports */}
            <g fill="#1E293B">
              <rect x="125" y="240" width="18" height="16" rx="2" />
              <rect x="155" y="240" width="18" height="16" rx="2" />
              <rect x="185" y="240" width="30" height="16" rx="2" />
              <rect x="225" y="240" width="18" height="16" rx="2" />
              <rect x="255" y="240" width="18" height="16" rx="2" />
            </g>
          </svg>
        )}

        {artType === 'battery_rack' && (
          <svg viewBox="0 0 400 320" className="w-full h-full max-h-72 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="200" cy="285" rx="145" ry="10" fill="#0f172a" fillOpacity="0.08" />
            {/* Standard 3U 19-inch Rack Chassis */}
            <rect x="75" y="90" width="250" height="160" rx="6" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="2.5" />
            <rect x="80" y="95" width="240" height="150" rx="4" fill="#FFFFFF" />
            {/* Rack Mount Left & Right Ears */}
            <rect x="65" y="90" width="12" height="160" rx="2" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />
            <circle cx="71" cy="110" r="2.5" fill="#64748B" />
            <circle cx="71" cy="170" r="2.5" fill="#64748B" />
            <circle cx="71" cy="230" r="2.5" fill="#64748B" />
            <rect x="323" y="90" width="12" height="160" rx="2" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />
            <circle cx="329" cy="110" r="2.5" fill="#64748B" />
            <circle cx="329" cy="170" r="2.5" fill="#64748B" />
            <circle cx="329" cy="230" r="2.5" fill="#64748B" />
            {/* Front Heavy Metal Carry Handles */}
            <rect x="88" y="130" width="6" height="70" rx="3" fill="#64748B" />
            <rect x="306" y="130" width="6" height="70" rx="3" fill="#64748B" />
            {/* Brand and Model Identifier */}
            <text x="115" y="125" fontFamily="sans-serif" fontSize="13" fontWeight="800" fill="#0F172A">
              {product.brand}
            </text>
            <text x="115" y="138" fontFamily="sans-serif" fontSize="8" fontWeight="600" fill="#0284C7">
              51.2V 100Ah · 5.12kWh LiFePO4
            </text>
            {/* Breaker Switch */}
            <rect x="115" y="155" width="24" height="42" rx="3" fill="#1E293B" />
            <rect x="120" y="160" width="14" height="16" rx="2" fill="#DC2626" />
            <text x="127" y="210" textAnchor="middle" fontFamily="sans-serif" fontSize="6" fill="#64748B">BREAKER</text>
            {/* SOC Capacity LED Bar */}
            <g fill="#10B981">
              <rect x="155" y="165" width="10" height="4" rx="1" />
              <rect x="155" y="172" width="10" height="4" rx="1" />
              <rect x="155" y="179" width="10" height="4" rx="1" />
              <rect x="155" y="186" width="10" height="4" rx="1" />
              <rect x="155" y="193" width="10" height="4" rx="1" />
            </g>
            <text x="160" y="208" textAnchor="middle" fontFamily="sans-serif" fontSize="6" fill="#64748B">SOC</text>
            {/* Communication Ports (CAN/RS485) */}
            <rect x="180" y="165" width="35" height="18" rx="2" fill="#0F172A" />
            <rect x="185" y="170" width="10" height="8" rx="1" fill="#E2E8F0" />
            <rect x="200" y="170" width="10" height="8" rx="1" fill="#E2E8F0" />
            <text x="197" y="195" textAnchor="middle" fontFamily="sans-serif" fontSize="5.5" fill="#64748B">CAN / RS485</text>
            {/* High Current DC Terminals (+ / -) */}
            <circle cx="250" cy="180" r="14" fill="#DC2626" />
            <text x="250" y="185" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#FFFFFF">+</text>
            <circle cx="285" cy="180" r="14" fill="#1E293B" />
            <text x="285" y="185" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#FFFFFF">-</text>
            <text x="267" y="208" textAnchor="middle" fontFamily="sans-serif" fontSize="6.5" fill="#64748B">MAX 100A DC</text>
          </svg>
        )}

        {artType === 'battery_cni' && (
          <svg viewBox="0 0 400 320" className="w-full h-full max-h-72 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="200" cy="290" rx="120" ry="12" fill="#0f172a" fillOpacity="0.09" />
            {/* Tall C&I Industrial Cabinet Enclosure */}
            <rect x="125" y="35" width="150" height="250" rx="8" fill="#F8FAFC" stroke="#64748B" strokeWidth="2.5" />
            <rect x="130" y="40" width="140" height="240" rx="6" fill="#FFFFFF" />
            {/* Top HVAC Air Inlet Vents */}
            <g stroke="#94A3B8" strokeWidth="1.5">
              <line x1="145" y1="52" x2="255" y2="52" />
              <line x1="145" y1="58" x2="255" y2="58" />
              <line x1="145" y1="64" x2="255" y2="64" />
            </g>
            {/* Brand Logo & Model */}
            <text x="145" y="82" fontFamily="sans-serif" fontSize="11" fontWeight="800" fill="#0F172A">
              DEYE ORION W
            </text>
            <text x="145" y="93" fontFamily="sans-serif" fontSize="6.5" fontWeight="600" fill="#0284C7">
              C&I ESS · 60 - 192kWh
            </text>
            {/* Master Touch Control Panel */}
            <rect x="145" y="102" width="110" height="38" rx="4" fill="#0F172A" />
            <text x="155" y="120" fontFamily="monospace" fontSize="8" fill="#10B981" fontWeight="bold">768V · 120kWh</text>
            <text x="155" y="132" fontFamily="monospace" fontSize="7" fill="#38BDF8">HVAC: 23°C OK</text>
            {/* Emergency Stop Button */}
            <circle cx="240" cy="120" r="6" fill="#DC2626" />
            <circle cx="240" cy="120" r="3" fill="#991B1B" />
            {/* Modular Battery Rack Bays */}
            <rect x="145" y="150" width="110" height="22" rx="3" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
            <text x="152" y="164" fontFamily="sans-serif" fontSize="6.5" fill="#475569">BAY 1: 5.12kWh [OK]</text>
            <rect x="145" y="177" width="110" height="22" rx="3" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
            <text x="152" y="191" fontFamily="sans-serif" fontSize="6.5" fill="#475569">BAY 2: 5.12kWh [OK]</text>
            <rect x="145" y="204" width="110" height="22" rx="3" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
            <text x="152" y="218" fontFamily="sans-serif" fontSize="6.5" fill="#475569">BAY 3: 5.12kWh [OK]</text>
            <rect x="145" y="231" width="110" height="22" rx="3" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
            <text x="152" y="245" fontFamily="sans-serif" fontSize="6.5" fill="#475569">BAY 4: 5.12kWh [OK]</text>
            {/* Bottom Plinth */}
            <rect x="132" y="265" width="136" height="12" rx="2" fill="#334155" />
          </svg>
        )}

        {artType === 'lps_compact' && (
          <svg viewBox="0 0 400 320" className="w-full h-full max-h-72 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="200" cy="275" rx="130" ry="10" fill="#0f172a" fillOpacity="0.08" />
            {/* Compact LPS Storage Cabinet */}
            <rect x="110" y="65" width="180" height="200" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="2.5" />
            <rect x="115" y="70" width="170" height="190" rx="8" fill="#FFFFFF" />
            {/* Top Handle */}
            <rect x="160" y="50" width="80" height="16" rx="4" fill="#334155" />
            {/* Brand Logo */}
            <text x="135" y="96" fontFamily="sans-serif" fontSize="12" fontWeight="800" fill="#0F172A">
              SOLARSTOCK
            </text>
            <text x="135" y="108" fontFamily="sans-serif" fontSize="7.5" fontWeight="600" fill="#0284C7">
              SMART LITHIUM STORAGE LPS
            </text>
            {/* High Contrast Digital Blue LCD */}
            <rect x="130" y="118" width="140" height="60" rx="6" fill="#0284C7" stroke="#0369A1" strokeWidth="1.5" />
            <rect x="134" y="122" width="132" height="52" rx="4" fill="#075985" />
            <text x="145" y="142" fontFamily="monospace" fontSize="11" fill="#FFFFFF" fontWeight="bold">
              {product.powerRating || '500W'}
            </text>
            <text x="145" y="157" fontFamily="monospace" fontSize="7" fill="#BAE6FD">
              MPPT ACTIVE · 230V 50Hz
            </text>
            <text x="145" y="167" fontFamily="monospace" fontSize="6.5" fill="#38BDF8">
              BATT 100% · RUNTIME: 6.5H
            </text>
            {/* Front Panel Ports */}
            <rect x="130" y="190" width="34" height="34" rx="4" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
            <circle cx="147" cy="207" r="10" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
            <circle cx="144" cy="207" r="1.5" fill="#0F172A" />
            <circle cx="150" cy="207" r="1.5" fill="#0F172A" />
            <text x="147" y="233" textAnchor="middle" fontFamily="sans-serif" fontSize="6" fill="#64748B">230V AC</text>
            {/* Dual USB Ports */}
            <rect x="175" y="195" width="22" height="12" rx="2" fill="#1E293B" />
            <rect x="175" y="212" width="22" height="12" rx="2" fill="#1E293B" />
            <text x="186" y="233" textAnchor="middle" fontFamily="sans-serif" fontSize="6" fill="#64748B">USB QC</text>
            {/* Solar Input Terminals */}
            <rect x="215" y="195" width="45" height="28" rx="4" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1" />
            <circle cx="228" cy="209" r="4" fill="#DC2626" />
            <circle cx="247" cy="209" r="4" fill="#1E293B" />
            <text x="238" y="233" textAnchor="middle" fontFamily="sans-serif" fontSize="6" fill="#64748B">SOLAR IN</text>
          </svg>
        )}

        {artType === 'solar_panel' && (
          <svg viewBox="0 0 400 320" className="w-full h-full max-h-72 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="200" cy="290" rx="140" ry="12" fill="#0f172a" fillOpacity="0.08" />
            {/* 30mm Anodized Silver Frame */}
            <rect x="95" y="30" width="210" height="255" rx="4" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
            <rect x="101" y="36" width="198" height="243" rx="2" fill="#0B132B" stroke="#1E293B" strokeWidth="1.5" />
            {/* High-Efficiency Monocrystalline Wafer Grid (12-cell mockup) */}
            <g stroke="#38BDF8" strokeOpacity="0.3" strokeWidth="0.8">
              {/* Vertical Busbars */}
              <line x1="125" y1="36" x2="125" y2="279" />
              <line x1="150" y1="36" x2="150" y2="279" />
              <line x1="175" y1="36" x2="175" y2="279" />
              <line x1="200" y1="36" x2="200" y2="279" />
              <line x1="225" y1="36" x2="225" y2="279" />
              <line x1="250" y1="36" x2="250" y2="279" />
              <line x1="275" y1="36" x2="275" y2="279" />
              {/* Horizontal Grid Interconnects */}
              <line x1="101" y1="76" x2="299" y2="76" />
              <line x1="101" y1="116" x2="299" y2="116" />
              <line x1="101" y1="156" x2="299" y2="156" />
              <line x1="101" y1="196" x2="299" y2="196" />
              <line x1="101" y1="236" x2="299" y2="236" />
            </g>
            {/* Photovoltaic Glass Glare Angle */}
            <path d="M101 36 L260 36 L140 279 L101 279 Z" fill="#FFFFFF" fillOpacity="0.04" />
            {/* Center Brand Spec Badge */}
            <rect x="135" y="140" width="130" height="36" rx="4" fill="#0F172A" fillOpacity="0.9" stroke="#0284C7" strokeWidth="1" />
            <text x="200" y="154" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fontWeight="800" fill="#FFFFFF">
              {product.brand} · {product.powerRating}
            </text>
            <text x="200" y="167" textAnchor="middle" fontFamily="sans-serif" fontSize="6.5" fill="#38BDF8">
              N-TYPE TOPCon · 30-YEAR WARRANTY
            </text>
          </svg>
        )}

        {artType === 'forklift' && (
          <svg viewBox="0 0 400 320" className="w-full h-full max-h-72 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="200" cy="275" rx="140" ry="12" fill="#0f172a" fillOpacity="0.1" />
            {/* Front Forks */}
            <path d="M290 250 L345 250 L345 245 L290 245 Z" fill="#475569" stroke="#1E293B" strokeWidth="1" />
            <path d="M285 170 L290 170 L290 250 L285 250 Z" fill="#334155" />
            {/* Front High Visibility Mast */}
            <rect x="270" y="80" width="16" height="175" rx="2" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
            <rect x="255" y="80" width="12" height="175" rx="2" fill="#334155" stroke="#0F172A" strokeWidth="1" />
            {/* Overhead Safety Protective Cage */}
            <path d="M150 100 L240 100 L240 170 L150 170 Z" fill="none" stroke="#1E293B" strokeWidth="3" />
            <line x1="170" y1="100" x2="170" y2="170" stroke="#1E293B" strokeWidth="2.5" />
            <line x1="200" y1="100" x2="200" y2="170" stroke="#1E293B" strokeWidth="2.5" />
            {/* EP Equipment Iconic Red/Orange Chassis */}
            <path d="M100 240 L100 170 L160 170 L190 205 L260 205 L260 240 Z" fill="#DC2626" stroke="#991B1B" strokeWidth="2" />
            <text x="140" y="225" fontFamily="sans-serif" fontSize="12" fontWeight="900" fill="#FFFFFF">
              EP
            </text>
            <text x="160" y="225" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#FEE2E2">
              80V Li-ion
            </text>
            {/* Operator Seat */}
            <path d="M175 165 C175 155 185 155 190 165 L190 180 L175 180 Z" fill="#0F172A" />
            {/* Solid Industrial Wheels */}
            <circle cx="130" cy="245" r="24" fill="#0F172A" stroke="#334155" strokeWidth="3" />
            <circle cx="130" cy="245" r="10" fill="#64748B" />
            <circle cx="245" cy="245" r="20" fill="#0F172A" stroke="#334155" strokeWidth="3" />
            <circle cx="245" cy="245" r="8" fill="#64748B" />
          </svg>
        )}

        {artType === 'pallet_truck' && (
          <svg viewBox="0 0 400 320" className="w-full h-full max-h-72 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="200" cy="270" rx="130" ry="10" fill="#0f172a" fillOpacity="0.09" />
            {/* Forks extending right */}
            <path d="M190 230 L320 230 L320 242 L190 242 Z" fill="#DC2626" stroke="#991B1B" strokeWidth="1.5" />
            <circle cx="305" cy="246" r="6" fill="#334155" />
            {/* Main Power Head Chassis */}
            <rect x="110" y="165" width="85" height="85" rx="8" fill="#DC2626" stroke="#991B1B" strokeWidth="2" />
            {/* Removable Lithium Battery Pack */}
            <rect x="125" y="145" width="45" height="35" rx="4" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
            <rect x="135" y="152" width="25" height="8" rx="2" fill="#10B981" />
            <text x="147" y="172" textAnchor="middle" fontFamily="sans-serif" fontSize="5.5" fill="#E2E8F0" fontWeight="bold">24V Li-ion</text>
            {/* Ergonomic Steer Tiller */}
            <line x1="130" y1="165" x2="85" y2="100" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" />
            {/* Tiller Butterfly Handle */}
            <path d="M75 95 C85 85 95 90 95 105" stroke="#0F172A" strokeWidth="4" fill="none" />
            <circle cx="85" cy="98" r="3" fill="#DC2626" />
            {/* EP Logo */}
            <text x="130" y="215" fontFamily="sans-serif" fontSize="13" fontWeight="900" fill="#FFFFFF">
              EP
            </text>
            <text x="130" y="230" fontFamily="sans-serif" fontSize="7" fontWeight="bold" fill="#FEE2E2">
              1.5 TON
            </text>
            {/* Main Steer Drive Wheel */}
            <circle cx="150" cy="254" r="16" fill="#0F172A" stroke="#334155" strokeWidth="3" />
            <circle cx="150" cy="254" r="6" fill="#64748B" />
          </svg>
        )}

        {artType === 'stacker' && (
          <svg viewBox="0 0 400 320" className="w-full h-full max-h-72 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="200" cy="275" rx="125" ry="10" fill="#0f172a" fillOpacity="0.09" />
            {/* High Visibility Single Center Mono Mast */}
            <rect x="185" y="55" width="22" height="205" rx="3" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
            {/* Hydraulic Lift Cylinder */}
            <rect x="191" y="70" width="10" height="185" fill="#64748B" />
            {/* Forks carriage */}
            <path d="M205 160 L290 160 L290 170 L205 170 Z" fill="#475569" stroke="#1E293B" strokeWidth="1" />
            {/* Chassis Enclosure */}
            <rect x="110" y="180" width="80" height="80" rx="6" fill="#DC2626" stroke="#991B1B" strokeWidth="2" />
            <text x="125" y="225" fontFamily="sans-serif" fontSize="12" fontWeight="900" fill="#FFFFFF">
              EP 1.2T
            </text>
            {/* Bottom Support Outriggers */}
            <path d="M190 255 L285 255 L285 263 L190 263 Z" fill="#334155" />
            <circle cx="275" cy="265" r="5" fill="#0F172A" />
            {/* Operator Control Tiller */}
            <line x1="120" y1="180" x2="80" y2="120" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
            <circle cx="78" cy="118" r="7" stroke="#0F172A" strokeWidth="3" fill="#DC2626" />
            {/* Drive Wheel */}
            <circle cx="150" cy="262" r="14" fill="#0F172A" stroke="#334155" strokeWidth="2.5" />
          </svg>
        )}

        {artType === 'portable_power' && (
          <svg viewBox="0 0 400 320" className="w-full h-full max-h-72 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="200" cy="265" rx="125" ry="10" fill="#0f172a" fillOpacity="0.08" />
            {/* Molded Rugged Outer Casing */}
            <rect x="115" y="85" width="170" height="165" rx="14" fill="#1E293B" stroke="#0F172A" strokeWidth="2.5" />
            <rect x="120" y="90" width="160" height="155" rx="10" fill="#334155" />
            {/* Top Ergonomic Carry Handle */}
            <path d="M150 85 L150 60 C150 55 155 50 160 50 L240 50 C245 50 250 55 250 60 L250 85 Z" fill="#0F172A" stroke="#334155" strokeWidth="2" />
            <rect x="165" y="58" width="70" height="15" rx="3" fill="#475569" />
            {/* Center High-Tech LCD Telemetry */}
            <rect x="135" y="105" width="130" height="48" rx="6" fill="#020617" stroke="#0284C7" strokeWidth="1" />
            <text x="145" y="125" fontFamily="monospace" fontSize="12" fill="#38BDF8" fontWeight="bold">98%</text>
            <text x="175" y="125" fontFamily="monospace" fontSize="8" fill="#10B981">
              IN: 180W · OUT: {product.powerRating?.split(' ')[0] || '200W'}
            </text>
            <text x="145" y="142" fontFamily="monospace" fontSize="6.5" fill="#94A3B8">
              LiFePO4 3000+ CYCLES · 8.5H LEFT
            </text>
            {/* Dual AC Outlets */}
            <rect x="135" y="165" width="36" height="36" rx="4" fill="#0F172A" stroke="#475569" strokeWidth="1" />
            <circle cx="153" cy="183" r="11" fill="#1E293B" />
            <circle cx="149" cy="183" r="1.5" fill="#E2E8F0" />
            <circle cx="157" cy="183" r="1.5" fill="#E2E8F0" />
            <text x="153" y="210" textAnchor="middle" fontFamily="sans-serif" fontSize="5.5" fill="#94A3B8">230V AC</text>
            {/* USB-C PD & USB-A QC 3.0 Ports */}
            <rect x="180" y="168" width="38" height="32" rx="3" fill="#0F172A" stroke="#475569" strokeWidth="1" />
            <rect x="185" y="173" width="12" height="4" rx="1" fill="#0284C7" />
            <rect x="202" y="173" width="12" height="4" rx="1" fill="#0284C7" />
            <rect x="188" y="184" width="22" height="7" rx="1" fill="#F59E0B" />
            <text x="199" y="210" textAnchor="middle" fontFamily="sans-serif" fontSize="5.5" fill="#94A3B8">USB-C PD</text>
            {/* LED Ambient Light Bar */}
            <rect x="228" y="168" width="38" height="32" rx="3" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1" />
            <text x="247" y="187" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#713F12" fontWeight="bold">LED</text>
            <text x="247" y="210" textAnchor="middle" fontFamily="sans-serif" fontSize="5.5" fill="#94A3B8">SOS LAMP</text>
          </svg>
        )}

        {artType === 'solar_pump_submersible' && (
          <svg viewBox="0 0 400 320" className="w-full h-full max-h-72 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="200" cy="285" rx="120" ry="10" fill="#0f172a" fillOpacity="0.08" />
            {/* Cylindrical Stainless Steel Deep Borehole Casing */}
            <rect x="175" y="40" width="50" height="235" rx="6" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
            {/* Polished Chrome Highlight */}
            <line x1="183" y1="40" x2="183" y2="275" stroke="#FFFFFF" strokeWidth="4" />
            <line x1="195" y1="40" x2="195" y2="275" stroke="#CBD5E1" strokeWidth="1.5" />
            {/* Top Discharge Nozzle Head */}
            <rect x="185" y="25" width="30" height="18" rx="2" fill="#64748B" stroke="#475569" strokeWidth="1" />
            <circle cx="200" cy="28" r="6" fill="#1E293B" />
            {/* Middle Water Intake Suction Screen */}
            <rect x="175" y="145" width="50" height="26" fill="#475569" />
            <g fill="#E2E8F0">
              <circle cx="183" cy="152" r="1.5" />
              <circle cx="191" cy="152" r="1.5" />
              <circle cx="199" cy="152" r="1.5" />
              <circle cx="207" cy="152" r="1.5" />
              <circle cx="215" cy="152" r="1.5" />
              <circle cx="187" cy="162" r="1.5" />
              <circle cx="195" cy="162" r="1.5" />
              <circle cx="203" cy="162" r="1.5" />
              <circle cx="211" cy="162" r="1.5" />
            </g>
            {/* Laser Etched Brand & Spec Mark */}
            <text x="200" y="95" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fontWeight="bold" fill="#334155" letterSpacing="0.05em">
              DIFFUL 4-INCH
            </text>
            <text x="200" y="105" textAnchor="middle" fontFamily="sans-serif" fontSize="5.5" fill="#64748B">
              STAINLESS STEEL S/S
            </text>
            <text x="200" y="225" textAnchor="middle" fontFamily="sans-serif" fontSize="6.5" fontWeight="bold" fill="#0284C7">
              BLDC MOTOR
            </text>
            <text x="200" y="235" textAnchor="middle" fontFamily="sans-serif" fontSize="5" fill="#475569">
              AC/DC HYBRID 180M
            </text>
          </svg>
        )}

        {artType === 'solar_pump_surface' && (
          <svg viewBox="0 0 400 320" className="w-full h-full max-h-72 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="200" cy="275" rx="130" ry="10" fill="#0f172a" fillOpacity="0.08" />
            {/* Electric Motor Housing */}
            <rect x="115" y="120" width="105" height="110" rx="6" fill="#0284C7" stroke="#0369A1" strokeWidth="2" />
            {/* Cooling Fins on Motor */}
            <g stroke="#0369A1" strokeWidth="2">
              <line x1="125" y1="120" x2="125" y2="230" />
              <line x1="140" y1="120" x2="140" y2="230" />
              <line x1="155" y1="120" x2="155" y2="230" />
              <line x1="170" y1="120" x2="170" y2="230" />
              <line x1="185" y1="120" x2="185" y2="230" />
              <line x1="200" y1="120" x2="200" y2="230" />
            </g>
            {/* Centrifugal Volute Pump Head */}
            <circle cx="260" cy="175" r="45" fill="#0F172A" stroke="#334155" strokeWidth="2.5" />
            {/* Top Discharge Flange */}
            <rect x="250" y="95" width="22" height="38" rx="2" fill="#334155" stroke="#1E293B" strokeWidth="1" />
            <rect x="244" y="90" width="34" height="8" rx="2" fill="#64748B" />
            {/* Front Suction Port */}
            <circle cx="260" cy="175" r="16" fill="#1E293B" stroke="#64748B" strokeWidth="2" />
            {/* Mounting Cast Iron Base Footing */}
            <rect x="105" y="230" width="190" height="20" rx="3" fill="#1E293B" />
            <circle cx="120" cy="240" r="3" fill="#94A3B8" />
            <circle cx="280" cy="240" r="3" fill="#94A3B8" />
          </svg>
        )}

        {artType === 'vfd_controller' && (
          <svg viewBox="0 0 400 320" className="w-full h-full max-h-72 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="200" cy="280" rx="120" ry="10" fill="#0f172a" fillOpacity="0.08" />
            {/* Heavy-Duty Die Cast IP65 Wall Housing */}
            <rect x="120" y="50" width="160" height="220" rx="8" fill="#F8FAFC" stroke="#64748B" strokeWidth="2.5" />
            <rect x="125" y="55" width="150" height="210" rx="6" fill="#FFFFFF" />
            {/* Heat Sink Fins on Sides */}
            <g stroke="#94A3B8" strokeWidth="2">
              <line x1="110" y1="80" x2="120" y2="80" />
              <line x1="110" y1="110" x2="120" y2="110" />
              <line x1="110" y1="140" x2="120" y2="140" />
              <line x1="110" y1="170" x2="120" y2="170" />
              <line x1="110" y1="200" x2="120" y2="200" />
              <line x1="280" y1="80" x2="290" y2="80" />
              <line x1="280" y1="110" x2="290" y2="110" />
              <line x1="280" y1="140" x2="290" y2="140" />
              <line x1="280" y1="170" x2="290" y2="170" />
              <line x1="280" y1="200" x2="290" y2="200" />
            </g>
            {/* SAJ Brand Title */}
            <text x="140" y="82" fontFamily="sans-serif" fontSize="13" fontWeight="900" fill="#0F172A">
              SAJ
            </text>
            <text x="140" y="94" fontFamily="sans-serif" fontSize="7" fontWeight="600" fill="#0284C7">
              SOLAR PUMP VFD CONTROLLER
            </text>
            {/* Digital 7-Segment Parameter Display */}
            <rect x="140" y="108" width="120" height="48" rx="4" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
            <text x="150" y="132" fontFamily="monospace" fontSize="14" fill="#EF4444" fontWeight="bold">
              50.00 Hz
            </text>
            <text x="150" y="146" fontFamily="monospace" fontSize="6.5" fill="#10B981">
              MPPT RUN · 380V 3PH
            </text>
            {/* Keypad Buttons */}
            <g fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1">
              <rect x="145" y="168" width="22" height="16" rx="3" />
              <rect x="173" y="168" width="22" height="16" rx="3" />
              <rect x="201" y="168" width="22" height="16" rx="3" />
              <rect x="229" y="168" width="22" height="16" rx="3" fill="#10B981" />
            </g>
            <text x="156" y="179" textAnchor="middle" fontFamily="sans-serif" fontSize="6" fill="#1E293B">PRG</text>
            <text x="184" y="179" textAnchor="middle" fontFamily="sans-serif" fontSize="6" fill="#1E293B">UP</text>
            <text x="212" y="179" textAnchor="middle" fontFamily="sans-serif" fontSize="6" fill="#1E293B">DN</text>
            <text x="240" y="179" textAnchor="middle" fontFamily="sans-serif" fontSize="6" fill="#FFFFFF" fontWeight="bold">RUN</text>
            {/* Bottom Sealed Cable Ingress Glands */}
            <g fill="#334155">
              <rect x="140" y="240" width="18" height="18" rx="2" />
              <rect x="170" y="240" width="18" height="18" rx="2" />
              <rect x="200" y="240" width="18" height="18" rx="2" />
              <rect x="230" y="240" width="18" height="18" rx="2" />
            </g>
          </svg>
        )}
      </div>

      {/* Realistic Pure-White Studio Equipment Base Waterline */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-slate-200/50 to-transparent pointer-events-none" />
    </div>
  );
};

export const ProductArtwork = React.memo(ProductArtworkComponent);
