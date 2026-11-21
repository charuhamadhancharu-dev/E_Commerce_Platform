// Mock dataset adhering strictly to ShopNext SRS and UI Showcase Mock-up

export const CATEGORIES = [
  {
    id: 'electronics',
    name: 'Electronics',
    count: 120,
    icon: 'Headphones',
    image: '/assets/products/sony_headphones_glow.png',
    description: 'High-performance audio, laptops, smartwatches & tech gear'
  },
  {
    id: 'fashion',
    name: 'Fashion',
    count: 98,
    icon: 'Shirt',
    image: '/assets/products/nike.png',
    description: 'Futuristic streetwear, sneakers & luxury apparel'
  },
  {
    id: 'home-living',
    name: 'Home & Living',
    count: 76,
    icon: 'Armchair',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&q=80',
    description: 'Minimalist furniture, smart home lighting & decor'
  },
  {
    id: 'beauty',
    name: 'Beauty',
    count: 52,
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=400&q=80',
    description: 'Skincare essentials, luxury fragrances & cosmetics'
  },
  {
    id: 'sports',
    name: 'Sports',
    count: 64,
    icon: 'Dumbbell',
    image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=400&q=80',
    description: 'Performance training gear, balls & athletic equipment'
  },
  {
    id: 'toys-games',
    name: 'Toys & Games',
    count: 45,
    icon: 'Gamepad2',
    image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=400&q=80',
    description: 'Next-gen gaming accessories, collectibles & VR headsets'
  }
];

