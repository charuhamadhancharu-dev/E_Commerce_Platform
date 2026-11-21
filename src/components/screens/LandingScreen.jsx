import React from 'react';
import { 
  ArrowRight, 
  Play, 
  Truck, 
  RefreshCw, 
  ShieldCheck, 
  Sparkles, 
  Headphones, 
  Footprints, 
  Armchair, 
  Smile, 
  Dumbbell, 
  Gamepad2,
  ChevronRight,
  TrendingUp,
  Star
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const LandingScreen = () => {
  const { navigateTo, setIsVideoModalOpen, categories, productsList, addToCart } = useShop();

  // Category Icon Resolver
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'electronics': return Headphones;
      case 'fashion': return Footprints;
      case 'home-living': return Armchair;
      case 'beauty': return Smile;
      case 'sports': return Dumbbell;
      case 'toys-games': return Gamepad2;
      default: return Sparkles;
    }
  };

  const featured = productsList.filter(p => p.featured).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#090b14] text-slate-100 pb-16">
      
      {/* Hero Section (FR-LAND-02, FR-LAND-03) */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 border-b border-white/[0.06]">
        {/* Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[700px] h-32 bg-purple-700/15 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Text Copy */}
            <div className="lg:col-span-6 space-y-6 z-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>Next-Gen Audio & Cyber Wear</span>
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-purple-200/90">
                  Elevate Your Style
                </h2>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
                  <span className="bg-gradient-to-r from-white via-slate-100 to-purple-400 bg-clip-text text-transparent drop-shadow-sm">
                    Shop the
                  </span>{' '}
                  <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                    Future
                  </span>
                </h1>
              </div>

              <p className="text-base sm:text-lg text-slate-300/80 font-normal max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Discover premium products with unbeatable deals. Seamlessly crafted audio, minimalist tech, and luxury street essentials designed for tomorrow.
              </p>

              {/* Call-to-Actions (FR-LAND-02) */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => navigateTo('listing')}
                  className="btn-neon-purple px-7 py-3.5 rounded-full text-white text-sm font-bold flex items-center gap-2.5 cursor-pointer group"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="px-6 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] text-slate-200 text-sm font-semibold flex items-center gap-2.5 transition-all backdrop-blur-md cursor-pointer group"
                >
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-300 group-hover:bg-purple-500/30 transition-colors">
                    <Play className="w-3.5 h-3.5 fill-purple-300 ml-0.5" />
                  </div>
                  <span>Watch Video</span>
                </button>
              </div>

              {/* Quick stats banner */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/[0.06] text-center lg:text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">50k+</div>
                  <div className="text-[11px] text-slate-400">Happy Cyber Shoppers</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-purple-400">99.8%</div>
                  <div className="text-[11px] text-slate-400">Positive Feedback</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-cyan-400">24/7</div>
                  <div className="text-[11px] text-slate-400">AI Concierge Support</div>
                </div>
              </div>
            </div>

            {/* Right Hero Visual: 3D Floating Cyber Earbuds with Neon Ambient Ring */}
            <div className="lg:col-span-6 flex items-center justify-center relative">
              <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
                
                {/* Concentric Neon Rings */}
                <div className="absolute inset-4 rounded-full border border-purple-500/30 animate-pulse-glow pointer-events-none" />
                <div className="absolute inset-16 rounded-full border border-cyan-400/20 pointer-events-none" />
                <div className="absolute inset-28 rounded-full bg-gradient-to-tr from-purple-900/40 via-indigo-900/20 to-transparent blur-2xl pointer-events-none" />
                
                {/* Glowing Base Platform Pedestal */}
                <div className="absolute bottom-10 w-3/4 h-8 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent blur-md rounded-full" />
                <div className="absolute bottom-8 w-2/3 h-3 bg-cyan-400/30 blur-sm rounded-full" />

                {/* Hero 3D Earbuds Render */}
                <div className="relative z-10 w-4/5 h-4/5 flex items-center justify-center animate-float">
                  <img
                    src="/assets/products/hero_earbuds.png"
                    alt="Futuristic Wireless Earbuds"
                    className="w-full h-full object-contain filter drop-shadow-[0_15px_35px_rgba(168,85,247,0.65)] hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Floating Interactive Product Badge */}
                <div 
                  onClick={() => navigateTo('details', 'cyberpods-pro-earbuds')}
                  className="absolute bottom-8 right-6 z-20 p-3 rounded-2xl bg-[#10152b]/85 border border-purple-500/30 backdrop-blur-xl shadow-xl flex items-center gap-3 cursor-pointer hover:border-purple-400 transition-all hover:scale-105"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-white">CyberPods Pro</div>
                    <div className="text-[10px] text-purple-300">$179 <span className="line-through text-slate-400 ml-1">$229</span></div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-purple-400 ml-1" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Value Proposition Strip (FR-LAND-04) */}
      <section className="py-8 bg-[#0b0e1b] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-[#10152a]/70 border border-white/[0.06] hover:border-purple-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 flex-shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Free Shipping</h3>
                <p className="text-xs text-slate-400">On orders over $50</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-[#10152a]/70 border border-white/[0.06] hover:border-purple-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
                <RefreshCw className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Easy Returns</h3>
                <p className="text-xs text-slate-400">30 days return</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-[#10152a]/70 border border-white/[0.06] hover:border-purple-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Secure Payment</h3>
                <p className="text-xs text-slate-400">100% secure</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Top Categories Section (FR-LAND-05, FR-LAND-06) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Top Categories
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Curated collections engineered for performance and aesthetics
            </p>
          </div>
          <button
            onClick={() => navigateTo('listing')}
            className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 group transition-colors"
          >
            <span>View all</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => {
            const IconComponent = getCategoryIcon(cat.id);
            return (
              <button
                key={cat.id}
                onClick={() => navigateTo('listing', null, cat.name)}
                className="group relative flex flex-col items-center text-center p-5 rounded-2xl bg-[#11172f]/70 hover:bg-[#151c3d] border border-white/[0.08] hover:border-purple-500/50 hover:shadow-glow-purple transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#161e3d] group-hover:bg-gradient-to-tr group-hover:from-purple-600/30 group-hover:to-cyan-500/30 flex items-center justify-center mb-3.5 border border-white/[0.06] group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-6 h-6 text-purple-300 group-hover:text-cyan-300 transition-colors" />
                </div>
                <span className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">
                  {cat.name}
                </span>
                <span className="text-[11px] text-slate-500 mt-0.5">
                  {cat.count} Items
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Featured Products Spotlight */}
      <section className="py-12 bg-[#0a0d1c] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2.5">
              <TrendingUp className="w-5 h-5 text-purple-400" />
              <h2 className="text-xl font-bold text-white">Trending Releases</h2>
            </div>
            <button
              onClick={() => navigateTo('listing')}
              className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1"
            >
              See all catalog <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((prod) => (
              <div
                key={prod.id}
                onClick={() => navigateTo('details', prod.id)}
                className="group relative bg-[#11172f]/80 rounded-2xl border border-white/[0.08] hover:border-purple-500/40 p-4 transition-all hover:shadow-glow-purple cursor-pointer flex flex-col justify-between"
              >
                {prod.discountBadge && (
                  <span className="absolute top-3 left-3 z-10 px-2 py-0.5 rounded-md bg-purple-600/90 text-[10px] font-bold text-white shadow">
                    {prod.discountBadge}
                  </span>
                )}

                <div className="w-full aspect-square rounded-xl bg-[#0b0e1b] flex items-center justify-center p-4 mb-4 relative overflow-hidden">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-1 text-amber-400 text-xs mb-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span className="font-bold">{prod.rating}</span>
                    <span className="text-slate-400 text-[11px]">({prod.reviewsCount})</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-purple-300 line-clamp-1 transition-colors">
                    {prod.name}
                  </h3>
                  <div className="mt-2 flex items-center justify-between">
                    <div>
                      <span className="text-base font-bold text-white">${prod.price}</span>
                      {prod.originalPrice && (
                        <span className="text-xs text-slate-500 line-through ml-2">
                          ${prod.originalPrice}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(prod, 1);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-xs font-semibold text-white shadow-glow-purple transition-all"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
