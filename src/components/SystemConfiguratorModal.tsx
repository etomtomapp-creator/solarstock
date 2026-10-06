import React, { useState } from 'react';
import { X, Calculator, Zap, BatteryCharging, Sun, ArrowRight, ShieldCheck, CheckCircle2, RotateCcw, FileSpreadsheet, Waves, Download } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

interface SystemConfiguratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuoteWithBOM: (bomNotes: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const SystemConfiguratorModal: React.FC<SystemConfiguratorModalProps> = ({
  isOpen,
  onClose,
  onOpenQuoteWithBOM,
  onSelectProduct
}) => {
  const [appType, setAppType] = useState<'residential' | 'cni' | 'offgrid' | 'pumping'>('residential');
  
  // Sizing inputs
  const [dailyKWh, setDailyKWh] = useState<number>(30); // 30 kWh default
  const [peakKW, setPeakKW] = useState<number>(6); // 6 kW
  const [sunHours, setSunHours] = useState<number>(4.5); // 4.5 peak sun hours
  const [autonomyHours, setAutonomyHours] = useState<number>(8); // 8 hours night backup
  const [boreholeDepth, setBoreholeDepth] = useState<number>(90); // 90 meters for pump
  const [dailyWaterM3, setDailyWaterM3] = useState<number>(25); // 25 cubic meters water

  if (!isOpen) return null;

  // Preset switch
  const handlePresetChange = (type: 'residential' | 'cni' | 'offgrid' | 'pumping') => {
    setAppType(type);
    if (type === 'residential') {
      setDailyKWh(30);
      setPeakKW(6);
      setAutonomyHours(8);
    } else if (type === 'cni') {
      setDailyKWh(280);
      setPeakKW(45);
      setAutonomyHours(6);
    } else if (type === 'offgrid') {
      setDailyKWh(45);
      setPeakKW(8);
      setAutonomyHours(14);
    } else if (type === 'pumping') {
      setBoreholeDepth(90);
      setDailyWaterM3(30);
    }
  };

  // Calculations
  let recommendedPVkW = 0;
  let panelQty = 0;
  let recommendedInverter: Product = PRODUCTS[19]; // Default Deye 8kW hybrid
  let inverterQty = 1;
  let batteryKWh = 0;
  let batteryQty = 0;
  let batteryProduct: Product | null = PRODUCTS[18]; // Deye 5.12kWh rack
  let pumpProduct: Product | null = null;
  let vfdProduct: Product | null = null;

  if (appType === 'residential') {
    recommendedPVkW = Number((dailyKWh / sunHours * 1.2).toFixed(1));
    panelQty = Math.ceil((recommendedPVkW * 1000) / 620);
    
    if (peakKW <= 5) {
      recommendedInverter = PRODUCTS[36] || PRODUCTS[19]; // Deye 5kW or 8kW
    } else if (peakKW <= 8) {
      recommendedInverter = PRODUCTS[19]; // Deye 8kW hybrid
    } else {
      recommendedInverter = PRODUCTS[31]; // Deye 10kW three-phase hybrid
    }

    batteryKWh = Number(((dailyKWh * (autonomyHours / 24)) / 0.85).toFixed(1));
    batteryQty = Math.max(1, Math.ceil(batteryKWh / 5.12));
    batteryProduct = PRODUCTS[18]; // Deye 5.12kWh rack

  } else if (appType === 'cni') {
    recommendedPVkW = Number((dailyKWh / sunHours * 1.25).toFixed(1));
    panelQty = Math.ceil((recommendedPVkW * 1000) / 620);
    
    // Multiple 20kW or 12kW inverters
    inverterQty = Math.max(1, Math.ceil(peakKW / 20));
    recommendedInverter = PRODUCTS[33]; // Deye 20kW 3-phase hybrid

    batteryKWh = Number((peakKW * autonomyHours * 0.7).toFixed(1));
    batteryProduct = PRODUCTS[12]; // Deye ORION W C&I ESS (60-192kWh)
    batteryQty = Math.max(1, Math.ceil(batteryKWh / 60));

  } else if (appType === 'offgrid') {
    recommendedPVkW = Number((dailyKWh / sunHours * 1.35).toFixed(1));
    panelQty = Math.ceil((recommendedPVkW * 1000) / 620);

    if (peakKW <= 5) {
      recommendedInverter = PRODUCTS[22]; // Deye 5kW IP65 off-grid
    } else {
      recommendedInverter = PRODUCTS[29]; // Deye 6kW off-grid (or multi-unit)
      inverterQty = Math.max(1, Math.ceil(peakKW / 6));
    }

    batteryKWh = Number(((dailyKWh * (autonomyHours / 24)) / 0.8).toFixed(1));
    batteryQty = Math.max(2, Math.ceil(batteryKWh / 5.12));
    batteryProduct = PRODUCTS[18];

  } else if (appType === 'pumping') {
    // Water pumping hydraulics: P = rho * g * Q * H / efficiency
    // Approx 2.2kW or 4kW VFD
    if (boreholeDepth > 100 || dailyWaterM3 > 25) {
      recommendedPVkW = 5.6;
      panelQty = 9; // 9 * 620W = 5.58kW
      vfdProduct = PRODUCTS[3]; // SAJ 4kW Solar Pump VFD
      pumpProduct = PRODUCTS[38]; // Difful 4" AC/DC hybrid submersible
    } else {
      recommendedPVkW = 3.2;
      panelQty = 5;
      vfdProduct = PRODUCTS[4]; // SAJ 2.2kW VFD
      pumpProduct = PRODUCTS[38];
    }
    batteryProduct = null;
  }

  const annualGenerationKWh = Math.round(recommendedPVkW * sunHours * 365 * 0.82);
  const annualSavingsUSD = Math.round(annualGenerationKWh * 0.115); // Average $0.115 / kWh
  const annualCO2Tons = Number((annualGenerationKWh * 0.00078).toFixed(1)); // Metric tons

  const handleExportBOM = () => {
    let bomSummary = `[SYSTEM CONFIGURATOR SIZING SUMMARY]\nApplication: ${appType.toUpperCase()}\n`;
    bomSummary += `Solar PV Array: ${recommendedPVkW} kWp (${panelQty}x Tongwei 620W N-Type Bifacial Modules)\n`;
    if (appType !== 'pumping') {
      bomSummary += `Inverter: ${inverterQty}x ${recommendedInverter.title} (Model: ${recommendedInverter.model})\n`;
      if (batteryProduct) {
        bomSummary += `Battery Storage: ${batteryQty}x ${batteryProduct.title} (~${batteryKWh} kWh usable)\n`;
      }
    } else {
      bomSummary += `Pump Controller: 1x ${vfdProduct?.title}\n`;
      bomSummary += `Submersible Pump: 1x ${pumpProduct?.title}\n`;
      bomSummary += `Depth Rating: ${boreholeDepth}m | Target Yield: ${dailyWaterM3} m³/day\n`;
    }
    bomSummary += `Estimated Annual Harvest: ${annualGenerationKWh.toLocaleString()} kWh/yr | Annual Savings: ~$${annualSavingsUSD.toLocaleString()} USD\n`;
    onOpenQuoteWithBOM(bomSummary);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 sm:px-8 py-5 bg-slate-950 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-heading tracking-tight">
                SolarStock System Sizing & BOM Builder
              </h3>
              <p className="text-xs text-slate-400">
                Interactive engineering configurator for residential, commercial, off-grid & solar pumping deployments.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[82vh] overflow-y-auto">
          
          {/* System Sector Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-1.5 bg-slate-100 rounded-2xl">
            <button
              onClick={() => handlePresetChange('residential')}
              className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                appType === 'residential' ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-emerald-600" />
              <span>Residential ESS</span>
            </button>
            <button
              onClick={() => handlePresetChange('cni')}
              className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                appType === 'cni' ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <BatteryCharging className="w-3.5 h-3.5 text-blue-600" />
              <span>Commercial & C&I</span>
            </button>
            <button
              onClick={() => handlePresetChange('offgrid')}
              className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                appType === 'offgrid' ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Sun className="w-3.5 h-3.5 text-amber-500" />
              <span>Off-Grid Microgrid</span>
            </button>
            <button
              onClick={() => handlePresetChange('pumping')}
              className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                appType === 'pumping' ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Waves className="w-3.5 h-3.5 text-cyan-600" />
              <span>Solar Pumping</span>
            </button>
          </div>

          {/* Configuration Inputs & Live Results Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left 6 Columns: Interactive Steppers / Sliders */}
            <div className="lg:col-span-6 space-y-5 bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Project Load Parameters
                </span>
                <span className="text-[11px] text-emerald-700 font-medium">Dynamic Live Computation</span>
              </div>

              {appType !== 'pumping' ? (
                <>
                  {/* Daily Consumption */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <label className="font-semibold text-slate-700">Estimated Daily Energy</label>
                      <span className="font-mono font-bold text-slate-900">{dailyKWh} kWh / Day</span>
                    </div>
                    <input
                      type="range"
                      min={appType === 'cni' ? 100 : 10}
                      max={appType === 'cni' ? 1000 : 100}
                      step={appType === 'cni' ? 20 : 5}
                      value={dailyKWh}
                      onChange={(e) => setDailyKWh(Number(e.target.value))}
                      className="w-full accent-emerald-600 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                      <span>{appType === 'cni' ? '100 kWh' : '10 kWh'}</span>
                      <span>{appType === 'cni' ? '1,000 kWh' : '100 kWh'}</span>
                    </div>
                  </div>

                  {/* Peak Load */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <label className="font-semibold text-slate-700">Simultaneous Peak Load</label>
                      <span className="font-mono font-bold text-slate-900">{peakKW} kW</span>
                    </div>
                    <input
                      type="range"
                      min={appType === 'cni' ? 15 : 3}
                      max={appType === 'cni' ? 150 : 25}
                      step={appType === 'cni' ? 5 : 1}
                      value={peakKW}
                      onChange={(e) => setPeakKW(Number(e.target.value))}
                      className="w-full accent-emerald-600 cursor-pointer"
                    />
                  </div>

                  {/* Autonomy Hours */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <label className="font-semibold text-slate-700">Night Battery Autonomy</label>
                      <span className="font-mono font-bold text-slate-900">{autonomyHours} Hours Backup</span>
                    </div>
                    <input
                      type="range"
                      min={2}
                      max={18}
                      step={1}
                      value={autonomyHours}
                      onChange={(e) => setAutonomyHours(Number(e.target.value))}
                      className="w-full accent-emerald-600 cursor-pointer"
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* Borehole Depth */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <label className="font-semibold text-slate-700">Borehole Depth (Total Dynamic Head)</label>
                      <span className="font-mono font-bold text-slate-900">{boreholeDepth} Meters</span>
                    </div>
                    <input
                      type="range"
                      min={20}
                      max={180}
                      step={10}
                      value={boreholeDepth}
                      onChange={(e) => setBoreholeDepth(Number(e.target.value))}
                      className="w-full accent-emerald-600 cursor-pointer"
                    />
                  </div>

                  {/* Daily Water Requirement */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <label className="font-semibold text-slate-700">Daily Water Volume Needed</label>
                      <span className="font-mono font-bold text-slate-900">{dailyWaterM3} m³ / Day (~{(dailyWaterM3 * 1000).toLocaleString()} L)</span>
                    </div>
                    <input
                      type="range"
                      min={5}
                      max={80}
                      step={5}
                      value={dailyWaterM3}
                      onChange={(e) => setDailyWaterM3(Number(e.target.value))}
                      className="w-full accent-emerald-600 cursor-pointer"
                    />
                  </div>
                </>
              )}

              {/* Sun Hours */}
              <div className="space-y-1.5 pt-2 border-t border-slate-200">
                <div className="flex justify-between text-xs">
                  <label className="font-semibold text-slate-700">Regional Average Sun Hours</label>
                  <span className="font-mono font-bold text-slate-900">{sunHours} h / Day</span>
                </div>
                <input
                  type="range"
                  min={3.0}
                  max={6.0}
                  step={0.1}
                  value={sunHours}
                  onChange={(e) => setSunHours(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
                <span className="text-[10px] text-slate-400">
                  Tropical South Asia / Southeast Asia benchmark: ~4.2h – 4.8h
                </span>
              </div>

            </div>

            {/* Right 6 Columns: Generated Bill of Materials (BOM) & Metrics */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Recommended Equipment Bill of Materials (BOM)
                </span>
                <span className="text-[11px] text-slate-500 font-mono">Tier-1 Direct Match</span>
              </div>

              {/* Hardware Matching Cards */}
              <div className="space-y-2.5">
                
                {/* 1. Solar Module Match */}
                <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <div className="text-[10px] uppercase font-semibold text-slate-400">Photovoltaic Array</div>
                    <div className="font-bold text-slate-900">
                      Tongwei N-Type 620W Bifacial Dual-Glass
                    </div>
                    <div className="text-slate-500 font-mono">
                      {recommendedPVkW} kWp Total ({panelQty} Modules)
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      onSelectProduct(PRODUCTS[11]);
                    }}
                    className="text-xs text-emerald-700 hover:underline font-semibold"
                  >
                    View Module →
                  </button>
                </div>

                {/* 2. Inverter / VFD Match */}
                {appType !== 'pumping' ? (
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                    <div className="space-y-0.5">
                      <div className="text-[10px] uppercase font-semibold text-slate-400">Inverter Core</div>
                      <div className="font-bold text-slate-900">
                        {recommendedInverter.title}
                      </div>
                      <div className="text-slate-500 font-mono">
                        Qty: {inverterQty} Unit(s) · Model: {recommendedInverter.model}
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        onClose();
                        onSelectProduct(recommendedInverter);
                      }}
                      className="text-xs text-emerald-700 hover:underline font-semibold"
                    >
                      View Specs →
                    </button>
                  </div>
                ) : (
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                    <div className="space-y-0.5">
                      <div className="text-[10px] uppercase font-semibold text-slate-400">Pump VFD Controller</div>
                      <div className="font-bold text-slate-900">
                        {vfdProduct?.title}
                      </div>
                      <div className="text-slate-500 font-mono">
                        Model: {vfdProduct?.model} · IP65 Outdoor
                      </div>
                    </div>
                    {vfdProduct && (
                      <button
                        onClick={() => {
                          onClose();
                          onSelectProduct(vfdProduct);
                        }}
                        className="text-xs text-emerald-700 hover:underline font-semibold"
                      >
                        View VFD →
                      </button>
                    )}
                  </div>
                )}

                {/* 3. Battery / Pump Hardware Match */}
                {appType !== 'pumping' && batteryProduct ? (
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                    <div className="space-y-0.5">
                      <div className="text-[10px] uppercase font-semibold text-slate-400">Energy Storage Bank</div>
                      <div className="font-bold text-slate-900">
                        {batteryProduct.title}
                      </div>
                      <div className="text-slate-500 font-mono">
                        Qty: {batteryQty} Unit(s) · (~{batteryKWh} kWh usable LiFePO4)
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        onClose();
                        onSelectProduct(batteryProduct);
                      }}
                      className="text-xs text-emerald-700 hover:underline font-semibold"
                    >
                      View Battery →
                    </button>
                  </div>
                ) : pumpProduct ? (
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                    <div className="space-y-0.5">
                      <div className="text-[10px] uppercase font-semibold text-slate-400">Submersible Pump Core</div>
                      <div className="font-bold text-slate-900">
                        {pumpProduct.title}
                      </div>
                      <div className="text-slate-500 font-mono">
                        Stainless Steel AISI 304 · BLDC Motor
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        onClose();
                        onSelectProduct(pumpProduct);
                      }}
                      className="text-xs text-emerald-700 hover:underline font-semibold"
                    >
                      View Pump →
                    </button>
                  </div>
                ) : null}

              </div>

              {/* Economic & Environmental Projections */}
              <div className="grid grid-cols-3 gap-2.5 p-3.5 bg-emerald-50 rounded-xl border border-emerald-100 text-center">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-emerald-800 font-semibold">Est. Annual Harvest</div>
                  <div className="text-sm font-bold font-mono text-emerald-950 mt-0.5">
                    {annualGenerationKWh.toLocaleString()} kWh
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-emerald-800 font-semibold">Est. Annual Savings</div>
                  <div className="text-sm font-bold font-mono text-emerald-950 mt-0.5">
                    ${annualSavingsUSD.toLocaleString()} USD
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-emerald-800 font-semibold">Annual CO2 Offset</div>
                  <div className="text-sm font-bold font-mono text-emerald-950 mt-0.5">
                    {annualCO2Tons} Tons
                  </div>
                </div>
              </div>

              {/* Export BOM Action */}
              <button
                onClick={handleExportBOM}
                className="w-full py-3 px-4 bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group"
              >
                <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                <span>Export Sized BOM & Request Official Quotation</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
