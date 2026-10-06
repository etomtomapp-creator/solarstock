import React, { useState } from 'react';
import { Product } from '../types';
import { ProductArtwork } from './ProductArtwork';
import { X, ArrowRightLeft, Check, Minus, Plus, Trash2, ArrowUpRight, Zap, ShieldCheck } from 'lucide-react';

interface CompareDrawerProps {
  compareList: Product[];
  onRemove: (productId: string) => void;
  onClear: () => void;
  onSelectProduct: (product: Product) => void;
  onOpenQuote: (product: Product) => void;
}

export const CompareDrawer: React.FC<CompareDrawerProps> = ({
  compareList,
  onRemove,
  onClear,
  onSelectProduct,
  onOpenQuote
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  if (compareList.length === 0) return null;

  return (
    <>
      {/* Floating Bottom Comparison Dock */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-4xl bg-slate-950/95 text-white backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-2xl border border-slate-800 flex items-center justify-between gap-4 animate-in slide-in-from-bottom-5 duration-200">
        
        {/* Left: Product Thumbnails */}
        <div className="flex items-center gap-3 overflow-x-auto py-1">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
              {compareList.length}
            </div>
            <span className="text-xs font-semibold whitespace-nowrap hidden sm:inline">
              Compare Models:
            </span>
          </div>

          <div className="flex items-center gap-2">
            {compareList.map((prod) => (
              <div
                key={prod.id}
                className="relative group flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-xl px-2.5 py-1.5 shrink-0"
              >
                <div className="w-7 h-7 bg-white rounded-md overflow-hidden flex items-center justify-center p-0.5">
                  <ProductArtwork product={prod} className="h-6" size="sm" />
                </div>
                <div className="flex flex-col text-[11px] max-w-[110px]">
                  <span className="font-semibold text-white truncate">{prod.model}</span>
                  <span className="text-slate-400 text-[10px] truncate">{prod.brand}</span>
                </div>
                <button
                  onClick={() => onRemove(prod.id)}
                  className="text-slate-500 hover:text-red-400 ml-1 p-0.5"
                  aria-label="Remove from compare"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onClear}
            className="text-xs text-slate-400 hover:text-white transition-colors px-2 py-1"
          >
            Clear
          </button>

          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-1.5 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl shadow-sm transition-colors whitespace-nowrap"
          >
            <ArrowRightLeft className="w-3.5 h-3.5" />
            <span>Compare Specs</span>
          </button>
        </div>

      </div>

      {/* Full Comparison Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
          <div 
            className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2">
                <ArrowRightLeft className="w-4 h-4 text-emerald-400" />
                <h3 className="text-base font-bold font-heading">
                  Technical Equipment Comparison ({compareList.length} Models)
                </h3>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Comparison Table */}
            <div className="p-6 overflow-x-auto max-h-[80vh]">
              <table className="w-full text-left text-xs border-collapse min-w-[650px]">
                <thead>
                  <tr className="border-b-2 border-slate-900">
                    <th className="py-3 px-4 w-44 text-slate-500 uppercase tracking-wider text-[11px] font-bold">
                      Specification
                    </th>
                    {compareList.map((prod) => (
                      <th key={prod.id} className="py-3 px-4 min-w-[200px] align-top">
                        <div className="space-y-2">
                          <div className="h-32 bg-white rounded-xl border border-slate-200 p-2 flex items-center justify-center">
                            <ProductArtwork product={prod} className="h-28" size="sm" />
                          </div>
                          <div className="text-emerald-700 font-bold uppercase text-[10px] tracking-wider">
                            {prod.brand} · {prod.category}
                          </div>
                          <h4 className="font-bold text-slate-950 font-heading text-xs leading-snug line-clamp-2">
                            {prod.title}
                          </h4>
                          <div className="font-mono text-slate-500 text-[11px]">
                            Model: {prod.model}
                          </div>
                          <div className="flex gap-1.5 pt-1">
                            <button
                              onClick={() => {
                                setModalOpen(false);
                                onSelectProduct(prod);
                              }}
                              className="px-2.5 py-1 text-[10px] font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded"
                            >
                              Details
                            </button>
                            <button
                              onClick={() => {
                                setModalOpen(false);
                                onOpenQuote(prod);
                              }}
                              className="px-2.5 py-1 text-[10px] font-bold text-white bg-slate-950 hover:bg-slate-800 rounded"
                            >
                              RFQ
                            </button>
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100 text-xs">
                  {/* Rating */}
                  <tr className="bg-slate-50/60 font-medium">
                    <td className="py-3 px-4 font-semibold text-slate-700">Power / Rating</td>
                    {compareList.map((p) => (
                      <td key={p.id} className="py-3 px-4 font-mono font-bold text-slate-950">
                        {p.powerRating || 'Standard Rating'}
                      </td>
                    ))}
                  </tr>

                  {/* Voltage / Output */}
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-700">Voltage Specification</td>
                    {compareList.map((p) => (
                      <td key={p.id} className="py-3 px-4 font-mono text-slate-800">
                        {p.voltageRating || 'Multi-Voltage Compatible'}
                      </td>
                    ))}
                  </tr>

                  {/* Category Taxonomy */}
                  <tr className="bg-slate-50/60 font-medium">
                    <td className="py-3 px-4 font-semibold text-slate-700">Category</td>
                    {compareList.map((p) => (
                      <td key={p.id} className="py-3 px-4 text-slate-800">
                        {p.category}
                      </td>
                    ))}
                  </tr>

                  {/* Lead Time */}
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-700">Warehouse Lead Time</td>
                    {compareList.map((p) => (
                      <td key={p.id} className="py-3 px-4 text-emerald-700 font-semibold">
                        {p.leadTime}
                      </td>
                    ))}
                  </tr>

                  {/* Warranty */}
                  <tr className="bg-slate-50/60 font-medium">
                    <td className="py-3 px-4 font-semibold text-slate-700">Factory Warranty</td>
                    {compareList.map((p) => (
                      <td key={p.id} className="py-3 px-4 font-mono text-slate-900">
                        {p.warrantyYears} Years Direct
                      </td>
                    ))}
                  </tr>

                  {/* Key Features Top 3 */}
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-700 align-top">Key Capabilities</td>
                    {compareList.map((p) => (
                      <td key={p.id} className="py-3 px-4 text-[11px] text-slate-600 space-y-1 align-top">
                        {p.keyFeatures.slice(0, 3).map((feat, i) => (
                          <div key={i} className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </td>
                    ))}
                  </tr>

                </tbody>
              </table>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
              <span className="text-slate-500">
                Need single-line compatibility verification? Reach our engineering desk.
              </span>
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800"
              >
                Close Comparison
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
