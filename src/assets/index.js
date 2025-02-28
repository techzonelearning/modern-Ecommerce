import women from "./IMG/mk2-cate-01.jpeg";
import men from "./IMG/mk2-cate-02.jpeg";
import accessories from "./IMG/mk2-cate-03.jpeg";
import shoes from "./IMG/mk2-cate-04.jpeg";
import newArrivals from "./IMG/mk2-cate-05.jpeg";

import product1 from "./IMG/0.1.jpg";
import product2 from "./IMG/0.2.jpeg";
import product3 from "./IMG/0.3.jpg";
import product4 from "./IMG/1.1.png";
import product5 from "./IMG/1.2.jpg";
import product6 from "./IMG/2.1.png";
import product7 from "./IMG/2.2.png";
import product8 from "./IMG/3.1.png";
import product16 from "./IMG/3.2.png";
import product17 from "./IMG/4.1.png";
import product11 from "./IMG/4.2.png";
import product12 from "./IMG/5.1.png";
import product13 from "./IMG/5.2.png";
import product14 from "./IMG/product1.jpeg";
import product15 from "./IMG/6.1.png";
import logo from "./IMG/logo_claue_1.png";
import banner1 from "./IMG/banner1.jpeg";
import banner2 from "./IMG/banner2.jpeg";
import product9 from "./IMG/6.2.png";
import product10 from "./IMG/7.1.png";
import product20 from "./IMG/7.2.png";
import product18 from "./IMG/7.3.jpg";
import product19 from "./IMG/7.4.jpg";

let reviews = [
  {
    totalReview : "10.5k",
    review : "5.0k",
    title: "Love this clothing",
    description: "The quality of the material and the design are very good.",
    name: "John Doe",
    date: "2023-02-15",
    rate: 5,
  },{
    totalReview : "15.3k",
    review : "10.5k",
    title: "Great purchase!",
    description: "I bought this for my daughter and she loves it.",
    name: "Jane Smith",
    date: "2023-03-10",
    rate: 4.5,
  },{
    totalReview : "20.7k",
    review : "15.3k",
    title: "Worth every penny",
    description: "I purchased this for my friend and she loved it too.",
    name: "Michael Johnson",
    date: "2023-04-05",
    rate: 4.3,
  },{
    totalReview : "25.8k",
    review : "20.7k",
    title: "Best choice!",
    description: "I've been using this brand for years and it's the best.",
    name: "Sarah Wilson",
    date: "2023-05-01",
    rate: 4.7,
  }
]
import {
  CarFront,
  Circle,
  LockKeyholeOpen,
  Mail,
  MapPin,
  Phone,
  RotateCcw,
  Star,
  StarHalf,
} from "lucide-react";

