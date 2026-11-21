import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  Heart, 
  MapPin, 
  Settings, 
  LogOut, 
  ShoppingBag, 
  Bookmark, 
  Wallet, 
  ArrowRight, 
  CheckCircle2, 
  Sun, 
  Moon, 
  Trash2, 
  Download, 
  Plus, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const UserDashboardScreen = () => {
  const { 
    user, 
    orders, 
    wishlist, 
    productsList, 
    addresses, 
    theme, 
    toggleTheme, 
    logout, 
    navigateTo, 
    removeFromCart, 
    addToCart, 
    toggleWishlist,
    deleteAddress,
    setDefaultAddress,
    userActiveTab,
    setUserActiveTab
  } = useShop();

  const [activeTab, setActiveTab] = useState(userActiveTab || 'dashboard'); // 'dashboard', 'orders', 'wishlist', 'addresses', 'settings'

  // Profile edit state
  const [profileName, setProfileName] = useState(user?.name || 'John Doe');
  const [profileEmail, setProfileEmail] = useState(user?.email || 'john@example.com');
  const [profilePhone, setProfilePhone] = useState(user?.phone || '+1 (555) 234-5678');

  // Filtered Wishlist Products
  const wishlistProducts = productsList.filter(p => wishlist.includes(p.id));

  return (
    <div className="min-h-screen bg-[#090b14] text-slate-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Dashboard Layout: Left Sidebar + Right Content (FR-USR-01 to 08) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left User Navigation Sidebar */}
          <aside className="lg:col-span-3 bg-[#0f1428]/80 border border-white/[0.08] rounded-3xl p-6 backdrop-blur-xl space-y-6">
            
            {/* User Profile Badge (Matches Mock-up Screen 7) */}
            <div className="flex items-center gap-3.5 pb-6 border-b border-white/[0.08]">
              <div className="w-12 h-12 rounded-2xl bg-purple-600/30 border border-purple-500/40 p-0.5 overflow-hidden flex-shrink-0">
                <img
                  src={user?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"}
                  alt={user?.name || "User"}
                  className="w-full h-full object-cover rounded-[14px]"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-bold text-white truncate">{user?.name || 'John Doe'}</h3>
                <p className="text-xs text-slate-400 truncate">{user?.email || 'john@example.com'}</p>
              </div>
            </div>

            {/* Menu Links */}
            <nav className="space-y-1.5 text-xs font-semibold">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`w-full px-3.5 py-2.5 rounded-xl flex items-center gap-3 transition-all ${
                  activeTab === 'dashboard'
                    ? 'bg-purple-600 text-white shadow-glow-purple font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Dashboard</span>
              </button>

              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full px-3.5 py-2.5 rounded-xl flex items-center justify-between transition-all ${
                  activeTab === 'orders'
                    ? 'bg-purple-600 text-white shadow-glow-purple font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Package className="w-4 h-4" />
                  <span>Orders</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 font-bold">
                  {orders.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('wishlist')}
                className={`w-full px-3.5 py-2.5 rounded-xl flex items-center justify-between transition-all ${
                  activeTab === 'wishlist'
                    ? 'bg-purple-600 text-white shadow-glow-purple font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Heart className="w-4 h-4" />
                  <span>Wishlist</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-bold">
                  {wishlist.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('addresses')}
                className={`w-full px-3.5 py-2.5 rounded-xl flex items-center gap-3 transition-all ${
                  activeTab === 'addresses'
                    ? 'bg-purple-600 text-white shadow-glow-purple font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <MapPin className="w-4 h-4" />
                <span>Addresses</span>
              </button>

              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full px-3.5 py-2.5 rounded-xl flex items-center gap-3 transition-all ${
                  activeTab === 'settings'
                    ? 'bg-purple-600 text-white shadow-glow-purple font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </button>
            </nav>

            {/* Logout Action */}
            <div className="pt-4 border-t border-white/[0.08]">
              <button
                onClick={logout}
                className="w-full px-3.5 py-2.5 rounded-xl flex items-center gap-3 text-xs font-semibold text-rose-400 hover:bg-rose-500/10 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>

          </aside>

          {/* Right Main Dashboard Area */}
          <main className="lg:col-span-9 space-y-6">
            
            {/* Top Header: "My Dashboard" & Dark Mode Toggle (FR-USR-08) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0f1428]/60 border border-white/[0.08] p-6 rounded-3xl backdrop-blur-xl">
              <div>
                <h1 className="text-xl font-black text-white">My Dashboard</h1>
                <p className="text-xs text-slate-400 mt-0.5">Manage your account, shipments, and orders</p>
              </div>

              {/* Dark Mode Toggle Switch (Matches Screen 7) */}
              <div className="flex items-center gap-3 bg-[#13182e] border border-white/[0.08] px-4 py-2 rounded-2xl">
                <span className="text-xs font-bold text-slate-300">Dark Mode</span>
                <button
                  onClick={toggleTheme}
                  className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-purple-600' : 'bg-slate-700'
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center text-[10px] text-purple-900 ${
                      theme === 'dark' ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  >
                    {theme === 'dark' ? '🌙' : '☀️'}
                  </div>
                </button>
              </div>
            </div>

            {/* DASHBOARD TAB */}
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                
                {/* 3 Summary Tiles (FR-USR-01: Total Orders, Wishlist Items, Total Spent) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  
                  {/* Total Orders Tile */}
                  <div className="p-5 rounded-2xl bg-[#111730]/90 border border-white/[0.08] flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 font-medium">Total Orders</span>
                      <div className="text-2xl font-black text-white mt-1">12</div>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <ShoppingBag className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Wishlist Items Tile */}
                  <div className="p-5 rounded-2xl bg-[#111730]/90 border border-white/[0.08] flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 font-medium">Wishlist Items</span>
                      <div className="text-2xl font-black text-white mt-1">{wishlist.length}</div>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                      <Bookmark className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Total Spent Tile */}
                  <div className="p-5 rounded-2xl bg-[#111730]/90 border border-white/[0.08] flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 font-medium">Total Spent</span>
                      <div className="text-2xl font-black text-white mt-1">$1,248</div>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                      <Wallet className="w-6 h-6" />
                    </div>
                  </div>

                </div>

                {/* Bottom Row: Recent Orders Card + Special Offer Promo Card (FR-USR-02, FR-USR-07) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  
                  {/* Recent Orders (Matches Mock-up Screen 7) */}
                  <div className="lg:col-span-7 bg-[#0f1428]/80 border border-white/[0.08] rounded-3xl p-6 backdrop-blur-xl flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-bold text-white">Recent Orders</h3>
                      <button
                        onClick={() => setActiveTab('orders')}
                        className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1"
                      >
                        View All <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="space-y-3">
                      {/* Nike Air Max 270 order item matching screenshot */}
                      <div className="p-4 rounded-2xl bg-[#131936] border border-white/[0.06] flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <img
                            src="/assets/products/nike.png"
                            alt="Nike Air Max 270"
                            className="w-12 h-12 object-contain rounded-xl bg-black/40 p-1"
                          />
                          <div>
                            <h4 className="text-xs font-bold text-white">Nike Air Max 270</h4>
                            <p className="text-[11px] text-slate-400 mt-0.5">$129 • Apr 15, 2025</p>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-bold">
                          Delivered
                        </span>
                      </div>

                      {/* Second order item */}
                      <div className="p-4 rounded-2xl bg-[#131936] border border-white/[0.06] flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <img
                            src="/assets/products/sony_headphones_glow.png"
                            alt="Sony WH-1000XM5"
                            className="w-12 h-12 object-contain rounded-xl bg-black/40 p-1"
                          />
                          <div>
                            <h4 className="text-xs font-bold text-white">Sony WH-1000XM5</h4>
                            <p className="text-[11px] text-slate-400 mt-0.5">$349 • Mar 28, 2025</p>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-bold">
                          Delivered
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Special Offer Card: "Get 20% OFF on your next order!" (FR-USR-07) */}
                  <div className="lg:col-span-5 bg-gradient-to-br from-indigo-900/60 via-purple-900/50 to-[#0e1328] border border-purple-500/30 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between shadow-glow-purple">
                    <div className="relative z-10 space-y-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded-full inline-block">
                        Special Offer
                      </span>
                      <h3 className="text-xl font-extrabold text-white leading-tight">
                        Get 20% OFF
                      </h3>
                      <p className="text-xs text-purple-200/80">
                        on your next order! Use code <b className="text-white">SHOP20</b>
                      </p>
                    </div>

                    {/* Shoe Graphic from Mock-up */}
                    <div className="relative z-10 flex items-center justify-between mt-4">
                      <button
                        onClick={() => navigateTo('listing')}
                        className="btn-neon-purple px-4 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-1.5 cursor-pointer shadow"
                      >
                        <span>Shop Now</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <div className="w-24 h-20 -mr-2">
                        <img
                          src="/assets/products/sneakers_purple.png"
                          alt="Sneakers Promotion"
                          className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(168,85,247,0.7)]"
                        />
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            )}

            {/* ORDERS TAB (FR-USR-03) */}
            {activeTab === 'orders' && (
              <div className="bg-[#0f1428]/80 border border-white/[0.08] rounded-3xl p-6 space-y-4 backdrop-blur-xl">
                <h3 className="text-sm font-bold text-white mb-2">Order History</h3>
                <div className="space-y-3">
                  {orders.map((ord) => (
                    <div key={ord.id} className="p-4 rounded-2xl bg-[#141a36] border border-white/[0.06] space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-3 text-xs">
                        <div>
                          <span className="font-mono font-bold text-purple-300">{ord.id}</span>
                          <span className="text-slate-400 ml-2">Placed on {ord.date}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                            ord.status === 'Delivered'
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                              : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                          }`}>
                            {ord.status}
                          </span>
                          <span className="font-extrabold text-white text-sm">${ord.total.toFixed(2)}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {(ord.items || []).map((it, idx) => (
                          <div key={idx} className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2.5">
                              <img
                                src={it.product?.image || '/assets/products/sony_headphones_glow.png'}
                                alt="Item"
                                className="w-8 h-8 object-contain rounded bg-black/40 p-1"
                              />
                              <span className="text-slate-200">{it.product?.name || 'Product'} (x{it.quantity})</span>
                            </div>
                            <span className="font-semibold text-slate-300">
                              ${((it.product?.price || 0) * it.quantity).toFixed(2)}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-white/[0.04] text-[11px] text-slate-400">
                        <span>Paid via {ord.paymentMethod}</span>
                        <button
                          onClick={() => alert(`Invoice downloaded for Order #${ord.id}`)}
                          className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-1"
                        >
                          <Download className="w-3.5 h-3.5" /> Download Invoice
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* WISHLIST TAB (FR-USR-04) */}
            {activeTab === 'wishlist' && (
              <div className="bg-[#0f1428]/80 border border-white/[0.08] rounded-3xl p-6 backdrop-blur-xl">
                <h3 className="text-sm font-bold text-white mb-4">Saved Products ({wishlist.length})</h3>
                {wishlistProducts.length === 0 ? (
                  <p className="text-xs text-slate-400">No items currently saved in your wishlist.</p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {wishlistProducts.map((p) => (
                      <div key={p.id} className="p-3.5 rounded-2xl bg-[#141b36] border border-white/[0.06] flex flex-col justify-between">
                        <div className="aspect-square rounded-xl bg-black/40 p-2 flex items-center justify-center mb-2">
                          <img src={p.image} alt={p.name} className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-white truncate">{p.name}</h4>
                          <span className="text-xs font-extrabold text-purple-300 mt-1 block">${p.price}</span>
                          <div className="flex items-center gap-2 mt-3">
                            <button
                              onClick={() => {
                                addToCart(p, 1);
                                toggleWishlist(p.id);
                              }}
                              className="flex-1 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-[11px] font-bold text-white transition-all text-center"
                            >
                              Move to Cart
                            </button>
                            <button
                              onClick={() => toggleWishlist(p.id)}
                              className="p-1.5 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-500/10"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* ADDRESSES TAB (FR-USR-05) */}
            {activeTab === 'addresses' && (
              <div className="bg-[#0f1428]/80 border border-white/[0.08] rounded-3xl p-6 backdrop-blur-xl space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white">Saved Delivery Addresses</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {addresses.map((a) => (
                    <div
                      key={a.id}
                      className={`p-4 rounded-2xl border transition-all ${
                        a.isDefault ? 'bg-[#141b36] border-purple-500/50' : 'bg-[#10152a] border-white/[0.06]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-white">{a.name}</span>
                        {a.isDefault && (
                          <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full font-bold">
                            Default
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed mb-3">
                        {a.street}, {a.city}, {a.state} {a.postalCode}
                      </p>
                      <div className="flex items-center justify-between pt-2 border-t border-white/[0.04]">
                        {!a.isDefault ? (
                          <button
                            onClick={() => setDefaultAddress(a.id)}
                            className="text-[11px] text-purple-400 hover:underline"
                          >
                            Set as Default
                          </button>
                        ) : <span />}
                        <button
                          onClick={() => deleteAddress(a.id)}
                          className="text-slate-400 hover:text-rose-400 p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SETTINGS TAB (FR-USR-06) */}
            {activeTab === 'settings' && (
              <div className="bg-[#0f1428]/80 border border-white/[0.08] rounded-3xl p-6 backdrop-blur-xl space-y-4">
                <h3 className="text-sm font-bold text-white mb-2">Profile & Security Settings</h3>
                <div className="space-y-4 max-w-md text-xs">
                  <div>
                    <label className="text-slate-300 block mb-1">Full Name</label>
                    <input
                      type="text"
                      value={profileName}
                      onChange={(e) => setProfileName(e.target.value)}
                      className="w-full bg-[#141a33] border border-white/[0.1] rounded-xl px-3 py-2 text-white outline-none focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="text-slate-300 block mb-1">Email</label>
                    <input
                      type="email"
                      value={profileEmail}
                      onChange={(e) => setProfileEmail(e.target.value)}
                      className="w-full bg-[#141a33] border border-white/[0.1] rounded-xl px-3 py-2 text-white outline-none focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="text-slate-300 block mb-1">Phone</label>
                    <input
                      type="tel"
                      value={profilePhone}
                      onChange={(e) => setProfilePhone(e.target.value)}
                      className="w-full bg-[#141a33] border border-white/[0.1] rounded-xl px-3 py-2 text-white outline-none focus:border-purple-500"
                    />
                  </div>
                  <button
                    onClick={() => alert('Settings updated!')}
                    className="btn-neon-purple px-5 py-2.5 rounded-xl font-bold text-white shadow-glow-purple"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )}

          </main>
        </div>

      </div>
    </div>
  );
};
