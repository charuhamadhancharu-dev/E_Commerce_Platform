import React, { useState, useRef, useEffect } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Heart, 
  Bell, 
  User, 
  ChevronDown, 
  Moon, 
  Sun, 
  ShieldCheck, 
  Package, 
  LogOut, 
  Menu, 
  X,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const Navbar = () => {
  const { 
    currentScreen, 
    navigateTo, 
    cart, 
    wishlist, 
    user, 
    isAuthenticated, 
    logout, 
    theme, 
    toggleTheme,
    searchQuery,
    setSearchQuery,
    productsList
  } = useShop();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const searchRef = useRef(null);
  const profileRef = useRef(null);
  const notifRef = useRef(null);

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Search auto-suggestions (FR-LAND-07: auto-suggestions after 2+ characters)
  const filteredSuggestions = searchQuery.trim().length >= 2
    ? productsList.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setIsProfileOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setIsNotificationsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectProduct = (productId) => {
    navigateTo('details', productId);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter') {
      navigateTo('listing');
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#090b14]/85 dark:bg-[#090b14]/90 border-b border-white/[0.08] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-8">
          <button 
            onClick={() => navigateTo('landing')}
            className="flex items-center gap-2.5 group text-left cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-0.5 shadow-glow-purple group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full bg-[#090b14] rounded-[10px] flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-purple-200 bg-clip-text text-transparent">
                ShopNext
              </span>
              <span className="text-[10px] tracking-wider text-purple-400/80 uppercase font-semibold -mt-1">
                Next-Gen Retail
              </span>
            </div>
          </button>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-300">
            <button
              onClick={() => navigateTo('listing')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                currentScreen === 'listing'
                  ? 'text-white bg-white/[0.08] font-semibold'
                  : 'hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              Shop
            </button>
            <button
              onClick={() => navigateTo('listing')}
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/[0.04] transition-all flex items-center gap-1"
            >
              Categories <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>
            <button
              onClick={() => navigateTo('listing')}
              className="px-3 py-1.5 rounded-lg hover:text-purple-400 hover:bg-purple-500/10 transition-all text-purple-400 flex items-center gap-1 font-medium"
            >
              <Sparkles className="w-3.5 h-3.5" /> Deals
            </button>
            <button
              onClick={() => navigateTo('components')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                currentScreen === 'components'
                  ? 'text-white bg-white/[0.08] font-semibold'
                  : 'hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              Components
            </button>
          </nav>
        </div>

        {/* Search Field with Auto-Suggestions (FR-LAND-07) */}
        <div ref={searchRef} className="relative flex-1 max-w-md hidden sm:block">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => setIsSearchOpen(true)}
              onKeyDown={handleSearchSubmit}
              placeholder="Search products, brands, tech..."
              className="w-full bg-[#12172a] hover:bg-[#161d36] focus:bg-[#141b31] border border-white/[0.08] focus:border-purple-500/60 rounded-full pl-10 pr-4 py-2 text-sm text-slate-100 placeholder-slate-400 transition-all outline-none focus:ring-2 focus:ring-purple-500/20"
            />
          </div>

          {/* Autocomplete Dropdown */}
          {isSearchOpen && filteredSuggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#10162c] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden z-50 backdrop-blur-2xl">
              <div className="p-2 border-b border-white/[0.06] text-[11px] font-semibold uppercase tracking-wider text-purple-400 px-3">
                Quick Matches
              </div>
              <div className="divide-y divide-white/[0.04]">
                {filteredSuggestions.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelectProduct(item.id)}
                    className="w-full px-3 py-2.5 flex items-center justify-between text-left hover:bg-purple-600/10 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-9 h-9 object-cover rounded-lg bg-slate-900 border border-white/[0.06]" 
                      />
                      <div>
                        <div className="text-sm font-medium text-slate-200 group-hover:text-purple-300">
                          {item.name}
                        </div>
                        <div className="text-xs text-slate-400">
                          {item.category} • {item.brand}
                        </div>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-purple-400">
                      ${item.price}
                    </span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => {
                  navigateTo('listing');
                  setIsSearchOpen(false);
                }}
                className="w-full py-2 bg-purple-600/20 hover:bg-purple-600/30 text-xs font-medium text-purple-300 text-center transition-colors flex items-center justify-center gap-1"
              >
                View all results <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>

        {/* Right Actions (Wishlist, Notifications, Cart, Profile, Theme) */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Wishlist Button */}
          <button
            onClick={() => navigateTo('userDashboard')}
            className="relative p-2.5 rounded-full hover:bg-white/[0.08] text-slate-300 hover:text-white transition-all cursor-pointer"
            title="Wishlist"
          >
            <Heart className="w-5 h-5 text-purple-300" />
            {wishlist.length > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-[10px] font-bold text-white flex items-center justify-center shadow-glow-purple">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Notifications Button & Dropdown */}
          <div ref={notifRef} className="relative">
            <button
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              className="relative p-2.5 rounded-full hover:bg-white/[0.08] text-slate-300 hover:text-white transition-all cursor-pointer"
              title="Notifications"
            >
              <Bell className="w-5 h-5 text-slate-300" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-cyan-400 rounded-full ring-2 ring-[#090b14] animate-pulse" />
            </button>

            {isNotificationsOpen && (
              <div className="absolute right-0 mt-3 w-80 bg-[#10162c] border border-white/[0.12] rounded-2xl shadow-2xl p-3 z-50 backdrop-blur-2xl">
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Notifications
                  </span>
                  <span className="text-[10px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full">
                    2 New
                  </span>
                </div>
                <div className="py-2 space-y-2">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs">
                    <div className="font-semibold text-purple-300">Special Promo Live!</div>
                    <div className="text-slate-400 text-[11px] mt-0.5">Use code <b>SHOP20</b> to get 20% off your next cyberpunk upgrade.</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] text-xs">
                    <div className="font-semibold text-slate-200">Order Dispatched</div>
                    <div className="text-slate-400 text-[11px] mt-0.5">Your Nike Air Max 270 order is out for express delivery.</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Shopping Cart Button */}
          <button
            onClick={() => navigateTo('cart')}
            className="relative p-2.5 rounded-full hover:bg-white/[0.08] text-slate-300 hover:text-white transition-all cursor-pointer"
            title="Cart"
          >
            <ShoppingBag className="w-5 h-5 text-cyan-300" />
            {totalCartCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-[10px] font-bold text-white flex items-center justify-center shadow-glow-purple">
                {totalCartCount}
              </span>
            )}
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full hover:bg-white/[0.08] text-slate-300 hover:text-amber-300 transition-all"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-amber-300" />
            ) : (
              <Moon className="w-5 h-5 text-indigo-400" />
            )}
          </button>

          {/* User Profile Avatar & Dropdown */}
          <div ref={profileRef} className="relative">
            {isAuthenticated ? (
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 p-1 rounded-full hover:ring-2 hover:ring-purple-500/40 transition-all cursor-pointer"
              >
                <div className="w-9 h-9 rounded-full ring-2 ring-purple-500/50 overflow-hidden bg-purple-900/50">
                  <img
                    src={user?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"}
                    alt={user?.name || "User Avatar"}
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>
            ) : (
              <button
                onClick={() => navigateTo('auth')}
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-semibold text-white transition-all shadow-glow-purple"
              >
                Sign In
              </button>
            )}

            {/* Profile Dropdown */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-[#10162c] border border-white/[0.12] rounded-2xl shadow-2xl p-2 z-50 backdrop-blur-2xl">
                <div className="px-3 py-2 border-b border-white/[0.06]">
                  <p className="text-xs font-bold text-white">{user?.name}</p>
                  <p className="text-[11px] text-slate-400 truncate">{user?.email}</p>
                </div>
                <div className="py-1">
                  <button
                    onClick={() => {
                      navigateTo('userDashboard');
                      setIsProfileOpen(false);
                    }}
                    className="w-full px-3 py-2 rounded-lg text-left text-xs font-medium text-slate-200 hover:bg-purple-600/20 hover:text-purple-300 flex items-center gap-2.5 transition-colors"
                  >
                    <User className="w-4 h-4 text-purple-400" /> Customer Dashboard
                  </button>
                  <button
                    onClick={() => {
                      navigateTo('adminDashboard');
                      setIsProfileOpen(false);
                    }}
                    className="w-full px-3 py-2 rounded-lg text-left text-xs font-medium text-slate-200 hover:bg-purple-600/20 hover:text-purple-300 flex items-center gap-2.5 transition-colors"
                  >
                    <ShieldCheck className="w-4 h-4 text-cyan-400" /> Admin Console
                  </button>
                  <button
                    onClick={() => {
                      navigateTo('userDashboard');
                      setIsProfileOpen(false);
                    }}
                    className="w-full px-3 py-2 rounded-lg text-left text-xs font-medium text-slate-200 hover:bg-purple-600/20 hover:text-purple-300 flex items-center gap-2.5 transition-colors"
                  >
                    <Package className="w-4 h-4 text-slate-400" /> Order History
                  </button>
                </div>
                <div className="pt-1 border-t border-white/[0.06]">
                  <button
                    onClick={() => {
                      logout();
                      setIsProfileOpen(false);
                    }}
                    className="w-full px-3 py-2 rounded-lg text-left text-xs font-medium text-rose-400 hover:bg-rose-500/10 flex items-center gap-2.5 transition-colors"
                  >
                    <LogOut className="w-4 h-4" /> Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.08]"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0d1224] border-b border-white/[0.08] px-4 pt-2 pb-4 space-y-2">
          <div className="pt-2 pb-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-[#161c36] border border-white/[0.1] rounded-xl px-3.5 py-2 text-sm text-slate-100 placeholder-slate-400"
            />
          </div>
          <button
            onClick={() => { navigateTo('landing'); setIsMobileMenuOpen(false); }}
            className="block w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/[0.05]"
          >
            Home
          </button>
          <button
            onClick={() => { navigateTo('listing'); setIsMobileMenuOpen(false); }}
            className="block w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/[0.05]"
          >
            All Products
          </button>
          <button
            onClick={() => { navigateTo('userDashboard'); setIsMobileMenuOpen(false); }}
            className="block w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/[0.05]"
          >
            My Account & Orders
          </button>
          <button
            onClick={() => { navigateTo('adminDashboard'); setIsMobileMenuOpen(false); }}
            className="block w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-cyan-400 hover:bg-white/[0.05]"
          >
            Admin Dashboard
          </button>
        </div>
      )}
    </header>
  );
};
