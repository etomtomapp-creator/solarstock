import React from 'react';
import { BRANDS } from '../data/brands';
import { PRODUCTS } from '../data/products';
import { ArrowUpRight, ShieldCheck, CheckCircle2, Zap, Award, Layers } from 'lucide-react';
import { BrandName } from '../types';

interface BrandsPageProps {
  onNavigateToProducts: (brand: string) => void;
  onOpenQuote: () => void;
}

export const BrandsPage: React.FC<BrandsPageProps> = ({ onNavigateToProducts, onOpenQuote }) => {
  // Brand Silhouette Mini Graphic
  const renderBrandHardwareIcon = (brandName: string) => {
    switch (brandName) {
      case 'Deye':
        return (
          <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center p-2 text-white">
            <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
              <rect x="6" y="4" width="28" height="32" rx="3" fill="#1E293B" stroke="#0284C7" strokeWidth="2" />
              <rect x="12" y="8" width="16" height="10" rx="1.5" fill="#0F172A" stroke="#38BDF8" strokeWidth="1" />
              <circle cx="20" cy="26" r="4" fill="#10B981" />
            </svg>
          </div>
        );
      case 'SAJ':
        return (
          <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-800 flex items-center justify-center p-2 text-white">
            <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
              <rect x="8" y="6" width="24" height="28" rx="3" fill="#1E3A5F" stroke="#38BDF8" strokeWidth="2" />
              <rect x="12" y="10" width="16" height="8" rx="1" fill="#0B132B" />
              <line x1="12" y1="24" x2="28" y2="24" stroke="#60A5FA" strokeWidth="1.5" />
              <line x1="12" y1="28" x2="28" y2="28" stroke="#60A5FA" strokeWidth="1.5" />
            </svg>
          </div>
        );
      case 'Difful':
        return (
          <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center p-2 text-white">
            <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
              <rect x="14" y="4" width="12" height="32" rx="4" fill="#E2E8F0" stroke="#0284C7" strokeWidth="2" />
              <circle cx="20" cy="10" r="3" fill="#0284C7" />
              <line x1="14" y1="20" x2="26" y2="20" stroke="#94A3B8" strokeWidth="1.5" />
            </svg>
          </div>
        );
      case 'EP Equipment':
        return (
          <div className="w-12 h-12 rounded-xl bg-red-950 border border-red-800 flex items-center justify-center p-2 text-white">
            <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
              <path d="M4 28 L4 18 L16 18 L24 24 L32 24 L32 28 Z" fill="#DC2626" stroke="#991B1B" strokeWidth="1.5" />
              <line x1="32" y1="8" x2="32" y2="28" stroke="#1E293B" strokeWidth="3" />
              <circle cx="10" cy="30" r="4" fill="#0F172A" />
              <circle cx="28" cy="30" r="4" fill="#0F172A" />
            </svg>
          </div>
        );
      case 'TW solar':
      case 'JA Solar':
        return (
          <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center p-2 text-white">
            <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
              <rect x="6" y="8" width="28" height="24" rx="2" fill="#0B132B" stroke="#0284C7" strokeWidth="2" />
              <line x1="15" y1="8" x2="15" y2="32" stroke="#38BDF8" strokeWidth="1" />
              <line x1="25" y1="8" x2="25" y2="32" stroke="#38BDF8" strokeWidth="1" />
              <line x1="6" y1="20" x2="34" y2="20" stroke="#38BDF8" strokeWidth="1" />
            </svg>
          </div>
        );
      case 'Projoy Electric':
        return (
          <div className="w-12 h-12 rounded-xl bg-amber-950 border border-amber-800 flex items-center justify-center p-2 text-white">
            <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
              <rect x="8" y="8" width="24" height="24" rx="4" fill="#F8FAFC" stroke="#D97706" strokeWidth="2" />
              <circle cx="20" cy="20" r="6" fill="#DC2626" />
              <line x1="20" y1="16" x2="20" y2="24" stroke="#FFFFFF" strokeWidth="2" />
            </svg>
          </div>
        );
      case 'Solarstock':
      default:
        return (
          <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center p-2 text-white">
            <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
              <rect x="6" y="10" width="28" height="22" rx="4" fill="#064E3B" stroke="#10B981" strokeWidth="2" />
              <circle cx="14" cy="18" r="3" fill="#34D399" />
              <rect x="22" y="15" width="8" height="6" rx="1" fill="#022C22" />
            </svg>
          </div>
        );
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="border-b border-slate-200 pb-8 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            MANUFACTURING ECOSYSTEM
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-950 font-heading">
            Authorized Brands &amp; Tier-1 Global Partners
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            SolarStock maintains direct Tier-1 distributor agreements, factory engineering tie-ups, and localized warranty swap arrangements with the world's most trusted solar and storage manufacturers.
          </p>
        </div>

        {/* Brands Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BRANDS.map((brand) => {
            const productCount = PRODUCTS.filter(p => p.brand === brand.name).length;
            return (
              <div
                key={brand.name}
                className="bg-white rounded-3xl border border-slate-200/90 p-7 shadow-sm hover:shadow-xl hover:border-emerald-500/30 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-5">
                  
                  {/* Brand Header with Silhouette Graphic */}
                  <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-3.5">
                      {renderBrandHardwareIcon(brand.name)}
                      <div>
                        <h3 className="text-2xl font-bold text-slate-950 font-heading tracking-tight">
                          {brand.name}
                        </h3>
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                          <span className="font-semibold text-emerald-700">{brand.partnerTier}</span>
                          <span>·</span>
                          <span>{brand.origin}</span>
                        </div>
                      </div>
                    </div>

                    <div className="px-2.5 py-1 bg-slate-100 rounded-lg text-xs font-mono font-semibold text-slate-700">
                      {productCount} SKUs
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-bold text-slate-900 leading-snug">
                      {brand.tagline}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {brand.description}
                    </p>
                  </div>

                  {/* Categories Covered */}
                  <div className="pt-2">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block mb-1.5">
                      Hardware Taxonomy
                    </span>
                    <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-600">
                      {brand.categories.map((cat, i) => (
                        <span key={i} className="px-2 py-0.5 bg-slate-50 border border-slate-200 rounded text-slate-700 font-medium">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onNavigateToProducts(brand.name)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-emerald-700 transition-colors"
                  >
                    <span>View {brand.name} catalog</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <span className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>OEM Warranty</span>
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Global Warranty & Support Assurance Banner */}
        <div className="p-8 rounded-3xl bg-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <span className="text-xs font-mono text-emerald-400 font-semibold uppercase">
              100% FACTORY DIRECT RMA
            </span>
            <h3 className="text-xl font-bold font-heading">
              Looking for Authorized EPC Wholesale or Distributor Pricing?
            </h3>
            <p className="text-xs text-slate-400">
              SolarStock provides verified container allocation, warranty registrations, and regional replacement stock in Bangkok and Dhaka.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs whitespace-nowrap transition-colors"
          >
            Inquire Bulk Pricing
          </button>
        </div>

      </div>
    </div>
  );
};
