import React from 'react';
import { ShoppingBag, ShieldCheck, RefreshCw, Truck, Heart, ArrowUpRight, Github, Twitter } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const Footer = () => {
  const { navigateTo } = useShop();

  return (
    <footer className="bg-[#070913] border-t border-white/[0.08] text-slate-400 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Features Strip (FR-LAND-04) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 border-b border-white/[0.08]">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Free Express Shipping</h4>
              <p className="text-xs text-slate-400">On all global orders over $50</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Easy 30-Day Returns</h4>
              <p className="text-xs text-slate-400">Hassle-free instant refund policy</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">100% Secure Payment</h4>
              <p className="text-xs text-slate-400">PCI-DSS Level 1 & Encrypted UPI</p>
            </div>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-12 border-b border-white/[0.08]">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-400 p-0.5 shadow-glow-purple">
                <div className="w-full h-full bg-[#090b14] rounded-[10px] flex items-center justify-center">
                  <ShoppingBag className="w-4 h-4 text-purple-400" />
                </div>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">ShopNext</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mb-6">
              ShopNext is the next-generation e-commerce platform delivering ultra-premium products with seamless high-tech aesthetics, instant checkout, and real-time order tracking.
            </p>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => navigateTo('adminDashboard')}
                className="text-xs font-medium text-cyan-400 hover:text-cyan-300 underline underline-offset-4 flex items-center gap-1"
              >
                Access Admin Portal <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Explore</h5>
            <ul className="space-y-2.5 text-xs">
              <li><button onClick={() => navigateTo('listing')} className="hover:text-purple-400 transition-colors">Catalog / Shop</button></li>
              <li><button onClick={() => navigateTo('details', 'sony-wh-1000xm5')} className="hover:text-purple-400 transition-colors">Featured Product</button></li>
              <li><button onClick={() => navigateTo('cart')} className="hover:text-purple-400 transition-colors">Shopping Cart</button></li>
              <li><button onClick={() => navigateTo('checkout')} className="hover:text-purple-400 transition-colors">Checkout Flow</button></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Account & Console</h5>
            <ul className="space-y-2.5 text-xs">
              <li><button onClick={() => navigateTo('userDashboard')} className="hover:text-purple-400 transition-colors">User Dashboard</button></li>
              <li><button onClick={() => navigateTo('auth')} className="hover:text-purple-400 transition-colors">Sign In / Register</button></li>
              <li><button onClick={() => navigateTo('adminDashboard')} className="hover:text-purple-400 transition-colors">Admin Dashboard</button></li>
              <li><button onClick={() => navigateTo('components')} className="hover:text-purple-400 transition-colors">UI Component Library</button></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Compliance (SRS 5.7)</h5>
            <ul className="space-y-2.5 text-xs">
              <li><span className="text-slate-400">DPDP Act (India)</span></li>
              <li><span className="text-slate-400">GDPR Privacy Policy</span></li>
              <li><span className="text-slate-400">Terms of Service</span></li>
              <li><span className="text-slate-400">Return & Refund Policy</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 ShopNext Inc. Designed per IEEE 830 / ISO 29148 SRS standard.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400 font-mono text-[11px]">System Status: Operational 99.9%</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
