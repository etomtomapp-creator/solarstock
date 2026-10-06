import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/projects';
import { ProjectCaseStudy } from '../types';
import {
  Building2,
  Sun,
  BatteryCharging,
  Waves,
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Zap,
  ArrowUpRight,
  Maximize2,
  Layers
} from 'lucide-react';
import {
  CommercialRooftopGraphic,
  WarehouseLogisticsGraphic,
  AgriculturalPumpingGraphic,
  BESSContainerGraphic,
  HeroInfrastructureGraphic,
  EnergyFlowGraphic
} from '../components/GraphicsGallery';
import { GraphicType } from '../components/VisualDiagramModal';

interface ProjectsPageProps {
  onOpenQuote: () => void;
  onNavigateToCatalog: () => void;
  onOpenDiagram?: (graphic?: GraphicType) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onOpenQuote,
  onNavigateToCatalog,
  onOpenDiagram
}) => {
  const [selectedSector, setSelectedSector] = useState<string>('All');
  const sectors = ['All', 'Commercial & Industrial', 'Solar Irrigation', 'Microgrid'];

  const filteredCases = selectedSector === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(c => c.sector === selectedSector);

  const getProjectGraphic = (studyId: string) => {
    switch (studyId) {
      case 'gazipur-textile-cni-5mw':
        return {
          comp: <CommercialRooftopGraphic className="w-full h-64 sm:h-80" />,
          graphicType: 'cni-rooftop' as GraphicType
        };
      case 'samut-prakan-cold-storage-1-8mw':
        return {
          comp: <WarehouseLogisticsGraphic className="w-full h-64 sm:h-80" />,
          graphicType: 'warehouse-logistics' as GraphicType
        };
      case 'rangpur-agricultural-solar-pumping-350':
        return {
          comp: <AgriculturalPumpingGraphic className="w-full h-64 sm:h-80" />,
          graphicType: 'solar-pumping' as GraphicType
        };
      case 'rakhine-island-microgrid-750kw':
      default:
        return {
          comp: <BESSContainerGraphic className="w-full h-64 sm:h-80" />,
          graphicType: 'bess-container' as GraphicType
        };
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="border-b border-slate-200 pb-8 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-700">
            <span>FIELD PROOF &amp; DEPLOYMENTS</span>
            <span>·</span>
            <span>1100MW+ PROJECT EXPERIENCE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-950 font-heading">
            Completed Projects &amp; Execution Case Studies
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            From multi-megawatt industrial textile rooftop arrays and cold-chain forklift depots to rural microgrids and 350-borehole agricultural pumping systems.
          </p>
        </div>

        {/* Sector Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {sectors.map((sec) => (
              <button
                key={sec}
                onClick={() => setSelectedSector(sec)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedSector === sec
                    ? 'bg-slate-950 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {sec}
              </button>
            ))}
          </div>

          <button
            onClick={() => onOpenDiagram?.('utility-scale')}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-2 transition-colors border border-slate-800"
          >
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span>Open Architecture Studio</span>
          </button>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {filteredCases.map((study) => {
            const { comp, graphicType } = getProjectGraphic(study.id);
            return (
              <div
                key={study.id}
                className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                {/* Visual Architectural Graphic Stage with Inspection Trigger */}
                <div className="relative bg-slate-950 group">
                  {comp}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <button
                      onClick={() => onOpenDiagram?.(graphicType)}
                      className="px-3 py-1.5 rounded-xl bg-slate-950/80 hover:bg-slate-900 text-white text-xs font-semibold flex items-center gap-1.5 border border-slate-700 backdrop-blur transition-all"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Inspect Topology</span>
                    </button>
                  </div>
                </div>

                <div className="p-6 sm:p-10 space-y-8">
                  {/* Top Banner Row */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-slate-100 pb-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                        <span className="text-emerald-700 font-bold uppercase tracking-wider">{study.sector}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {study.location}, {study.country}
                        </span>
                        <span>·</span>
                        <span className="font-mono text-slate-400">{study.year}</span>
                      </div>

                      <h2 className="text-xl sm:text-2xl font-bold text-slate-950 font-heading leading-snug">
                        {study.title}
                      </h2>
                      <p className="text-xs text-slate-500 font-medium">
                        Client: <strong className="text-slate-800">{study.client}</strong>
                      </p>
                    </div>

                    <div className="text-left md:text-right shrink-0 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">Installed Capacity</span>
                      <span className="text-lg font-bold font-mono text-slate-950 block">
                        {study.capacity}
                      </span>
                    </div>
                  </div>

                  {/* Description & Metrics Split */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left 7: Narrative & Key Highlights */}
                    <div className="lg:col-span-7 space-y-5">
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {study.description}
                      </p>

                      <div className="space-y-2 pt-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Key Engineering Outcomes
                        </h4>
                        <ul className="space-y-2 text-xs text-slate-800">
                          {study.keyHighlights.map((hl, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Impact Metrics */}
                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                          <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">Annual Clean Generation</span>
                          <span className="text-sm font-bold font-mono text-slate-900 mt-0.5 block">{study.annualGeneration}</span>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                          <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">CO2 Reduction Offset</span>
                          <span className="text-sm font-bold font-mono text-emerald-700 mt-0.5 block">{study.co2Offset}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right 5: Equipment Bill of Materials Used */}
                    <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                          Equipment Bill of Materials (BOM)
                        </span>
                        <span className="text-[11px] text-emerald-700 font-mono font-semibold">Tier-1 Direct</span>
                      </div>

                      <div className="space-y-2.5">
                        {study.equipmentUsed.map((eq, idx) => (
                          <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200 text-xs flex items-center justify-between">
                            <div>
                              <div className="text-[10px] text-slate-400 font-medium uppercase">{eq.category}</div>
                              <div className="font-semibold text-slate-900">{eq.sku}</div>
                            </div>
                            <div className="font-mono text-emerald-700 font-bold text-xs shrink-0 pl-2">
                              {eq.qty}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2 text-right">
                        <button
                          onClick={onNavigateToCatalog}
                          className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1"
                        >
                          <span>Find equivalent models in catalog</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="p-8 rounded-3xl bg-slate-950 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-bold font-heading">
              Planning a Similar Project in South Asia, ASEAN or Middle East?
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Our regional engineering desk can provide single-line validation, shadow modeling, and container shipping quotes within 24 hours.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="px-6 py-3 text-xs font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-xl transition-colors whitespace-nowrap"
          >
            Request Project Consultation
          </button>
        </div>

      </div>
    </div>
  );
};
