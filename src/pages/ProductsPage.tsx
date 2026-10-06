import React, { useState, useMemo } from 'react';
import { Search, RotateCcw, ChevronLeft, ChevronRight, SlidersHorizontal, ArrowUpRight, Zap, Filter, LayoutGrid, List, CheckCircle2 } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product, ProductCategory, BrandName } from '../types';
import { ProductArtwork } from '../components/ProductArtwork';

interface ProductsPageProps {
  onSelectProduct: (product: Product) => void;
  onOpenQuote: (product?: Product) => void;
  onToggleCompare: (product: Product) => void;
  compareList: Product[];
  initialCategory?: string;
  initialBrand?: string;
}

const ALL_CATEGORIES: ProductCategory[] = [
  'ESS',
  'Inverter',
  'Hybrid Inverter',
  'Off-Grid Inverter',
  'On-Grid Inverter',
  'LPS',
  'Material Handling Equipment (MHE)',
  'Forklift',
  'Pallet Truck',
  'Stacker',
  'Portable Power Station',
  'Protection Device',
  'Solar Panel',
  'Solar Pump',
  'Variable Frequency Drive (VFD)'
];

const ALL_BRANDS: BrandName[] = [
  'Deye',
  'SAJ',
  'Difful',
  'EP Equipment',
  'JA Solar',
  'Solarstock',
  'TW solar',
  'YOUYO',
  'Daran',
  'NEOZL'
];

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onSelectProduct,
  onOpenQuote,
  onToggleCompare,
  compareList,
  initialCategory,
  initialBrand
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  );
  const [selectedBrands, setSelectedBrands] = useState<string[]>(
    initialBrand ? [initialBrand] : []
  );
  const [sortBy, setSortBy] = useState<'default' | 'title' | 'brand' | 'category'>('default');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [powerScaleFilter, setPowerScaleFilter] = useState<'all' | 'compact' | 'medium' | 'high'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
    setCurrentPage(1);
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSortBy('default');
    setPowerScaleFilter('all');
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const element = document.getElementById('catalog-results-top');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 160, behavior: 'smooth' });
    }
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(prod => {
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = prod.title.toLowerCase().includes(q);
        const matchesModel = prod.model.toLowerCase().includes(q);
        const matchesBrand = prod.brand.toLowerCase().includes(q);
        const matchesCategory = prod.category.toLowerCase().includes(q);
        if (!matchesTitle && !matchesModel && !matchesBrand && !matchesCategory) {
          return false;
        }
      }

      // Category filter (multi-select)
      if (selectedCategories.length > 0) {
        const matchesCat = selectedCategories.includes(prod.category) ||
          (selectedCategories.includes('Material Handling Equipment (MHE)') &&
            ['Forklift', 'Pallet Truck', 'Stacker', 'Material Handling Equipment (MHE)'].includes(prod.category)) ||
          (selectedCategories.includes('Inverter') &&
            ['Hybrid Inverter', 'Off-Grid Inverter', 'On-Grid Inverter', 'Inverter'].includes(prod.category));
        
        if (!matchesCat) return false;
      }

      // Brand filter
      if (selectedBrands.length > 0) {
        if (!selectedBrands.includes(prod.brand)) {
          return false;
        }
      }

      // Power scale filter
      if (powerScaleFilter !== 'all') {
        const titleLower = prod.title.toLowerCase();
        const powerLower = (prod.powerRating || '').toLowerCase();
        const hasKW = powerLower.includes('kw') || titleLower.includes('kw');
        
        if (powerScaleFilter === 'compact') {
          // Under 1kW or PPS
          const isSmall = prod.category === 'Portable Power Station' || prod.category === 'LPS' || powerLower.includes('w') && !hasKW;
          if (!isSmall && !powerLower.includes('200w') && !powerLower.includes('300w') && !powerLower.includes('500w') && !powerLower.includes('620w') && !powerLower.includes('625w')) {
            return false;
          }
        } else if (powerScaleFilter === 'medium') {
          // 1kW to 10kW residential / light commercial
          const isMedium = titleLower.includes('3k') || titleLower.includes('4k') || titleLower.includes('5k') || titleLower.includes('6k') || titleLower.includes('8k') || titleLower.includes('10k') || titleLower.includes('1.5t') || titleLower.includes('1.2t');
          if (!isMedium) return false;
        } else if (powerScaleFilter === 'high') {
          // >10kW or heavy MHE
          const isHigh = titleLower.includes('12k') || titleLower.includes('20k') || titleLower.includes('orion') || titleLower.includes('3.8 ton') || titleLower.includes('3 ton');
          if (!isHigh) return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      if (sortBy === 'brand') {
        return a.brand.localeCompare(b.brand);
      }
      if (sortBy === 'category') {
        return a.category.localeCompare(b.category);
      }
      return a.itemNumber - b.itemNumber;
    });
  }, [searchQuery, selectedCategories, selectedBrands, sortBy, powerScaleFilter]);

  const totalItems = filteredProducts.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentItems = filteredProducts.slice(startIndex, endIndex);

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-14 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Title & Subtext */}
        <div className="border-b border-slate-200 pb-8 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 tracking-wider uppercase">
            <span>OFFICIAL PRODUCT REGISTRY</span>
            <span>·</span>
            <span>42 VERIFIED INDUSTRIAL MODELS</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-950 font-heading">
            Browse the SolarStock catalog.
          </h1>
          
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            Explore products by category and brand. Public products are available to everyone — with full engineering specifications, dimensional outlines, and direct regional warehouse dispatch quotes.
          </p>
        </div>

        {/* Filter & View Mode Controls Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar Filters */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-6 sticky top-24">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-950 font-heading">
                  <SlidersHorizontal className="w-4 h-4 text-emerald-600" />
                  <span>Catalog Filters</span>
                </div>

                {(selectedCategories.length > 0 || selectedBrands.length > 0 || searchQuery || powerScaleFilter !== 'all') && (
                  <button
                    onClick={handleResetFilters}
                    className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}
              </div>

              {/* Search Bar */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 block">
                  Search Model / Spec
                </label>
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    placeholder="e.g. 8kW, LiFePO4, EP F4..."
                    className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                  />
                </div>
              </div>

              {/* Power Capacity Quick Filter */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 block">
                  Power & Scale Class
                </label>
                <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                  <button
                    onClick={() => { setPowerScaleFilter('all'); setCurrentPage(1); }}
                    className={`py-1.5 px-2 rounded-lg font-medium border text-center transition-colors ${
                      powerScaleFilter === 'all' ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    All Ratings
                  </button>
                  <button
                    onClick={() => { setPowerScaleFilter('compact'); setCurrentPage(1); }}
                    className={`py-1.5 px-2 rounded-lg font-medium border text-center transition-colors ${
                      powerScaleFilter === 'compact' ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    &lt; 1 kW / Portable
                  </button>
                  <button
                    onClick={() => { setPowerScaleFilter('medium'); setCurrentPage(1); }}
                    className={`py-1.5 px-2 rounded-lg font-medium border text-center transition-colors ${
                      powerScaleFilter === 'medium' ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    1 kW - 10 kW Resi
                  </button>
                  <button
                    onClick={() => { setPowerScaleFilter('high'); setCurrentPage(1); }}
                    className={`py-1.5 px-2 rounded-lg font-medium border text-center transition-colors ${
                      powerScaleFilter === 'high' ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    &gt; 10 kW / C&amp;I Heavy
                  </button>
                </div>
              </div>

              {/* Category Filter Multi-Select */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-slate-700">
                    Categories ({ALL_CATEGORIES.length})
                  </label>
                  {selectedCategories.length > 0 && (
                    <button
                      onClick={() => setSelectedCategories([])}
                      className="text-[10px] text-slate-400 hover:text-slate-600"
                    >
                      Clear
                    </button>
                  )}
                </div>

                <div className="max-h-52 overflow-y-auto pr-1 space-y-1.5 text-xs text-slate-600">
                  {ALL_CATEGORIES.map((cat) => {
                    const isChecked = selectedCategories.includes(cat);
                    const count = PRODUCTS.filter(p => p.category === cat).length;
                    return (
                      <label
                        key={cat}
                        className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg cursor-pointer transition-colors ${
                          isChecked ? 'bg-emerald-50 text-emerald-950 font-semibold' : 'hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-2 overflow-hidden pr-2">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleCategory(cat)}
                            className="rounded border-slate-300 text-emerald-600 focus:ring-0 w-3.5 h-3.5"
                          />
                          <span className="truncate">{cat}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono shrink-0">
                          {count}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Brand Filter Multi-Select */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-slate-700">
                    Brands ({ALL_BRANDS.length})
                  </label>
                  {selectedBrands.length > 0 && (
                    <button
                      onClick={() => setSelectedBrands([])}
                      className="text-[10px] text-slate-400 hover:text-slate-600"
                    >
                      Clear
                    </button>
                  )}
                </div>

                <div className="space-y-1.5 text-xs text-slate-600">
                  {ALL_BRANDS.map((brand) => {
                    const isChecked = selectedBrands.includes(brand);
                    const count = PRODUCTS.filter(p => p.brand === brand).length;
                    return (
                      <label
                        key={brand}
                        className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg cursor-pointer transition-colors ${
                          isChecked ? 'bg-emerald-50 text-emerald-950 font-semibold' : 'hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleBrand(brand)}
                            className="rounded border-slate-300 text-emerald-600 focus:ring-0 w-3.5 h-3.5"
                          />
                          <span>{brand}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {count}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Sort By Selector */}
              <div className="pt-2 border-t border-slate-100 space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 block">
                  Sort Order
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                >
                  <option value="default">Default Catalog Order (1-42)</option>
                  <option value="title">Product Title (A-Z)</option>
                  <option value="brand">Brand Alphabetical</option>
                  <option value="category">Category Alphabetical</option>
                </select>
              </div>

            </div>
          </div>

          {/* Right Main Grid / Table Content */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Results bar + View Switcher */}
            <div id="catalog-results-top" className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white px-5 py-3.5 rounded-xl border border-slate-200/90 text-xs scroll-mt-24">
              <div className="text-slate-600">
                {totalItems > 0 ? (
                  <span>
                    Showing <strong className="text-slate-900 font-mono">{startIndex + 1}–{endIndex}</strong> of <strong className="text-slate-900 font-mono">{totalItems}</strong> products
                  </span>
                ) : (
                  <span>No matching products found</span>
                )}
                {selectedCategories.length > 0 && (
                  <span className="ml-2 text-emerald-700 font-medium">
                    (in {selectedCategories.join(', ')})
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded transition-colors ${
                      viewMode === 'grid' ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-500 hover:text-slate-900'
                    }`}
                    title="Card Grid View"
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setViewMode('table')}
                    className={`p-1.5 rounded transition-colors ${
                      viewMode === 'table' ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-500 hover:text-slate-900'
                    }`}
                    title="Engineering Table View"
                  >
                    <List className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="text-slate-500">
                  Page {currentPage} of {totalPages}
                </div>
              </div>
            </div>

            {/* Results Container with Silky Transition */}
            <div key={`${currentPage}-${viewMode}-${searchQuery}-${selectedCategories.join('-')}`} className="page-transition-enter space-y-6">

            {/* Empty State */}
            {currentItems.length === 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">
                  No products matched your active filters
                </h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Try clearing category selections or searching with a different model code (e.g. "Deye", "SAJ", "620W", "Pallet").
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}

            {/* 1. GRID VIEW: 3-Column Desktop Product Grid */}
            {viewMode === 'grid' && currentItems.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {currentItems.map((product) => {
                  const isCompared = compareList.some(p => p.id === product.id);
                  return (
                    <div
                      key={product.id}
                      onClick={() => onSelectProduct(product)}
                      className="group cursor-pointer bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                    >
                      <div className="p-4 bg-white border-b border-slate-100 flex items-center justify-center relative">
                        <ProductArtwork product={product} className="h-52" />
                        
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleCompare(product);
                          }}
                          className={`absolute top-3 right-3 px-2 py-1 rounded text-[11px] font-semibold border transition-colors ${
                            isCompared
                              ? 'bg-emerald-600 text-white border-emerald-600'
                              : 'bg-white/90 text-slate-600 border-slate-200 hover:text-slate-900'
                          }`}
                          title="Add to side-by-side comparison"
                        >
                          {isCompared ? '✓ Added' : '+ Compare'}
                        </button>
                      </div>

                      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                            <span className="text-emerald-700 font-semibold">{product.brand}</span>
                            <span aria-hidden="true">·</span>
                            <span className="truncate max-w-[120px]">{product.category}</span>
                            <span aria-hidden="true">·</span>
                            <span className="font-mono text-slate-400 text-[11px] truncate">#{product.itemNumber}</span>
                          </div>

                          <h3 className="text-sm font-bold text-slate-950 font-heading leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2">
                            {product.title}
                          </h3>

                          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                            {product.tagline}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                          <div>
                            <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Rating</span>
                            <span className="font-semibold text-slate-900 font-mono text-xs">
                              {product.powerRating || product.specs[0]?.value}
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Availability</span>
                            <span className="font-medium text-emerald-700 text-xs">
                              {product.leadTime.split('(')[0]}
                            </span>
                          </div>
                        </div>

                        <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                          <span className="text-xs font-semibold text-slate-900 group-hover:text-emerald-700 inline-flex items-center gap-1 transition-colors">
                            View Product
                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onOpenQuote(product);
                            }}
                            className="px-2.5 py-1 text-[11px] font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-md border border-slate-200 transition-colors"
                          >
                            RFQ
                          </button>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* 2. TABLE VIEW: Engineering Spec Registry Table */}
            {viewMode === 'table' && currentItems.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold uppercase text-[10px] tracking-wider">
                        <th className="py-3 px-4">Item & Model</th>
                        <th className="py-3 px-4">Brand</th>
                        <th className="py-3 px-4">Category</th>
                        <th className="py-3 px-4">Power / Capacity</th>
                        <th className="py-3 px-4">Warehouse Status</th>
                        <th className="py-3 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {currentItems.map((prod) => {
                        const isCompared = compareList.some(p => p.id === prod.id);
                        return (
                          <tr
                            key={prod.id}
                            onClick={() => onSelectProduct(prod)}
                            className="hover:bg-slate-50/80 cursor-pointer transition-colors"
                          >
                            <td className="py-3 px-4">
                              <div className="font-bold text-slate-900">{prod.model}</div>
                              <div className="text-[11px] text-slate-500 line-clamp-1 max-w-xs">{prod.title}</div>
                            </td>
                            <td className="py-3 px-4 font-semibold text-emerald-700">{prod.brand}</td>
                            <td className="py-3 px-4 text-slate-600">{prod.category}</td>
                            <td className="py-3 px-4 font-mono font-bold text-slate-900">
                              {prod.powerRating || prod.specs[0]?.value}
                            </td>
                            <td className="py-3 px-4 text-emerald-700 font-medium">
                              {prod.leadTime.split('(')[0]}
                            </td>
                            <td className="py-3 px-4 text-right space-x-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onToggleCompare(prod);
                                }}
                                className={`px-2 py-1 rounded text-[11px] font-semibold border ${
                                  isCompared ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900'
                                }`}
                              >
                                {isCompared ? '✓ Compare' : '+ Compare'}
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onOpenQuote(prod);
                                }}
                                className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded text-[11px]"
                              >
                                RFQ
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                <button
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  className="flex items-center gap-1 px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <div className="flex items-center gap-1.5">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-9 h-9 rounded-lg text-xs font-semibold font-mono transition-colors ${
                        currentPage === page
                          ? 'bg-slate-950 text-white'
                          : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  className="flex items-center gap-1 px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
