import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  PRODUCTS, 
  CATEGORIES, 
  INITIAL_CART, 
  INITIAL_WISHLIST, 
  INITIAL_USER, 
  INITIAL_ADDRESSES, 
  RECENT_ORDERS,
  COUPONS
} from '../data/mockData';

const ShopContext = createContext(null);

export const ShopProvider = ({ children }) => {
  // Navigation State
  const [currentScreen, setCurrentScreen] = useState('landing'); // landing, listing, details, cart, checkout, auth, userDashboard, adminDashboard, components
  const [selectedProductId, setSelectedProductId] = useState('sony-wh-1000xm5');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Theme state: dark / light (defaults to dark matching mock-up)
  const [theme, setTheme] = useState('dark');
  
  // Modal & Video state
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  
  // Cart state
  const [cart, setCart] = useState(INITIAL_CART);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  
  // Wishlist state
  const [wishlist, setWishlist] = useState(INITIAL_WISHLIST);
  
  // Auth & User state
  const [user, setUser] = useState(INITIAL_USER);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  
  // Addresses & Orders
  const [addresses, setAddresses] = useState(INITIAL_ADDRESSES);
  const [orders, setOrders] = useState(RECENT_ORDERS);
  const [checkoutStep, setCheckoutStep] = useState(1); // 1: Shipping, 2: Payment, 3: Review
  const [selectedAddressId, setSelectedAddressId] = useState('addr-1');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card'); // 'card', 'upi', 'paypal', 'cod'
  
  // Admin Data states (dynamic CRUD)
  const [productsList, setProductsList] = useState(PRODUCTS);
  const [adminActiveTab, setAdminActiveTab] = useState('dashboard'); // dashboard, products, orders, users, analytics, marketing, settings
  const [userActiveTab, setUserActiveTab] = useState('dashboard'); // dashboard, orders, wishlist, addresses, settings
  
  // Toast notifications
  const [toasts, setToasts] = useState([]);

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const addToast = (type, title, message) => {
    const id = Date.now() + Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, type, title, message }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Cart operations
  const addToCart = (product, quantity = 1, color = null) => {
    const chosenColor = color || (product.colors && product.colors[0]?.name) || 'Standard';
    setCart(prev => {
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.selectedColor === chosenColor
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prev, { product, quantity, selectedColor: chosenColor }];
      }
    });
    addToast('success', 'Added to Cart', `${product.name} (${chosenColor}) was added to your bag.`);
  };

  const updateQuantity = (productId, color, delta) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.product.id === productId && item.selectedColor === color) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const removeFromCart = (productId, color) => {
    setCart(prev => prev.filter(item => !(item.product.id === productId && item.selectedColor === color)));
    addToast('info', 'Item Removed', 'The item was removed from your cart.');
  };

  const clearCart = () => {
    setCart([]);
  };

  // Cart Financials
  const cartSubtotal = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const freeShippingThreshold = 50;
  const shippingFee = cartSubtotal >= freeShippingThreshold || cartSubtotal === 0 ? 0 : 15;
  const discountAmount = appliedCoupon 
    ? (appliedCoupon.discountPercent ? (cartSubtotal * appliedCoupon.discountPercent / 100) : appliedCoupon.discountFixed || 0)
    : 0;
  const taxableAmount = Math.max(0, cartSubtotal - discountAmount);
  // 8% tax as evidenced in mock-up ($70.16 tax on $877 subtotal = 8%)
  const taxFee = taxableAmount > 0 ? parseFloat((taxableAmount * 0.08).toFixed(2)) : 0;
  const cartTotal = parseFloat((taxableAmount + shippingFee + taxFee).toFixed(2));

  // Wishlist operations
  const toggleWishlist = (productId) => {
    setWishlist(prev => {
      const exists = prev.includes(productId);
      const prod = productsList.find(p => p.id === productId);
      if (exists) {
        addToast('info', 'Removed from Wishlist', `${prod?.name || 'Product'} was removed from your wishlist.`);
        return prev.filter(id => id !== productId);
      } else {
        addToast('success', 'Saved to Wishlist', `${prod?.name || 'Product'} was saved to your wishlist.`);
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId) => wishlist.includes(productId);

  // Address operations
  const addAddress = (newAddr) => {
    const id = 'addr-' + Date.now();
    const entry = { ...newAddr, id, isDefault: addresses.length === 0 };
    setAddresses(prev => [...prev, entry]);
    addToast('success', 'Address Saved', 'New delivery address has been added.');
    return id;
  };

  const updateAddress = (id, updated) => {
    setAddresses(prev => prev.map(a => a.id === id ? { ...a, ...updated } : a));
    addToast('success', 'Address Updated', 'Delivery address updated successfully.');
  };

  const deleteAddress = (id) => {
    setAddresses(prev => prev.filter(a => a.id !== id));
    addToast('info', 'Address Deleted', 'Delivery address removed.');
  };

  const setDefaultAddress = (id) => {
    setAddresses(prev => prev.map(a => ({ ...a, isDefault: a.id === id })));
    setSelectedAddressId(id);
    addToast('success', 'Default Address', 'Default shipping address updated.');
  };

  // Order Placement
  const placeOrder = (paymentDetails = {}) => {
    const activeAddress = addresses.find(a => a.id === selectedAddressId) || addresses[0];
    const newOrder = {
      id: 'ORD-' + Math.floor(10000 + Math.random() * 90000),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'Processing',
      statusColor: 'amber',
      items: [...cart],
      subtotal: cartSubtotal,
      shipping: shippingFee,
      tax: taxFee,
      discount: discountAmount,
      total: cartTotal,
      shippingAddress: `${activeAddress?.street || '123 Fashion Street'}, ${activeAddress?.city || 'New York'}, ${activeAddress?.state || 'NY'} ${activeAddress?.postalCode || '10001'}`,
      paymentMethod: selectedPaymentMethod === 'card' 
        ? `Credit Card (Visa •••• ${paymentDetails.cardNumber ? paymentDetails.cardNumber.slice(-4) : '4242'})`
        : selectedPaymentMethod === 'upi'
        ? `UPI (${paymentDetails.upiId || 'john@okaxis'})`
        : selectedPaymentMethod === 'paypal'
        ? 'PayPal Express'
        : 'Cash on Delivery (COD)'
    };

    setOrders(prev => [newOrder, ...prev]);
    clearCart();
    setCheckoutStep(1);
    addToast('success', 'Order Confirmed!', `Order ${newOrder.id} placed successfully.`);
    return newOrder;
  };

  // Auth Operations
  const login = (email, password) => {
    setIsAuthenticated(true);
    setUser(INITIAL_USER);
    addToast('success', 'Welcome Back!', `Signed in as ${INITIAL_USER.name}`);
    setCurrentScreen('landing');
  };

  const register = (name, email, password) => {
    const newUser = {
      ...INITIAL_USER,
      name: name || 'Valued Customer',
      email: email || 'user@shopnext.com'
    };
    setIsAuthenticated(true);
    setUser(newUser);
    addToast('success', 'Account Created', `Welcome to ShopNext, ${newUser.name}!`);
    setCurrentScreen('landing');
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    addToast('info', 'Logged Out', 'You have been safely signed out.');
    setCurrentScreen('landing');
  };

  // Navigation Helper
  const navigateTo = (screen, productId = null, category = null) => {
    if (productId) setSelectedProductId(productId);
    if (category) setActiveCategory(category);
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Admin Actions
  const addProduct = (productData) => {
    const newProd = {
      ...productData,
      id: 'prod-' + Date.now(),
      rating: 5.0,
      reviewsCount: 1,
      inStock: true
    };
    setProductsList(prev => [newProd, ...prev]);
    addToast('success', 'Product Added', `Added ${newProd.name} to catalogue.`);
  };

  const updateProduct = (id, updatedData) => {
    setProductsList(prev => prev.map(p => p.id === id ? { ...p, ...updatedData } : p));
    addToast('success', 'Product Updated', `Updated product details.`);
  };

  const deleteProduct = (id) => {
    const prod = productsList.find(p => p.id === id);
    setProductsList(prev => prev.filter(p => p.id !== id));
    addToast('info', 'Product Removed', `Removed ${prod?.name || 'Product'} from catalogue.`);
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prev => prev.map(o => {
      if (o.id === orderId) {
        let statusColor = 'amber';
        if (newStatus === 'Delivered') statusColor = 'green';
        if (newStatus === 'Shipped') statusColor = 'blue';
        if (newStatus === 'Cancelled') statusColor = 'red';
        return { ...o, status: newStatus, statusColor };
      }
      return o;
    }));
    addToast('success', 'Order Updated', `Order ${orderId} marked as ${newStatus}.`);
  };

  const applyCouponCode = (code) => {
    const clean = code.trim().toUpperCase();
    const found = COUPONS.find(c => c.code === clean);
    if (found) {
      setAppliedCoupon(found);
      addToast('success', 'Coupon Applied', `${found.description}`);
      return true;
    } else {
      addToast('error', 'Invalid Coupon', 'The coupon code you entered is invalid or expired.');
      return false;
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    addToast('info', 'Coupon Removed', 'Discount has been removed.');
  };

  return (
    <ShopContext.Provider
      value={{
        // Screen & navigation
        currentScreen,
        setCurrentScreen,
        navigateTo,
        selectedProductId,
        setSelectedProductId,
        searchQuery,
        setSearchQuery,
        activeCategory,
        setActiveCategory,
        // Theme
        theme,
        toggleTheme,
        // Modals
        isVideoModalOpen,
        setIsVideoModalOpen,
        // Cart
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartSubtotal,
        freeShippingThreshold,
        shippingFee,
        discountAmount,
        taxFee,
        cartTotal,
        appliedCoupon,
        applyCouponCode,
        removeCoupon,
        // Wishlist
        wishlist,
        toggleWishlist,
        isInWishlist,
        // Auth
        user,
        setUser,
        isAuthenticated,
        login,
        register,
        logout,
        // Addresses & Checkout
        addresses,
        addAddress,
        updateAddress,
        deleteAddress,
        setDefaultAddress,
        checkoutStep,
        setCheckoutStep,
        selectedAddressId,
        setSelectedAddressId,
        selectedPaymentMethod,
        setSelectedPaymentMethod,
        placeOrder,
        orders,
        // Admin
        productsList,
        addProduct,
        updateProduct,
        deleteProduct,
        updateOrderStatus,
        adminActiveTab,
        setAdminActiveTab,
        userActiveTab,
        setUserActiveTab,
        // Toasts
        toasts,
        addToast,
        removeToast,
        // Categories reference
        categories: CATEGORIES
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
