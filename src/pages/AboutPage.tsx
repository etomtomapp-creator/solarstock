import React from 'react';
import {
  ShieldCheck,
  Clock,
  Award,
  Building,
  Cpu,
  DollarSign,
  Globe,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Zap,
  Warehouse,
  Layers,
  Maximize2
} from 'lucide-react';
import {
  RegionalLogisticsMapGraphic,
  SolarCellCutawayGraphic,
  HeroInfrastructureGraphic,
  BESSContainerGraphic
} from '../components/GraphicsGallery';
import { GraphicType } from '../components/VisualDiagramModal';

interface AboutPageProps {
  onNavigate: (page: string, params?: { category?: string; brand?: string }) => void;
  onOpenQuote: () => void;
  onOpenDiagram?: (graphic?: GraphicType) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenQuote, onOpenDiagram }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-slate-950 text-white py-20 sm:py-28 relative overflow-hidden border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400">
            <span>ABOUT SOLARSTOCK PLATFORM</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight max-w-3xl leading-tight">
            Solar solutions built for real-world power needs.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Established in 2012, SolarStock provides integrated solar infrastructure, direct Tier-1 supply chains, and technical engineering execution across South Asia, the Middle East, and Africa.
          </p>

          {/* Key Metric Banner */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-slate-800">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading font-mono">1100MW+</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Project Experience</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading font-mono">2012</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Founded &amp; Operating</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading font-mono">14+</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Regional Hubs</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading font-mono">850+</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">EPC Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Border Supply Lanes & Regional Logistics Route Map (NEW VISUAL SECTION) */}
      <section className="py-20 bg-slate-950 text-white border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Strategic Infrastructure
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                Regional Logistics Network &amp; Buffer Storage Depots
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                We maintain active regional buffer inventory hubs in Bangkok and Dhaka, backed by direct factory consolidation in Shenzhen and Ningbo to eliminate port congestion delays.
              </p>
            </div>
            <button
              onClick={() => onOpenDiagram?.('logistics-map')}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-emerald-400 flex items-center gap-2 self-start sm:self-auto transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Inspect Full Map</span>
            </button>
          </div>

          <div className="rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
            <RegionalLogisticsMapGraphic />
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Core Foundations</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-heading">
              Three Pillars of Our Execution
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Why leading international developers and regional EPC contractors partner with SolarStock for recurring multi-megawatt procurement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-emerald-400 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-950 font-heading">
                Experience And Expertise
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Over a decade of hands-on utility and C&amp;I engineering. Our application engineers understand the rigorous grid compliance codes, high ambient thermal derating, and electrical protection schemes required in emerging markets.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-emerald-400 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-950 font-heading">
                Reliability And Timeliness
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Project delays cost developer capital. We maintain pre-cleared buffer inventory in regional hubs in Bangkok and Dhaka, ensuring next-day dispatch for critical balance-of-system hardware.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-950 font-heading">
                Comprehensive Service
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                From initial single-line design and container load consolidation to customs tariff paperwork and local factory-authorized warranty repairs, SolarStock is with you throughout the lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* R&D & Semiconductor Physics Showcase (NEW VISUAL SECTION) */}
      <section className="py-20 bg-slate-950 text-white border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              R&amp;D &amp; Photovoltaic Material Engineering
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              Next-Gen N-Type TOPCon Cell Architecture
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Why our Tier-1 panel selections outperform conventional p-type PERC modules in high-humidity, 45°C ambient tropical operating environments.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
            <SolarCellCutawayGraphic />
          </div>
        </div>
      </section>

      {/* Operating Model: Four Sectors */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Integrated Value Chain</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-heading">
              Our Four Operating Sectors
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Coordinating hardware engineering, investment structures, and regional field delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="text-xs font-bold text-emerald-700 font-mono">SECTOR 01</div>
              <h3 className="text-base font-bold text-slate-900 font-heading">
                EPC (Project Execution)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Engineering, procurement, and construction support for ground-mount solar farms, industrial rooftop microgrids, and solar diesel hybrid conversions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="text-xs font-bold text-emerald-700 font-mono">SECTOR 02</div>
              <h3 className="text-base font-bold text-slate-900 font-heading">
                R&amp;D (Product Development)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tailoring smart lithium power stations (LPS) and tropicalized BMS firmware to endure extreme 45°C ambient temperatures and erratic grid fluctuations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="text-xs font-bold text-emerald-700 font-mono">SECTOR 03</div>
              <h3 className="text-base font-bold text-slate-900 font-heading">
                EMC (Energy Investment)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Energy Management Contracting and flexible equipment leasing for commercial industrial factories seeking zero-capex solar rooftop transitions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="text-xs font-bold text-emerald-700 font-mono">SECTOR 04</div>
              <h3 className="text-base font-bold text-slate-900 font-heading">
                Distribution (Market Access)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Authorized Tier-1 distribution partnerships with Deye, EP Equipment, SAJ, Tongwei, JA Solar, and Difful, ensuring authentic supply chains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Market Applications</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-heading">
              What We Offer
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Complete equipment suites tailored to each deployment segment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="text-base font-bold text-slate-900 font-heading">Residential Energy Storage</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Low-voltage 48V hybrid inverters, compact lithium power systems (LPS), and safe prismatic LiFePO4 rack batteries providing 24/7 quiet home backup.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="text-base font-bold text-slate-900 font-heading">Commercial &amp; Industrial (C&amp;I)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Three-phase 10kW–50kW hybrid inverters, containerized energy storage, and 620W+ dual-glass N-type bifacial modules for factory peak-shaving.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="text-base font-bold text-slate-900 font-heading">Micro Grid &amp; Island Power</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Rugged IP65 off-grid inverters with automated diesel generator orchestration and high-surge motor starting for rural healthcare and telecommunications.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="text-base font-bold text-slate-900 font-heading">Solar Pumping &amp; Irrigation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Variable Frequency Drives (VFD) and stainless steel hybrid AC/DC submersible pumps drawing water from 180m boreholes without diesel fuel costs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="text-base font-bold text-slate-900 font-heading">Balcony &amp; Portable Power</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Plug-and-play microinverter kits and rugged LiFePO4 portable power stations for urban apartments, field engineering teams, and disaster backup.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="text-base font-bold text-slate-900 font-heading">Clean Material Handling (MHE)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                EP Equipment electric lithium forklifts, pallet trucks, and mono-mast stackers to eliminate emissions and streamline heavy solar warehouse handling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Reach Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Geographic Operations</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-heading">
              Regional Reach &amp; Distribution
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Active sales, stocking, and technical offices serving major growth markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Operational Hub</span>
              <h3 className="text-lg font-bold text-slate-900 font-heading">South Asia Desk</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Centrally located in Dhaka, Bangladesh. Supporting utility solar tenders, agricultural solar pumping rollout, and textile factory rooftop energy storage.
              </p>
              <div className="pt-2 text-xs font-mono text-slate-500">+880 1XXX-XXXXXX · dhaka@solarstock.com</div>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Operational Hub</span>
              <h3 className="text-lg font-bold text-slate-900 font-heading">Southeast Asia Hub</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bangkok logistics center covering Thailand, Vietnam, and regional ASEAN cross-border road freight for rapid inverter delivery.
              </p>
              <div className="pt-2 text-xs font-mono text-slate-500">+66 2XXX-XXXX · bangkok@solarstock.com</div>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Operational Hub</span>
              <h3 className="text-lg font-bold text-slate-900 font-heading">Middle East &amp; Africa</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Strategic supply coordination for off-grid hybrid microgrids, high-voltage battery storage, and commercial solar irrigation projects.
              </p>
              <div className="pt-2 text-xs font-mono text-slate-500">global@solarstock.com · Shenzhen Global Supply Hub</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-16 bg-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading">
            Partner with SolarStock for Your Next Regional Project
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Contact our engineering desk today to review technical drawings, request factory allotments, or inspect in-stock hardware.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => onNavigate('products')}
              className="px-6 py-3 text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-xl transition-colors"
            >
              Explore Products
            </button>
            <button
              onClick={onOpenQuote}
              className="px-6 py-3 text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors"
            >
              Request a Project Quote
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
