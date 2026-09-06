export interface FeaturedClient {
  name: string;
  subtitle: string;
  location: string;
  description: string;
  stats: string[];
  liveUrl: string;
  image: string;
}

export interface TradeTile {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface SectorTile {
  id: string;
  title: string;
  tag: string;
  image: string;
}

export const FEATURED_CLIENT: FeaturedClient = {
  name: "Jyoti Stabiliser",
  subtitle: "Industrial Voltage Stabilizers & Power Systems",
  location: "Bhubaneswar, Odisha • Est. 1988",
  description: "36+ years of heavy-duty industrial voltage stabilization engineering, built for extreme power stability across India's largest manufacturing plants.",
  stats: [
    "36+ Years in Business",
    "ISO 9001 & Udyam Certified",
    "Trusted by Tata Motors, SBI, HDFC, GAIL, IOCL & 20+ National Brands"
  ],
  liveUrl: "https://jyotistabiliser.in",
  image: "/image/jyoti_stabiliser.png"
};

export const PHASE_1_TRADES: TradeTile[] = [
  {
    id: "roofing",
    title: "Roofing & Cladding",
    subtitle: "Contractor Portals & Estimator UX",
    image: "/image/web_roofing.jpg"
  },
  {
    id: "hvac",
    title: "HVAC & Climate Systems",
    subtitle: "Smart Telemetry & Fleet Dashboards",
    image: "/image/web_hvac.jpg"
  },
  {
    id: "electrical",
    title: "Electrical Infrastructure",
    subtitle: "Power SCADA & WebGL Control Interfaces",
    image: "/image/web_electrical.jpg"
  },
  {
    id: "plumbing",
    title: "Plumbing & Piping",
    subtitle: "Commercial Booking Engines & Brand Systems",
    image: "/image/web_plumbing.jpg"
  },
  {
    id: "remodeling",
    title: "Structural Remodeling",
    subtitle: "3D Spatial Showcases & BIM Portals",
    image: "/image/web_remodeling.jpg"
  },
  {
    id: "landscaping",
    title: "Landscaping & Earthworks",
    subtitle: "Architectural Portfolio & Interactive UI",
    image: "/image/web_landscaping.jpg"
  }
];

export const PHASE_2_SECTORS: SectorTile[] = [
  {
    id: "ecommerce",
    title: "E-Commerce & Digital Retail",
    tag: "High-Volume Storefronts",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "professional",
    title: "Professional & Legal Services",
    tag: "Corporate & Advisory",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "saas",
    title: "Technology & SaaS Platforms",
    tag: "Software Engineering",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "realestate",
    title: "Real Estate & Architecture",
    tag: "Spatial Concepts",
    image: "/image/work_villa.jpg"
  }
];
