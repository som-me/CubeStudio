import type { Metadata } from "next";
import { FiExternalLink, FiChevronDown, FiShield, FiCheckCircle, FiAward } from "react-icons/fi";
import { FEATURED_CLIENT, PHASE_1_TRADES, PHASE_2_SECTORS } from "./data";

export const metadata: Metadata = {
  title: "Industries We Serve — Cube® Studio",
  description: "Visual overview of our primary focus in Home Services, Construction, and Heavy Industrial Power Engineering.",
};

export default function IndustriesPage() {
  return (
    <main className="w-full min-h-screen bg-[#faf9f6] text-neutral-900 pt-32 pb-24 md:pb-40 border-t border-neutral-100">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-16">

        {/* 1. MASTER PAGE HEADER */}
        <div className="mb-16 max-w-3xl">
          <span className="text-[10px] font-mono font-medium tracking-[0.3em] uppercase text-neutral-400 mb-3 block">
            04 / Industry Focus
          </span>
          <h1 className="font-sans font-medium text-3xl sm:text-4xl lg:text-5xl tracking-tight text-neutral-950 leading-tight mb-4">
            Industries We Serve
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
            Custom web platforms, digital brand identities, and high-performance web applications engineered specifically for trade & industrial sectors.
          </p>
        </div>

        {/* 2. FEATURED SUCCESS STORY (MINIMALIST & SITE-WIDE DESIGN CONSISTENCY) */}
        <section className="mb-20">
          <div className="flex justify-between items-end mb-6 border-b border-neutral-200 pb-4">
            <div>
              <span className="font-mono text-[10px] font-bold tracking-[0.25em] uppercase text-neutral-400 block mb-1">
                04.1 / Featured Success Story
              </span>
              <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-950">
                Live Production Case Study
              </h2>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest bg-neutral-900 text-white px-3.5 py-1 font-semibold rounded-full">
              Live Production Build
            </span>
          </div>

          <div className="bg-white border border-neutral-200/80 p-8 sm:p-10 lg:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* Clean Image Frame */}
              <div className="lg:col-span-6 relative border border-neutral-200 bg-white aspect-[16/10] flex items-center justify-center p-8 sm:p-12 group overflow-hidden">
                <img
                  src={FEATURED_CLIENT.image}
                  alt={FEATURED_CLIENT.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Client Info & Credibility Stats */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-2">
                    <span>{FEATURED_CLIENT.location}</span>
                    <span className="text-neutral-900 font-semibold uppercase tracking-wider">Live Site</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-950 mb-1">
                    {FEATURED_CLIENT.name}
                  </h3>
                  <p className="font-mono text-xs text-neutral-500 mb-4">
                    {FEATURED_CLIENT.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    {FEATURED_CLIENT.description}
                  </p>
                </div>

                {/* Scannable Credibility Stat Row */}
                <div className="space-y-2.5 border-y border-neutral-200/80 py-4">
                  <div className="flex items-center gap-2.5 text-xs text-neutral-800">
                    <FiAward className="w-4 h-4 text-neutral-950 flex-shrink-0" />
                    <span className="font-medium">{FEATURED_CLIENT.stats[0]}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-neutral-800">
                    <FiShield className="w-4 h-4 text-neutral-950 flex-shrink-0" />
                    <span className="font-medium">{FEATURED_CLIENT.stats[1]}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-neutral-800">
                    <FiCheckCircle className="w-4 h-4 text-neutral-950 flex-shrink-0" />
                    <span className="font-medium">{FEATURED_CLIENT.stats[2]}</span>
                  </div>
                </div>

                {/* External Link CTA */}
                <div>
                  <a
                    href={FEATURED_CLIENT.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 font-semibold text-xs font-mono uppercase tracking-wider transition-all group"
                  >
                    Visit Live Site (jyotistabiliser.in)
                    <FiExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* 3. PHASE 1 — CURRENT FOCUS: HOME SERVICES & CONSTRUCTION */}
        <section className="mb-16">
          {/* Section Header */}
          <div className="flex justify-between items-end mb-8 border-b border-neutral-200 pb-4">
            <div>
              <span className="font-mono text-[10px] font-bold tracking-[0.25em] uppercase text-neutral-400 block mb-1">
                04.2 / Primary Focus (Phase 1)
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-950">
                Home Services & Construction
              </h2>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest bg-neutral-900 rounded-full text-white px-3.5 py-1 font-semibold">
              Current Core
            </span>
          </div>

          {/* 6-Tile Mosaic Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {PHASE_1_TRADES.map((trade) => (
              <div
                key={trade.id}
                className="group relative w-full aspect-[4/3] rounded-none overflow-hidden bg-neutral-900 border border-neutral-200/50"
              >
                {/* Photo Layer with Zoom Transition */}
                <img
                  src={trade.image}
                  alt={trade.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Label Overlay Bottom-Left */}
                <div className="absolute bottom-5 left-5 right-5 space-y-1">
                  <h3 className="font-sans font-medium text-lg sm:text-xl text-white leading-snug">
                    {trade.title}
                  </h3>
                  <p className="font-mono text-[10px] text-neutral-300 uppercase tracking-wider">
                    {trade.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. VISUAL CONNECTOR BETWEEN PHASE 1 AND PHASE 2 */}
        <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
          <div className="w-10 h-10 border border-neutral-300 flex items-center justify-center rounded-full text-neutral-600 bg-white shadow-sm animate-bounce">
            <FiChevronDown className="w-5 h-5" />
          </div>
          <span className="font-mono text-[11px] font-semibold tracking-[0.25em] uppercase text-neutral-500">
            Expanding Into &rarr;
          </span>
        </div>

        {/* 5. PHASE 2 — EXPANSION & FUTURE SECTORS */}
        <section className="mb-20">
          {/* Section Header */}
          <div className="flex justify-between items-end mb-8 border-b border-neutral-200 pb-4">
            <div>
              <span className="font-mono text-[10px] font-bold tracking-[0.25em] uppercase text-neutral-400 block mb-1">
                04.3 / Growth Roadmap (Phase 2)
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-950">
                Expansion Sectors
              </h2>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest bg-neutral-200 text-neutral-800 px-3.5 py-1 font-semibold rounded-full">
              Future Scale
            </span>
          </div>

          {/* 4-Grid Sector Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PHASE_2_SECTORS.map((sector) => (
              <div
                key={sector.id}
                className="group relative w-full aspect-square rounded-none overflow-hidden bg-neutral-900 border border-neutral-200/50"
              >
                {/* Photo Layer */}
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                {/* Label Overlay Bottom-Left */}
                <div className="absolute bottom-5 left-5 right-5 space-y-1">
                  <span className="inline-block font-mono text-[9px] uppercase tracking-widest bg-white/10 text-white/90 px-2.5 py-0.5 rounded-none border border-white/10 mb-1">
                    {sector.tag}
                  </span>
                  <h3 className="font-sans font-medium text-base text-white leading-snug">
                    {sector.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
