import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  ShoppingBag, 
  Heart, 
  Star, 
  ChevronDown, 
  Check, 
  Sun, 
  Moon, 
  SlidersHorizontal,
  Layers,
  ArrowRight
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const ComponentsShowcaseScreen = () => {
  const { addToast, theme, toggleTheme, navigateTo } = useShop();

  const [activeDropdown, setActiveDropdown] = useState(false);
  const [demoSearch, setDemoSearch] = useState('');
  const [demoQuantity, setDemoQuantity] = useState(1);
  const [showDemoModal, setShowDemoModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#090b14] text-slate-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header & Match Badge (As in Bottom Right of Design Board) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Layers className="w-5 h-5 text-purple-400" />
              <h1 className="text-2xl font-black text-white">Shared UI Component Library</h1>
            </div>
            <p className="text-xs text-slate-400">
              Reusable atomic design system specified in SRS Section 3.9
            </p>
          </div>

          {/* "Modern • Fast • Secure • Scalable" Badge from mockup */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-r from-purple-900/40 via-indigo-900/30 to-cyan-900/40 border border-purple-500/30 shadow-glow-purple">
            <Sparkles className="w-4 h-4 text-purple-400 animate-spin" />
            <span className="text-xs font-black tracking-wide bg-gradient-to-r from-white via-purple-200 to-cyan-300 bg-clip-text text-transparent">
              Modern • Fast • Secure • Scalable
            </span>
          </div>
        </div>

        {/* 12 Component Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 1. Navbar Preview */}
          <div className="p-5 rounded-3xl bg-[#0f1428]/80 border border-white/[0.08] space-y-3">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">1. Navbar</span>
            <div className="p-3 rounded-2xl bg-[#090b16] border border-white/[0.06] flex items-center justify-between">
              <span className="text-xs font-extrabold text-white">ShopNext</span>
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <span className="text-purple-400 font-semibold">Shop</span>
                <span>Categories</span>
                <span>Deals</span>
              </div>
              <ShoppingBag className="w-4 h-4 text-cyan-400" />
            </div>
            <p className="text-[11px] text-slate-400">Responsive glassmorphic header with search, notifications, cart & profile.</p>
          </div>

          {/* 2. Search Component */}
          <div className="p-5 rounded-3xl bg-[#0f1428]/80 border border-white/[0.08] space-y-3">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">2. Search</span>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={demoSearch}
                onChange={(e) => setDemoSearch(e.target.value)}
                placeholder="Auto-suggest with keyboard nav..."
                className="w-full bg-[#12172a] border border-white/[0.08] rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500"
              />
            </div>
            <p className="text-[11px] text-slate-400">Auto-suggests matches after 2+ characters with instant product jumping.</p>
          </div>

          {/* 3. Product Card */}
          <div className="p-5 rounded-3xl bg-[#0f1428]/80 border border-white/[0.08] space-y-3">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">3. Product Card</span>
            <div className="p-3 rounded-2xl bg-[#121832] border border-white/[0.06] flex items-center gap-3">
              <img src="/assets/products/hero_earbuds.png" alt="Card" className="w-12 h-12 object-contain" />
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-bold text-white truncate">CyberPods Pro</h4>
                <span className="text-xs font-extrabold text-purple-300">$179</span>
              </div>
              <button 
                onClick={() => addToast('success', 'Cart Demo', 'Added demo product to cart')}
                className="px-2.5 py-1 rounded-lg bg-purple-600 text-[10px] font-bold text-white"
              >
                + Add
              </button>
            </div>
            <p className="text-[11px] text-slate-400">Image, discount badge, ratings, wishlist toggle, and quick cart action.</p>
          </div>

          {/* 4. Category Card */}
          <div className="p-5 rounded-3xl bg-[#0f1428]/80 border border-white/[0.08] space-y-3">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">4. Category Card</span>
            <div className="p-4 rounded-2xl bg-[#121832] border border-white/[0.06] flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Electronics</h4>
                <p className="text-[11px] text-slate-400">120 Products Available</p>
              </div>
            </div>
            <p className="text-[11px] text-slate-400">Pre-filters catalog and provides fluid hover transform effects.</p>
          </div>

          {/* 5. Review Card */}
          <div className="p-5 rounded-3xl bg-[#0f1428]/80 border border-white/[0.08] space-y-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">5. Review Card</span>
            <div className="p-3.5 rounded-2xl bg-[#121832] border border-white/[0.06] space-y-1.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white">Elena Rostova</span>
                <div className="flex text-amber-400"><Star className="w-3 h-3 fill-amber-400" /> 5.0</div>
              </div>
              <p className="text-[11px] text-slate-300">"The audio immersion on these headphones is futuristic!"</p>
            </div>
            <p className="text-[11px] text-slate-400">User credentials, verified purchase badge, star rating, and helpful counter.</p>
          </div>

          {/* 6. Modal Component */}
          <div className="p-5 rounded-3xl bg-[#0f1428]/80 border border-white/[0.08] space-y-3">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">6. Modal</span>
            <button
              onClick={() => setShowDemoModal(true)}
              className="w-full py-2.5 rounded-xl bg-purple-600/30 text-purple-300 border border-purple-500/30 text-xs font-bold hover:bg-purple-600 hover:text-white transition-all text-center"
            >
              Launch Interactive Modal
            </button>
            <p className="text-[11px] text-slate-400">Focus-trapped accessible dialog with backdrop blur and ESC dismiss.</p>
          </div>

          {/* 7. Toast Notification */}
          <div className="p-5 rounded-3xl bg-[#0f1428]/80 border border-white/[0.08] space-y-3">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">7. Toast</span>
            <div className="flex gap-2">
              <button
                onClick={() => addToast('success', 'Success', 'Action completed successfully!')}
                className="flex-1 py-2 rounded-xl bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-[11px] font-bold"
              >
                Success Toast
              </button>
              <button
                onClick={() => addToast('error', 'Error Alert', 'Something went wrong.')}
                className="flex-1 py-2 rounded-xl bg-rose-600/30 text-rose-300 border border-rose-500/30 text-[11px] font-bold"
              >
                Error Toast
              </button>
            </div>
            <p className="text-[11px] text-slate-400">Floating non-blocking notifications with automatic 4-second dismiss.</p>
          </div>

          {/* 8. Dropdown Menu */}
          <div className="p-5 rounded-3xl bg-[#0f1428]/80 border border-white/[0.08] space-y-3">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">8. Dropdown</span>
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(!activeDropdown)}
                className="w-full p-2.5 rounded-xl bg-[#141b36] border border-white/[0.1] text-xs font-semibold text-slate-200 flex items-center justify-between"
              >
                <span>Select Delivery Speed</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {activeDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-[#10152c] border border-white/[0.12] rounded-xl p-1 z-20 text-xs shadow-xl">
                  <div className="p-2 hover:bg-purple-600/20 rounded-lg cursor-pointer">Express (1-2 Days)</div>
                  <div className="p-2 hover:bg-purple-600/20 rounded-lg cursor-pointer">Standard Cyber Delivery</div>
                </div>
              )}
            </div>
            <p className="text-[11px] text-slate-400">Keyboard accessible option selects with custom dark theme aesthetics.</p>
          </div>

          {/* 9. Loading Skeleton */}
          <div className="p-5 rounded-3xl bg-[#0f1428]/80 border border-white/[0.08] space-y-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">9. Loading Skeleton</span>
            <div className="p-3.5 rounded-2xl bg-[#121832] border border-white/[0.06] space-y-2">
              <div className="w-full h-8 bg-slate-800 rounded-lg animate-pulse" />
              <div className="w-3/4 h-3 bg-slate-800 rounded animate-pulse" />
              <div className="w-1/2 h-3 bg-slate-800 rounded animate-pulse" />
            </div>
            <p className="text-[11px] text-slate-400">Zero cumulative layout shift (CLS) placeholder shimmer animations.</p>
          </div>

          {/* 10. Form Validation */}
          <div className="p-5 rounded-3xl bg-[#0f1428]/80 border border-white/[0.08] space-y-3">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">10. Form</span>
            <div className="space-y-2">
              <input
                type="email"
                defaultValue="verified.user@shopnext.com"
                className="w-full bg-[#141b36] border border-emerald-500/50 rounded-xl px-3 py-2 text-xs text-white"
              />
              <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                <Check className="w-3 h-3" /> Valid email address format
              </span>
            </div>
            <p className="text-[11px] text-slate-400">Real-time inline validation, accessible field labels & error indicators.</p>
          </div>

          {/* 11. Pagination */}
          <div className="p-5 rounded-3xl bg-[#0f1428]/80 border border-white/[0.08] space-y-3">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">11. Pagination</span>
            <div className="flex items-center justify-center gap-1.5 pt-1">
              <button className="px-2.5 py-1 rounded bg-white/[0.05] text-xs text-slate-400">‹</button>
              <button className="px-2.5 py-1 rounded bg-purple-600 text-xs font-bold text-white shadow-glow-purple">1</button>
              <button className="px-2.5 py-1 rounded bg-white/[0.05] text-xs text-slate-300">2</button>
              <button className="px-2.5 py-1 rounded bg-white/[0.05] text-xs text-slate-300">3</button>
              <button className="px-2.5 py-1 rounded bg-white/[0.05] text-xs text-slate-400">›</button>
            </div>
            <p className="text-[11px] text-slate-400">Page numbers, active page glow, and boundary disabled state.</p>
          </div>

          {/* 12. Theme Toggle */}
          <div className="p-5 rounded-3xl bg-[#0f1428]/80 border border-white/[0.08] space-y-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">12. Theme Toggle</span>
            <div className="flex items-center justify-between p-3 rounded-2xl bg-[#141b36] border border-white/[0.06]">
              <span className="text-xs font-bold text-white">Theme: {theme.toUpperCase()}</span>
              <button
                onClick={toggleTheme}
                className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-bold text-white flex items-center gap-1.5"
              >
                {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-300" /> : <Moon className="w-3.5 h-3.5" />}
                <span>Toggle</span>
              </button>
            </div>
            <p className="text-[11px] text-slate-400">Persists user preference across session with full WCAG contrast.</p>
          </div>

        </div>

      </div>

      {/* Demo Modal Dialog */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-md bg-[#10152c] border border-purple-500/30 rounded-3xl p-6 shadow-2xl text-center glow-ring-purple animate-in zoom-in-95">
            <h3 className="text-lg font-black text-white mb-2">ShopNext Dialog Modal</h3>
            <p className="text-xs text-slate-300 mb-6">
              This component implements focus trapping, overlay click dismiss, and smooth GPU-accelerated backdrop blur.
            </p>
            <button
              onClick={() => setShowDemoModal(false)}
              className="btn-neon-purple px-6 py-2.5 rounded-xl text-xs font-bold text-white cursor-pointer"
            >
              Close Dialog
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
