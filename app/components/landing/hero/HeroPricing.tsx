"use client";

import Link from "next/link";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { PricingTier } from "@/app/services/data";

interface HeroPricingProps {
  pricingTiers?: PricingTier[];
  serviceSlug?: string;
  title?: string;
  subTitle?: string;
}

const DEFAULT_STUDIO_TIERS: PricingTier[] = [
  {
    id: "essential",
    name: "Essential",
    tagline: "Core digital branding or targeted lander architecture for agile teams.",
    price: "$4,500 – $6,500",
    turnaround: "2 – 3 Weeks",
    features: [
      "Custom Single-Page Next.js Setup",
      "Tailwind CSS & Typographic System",
      "SEO Meta Tags & Schema Setup",
      "Vercel Edge Deployment",
      "30-Day Support Guarantee"
    ],
    ctaText: "Request Essential Tier"
  },
  {
    id: "studio",
    name: "Studio",
    tagline: "Complete multi-route web platform with smooth motion & CMS integration.",
    price: "$9,500 – $14,000",
    turnaround: "4 – 6 Weeks",
    popular: true,
    features: [
      "Multi-Page Next.js App Architecture",
      "Headless CMS (Sanity / Strapi)",
      "Lenis Smooth Scroll & GSAP Motion",
      "Core Web Vitals 95+ Score",
      "Custom Iconography & Assets",
      "60-Day Dedicated Support"
    ],
    ctaText: "Book Studio Tier"
  },
  {
    id: "bespoke",
    name: "Bespoke",
    tagline: "Custom WebGL 3D design, enterprise microservices, and CDO advisory.",
    price: "Custom Quote",
    turnaround: "6 – 10 Weeks",
    features: [
      "Custom WebGL / Three.js Shaders",
      "Global Edge Cloud Architecture",
      "3D Product Render Suite",
      "Dedicated Art Director",
      "24/7 Priority SLA Team",
      "Full Code Ownership Transfer"
    ],
    ctaText: "Consult Bespoke Scope"
  }
];

export default function HeroPricing({
  pricingTiers,
  serviceSlug,
  title = "Select Engagement Tier",
  subTitle = "Predictable timelines, clear scope boundaries, and zero hidden costs. Choose the tier best suited to your project."
}: HeroPricingProps) {
  const tiers = pricingTiers || DEFAULT_STUDIO_TIERS;

  return (
    <section className="w-full bg-neutral-950 text-white rounded-none p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-2xl border border-neutral-800">
      {/* Subtle Radial Glow Backdrops */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-neutral-700/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-neutral-800/25 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between mb-8 lg:mb-10 gap-4 pb-5 border-b border-neutral-800/80">
        <div className="max-w-2xl">
          <span className="font-mono text-[9px] font-medium tracking-[0.3em] uppercase text-neutral-400 block mb-2">
            Transparent Investment
          </span>
          <h2 className="font-sans font-medium text-2xl sm:text-3xl lg:text-4xl tracking-tight text-white leading-tight mb-2">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-normal">
            {subTitle}
          </p>
        </div>

        <div className="hidden lg:flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-neutral-400 bg-neutral-900/90 border border-neutral-800 px-3.5 py-2 rounded-full whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Fixed Scope &bull; Direct Access &bull; Complete Ownership
        </div>
      </div>

      {/* 3 Tier Grid with Single-Line Price Alignment */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10 items-stretch">
        {tiers.map((tier) => {
          const contactHref = serviceSlug
            ? `/contact?service=${serviceSlug}&tier=${tier.id}`
            : `/contact?tier=${tier.id}`;

          return (
            <div
              key={tier.id}
              className={`group relative rounded-none p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 h-full ${tier.popular
                  ? "bg-neutral-900/90 border-2 border-white/50 shadow-2xl shadow-black/80 ring-1 ring-white/20"
                  : "bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700/80 hover:bg-neutral-900/60"
                }`}
            >
              {/* Badge Alignment */}
              <div className="flex justify-between items-center mb-3">
                <span className="font-mono text-[9px] font-semibold uppercase tracking-widest text-neutral-400">
                  Tier / 0{tiers.indexOf(tier) + 1}
                </span>
                {tier.popular ? (
                  <span className="bg-white text-neutral-950 font-mono text-[8px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full shadow-sm">
                    Recommended
                  </span>
                ) : (
                  <span className="font-mono text-[8px] text-neutral-500 uppercase tracking-widest">
                    Standard Scope
                  </span>
                )}
              </div>

              {/* Card Content Top */}
              <div className="flex-1 flex flex-col">
                {/* Title & Tagline */}
                <div className="mb-3">
                  <h3 className="text-xl font-semibold text-white tracking-tight mb-1">
                    {tier.name}
                  </h3>
                  <p className="text-[11px] text-neutral-400 leading-snug min-h-[28px]">
                    {tier.tagline}
                  </p>
                </div>

                {/* Single-Line Price & Turnaround Box */}
                <div className="border-t border-b border-neutral-800/80 py-3 my-2 flex items-center justify-between gap-2 min-h-[50px]">
                  <span className="text-base sm:text-lg lg:text-lg font-bold tracking-tight text-white whitespace-nowrap">
                    {tier.price}
                  </span>
                  <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-wider whitespace-nowrap">
                    Est. {tier.turnaround}
                  </span>
                </div>

                {/* Feature List */}
                <div className="space-y-2 my-3 flex-1">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 block font-semibold">
                    Deliverables Included:
                  </span>
                  <ul className="space-y-2">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-[11px] text-neutral-300 leading-tight">
                        <div className="w-3.5 h-3.5 rounded-full bg-white/10 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                          <FiCheck className="w-2.5 h-2.5" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA Button Aligned at Bottom */}
              <div className="pt-4 border-t border-neutral-800/50 mt-auto">
                <Link
                  href={contactHref}
                  className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${tier.popular
                      ? "bg-white text-neutral-950 hover:bg-neutral-100 shadow-md hover:shadow-white/10"
                      : "bg-neutral-800/80 text-white hover:bg-white hover:text-neutral-950 border border-neutral-700/60"
                    }`}
                >
                  {tier.ctaText}
                  <FiArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}
