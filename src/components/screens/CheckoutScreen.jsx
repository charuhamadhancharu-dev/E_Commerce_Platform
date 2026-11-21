import React, { useState } from 'react';
import { 
  Check, 
  CreditCard, 
  MapPin, 
  Plus, 
  ArrowRight, 
  ShieldCheck, 
  Smartphone, 
  Banknote, 
  CheckCircle2, 
  Edit3, 
  Lock,
  ArrowLeft
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const CheckoutScreen = () => {
  const { 
    cart, 
    cartSubtotal, 
    shippingFee, 
    taxFee, 
    cartTotal, 
    addresses, 
    addAddress,
    selectedAddressId, 
    setSelectedAddressId,
    selectedPaymentMethod, 
    setSelectedPaymentMethod,
    placeOrder,
    navigateTo 
  } = useShop();

  // Progress Stepper: 1: Shipping, 2: Payment, 3: Review (FR-CHK-01)
  const [currentStep, setCurrentStep] = useState(2); // Match screenshot showing Step 2 Payment active
  
  // Payment card inputs state
  const [cardData, setCardData] = useState({
    cardNumber: '•••• •••• •••• 4242',
    cardName: 'John Doe',
    expiry: '12/28',
    cvv: '•••'
  });

  const [upiId, setUpiId] = useState('john@okaxis');

  // Address Modal state
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [newAddressForm, setNewAddressForm] = useState({
    name: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'United States'
  });

  // Success Confirmation Modal
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  const activeAddress = addresses.find(a => a.id === selectedAddressId) || addresses[0];

  const handleCreateAddress = (e) => {
    e.preventDefault();
    if (!newAddressForm.street || !newAddressForm.city) return;
    const newId = addAddress(newAddressForm);
    setSelectedAddressId(newId);
    setShowAddressModal(false);
    setNewAddressForm({
      name: '',
      phone: '',
      street: '',
      city: '',
      state: '',
      postalCode: '',
      country: 'United States'
    });
  };

  const handlePlaceOrderSubmit = () => {
    const order = placeOrder({
      cardNumber: cardData.cardNumber,
      upiId: upiId
    });
    setConfirmedOrder(order);
  };

  return (
    <div className="min-h-screen bg-[#090b14] text-slate-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Progress Stepper (FR-CHK-01) */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-between relative">
            
            {/* Connecting line */}
            <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-0.5 bg-white/[0.1] -z-0" />
            <div 
              className="absolute left-8 top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300 -z-0"
              style={{
                width: currentStep === 1 ? '0%' : currentStep === 2 ? '50%' : '100%'
              }}
            />

            {/* Step 1: Shipping */}
            <button
              onClick={() => setCurrentStep(1)}
              className="relative z-10 flex flex-col items-center gap-1.5 focus:outline-none"
            >
              <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                currentStep >= 1
                  ? 'bg-purple-600 text-white shadow-glow-purple'
                  : 'bg-[#151b33] text-slate-400 border border-white/[0.1]'
              }`}>
                {currentStep > 1 ? <Check className="w-4 h-4 text-white" /> : '1'}
              </div>
              <span className={`text-xs font-semibold ${currentStep === 1 ? 'text-purple-400' : 'text-slate-400'}`}>
                Shipping
              </span>
            </button>

            {/* Step 2: Payment */}
            <button
              onClick={() => setCurrentStep(2)}
              className="relative z-10 flex flex-col items-center gap-1.5 focus:outline-none"
            >
              <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                currentStep >= 2
                  ? 'bg-purple-600 text-white shadow-glow-purple ring-4 ring-purple-600/20'
                  : 'bg-[#151b33] text-slate-400 border border-white/[0.1]'
              }`}>
                {currentStep > 2 ? <Check className="w-4 h-4 text-white" /> : '2'}
              </div>
              <span className={`text-xs font-semibold ${currentStep === 2 ? 'text-purple-400' : 'text-slate-400'}`}>
                Payment
              </span>
            </button>

            {/* Step 3: Review */}
            <button
              onClick={() => setCurrentStep(3)}
              className="relative z-10 flex flex-col items-center gap-1.5 focus:outline-none"
            >
              <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                currentStep === 3
                  ? 'bg-purple-600 text-white shadow-glow-purple'
                  : 'bg-[#151b33] text-slate-400 border border-white/[0.1]'
              }`}>
                3
              </div>
              <span className={`text-xs font-semibold ${currentStep === 3 ? 'text-purple-400' : 'text-slate-400'}`}>
                Review
              </span>
            </button>

          </div>
        </div>

        {/* Checkout Main Layout: Shipping/Payment Form + Order Summary (FR-CHK-07) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Step Flow Content */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Shipping Address Section (FR-CHK-02, FR-CHK-03) */}
            <div className="p-6 rounded-3xl bg-[#0f1428]/80 border border-white/[0.08] backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-white tracking-wide flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  Shipping Address
                </h3>
                <button
                  onClick={() => setShowAddressModal(true)}
                  className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" /> Add New Address
                </button>
              </div>

              {/* Selected Address Display Card (Matches screenshot John Doe card) */}
              <div className="p-4 rounded-2xl bg-[#141b36] border border-purple-500/30 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white">{activeAddress?.name || 'John Doe'}</span>
                    <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full font-semibold">
                      Default
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    {activeAddress?.street || '123 Fashion Street, New York, NY 10001'}
                  </p>
                </div>
                <button
                  onClick={() => setShowAddressModal(true)}
                  className="text-xs text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-1"
                >
                  <Edit3 className="w-3.5 h-3.5" /> Edit
                </button>
              </div>
            </div>

            {/* Payment Method Section (FR-CHK-04, FR-CHK-05) */}
            <div className="p-6 rounded-3xl bg-[#0f1428]/80 border border-white/[0.08] backdrop-blur-xl">
              <h3 className="text-sm font-bold text-white tracking-wide mb-4 flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-cyan-400" />
                Payment Method
              </h3>

              <div className="space-y-3">
                
                {/* 1. Credit / Debit Card */}
                <label
                  onClick={() => setSelectedPaymentMethod('card')}
                  className={`p-4 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                    selectedPaymentMethod === 'card'
                      ? 'bg-[#141b36] border-purple-500/50 shadow-glow-purple'
                      : 'bg-[#10152a] border-white/[0.06] hover:border-white/[0.15]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={selectedPaymentMethod === 'card'}
                      onChange={() => setSelectedPaymentMethod('card')}
                      className="accent-purple-600"
                    />
                    <div>
                      <span className="text-xs font-bold text-white block">Credit / Debit Card</span>
                      <span className="text-[11px] text-slate-400">Instant encrypted authorization</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-blue-600/80 text-[10px] font-black text-white">VISA</span>
                    <span className="px-2 py-0.5 rounded bg-amber-600/80 text-[10px] font-black text-white">MC</span>
                  </div>
                </label>

                {/* Card input fields when card is selected */}
                {selectedPaymentMethod === 'card' && (
                  <div className="p-4 rounded-2xl bg-[#0b0e1e] border border-white/[0.06] space-y-3 animate-in fade-in">
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">Card Number</label>
                      <input
                        type="text"
                        value={cardData.cardNumber}
                        onChange={(e) => setCardData({ ...cardData, cardNumber: e.target.value })}
                        placeholder="4242 •••• •••• 4242"
                        className="w-full bg-[#12172d] border border-white/[0.1] rounded-xl px-3 py-2 text-xs text-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] text-slate-400 block mb-1">Expiry Date</label>
                        <input
                          type="text"
                          value={cardData.expiry}
                          onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                          placeholder="MM/YY"
                          className="w-full bg-[#12172d] border border-white/[0.1] rounded-xl px-3 py-2 text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-slate-400 block mb-1">CVV</label>
                        <input
                          type="password"
                          value={cardData.cvv}
                          onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                          placeholder="•••"
                          maxLength={4}
                          className="w-full bg-[#12172d] border border-white/[0.1] rounded-xl px-3 py-2 text-xs text-white"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. UPI (FR-CHK-04 for Indian market / global) */}
                <label
                  onClick={() => setSelectedPaymentMethod('upi')}
                  className={`p-4 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                    selectedPaymentMethod === 'upi'
                      ? 'bg-[#141b36] border-purple-500/50 shadow-glow-purple'
                      : 'bg-[#10152a] border-white/[0.06] hover:border-white/[0.15]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={selectedPaymentMethod === 'upi'}
                      onChange={() => setSelectedPaymentMethod('upi')}
                      className="accent-purple-600"
                    />
                    <div>
                      <span className="text-xs font-bold text-white block">UPI (Unified Payments Interface)</span>
                      <span className="text-[11px] text-slate-400">Google Pay, PhonePe, Paytm or VPA</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400">Instant</span>
                </label>

                {selectedPaymentMethod === 'upi' && (
                  <div className="p-4 rounded-2xl bg-[#0b0e1e] border border-white/[0.06] animate-in fade-in">
                    <label className="text-[11px] text-slate-400 block mb-1">Enter UPI ID / VPA</label>
                    <input
                      type="text"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      placeholder="username@okaxis or mobile@upi"
                      className="w-full bg-[#12172d] border border-white/[0.1] rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>
                )}

                {/* 3. PayPal */}
                <label
                  onClick={() => setSelectedPaymentMethod('paypal')}
                  className={`p-4 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                    selectedPaymentMethod === 'paypal'
                      ? 'bg-[#141b36] border-purple-500/50 shadow-glow-purple'
                      : 'bg-[#10152a] border-white/[0.06] hover:border-white/[0.15]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={selectedPaymentMethod === 'paypal'}
                      onChange={() => setSelectedPaymentMethod('paypal')}
                      className="accent-purple-600"
                    />
                    <div>
                      <span className="text-xs font-bold text-white block">PayPal</span>
                      <span className="text-[11px] text-slate-400">Connect to your PayPal balance</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-sky-400">PayPal</span>
                </label>

                {/* 4. Cash on Delivery (COD - FR-CHK-11) */}
                <label
                  onClick={() => setSelectedPaymentMethod('cod')}
                  className={`p-4 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                    selectedPaymentMethod === 'cod'
                      ? 'bg-[#141b36] border-purple-500/50 shadow-glow-purple'
                      : 'bg-[#10152a] border-white/[0.06] hover:border-white/[0.15]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={selectedPaymentMethod === 'cod'}
                      onChange={() => setSelectedPaymentMethod('cod')}
                      className="accent-purple-600"
                    />
                    <div>
                      <span className="text-xs font-bold text-white block">Cash on Delivery</span>
                      <span className="text-[11px] text-slate-400">Pay cash upon courier arrival</span>
                    </div>
                  </div>
                  <Banknote className="w-4 h-4 text-slate-400" />
                </label>

              </div>
            </div>

          </div>

          {/* Right: Sticky Order Summary (Matches Mock-up Screen 5) */}
          <div className="lg:col-span-4">
            <div className="bg-[#10152b]/95 border border-white/[0.08] rounded-3xl p-6 shadow-2xl backdrop-blur-xl space-y-5">
              <h2 className="text-base font-extrabold text-white tracking-wide border-b border-white/[0.08] pb-4">
                Order Summary
              </h2>

              {/* Items Preview */}
              <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
                {cart.length > 0 ? (
                  cart.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name} 
                          className="w-10 h-10 object-contain rounded-lg bg-black/40 p-1 border border-white/[0.04]" 
                        />
                        <div className="truncate">
                          <p className="font-semibold text-white truncate">{item.product.name}</p>
                          <p className="text-[11px] text-slate-400">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <span className="font-bold text-white">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="flex items-center gap-3">
                    <img src="/assets/products/sony_headphones_glow.png" alt="Headphones" className="w-10 h-10 object-contain" />
                    <div>
                      <p className="text-xs font-bold text-white">Sony WH-1000XM5</p>
                      <p className="text-[11px] text-slate-400">$349</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Pricing Breakdown */}
              <div className="space-y-2.5 text-xs text-slate-300 pt-3 border-t border-white/[0.08]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-white">
                    ${(cartSubtotal || 349).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-semibold text-cyan-400">
                    {shippingFee === 0 ? 'Free' : `$${shippingFee}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (8%)</span>
                  <span className="font-semibold text-white">
                    ${(taxFee || 27.92).toFixed(2)}
                  </span>
                </div>
                <div className="pt-3 border-t border-white/[0.08] flex justify-between text-base font-extrabold text-white">
                  <span>Total</span>
                  <span className="text-lg text-purple-300">
                    ${(cartTotal || 376.92).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Primary Place Order Button (FR-CHK-08) */}
              <button
                onClick={handlePlaceOrderSubmit}
                className="btn-neon-purple w-full py-3.5 px-6 rounded-2xl text-white text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-glow-purple"
              >
                <span>Place Order</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <Lock className="w-3.5 h-3.5 text-purple-400" />
                <span>Protected by TLS 1.3 Encryption</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Add Address Modal */}
      {showAddressModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-[#10152c] border border-purple-500/30 rounded-3xl p-6 shadow-2xl">
            <h3 className="text-base font-bold text-white mb-2">Delivery Address</h3>
            <p className="text-xs text-slate-400 mb-4">Enter shipping destination details.</p>

            <form onSubmit={handleCreateAddress} className="space-y-3 text-xs">
              <div>
                <label className="text-slate-300 block mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={newAddressForm.name}
                  onChange={(e) => setNewAddressForm({ ...newAddressForm, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-[#151c36] border border-white/[0.1] rounded-xl px-3 py-2 text-white outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-slate-300 block mb-1">Street Address</label>
                <input
                  type="text"
                  required
                  value={newAddressForm.street}
                  onChange={(e) => setNewAddressForm({ ...newAddressForm, street: e.target.value })}
                  placeholder="123 Fashion Street, Apt 4B"
                  className="w-full bg-[#151c36] border border-white/[0.1] rounded-xl px-3 py-2 text-white outline-none focus:border-purple-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-300 block mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={newAddressForm.city}
                    onChange={(e) => setNewAddressForm({ ...newAddressForm, city: e.target.value })}
                    placeholder="New York"
                    className="w-full bg-[#151c36] border border-white/[0.1] rounded-xl px-3 py-2 text-white outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="text-slate-300 block mb-1">State / Province</label>
                  <input
                    type="text"
                    required
                    value={newAddressForm.state}
                    onChange={(e) => setNewAddressForm({ ...newAddressForm, state: e.target.value })}
                    placeholder="NY"
                    className="w-full bg-[#151c36] border border-white/[0.1] rounded-xl px-3 py-2 text-white outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-300 block mb-1">Postal Code</label>
                  <input
                    type="text"
                    required
                    value={newAddressForm.postalCode}
                    onChange={(e) => setNewAddressForm({ ...newAddressForm, postalCode: e.target.value })}
                    placeholder="10001"
                    className="w-full bg-[#151c36] border border-white/[0.1] rounded-xl px-3 py-2 text-white outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="text-slate-300 block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={newAddressForm.phone}
                    onChange={(e) => setNewAddressForm({ ...newAddressForm, phone: e.target.value })}
                    placeholder="+1 (555) 234-5678"
                    className="w-full bg-[#151c36] border border-white/[0.1] rounded-xl px-3 py-2 text-white outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowAddressModal(false)}
                  className="px-4 py-2 rounded-xl text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold shadow-glow-purple"
                >
                  Save Address
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Order Confirmation Success Modal (FR-CHK-08, FR-CHK-09) */}
      {confirmedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="w-full max-w-md bg-[#10152c] border border-purple-500/40 rounded-3xl p-6 sm:p-8 text-center shadow-2xl glow-ring-purple animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(16,185,129,0.4)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-black text-white">Order Confirmed!</h3>
            <p className="text-xs text-slate-300 mt-1">
              Thank you for shopping with ShopNext. Your payment has been authorized.
            </p>

            <div className="my-5 p-4 rounded-2xl bg-[#141b36] border border-white/[0.08] text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">Order ID:</span>
                <span className="font-mono font-bold text-purple-300">{confirmedOrder.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Total Paid:</span>
                <span className="font-bold text-white">${confirmedOrder.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Estimated Delivery:</span>
                <span className="font-semibold text-emerald-400">2-3 Business Days</span>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setConfirmedOrder(null);
                  navigateTo('userDashboard');
                }}
                className="btn-neon-purple w-full py-3 rounded-xl text-xs font-bold text-white shadow-glow-purple cursor-pointer"
              >
                View in Dashboard
              </button>
              <button
                onClick={() => {
                  setConfirmedOrder(null);
                  navigateTo('listing');
                }}
                className="w-full py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-semibold text-slate-300 hover:text-white transition-colors"
              >
                Continue Browsing
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
