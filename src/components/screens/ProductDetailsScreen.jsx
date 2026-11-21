import React, { useState } from 'react';
import { 
  Heart, 
  ShoppingCart, 
  Zap, 
  Star, 
  Truck, 
  ShieldCheck, 
  RefreshCw, 
  ChevronRight, 
  Plus, 
  Minus, 
  Check, 
  Share2, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const ProductDetailsScreen = () => {
  const { 
    selectedProductId, 
    productsList, 
    navigateTo, 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    addToast 
  } = useShop();

  const product = productsList.find(p => p.id === selectedProductId) || productsList[0];
  
  // Gallery state
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(
    product.colors && product.colors[0] ? product.colors[0].name : 'Midnight Black'
  );
  
  // Tabs: 'description' | 'reviews' | 'specifications'
  const [activeTab, setActiveTab] = useState('description');
  
  // Review submission state
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewText, setNewReviewText] = useState('');

  const inWishlist = isInWishlist(product.id);

  // Auto calculate discount percentage per FR-PDP-04
  const calculatedDiscount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedColor);
    navigateTo('checkout');
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!newReviewText.trim()) return;
    addToast('success', 'Review Submitted', 'Thank you! Your verified review has been submitted for moderation.');
    setShowReviewModal(false);
    setNewReviewText('');
  };

  return (
    <div className="min-h-screen bg-[#090b14] text-slate-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Trail (FR-PDP-01) */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8 overflow-x-auto whitespace-nowrap">
          <button onClick={() => navigateTo('landing')} className="hover:text-purple-400 transition-colors">
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <button onClick={() => navigateTo('listing', null, product.category)} className="hover:text-purple-400 transition-colors">
            {product.category}
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-slate-300 font-medium">
            {product.subcategory || product.name}
          </span>
        </nav>

        {/* Top Product Hero Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Media Column: Vertical Thumbnails + Big Center Image with Neon Aura (FR-PDP-02) */}
          <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
            
            {/* Vertical Thumbnails */}
            <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible">
              {(product.thumbnails || [product.image]).map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-18 h-18 sm:w-20 sm:h-20 rounded-2xl p-2 bg-[#10152a] border transition-all cursor-pointer flex-shrink-0 flex items-center justify-center ${
                    activeImageIndex === idx
                      ? 'border-purple-500 shadow-glow-purple ring-2 ring-purple-500/30'
                      : 'border-white/[0.08] hover:border-white/[0.2] opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={imgUrl} alt="Thumbnail" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>

            {/* Main Stage Image with Concentric Purple Glow Ring */}
            <div className="relative flex-1 aspect-square sm:aspect-auto sm:h-[480px] rounded-3xl bg-[#0b0e1e] border border-white/[0.08] flex items-center justify-center p-8 overflow-hidden glow-ring-purple">
              {/* Glowing Purple Ring in Center */}
              <div className="absolute w-72 h-72 rounded-full border-2 border-purple-500/50 shadow-[0_0_80px_rgba(168,85,247,0.4)] pointer-events-none animate-pulse-glow" />
              <div className="absolute w-84 h-84 rounded-full border border-cyan-500/20 pointer-events-none" />
              
              {/* Product Main Image */}
              <img
                src={(product.thumbnails && product.thumbnails[activeImageIndex]) || product.image}
                alt={product.name}
                className="relative z-10 max-h-full max-w-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform duration-500"
              />

              {/* Wishlist button */}
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`absolute top-5 right-5 z-20 p-3 rounded-full backdrop-blur-xl border transition-all ${
                  inWishlist
                    ? 'bg-purple-600 border-purple-400 text-white shadow-glow-purple'
                    : 'bg-black/50 border-white/10 text-slate-300 hover:text-white hover:bg-black/80'
                }`}
                title="Save to Wishlist"
              >
                <Heart className={`w-5 h-5 ${inWishlist ? 'fill-white' : ''}`} />
              </button>
            </div>

          </div>

          {/* Right Product Details Info Column (FR-PDP-03 to FR-PDP-07) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Title & Brand */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                {product.brand}
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 leading-tight">
                {product.name}
              </h1>
            </div>

            {/* Rating Stars & Count */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-amber-400 text-sm">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-white">{product.rating}</span>
              <span className="text-xs text-slate-400">
                ({product.reviewsCount?.toLocaleString()} reviews)
              </span>
            </div>

            {/* Pricing & Calculated Discount Badge (FR-PDP-03, FR-PDP-04) */}
            <div className="flex items-baseline gap-3 p-4 rounded-2xl bg-[#11172f]/80 border border-white/[0.08]">
              <span className="text-3xl font-black text-white">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-base text-slate-400 line-through">
                  ${product.originalPrice}
                </span>
              )}
              {calculatedDiscount > 0 && (
                <span className="px-2.5 py-0.5 rounded-lg bg-purple-600 text-xs font-bold text-white shadow-glow-purple">
                  {calculatedDiscount}% OFF
                </span>
              )}
            </div>

            {/* Product Summary */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {product.description}
            </p>

            {/* Color Variant Selector (FR-PDP-05) */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2.5">
                  Color: <span className="text-purple-400 normal-case font-normal ml-1">{selectedColor}</span>
                </label>
                <div className="flex items-center gap-3">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`px-3 py-1.5 rounded-xl border text-xs font-medium flex items-center gap-2 transition-all ${
                        selectedColor === c.name
                          ? 'border-purple-500 bg-purple-600/20 text-white shadow-glow-purple'
                          : 'border-white/[0.1] bg-[#12172a] text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <span className={`w-3.5 h-3.5 rounded-full ${c.bg} border border-white/20`} />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Stepper & Add to Cart + Buy Now Actions (FR-PDP-06) */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                {/* Quantity Stepper */}
                <div className="flex items-center bg-[#12172a] border border-white/[0.12] rounded-2xl p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-slate-400 hover:text-white transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 text-sm font-bold text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-slate-400 hover:text-white transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCart(product, quantity, selectedColor)}
                  className="btn-neon-purple flex-1 py-3 px-6 rounded-2xl text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
              </div>

              {/* Buy Now Button (Bypasses cart directly to checkout FR-PDP-06) */}
              <button
                onClick={handleBuyNow}
                className="btn-neon-cyan w-full py-3.5 px-6 rounded-2xl text-white text-sm font-extrabold flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Zap className="w-4 h-4 fill-white" />
                <span>Buy Now</span>
              </button>
            </div>

            {/* Service Highlights (FR-PDP-07) */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/[0.08] text-center">
              <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-white/[0.02]">
                <Truck className="w-4 h-4 text-purple-400" />
                <span className="text-[11px] font-semibold text-slate-200">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-white/[0.02]">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span className="text-[11px] font-semibold text-slate-200">2 Year Warranty</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-white/[0.02]">
                <RefreshCw className="w-4 h-4 text-indigo-400" />
                <span className="text-[11px] font-semibold text-slate-200">Easy Returns</span>
              </div>
            </div>

          </div>
        </div>

        {/* Tabbed Info: Description, Reviews, Specifications (FR-PDP-08) */}
        <div className="bg-[#0f1428]/80 border border-white/[0.08] rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
          
          {/* Tab Headers */}
          <div className="flex items-center gap-2 sm:gap-6 border-b border-white/[0.08] pb-4 mb-6 overflow-x-auto">
            <button
              onClick={() => setActiveTab('description')}
              className={`text-sm font-bold pb-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'description'
                  ? 'border-purple-500 text-purple-400'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`text-sm font-bold pb-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'reviews'
                  ? 'border-purple-500 text-purple-400'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              Reviews ({product.reviewsCount ? `${(product.reviewsCount/1000).toFixed(0)}k` : '12k'})
            </button>
            <button
              onClick={() => setActiveTab('specifications')}
              className={`text-sm font-bold pb-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'specifications'
                  ? 'border-purple-500 text-purple-400'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              Specifications
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'description' && (
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <p>{product.description}</p>
              <p>
                Engineered with high-tensile lightweight carbon materials, whisper-quiet tactile controls, and next-generation sound dampening chambers. Whether you are coding through the night or commuting across cities, immerse yourself without distraction.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                  <h4 className="text-xs font-bold text-white mb-1">Lossless Wireless Audio</h4>
                  <p className="text-xs text-slate-400">LDAC codec support transmits 3x more data than standard Bluetooth for pure studio clarity.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                  <h4 className="text-xs font-bold text-white mb-1">All-Day Cyber Battery</h4>
                  <p className="text-xs text-slate-400">30 hours of continuous playback with fast USB-C charge giving 3 hours in only 3 minutes.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white">Customer Reviews</h3>
                  <p className="text-xs text-slate-400">4.8 out of 5 stars based on verified purchases</p>
                </div>
                <button
                  onClick={() => setShowReviewModal(true)}
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-bold text-white shadow-glow-purple transition-all"
                >
                  Write a Review
                </button>
              </div>

              {/* Review Cards (FR-COMP Review Card) */}
              <div className="space-y-4">
                {(product.reviews || [
                  {
                    id: 'rev-default',
                    author: 'Alex Morgan',
                    rating: 5,
                    date: 'Nov 18, 2026',
                    verified: true,
                    comment: 'Stunning audio depth, unbelievable noise cancellation, and looks like it is from the year 2040.',
                    helpful: 180
                  }
                ]).map((rev) => (
                  <div key={rev.id} className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white">{rev.author}</span>
                        {rev.verified && (
                          <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-semibold">
                            Verified Buyer
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-slate-500">{rev.date}</span>
                    </div>
                    <div className="flex items-center gap-1 text-amber-400 text-xs mb-2">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">{rev.comment}</p>
                    <span className="text-[11px] text-slate-500">
                      {rev.helpful} customers found this helpful
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'specifications' && (
            <div className="divide-y divide-white/[0.06] text-xs">
              {(product.specifications || [
                { label: 'Manufacturer', value: product.brand },
                { label: 'Category', value: product.category },
                { label: 'Warranty', value: '2 Year Worldwide Limited Warranty' }
              ]).map((spec, i) => (
                <div key={i} className="py-3 flex justify-between">
                  <span className="text-slate-400 font-medium">{spec.label}</span>
                  <span className="text-slate-200 font-semibold text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>

      {/* Review Submission Modal (FR-PDP-09) */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-md bg-[#10152c] border border-purple-500/30 rounded-3xl p-6 shadow-2xl">
            <h3 className="text-base font-bold text-white mb-2">Write Product Review</h3>
            <p className="text-xs text-slate-400 mb-4">Share your honest experience with the community.</p>

            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <label className="text-xs text-slate-300 block mb-1">Rating</label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setNewReviewRating(star)}
                      className="p-1"
                    >
                      <Star
                        className={`w-5 h-5 ${
                          star <= newReviewRating ? 'fill-amber-400 text-amber-400' : 'text-slate-600'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-300 block mb-1">Your Review</label>
                <textarea
                  rows={4}
                  value={newReviewText}
                  onChange={(e) => setNewReviewText(e.target.value)}
                  placeholder="What did you like or dislike about this product?"
                  className="w-full bg-[#161c36] border border-white/[0.1] rounded-xl p-3 text-xs text-white placeholder-slate-500 outline-none focus:border-purple-500"
                  required
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowReviewModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-bold text-white shadow-glow-purple"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
