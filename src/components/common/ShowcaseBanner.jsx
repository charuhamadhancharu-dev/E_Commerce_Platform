import React from 'react';
import { 
  Home, 
  Grid, 
  Eye, 
  ShoppingCart, 
  CreditCard, 
  Lock, 
  UserCheck, 
  ShieldCheck, 
  Layers,
  Sparkles
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const ShowcaseBanner = () => {
  const { currentScreen, setCurrentScreen } = useShop();

  const screens = [
    { id: 'landing', label: '1. Landing Page', icon: Home },
    { id: 'listing', label: '2. Product Listing', icon: Grid },
    { id: 'details', label: '3. Product Details', icon: Eye },
    { id: 'cart', label: '4. Shopping Cart', icon: ShoppingCart },
    { id: 'checkout', label: '5. Checkout', icon: CreditCard },
    { id: 'auth', label: '6. Authentication', icon: Lock },
    { id: 'userDashboard', label: '7. User Dashboard', icon: UserCheck },
    { id: 'adminDashboard', label: '8. Admin Dashboard', icon: ShieldCheck },
    { id: 'components', label: 'Components Library', icon: Layers },
  ];

  return (
    <div className="w-full bg-[#060810] border-b border-purple-500/20 py-2.5 px-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-purple-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            ShopNext UI Showcase Navigator
          </span>
          <span className="hidden lg:inline text-[11px] text-slate-400 border-l border-white/10 pl-2">
            Match: UI Design Board & SRS Specifications
          </span>
        </div>

        {/* Quick Screen Selector Pills */}
        <div className="flex items-center gap-1 overflow-x-auto w-full md:w-auto scrollbar-none py-0.5">
          {screens.map((s) => {
            const Icon = s.icon;
            const isActive = currentScreen === s.id;
            return (
              <button
                key={s.id}
                onClick={() => {
                  setCurrentScreen(s.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-glow-purple font-semibold ring-1 ring-white/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                {s.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