export const PRODUCTS = [
  {
    id: 'sony-wh-1000xm5',
    name: 'Sony WH-1000XM5 Wireless Headphones',
    subtitle: 'Wireless Headphones',
    category: 'Electronics',
    subcategory: 'Headphones',
    brand: 'Sony',
    price: 349,
    originalPrice: 399,
    discountBadge: '13% OFF',
    rating: 4.8,
    reviewsCount: 12534,
    inStock: true,
    stockCount: 42,
    featured: true,
    image: '/assets/products/sony_headphones_glow.png',
    thumbnails: [
      '/assets/products/sony_headphones_glow.png',
      '/assets/products/sony_small.png',
      '/assets/products/hero_earbuds.png',
      '/assets/products/sony_headphones_glow.png'
    ],
    colors: [
      { name: 'Midnight Black', hex: '#0f172a', bg: 'bg-slate-900' },
      { name: 'Cyber Violet', hex: '#8b5cf6', bg: 'bg-purple-600' },
      { name: 'Pure White', hex: '#f8fafc', bg: 'bg-slate-100' }
    ],
    description: 'Industry-leading noise cancellation, superior sound quality and all-day comfort. Equipped with two processors and 8 microphones for astonishing audio clarity and crystal-clear hands-free calls.',
    highlights: ['Free Shipping', '2 Year Warranty', 'Easy Returns'],
    specifications: [
      { label: 'Driver Unit', value: '30mm, Dome type (CCAW Voice coil)' },
      { label: 'Frequency Response', value: '4 Hz - 40,000 Hz' },
      { label: 'Battery Life', value: 'Up to 30 hours (ANC On), 40 hrs (ANC Off)' },
      { label: 'Connectivity', value: 'Bluetooth 5.2, Multipoint connection, 3.5mm jack' },
      { label: 'Weight', value: '250 grams' },
      { label: 'Fast Charging', value: '3 min charge gives 3 hours playback' }
    ],
    reviews: [
      {
        id: 'rev-1',
        author: 'Alex Rivera',
        rating: 5,
        date: 'Nov 12, 2026',
        verified: true,
        comment: 'Best ANC headphones on the market. The comfort is top tier and battery lasts forever!',
        helpful: 234
      },
      {
        id: 'rev-2',
        author: 'Sarah Chen',
        rating: 5,
        date: 'Oct 28, 2026',
        verified: true,
        comment: 'The soundstage is super balanced and the futuristic design in matte black is gorgeous.',
        helpful: 156
      },
      {
        id: 'rev-3',
        author: 'Marcus Vance',
        rating: 4,
        date: 'Sep 19, 2026',
        verified: true,
        comment: 'Call quality is drastically improved from the XM4. Slightly bulky case, but headphones are light.',
        helpful: 89
      }
    ]
  },
  {
    id: 'macbook-air-m2',
    name: 'MacBook Air M2',
    subtitle: 'Ultra Light Laptop',
    category: 'Electronics',
    subcategory: 'Laptops',
    brand: 'Apple',
    price: 1199,
    originalPrice: 1499,
    discountBadge: '-20%',
    rating: 4.8,
    reviewsCount: 12100,
    inStock: true,
    stockCount: 18,
    featured: true,
    image: '/assets/products/macbook.png',
    thumbnails: [
      '/assets/products/macbook.png',
      '/assets/products/macbook.png'
    ],
    colors: [
      { name: 'Midnight', hex: '#1e293b', bg: 'bg-slate-800' },
      { name: 'Space Gray', hex: '#475569', bg: 'bg-slate-600' },
      { name: 'Starlight', hex: '#fef08a', bg: 'bg-amber-100' }
    ],
    description: 'Redesigned around the next-generation M2 chip, MacBook Air is strikingly thin and brings exceptional speed and power efficiency inside its durable all-aluminum enclosure.',
    highlights: ['Free Shipping', '1 Year AppleCare', '30 Days Return'],
    specifications: [
      { label: 'Processor', value: 'Apple M2 8-core CPU / 10-core GPU' },
      { label: 'Memory', value: '16GB Unified Memory' },
      { label: 'Storage', value: '512GB Superfast SSD' },
      { label: 'Display', value: '13.6-inch Liquid Retina display with True Tone' },
      { label: 'Weight', value: '1.24 kg (2.7 pounds)' }
    ]
  },
  {
    id: 'nike-air-max-270',
    name: 'Nike Air Max 270',
    subtitle: 'Running Shoes',
    category: 'Fashion',
    subcategory: 'Shoes',
    brand: 'Nike',
    price: 129,
    originalPrice: 160,
    discountBadge: '-19%',
    rating: 4.7,
    reviewsCount: 9140,
    inStock: true,
    stockCount: 26,
    featured: true,
    image: '/assets/products/nike.png',
    thumbnails: [
      '/assets/products/nike.png',
      '/assets/products/sneakers_purple.png'
    ],
    colors: [
      { name: 'White / Hyper Violet', hex: '#a855f7', bg: 'bg-purple-500' },
      { name: 'Black Anthracite', hex: '#0f172a', bg: 'bg-slate-900' }
    ],
    description: 'Nike Air Max 270 delivers unmatched, all-day comfort with a huge Max Air unit in the heel and a breathable engineered mesh upper with sleek neon futuristic accents.',
    highlights: ['Free Shipping', 'Authenticity Guaranteed', '30 Days Return'],
    specifications: [
      { label: 'Heel Air Unit', value: '270-degree Max Air technology' },
      { label: 'Upper', value: 'Engineered mesh with synthetic overlays' },
      { label: 'Outsole', value: 'Dual-density foam with high traction rubber' }
    ]
  },
  {
    id: 'apple-watch-s9',
    name: 'Apple Watch Series 9',
    subtitle: 'Smartwatch',
    category: 'Electronics',
    subcategory: 'Wearables',
    brand: 'Apple',
    price: 399,
    originalPrice: 450,
    discountBadge: '-11%',
    rating: 4.9,
    reviewsCount: 14200,
    inStock: true,
    stockCount: 30,
    featured: true,
    image: '/assets/products/smartwatch.png',
    thumbnails: [
      '/assets/products/smartwatch.png'
    ],
    colors: [
      { name: 'Midnight Aluminum', hex: '#020617', bg: 'bg-black' },
      { name: 'Silver Glow', hex: '#e2e8f0', bg: 'bg-slate-200' }
    ],
    description: 'Smarter, brighter, and mightier. Featuring the S9 SiP for a magical double tap gesture, an edge-to-edge Always-On Retina display, and advanced cardiovascular sensor monitoring.',
    highlights: ['Free Shipping', '2 Year Warranty', 'Instant Sync'],
    specifications: [
      { label: 'Case Size', value: '45mm OLED Always-On' },
      { label: 'Sensors', value: 'Blood Oxygen, ECG, Temperature sensing' },
      { label: 'Water Resistance', value: '50m swimproof' }
    ]
  },
  {
    id: 'designer-leather-bag',
    name: 'Designer Leather Handbag',
    subtitle: 'Luxury Structured Bag',
    category: 'Fashion',
    subcategory: 'Bags',
    brand: 'Gucci',
    price: 249,
    originalPrice: 320,
    discountBadge: '-22%',
    rating: 4.9,
    reviewsCount: 5600,
    inStock: true,
    stockCount: 15,
    featured: true,
    image: '/assets/products/bag.png',
    thumbnails: [
      '/assets/products/bag.png'
    ],
    colors: [
      { name: 'Cognac Tan', hex: '#92400e', bg: 'bg-amber-800' },
      { name: 'Deep Onyx', hex: '#0f172a', bg: 'bg-slate-900' }
    ],
    description: 'Crafted from premium Italian grain leather with polished hardware accents, detachable shoulder strap, and multi-compartment interior for effortless elegance.',
    highlights: ['Free Shipping', 'Certificate of Authenticity', 'Lifetime Care'],
    specifications: [
      { label: 'Material', value: '100% Full-grain calfskin leather' },
      { label: 'Dimensions', value: '32cm x 24cm x 14cm' }
    ]
  },
  {
    id: 'retro-purple-sneakers',
    name: 'Retro High Purple Sneakers',
    subtitle: 'Streetwear Edition',
    category: 'Fashion',
    subcategory: 'Shoes',
    brand: 'Nike',
    price: 189,
    originalPrice: 220,
    discountBadge: '-14%',
    rating: 4.8,
    reviewsCount: 7800,
    inStock: true,
    stockCount: 19,
    featured: true,
    image: '/assets/products/sneakers_purple.png',
    thumbnails: [
      '/assets/products/sneakers_purple.png'
    ],
    colors: [
      { name: 'Neon Purple / White', hex: '#8b5cf6', bg: 'bg-purple-600' }
    ],
    description: 'Iconic retro high silhouette energized with electric violet colorblocking, padded collar, and durable cupsole construction with classic pivot circle traction.',
    highlights: ['Free Shipping', 'Limited Edition', 'Easy Returns'],
    specifications: [
      { label: 'Upper', value: 'Full leather and synthetic panels' },
      { label: 'Cushioning', value: 'Encapsulated Air-Sole unit' }
    ]
  },
  {
    id: 'cyberpods-pro-earbuds',
    name: 'ShopNext CyberPods Pro',
    subtitle: 'True Wireless Earbuds',
    category: 'Electronics',
    subcategory: 'Audio',
    brand: 'ShopNext',
    price: 179,
    originalPrice: 229,
    discountBadge: '-22%',
    rating: 4.9,
    reviewsCount: 18450,
    inStock: true,
    stockCount: 50,
    featured: true,
    image: '/assets/products/hero_earbuds.png',
    thumbnails: [
      '/assets/products/hero_earbuds.png'
    ],
    colors: [
      { name: 'Cyber Violet Neon', hex: '#a855f7', bg: 'bg-purple-600' },
      { name: 'Cosmic Black', hex: '#090b14', bg: 'bg-slate-900' }
    ],
    description: 'Step into the next dimension of sound. CyberPods Pro deliver 360° Spatial Audio with dynamic head tracking, active adaptive noise cancellation, and a glowing LED wireless charging case.',
    highlights: ['Free Shipping', '2 Year Warranty', 'Wireless Charging'],
    specifications: [
      { label: 'Audio Technology', value: 'Custom high-excursion Apple-grade driver' },
      { label: 'Battery Life', value: '8 hrs per charge, 36 hrs with charging case' },
      { label: 'Water Resistance', value: 'IPX4 sweat and water resistant' }
    ]
  },
  {
    id: 'modern-velvet-armchair',
    name: 'Modern Velvet Cyan Armchair',
    subtitle: 'Living Room Lounge Chair',
    category: 'Home & Living',
    subcategory: 'Furniture',
    brand: 'HomeLuxe',
    price: 499,
    originalPrice: 599,
    discountBadge: '-17%',
    rating: 4.7,
    reviewsCount: 3420,
    inStock: true,
    stockCount: 8,
    featured: false,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80'
    ],
    colors: [
      { name: 'Cyan Blue', hex: '#06b6d4', bg: 'bg-cyan-500' },
      { name: 'Emerald Velvet', hex: '#059669', bg: 'bg-emerald-600' }
    ],
    description: 'Elevate your sanctuary with rich velvet upholstery, ergonomic deep contours, and brushed gold metallic stiletto legs.',
    highlights: ['White Glove Delivery', '5 Year Structural Warranty', 'Stain Resistant']
  },
  {
    id: 'luxe-matte-lipstick-set',
    name: 'Velvet Matte Luxe Lipstick Set',
    subtitle: 'Beauty & Skincare',
    category: 'Beauty',
    subcategory: 'Cosmetics',
    brand: 'Sephora Luxe',
    price: 49,
    originalPrice: 65,
    discountBadge: '-25%',
    rating: 4.8,
    reviewsCount: 4210,
    inStock: true,
    stockCount: 65,
    featured: false,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80'
    ],
    colors: [
      { name: 'Crimson Rose', hex: '#e11d48', bg: 'bg-rose-600' },
      { name: 'Berry Neon', hex: '#c026d3', bg: 'bg-fuchsia-600' }
    ],
    description: 'Weightless comfort, 16-hour long-wearing pigment with hydrating hyaluronic spheres and vitamin E.',
    highlights: ['Cruelty Free', 'Dermatologist Tested', 'Easy Returns']
  },
  {
    id: 'nba-grip-basketball',
    name: 'Official Pro Grip Basketball',
    subtitle: 'Indoor / Outdoor Elite',
    category: 'Sports',
    subcategory: 'Equipment',
    brand: 'Spalding',
    price: 59,
    originalPrice: 75,
    discountBadge: '-21%',
    rating: 4.9,
    reviewsCount: 5120,
    inStock: true,
    stockCount: 38,
    featured: false,
    image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=600&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=600&q=80'
    ],
    colors: [
      { name: 'Classic Amber', hex: '#ea580c', bg: 'bg-orange-600' }
    ],
    description: 'Composite leather cover with deep channel pebble technology for supreme control and durability on any court surface.',
    highlights: ['Free Shipping', 'Official Size 7', '1 Year Warranty']
  },
  {
    id: 'nextgen-cyber-controller',
    name: 'NextGen Cyber Wireless Controller',
    subtitle: 'Haptic Feedback Pro',
    category: 'Toys & Games',
    subcategory: 'Gaming',
    brand: 'Sony',
    price: 79,
    originalPrice: 99,
    discountBadge: '-20%',
    rating: 4.8,
    reviewsCount: 8900,
    inStock: true,
    stockCount: 45,
    featured: false,
    image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=600&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=600&q=80'
    ],
    colors: [
      { name: 'Cyber Violet', hex: '#8b5cf6', bg: 'bg-purple-600' },
      { name: 'Galactic White', hex: '#f8fafc', bg: 'bg-white' }
    ],
    description: 'Immersive haptic feedback, dynamic adaptive triggers, and built-in microphone array in an iconic ergonomic design with custom RGB neon backlighting.',
    highlights: ['Free Shipping', 'PC & Console Compatible', '30 Days Return']
  }
];

