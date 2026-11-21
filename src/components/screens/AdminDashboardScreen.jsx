import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Search, 
  Bell, 
  DollarSign, 
  ShoppingBag, 
  Users, 
  TrendingUp, 
  Plus, 
  Edit3, 
  Trash2, 
  ChevronDown, 
  Tag, 
  Layers, 
  BarChart3, 
  Settings, 
  LogOut,
  ArrowRight,
  Package,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { ADMIN_STATS, ADMIN_REVENUE_CHART, ADMIN_TOP_PRODUCTS } from '../../data/mockData';

export const AdminDashboardScreen = () => {
  const { 
    productsList, 
    addProduct, 
    updateProduct, 
    deleteProduct, 
    orders, 
    updateOrderStatus,
    navigateTo 
  } = useShop();

  // Active module tab: 'dashboard' | 'products' | 'orders' | 'users' | 'analytics' | 'marketing' | 'settings' (FR-ADM-04 to 10)
  const [activeAdminTab, setActiveAdminTab] = useState('dashboard');
  
  // Revenue Chart period: '1M' | '3M' | '1Y' (FR-ADM-02)
  const [chartPeriod, setChartPeriod] = useState('1Y');
  
  // Add Product Modal state (FR-ADM-04)
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProd, setNewProd] = useState({
    name: '',
    subtitle: '',
    category: 'Electronics',
    brand: 'ShopNext',
    price: 99,
    originalPrice: 129,
    image: '/assets/products/hero_earbuds.png',
    description: 'Next generation cyber gear engineered for precision.'
  });

  const chartData = ADMIN_REVENUE_CHART[chartPeriod] || ADMIN_REVENUE_CHART['1Y'];

  const handleCreateProduct = (e) => {
    e.preventDefault();
    if (!newProd.name) return;
    addProduct(newProd);
    setShowAddModal(false);
    setNewProd({
      name: '',
      subtitle: '',
      category: 'Electronics',
      brand: 'ShopNext',
      price: 99,
      originalPrice: 129,
      image: '/assets/products/hero_earbuds.png',
      description: 'Next generation cyber gear engineered for precision.'
    });
  };

  return (
    <div className="min-h-screen bg-[#090b14] text-slate-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Admin Frame: Sidebar + Main Stage (FR-ADM-01 to 11) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Admin Sidebar (Matches Screen 8) */}
          <aside className="lg:col-span-3 bg-[#0e1328]/90 border border-white/[0.08] rounded-3xl p-6 backdrop-blur-xl space-y-6">
            
            {/* Logo */}
            <div className="flex items-center gap-3 pb-6 border-b border-white/[0.08]">
              <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-400 shadow-glow-purple">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">ShopNext Admin</h3>
                <span className="text-[10px] text-cyan-400 font-semibold tracking-wider uppercase">
                  Control Console
                </span>
              </div>
            </div>

            {/* Sidebar Navigation */}
            <nav className="space-y-1.5 text-xs font-semibold">
              <button
                onClick={() => setActiveAdminTab('dashboard')}
                className={`w-full px-3.5 py-2.5 rounded-xl flex items-center gap-3 transition-all ${
                  activeAdminTab === 'dashboard'
                    ? 'bg-purple-600 text-white shadow-glow-purple font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Dashboard</span>
              </button>

              <button
                onClick={() => setActiveAdminTab('products')}
                className={`w-full px-3.5 py-2.5 rounded-xl flex items-center justify-between transition-all ${
                  activeAdminTab === 'products'
                    ? 'bg-purple-600 text-white shadow-glow-purple font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Package className="w-4 h-4" />
                  <span>Products</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 font-bold">
                  {productsList.length}
                </span>
              </button>

              <button
                onClick={() => setActiveAdminTab('orders')}
                className={`w-full px-3.5 py-2.5 rounded-xl flex items-center justify-between transition-all ${
                  activeAdminTab === 'orders'
                    ? 'bg-purple-600 text-white shadow-glow-purple font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <ShoppingBag className="w-4 h-4" />
                  <span>Orders</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-bold">
                  {orders.length}
                </span>
              </button>

              <button
                onClick={() => setActiveAdminTab('users')}
                className={`w-full px-3.5 py-2.5 rounded-xl flex items-center gap-3 transition-all ${
                  activeAdminTab === 'users'
                    ? 'bg-purple-600 text-white shadow-glow-purple font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Users</span>
              </button>

              <button
                onClick={() => setActiveAdminTab('analytics')}
                className={`w-full px-3.5 py-2.5 rounded-xl flex items-center gap-3 transition-all ${
                  activeAdminTab === 'analytics'
                    ? 'bg-purple-600 text-white shadow-glow-purple font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <BarChart3 className="w-4 h-4" />
                <span>Analytics</span>
              </button>

              <button
                onClick={() => setActiveAdminTab('marketing')}
                className={`w-full px-3.5 py-2.5 rounded-xl flex items-center gap-3 transition-all ${
                  activeAdminTab === 'marketing'
                    ? 'bg-purple-600 text-white shadow-glow-purple font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <Tag className="w-4 h-4" />
                <span>Marketing</span>
              </button>

              <button
                onClick={() => setActiveAdminTab('settings')}
                className={`w-full px-3.5 py-2.5 rounded-xl flex items-center gap-3 transition-all ${
                  activeAdminTab === 'settings'
                    ? 'bg-purple-600 text-white shadow-glow-purple font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </button>
            </nav>

            <div className="pt-4 border-t border-white/[0.08]">
              <button
                onClick={() => navigateTo('landing')}
                className="w-full px-3.5 py-2.5 rounded-xl flex items-center gap-3 text-xs font-semibold text-slate-400 hover:text-white hover:bg-white/[0.04]"
              >
                <LogOut className="w-4 h-4" />
                <span>Return to Storefront</span>
              </button>
            </div>

          </aside>

          {/* Right Main Stage */}
          <main className="lg:col-span-9 space-y-6">
            
            {/* Admin Header (Search, Bell, Profile Avatar - FR-ADM-10) */}
            <div className="flex items-center justify-between gap-4 bg-[#0e1328]/60 border border-white/[0.08] p-4 rounded-3xl backdrop-blur-xl">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search orders, products, customers..."
                  className="w-full bg-[#131936] border border-white/[0.08] rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-400 outline-none focus:border-purple-500"
                />
              </div>

              <div className="flex items-center gap-3">
                <button className="p-2 rounded-xl bg-white/[0.04] text-slate-300 hover:text-white relative">
                  <Bell className="w-4 h-4" />
                  <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-purple-500 rounded-full" />
                </button>

                <div className="flex items-center gap-2 pl-3 border-l border-white/[0.08]">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-400 p-0.5">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                      alt="Admin"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <span className="text-xs font-bold text-white hidden sm:inline">Admin</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </div>
              </div>
            </div>

            {/* MAIN DASHBOARD TAB */}
            {activeAdminTab === 'dashboard' && (
              <div className="space-y-6">
                
                {/* 4 KPI Cards (FR-ADM-01: Revenue, Orders, Users, Conversion Rate) */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  
                  {/* Total Revenue */}
                  <div className="p-5 rounded-2xl bg-[#0f152d]/90 border border-white/[0.08]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-slate-400 font-medium">Total Revenue</span>
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                        <DollarSign className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-white">{ADMIN_STATS.totalRevenue}</div>
                    <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-bold mt-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{ADMIN_STATS.revenueTrend}</span>
                    </div>
                  </div>

                  {/* Total Orders */}
                  <div className="p-5 rounded-2xl bg-[#0f152d]/90 border border-white/[0.08]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-slate-400 font-medium">Total Orders</span>
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center">
                        <ShoppingBag className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-white">{ADMIN_STATS.totalOrders}</div>
                    <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-bold mt-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{ADMIN_STATS.ordersTrend}</span>
                    </div>
                  </div>

                  {/* Active Users */}
                  <div className="p-5 rounded-2xl bg-[#0f152d]/90 border border-white/[0.08]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-slate-400 font-medium">Active Users</span>
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                        <Users className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-white">{ADMIN_STATS.activeUsers}</div>
                    <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-bold mt-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{ADMIN_STATS.usersTrend}</span>
                    </div>
                  </div>

                  {/* Conversion Rate */}
                  <div className="p-5 rounded-2xl bg-[#0f152d]/90 border border-white/[0.08]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-slate-400 font-medium">Conversion Rate</span>
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-white">{ADMIN_STATS.conversionRate}</div>
                    <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-bold mt-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{ADMIN_STATS.conversionTrend}</span>
                    </div>
                  </div>

                </div>

                {/* Revenue Overview Chart + Top Products (FR-ADM-02, FR-ADM-03) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  
                  {/* Revenue Line Chart with 1M, 3M, 1Y toggles */}
                  <div className="lg:col-span-7 bg-[#0e1328]/80 border border-white/[0.08] rounded-3xl p-6 backdrop-blur-xl space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-white">Revenue Overview</h3>
                      <div className="flex items-center gap-1 bg-[#131936] p-1 rounded-xl border border-white/[0.06]">
                        {['1M', '3M', '1Y'].map((p) => (
                          <button
                            key={p}
                            onClick={() => setChartPeriod(p)}
                            className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${
                              chartPeriod === p
                                ? 'bg-purple-600 text-white shadow-glow-purple'
                                : 'text-slate-400 hover:text-white'
                            }`}
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* SVG Curve Chart */}
                    <div className="h-56 w-full pt-4">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 500 180">
                        <defs>
                          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        {/* Horizontal Grid lines */}
                        <line x1="0" y1="30" x2="500" y2="30" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />
                        <line x1="0" y1="80" x2="500" y2="80" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />
                        <line x1="0" y1="130" x2="500" y2="130" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />

                        {/* Chart Area Fill */}
                        <path
                          d="M 20,140 Q 90,110 160,80 T 300,90 T 420,35 L 480,25 L 480,160 L 20,160 Z"
                          fill="url(#chartGradient)"
                        />
                        {/* Neon Smooth Line */}
                        <path
                          d="M 20,140 Q 90,110 160,80 T 300,90 T 420,35 L 480,25"
                          fill="none"
                          stroke="#a855f7"
                          strokeWidth="3.5"
                          filter="drop-shadow(0 0 10px rgba(168,85,247,0.8))"
                        />
                        {/* Data Points */}
                        <circle cx="20" cy="140" r="4" fill="#a855f7" stroke="#ffffff" strokeWidth="2" />
                        <circle cx="160" cy="80" r="4" fill="#a855f7" stroke="#ffffff" strokeWidth="2" />
                        <circle cx="300" cy="90" r="4" fill="#a855f7" stroke="#ffffff" strokeWidth="2" />
                        <circle cx="480" cy="25" r="5" fill="#38bdf8" stroke="#ffffff" strokeWidth="2" />
                      </svg>
                      {/* Months labels */}
                      <div className="flex justify-between text-[10px] text-slate-500 pt-3">
                        <span>Jan</span>
                        <span>Feb</span>
                        <span>Mar</span>
                        <span>Apr</span>
                        <span>May</span>
                        <span>Jun</span>
                        <span>Jul</span>
                      </div>
                    </div>
                  </div>

                  {/* Top Products Table (FR-ADM-03) */}
                  <div className="lg:col-span-5 bg-[#0e1328]/80 border border-white/[0.08] rounded-3xl p-6 backdrop-blur-xl flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-bold text-white">Top Products</h3>
                        <button
                          onClick={() => setActiveAdminTab('products')}
                          className="text-xs font-semibold text-purple-400 hover:text-purple-300"
                        >
                          View All
                        </button>
                      </div>

                      <div className="space-y-3.5">
                        {ADMIN_TOP_PRODUCTS.map((tp, idx) => (
                          <div key={idx} className="p-3 rounded-2xl bg-[#141b36] border border-white/[0.06] flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <img src={tp.image} alt={tp.name} className="w-10 h-10 object-contain rounded-lg bg-black/40 p-1" />
                              <div>
                                <h4 className="text-xs font-bold text-white">{tp.name}</h4>
                                <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden mt-1.5">
                                  <div className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full" style={{ width: `${tp.progress}%` }} />
                                </div>
                              </div>
                            </div>
                            <span className="text-xs font-extrabold text-white">{tp.revenue}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400">
                      <span>Based on gross revenue this quarter</span>
                    </div>
                  </div>

                </div>

              </div>
            )}

            {/* PRODUCTS MODULE (FR-ADM-04: Full CRUD) */}
            {activeAdminTab === 'products' && (
              <div className="bg-[#0e1328]/80 border border-white/[0.08] rounded-3xl p-6 backdrop-blur-xl space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white">Product Catalogue Management</h3>
                    <p className="text-xs text-slate-400">Create, edit and manage pricing, categories, and inventory</p>
                  </div>
                  <button
                    onClick={() => setShowAddModal(true)}
                    className="btn-neon-purple px-4 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-1.5 shadow-glow-purple cursor-pointer"
                  >
                    <Plus className="w-4 h-4" /> Add Product
                  </button>
                </div>

                <div className="divide-y divide-white/[0.06]">
                  {productsList.map((p) => (
                    <div key={p.id} className="py-3.5 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5 min-w-0">
                        <img src={p.image} alt={p.name} className="w-10 h-10 object-contain rounded-lg bg-black/40 p-1 border border-white/[0.06]" />
                        <div className="truncate">
                          <h4 className="text-xs font-bold text-white truncate">{p.name}</h4>
                          <span className="text-[11px] text-slate-400">{p.category} • {p.brand} • Stock: {p.stockCount || 25}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="text-xs font-extrabold text-purple-300">${p.price}</span>
                        <button
                          onClick={() => deleteProduct(p.id)}
                          className="p-1.5 text-slate-400 hover:text-rose-400 transition-colors"
                          title="Delete Product"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ORDERS MODULE (FR-ADM-05: Status updates) */}
            {activeAdminTab === 'orders' && (
              <div className="bg-[#0e1328]/80 border border-white/[0.08] rounded-3xl p-6 backdrop-blur-xl space-y-4">
                <h3 className="text-sm font-bold text-white">Live Customer Orders</h3>
                <div className="space-y-3">
                  {orders.map((ord) => (
                    <div key={ord.id} className="p-4 rounded-2xl bg-[#141b36] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-purple-300 text-xs">{ord.id}</span>
                          <span className="text-xs text-slate-400">{ord.date}</span>
                        </div>
                        <p className="text-xs text-white font-semibold mt-1">Total: ${ord.total.toFixed(2)}</p>
                        <p className="text-[11px] text-slate-400">Customer: John Doe • {ord.paymentMethod}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-400">Status:</span>
                        <select
                          value={ord.status}
                          onChange={(e) => updateOrderStatus(ord.id, e.target.value)}
                          className="bg-[#10152a] border border-white/[0.1] text-xs font-bold text-slate-200 rounded-xl px-3 py-1.5 focus:border-purple-500 outline-none cursor-pointer"
                        >
                          <option value="Processing">Processing</option>
                          <option value="Shipped">Shipped</option>
                          <option value="Delivered">Delivered</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* USERS MODULE (FR-ADM-06) */}
            {activeAdminTab === 'users' && (
              <div className="bg-[#0e1328]/80 border border-white/[0.08] rounded-3xl p-6 backdrop-blur-xl space-y-4">
                <h3 className="text-sm font-bold text-white">Registered Users & Customers</h3>
                <div className="divide-y divide-white/[0.06] text-xs">
                  <div className="py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-600/30 text-purple-300 flex items-center justify-center font-bold">
                        JD
                      </div>
                      <div>
                        <p className="font-bold text-white">John Doe</p>
                        <p className="text-slate-400 text-[11px]">john@example.com</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-bold text-[10px]">
                      Active Customer
                    </span>
                  </div>
                  <div className="py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-cyan-600/30 text-cyan-300 flex items-center justify-center font-bold">
                        SA
                      </div>
                      <div>
                        <p className="font-bold text-white">System Admin</p>
                        <p className="text-slate-400 text-[11px]">admin@shopnext.com</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400 font-bold text-[10px]">
                      Super Administrator
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* MARKETING MODULE (FR-ADM-08) */}
            {activeAdminTab === 'marketing' && (
              <div className="bg-[#0e1328]/80 border border-white/[0.08] rounded-3xl p-6 backdrop-blur-xl space-y-4">
                <h3 className="text-sm font-bold text-white">Coupons & Campaigns</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#141b36] border border-white/[0.06]">
                    <span className="text-xs font-mono font-bold text-purple-300">SHOP20</span>
                    <p className="text-xs text-slate-300 mt-1">20% discount on orders over $50</p>
                    <span className="text-[10px] text-emerald-400 mt-2 block font-semibold">Active • 142 Uses</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#141b36] border border-white/[0.06]">
                    <span className="text-xs font-mono font-bold text-cyan-300">FUTURISTIC</span>
                    <p className="text-xs text-slate-300 mt-1">15% discount for cyber community</p>
                    <span className="text-[10px] text-emerald-400 mt-2 block font-semibold">Active • 89 Uses</span>
                  </div>
                </div>
              </div>
            )}

          </main>
        </div>

      </div>

      {/* Add Product Modal (FR-ADM-04) */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-[#10152c] border border-purple-500/30 rounded-3xl p-6 shadow-2xl">
            <h3 className="text-base font-bold text-white mb-2">Create New Product</h3>
            <p className="text-xs text-slate-400 mb-4">Add a new item to the store catalogue.</p>

            <form onSubmit={handleCreateProduct} className="space-y-3 text-xs">
              <div>
                <label className="text-slate-300 block mb-1">Product Title</label>
                <input
                  type="text"
                  required
                  value={newProd.name}
                  onChange={(e) => setNewProd({ ...newProd, name: e.target.value })}
                  placeholder="e.g. CyberGoggles Vision Pro"
                  className="w-full bg-[#151c36] border border-white/[0.1] rounded-xl px-3 py-2 text-white outline-none focus:border-purple-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-300 block mb-1">Category</label>
                  <select
                    value={newProd.category}
                    onChange={(e) => setNewProd({ ...newProd, category: e.target.value })}
                    className="w-full bg-[#151c36] border border-white/[0.1] rounded-xl px-3 py-2 text-white outline-none focus:border-purple-500"
                  >
                    <option value="Electronics">Electronics</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Home & Living">Home & Living</option>
                    <option value="Beauty">Beauty</option>
                    <option value="Sports">Sports</option>
                    <option value="Toys & Games">Toys & Games</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-300 block mb-1">Brand</label>
                  <input
                    type="text"
                    value={newProd.brand}
                    onChange={(e) => setNewProd({ ...newProd, brand: e.target.value })}
                    className="w-full bg-[#151c36] border border-white/[0.1] rounded-xl px-3 py-2 text-white outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-300 block mb-1">Sale Price ($)</label>
                  <input
                    type="number"
                    required
                    value={newProd.price}
                    onChange={(e) => setNewProd({ ...newProd, price: Number(e.target.value) })}
                    className="w-full bg-[#151c36] border border-white/[0.1] rounded-xl px-3 py-2 text-white outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="text-slate-300 block mb-1">Original Price ($)</label>
                  <input
                    type="number"
                    value={newProd.originalPrice}
                    onChange={(e) => setNewProd({ ...newProd, originalPrice: Number(e.target.value) })}
                    className="w-full bg-[#151c36] border border-white/[0.1] rounded-xl px-3 py-2 text-white outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold shadow-glow-purple"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
