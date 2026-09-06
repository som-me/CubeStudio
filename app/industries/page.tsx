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

        {/* 1. PAGE HEADER — mirrors about/page.tsx */}
        <div className="mb-20 max-w-4xl">
          <span className="text-[10px] font-mono font-medium tracking-[0.3em] uppercase text-neutral-400 mb-3 block">
            04 / Industry Focus
          </span>
          <h1 className="font-sans font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-neutral-950 leading-[1.18] mb-6">
            Industries We Serve
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-2xl">
            Custom web platforms, digital brand identities, and high-performance web applications engineered specifically for trade & industrial sectors.
          </p>
        </div>

        {/* 2. FEATURED SUCCESS STORY — mirrors about page manifesto card */}
        <section className="bg-white border border-neutral-200/80 p-8 sm:p-12 lg:p-14 mb-20 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

            {/* Left: Image Showcase */}
            <div className="lg:col-span-6 relative border border-neutral-200 bg-neutral-50 aspect-[16/10] flex items-center justify-center p-8 sm:p-12 group overflow-hidden">
              <img
                src={FEATURED_CLIENT.image}
                alt={FEATURED_CLIENT.name}
                className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Right: Client Info */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6 border-t lg:border-t-0 lg:border-l border-neutral-200/80 pt-8 lg:pt-0 lg:pl-10">

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-semibold">
                    04.1 / Featured Success Story
                  </span>
                  <span className="self-start font-mono text-[10px] uppercase tracking-widest bg-neutral-900 text-white px-3 py-1 font-semibold rounded-full whitespace-nowrap">
                    Live Build
                  </span>
                </div>

                <div className="border-t border-neutral-100 pt-4">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 mb-3">
                    {FEATURED_CLIENT.location}
                  </p>
                  <h2 className="font-sans font-semibold text-2xl sm:text-3xl tracking-tight text-neutral-950 mb-1">
                    {FEATURED_CLIENT.name}
                  </h2>
                  <p className="font-mono text-xs text-neutral-500 mb-4">
                    {FEATURED_CLIENT.subtitle}
                  </p>
                  <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                    {FEATURED_CLIENT.description}
                  </p>
                </div>
              </div>

              {/* Credibility Stats — mirrors about page stat matrix */}
              <div className="border-t border-neutral-100 pt-6 space-y-6">
                <div className="space-y-1">
                  <FiAward className="w-4 h-4 text-neutral-950 mb-2" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 font-semibold block">
                    Track Record
                  </span>
                  <p className="text-xs text-neutral-700 leading-relaxed">{FEATURED_CLIENT.stats[0]}</p>
                </div>
                <div className="border-t border-neutral-100 pt-6 space-y-1">
                  <FiShield className="w-4 h-4 text-neutral-950 mb-2" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 font-semibold block">
                    Certification
                  </span>
                  <p className="text-xs text-neutral-700 leading-relaxed">{FEATURED_CLIENT.stats[1]}</p>
                </div>
                <div className="border-t border-neutral-100 pt-6 space-y-1">
                  <FiCheckCircle className="w-4 h-4 text-neutral-950 mb-2" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 font-semibold block">
                    Enterprise Clients
                  </span>
                  <p className="text-xs text-neutral-700 leading-relaxed">{FEATURED_CLIENT.stats[2]}</p>
                </div>
              </div>

              {/* CTA */}
              <div className="border-t border-neutral-100 pt-6">
                <a
                  href={FEATURED_CLIENT.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 py-3.5 px-6 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 font-semibold text-xs font-mono uppercase tracking-wider transition-all group"
                >
                  Visit Live Site
                  <FiExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <p className="font-mono text-[10px] text-neutral-400 mt-2.5">jyotistabiliser.in</p>
              </div>

            </div>
          </div>
        </section>

        {/* 3. HOME SERVICES & CONSTRUCTION — mirrors about page ethos section */}
        <section className="mb-20">
          <div className="flex justify-between items-end mb-10 border-b border-neutral-200 pb-4">
            <div>
              <span className="font-mono text-[10px] font-bold tracking-[0.25em] uppercase text-neutral-400 block mb-3">
                04.2 / Primary Focus (Phase 1)
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-950">
                Home Services & Construction
              </h2>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-medium hidden sm:inline-block">
              Current Core
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PHASE_1_TRADES.map((trade) => (
              <div
                key={trade.id}
                className="group relative w-full aspect-[4/3] overflow-hidden bg-neutral-900 border border-neutral-200/50"
              >
                <img
                  src={trade.image}
                  alt={trade.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 space-y-1">
                  <h3 className="font-sans font-medium text-base sm:text-lg text-white leading-snug">
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

        {/* 4. PHASE DIVIDER — mirrors about page specs strip */}
        <section className="border-y border-neutral-200/80 py-8 mb-20">
          <div className="flex items-center justify-center gap-4">
            <div className="w-8 h-8 border border-neutral-300 flex items-center justify-center rounded-full text-neutral-500 bg-white animate-bounce">
              <FiChevronDown className="w-4 h-4" />
            </div>
            <span className="font-mono text-[10px] font-semibold tracking-[0.25em] uppercase text-neutral-400">
              Expanding Into Phase 2
            </span>
          </div>
        </section>

        {/* 5. EXPANSION SECTORS — mirrors about page 4-col ethos cards */}
        <section className="mb-20">
          <div className="flex justify-between items-end mb-10 border-b border-neutral-200 pb-4">
            <div>
              <span className="font-mono text-[10px] font-bold tracking-[0.25em] uppercase text-neutral-400 block mb-3">
                04.3 / Growth Roadmap (Phase 2)
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-950">
                Expansion Sectors
              </h2>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-medium hidden sm:inline-block">
              Future Scale
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PHASE_2_SECTORS.map((sector) => (
              <div
                key={sector.id}
                className="group relative w-full aspect-square overflow-hidden bg-neutral-900 border border-neutral-200/50"
              >
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-300 block mb-1">
                    {sector.tag}
                  </span>
                  <h3 className="font-sans font-medium text-sm text-white leading-snug">
                    {sector.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. CTA — mirrors about page CTA section exactly */}
        <section className="bg-white border border-neutral-200/80 p-8 sm:p-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block font-semibold">
              04.4 / Work With Us
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold text-neutral-950 tracking-tight">
              Is your industry on this list?
            </h3>
            <p className="text-sm text-neutral-600 font-normal leading-relaxed max-w-md">
              We take on a limited number of new clients each quarter. Get in touch to discuss your project.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2.5 py-3.5 px-7 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 text-xs font-mono uppercase tracking-wider font-semibold transition-all group whitespace-nowrap"
          >
            Get In Touch
            <FiExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </section>

      </div>
    </main>
  );
}