let assets = {
  logo,
  banner1,
  banner2,
  product1,
};
let productInfo = [
  {
    title: "LOOKBOOK",
    info: "VIEW COLLECTIONS",
    description: "your world of fashion in numbers",
    img: product9,
  },
  {
    title: "UP TO 70%",
    info: "SUMMER SALE",
    description: "see the latest fashion trends, editorials, and more",
    img: product10,
  },
];
let products1 = [
  {
    id: 1,
    img: product1,
    title: "Kids' Educational Toy Set",
    images: [product1, product2, product3, product4],
    description:
      "Encourage learning and creativity with this fun and educational toy set. Includes a variety of puzzles, building blocks, and interactive games.",
    price: 55.0,
    category: "Kids",
    subCategory: "Toys",
    sizes: ["S", "M", "L", "XL"],
    features: ["Educational", "Durable Material", "Safe for Kids"],
    rating: 4.9,
    bestSeller: true,
    inStock: true,
    date: "2023-09-10",
    ratingStar: [Star, Star, Star, Star, Star],
  },
  {
    id: 2,
    img: product2,
    title: "Classic Floral Midi Dress",
    images: [product2, product3, product4, product5],
    description:
      "A timeless piece for every occasion, this floral midi dress is designed for comfort and elegance. Crafted from breathable fabric with a flattering fit, it’s perfect for casual outings or special events.",
    price: 45.99,
    category: "Women",
    subCategory: "Dresses",
    sizes: ["S", "M", "L", "XL"],
    features: [
      "Floral Print",
      "Breathable Fabric",
      "Adjustable Straps",
      "Pockets",
    ],
    rating: 4.8,
    bestSeller: true,
    inStock: true,
    date: "2023-05-10",
    ratingStar: [Star, Star, Star, Star, Star],
  },
  {
    id: 3,
    img: product3,
    title: "Kids' Adventure Sneakers",
    images: [product3, product4, product5, product6],
    description:
      "Built for play and exploration, these sneakers provide superior grip and support. The lightweight design ensures comfort for active kids throughout the day.",
    price: 30.0,
    category: "Kids",
    subCategory: "Shoes",
    sizes: ["9", "10", "11", "12", "13"],
    features: [
      "Durable Soles",
      "Breathable Material",
      "Adjustable Velcro Straps",
    ],
    rating: 4.7,
    bestSeller: true,
    inStock: true,
    date: "2023-02-15",
    ratingStar: [Star, Star, Star, Star, StarHalf],
  },
  {
    id: 4,
    img: product4,
    title: "Men's Slim Fit Blazer",
    images: [product4, product5, product6, product7],
    description:
      "Tailored for a sharp look, this slim-fit blazer is ideal for formal and semi-formal occasions. It’s crafted from premium fabric for a polished and comfortable fit.",
    price: 120.0,
    category: "Men",
    subCategory: "Blazers",
    sizes: ["M", "L", "XL", "XXL"],
    features: [
      "Slim Fit",
      "Premium Fabric",
      "Single-Breasted",
      "Multiple Pockets",
    ],
    rating: 4.6,
    bestSeller: false,
    inStock: true,
    date: "2023-06-20",
    ratingStar: [Star, Star, Star, Star, Star],
  },
  {
    id: 5,
    img: product5,
    title: "Women's Workout Leggings",
    images: [product5, product6, product7, product8],
    description:
      "High-performance leggings designed for ultimate comfort and flexibility. Perfect for yoga, running, or everyday wear, these leggings come in multiple sizes and vibrant colors.",
    price: 35.0,
    category: "Women",
    subCategory: "Activewear",
    sizes: ["S", "M", "L", "XL"],
    features: [
      "Stretch Fabric",
      "Moisture-Wicking",
      "High Waist",
      "Durable Material",
    ],
    rating: 4.9,
    bestSeller: true,
    inStock: true,
    date: "2023-04-01",
    ratingStar: [Star, Star, Star, Star, Star],
  },
  {
    id: 6,
    img: product6,
    title: "Men's Casual Sneakers",
    images: [product6, product7, product8, product9],
    description:
      "Comfortable and stylish sneakers for everyday use. Made with breathable material and designed for long-lasting wear.",

    price: 60.0,
    category: "Men",
    subCategory: "Shoes",
    sizes: ["S", "M", "L", "XL"],
    features: ["Lightweight", "Breathable", "Slip-Resistant", "Durable Sole"],
    rating: 4.4,
    bestSeller: false,
    inStock: true,
    date: "2023-07-15",
    ratingStar: [Star, Star, Star, Star, Star],
  },
  {
    id: 7,
    img: product7,
    title: "Kids' Waterproof Jacket",
    images: [product7, product8, product9, product10],
    description:
      "Keep your kids dry and cozy in this lightweight, waterproof jacket. Designed for all-weather protection with a comfortable fit.",
    price: 40.0,

    category: "Kids",
    subCategory: "Outerwear",
    sizes: ["XS", "S", "M", "L"],
    features: ["Waterproof", "Windproof", "Lightweight", "Adjustable Hood"],
    rating: 4.5,
    bestSeller: true,
    inStock: true,
    date: "2023-03-10",
    ratingStar: [Star, Star, Star, Star, StarHalf],
  },
  {
    id: 8,
    img: product8,
    title: "Women's Summer Hat",
    images: [product8, product9, product10, product11],
    description:
      "Stay cool and stylish this summer with our wide-brimmed hat. Perfect for beach days, picnics, or outdoor adventures.",
    price: 25.0,
    category: "Women",
    subCategory: "Accessories",
    sizes: ["S", "M", "L"],
    features: ["Wide Brim", "Breathable Material", "Adjustable Strap"],
    rating: 4.3,
    bestSeller: false,
    inStock: true,
    date: "2023-08-01",
    ratingStar: [Star, Star, Star, Star, Star],
  },
  {
    id: 9,
    img: product9,
    title: "Men's Leather Wallet",
    images: [product9, product10, product11, product12, product13],
    description:
      "A sleek and durable leather wallet with multiple compartments for cards, cash, and coins. A perfect blend of style and functionality.",
    price: 50.0,
    category: "Men",
    subCategory: "Accessories",
    sizes: ["S", "M", "L"],
    features: ["Genuine Leather", "Compact Design", "Multiple Compartments"],
    rating: 4.7,
    bestSeller: true,
    inStock: true,
    date: "2023-05-25",
    ratingStar: [Star, Star, Star, Star, StarHalf],
  },
  {
    id: 10,
    img: product10,
    title: "Kids' Educational Toy Set",
    images: [product10, product11, product12, product13],
    description:
      "Encourage learning and creativity with this fun and educational toy set. Includes a variety of puzzles, building blocks, and interactive games.",
    price: 55.0,
    category: "Kids",
    subCategory: "Toys",
    sizes: ["S", "M", "L", "XL"],
    features: ["Educational", "Durable Material", "Safe for Kids"],
    rating: 4.9,
    bestSeller: true,
    inStock: true,
    date: "2023-09-10",
    ratingStar: [Star, Star, Star, Star, Star],
  },
  {
    id: 11,
    img: product11,
    title: "Men's Slim Fit Blazer",
    images: [product11, product12, product13, product14],
    description:
      "Tailored for a sharp look, this slim-fit blazer is ideal for formal and semi-formal occasions. It’s crafted from premium fabric for a polished and comfortable fit.",
    price: 120.0,
    category: "Men",
    subCategory: "Blazers",
    sizes: ["M", "L", "XL", "XXL"],
    features: [
      "Slim Fit",
      "Premium Fabric",
      "Single-Breasted",
      "Multiple Pockets",
    ],
    rating: 4.6,
    bestSeller: false,
    inStock: true,
    date: "2023-06-20",
    ratingStar: [Star, Star, Star, Star, Star],
  },
  {
    id: 12,
    img: product12,
    title: "Women's Workout Leggings",
    images: [product12, product13, product14, product15],
    description:
      "High-performance leggings designed for ultimate comfort and flexibility. Perfect for yoga, running, or everyday wear, these leggings come in multiple sizes and vibrant colors.",
    price: 35.0,
    category: "Women",
    subCategory: "Activewear",
    sizes: ["S", "M", "L", "XL"],
    features: [
      "Stretch Fabric",
      "Moisture-Wicking",
      "High Waist",
      "Durable Material",
    ],
    rating: 4.9,
    bestSeller: true,
    inStock: true,
    date: "2023-04-01",
    ratingStar: [Star, Star, Star, Star, Star],
  },
  {
    id: 13,
    img: product13,
    title: "Men's Casual Sneakers",
    images: [product13, product14, product15, product16],
    description:
      "Comfortable and stylish sneakers for everyday use. Made with breathable material and designed for long-lasting wear.",
    price: 60.0,
    category: "Men",
    subCategory: "Shoes",
    sizes: ["7", "8", "9", "10", "11"],
    features: ["Lightweight", "Breathable", "Slip-Resistant", "Durable Sole"],
    rating: 4.4,
    bestSeller: false,
    inStock: true,
    date: "2023-07-15",
    ratingStar: [Star, Star, Star, Star, Star],
  },
  {
    id: 14,
    img: product14,
    title: "Kids' Waterproof Jacket",
    images: [product14, product15, product16, product17],
    description:
      "Keep your kids dry and cozy in this lightweight, waterproof jacket. Designed for all-weather protection with a comfortable fit.",
    price: 40.0,
    category: "Kids",
    subCategory: "Outerwear",
    sizes: ["XS", "S", "M", "L"],
    features: ["Waterproof", "Windproof", "Lightweight", "Adjustable Hood"],
    rating: 4.5,
    bestSeller: true,
    inStock: true,
    date: "2023-03-10",
    ratingStar: [Star, Star, Star, Star, StarHalf],
  },
  {
    id: 15,
    img: product15,
    title: "Women's Denim Jacket",
    images: [product15, product16, product17, product18],
    description:
      "Elegant and stylish denim jacket for women. Crafted from premium denim and designed for a timeless look.",
    price: 75.0,
    category: "Women",
    subCategory: "Jackets",
    sizes: ["S", "M", "L", "XL"],
    features: ["Denim Fabric", "Breathable", "Adjustable Collar", "Pockets"],
    rating: 4.7,
    bestSeller: false,
    inStock: true,
    date: "2023-08-05",
    ratingStar: [Star, Star, Star, Star, StarHalf],
  },
  {
    id: 16,
    img: product16,
    title: "Men's Leather Jacket",
    images: [product16, product17, product18, product19],
    description:
      "Stylish and durable leather jacket for men. Crafted from high-quality leather and designed for a classic look.",
    price: 120.0,
    category: "Men",
    subCategory: "Jackets",
    sizes: ["S", "M", "L", "XL"],
    features: ["Leather", "Waterproof", "Windproof", "Adjustable Hood"],
    rating: 4.8,
    bestSeller: true,
    inStock: true,
    date: "2023-06-10",
    ratingStar: [Star, Star, Star, Star, Star],
  },
  {
    id: 17,
    img: product17,
    title: "Women's Slim Fit Blazer",
    images: [product17, product18, product19, product20],
    description:
      "Tailored for a sharp look, this slim-fit blazer is ideal for formal and semi-formal occasions. It’s crafted from premium fabric for a polished and comfortable fit.",
    price: 120.0,
    category: "Women",
    subCategory: "Blazers",
    sizes: ["M", "L", "XL", "XXL"],
    features: [
      "Slim Fit",
      "Premium Fabric",
      "Single-Breasted",
      "Multiple Pockets",
    ],
    rating: 4.6,
    bestSeller: false,
    inStock: true,
    date: "2023-06-20",
    ratingStar: [Star, Star, Star, Star, Star],
  },
  {
    id: 18,
    img: product4,
    title: "Men's Slim Fit Blazer",
    images: [product4, product5, product6, product7],
    description:
      "Tailored for a sharp look, this slim-fit blazer is ideal for formal and semi-formal occasions. It’s crafted from premium fabric for a polished and comfortable fit.",
    price: 120.0,
    category: "Men",
    subCategory: "Blazers",
    sizes: ["M", "L", "XL", "XXL"],
    features: [
      "Slim Fit",
      "Premium Fabric",
      "Single-Breasted",
      "Multiple Pockets",
    ],
    rating: 4.6,
    bestSeller: false,
    inStock: true,
    date: "2023-06-20",
    ratingStar: [Star, Star, Star, Star, Star],
  },
  {
    id: 19,
    img: product5,
    title: "Men's Slim Fit Blazer",
    images: [product5, product6, product7, product8],
    description:
      "Tailored for a sharp look, this slim-fit blazer is ideal for formal and semi-formal occasions. It’s crafted from premium fabric for a polished and comfortable fit.",
    price: 120.0,
    category: "Men",
    subCategory: "Blazers",
    sizes: ["M", "L", "XL", "XXL"],
    features: [
      "Slim Fit",
      "Premium Fabric",
      "Single-Breasted",
      "Multiple Pockets",
    ],
    rating: 4.6,
    bestSeller: false,
    inStock: true,
    date: "2023-06-20",
    ratingStar: [Star, Star, Star, Star, Star],
  },
  {
    id: 20,
    img: product6,
    title: "Men's Slim Fit Blazer",
    images: [product6, product7, product8, product9],
    description:
      "Tailored for a sharp look, this slim-fit blazer is ideal for formal and semi-formal occasions. It’s crafted from premium fabric for a polished and comfortable fit.",
    price: 120.0,
    category: "Men",
    subCategory: "Blazers",
    sizes: ["M", "L", "XL", "XXL"],
    features: [
      "Slim Fit",
      "Premium Fabric",
      "Single-Breasted",
      "Multiple Pockets",
    ],
    rating: 4.6,
    bestSeller: false,
    inStock: true,
    date: "2023-06-20",
    ratingStar: [Star, Star, Star, Star, Star],
  },
  {
    id: 21,
    img: product18,
    title: "Men's Slim Fit Blazer",
    images: [product18, product19, product20, product17],
    description:
      "Tailored for a sharp look, this slim-fit blazer is ideal for formal and semi-formal occasions. It’s crafted from premium fabric for a polished and comfortable fit.",
    price: 120.0,
    category: "Men",
    subCategory: "Blazers",
    sizes: ["M", "L", "XL", "XXL"],
    features: [
      "Slim Fit",
      "Premium Fabric",
      "Single-Breasted",
      "Multiple Pockets",
    ],
    rating: 4.6,
    bestSeller: false,
    inStock: true,
    date: "2023-06-20",
    ratingStar: [Star, Star, Star, Star, Star],
  },
  {
    id: 22,
    img: product19,
    title: "Men's Slim Fit Blazer",
    images: [product18, product19, product20, product17],
    description:
      "Tailored for a sharp look, this slim-fit blazer is ideal for formal and semi-formal occasions. It’s crafted from premium fabric for a polished and comfortable fit.",
    price: 120.0,
    category: "Men",
    subCategory: "Blazers",
    sizes: ["M", "L", "XL", "XXL"],
    features: [
      "Slim Fit",
      "Premium Fabric",
      "Single-Breasted",
      "Multiple Pockets",
    ],
    rating: 4.6,
    bestSeller: false,
    inStock: true,
    date: "2023-06-20",
    ratingStar: [Star, Star, Star, Star, Star],
  },
  {
    id: 23,
    img: product20,
    images: [product18, product19, product20, product17],
    title: "Men's Slim Fit Blazer",
    description:
      "Tailored for a sharp look, this slim-fit blazer is ideal for formal and semi-formal occasions. It’s crafted from premium fabric for a polished and comfortable fit.",
    price: 120.0,
    category: "Men",
    subCategory: "Blazers",
    sizes: ["M", "L", "XL", "XXL"],
    features: [
      "Slim Fit",
      "Premium Fabric",
      "Single-Breasted",
      "Multiple Pockets",
    ],
    rating: 4.6,
    bestSeller: false,
    inStock: true,
    date: "2023-06-20",
    ratingStar: [Star, Star, Star, Star, Star],
    
  },
];

