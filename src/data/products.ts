export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  subcategory: string;
  colors: string[];
  sizes: string[];
  images: string[];
  description: string;
  fabric: string;
  care: string[];
  rating: number;
  reviews: number;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  href: string;
}

export const categories: Category[] = [
  {
    id: "women",
    name: "Women",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
    href: "/collection/women",
  },
  {
    id: "men",
    name: "Men",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    href: "/collection/men",
  },
  {
    id: "new-arrivals",
    name: "New Arrivals",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
    href: "/collection/new-arrivals",
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Silk Blend Oversized Blazer",
    price: 189,
    originalPrice: 249,
    category: "women",
    subcategory: "blazers",
    colors: ["Ivory", "Charcoal", "Camel"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800&q=80",
    ],
    description: "An elegant oversized blazer crafted from a luxurious silk blend. Features a relaxed silhouette with structured shoulders and a single-button closure.",
    fabric: "68% Viscose, 32% Silk",
    care: ["Dry clean only", "Iron on low heat", "Do not tumble dry"],
    rating: 4.8,
    reviews: 124,
    isNew: true,
  },
  {
    id: "2",
    name: "High-Waisted Linen Trousers",
    price: 129,
    category: "women",
    subcategory: "trousers",
    colors: ["Cream", "Black", "Sage"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    ],
    description: "Effortlessly chic high-waisted trousers in premium linen. Wide-leg silhouette with pressed creases for a polished look.",
    fabric: "100% Linen",
    care: ["Machine wash cold", "Hang to dry", "Iron on medium heat"],
    rating: 4.6,
    reviews: 89,
    isBestSeller: true,
  },
  {
    id: "3",
    name: "Cashmere Crew Neck Sweater",
    price: 245,
    category: "women",
    subcategory: "knitwear",
    colors: ["Oatmeal", "Burgundy", "Navy"],
    sizes: ["XS", "S", "M", "L"],
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80",
    ],
    description: "Luxuriously soft cashmere sweater with a relaxed crew neck. Perfect for layering or wearing on its own.",
    fabric: "100% Cashmere",
    care: ["Hand wash cold", "Lay flat to dry", "Do not wring"],
    rating: 4.9,
    reviews: 256,
    isBestSeller: true,
  },
  {
    id: "4",
    name: "Tailored Wool Coat",
    price: 395,
    originalPrice: 495,
    category: "women",
    subcategory: "coats",
    colors: ["Camel", "Charcoal", "Ivory"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
      "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=800&q=80",
    ],
    description: "A timeless tailored coat in premium wool blend. Features a classic notch lapel, single-breasted closure, and midi length.",
    fabric: "80% Wool, 20% Polyamide",
    care: ["Dry clean only", "Store on padded hanger"],
    rating: 4.7,
    reviews: 178,
    isNew: true,
  },
  {
    id: "5",
    name: "Merino Wool Turtleneck",
    price: 145,
    category: "men",
    subcategory: "knitwear",
    colors: ["Black", "Charcoal", "Navy", "Cream"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=800&q=80",
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=800&q=80",
    ],
    description: "A refined turtleneck in fine merino wool. Slim fit with ribbed trim at the neck, cuffs, and hem.",
    fabric: "100% Merino Wool",
    care: ["Hand wash cold", "Lay flat to dry"],
    rating: 4.5,
    reviews: 92,
  },
  {
    id: "6",
    name: "Cotton Oxford Shirt",
    price: 89,
    category: "men",
    subcategory: "shirts",
    colors: ["White", "Light Blue", "Pale Pink"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
    ],
    description: "A wardrobe essential in crisp cotton oxford. Regular fit with button-down collar and curved hem.",
    fabric: "100% Cotton",
    care: ["Machine wash warm", "Tumble dry low", "Iron on medium heat"],
    rating: 4.4,
    reviews: 145,
    isBestSeller: true,
  },
  {
    id: "7",
    name: "Relaxed Fit Chinos",
    price: 98,
    category: "men",
    subcategory: "trousers",
    colors: ["Khaki", "Navy", "Olive", "Stone"],
    sizes: ["28", "30", "32", "34", "36", "38"],
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80",
    ],
    description: "Relaxed fit chinos in stretch cotton twill. Features a comfortable mid-rise and tapered leg.",
    fabric: "98% Cotton, 2% Elastane",
    care: ["Machine wash cold", "Tumble dry low"],
    rating: 4.6,
    reviews: 203,
  },
  {
    id: "8",
    name: "Structured Wool Blazer",
    price: 295,
    category: "men",
    subcategory: "blazers",
    colors: ["Navy", "Charcoal", "Black"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&q=80",
    ],
    description: "A sophisticated wool blazer with a modern slim fit. Features notch lapels, two-button closure, and functional pockets.",
    fabric: "100% Wool",
    care: ["Dry clean only"],
    rating: 4.8,
    reviews: 67,
    isNew: true,
  },
];

export const reviews = [
  {
    id: "1",
    author: "Sophie M.",
    location: "London",
    rating: 5,
    date: "2 weeks ago",
    title: "Exceptional Quality",
    content: "The craftsmanship is impeccable. I've received so many compliments on this blazer. Worth every penny.",
    productId: "1",
  },
  {
    id: "2",
    author: "James T.",
    location: "New York",
    rating: 5,
    date: "1 month ago",
    title: "Perfect Fit",
    content: "Finally found a brand that understands modern tailoring. The fit is spot-on and the fabric feels luxurious.",
    productId: "8",
  },
  {
    id: "3",
    author: "Emma L.",
    location: "Paris",
    rating: 4,
    date: "3 weeks ago",
    title: "Beautiful but runs large",
    content: "Gorgeous cashmere sweater. I sized down and it fits perfectly. The color is even more beautiful in person.",
    productId: "3",
  },
];
