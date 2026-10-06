import React, { useState } from 'react';
import { X, User, Building, Award, FileSpreadsheet, ShieldCheck, Download, ExternalLink, Clock, CheckCircle2, ChevronRight, LogOut } from 'lucide-react';

interface PartnerDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  userEmail: string | null;
  onLogout: () => void;
  onOpenQuote: () => void;
  onOpenSizing: () => void;
}

export const PartnerDashboardModal: React.FC<PartnerDashboardModalProps> = ({
  isOpen,
  onClose,
  userEmail,
  onLogout,
  onOpenQuote,
  onOpenSizing
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'rfqs' | 'warranty'>('overview');
  const [serialQuery, setSerialQuery] = useState('');
  const [serialResult, setSerialResult] = useState<string | null>(null);

  if (!isOpen) return null;

  const mockRfqs = [
    { id: 'RFQ-2026-89412', date: '2026-03-24', item: '24x Deye SUN-12K Hybrid Inverters + 48x 5.12kWh Rack ESS', status: 'Proforma Ready', destination: 'Dhaka Port' },
    { id: 'RFQ-2026-78210', date: '2026-02-18', item: '4x EP EFX5-301 Lithium Forklifts + 10x F4 Pallet Trucks', status: 'Dispatched / In Transit', destination: 'Bangkok Logistics Hub' },
    { id: 'RFQ-2026-65490', date: '2026-01-11', item: '1,200x Tongwei N-Type 620W Bifacial Modules', status: 'Delivered', destination: 'Gazipur Site' },
  ];

  const handleCheckWarranty = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serialQuery.trim()) return;
    setSerialResult(`VERIFIED: Unit S/N [${serialQuery.trim().toUpperCase()}] registered with 10-Year Factory Direct Warranty under SolarStock Regional Service Desk. Active through 2035.`);
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
              <Building className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold font-heading tracking-tight">
                  SolarStock EPC Partner Portal
                </h3>
                <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-bold rounded-full border border-emerald-500/30">
                  Gold Tier Partner
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Logged in as: <strong className="text-slate-200 font-mono">{userEmail || 'partner@solarstock.com'}</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onLogout();
                onClose();
              }}
              className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-slate-800 transition-colors text-xs flex items-center gap-1"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="border-b border-slate-200 bg-slate-50 px-6 sm:px-8 flex gap-6 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 border-b-2 transition-colors ${
              activeTab === 'overview' ? 'border-emerald-600 text-slate-950' : 'border-transparent text-slate-500 hover:text-slate-950'
            }`}
          >
            Tier Benefits & Procurement
          </button>
          <button
            onClick={() => setActiveTab('rfqs')}
            className={`py-3 border-b-2 transition-colors ${
              activeTab === 'rfqs' ? 'border-emerald-600 text-slate-950' : 'border-transparent text-slate-500 hover:text-slate-950'
            }`}
          >
            Active RFQs & Order Tracking ({mockRfqs.length})
          </button>
          <button
            onClick={() => setActiveTab('warranty')}
            className={`py-3 border-b-2 transition-colors ${
              activeTab === 'warranty' ? 'border-emerald-600 text-slate-950' : 'border-transparent text-slate-500 hover:text-slate-950'
            }`}
          >
            Serial Warranty Verification
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {activeTab === 'overview' && (
            <div className="space-y-6">
              
              {/* Partner Tier Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase text-emerald-400">
                    <Award className="w-4 h-4" />
                    <span>Tier-1 Direct Distribution Status</span>
                  </div>
                  <h4 className="text-xl font-bold font-heading">
                    Gold Commercial EPC Partner Privileges
                  </h4>
                  <p className="text-xs text-slate-400 max-w-lg leading-relaxed">
                    Enjoy up to 18% factory margin rebate on container batches, 48-hour local buffer replacement reserves in Bangkok & Dhaka hubs, and dedicated SLD engineering support.
                  </p>
                </div>

                <div className="flex flex-col gap-2 shrink-0 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenQuote();
                    }}
                    className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-colors"
                  >
                    Quick Project RFQ
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenSizing();
                    }}
                    className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl border border-slate-700 transition-colors"
                  >
                    Launch System Sizing Tool
                  </button>
                </div>
              </div>

              {/* Wholesale Resources & Price Sheets */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-2 hover:border-slate-300 transition-colors">
                  <FileSpreadsheet className="w-5 h-5 text-emerald-600" />
                  <h5 className="text-xs font-bold text-slate-900">2026 Wholesale Price Matrix</h5>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Tiered pricing for Inverters, LiFePO4 ESS, MHE, and 620W+ modules in USD / EUR.
                  </p>
                  <a
                    href="#download"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Downloading SolarStock_Wholesale_Catalog_2026.xlsx...');
                    }}
                    className="inline-flex items-center gap-1 text-xs text-emerald-700 font-semibold pt-1 hover:underline"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download XLSX</span>
                  </a>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-2 hover:border-slate-300 transition-colors">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                  <h5 className="text-xs font-bold text-slate-900">Authorized Dealer Certificate</h5>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Verified distributor letter for government and corporate solar tenders.
                  </p>
                  <a
                    href="#cert"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Generated Official SolarStock_Partner_Authorization.pdf');
                    }}
                    className="inline-flex items-center gap-1 text-xs text-blue-700 font-semibold pt-1 hover:underline"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-2 hover:border-slate-300 transition-colors">
                  <Clock className="w-5 h-5 text-amber-500" />
                  <h5 className="text-xs font-bold text-slate-900">Direct Engineering Hotline</h5>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Priority WhatsApp & phone hotline for live inverter commissioning support.
                  </p>
                  <span className="text-xs font-mono text-slate-800 font-semibold pt-1 block">
                    +880 1XXX-XXXXXX (Desk)
                  </span>
                </div>
              </div>

            </div>
          )}

          {activeTab === 'rfqs' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900 font-heading">
                  Recent Quotation Requests & Shipments
                </h4>
                <button
                  onClick={() => {
                    onClose();
                    onOpenQuote();
                  }}
                  className="text-xs font-semibold text-emerald-700 hover:underline"
                >
                  + New Quotation Request
                </button>
              </div>

              <div className="space-y-3">
                {mockRfqs.map((rfq) => (
                  <div key={rfq.id} className="p-4 bg-white rounded-xl border border-slate-200 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-slate-900">{rfq.id}</span>
                        <span className="text-slate-400">·</span>
                        <span className="text-slate-500">{rfq.date}</span>
                        <span className="text-slate-400">·</span>
                        <span className="text-slate-600 font-medium">{rfq.destination}</span>
                      </div>
                      <div className="text-slate-800 font-medium">
                        {rfq.item}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 font-semibold rounded text-[11px]">
                        {rfq.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'warranty' && (
            <div className="space-y-4 max-w-xl">
              <div>
                <h4 className="text-sm font-bold text-slate-900 font-heading">
                  Equipment Serial Number Warranty Lookup
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Check factory warranty validity, date of dispatch, and RMA replacement eligibility for any Deye, SAJ, EP, or Solarstock unit.
                </p>
              </div>

              <form onSubmit={handleCheckWarranty} className="flex gap-2">
                <input
                  type="text"
                  required
                  value={serialQuery}
                  onChange={(e) => setSerialQuery(e.target.value)}
                  placeholder="Enter equipment S/N (e.g. DEYE2025-884102)"
                  className="flex-1 px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono uppercase"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Verify
                </button>
              </form>

              {serialResult && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 leading-relaxed flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{serialResult}</span>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 sm:px-8 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>SolarStock Trade Network · Tier-1 Hardware Distributor</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800"
          >
            Close Portal
          </button>
        </div>
      </div>
    </div>
  );
};
