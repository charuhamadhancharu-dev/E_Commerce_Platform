import React, { useState, useMemo } from 'react';
import { 
  Heart, 
  ShoppingCart, 
  Star, 
  Grid, 
  List, 
  SlidersHorizontal, 
  RotateCcw, 
  ChevronDown,
  Check,
  Search,
  Sparkles
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const ListingScreen = () => {
  const { 
    productsList, 
    navigateTo, 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    activeCategory, 
    setActiveCategory,
    searchQuery,
    setSearchQuery 
  } = useShop();

  // Layout View mode: Grid vs List (FR-PLP-04)
  const [viewMode, setViewMode] = useState('grid');
  
  // Sort state (FR-PLP-03: Popularity, Price Low-High, Price High-Low, Newest, Rating)
  const [sortBy, setSortBy] = useState('popularity');
  
  // Filters state (FR-PLP-02)
  const [selectedCategories, setSelectedCategories] = useState(
    activeCategory && activeCategory !== 'all' ? [activeCategory] : []
  );
  const [priceMax, setPriceMax] = useState(1500);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);

  // Available brands & swatches
  const brands = ['Apple', 'Nike', 'Sony', 'Gucci', 'ShopNext', 'HomeLuxe'];
  const colorSwatches = [
    { name: 'Cyan', hex: '#06b6d4', bg: 'bg-cyan-500' },
    { name: 'Emerald', hex: '#10b981', bg: 'bg-emerald-500' },
    { name: 'Purple', hex: '#a855f7', bg: 'bg-purple-500' },
    { name: 'Indigo', hex: '#6366f1', bg: 'bg-indigo-500' },
    { name: 'Amber', hex: '#f59e0b', bg: 'bg-amber-500' },
    { name: 'Rose', hex: '#f43f5e', bg: 'bg-rose-500' },
    { name: 'Onyx', hex: '#0f172a', bg: 'bg-slate-900' },
  ];

  const categoryOptions = [
    { name: 'Electronics', count: 120 },
    { name: 'Fashion', count: 98 },
    { name: 'Home & Living', count: 76 },
    { name: 'Sports', count: 64 },
    { name: 'Beauty', count: 52 },
    { name: 'Toys & Games', count: 45 }
  ];

  // Toggle category filter
  const handleCategoryToggle = (catName) => {
    setSelectedCategories(prev => {
      if (prev.includes(catName)) {
        return prev.filter(c => c !== catName);
      } else {
        return [...prev, catName];
      }
    });
  };

  // Toggle brand filter
  const handleBrandToggle = (brandName) => {
    setSelectedBrands(prev => {
      if (prev.includes(brandName)) {
        return prev.filter(b => b !== brandName);
      } else {
        return [...prev, brandName];
      }
    });
  };

  // Clear all filters (FR-PLP-08)
  const handleClearFilters = () => {
    setSelectedCategories([]);
    setPriceMax(1500);
    setSelectedBrands([]);
    setSelectedColor(null);
    setSearchQuery('');
    setActiveCategory('all');
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return productsList.filter(prod => {
      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(prod.category)) {
        return false;
      }
      // Brand filter
      if (selectedBrands.length > 0 && !selectedBrands.includes(prod.brand)) {
        return false;
      }
      // Price range
      if (prod.price > priceMax) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const match = prod.name.toLowerCase().includes(q) ||
                      prod.category.toLowerCase().includes(q) ||
                      prod.brand.toLowerCase().includes(q) ||
                      (prod.subtitle && prod.subtitle.toLowerCase().includes(q));
        if (!match) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'reviews') return b.reviewsCount - a.reviewsCount;
      // Default: Popularity
      return (b.reviewsCount || 0) - (a.reviewsCount || 0);
    });
  }, [productsList, selectedCategories, selectedBrands, priceMax, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-[#090b14] text-slate-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Filters Sidebar + Catalog Display */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Filters Sidebar (FR-PLP-02) */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-[#0f1428]/80 border border-white/[0.08] rounded-2xl p-5 backdrop-blur-xl">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-purple-400" />
                  <h3 className="text-sm font-bold text-white tracking-wide">Filters</h3>
                </div>
                <button
                  onClick={handleClearFilters}
                  className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors"
                  title="Reset all filters"
                >
                  <RotateCcw className="w-3 h-3" /> Clear all
                </button>
              </div>

              {/* Category Filter */}
              <div className="py-4 border-b border-white/[0.08]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                  Category
                </h4>
                <div className="space-y-2">
                  {categoryOptions.map((cat) => {
                    const isChecked = selectedCategories.includes(cat.name);
                    return (
                      <label
                        key={cat.name}
                        className="flex items-center justify-between text-xs text-slate-300 hover:text-white cursor-pointer select-none group"
                      >
                        <div className="flex items-center gap-2.5">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleCategoryToggle(cat.name)}
                            className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-purple-600 focus:ring-purple-500/20 cursor-pointer accent-purple-600"
                          />
                          <span className={isChecked ? 'text-purple-300 font-semibold' : ''}>
                            {cat.name}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-500 font-mono">
                          ({cat.count})
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Price Range Slider (FR-PLP-02) */}
              <div className="py-4 border-b border-white/[0.08]">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Price Range
                  </h4>
                  <span className="text-xs font-bold text-purple-400">
                    $0 – ${priceMax}
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="1500"
                  step="50"
                  value={priceMax}
                  onChange={(e) => setPriceMax(Number(e.target.value))}
                  className="w-full accent-purple-600 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                />
                <button
                  onClick={() => {}}
                  className="w-full mt-3 py-1.5 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 text-xs font-semibold border border-purple-500/30 transition-all text-center"
                >
                  Apply
                </button>
              </div>

              {/* Color Swatches (FR-PLP-02) */}
              <div className="py-4 border-b border-white/[0.08]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                  Color
                </h4>
                <div className="flex items-center gap-2 flex-wrap">
                  {colorSwatches.map((color) => {
                    const isSelected = selectedColor === color.name;
                    return (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(isSelected ? null : color.name)}
                        className={`w-6 h-6 rounded-full ${color.bg} flex items-center justify-center transition-all ${
                          isSelected ? 'ring-2 ring-white scale-110' : 'hover:scale-105 opacity-80 hover:opacity-100'
                        }`}
                        title={color.name}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Brand Filter (FR-PLP-02) */}
              <div className="pt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                  Brand
                </h4>
                <div className="space-y-2">
                  {brands.map((brand) => {
                    const isChecked = selectedBrands.includes(brand);
                    return (
                      <label
                        key={brand}
                        className="flex items-center gap-2.5 text-xs text-slate-300 hover:text-white cursor-pointer select-none group"
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleBrandToggle(brand)}
                          className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-purple-600 focus:ring-purple-500/20 cursor-pointer accent-purple-600"
                        />
                        <span className={isChecked ? 'text-purple-300 font-semibold' : ''}>
                          {brand}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

            </div>
          </aside>

          {/* Main Content: Header Bar & Product Cards */}
          <main className="lg:col-span-3 space-y-6">
            
            {/* Top Toolbar (Result count, Sort dropdown, Grid/List toggle) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0f1428]/60 border border-white/[0.08] p-4 rounded-2xl backdrop-blur-xl">
              
              {/* Result Count (FR-PLP-01) */}
              <div className="text-xs text-slate-300 font-medium">
                Showing <span className="font-bold text-white">1-{filteredProducts.length}</span> of <span className="font-bold text-white">324 products</span>
              </div>

              {/* Controls: Sort Dropdown + Grid/List Toggle */}
              <div className="flex items-center gap-3">
                
                {/* Sort dropdown (FR-PLP-03) */}
                <div className="relative flex items-center">
                  <span className="text-xs text-slate-400 mr-2 hidden sm:inline">Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-[#151b33] border border-white/[0.1] text-xs text-slate-200 rounded-xl px-3 py-1.5 focus:outline-none focus:border-purple-500 cursor-pointer"
                  >
                    <option value="popularity">Popularity</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>

                {/* View Mode Toggle (FR-PLP-04) */}
                <div className="flex items-center p-0.5 rounded-xl bg-[#151b33] border border-white/[0.1]">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded-lg transition-all ${
                      viewMode === 'grid'
                        ? 'bg-purple-600 text-white shadow-glow-purple'
                        : 'text-slate-400 hover:text-white'
                    }`}
                    title="Grid View"
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 rounded-lg transition-all ${
                      viewMode === 'list'
                        ? 'bg-purple-600 text-white shadow-glow-purple'
                        : 'text-slate-400 hover:text-white'
                    }`}
                    title="List View"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>

            {/* Product Cards Container (FR-PLP-05, FR-PLP-10) */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-[#0f1428]/40 border border-white/[0.08] rounded-3xl p-8">
                <Sparkles className="w-10 h-10 text-purple-400 mx-auto mb-3 opacity-60" />
                <h3 className="text-base font-bold text-white">No products found</h3>
                <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                  Try clearing your filters or searching with a different term.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="mt-4 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-semibold text-white shadow-glow-purple transition-all"
                >
                  Clear Filters
                </button>
              </div>
            ) : viewMode === 'grid' ? (
              
              /* GRID VIEW */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredProducts.map((prod) => {
                  const inWishlist = isInWishlist(prod.id);
                  return (
                    <div
                      key={prod.id}
                      onClick={() => navigateTo('details', prod.id)}
                      className="group relative bg-[#11172f]/80 rounded-2xl border border-white/[0.08] hover:border-purple-500/40 p-4 transition-all hover:shadow-glow-purple cursor-pointer flex flex-col justify-between"
                    >
                      {/* Top Badges & Wishlist Heart */}
                      <div className="flex items-center justify-between mb-2">
                        {prod.discountBadge ? (
                          <span className="px-2 py-0.5 rounded-md bg-purple-600/90 text-[10px] font-bold text-white shadow">
                            {prod.discountBadge}
                          </span>
                        ) : (
                          <span />
                        )}

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleWishlist(prod.id);
                          }}
                          className={`p-2 rounded-full backdrop-blur-md transition-all ${
                            inWishlist
                              ? 'bg-purple-600 text-white shadow-glow-purple'
                              : 'bg-black/40 text-slate-400 hover:text-white hover:bg-black/60'
                          }`}
                          title="Wishlist"
                        >
                          <Heart className={`w-4 h-4 ${inWishlist ? 'fill-white' : ''}`} />
                        </button>
                      </div>

                      {/* Product Thumbnail */}
                      <div className="w-full aspect-square rounded-xl bg-[#090c1a] flex items-center justify-center p-3 mb-3 relative overflow-hidden">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Product Info */}
                      <div>
                        <h3 className="text-sm font-semibold text-white group-hover:text-purple-300 line-clamp-1 transition-colors">
                          {prod.name}
                        </h3>
                        <p className="text-[11px] text-slate-400 mb-2">
                          {prod.subtitle || prod.category}
                        </p>

                        <div className="flex items-center gap-1 text-amber-400 text-xs mb-3">
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          <span className="font-bold">{prod.rating}</span>
                          <span className="text-slate-400 text-[11px]">
                            ({prod.reviewsCount > 1000 ? `${(prod.reviewsCount/1000).toFixed(0)}k` : prod.reviewsCount})
                          </span>
                        </div>

                        {/* Price & Add to Cart Button */}
                        <div className="flex items-center justify-between pt-2 border-t border-white/[0.04]">
                          <div>
                            <span className="text-base font-extrabold text-white">
                              ${prod.price}
                            </span>
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
                            className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-semibold text-white shadow-glow-purple flex items-center gap-1.5 transition-all group-hover:scale-102"
                          >
                            <ShoppingCart className="w-3.5 h-3.5" />
                            <span>Add to Cart</span>
                          </button>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>

            ) : (

              /* LIST VIEW */
              <div className="space-y-4">
                {filteredProducts.map((prod) => {
                  const inWishlist = isInWishlist(prod.id);
                  return (
                    <div
                      key={prod.id}
                      onClick={() => navigateTo('details', prod.id)}
                      className="group bg-[#11172f]/80 rounded-2xl border border-white/[0.08] hover:border-purple-500/40 p-4 transition-all hover:shadow-glow-purple cursor-pointer flex flex-col sm:flex-row items-center gap-5"
                    >
                      <div className="w-28 h-28 flex-shrink-0 rounded-xl bg-[#090c1a] p-2 flex items-center justify-center">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          {prod.discountBadge && (
                            <span className="px-2 py-0.5 rounded-md bg-purple-600/90 text-[10px] font-bold text-white">
                              {prod.discountBadge}
                            </span>
                          )}
                          <span className="text-xs text-purple-400 font-semibold">{prod.brand}</span>
                        </div>
                        <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                          {prod.name}
                        </h3>
                        <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                          {prod.description}
                        </p>
                        <div className="flex items-center gap-1 text-amber-400 text-xs mt-2">
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          <span className="font-bold">{prod.rating}</span>
                          <span className="text-slate-400 text-[11px]">({prod.reviewsCount} reviews)</span>
                        </div>
                      </div>

                      <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-3 border-t sm:border-t-0 pt-3 sm:pt-0 border-white/[0.08]">
                        <div className="text-right">
                          <div className="text-lg font-extrabold text-white">${prod.price}</div>
                          {prod.originalPrice && (
                            <div className="text-xs text-slate-500 line-through">${prod.originalPrice}</div>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleWishlist(prod.id);
                            }}
                            className={`p-2 rounded-xl transition-all ${
                              inWishlist ? 'bg-purple-600 text-white' : 'bg-white/[0.06] text-slate-400 hover:text-white'
                            }`}
                          >
                            <Heart className={`w-4 h-4 ${inWishlist ? 'fill-white' : ''}`} />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              addToCart(prod, 1);
                            }}
                            className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-semibold text-white shadow-glow-purple flex items-center gap-1.5"
                          >
                            <ShoppingCart className="w-3.5 h-3.5" />
                            <span>Add</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            )}

            {/* Pagination (FR-PLP-06) */}
            <div className="flex items-center justify-between pt-6 border-t border-white/[0.08]">
              <span className="text-xs text-slate-400">
                Page 1 of 3
              </span>
              <div className="flex items-center gap-1">
                <button className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-xs font-semibold text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors">
                  Previous
                </button>
                <button className="px-3 py-1.5 rounded-lg bg-purple-600 text-xs font-semibold text-white shadow-glow-purple">
                  1
                </button>
                <button className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/[0.08] transition-colors">
                  2
                </button>
                <button className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/[0.08] transition-colors">
                  3
                </button>
                <button className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/[0.08] transition-colors">
                  Next
                </button>
              </div>
            </div>

          </main>
        </div>

      </div>
    </div>
  );
};
