import React from "react";
import {
  Heart,
  MessageCircle,
  Handshake,
  Layout,
  Search,
  MapPin,
  Share2,
  Award,
  Zap,
  TrendingUp,
  Globe,
  Sparkles,
  Rocket,
  Crown,
} from "lucide-react";

export const whyUs = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Honesty",
    subtitle: "Deliver what we promise, no shortcuts",
    color: "from-pink-500 to-rose-400",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Transparent Communication",
    subtitle: "Clear expectations, reliable timelines",
    color: "from-blue-500 to-indigo-400",
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: "Customer Satisfaction",
    subtitle: "Trust-building, doing business the right way",
    color: "from-amber-500 to-yellow-400",
  },
];

export const projectsRow1 = [
  {
    id: 1,
    title: "Industrial Website",
    image:
      "https://res.cloudinary.com/dnb1kvppn/image/upload/f_auto,q_auto,w_800,c_limit/v1772086014/antac.in__mackbook_13_vs4f0x.png",
  },
  {
    id: 2,
    title: "Industrial Consultancy",
    image:
      "https://res.cloudinary.com/dnb1kvppn/image/upload/f_auto,q_auto,w_800,c_limit/v1772086026/www.divineconsultancybhiwadi.com__mackbook_pro_idk930.png",
  },
  {
    id: 3,
    title: "Interior Designer",
    image:
      "https://res.cloudinary.com/dnb1kvppn/image/upload/f_auto,q_auto,w_800,c_limit/v1772084253/www.shivomdesigns.com__mackbook_pro_pdi0gq.png",
  },
  {
    id: 4,
    title: "Hospital",
    image:
      "https://res.cloudinary.com/dnb1kvppn/image/upload/f_auto,q_auto,w_800,c_limit/v1772084254/hospital.golddigi.com__mackbook_pro_z3rwpn.png",
  },
];

export const projectsRow2 = [
  {
    id: 6,
    title: "Industrial Website",
    image:
      "https://res.cloudinary.com/dnb1kvppn/image/upload/f_auto,q_auto,w_400,c_limit/v1772084252/antac.in__iPhone_14_Pro_Max_xplzd0.png",
  },
  {
    id: 7,
    title: "Industrial Consultancy",
    image:
      "https://res.cloudinary.com/dnb1kvppn/image/upload/f_auto,q_auto,w_400,c_limit/v1772084252/www.divineconsultancybhiwadi.com__iPhone_14_Pro_Max_fyru5p.png",
  },
  {
    id: 8,
    title: "Interior Designer",
    image:
      "https://res.cloudinary.com/dnb1kvppn/image/upload/f_auto,q_auto,w_400,c_limit/v1772084252/www.shivomdesigns.com__iPhone_14_Pro_Max_bl1sod.png",
  },
  {
    id: 9,
    title: "Hospital",
    image:
      "https://res.cloudinary.com/dnb1kvppn/image/upload/f_auto,q_auto,w_400,c_limit/v1772084263/hospital.golddigi.com__iPhone_14_Pro_Max_cwmmp3.png",
  },
];

export const services = [
  {
    icon: <Layout className="w-10 h-10 text-blue-400" />,
    title: "Bring Your Business Online",
    items: [
      "Professional website",
      "Audience-focused design",
      "Trust-building content",
    ],
  },
  {
    icon: <Search className="w-10 h-10 text-purple-400" />,
    title: "Search Engine Optimization (SEO)",
    items: [
      "Rank higher on Google with strategic keyword targeting",
      "On-page & technical SEO optimization",
      "Performance tracking with transparent analytics reports",
    ],
  },
  {
    icon: <MapPin className="w-10 h-10 text-amber-400" />,
    title: "Google Business Setup",
    items: [
      "Complete optimization",
      "Helps customers find you faster",
      "Boosts local SEO visibility",
    ],
  },
  {
    icon: <Share2 className="w-10 h-10 text-green-400" />,
    title: "Social Media Optimization",
    items: [
      "Complete profile setup",
      "Improves brand authority",
      "Targeted audience discovery",
    ],
  },
];

export const customWebsiteBenefits = [
  {
    icon: <Award className="w-8 h-8 text-amber-400" />,
    title: "Look More Professional",
    description:
      "Stand head and shoulders above competitors with a design that reflects your excellence.",
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: "Better Experience",
    description:
      "Blazing fast speeds and intuitive navigation give your customers the experience they deserve.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-orange-400" />,
    title: "Grows With You",
    description:
      "Scale your business seamlessly without the tech stack breaking down under pressure.",
  },
];

export const LiveProjects = [
  {
    title: "Shivom Designs",
    category: "Interior & Architecture",
    description:
      "A visually-driven portfolio showcasing high-end interior design and architectural projects.",
    link: "https://www.shivomdesigns.com/",
    tags: ["Portfolio", "Creative"],
  },
  {
    title: "Soni Hospital",
    category: "Healthcare",
    description:
      "Professional healthcare portal designed for patient accessibility and service transparency.",
    link: "http://sonihospital.org.in/",
    tags: ["Medical", "UI/UX"],
  },
  {
    title: "Antac",
    category: "Industrial Solutions",
    description:
      "A robust digital platform for industrial manufacturing and engineering services.",
    link: "http://antac.in/",
    tags: ["Industrial", "Corporate"],
  },
  {
    title: "Divine Consultancy",
    category: "Professional Services",
    description:
      "consultancy that simplifies industrial services and makes them easy for businesses to understand and access.",
    link: "https://www.divineconsultancybhiwadi.com/",
    tags: ["Business", "Bhiwadi"],
  },
];

export const pricingPackages = [
  {
    icon: <Sparkles className="w-10 h-10 text-blue-400" />,
    name: "Minimum",
    price: "Rs. 4,999",
    highlight: false,
    features: [
      "1-Page Professional Website",
      "Mobile Responsive Design",
      "Basic On-Page SEO",
      "Google Business Profile Setup",
      "WhatsApp Integration",
    ],
  },
  {
    icon: <Rocket className="w-10 h-10 text-amber-400" />,
    name: "Essential",
    price: "Rs. 9,999",
    highlight: true,
    features: [
      "Up to 5 Pages Website",
      "Advanced UI/UX Design",
      "Complete On-Page + Technical SEO",
      "Google Business Optimization",
      "Speed Optimization",
      "Social Media Profile Optimization",
    ],
  },
  {
    icon: <Crown className="w-10 h-10 text-purple-400" />,
    name: "Ultra Transformation",
    price: "Rs. 19,999",
    highlight: false,
    features: [
      "Full Business Website (8-10 Pages)",
      "Premium UI/UX + Conversion Design",
      "Advanced SEO Strategy + Keyword Research",
      "Local SEO Domination Setup",
      "Google Business Full Optimization",
      "Complete Social Media Optimization",
    ],
  },
];
