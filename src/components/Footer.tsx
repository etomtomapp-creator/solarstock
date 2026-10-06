import React from 'react';
import { Mail, Phone, MapPin, Globe, ArrowUpRight } from 'lucide-react';
import { AnimatedLogo } from './AnimatedLogo';

interface FooterProps {
  onNavigate: (page: string, params?: { category?: string; brand?: string }) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-slate-800/80">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-1 -ml-1 transition-opacity hover:opacity-95"
              aria-label="SolarStock Home"
            >
              <AnimatedLogo variant="dark" size="md" showSubtitle={true} />
            </button>
            
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Premium solar energy infrastructure & distribution platform. Connecting Tier-1 global PV manufacturers, hybrid inverters, energy storage systems, and regional deployment logistics across South Asia, Middle East, and Africa.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-2.5">
                <Globe className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Headquarters: Shenzhen Supply Hub · Bangkok & Dhaka Desks</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Regional Desk: +880 1XXX-XXXXXX / +66 2XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Inquiries: contact@solarstock.com</span>
              </div>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-heading">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors text-slate-400 text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors text-slate-400 text-left"
                >
                  Partnerships & EPC
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('brands')}
                  className="hover:text-white transition-colors text-slate-400 text-left"
                >
                  Regional Network
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors text-slate-400 text-left"
                >
                  Contact Desk
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('news')}
                  className="hover:text-white transition-colors text-slate-400 text-left"
                >
                  News & Case Studies
                </button>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-heading">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors text-slate-400 text-left"
                >
                  Product Categories
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors text-slate-400 text-left"
                >
                  Project Planning
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenQuote}
                  className="hover:text-white transition-colors text-slate-400 text-left flex items-center gap-1"
                >
                  <span>Request a Quote</span>
                  <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors text-slate-400 text-left"
                >
                  Why SolarStock
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('brands')}
                  className="hover:text-white transition-colors text-slate-400 text-left"
                >
                  Authorized Brands
                </button>
              </li>
            </ul>
          </div>

          {/* Regional Hubs & Dispatch Notice */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-heading">
              Regional Desks
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="font-semibold text-slate-200">South Asia Desk</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Dhaka Commercial District</div>
                <div className="text-[10px] text-emerald-400 font-mono mt-1">+880 1XXX-XXXXXX</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="font-semibold text-slate-200">Southeast Asia Desk</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Bangkok Logistics Hub</div>
                <div className="text-[10px] text-emerald-400 font-mono mt-1">+66 2XXX-XXXX</div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>Copyright © 2026 SolarStock. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Supply</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span className="hover:text-slate-400 cursor-pointer">Warranty Standards</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span className="hover:text-slate-400 cursor-pointer">Compliance & HS Codes</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