let navbar = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Shop",
    path: "/shop",
  },
  {
    title: "Product",
    path: "/product",
  },
  {
    title: "Pages",
    path: "/pages",
  },
  {
    title: "Elements",
    path: "/elements",
  },
  {
    title: "Acessories",
    path: "/acessories",
  },
  {
    title: "Buy now",
    path: "/buynow",
  },
];

let DEPARTMENTS = [
  "Value of the day",
  "New Arrivals",
  "Top Sellers",
  "Accessories",
  "Electronics",
  "Home & Garden",
  "Beauty & Health",
  "Kids & Toys",
  "Sports & Outdoors",
  "Books & Audible",
  "Movies & TV",
];

let CATEGORIES = [
  {
    img: women,
    title: "Women",
  },
  {
    img: men,
    title: "Men",
  },
  {
    img: accessories,
    title: "Accessories",
  },
  {
    img: shoes,
    title: "Shoes",
  },
  {
    img: newArrivals,
    title: "New Arrivals",
  },
];

let serives = [
  {
    title: "FREE SHIPPING",
    info: "Free shipping on all US order or order above $200",
    icon: CarFront,
  },
  {
    title: "24/7 SUPPORT",
    info: "We are here to help you everyday",
    icon: Circle,
  },
  {
    title: "30 DAYS RETURN",
    info: "Return your items within 30 days",
    icon: RotateCcw,
  },
  {
    title: "100% PAYMENT SECURE",
    info: "We use secure payment gateway",
    icon: LockKeyholeOpen,
  },
];
let sale = [
  {
    title: "UP TO 70%",
    info: "SUMMER SALE",
    img: "https://clauem2.arrowtheme.com/media/mgs/fbuilder/promobanners/l/o/lookbook2016_3.jpg",
  },
  {
    title: "LOOKBOOK 2023",
    info: "MAKE LOVE THIS LOOK",
    img: "https://clauem2.arrowtheme.com/media/mgs/fbuilder/promobanners/s/u/summer-sale_3.jpg",
  },
];

