import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { AuthModal } from './components/AuthModal';
import { DatasheetModal } from './components/DatasheetModal';
import { SystemConfiguratorModal } from './components/SystemConfiguratorModal';
import { CompareDrawer } from './components/CompareDrawer';
import { PartnerDashboardModal } from './components/PartnerDashboardModal';
import { VisualDiagramModal, GraphicType } from './components/VisualDiagramModal';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { LiveChatWidget } from './components/LiveChatWidget';

import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutPage } from './pages/AboutPage';
import { BrandsPage } from './pages/BrandsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { NewsPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';

import { PRODUCTS } from './data/products';
import { Product } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filterCategory, setFilterCategory] = useState<string | undefined>(undefined);
  const [filterBrand, setFilterBrand] = useState<string | undefined>(undefined);

  // Equipment comparison state
  const [compareList, setCompareList] = useState<Product[]>([]);

  // Modals state
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [targetQuoteProduct, setTargetQuoteProduct] = useState<Product | null>(null);

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [partnerDashboardOpen, setPartnerDashboardOpen] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const [datasheetModalOpen, setDatasheetModalOpen] = useState(false);
  const [datasheetProduct, setDatasheetProduct] = useState<Product | null>(null);

  const [sizingModalOpen, setSizingModalOpen] = useState(false);
  const [diagramModalOpen, setDiagramModalOpen] = useState(false);
  const [targetGraphic, setTargetGraphic] = useState<GraphicType>('utility-scale');

  const handleOpenDiagram = (graphic?: GraphicType) => {
    if (graphic) setTargetGraphic(graphic);
    setDiagramModalOpen(true);
  };

  // Scroll to top on page navigation
  const navigateTo = (
    page: string,
    params?: { category?: string; brand?: string; productId?: string }
  ) => {
    if (params?.productId) {
      const found = PRODUCTS.find(p => p.id === params.productId);
      if (found) {
        setSelectedProduct(found);
        setCurrentPage('product-detail');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
    }

    if (params?.brand) {
      setFilterBrand(params.brand);
      setFilterCategory(undefined);
    } else if (params?.category) {
      setFilterCategory(params.category);
      setFilterBrand(undefined);
    } else {
      setFilterBrand(undefined);
      setFilterCategory(undefined);
    }

    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (product?: Product) => {
    setTargetQuoteProduct(product || selectedProduct || null);
    setQuoteModalOpen(true);
  };

  const handleOpenDatasheet = (product: Product) => {
    setDatasheetProduct(product);
    setDatasheetModalOpen(true);
  };

  const handleLoginSuccess = (email: string) => {
    setUserEmail(email);
    setPartnerDashboardOpen(true);
  };

  const handleToggleCompare = (product: Product) => {
    setCompareList(prev => {
      const exists = prev.some(p => p.id === product.id);
      if (exists) {
        return prev.filter(p => p.id !== product.id);
      }
      if (prev.length >= 4) {
        alert('You can compare up to 4 models simultaneously.');
        return prev;
      }
      return [...prev, product];
    });
  };

  const handleRemoveCompare = (productId: string) => {
    setCompareList(prev => prev.filter(p => p.id !== productId));
  };

  const handleClearCompare = () => {
    setCompareList([]);
  };

  const handleOpenQuoteWithBOM = (bomNotes: string) => {
    setSizingModalOpen(false);
    setTargetQuoteProduct(null);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-500 selection:text-white relative">
      
      {/* Sleek Top Reading Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Sticky Top Navigation */}
      <Navbar
        activePage={currentPage}
        onNavigate={navigateTo}
        onOpenQuote={() => handleOpenQuote()}
        onOpenAuth={() => {
          if (userEmail) {
            setPartnerDashboardOpen(true);
          } else {
            setAuthModalOpen(true);
          }
        }}
        onOpenSizing={() => setSizingModalOpen(true)}
        compareCount={compareList.length}
        userEmail={userEmail}
      />

      {/* Main Page Body with Silky Page Transition */}
      <main className="flex-1 pb-16">
        <div key={currentPage} className="page-transition-enter">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenQuote={handleOpenQuote}
            onSelectProduct={handleSelectProduct}
            onOpenSizing={() => setSizingModalOpen(true)}
            onToggleCompare={handleToggleCompare}
            compareList={compareList}
            onOpenDiagram={handleOpenDiagram}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            onSelectProduct={handleSelectProduct}
            onOpenQuote={handleOpenQuote}
            onToggleCompare={handleToggleCompare}
            compareList={compareList}
            initialCategory={filterCategory}
            initialBrand={filterBrand}
          />
        )}

        {currentPage === 'product-detail' && selectedProduct && (
          <ProductDetailPage
            product={selectedProduct}
            onBack={() => navigateTo('products')}
            onSelectProduct={handleSelectProduct}
            onOpenQuote={handleOpenQuote}
            onOpenDatasheet={handleOpenDatasheet}
            onToggleCompare={handleToggleCompare}
            isCompared={compareList.some(p => p.id === selectedProduct.id)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenQuote={() => handleOpenQuote()}
            onOpenDiagram={handleOpenDiagram}
          />
        )}

        {currentPage === 'brands' && (
          <BrandsPage
            onNavigateToProducts={(brand) => navigateTo('products', { brand })}
            onOpenQuote={() => handleOpenQuote()}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            onOpenQuote={() => handleOpenQuote()}
            onNavigateToCatalog={() => navigateTo('products')}
            onOpenDiagram={handleOpenDiagram}
          />
        )}

        {currentPage === 'news' && (
          <NewsPage />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
        </div>
      </main>

      {/* Industrial Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Smooth Scroll To Top Floating Indicator */}
      <ScrollToTop />

      {/* Demo Live Engineering Support Chat Floating Widget */}
      <LiveChatWidget
        onOpenQuote={() => handleOpenQuote()}
        onOpenSizing={() => setSizingModalOpen(true)}
        onNavigateToProducts={() => navigateTo('products')}
      />

      {/* Side-by-Side Equipment Comparison Floating Dock */}
      <CompareDrawer
        compareList={compareList}
        onRemove={handleRemoveCompare}
        onClear={handleClearCompare}
        onSelectProduct={handleSelectProduct}
        onOpenQuote={handleOpenQuote}
      />

      {/* Request For Quotation (RFQ) Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        product={targetQuoteProduct}
      />

      {/* B2B Partner Authentication Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Authenticated B2B Partner Portal Dashboard */}
      <PartnerDashboardModal
        isOpen={partnerDashboardOpen}
        onClose={() => setPartnerDashboardOpen(false)}
        userEmail={userEmail}
        onLogout={() => setUserEmail(null)}
        onOpenQuote={() => handleOpenQuote()}
        onOpenSizing={() => setSizingModalOpen(true)}
      />

      {/* Technical Engineering Datasheet Modal */}
      <DatasheetModal
        isOpen={datasheetModalOpen}
        onClose={() => setDatasheetModalOpen(false)}
        product={datasheetProduct}
      />

      {/* System Sizing & BOM Configurator Modal */}
      <SystemConfiguratorModal
        isOpen={sizingModalOpen}
        onClose={() => setSizingModalOpen(false)}
        onOpenQuoteWithBOM={handleOpenQuoteWithBOM}
        onSelectProduct={handleSelectProduct}
      />

      {/* High-Resolution Engineering Architecture & Diagram Studio Modal */}
      <VisualDiagramModal
        isOpen={diagramModalOpen}
        onClose={() => setDiagramModalOpen(false)}
        initialGraphic={targetGraphic}
      />

    </div>
  );
}
