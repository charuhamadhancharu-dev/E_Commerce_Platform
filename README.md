# ShopNext — Futuristic E-Commerce Platform

A production-grade, pixel-perfect web storefront, customer dashboard, and administrative console built strictly to the **ShopNext Software Requirements Specification (SRS v1.0)** and replicating the **ShopNext Futuristic E-Commerce UI Showcase** design board.

![ShopNext Design Board Showcase](ShopNext%20Futuristic%20E-Commerce%20UI%20Showcase%20(1).png)

---

## 🚀 Live Server
The application is running live at:
- **Local:** [http://localhost:3000](http://localhost:3000)

---

## 🎨 Implemented Screens & Feature Coverage

### 1. Landing Page (`FR-LAND-01` to `07`)
- **Global Glassmorphic Navbar**: Brand logo, menus (Shop, Categories, Deals, Components), search with auto-complete suggestions (2+ characters), wishlist count badge, notification drawer, cart badge, and user avatar menu.
- **Hero Section**: Futuristic 3D floating spatial earbuds with neon purple ambient glow rings, "Elevate Your Style - Shop the Future" typography, "Shop Now" primary CTA, and "Watch Video" modal launcher.
- **Value Proposition Strip**: Free Express Shipping (over $50), Easy 30-Day Returns, and 100% Secure Payment badges with icons.
- **Top Categories**: 6 glassmorphic interactive cards (Electronics, Fashion, Home & Living, Beauty, Sports, Toys & Games) linking directly to pre-filtered catalog views.
- **Trending Releases Carousel**: Live product spotlights with star ratings, discount tags, and quick-add actions.

### 2. Product Listing / Catalogue (`FR-PLP-01` to `10`)
- **Interactive Filters Sidebar**:
  - Category multi-select with live product counts.
  - Dual price slider ($0 – $1,500) with instant filtering.
  - Interactive color swatch selectors (Cyan, Emerald, Purple, Indigo, Amber, Rose, Onyx).
  - Brand checkboxes (Apple, Nike, Sony, Gucci, ShopNext, HomeLuxe).
  - One-click "Clear All Filters" reset action.
- **Results Toolbar**: Live result counts ("Showing 1-12 of 324 products"), sort dropdown (Popularity, Price: Low-High, Price: High-Low, Highest Rated), and Layout View switcher (Grid vs. List).
- **Product Cards**: High-res cropped product assets, discount badges (-20%), interactive wishlist heart toggle, star ratings with review counts, current vs. struck-through price, and "Add to Cart" button.

### 3. Product Details (`FR-PDP-01` to `10`)
- **Breadcrumb Trail**: `Home > Category > Subcategory` dynamic navigation.
- **Image Gallery**: Vertical multi-thumbnail list with zoom/switch and large main image with glowing purple aura on pedestal.
- **Product Information**: Automatic discount percentage calculation (e.g., 13% OFF on $349 vs $399), title, rating, stock status, and color variant selector.
- **Actions**: Quantity counter (`[-] 1 [+]`), "Add to Cart" (with toast alert), and "Buy Now" (instant bypass to Checkout step).
- **Service Highlights**: Free Shipping, 2-Year Warranty, and Easy Returns badges.
- **Tabbed Specifications & Reviews**: Full markdown description, specifications table, verified customer reviews, and interactive "Write a Review" submission modal.

### 4. Shopping Cart (`FR-CART-01` to `09`)
- **Cart Item Management**: Line items matching the design board (Sony WH-1000XM5, Nike Air Max 270, Apple Watch Series 9) with quantity steppers (`[-] qty [+]`) and item removal trash action.
- **Order Summary**: Real-time reactive recalculation of Subtotal, Free Shipping threshold detection ($50+), Tax calculation (8%), and Total.
- **Promo Coupon System**: Working promo codes (`SHOP20` for 20% off, `FUTURISTIC` for 15% off) with instant discount recalculation.
- **"You May Also Like" Carousel**: Intelligent related product recommendations.

### 5. Checkout Flow (`FR-CHK-01` to `12`)
- **3-Step Progress Stepper**: 1. Shipping → 2. Payment → 3. Review.
- **Shipping Address Book**: Active address card ("John Doe, 123 Fashion Street, New York, NY 10001"), edit capability, and "+ Add New Address" modal with full address validation.
- **Payment Method Selection**: Selectable options for Credit/Debit Card (Visa/Mastercard with card inputs), UPI (Unified Payments Interface with VPA validation), PayPal, and Cash on Delivery (COD).
- **Atomic Order Placement**: "Place Order" button creates orders atomically, clears cart, deducts stock, and renders an animated Order Confirmation Modal with generated Order ID, delivery timeline, and dashboard link.

### 6. Authentication (`FR-AUTH-01` to `09`)
- **Split Futuristic Layout**:
  - Left panel: "Welcome Back!" heading, benefits checklist (personalized recommendations, order tracking, exclusive deals), and 3D floating shopping bag / cyber assets.
  - Right panel: Tabbed [ Login ] / [ Register ] interface.
- **Features**: Email & password inputs, show/hide password toggle, live password strength meter, "Forgot Password?" email link modal, and social sign-in buttons (Google, Apple, Facebook).

### 7. User Dashboard (`FR-USR-01` to `08`)
- **User Sidebar**: User profile avatar badge ("John Doe, john@example.com"), navigation (Dashboard, Orders, Wishlist, Addresses, Settings, Logout).
- **Header**: "My Dashboard" title and interactive Dark / Light Mode toggle switch.
- **Summary Metric Tiles**: Total Orders (12), Wishlist Items (8), Total Spent ($1,248).
- **Recent Orders List**: Orders matching the mock-up (Nike Air Max 270, Sony WH-1000XM5) with "Delivered" badge, invoice download, and order details.
- **Special Offer Card**: Glowing purple promo card ("Get 20% OFF on your next order!") with direct shop CTA.
- **Sub-Tabs**: Complete management for Orders, Wishlist (with Move-to-Cart), Delivery Addresses, and Profile Settings.

### 8. Admin Dashboard (`FR-ADM-01` to `11`)
- **Admin Sidebar & Header**: "ShopNext Admin" branding, navigation tabs, global search bar, notification bell, and admin profile.
- **KPI Metrics**: Total Revenue ($24,780, +12.5%), Total Orders (1,248, +8.2%), Active Users (8,942, +14.1%), Conversion Rate (3.24%, +1.5%).
- **Revenue Overview Line Chart**: Interactive periods (1M, 3M, 1Y) with SVG glowing purple bezier curves and monthly trend data points.
- **Top Products Table**: Wireless Headphones ($12,460), Smart Watch ($10,240), Sneakers ($8,920) with revenue progress indicators.
- **Admin Management Modules**:
  - **Products Module**: Add new product modal, delete product, view stock and pricing.
  - **Orders Module**: View incoming orders, change order status (Pending → Processing → Shipped → Delivered → Cancelled).
  - **Users Module**: Manage user roles and active status.
  - **Marketing Module**: View and manage promotional coupon campaigns.

### 9. Shared UI Component Library (SRS 3.9)
- Bottom-right showcase section with "Modern • Fast • Secure • Scalable" badge.
- Interactive live demos for all 12 core design system components:
  1. Navbar
  2. Search (with auto-suggest)
  3. Product Card
  4. Category Card
  5. Review Card
  6. Modal Dialog
  7. Toast Notifications
  8. Dropdown Menu
  9. Loading Skeleton
  10. Form Validation
  11. Pagination
  12. Theme Toggle (Dark & Light Mode)

---

## 🛠 Tech Stack
- **Frontend Framework:** React 18
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS with custom cyberpunk/futuristic color palette, glassmorphism, and neon glow rings
- **Icons:** Lucide React
- **Typography:** Plus Jakarta Sans & Inter
