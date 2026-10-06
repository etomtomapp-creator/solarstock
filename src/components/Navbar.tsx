import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, User, Calculator } from 'lucide-react';
import { AnimatedLogo } from './AnimatedLogo';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string, params?: { category?: string; brand?: string; productId?: string }) => void;
  onOpenQuote: () => void;
  onOpenAuth: () => void;
  onOpenSizing: () => void;
  compareCount: number;
  userEmail?: string | null;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onOpenQuote,
  onOpenAuth,
  onOpenSizing,
  compareCount,
  userEmail
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'brands', label: 'Brands' },
    { id: 'products', label: 'Products' },
    { id: 'projects', label: 'Projects' },
    { id: 'news', label: 'News & Research' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/90'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[4.25rem]">
          
          {/* Zone 1: Brand Wordmark with Wave Animated Logo */}
          <div className="flex items-center shrink-0">
            <button
              onClick={() => handleLinkClick('home')}
              className="text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-1 -ml-1 transition-opacity hover:opacity-95"
              aria-label="SolarStock Home"
            >
              <AnimatedLogo variant="light" size="md" showSubtitle={true} />
            </button>
          </div>

          {/* Zone 2: Navigation Links (Clean, streamlined typography) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] font-medium tracking-tight">
            {navLinks.map((link) => {
              const isActive = activePage === link.id || (activePage === 'product-detail' && link.id === 'products');
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1.5 transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded ${
                    isActive
                      ? 'text-slate-950 font-semibold'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Clean Actions Group */}
          <div className="hidden md:flex items-center gap-3">
            {/* Explore Products Primary Button */}
            <button
              onClick={() => handleLinkClick('products')}
              className="group flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-xl shadow-sm transition-all hover:shadow whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <span>Explore Products</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-left ${
                    isActive
                      ? 'bg-slate-100 text-slate-950 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-emerald-500" />}
                </button>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  onOpenSizing();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-emerald-950 bg-emerald-50 rounded-lg border border-emerald-200"
              >
                <Calculator className="w-3.5 h-3.5 text-emerald-600" />
                <span>Launch System Sizing & BOM Tool</span>
              </button>

              <button
                onClick={() => {
                  onOpenAuth();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 rounded-lg"
              >
                <User className="w-3.5 h-3.5" />
                <span>{userEmail ? 'Partner Portal' : 'Partner Login / Register'}</span>
              </button>

              <button
                onClick={() => {
                  handleLinkClick('products');
                }}
                className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-slate-950 rounded-lg shadow-sm"
              >
                <span>Explore Products</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => {
                  onOpenQuote();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
              >
                Request a Custom Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
