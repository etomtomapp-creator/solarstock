import React, { useState } from 'react';
import { ChevronRight, ArrowLeft, CheckCircle2, ShieldCheck, Download, Send, Zap, Truck, Layers, HelpCircle, FileText, ArrowRightLeft, Warehouse, Check, MapPin } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { ProductArtwork } from '../components/ProductArtwork';
import { EnergyFlowGraphic } from '../components/GraphicsGallery';

interface ProductDetailPageProps {
  product: Product;
  onBack: () => void;
  onSelectProduct: (product: Product) => void;
  onOpenQuote: (product: Product) => void;
  onOpenDatasheet: (product: Product) => void;
  onToggleCompare: (product: Product) => void;
  isCompared: boolean;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  onBack,
  onSelectProduct,
  onOpenQuote,
  onOpenDatasheet,
  onToggleCompare,
  isCompared
}) => {
  const [activeTab, setActiveTab] = useState<'specs' | 'compatibility' | 'inventory' | 'wiring'>('specs');

  // Related products from the same category or brand
  const relatedProducts = PRODUCTS.filter(
    p => p.id !== product.id && (p.category === product.category || p.brand === product.brand)
  ).slice(0, 3);

  // System pairing recommendations based on hardware category
  const matchingModules = PRODUCTS[11]; // Tongwei 620W N-type
  const matchingBatteries = PRODUCTS[18]; // Deye 5.12kWh rack
  const matchingInverter = PRODUCTS[19]; // Deye 8kW hybrid

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap pb-1">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-950 font-medium transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Catalog</span>
          </button>
          <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
          <span className="text-slate-600">{product.brand}</span>
          <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
          <span className="text-slate-600">{product.category}</span>
          <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
          <span className="font-semibold text-slate-900 truncate max-w-xs">{product.model}</span>
        </nav>

        {/* Top Product Hero Module */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm">
          
          {/* Left: Pure White Background Product Presentation */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center bg-white rounded-2xl border border-slate-100 p-6 sm:p-10 relative">
            <div className="w-full flex items-center justify-center">
              <ProductArtwork product={product} className="h-80 sm:h-96" size="detail" />
            </div>

            {/* In-Stock & Dispatch Callout Banner */}
            <div className="mt-6 w-full pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{product.leadTime}</span>
              </div>
              <div className="font-mono text-slate-400">
                Item #{product.itemNumber} of 42
              </div>
            </div>
          </div>

          {/* Right: Product Buying & Specification Profile */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              {/* Unboxed Header Metadata + Compare Button */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <span className="text-emerald-700 font-bold tracking-wide uppercase">{product.brand}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-700">{product.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono text-slate-500">SKU: {product.model}</span>
                </div>

                <button
                  onClick={() => onToggleCompare(product)}
                  className={`flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-lg border transition-colors ${
                    isCompared
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <ArrowRightLeft className="w-3.5 h-3.5" />
                  <span>{isCompared ? 'Compared' : 'Compare'}</span>
                </button>
              </div>

              {/* Exact Product Title */}
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-950 font-heading leading-tight">
                {product.title}
              </h1>

              {/* Tagline */}
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                {product.tagline}
              </p>

              {/* Key Features Bullet List */}
              <div className="pt-2 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Key Technical Capabilities
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {product.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Purchase & Quote Call to Action Box */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 block">Supply Basis</span>
                  <span className="text-sm font-bold text-slate-900 font-heading">
                    Direct Tier-1 B2B Procurement
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 block">Warranty</span>
                  <span className="text-xs font-semibold text-emerald-700">
                    {product.warrantyYears} Years Factory Direct
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <button
                  onClick={() => onOpenQuote(product)}
                  className="flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 rounded-xl shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Official Quotation</span>
                </button>

                <button
                  onClick={() => onOpenDatasheet(product)}
                  className="flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-500" />
                  <span>Download Full Datasheet</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center">
                Dispatched directly from regional warehouse hubs in Bangkok, Dhaka, or Shenzhen.
              </p>
            </div>

          </div>

        </div>

        {/* Detailed Tabs Suite */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
          
          {/* Tab Navigation */}
          <div className="border-b border-slate-200 bg-slate-50 px-6 sm:px-8 flex gap-6 text-xs font-semibold overflow-x-auto">
            <button
              onClick={() => setActiveTab('specs')}
              className={`py-3.5 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'specs' ? 'border-emerald-600 text-slate-950 font-bold' : 'border-transparent text-slate-500 hover:text-slate-950'
              }`}
            >
              Technical Specifications ({product.specs.length})
            </button>
            <button
              onClick={() => setActiveTab('compatibility')}
              className={`py-3.5 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'compatibility' ? 'border-emerald-600 text-slate-950 font-bold' : 'border-transparent text-slate-500 hover:text-slate-950'
              }`}
            >
              System Matching & Pairing
            </button>
            <button
              onClick={() => setActiveTab('inventory')}
              className={`py-3.5 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'inventory' ? 'border-emerald-600 text-slate-950 font-bold' : 'border-transparent text-slate-500 hover:text-slate-950'
              }`}
            >
              Regional Hub Stock Levels
            </button>
            <button
              onClick={() => setActiveTab('wiring')}
              className={`py-3.5 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'wiring' ? 'border-emerald-600 text-slate-950 font-bold' : 'border-transparent text-slate-500 hover:text-slate-950'
              }`}
            >
              Wiring & SLD Guidelines
            </button>
          </div>

          <div className="p-6 sm:p-8">
            
            {/* Tab 1: Full Specifications */}
            {activeTab === 'specs' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-950 font-heading">
                    Official Technical Specifications Matrix
                  </h3>
                  <button
                    onClick={() => onOpenDatasheet(product)}
                    className="text-xs text-emerald-700 hover:underline font-semibold flex items-center gap-1"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Print Engineering PDF</span>
                  </button>
                </div>

                <div className="border border-slate-200 rounded-2xl overflow-hidden">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold uppercase text-[10px] tracking-wider">
                        <th className="py-2.5 px-4 w-1/3">Parameter</th>
                        <th className="py-2.5 px-4 w-1/3">Standard Specification</th>
                        <th className="py-2.5 px-4 w-1/3">Subsystem Domain</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {product.specs.map((spec, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                          <td className="py-2.5 px-4 font-medium text-slate-700">{spec.label}</td>
                          <td className="py-2.5 px-4 font-mono font-bold text-slate-900">{spec.value}</td>
                          <td className="py-2.5 px-4 text-slate-500">{spec.category || 'General'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <strong className="text-slate-900">Engineering Note:</strong> All values tested under standard IEC 61215 / IEC 62109 ambient baseline conditions. Ambient temperature deratings begin at 45°C. Contact our Dhaka or Bangkok desks for altitude or high-humidity single-line calibrations.
                </div>
              </div>
            )}

            {/* Tab 2: System Matching & Pairing */}
            {activeTab === 'compatibility' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-bold text-slate-950 font-heading">
                    Verified Compatible Subsystems & Hardware
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    SolarStock pre-tests electrical communications (CAN/RS485 Modbus) and string voltages to ensure zero commissioning friction.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Matching Solar Module */}
                  <div className="p-4 rounded-2xl border border-slate-200 bg-white flex items-center justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Recommended Solar Array</span>
                      <h4 className="text-xs font-bold text-slate-900">{matchingModules.title}</h4>
                      <p className="text-[11px] text-slate-500">N-Type TOPCon Dual-Glass · 30-Year Warranty</p>
                    </div>
                    <button
                      onClick={() => onSelectProduct(matchingModules)}
                      className="px-3 py-1.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg shrink-0"
                    >
                      View Module →
                    </button>
                  </div>

                  {/* Matching Battery / Inverter */}
                  {product.category.includes('Inverter') ? (
                    <div className="p-4 rounded-2xl border border-slate-200 bg-white flex items-center justify-between gap-4">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700">Recommended Battery Storage</span>
                        <h4 className="text-xs font-bold text-slate-900">{matchingBatteries.title}</h4>
                        <p className="text-[11px] text-slate-500">51.2V 100Ah LiFePO4 · CANbus Auto-detect</p>
                      </div>
                      <button
                        onClick={() => onSelectProduct(matchingBatteries)}
                        className="px-3 py-1.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg shrink-0"
                      >
                        View Battery →
                      </button>
                    </div>
                  ) : (
                    <div className="p-4 rounded-2xl border border-slate-200 bg-white flex items-center justify-between gap-4">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700">Recommended Hybrid Inverter</span>
                        <h4 className="text-xs font-bold text-slate-900">{matchingInverter.title}</h4>
                        <p className="text-[11px] text-slate-500">8kW Single-Phase Hybrid · 190A Charge</p>
                      </div>
                      <button
                        onClick={() => onSelectProduct(matchingInverter)}
                        className="px-3 py-1.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg shrink-0"
                      >
                        View Inverter →
                      </button>
                    </div>
                  )}

                </div>
              </div>
            )}

            {/* Tab 3: Regional Hub Inventory */}
            {activeTab === 'inventory' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-bold text-slate-950 font-heading">
                    Multi-Hub Stock Availability & Lead Times
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Live inventory counts across SolarStock physical regional storage centers.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-900 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                        Dhaka Warehouse
                      </span>
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-semibold rounded text-[10px]">In Stock</span>
                    </div>
                    <div className="font-mono text-2xl font-bold text-slate-950">48 Units</div>
                    <p className="text-[11px] text-slate-500">Immediate truck dispatch across Bangladesh within 24 hours.</p>
                  </div>

                  <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-900 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                        Bangkok Logistics Hub
                      </span>
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-semibold rounded text-[10px]">In Stock</span>
                    </div>
                    <div className="font-mono text-2xl font-bold text-slate-950">92 Units</div>
                    <p className="text-[11px] text-slate-500">Same-day collection or 24-48h ASEAN road/sea dispatch.</p>
                  </div>

                  <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-900 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-blue-600" />
                        Shenzhen Global Hub
                      </span>
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-800 font-semibold rounded text-[10px]">Factory Batch</span>
                    </div>
                    <div className="font-mono text-2xl font-bold text-slate-950">500+ Units</div>
                    <p className="text-[11px] text-slate-500">Full 20ft / 40ft High Cube container loads ready for CIF port export.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 4: Wiring Guidelines with High-Tech Energy Flow Architecture */}
            {activeTab === 'wiring' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-bold text-slate-950 font-heading">
                    Single-Line Diagram (SLD) &amp; Electrical Architecture
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Standard engineering guidelines for DC string protection, hybrid inverter MPPT matching, and critical AC subpanel routing.
                  </p>
                </div>

                {/* Interactive Energy Flow Diagram */}
                <EnergyFlowGraphic className="w-full" />

                <div className="space-y-3 text-xs text-slate-700 leading-relaxed bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                    Field Commissioning Checklist for {product.model}
                  </h4>
                  <ul className="space-y-2 list-disc pl-5 text-slate-600">
                    <li>Install a dedicated Type II DC Surge Protective Device (SPD) on each independent MPPT input string.</li>
                    <li>Ensure grounding resistance measures below 5.0 Ohms at the equipment chassis ground lug.</li>
                    <li>For battery connections, employ copper cables rated for 1.25x the maximum continuous charge/discharge current.</li>
                    <li>Verify firmware version via RS485 / WiFi logger prior to commissioning grid export.</li>
                    <li>Maintain minimum 300mm clearance on all sides for heatsink convection airflow.</li>
                  </ul>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="pt-6 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <h3 className="text-xl font-bold text-slate-950 font-heading">
                Related Equipment in Category & Brand
              </h3>
              <button
                onClick={onBack}
                className="text-xs font-semibold text-emerald-700 hover:text-emerald-800"
              >
                View all in catalog →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectProduct(rel)}
                  className="group cursor-pointer bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition-all p-4 flex flex-col justify-between space-y-3"
                >
                  <div className="h-44 bg-white flex items-center justify-center p-2">
                    <ProductArtwork product={rel} className="h-40" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-[11px] text-emerald-700 font-semibold">{rel.brand} · {rel.category}</div>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-1">
                      {rel.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 line-clamp-2">
                      {rel.tagline}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