export const INITIAL_CART = [
  {
    product: PRODUCTS.find(p => p.id === 'sony-wh-1000xm5'),
    quantity: 1,
    selectedColor: 'Midnight Black'
  },
  {
    product: PRODUCTS.find(p => p.id === 'nike-air-max-270'),
    quantity: 1,
    selectedColor: 'White / Hyper Violet'
  },
  {
    product: PRODUCTS.find(p => p.id === 'apple-watch-s9'),
    quantity: 1,
    selectedColor: 'Midnight Aluminum'
  }
];

export const INITIAL_WISHLIST = [
  'sony-wh-1000xm5',
  'macbook-air-m2',
  'nike-air-max-270',
  'designer-leather-bag',
  'cyberpods-pro-earbuds',
  'retro-purple-sneakers',
  'apple-watch-s9',
  'nextgen-cyber-controller'
];

export const INITIAL_USER = {
  id: 'usr-001',
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+1 (555) 234-5678',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  role: 'customer',
  themePreference: 'dark',
  totalOrders: 12,
  wishlistCount: 8,
  totalSpent: 1248
};

export const INITIAL_ADDRESSES = [
  {
    id: 'addr-1',
    name: 'John Doe',
    phone: '+1 (555) 234-5678',
    street: '123 Fashion Street',
    city: 'New York',
    state: 'NY',
    postalCode: '10001',
    country: 'United States',
    isDefault: true
  },
  {
    id: 'addr-2',
    name: 'John Doe (Office)',
    phone: '+1 (555) 890-1234',
    street: '789 Tech Boulevard, Suite 400',
    city: 'New York',
    state: 'NY',
    postalCode: '10018',
    country: 'United States',
    isDefault: false
  }
];

