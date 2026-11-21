import React, { useState } from 'react';
import { 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  ShoppingBag, 
  Tag, 
  ArrowLeft, 
  Check, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const CartScreen = () => {
  const { 
    cart, 
    updateQuantity, 
    removeFromCart, 
    cartSubtotal, 
    shippingFee, 
    taxFee, 
    cartTotal, 
    discountAmount,
    appliedCoupon,
    applyCouponCode,
    removeCoupon,
    navigateTo,
    productsList,
    addToCart
  } = useShop();

  const [couponInput, setCouponInput] = useState('');

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponInput.trim()) {
      applyCouponCode(couponInput);
      setCouponInput('');
    }
  };

  // Recommendations ("You may also like" - FR-CART-06)
  const recommendations = productsList.filter(p => !cart.some(c => c.product.id === p.id)).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#090b14] text-slate-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title & Navigation */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigateTo('listing')}
              className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <h1 className="text-2xl font-extrabold text-white tracking-tight">
              Shopping Cart
            </h1>
          </div>
          <span className="text-xs font-semibold text-purple-400">
            {cart.reduce((a, b) => a + b.quantity, 0)} Items in Bag
          </span>
        </div>

        {cart.length === 0 ? (
          /* Empty Cart State */
          <div className="text-center py-20 bg-[#0f1428]/50 border border-white/[0.08] rounded-3xl p-8 max-w-lg mx-auto">
            <ShoppingBag className="w-16 h-16 text-purple-400 mx-auto mb-4 opacity-50" />
            <h2 className="text-xl font-bold text-white">Your cart is empty</h2>
            <p className="text-xs text-slate-400 mt-2 mb-6">
              Looks like you haven't added any futuristic upgrades yet.
            </p>
            <button
              onClick={() => navigateTo('listing')}
              className="btn-neon-purple px-6 py-3 rounded-full text-xs font-bold text-white shadow-glow-purple"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          /* Cart Grid: Items List + Order Summary Sidebar (FR-CART-01 to 05) */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            
            {/* Left: Cart Items List */}
            <div className="lg:col-span-8 space-y-4">
              {cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedColor}`}
                  className="p-4 sm:p-5 rounded-2xl bg-[#10152b]/80 border border-white/[0.08] hover:border-purple-500/30 transition-all flex flex-col sm:flex-row items-center gap-4 sm:gap-6 backdrop-blur-xl"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-[#090b16] p-2 flex items-center justify-center flex-shrink-0 border border-white/[0.04]">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Title & Info */}
                  <div className="flex-1 text-center sm:text-left min-w-0">
                    <h3 className="text-sm font-bold text-white hover:text-purple-300 transition-colors cursor-pointer truncate"
                      onClick={() => navigateTo('details', item.product.id)}
                    >
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {item.product.subtitle || item.product.brand} • <span className="text-purple-300">{item.selectedColor}</span>
                    </p>
                    <div className="text-sm font-extrabold text-white mt-2 sm:hidden">
                      ${item.product.price}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="hidden sm:block text-right">
                    <div className="text-base font-extrabold text-white">
                      ${item.product.price}
                    </div>
                    {item.product.originalPrice && (
                      <div className="text-xs text-slate-500 line-through">
                        ${item.product.originalPrice}
                      </div>
                    )}
                  </div>

                  {/* Quantity Stepper (FR-CART-01) */}
                  <div className="flex items-center bg-[#151b33] border border-white/[0.1] rounded-xl p-1">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.selectedColor, -1)}
                      className="p-1.5 text-slate-400 hover:text-white transition-colors"
                      title="Decrease"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-xs font-bold text-white">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.selectedColor, 1)}
                      className="p-1.5 text-slate-400 hover:text-white transition-colors"
                      title="Increase"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Remove Trash Button (FR-CART-01) */}
                  <button
                    onClick={() => removeFromCart(item.product.id, item.selectedColor)}
                    className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}

              {/* Coupon Code Input (FR-CART-09) */}
              <div className="p-4 rounded-2xl bg-[#10152b]/60 border border-white/[0.08]">
                {appliedCoupon ? (
                  <div className="flex items-center justify-between text-xs text-emerald-400">
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4" />
                      <span>Coupon <b>{appliedCoupon.code}</b> applied ({appliedCoupon.description})</span>
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="text-xs text-rose-400 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Have a promo code? (e.g. SHOP20)"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      className="flex-1 bg-[#141a33] border border-white/[0.1] rounded-xl px-4 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-purple-500"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-purple-600/30 hover:bg-purple-600/50 text-purple-300 border border-purple-500/30 text-xs font-semibold transition-all"
                    >
                      Apply Code
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right: Order Summary Sticky Card (FR-CART-03, FR-CART-04, FR-CART-05) */}
            <div className="lg:col-span-4">
              <div className="bg-[#10152b]/90 border border-white/[0.08] rounded-3xl p-6 shadow-2xl backdrop-blur-xl space-y-5">
                <h2 className="text-base font-extrabold text-white tracking-wide border-b border-white/[0.08] pb-4">
                  Order Summary
                </h2>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-white">${cartSubtotal.toFixed(2)}</span>
                  </div>

                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-400">
                      <span>Discount ({appliedCoupon?.code})</span>
                      <span className="font-semibold">-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-semibold text-white">
                      {shippingFee === 0 ? (
                        <span className="text-cyan-400 font-bold">$0 (Free)</span>
                      ) : (
                        `$${shippingFee.toFixed(2)}`
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Tax (8%)</span>
                    <span className="font-semibold text-white">${taxFee.toFixed(2)}</span>
                  </div>

                  <div className="pt-3 border-t border-white/[0.08] flex justify-between text-sm font-extrabold text-white">
                    <span>Total</span>
                    <span className="text-lg text-purple-300">${cartTotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Primary Proceed to Checkout Button (FR-CART-05) */}
                <button
                  onClick={() => navigateTo('checkout')}
                  className="btn-neon-purple w-full py-3.5 px-6 rounded-2xl text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-glow-purple"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Secondary Continue Shopping link (FR-CART-05) */}
                <div className="text-center pt-1">
                  <button
                    onClick={() => navigateTo('listing')}
                    className="text-xs font-semibold text-slate-400 hover:text-purple-400 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>

                {/* Trust guarantee badge */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-center gap-2 text-[11px] text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>256-bit Bank Grade Encrypted Checkout</span>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* "You may also like" Recommendation Carousel (FR-CART-06) */}
        {recommendations.length > 0 && (
          <div className="pt-10 border-t border-white/[0.08]">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <h3 className="text-base font-bold text-white">You may also like</h3>
              </div>
              <button
                onClick={() => navigateTo('listing')}
                className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1"
              >
                <span>View all</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {recommendations.map((rec) => (
                <div
                  key={rec.id}
                  onClick={() => navigateTo('details', rec.id)}
                  className="p-3.5 rounded-2xl bg-[#10152b]/60 border border-white/[0.06] hover:border-purple-500/40 transition-all hover:shadow-glow-purple cursor-pointer flex flex-col justify-between group"
                >
                  <div className="aspect-square rounded-xl bg-[#080b18] p-3 flex items-center justify-center mb-3">
                    <img src={rec.image} alt={rec.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white truncate group-hover:text-purple-300">
                      {rec.name}
                    </h4>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs font-bold text-white">${rec.price}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(rec, 1);
                        }}
                        className="px-2 py-1 rounded-lg bg-purple-600/30 text-purple-300 hover:bg-purple-600 hover:text-white text-[11px] font-semibold transition-colors"
                      >
                        + Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
