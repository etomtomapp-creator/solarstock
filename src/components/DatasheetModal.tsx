import React from 'react';
import { X, Printer, Download, ShieldCheck, Zap, Layers, CheckCircle } from 'lucide-react';
import { Product } from '../types';
import { ProductArtwork } from './ProductArtwork';

interface DatasheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export const DatasheetModal: React.FC<DatasheetModalProps> = ({
  isOpen,
  onClose,
  product
}) => {
  if (!isOpen || !product) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 print:p-0 print:bg-white">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden print:shadow-none print:border-none print:max-w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Engineering Document</span>
            <span className="text-slate-600">/</span>
            <span className="text-xs text-slate-300 font-mono">SPEC-{product.model}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Datasheet Sheet */}
        <div className="p-8 space-y-6 text-slate-900 print:p-6">
          
          {/* Document Header */}
          <div className="flex items-start justify-between border-b-2 border-slate-900 pb-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-700">
                <span>SolarStock Technical Publication</span>
                <span>·</span>
                <span>Official Product Datasheet</span>
              </div>
              <h2 className="text-2xl font-bold font-heading text-slate-950 mt-1">
                {product.title}
              </h2>
              <p className="text-xs text-slate-600 mt-1 font-mono">
                Model: <strong className="text-slate-900">{product.model}</strong> · Brand: <strong className="text-slate-900">{product.brand}</strong> · Category: {product.category}
              </p>
            </div>

            <div className="text-right shrink-0">
              <div className="text-lg font-bold font-heading text-slate-950">SolarStock</div>
              <div className="text-[10px] text-slate-500 font-mono">Doc Ver: 2026.1-EN</div>
              <div className="text-[10px] text-emerald-600 font-medium">{product.leadTime}</div>
            </div>
          </div>

          {/* Layout: Image + Key Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1 border border-slate-200 rounded-xl overflow-hidden bg-white p-2">
              <ProductArtwork product={product} className="h-48" size="sm" />
            </div>

            <div className="md:col-span-2 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                System Overview
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                {product.description}
              </p>

              <div className="pt-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Key Technical Features
                </h4>
                <ul className="grid grid-cols-1 gap-1.5 text-xs text-slate-800">
                  {product.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Comprehensive Specifications Table */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>Full Engineering Specification Parameters</span>
            </h4>

            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                    <th className="py-2.5 px-4 w-1/3">Parameter Name</th>
                    <th className="py-2.5 px-4 w-1/3">Standard Specification</th>
                    <th className="py-2.5 px-4 w-1/3">Domain Classification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {product.specs.map((spec, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                      <td className="py-2 px-4 font-medium text-slate-700">{spec.label}</td>
                      <td className="py-2 px-4 font-mono font-semibold text-slate-900">{spec.value}</td>
                      <td className="py-2 px-4 text-slate-500">{spec.category || 'General Parameter'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Standards, Compliance, and Warranty Box */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-900">Warranty Coverage</span>
                <p className="text-slate-500 mt-0.5">{product.warrantyYears} Years Factory Direct Guarantee</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Layers className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-900">QC & Certifications</span>
                <p className="text-slate-500 mt-0.5">IEC 62109 / IEC 62619 / CE / UN38.3</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-900">Supply Routing</span>
                <p className="text-slate-500 mt-0.5">SolarStock Regional Dispatch Center</p>
              </div>
            </div>
          </div>

          {/* Document Footer */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
            <div>
              <span>SolarStock Global Supply Network · Web: solarstock.com</span>
            </div>
            <div>
              <span>Certified Technical Specification 2026</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