export const RECENT_ORDERS = [
  {
    id: 'ORD-78921',
    date: 'Apr 15, 2025',
    status: 'Delivered',
    statusColor: 'green',
    items: [
      {
        product: PRODUCTS.find(p => p.id === 'nike-air-max-270'),
        quantity: 1,
        price: 129
      }
    ],
    total: 129.00,
    shippingAddress: '123 Fashion Street, New York, NY 10001',
    paymentMethod: 'Credit / Debit Card (Visa •••• 4242)'
  },
  {
    id: 'ORD-78842',
    date: 'Mar 28, 2025',
    status: 'Delivered',
    statusColor: 'green',
    items: [
      {
        product: PRODUCTS.find(p => p.id === 'sony-wh-1000xm5'),
        quantity: 1,
        price: 349
      }
    ],
    total: 349.00,
    shippingAddress: '123 Fashion Street, New York, NY 10001',
    paymentMethod: 'UPI (john@okaxis)'
  },
  {
    id: 'ORD-78710',
    date: 'Feb 14, 2025',
    status: 'Delivered',
    statusColor: 'green',
    items: [
      {
        product: PRODUCTS.find(p => p.id === 'apple-watch-s9'),
        quantity: 1,
        price: 399
      },
      {
        product: PRODUCTS.find(p => p.id === 'designer-leather-bag'),
        quantity: 1,
        price: 249
      }
    ],
    total: 648.00,
    shippingAddress: '123 Fashion Street, New York, NY 10001',
    paymentMethod: 'PayPal'
  }
];

