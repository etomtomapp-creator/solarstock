import React, { useState } from 'react';
import { ARTICLES } from '../data/articles';
import { Article } from '../types';
import { ArrowRight, Calendar, User, X, BookOpen, Clock, Tag, Share2, Layers } from 'lucide-react';
import {
  BESSContainerGraphic,
  CommercialRooftopGraphic,
  AgriculturalPumpingGraphic,
  HeroInfrastructureGraphic,
  SolarCellCutawayGraphic,
  RegionalLogisticsMapGraphic
} from '../components/GraphicsGallery';

export const NewsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const categories = ['All', 'Technical Whitepapers', 'Field Updates', 'Market Analysis'];

  const filteredArticles = selectedCategory === 'All'
    ? ARTICLES
    : ARTICLES.filter(a => a.category === selectedCategory);

  const renderArticleGraphic = (index: number, className: string = 'h-48 w-full') => {
    switch (index % 6) {
      case 0:
        return <BESSContainerGraphic className={className} />;
      case 1:
        return <CommercialRooftopGraphic className={className} />;
      case 2:
        return <AgriculturalPumpingGraphic className={className} />;
      case 3:
        return <HeroInfrastructureGraphic className={className} />;
      case 4:
        return <SolarCellCutawayGraphic className={className} />;
      case 5:
      default:
        return <RegionalLogisticsMapGraphic className={className} />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="border-b border-slate-200 pb-8 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            TECHNICAL INTELLIGENCE &amp; FIELD PAPERS
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-950 font-heading">
            News, Research Notes &amp; Deployment Case Studies
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            Direct observations and technical advisories from SolarStock engineers working across microgrids, commercial rooftop installations, and utility balance-of-system projects.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-slate-950 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, idx) => (
            <div
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="group cursor-pointer bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              {/* Graphical Header for Each Article */}
              <div className="h-48 bg-slate-950 relative overflow-hidden">
                {renderArticleGraphic(idx)}
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

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-emerald-700 group-hover:underline inline-flex items-center gap-1">
                    Read full report
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="text-[11px] text-slate-400 truncate max-w-[120px]">
                    {article.author.split(',')[0]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div 
            className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Graphic */}
            <div className="relative bg-slate-950 h-52">
              {renderArticleGraphic(ARTICLES.findIndex(a => a.id === activeArticle.id), 'h-52 w-full')}
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/70 hover:bg-slate-900 text-white backdrop-blur transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-3 left-6">
                <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-mono font-bold">
                  {activeArticle.category}
                </span>
              </div>
            </div>

            <div className="p-8 space-y-6 max-h-[65vh] overflow-y-auto">
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {activeArticle.date}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {activeArticle.readTime}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    {activeArticle.author}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-slate-950 font-heading leading-tight">
                  {activeArticle.title}
                </h2>
              </div>

              <div className="text-sm text-slate-700 leading-relaxed space-y-4 border-t border-slate-100 pt-6">
                <p className="font-medium text-slate-900">
                  {activeArticle.excerpt}
                </p>
                <div className="whitespace-pre-line space-y-4">
                  {activeArticle.content}
                </div>
              </div>

              {activeArticle.tags && (
                <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-2">
                  {activeArticle.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs rounded-lg font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>SolarStock Technical Publication</span>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
