export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  price: string;
  turnaround: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  desc: string;
}

export interface Service {
  num: string;
  title: string;
  slug: string;
  shortDescription: string;
  headline: string;
  subDescription: string;
  philosophyQuote: string;
  fullPhilosophy: string;
  deliverables: string[];
  workflow: WorkflowStep[];
  techStack: string[];
  pricingTiers: PricingTier[];
}

export const SERVICES: Service[] = [
  {
    num: "01",
    title: "Web Design",
    slug: "web-design",
    shortDescription: "Bespoke digital wireframes, typography systems, and motion prototypes.",
    headline: "Transforming visual concepts into high-precision structural interfaces.",
    subDescription: "We design digital experiences rooted in architectural clarity, custom typography, and fluid micro-interactions built to elevate brand prestige.",
    philosophyQuote: "Form follows function, but aesthetic precision defines legacy.",
    fullPhilosophy: "At Cube® Studio, our web design methodology treats digital viewports as architectural spaces. We balance whitespace, structural grid ratios, and tactile motion dynamics to craft intuitive interfaces that resonate on a visceral level.",
    deliverables: [
      "Bespoke Responsive Layouts",
      "Interactive Motion Prototypes",
      "Design System & Tokens",
      "Custom Typography Hierarchy",
      "Micro-interaction Specifications",
      "Accessibility & Contrast Audit"
    ],
    workflow: [
      { step: "01", title: "Discovery", desc: "Deconstructing brand positioning, target audience mental models, and structural moodboards." },
      { step: "02", title: "Architecture", desc: "Drafting wireframe schematics, spatial layout grids, and typographic systems." },
      { step: "03", title: "Prototyping", desc: "Building high-fidelity interactive motion previews with Framer & Figma." },
      { step: "04", title: "Handoff", desc: "Delivering design tokens, component libraries, and visual asset specs." }
    ],
    techStack: ["Figma", "Framer", "Principle", "Adobe CC", "Tokens Studio", "Rive"],
    pricingTiers: [
      {
        id: "essential",
        name: "Essential",
        tagline: "Ideal for boutique brands requiring a targeted single-page visual identity.",
        price: "$4,500 – $6,500",
        turnaround: "2 – 3 Weeks",
        features: [
          "Single-Page Structural UI Design",
          "Custom Typographic Palette",
          "Responsive Layout (Mobile, Tab, Desk)",
          "Design Tokens Export",
          "2 Revision Rounds"
        ],
        ctaText: "Request Essential Design"
      },
      {
        id: "studio",
        name: "Studio",
        tagline: "Complete multi-page digital identity system built for ambitious brands.",
        price: "$9,500 – $14,000",
        turnaround: "4 – 6 Weeks",
        popular: true,
        features: [
          "Up to 8 Custom Page Layouts",
          "Complete Design System Library",
          "Interactive Motion Prototypes",
          "Custom Iconography & Assets",
          "3 Revision Rounds",
          "Direct Designer Access"
        ],
        ctaText: "Book Studio Tier"
      },
      {
        id: "bespoke",
        name: "Bespoke",
        tagline: "Tailored enterprise solutions with custom WebGL 3D design components.",
        price: "Custom Quote",
        turnaround: "6 – 10 Weeks",
        features: [
          "Unlimited Page Layout Architecture",
          "3D Shader & WebGL Motion Specs",
          "Global Brand Identity Guidelines",
          "Design Tokens & Tailwind Plugin",
          "Dedicated Art Director",
          "Priority Revision Cycles"
        ],
        ctaText: "Consult Bespoke Scope"
      }
    ]
  },
  {
    num: "02",
    title: "Web Development",
    slug: "web-development",
    shortDescription: "High-performance React engines, Next.js architecture, and optimized builds.",
    headline: "Engineered web platforms built for instant speed and long-term scalability.",
    subDescription: "We craft clean, type-safe Next.js web applications powered by modern CSS, optimized server components, and fluid 60FPS scroll engines.",
    philosophyQuote: "Code is structural steel — silent, invisible, and uncompromisingly strong.",
    fullPhilosophy: "We do not build generic templates. Our engineering process utilizes Next.js App Router, TypeScript, and Turbopack to deliver web applications that load in under 500ms, rank effortlessly, and scale without technical debt.",
    deliverables: [
      "Next.js App Router Architecture",
      "TypeScript Type-Safe Codebase",
      "Custom Tailwind & CSS Systems",
      "Lenis & GSAP Smooth Scroll Integration",
      "Headless CMS Integration",
      "CI/CD Pipeline Setup"
    ],
    workflow: [
      { step: "01", title: "Planning", desc: "Defining data architecture, component tree structure, and state management strategy." },
      { step: "02", title: "Development", desc: "Writing clean, modular React components with TypeScript and custom styling." },
      { step: "03", title: "Optimization", desc: "Tuning bundle sizes, Core Web Vitals, server-side caching, and image pipelines." },
      { step: "04", title: "Deployment", desc: "Production launch on Vercel/AWS with automated deployment webhooks." }
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP", "Turbopack"],
    pricingTiers: [
      {
        id: "essential",
        name: "Essential",
        tagline: "Performant static lander or single-page Next.js web build.",
        price: "$5,000 – $7,500",
        turnaround: "2 – 3 Weeks",
        features: [
          "Next.js App Router Setup",
          "Fully Responsive Tailwind CSS",
          "SEO Meta Tags & Sitemap Setup",
          "Vercel Deployment",
          "30-Day Bug Guarantee"
        ],
        ctaText: "Build Essential Web"
      },
      {
        id: "studio",
        name: "Studio",
        tagline: "Full-scale multi-route application with CMS and smooth scroll mechanics.",
        price: "$12,000 – $18,000",
        turnaround: "4 – 6 Weeks",
        popular: true,
        features: [
          "Multi-Route Next.js Architecture",
          "Headless CMS (Sanity / Strapi)",
          "Lenis Smooth Scroll & GSAP Motion",
          "Core Web Vitals 95+ Score",
          "API & Analytics Integration",
          "60-Day Dedicated Support"
        ],
        ctaText: "Book Studio Engine"
      },
      {
        id: "bespoke",
        name: "Bespoke",
        tagline: "Complex enterprise web application with WebGL visuals and custom backend.",
        price: "Custom Quote",
        turnaround: "8 – 12 Weeks",
        features: [
          "Custom WebGL / Three.js Canvas",
          "Scalable Microservices Backend",
          "Enterprise Auth & Database",
          "Global Edge Content Network",
          "24/7 SLA Engineering Team",
          "Full Codebase Ownership Transfer"
        ],
        ctaText: "Discuss Custom Stack"
      }
    ]
  },
  {
    num: "03",
    title: "Branding",
    slug: "branding",
    shortDescription: "Visual guidelines, typographic identities, and assets direction.",
    headline: "Defining unmistakable visual identities for industry pioneers.",
    subDescription: "From blind-debossed tactile print collateral to digital design systems, we craft cohesive brand identities that command instant market recognition.",
    philosophyQuote: "A brand is not a logo; it is an enduring promise expressed in every pixel.",
    fullPhilosophy: "Our branding process distills brand positioning down to its minimalist essence. We develop rigorous typographic pairings, color palettes, and structural guidelines that maintain integrity across physical and digital media.",
    deliverables: [
      "Primary & Secondary Logo Marks",
      "Comprehensive Brand Guidelines",
      "Custom Typographic Hierarchy",
      "Curated Color & Material Palette",
      "Digital & Print Collateral Templates",
      "Brand Asset Export Package"
    ],
    workflow: [
      { step: "01", title: "Immersion", desc: "Analyzing market landscape, brand DNA, competitive positioning, and archetype." },
      { step: "02", title: "Direction", desc: "Crafting distinct visual directions with typographic and structural moodboards." },
      { step: "03", title: "Refinement", desc: "Fleshing out logo marks, color tokens, and collateral mockups." },
      { step: "04", title: "Guidelines", desc: "Publishing digital and PDF brand books with complete usage standards." }
    ],
    techStack: ["Illustrator", "InDesign", "Photoshop", "Glyphs", "Figma", "Blend"],
    pricingTiers: [
      {
        id: "essential",
        name: "Essential",
        tagline: "Core visual identity kit for startups and emerging creative ventures.",
        price: "$4,000 – $6,000",
        turnaround: "2 – 3 Weeks",
        features: [
          "Logo Suite (Primary & Secondary Marks)",
          "Typography Pairings & Palette",
          "Basic Brand Guidelines PDF",
          "Social Media & Favicon Assets",
          "2 Revision Rounds"
        ],
        ctaText: "Start Essential Identity"
      },
      {
        id: "studio",
        name: "Studio",
        tagline: "Holistic brand identity with digital design system and collateral templates.",
        price: "$8,500 – $13,500",
        turnaround: "4 – 5 Weeks",
        popular: true,
        features: [
          "Complete Identity System",
          "Master Brand Guidelines Book",
          "Print & Stationery Mockups",
          "Digital Presentation Template",
          "Social & Editorial Asset Kit",
          "Figma Component UI Kit"
        ],
        ctaText: "Book Studio Identity"
      },
      {
        id: "bespoke",
        name: "Bespoke",
        tagline: "Global brand overhaul with custom font ligature design and packaging.",
        price: "Custom Quote",
        turnaround: "6 – 10 Weeks",
        features: [
          "Global Rebranding Ecosystem",
          "Custom Typeface / Ligature Design",
          "Physical Packaging Specifications",
          "Brand Launch Campaign Film",
          "3D Product Mockup Suite",
          "Executive Brand Strategy Deck"
        ],
        ctaText: "Commission Rebrand"
      }
    ]
  },
  {
    num: "04",
    title: "Creative Content",
    slug: "creative-content",
    shortDescription: "Digital copywriting, motion scripting, and custom brand storytelling.",
    headline: "Editorial narratives and motion assets that captivate audiences.",
    subDescription: "We articulate brand stories through high-caliber editorial copywriting, motion graphics, and cinematic digital storytelling.",
    philosophyQuote: "Words build worlds; motion brings them to life.",
    fullPhilosophy: "Great design requires equally compelling messaging. We craft sharp editorial copy, brand manifestos, and script motion graphics that communicate technical complex ideas with elegance and impact.",
    deliverables: [
      "Editorial Copywriting & Voice Guidelines",
      "Motion Graphics & Micro-animations",
      "Product Manifestos & Brand Stories",
      "Video Storyboards & Scripting",
      "Interactive Editorial Layouts",
      "Social Campaign Copy Kits"
    ],
    workflow: [
      { step: "01", title: "Strategy", desc: "Defining brand voice tone, messaging pillars, and narrative arc." },
      { step: "02", title: "Drafting", desc: "Writing core web copy, editorial manifestos, and video scripts." },
      { step: "03", title: "Motion", desc: "Animating visual typography and graphic elements into motion clips." },
      { step: "04", title: "Polishing", desc: "Refining copy cadence, SEO alignment, and asset formatting." }
    ],
    techStack: ["After Effects", "Rive", "Cinema 4D", "Notion", "Figma", "Lottie"],
    pricingTiers: [
      {
        id: "essential",
        name: "Essential",
        tagline: "Targeted web copy package and core brand narrative.",
        price: "$3,500 – $5,000",
        turnaround: "2 Weeks",
        features: [
          "Website Hero & Core Page Copy",
          "Brand Voice Guidelines Sheet",
          "Tagline & Value Proposition Suite",
          "2 Editing Iterations"
        ],
        ctaText: "Order Essential Narrative"
      },
      {
        id: "studio",
        name: "Studio",
        tagline: "Comprehensive editorial copywriting and motion graphics package.",
        price: "$7,500 – $11,000",
        turnaround: "3 – 4 Weeks",
        popular: true,
        features: [
          "Full Website Copywriting (5 Pages)",
          "Brand Manifesto & Story",
          "3 Motion Graphic Micro-assets",
          "Social Media Content Strategy",
          "Video Script & Storyboard"
        ],
        ctaText: "Book Studio Content"
      },
      {
        id: "bespoke",
        name: "Bespoke",
        tagline: "Full-scale editorial publication, launch film scripting, and continuous content.",
        price: "Custom Quote",
        turnaround: "5 – 8 Weeks",
        features: [
          "Complete Brand Copy Ecosystem",
          "3D Motion & Video Production Script",
          "Physical Editorial Print Publication",
          "Quarterly Content Strategy Retainer",
          "Dedicated Creative Copywriter"
        ],
        ctaText: "Discuss Creative Scope"
      }
    ]
  },
  {
    num: "05",
    title: "SEO & Performance",
    slug: "seo-performance",
    shortDescription: "Core Web Vitals tuning, semantic indexing, and page load speed audit.",
    headline: "Speed optimization and search visibility engineered from the ground up.",
    subDescription: "We audit, optimize, and restructure web applications for 95+ Google Lighthouse scores and dominant organic search engine indexing.",
    philosophyQuote: "Velocity is a feature; discoverability is an engine.",
    fullPhilosophy: "Search engine performance cannot be an afterthought. We implement semantic HTML5 markup, structured JSON-LD schemas, dynamic sitemaps, and server-level caching to maximize speed and organic ranking.",
    deliverables: [
      "Google Core Web Vitals Optimization",
      "Semantic HTML5 & JSON-LD Schema",
      "Dynamic Sitemap & Robots Generation",
      "Image Compression & NextGen Format Pipeline",
      "Speed & Bottleneck Performance Audit",
      "Technical SEO Ranking Roadmap"
    ],
    workflow: [
      { step: "01", title: "Audit", desc: "Profiling site speed, Javascript bundle size, render-blocking scripts, and indexing." },
      { step: "02", title: "Refactoring", desc: "Optimizing DOM tree depth, image formats, font loading, and script deferral." },
      { step: "03", title: "Schema", desc: "Injecting rich snippet JSON-LD metadata and open-graph protocols." },
      { step: "04", title: "Monitoring", desc: "Setting up Search Console, Analytics 4, and real-user speed metrics." }
    ],
    techStack: ["Lighthouse", "Google Search Console", "Vercel Analytics", "Schema.org", "PageSpeed Insights", "PostCSS"],
    pricingTiers: [
      {
        id: "essential",
        name: "Essential",
        tagline: "One-time technical SEO and speed optimization overhaul.",
        price: "$3,000 – $4,500",
        turnaround: "1 – 2 Weeks",
        features: [
          "Core Web Vitals Speed Optimization",
          "Image Pipeline & Font Deferral",
          "Meta Titles, Descriptions & OG Setup",
          "Google Search Console Indexing"
        ],
        ctaText: "Optimize Essential Speed"
      },
      {
        id: "studio",
        name: "Studio",
        tagline: "Deep technical SEO, semantic schema injection, and quarterly optimization.",
        price: "$6,500 – $9,500",
        turnaround: "3 – 4 Weeks",
        popular: true,
        features: [
          "Lighthouse 95+ Score Guarantee",
          "Full JSON-LD Structured Schema",
          "Content Architecture & Keyphrase Map",
          "Competitive Keyword Analysis",
          "3-Month Ranking Strategy",
          "Monthly Telemetry Speed Report"
        ],
        ctaText: "Book Studio SEO"
      },
      {
        id: "bespoke",
        name: "Bespoke",
        tagline: "Enterprise search engine engine & continuous multi-region SEO retainer.",
        price: "Custom Quote",
        turnaround: "Ongoing Retainer",
        features: [
          "International i18n SEO Architecture",
          "Custom Edge Caching Rules (Cloudflare)",
          "Programmatic SEO Page Generation",
          "24/7 Real-Time Speed Monitoring",
          "Dedicated Technical SEO Engineer"
        ],
        ctaText: "Commission SEO Retainer"
      }
    ]
  },
  {
    num: "06",
    title: "Digital Strategy",
    slug: "digital-strategy",
    shortDescription: "Interaction blueprints, campaign mapping, and long-term platform strategy.",
    headline: "Architectural roadmaps that align digital products with business growth.",
    subDescription: "We conduct structural audits, map user journeys, and define long-term platform roadmaps that turn web traffic into high-value conversions.",
    philosophyQuote: "Strategy precedes execution; clarity precedes velocity.",
    fullPhilosophy: "Before building code or pixels, successful digital platforms require a clear strategic foundation. We work closely with founders and executive teams to identify market friction and map actionable product roadmaps.",
    deliverables: [
      "Comprehensive Digital Product Roadmap",
      "User Journey & Conversion Funnel Maps",
      "Competitive Landscape Benchmark",
      "Tech Architecture Evaluation",
      "Information Architecture Schematics",
      "Executive Growth Presentation Deck"
    ],
    workflow: [
      { step: "01", title: "Audit", desc: "Evaluating current platform metrics, user friction points, and tech debt." },
      { step: "02", title: "Mapping", desc: "Blueprint user personas, intent pathways, and conversion funnels." },
      { step: "03", title: "Strategy", desc: "Synthesizing product features into phased development milestones." },
      { step: "04", title: "Execution", desc: "Delivering strategic roadmaps and team sprint specifications." }
    ],
    techStack: ["Miro", "Notion", "Figma", "Google Analytics", "Hotjar", "Linear"],
    pricingTiers: [
      {
        id: "essential",
        name: "Essential",
        tagline: "Focused digital product audit and 90-day strategy roadmap.",
        price: "$3,500 – $5,000",
        turnaround: "2 Weeks",
        features: [
          "UX & Funnel Audit Report",
          "Competitive Positioning Map",
          "90-Day Digital Growth Roadmap",
          "Strategy Call (2 Hours)"
        ],
        ctaText: "Order Essential Strategy"
      },
      {
        id: "studio",
        name: "Studio",
        tagline: "Full platform strategy, information architecture, and technical blueprint.",
        price: "$7,500 – $12,000",
        turnaround: "3 – 4 Weeks",
        popular: true,
        features: [
          "Complete Platform Audit & Analysis",
          "User Journey & Wireframe Maps",
          "Tech Stack & Infrastructure Plan",
          "Feature Prioritization Matrix",
          "Sprint Backlog & Specification Deck",
          "Bi-Weekly Executive Syncs"
        ],
        ctaText: "Book Studio Strategy"
      },
      {
        id: "bespoke",
        name: "Bespoke",
        tagline: "Fractional Chief Digital Officer (CDO) advisory & ongoing platform steering.",
        price: "Custom Retainer",
        turnaround: "Quarterly Retainer",
        features: [
          "Fractional Chief Digital Officer Role",
          "Design & Dev Team Steering",
          "Quarterly Growth & Feature Sprints",
          "Investor & Stakeholder Pitch Decks",
          "Priority Strategic Consultation"
        ],
        ctaText: "Retain Digital Strategist"
      }
    ]
  }
];