export const ADMIN_STATS = {
  totalRevenue: '$24,780',
  revenueTrend: '+12.5%',
  totalOrders: '1,248',
  ordersTrend: '+8.2%',
  activeUsers: '8,942',
  usersTrend: '+14.1%',
  conversionRate: '3.24%',
  conversionTrend: '+1.5%'
};

export const ADMIN_REVENUE_CHART = {
  '1M': [
    { label: 'Week 1', revenue: 5200 },
    { label: 'Week 2', revenue: 6800 },
    { label: 'Week 3', revenue: 5900 },
    { label: 'Week 4', revenue: 7800 }
  ],
  '3M': [
    { label: 'May', revenue: 16500 },
    { label: 'Jun', revenue: 19800 },
    { label: 'Jul', revenue: 24780 }
  ],
  '1Y': [
    { label: 'Jan', revenue: 8400 },
    { label: 'Feb', revenue: 11200 },
    { label: 'Mar', revenue: 14500 },
    { label: 'Apr', revenue: 12800 },
    { label: 'May', revenue: 16500 },
    { label: 'Jun', revenue: 19800 },
    { label: 'Jul', revenue: 24780 }
  ]
};

export const ADMIN_TOP_PRODUCTS = [
  {
    name: 'Wireless Headphones',
    image: '/assets/products/sony_headphones_glow.png',
    revenue: '$12,460',
    unitsSold: 36,
    progress: 85
  },
  {
    name: 'Smart Watch',
    image: '/assets/products/smartwatch.png',
    revenue: '$10,240',
    unitsSold: 28,
    progress: 70
  },
  {
    name: 'Sneakers',
    image: '/assets/products/sneakers_purple.png',
    revenue: '$8,920',
    unitsSold: 52,
    progress: 58
  }
];

export const COUPONS = [
  { code: 'SHOP20', discountPercent: 20, description: '20% discount on orders over $50' },
  { code: 'FUTURISTIC', discountPercent: 15, description: '15% discount for cyber members' },
  { code: 'FREESHIP', discountFixed: 15, description: 'Free Express Delivery' }
];
