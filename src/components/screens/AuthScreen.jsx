import React, { useState } from 'react';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  User, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const AuthScreen = () => {
  const { login, register, navigateTo } = useShop();

  // Tab: 'login' | 'register' (FR-AUTH-01)
  const [activeTab, setActiveTab] = useState('login');
  
  // Form values
  const [email, setEmail] = useState('john@example.com');
  const [password, setPassword] = useState('ShopNext#2026');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(true);

  // Forgot Password modal state (FR-AUTH-04)
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  // Password Strength Meter (FR-AUTH-03)
  const getPasswordStrength = (pass) => {
    if (!pass) return { score: 0, label: 'None', color: 'bg-slate-700' };
    if (pass.length < 6) return { score: 1, label: 'Weak', color: 'bg-rose-500' };
    if (pass.length < 10) return { score: 2, label: 'Medium', color: 'bg-amber-500' };
    return { score: 3, label: 'Strong', color: 'bg-emerald-500' };
  };

  const strength = getPasswordStrength(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === 'login') {
      login(email, password);
    } else {
      register(name, email, password);
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    setResetSent(true);
    setTimeout(() => {
      setResetSent(false);
      setShowForgotModal(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#090b14] text-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      
      {/* Container: Matches Mock-up Screen 6 Authentication */}
      <div className="w-full max-w-5xl rounded-3xl bg-[#0e1326]/90 border border-white/[0.08] shadow-2xl overflow-hidden backdrop-blur-2xl grid grid-cols-1 lg:grid-cols-12 glow-ring-purple">
        
        {/* Left Side: "Welcome Back!" & Benefits with Neon 3D Graphics (FR-AUTH-01) */}
        <div className="lg:col-span-6 p-8 sm:p-12 bg-gradient-to-br from-[#121833] via-[#0d1226] to-[#080b18] flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.08] relative overflow-hidden">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-cyan-500/15 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                Welcome to ShopNext
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                Welcome Back!
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Sign in to your account and continue your shopping journey.
              </p>
            </div>

            {/* Benefits Checklist */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-200">
                  Personalized recommendations
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-200">
                  Track your orders
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-200">
                  Exclusive deals
                </span>
              </div>
            </div>
          </div>

          {/* 3D Floating Shopping Bag & Cyber Render from Screenshot */}
          <div className="relative z-10 mt-8 flex items-center justify-center">
            <div className="relative w-64 h-56 flex items-center justify-center">
              <img
                src="/assets/products/auth_neon.png"
                alt="Shopping Bag & Devices"
                className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(168,85,247,0.5)] animate-float"
              />
            </div>
          </div>

          <div className="relative z-10 pt-4 text-[11px] text-slate-500">
            Encrypted session security • ISO/IEC/IEEE 29148 compliant
          </div>
        </div>

        {/* Right Side: Tabbed Login / Register Panel (FR-AUTH-01 to 05) */}
        <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-center">
          
          {/* Top Tabs [ Login ] [ Register ] */}
          <div className="flex p-1 rounded-2xl bg-[#141a33] border border-white/[0.08] mb-8">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'login'
                  ? 'bg-purple-600 text-white shadow-glow-purple'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab('register')}
              className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'register'
                  ? 'bg-purple-600 text-white shadow-glow-purple'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Register
            </button>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-black text-white">
              {activeTab === 'login' ? 'Sign In' : 'Create Account'}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {activeTab === 'login'
                ? 'Enter your email and password'
                : 'Fill in your details to start your journey'}
            </p>
          </div>

          {/* Auth Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {activeTab === 'register' && (
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full bg-[#13182e] border border-white/[0.1] rounded-2xl pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 outline-none focus:border-purple-500"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-[#13182e] border border-white/[0.1] rounded-2xl pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Password
                </label>
                {activeTab === 'login' && (
                  <button
                    type="button"
                    onClick={() => setShowForgotModal(true)}
                    className="text-xs text-purple-400 hover:text-purple-300 font-semibold"
                  >
                    Forgot Password?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-[#13182e] border border-white/[0.1] rounded-2xl pl-10 pr-10 py-3 text-xs text-white placeholder-slate-500 outline-none focus:border-purple-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {/* Password strength meter for registration (FR-AUTH-03) */}
              {activeTab === 'register' && (
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden flex gap-1">
                    <div className={`h-full ${strength.score >= 1 ? strength.color : 'bg-transparent'} flex-1`} />
                    <div className={`h-full ${strength.score >= 2 ? strength.color : 'bg-transparent'} flex-1`} />
                    <div className={`h-full ${strength.score >= 3 ? strength.color : 'bg-transparent'} flex-1`} />
                  </div>
                  <span className="text-[10px] text-slate-400 font-semibold">{strength.label}</span>
                </div>
              )}
            </div>

            {activeTab === 'register' && (
              <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer pt-1">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="rounded border-slate-700 bg-slate-800 text-purple-600 focus:ring-purple-500/20 accent-purple-600"
                />
                <span>I accept the Terms of Service & Privacy Policy</span>
              </label>
            )}

            {/* Primary Action Button (FR-AUTH-02) */}
            <button
              type="submit"
              className="btn-neon-purple w-full py-3.5 px-6 rounded-2xl text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-glow-purple mt-2"
            >
              <span>{activeTab === 'login' ? 'Sign In' : 'Create Account'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Social Login Divider (FR-AUTH-05) */}
            <div className="relative my-6 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/[0.08]" />
              </div>
              <span className="relative bg-[#0e1326] px-3 text-[11px] font-medium text-slate-400">
                or continue with
              </span>
            </div>

            {/* Social Buttons (Google, Apple, Facebook) */}
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => login('google.user@example.com')}
                className="py-2.5 px-3 rounded-2xl bg-[#141a33] hover:bg-[#1a2242] border border-white/[0.08] text-xs font-semibold text-slate-200 flex items-center justify-center gap-1.5 transition-colors"
              >
                <span className="font-bold text-red-400">G</span> Google
              </button>
              <button
                type="button"
                onClick={() => login('apple.user@example.com')}
                className="py-2.5 px-3 rounded-2xl bg-[#141a33] hover:bg-[#1a2242] border border-white/[0.08] text-xs font-semibold text-slate-200 flex items-center justify-center gap-1.5 transition-colors"
              >
                <span className="text-white"></span> Apple
              </button>
              <button
                type="button"
                onClick={() => login('facebook.user@example.com')}
                className="py-2.5 px-3 rounded-2xl bg-[#141a33] hover:bg-[#1a2242] border border-white/[0.08] text-xs font-semibold text-slate-200 flex items-center justify-center gap-1.5 transition-colors"
              >
                <span className="text-blue-400 font-bold">f</span> Facebook
              </button>
            </div>

            {/* Bottom Switch Tab Link */}
            <p className="text-center text-xs text-slate-400 pt-4">
              {activeTab === 'login' ? (
                <>
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setActiveTab('register')}
                    className="text-purple-400 hover:text-purple-300 font-bold underline"
                  >
                    Register
                  </button>
                </>
              ) : (
                <>
                  Already registered?{' '}
                  <button
                    type="button"
                    onClick={() => setActiveTab('login')}
                    className="text-purple-400 hover:text-purple-300 font-bold underline"
                  >
                    Sign In
                  </button>
                </>
              )}
            </p>

          </form>
        </div>

      </div>

      {/* Forgot Password Modal (FR-AUTH-04) */}
      {showForgotModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-md bg-[#10152c] border border-purple-500/30 rounded-3xl p-6 shadow-2xl">
            <h3 className="text-base font-bold text-white mb-2">Reset Password</h3>
            <p className="text-xs text-slate-400 mb-4">
              Enter your registered email and we'll dispatch a secure reset link.
            </p>

            {resetSent ? (
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center text-xs text-emerald-300">
                Reset link sent! Please check your inbox.
              </div>
            ) : (
              <form onSubmit={handleResetPassword} className="space-y-4">
                <div>
                  <label className="text-xs text-slate-300 block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full bg-[#151c36] border border-white/[0.1] rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-purple-500"
                  />
                </div>
                <div className="flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowForgotModal(false)}
                    className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-bold text-white shadow-glow-purple"
                  >
                    Send Link
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