let footer = {
  Categories: ["Women", "Men", "Accessories", "Shoes", "New Arrivals", "Dress"],
  Infomation: [
    "About Us",
    "Contact Us",
    "Privacy Policy",
    "Terms & Conditions",
    "My Account",
    "Order Tracking",
    "Wishlist",
  ],
  Quick_Links: [
    "Home",
    "Shop",
    "Product",
    "Pages",
    "Elements",
    "Acessories",
    "Buy now",
  ],
  claue: [
    {
      icon: MapPin,
      title: "184 Main Rd E, St Alban VIC 3021, Australia",
    },
    {
      icon: Phone,
      title: "+842437955813",
    },
    {
      icon: Mail,
      title: "G7a9M@example.com",
    },
  ],
  payment: [
    "https://clauem2.arrowtheme.com/media/wysiwyg/payments.png",
    "https://clauem2.arrowtheme.com/media/wysiwyg/payments.png",
    "https://clauem3.arrowtheme.com/media/wysiwyg/payments.png",
    "https://clauem4.arrowtheme.com/media/wysiwyg/payments.png",
    "https://clauem5.arrowtheme.com/media/wysiwyg/payments.png",
  ],
};




export {
  footer,
  sale,
  serives,
  navbar,
  products1,
  DEPARTMENTS,
  CATEGORIES,
  assets,
  productInfo,
  reviews
};
