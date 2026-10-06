import React, { useState } from 'react';
import { X, Layers, Download, CheckCircle2, ShieldCheck, Zap, Info, Maximize2 } from 'lucide-react';
import {
  HeroInfrastructureGraphic,
  CommercialRooftopGraphic,
  AgriculturalPumpingGraphic,
  WarehouseLogisticsGraphic,
  BESSContainerGraphic,
  SolarCellCutawayGraphic,
  RegionalLogisticsMapGraphic,
  EnergyFlowGraphic
} from './GraphicsGallery';

export type GraphicType =
  | 'utility-scale'
  | 'cni-rooftop'
  | 'solar-pumping'
  | 'warehouse-logistics'
  | 'bess-container'
  | 'wafer-cutaway'
  | 'logistics-map'
  | 'energy-flow';

interface VisualDiagramModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialGraphic?: GraphicType;
}

export const VisualDiagramModal: React.FC<VisualDiagramModalProps> = ({
  isOpen,
  onClose,
  initialGraphic = 'utility-scale'
}) => {
  const [activeGraphic, setActiveGraphic] = useState<GraphicType>(initialGraphic);
  const [activeLayer, setActiveLayer] = useState<'all' | 'electrical' | 'mechanical' | 'telemetry'>('all');

  // Sync initialGraphic when modal opens
  React.useEffect(() => {
    if (initialGraphic) {
      setActiveGraphic(initialGraphic);
    }
  }, [initialGraphic, isOpen]);

  if (!isOpen) return null;

  const graphicTabs = [
    { id: 'utility-scale' as GraphicType, label: 'Utility PV Farm', category: 'High Voltage Grid' },
    { id: 'cni-rooftop' as GraphicType, label: 'C&I Rooftop 5.2MW', category: 'Industrial Peak-Shaving' },
    { id: 'bess-container' as GraphicType, label: '20FT BESS Container', category: '3.72MWh Storage' },
    { id: 'solar-pumping' as GraphicType, label: 'Agricultural Pumping', category: 'Zero-Fuel Irrigation' },
    { id: 'warehouse-logistics' as GraphicType, label: 'MHE Logistics Fleet', category: '80V Electric Forklifts' },
    { id: 'wafer-cutaway' as GraphicType, label: 'TOPCon Wafer Physics', category: 'N-Type 16BB Cell' },
    { id: 'energy-flow' as GraphicType, label: 'Energy Routing SLD', category: 'Sub-10ms Switching' },
    { id: 'logistics-map' as GraphicType, label: 'Regional Supply Map', category: 'Buffer Storage Hubs' },
  ];

  const getGraphicDetails = () => {
    switch (activeGraphic) {
      case 'utility-scale':
        return {
          title: 'Utility-Scale Solar Farm & 33kV Substation Architecture',
          tag: '1100MW+ DEPLOYMENT EXPERIENCE',
          description: 'Single-axis tracker rows paired with high-voltage central/string inverters, step-up transformers, and SCADA grid-tie telemetry designed for rugged tropical and desert ambient conditions.',
          specs: [
            { label: 'String Voltage', value: '1500V DC Max Bus' },
            { label: 'Tracking Range', value: '±60° True Tracking' },
            { label: 'Inverter Efficiency', value: '99.0% Euro Efficiency' },
            { label: 'Standards', value: 'IEC 62109, IEC 62817' },
          ]
        };
      case 'cni-rooftop':
        return {
          title: '5.2 MW Commercial & Industrial Rooftop Solar Microgrid',
          tag: 'C&I PEAK SHAVING & BACKUP',
          description: 'Industrial shed integration with high-efficiency Tongwei 620W N-type bifacial panels, Deye multi-MPPT three-phase hybrid inverters, and rapid fire shutdown protection for factory rooftop safety.',
          specs: [
            { label: 'Module Capacity', value: '620W N-Type Bifacial' },
            { label: 'Transfer Time', value: '<10ms UPS Grade' },
            { label: 'Fire Safety', value: 'Projoy PEFS Rapid Shutdown' },
            { label: 'Standards', value: 'UL 1741, IEEE 1547' },
          ]
        };
      case 'bess-container':
        return {
          title: '20-Foot Containerized LiFePO4 Battery Energy Storage (3.72MWh)',
          tag: 'MODULAR ESS UTILITY ASSET',
          description: 'Factory-integrated container with liquid chilling loops maintaining cell temperature gradients below 2.5°C, aerosol fire extinguishing, and bi-directional 1500V PCS inverter cabinets.',
          specs: [
            { label: 'Energy Capacity', value: '3,727 kWh (3.72MWh)' },
            { label: 'Cell Chemistry', value: 'Prismatic LiFePO4 (LFP)' },
            { label: 'Cycle Life', value: '8,000 Cycles @ 80% DoD' },
            { label: 'Fire Safety', value: 'NFPA 855 & UL 9540A' },
          ]
        };
      case 'solar-pumping':
        return {
          title: 'Deep-Well Agricultural Solar Water Pumping Station',
          tag: 'CLEAN AGRI WATER INFRASTRUCTURE',
          description: 'Submersible stainless steel pumps connected to SAJ variable frequency drive (VFD) controllers with dynamic MPPT algorithm delivering steady irrigation water even under low-irradiance cloudy weather.',
          specs: [
            { label: 'Pumping Head', value: 'Up to 180m Depth' },
            { label: 'Daily Flow', value: '150–250 m³ / Day' },
            { label: 'Pump Material', value: '304/316 Stainless Steel' },
            { label: 'Operating Mode', value: 'Zero Fuel, Auto Sunrise Start' },
          ]
        };
      case 'warehouse-logistics':
        return {
          title: 'Clean Electric Material Handling Logistics Depot & EP Fleet',
          tag: 'ZERO-EMISSION WAREHOUSE OPERATIONS',
          description: 'Direct integration of rooftop solar arrays with EP Equipment 80V heavy-duty lithium counterbalance forklifts and F4 walkie pallet trucks, enabling 100% electrified indoor material logistics.',
          specs: [
            { label: 'Forklift Rating', value: '3.0T to 3.8T Electric' },
            { label: 'Battery Chemistry', value: '80V Fast-Charge Lithium' },
            { label: 'Racking Clearance', value: 'Up to 6.0m Triple Mast' },
            { label: 'Emissions', value: 'Zero Indoor Diesel Particulates' },
          ]
        };
      case 'wafer-cutaway':
        return {
          title: 'N-Type TOPCon Photovoltaic Cell Micro-Layer Physics',
          tag: 'HIGH-EFFICIENCY SEMICONDUCTOR TECH',
          description: 'Multi-layer engineering diagram displaying anti-reflective coating, ultra-thin silicon dioxide tunnel oxide, phosphorus-doped polysilicon layer, and 16 micro-busbar grid ribbons.',
          specs: [
            { label: 'Cell Efficiency', value: '25.6% Lab / 22.8% Module' },
            { label: 'Degradation', value: '≤1% Year 1, ≤0.4%/yr After' },
            { label: 'Temp Coefficient', value: '-0.30% / °C' },
            { label: 'Bifaciality', value: '80% ± 5%' },
          ]
        };
      case 'energy-flow':
        return {
          title: 'Single-Line Energy Routing & Automated MPPT Architecture',
          tag: 'DIRECT DC-COUPLED TOPOLOGY',
          description: 'Seamless power distribution between rooftop DC strings, hybrid inverter MPPT channels, lithium battery storage bus, critical sub-panel, and bidirectional smart grid metering.',
          specs: [
            { label: 'System Efficiency', value: '98.3% Round-Trip' },
            { label: 'Switching Speed', value: '4ms to 10ms' },
            { label: 'Phase Support', value: 'Unbalanced 100% Phase Output' },
            { label: 'Generator Sync', value: 'Automated Dry-Contact Relay' },
          ]
        };
      case 'logistics-map':
      default:
        return {
          title: 'Cross-Border Supply Chain & Regional Buffer Inventory Hubs',
          tag: 'RAPID DISPATCH FULFILLMENT',
          description: 'Strategic distribution infrastructure linking Tier-1 manufacturing lines in Ningbo and Shenzhen to buffer storage hubs in Bangkok and Dhaka for next-day dispatch across emerging markets.',
          specs: [
            { label: 'Hub Locations', value: 'Shenzhen, Bangkok, Dhaka' },
            { label: 'Buffer Stock', value: 'Over 25MW Rapid Dispatch' },
            { label: 'Warranty Response', value: '24–48h Local Replacement' },
            { label: 'Transit Times', value: 'Next-day regional trucking' },
          ]
        };
    }
  };

  const currentDetails = getGraphicDetails();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl text-white overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block font-mono">
                SOLARSTOCK TECHNICAL STUDIO
              </span>
              <h2 className="text-sm sm:text-base font-bold text-white font-heading">
                High-Resolution Engineering Architecture &amp; Schematics
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Horizontal Graphic Selector Tabs */}
        <div className="px-6 py-2.5 bg-slate-950/60 border-b border-slate-800 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {graphicTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveGraphic(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                activeGraphic === tab.id
                  ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Main Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Active Graphic Display Container */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl">
            {activeGraphic === 'utility-scale' && <HeroInfrastructureGraphic className="w-full" />}
            {activeGraphic === 'cni-rooftop' && <CommercialRooftopGraphic className="w-full" />}
            {activeGraphic === 'bess-container' && <BESSContainerGraphic className="w-full" />}
            {activeGraphic === 'solar-pumping' && <AgriculturalPumpingGraphic className="w-full" />}
            {activeGraphic === 'warehouse-logistics' && <WarehouseLogisticsGraphic className="w-full" />}
            {activeGraphic === 'wafer-cutaway' && <SolarCellCutawayGraphic className="w-full" />}
            {activeGraphic === 'energy-flow' && <EnergyFlowGraphic className="w-full" />}
            {activeGraphic === 'logistics-map' && <RegionalLogisticsMapGraphic className="w-full" />}
          </div>

          {/* Technical Metadata & Callouts */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-slate-950/80 border border-slate-800/80 p-5 rounded-2xl">
            
            {/* Left 8 Cols: Description & Highlights */}
            <div className="md:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 font-bold uppercase">
                <ShieldCheck className="w-3 h-3" />
                {currentDetails.tag}
              </div>
              <h3 className="text-lg font-bold text-white font-heading">
                {currentDetails.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {currentDetails.description}
              </p>
            </div>

            {/* Right 4 Cols: Engineering Specifications Matrix */}
            <div className="md:col-span-4 bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-2.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block border-b border-slate-800 pb-1">
                Engineering Ratings
              </span>
              <div className="space-y-1.5">
                {currentDetails.specs.map((spec, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 text-[11px]">{spec.label}</span>
                    <span className="font-mono text-emerald-400 font-semibold text-[11px]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Modal Bottom Action Footer */}
        <div className="px-6 py-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Interactive Industrial Architecture Engine · SolarStock Platform</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>Print Schematic</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-colors"
            >
              Done
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
