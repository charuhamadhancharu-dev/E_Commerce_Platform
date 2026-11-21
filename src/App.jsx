import React from 'react';
import { useShop } from './context/ShopContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ToastContainer } from './components/common/ToastContainer';
import { VideoModal } from './components/common/VideoModal';
import { ShowcaseBanner } from './components/common/ShowcaseBanner';

// Screens
import { LandingScreen } from './components/screens/LandingScreen';
import { ListingScreen } from './components/screens/ListingScreen';
import { ProductDetailsScreen } from './components/screens/ProductDetailsScreen';
import { CartScreen } from './components/screens/CartScreen';
import { CheckoutScreen } from './components/screens/CheckoutScreen';
import { AuthScreen } from './components/screens/AuthScreen';
import { UserDashboardScreen } from './components/screens/UserDashboardScreen';
import { AdminDashboardScreen } from './components/screens/AdminDashboardScreen';
import { ComponentsShowcaseScreen } from './components/screens/ComponentsShowcaseScreen';

function AppContent() {
  const { currentScreen } = useShop();

  const renderActiveScreen = () => {
    switch (currentScreen) {
      case 'landing':
        return <LandingScreen />;
      case 'listing':
        return <ListingScreen />;
      case 'details':
        return <ProductDetailsScreen />;
      case 'cart':
        return <CartScreen />;
      case 'checkout':
        return <CheckoutScreen />;
      case 'auth':
        return <AuthScreen />;
      case 'userDashboard':
        return <UserDashboardScreen />;
      case 'adminDashboard':
        return <AdminDashboardScreen />;
      case 'components':
        return <ComponentsShowcaseScreen />;
      default:
        return <LandingScreen />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#090b14] text-slate-100">
      {/* Top Interactive Showcase Bar for effortless switching between mock-up screens */}
      <ShowcaseBanner />

      {/* Main Global Navigation */}
      <Navbar />

      {/* Screen Render Container */}
      <div className="flex-1">
        {renderActiveScreen()}
      </div>

      {/* Global Footer */}
      <Footer />

      {/* Global Toast Notifications */}
      <ToastContainer />

      {/* Video Modal */}
      <VideoModal />
    </div>
  );
}

export default function App() {
  return <AppContent />;
}
