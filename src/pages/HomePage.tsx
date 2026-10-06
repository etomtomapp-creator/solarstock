import React, { useState } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Warehouse,
  Wrench,
  Truck,
  CheckCircle2,
  Sparkles,
  Building2,
  BatteryCharging,
  SunMedium,
  Layers,
  Calculator,
  MapPin,
  ExternalLink,
  Activity,
  Maximize2,
  Zap,
  Globe
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { BRANDS } from '../data/brands';
import { ARTICLES } from '../data/articles';
import { CASE_STUDIES } from '../data/projects';
import { ProductArtwork } from '../components/ProductArtwork';
import {
  HeroInfrastructureGraphic,
  EnergyFlowGraphic,
  CommercialRooftopGraphic,
  AgriculturalPumpingGraphic,
  WarehouseLogisticsGraphic,
  BESSContainerGraphic,
  SolarCellCutawayGraphic,
  RegionalLogisticsMapGraphic
} from '../components/GraphicsGallery';
import { HeroBackgroundGraphic } from '../components/HeroBackgroundGraphic';
import { GraphicType } from '../components/VisualDiagramModal';
import { Product } from '../types';

interface HomePageProps {
  onNavigate: (page: string, params?: { category?: string; brand?: string; productId?: string }) => void;
  onOpenQuote: (product?: Product) => void;
  onSelectProduct: (product: Product) => void;
  onOpenSizing: () => void;
  onToggleCompare: (product: Product) => void;
  compareList: Product[];
  onOpenDiagram?: (graphic?: GraphicType) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenQuote,
  onSelectProduct,
  onOpenSizing,
  onToggleCompare,
  compareList,
  onOpenDiagram
}) => {
  const featuredProducts = [
    PRODUCTS[11], // Tongwei 620W N-Type Bifacial
    PRODUCTS[19], // Deye 8kW Hybrid Inverter
    PRODUCTS[18], // Deye 5.12kWh LiFePO4 Rack ESS
    PRODUCTS[14], // EP Mini F4 1.5T Electric Pallet Truck
    PRODUCTS[3],  // SAJ 4kW Solar Pump VFD
    PRODUCTS[2],  // Solarstock SS-LPS500B Smart Lithium ESS
  ];

  const featuredArticles = ARTICLES.slice(0, 3);
  const featuredProjects = CASE_STUDIES.slice(0, 2);
  const keyBrands = ['Deye', 'SAJ', 'Difful', 'EP Equipment', 'JA Solar', 'Projoy Electric', 'Solarstock', 'TW solar'];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">

      {/* 1. HOMEPAGE HERO SECTION WITH SPLIT-SCREEN INDUSTRIAL GRAPHIC & PREMIUM AMBIENT BACKDROP */}
      <section className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24 border-b border-slate-900">
        {/* Premium Vector Energy Infrastructure Graphic Background */}
        <HeroBackgroundGraphic />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left 7 Columns: Hero Typography and Direct Action CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>INFRASTRUCTURE &amp; ENERGY PLATFORM</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-heading leading-tight text-balance">
                Built for seamless movement from supply to deployment.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                SolarStock connects sourcing, storage, and execution into a single coordinated system — helping teams move faster from planning to live deployment across regions.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={() => onNavigate('products')}
                  className="group flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-xl shadow-lg transition-all hover:shadow-emerald-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <span>Explore Products</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <button
                  onClick={onOpenSizing}
                  className="flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/40 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <Calculator className="w-4 h-4 text-emerald-400" />
                  <span>System Sizing &amp; BOM Tool</span>
                </button>

                <button
                  onClick={() => onOpenDiagram?.('utility-scale')}
                  className="flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors"
                >
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span>Visual Schematics</span>
                </button>
              </div>
            </div>

            {/* Right 5 Columns: Cinematic 16:9 Industrial Energy Landscape Graphic */}
            <div className="lg:col-span-5 relative group cursor-pointer" onClick={() => onOpenDiagram?.('utility-scale')}>
              <HeroInfrastructureGraphic className="aspect-16/10 border border-slate-800 transition-transform group-hover:scale-[1.01]" />
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-700 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5 backdrop-blur">
                <Maximize2 className="w-3 h-3" />
                <span>Inspect HD Architecture</span>
              </div>
              <div className="absolute -bottom-3 -right-3 hidden sm:block p-3 rounded-xl bg-slate-900/90 border border-slate-700 shadow-xl backdrop-blur text-[11px] text-slate-300 font-mono">
                <span className="text-emerald-400 font-bold">1100MW+</span> Verified Regional Grid Delivery
              </div>
            </div>

          </div>

          {/* Integrated Stats Row */}
          <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading tabular-nums">
                2012
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                Established Experience
              </div>
              <p className="text-[11px] text-slate-500">Over a decade serving regional renewable energy grids</p>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading tabular-nums">
                1100MW+
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                Project Experience
              </div>
              <p className="text-[11px] text-slate-500">Utility, C&amp;I rooftop, microgrids, and solar pumping</p>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading tabular-nums">
                Multi-Country
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                Distribution Network
              </div>
              <p className="text-[11px] text-slate-500">Hubs in Bangkok, Dhaka, Shenzhen &amp; Middle East lanes</p>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading tabular-nums">
                Direct Tier-1
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                OEM Partnerships
              </div>
              <p className="text-[11px] text-slate-500">Authorized agreements with Deye, EP, SAJ, Tongwei, JA Solar</p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. TRUSTED PARTNERS / BRANDS MARQUEE OR GRID */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-heading">
              Trusted across products, projects, and regional delivery.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We work with global manufacturers, regional distributors, and local execution partners to maintain consistent supply and technical standards.
            </p>
          </div>

          {/* Clean Interactive Brand Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
            {keyBrands.map((brandName) => {
              const count = PRODUCTS.filter(p => p.brand === brandName).length;
              return (
                <button
                  key={brandName}
                  onClick={() => onNavigate('products', { brand: brandName })}
                  className="group p-4 bg-slate-50 hover:bg-slate-900 rounded-2xl border border-slate-200 hover:border-slate-800 transition-all text-center flex flex-col items-center justify-center space-y-1"
                >
                  <span className="font-bold text-sm text-slate-900 group-hover:text-white font-heading transition-colors">
                    {brandName}
                  </span>
                  <span className="text-[10px] text-slate-500 group-hover:text-emerald-400 font-mono transition-colors">
                    {count} Models
                  </span>
                </button>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('brands')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
            >
              <span>View All Tier-1 Brand Partnerships &amp; Warranties</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>



      {/* 4. FEATURED HARDWARE CATALOG SPOTLIGHT */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Core Equipment Catalog
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-heading mt-1">
                Field-Engineered Equipment Suites
              </h2>
            </div>

            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-emerald-700 transition-colors"
            >
              <span>Explore All 42 Catalog Items</span>
              <ArrowRight className="w-4 h-4 text-emerald-600" />
            </button>
          </div>

          {/* 6 Featured Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProducts.map((product) => {
              const isCompared = compareList.some(p => p.id === product.id);
              return (
                <div
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className="group cursor-pointer bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-500/30 transition-all flex flex-col justify-between"
                >
                  <div className="relative p-6 bg-white border-b border-slate-100 flex items-center justify-center min-h-[220px]">
                    <ProductArtwork product={product} size="md" />

                    <div className="absolute top-4 left-4 flex flex-col gap-1 items-start">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold font-mono uppercase bg-slate-900 text-white">
                        {product.brand}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[9px] font-semibold uppercase bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {product.category}
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleCompare(product);
                      }}
                      className={`absolute top-4 right-4 p-2 rounded-xl text-xs font-semibold transition-all ${
                        isCompared
                          ? 'bg-emerald-600 text-white shadow-md'
                          : 'bg-white/80 text-slate-600 hover:text-slate-900 hover:bg-white border border-slate-200'
                      }`}
                      title={isCompared ? 'Remove from comparison' : 'Compare model'}
                    >
                      <Activity className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-bold text-sm sm:text-base text-slate-950 font-heading line-clamp-2 group-hover:text-emerald-700 transition-colors leading-snug">
                        {product.title}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {product.tagline || product.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <div>
                        <span className="text-[11px] text-slate-400 block">Rating / Capacity</span>
                        <span className="font-semibold text-slate-900 font-mono">
                          {product.powerRating || product.specs[0]?.value}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[11px] text-slate-400 block">Lead Time</span>
                        <span className="font-medium text-emerald-700">
                          {product.leadTime.split('(')[0]}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-900 group-hover:text-emerald-700 inline-flex items-center gap-1 transition-colors">
                        View Technical Specs
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenQuote(product);
                        }}
                        className="px-3 py-1.5 text-[11px] font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
                      >
                        Request Quote
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. WHY SOLARSTOCK SECTION WITH RICH GRAPHICAL CARDS */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              The SolarStock Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 font-heading">
              Built around regional execution, not generic supply.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Global supply chains often collapse at the port. SolarStock operates physical buffer hubs, technical application engineers, and certified post-sales support in your specific regional theatre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Regional Reach */}
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold font-mono text-slate-900 tabular-nums">01</span>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-emerald-700">
                    Execution Layer
                  </span>
                </div>
                {/* Visual Icon Graphic Header */}
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-950 font-heading">
                  Regional reach – Regional Distribution Network
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Strategic distribution centers across Bangkok, Dhaka, and Shenzhen ensure localized stock availability and direct container consignments without intermediary broker markups.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200/60 text-xs text-slate-500">
                Direct road and seaport customs clearance handled in-house.
              </div>
            </div>

            {/* Card 2: Inventory Discipline */}
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold font-mono text-slate-900 tabular-nums">02</span>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-emerald-700">
                    Execution Layer
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-600">
                  <Warehouse className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-950 font-heading">
                  Inventory discipline – Local Storage &amp; Availability
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Buffer stocks of inverters, LiFePO4 batteries, and balance-of-system hardware maintained locally to prevent project delays during seasonal shipping peaks.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200/60 text-xs text-slate-500">
                Guaranteed replacement units held for instant warranty swap.
              </div>
            </div>

            {/* Card 3: Field Alignment */}
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold font-mono text-slate-900 tabular-nums">03</span>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-emerald-700">
                    Execution Layer
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-950 font-heading">
                  Field alignment – Technical Coordination
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dedicated applications engineers review electrical single-line diagrams, MPPT matching, and battery integration before dispatch to eliminate installation surprises.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200/60 text-xs text-slate-500">
                On-site commissioning assistance for 100kW+ systems.
              </div>
            </div>

            {/* Card 4: Delivery Follow-Through */}
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold font-mono text-slate-900 tabular-nums">04</span>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-emerald-700">
                    Execution Layer
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-950 font-heading">
                  Delivery follow-through – Service-Led Delivery
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Post-handover lifecycle support with direct manufacturer firmware updates, RMA escalation, and component-level repairs at regional authorized test centers.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200/60 text-xs text-slate-500">
                Manufacturer-backed multi-year linear warranties honored locally.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. 1100MW+ DEPLOYED PROJECTS SPOTLIGHT WITH RICH VISUAL GRAPHICS */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                1100MW+ Track Record
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-heading mt-1">
                Proven Deployments Across Industrial &amp; Utility Grids
              </h2>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="text-xs font-bold text-slate-900 hover:text-emerald-700 inline-flex items-center gap-1"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 with Commercial Rooftop Artwork Graphic */}
            <div
              onClick={() => onNavigate('projects')}
              className="group cursor-pointer bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all space-y-5"
            >
              <CommercialRooftopGraphic className="h-60" />
              <div className="p-8 pt-0 space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="text-emerald-700 font-bold uppercase tracking-wider">{featuredProjects[0].sector}</span>
                  <span className="font-mono">{featuredProjects[0].location}, {featuredProjects[0].country}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-950 font-heading group-hover:text-emerald-700 transition-colors leading-snug">
                  {featuredProjects[0].title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {featuredProjects[0].description}
                </p>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] uppercase text-slate-400 block font-semibold">Capacity</span>
                    <span className="font-mono font-bold text-slate-900">{featuredProjects[0].capacity}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase text-slate-400 block font-semibold">Annual Generation</span>
                    <span className="font-mono font-bold text-emerald-700">{featuredProjects[0].annualGeneration}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 with Logistics Artwork Graphic */}
            <div
              onClick={() => onNavigate('projects')}
              className="group cursor-pointer bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all space-y-5"
            >
              <WarehouseLogisticsGraphic className="h-60" />
              <div className="p-8 pt-0 space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="text-emerald-700 font-bold uppercase tracking-wider">{featuredProjects[1].sector}</span>
                  <span className="font-mono">{featuredProjects[1].location}, {featuredProjects[1].country}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-950 font-heading group-hover:text-emerald-700 transition-colors leading-snug">
                  {featuredProjects[1].title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {featuredProjects[1].description}
                </p>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] uppercase text-slate-400 block font-semibold">Capacity</span>
                    <span className="font-mono font-bold text-slate-900">{featuredProjects[1].capacity}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase text-slate-400 block font-semibold">Annual Generation</span>
                    <span className="font-mono font-bold text-emerald-700">{featuredProjects[1].annualGeneration}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. NEWS & RESEARCH / LATEST UPDATES SECTION WITH GRAPHICAL CARDS */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Knowledge &amp; Field Insights
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-heading mt-1">
                Latest field updates, research notes, and case studies.
              </h2>
            </div>

            <button
              onClick={() => onNavigate('news')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-emerald-700 transition-colors"
            >
              <span>Explore All Articles</span>
              <ArrowRight className="w-4 h-4 text-emerald-600" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article, idx) => (
              <div
                key={article.id}
                onClick={() => onNavigate('news')}
                className="group cursor-pointer bg-slate-50 rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                {/* Graphical Header for Each Article */}
                <div className="h-48 bg-slate-950 relative overflow-hidden">
                  {idx === 0 && <BESSContainerGraphic className="h-full w-full" />}
                  {idx === 1 && <CommercialRooftopGraphic className="h-full w-full" />}
                  {idx === 2 && <AgriculturalPumpingGraphic className="h-full w-full" />}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-white">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono font-semibold">
                      {article.category}
                    </span>
                    <span className="text-slate-300 font-mono text-[10px]">
                      {article.readTime}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-slate-950 font-heading leading-snug group-hover:text-emerald-700 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                    <span className="font-semibold text-emerald-700 group-hover:underline inline-flex items-center gap-1">
                      Read article
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="text-[11px] text-slate-400">
                      By {article.author.split(',')[0]}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. FINAL CTA / CONTACT BANNER */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-radial from-emerald-950/40 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400">
            <span>READY FOR FIELD DEPLOYMENT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight text-balance">
            Let’s move your next solar deployment forward.
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Whether you require immediate warehouse inventory in Dhaka or Bangkok, or custom factory container allocations for a multi-megawatt IPP project, our regional desks are ready to assist.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 text-xs font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-xl shadow-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              Contact SolarStock Desk
            </button>

            <button
              onClick={() => onOpenQuote()}
              className="px-6 py-3.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              Request a Bulk Project Quote
            </button>
          </div>

          <div className="pt-8 flex items-center justify-center gap-8 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Official Warranty Certificates</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Direct Factory Allocation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Customs &amp; Duty Support</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
