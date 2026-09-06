import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export const metadata: Metadata = {
  title: "About — Cube® Studio",
  description: "Learn about Som, founder of Cube® Studio, and our minimalist engineering ethos.",
};

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-[#faf9f6] text-neutral-900 pt-32 pb-24 md:pb-40 border-t border-neutral-100">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        
        {/* 01. MASTER PAGE HEADER */}
        <div className="mb-20 max-w-4xl">
          <span className="text-[10px] font-mono font-medium tracking-[0.3em] uppercase text-neutral-400 mb-3 block">
            01 / About Studio
          </span>
          <h1 className="font-sans font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-neutral-950 leading-[1.18] mb-8">
            Crafting digital architecture for brands that demand performance, clarity & visual authority.
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-2xl">
            Founded by <span className="text-neutral-950 font-medium">Som</span>, Cube® Studio operates as an independent web design and custom engineering practice. We help small businesses, trade firms, and ambitious startups build online platforms that stand out.
          </p>
        </div>

        {/* 01.1 FOUNDER MANIFESTO */}
        <section className="bg-white border border-neutral-200/80 p-8 sm:p-12 lg:p-14 mb-20 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left: Founder Statement */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-semibold block">
                01.1 / Founder's Statement
              </span>
              
              <blockquote className="text-xl sm:text-2xl font-normal text-neutral-900 tracking-tight leading-relaxed font-sans border-l-2 border-neutral-900 pl-6 py-1">
                "I started Cube® Studio with a simple premise: your website should be your strongest asset, not a generic template. We write bespoke code, refine every spatial detail, and eliminate clunky page bloat so your business commands instant authority."
              </blockquote>

              <div className="pt-2 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-neutral-100 border border-neutral-300 flex items-center justify-center font-mono text-xs font-bold text-neutral-900">
                  S
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-950">Som</p>
                  <p className="text-xs font-mono text-neutral-500">Founder & Lead Engineer, Cube® Studio</p>
                </div>
              </div>
            </div>

            {/* Right: Clean Stat Matrix */}
            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-neutral-200/80 pt-8 lg:pt-0 lg:pl-10 space-y-8">
              
              <div className="space-y-1">
                <span className="font-mono text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight block">
                  100%
                </span>
                <p className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">Custom Codebase</p>
                <p className="text-xs text-neutral-600 leading-relaxed">Built from scratch with React & Next.js. Zero page builders or fragile plugin bloat.</p>
              </div>

              <div className="border-t border-neutral-100 pt-6 space-y-1">
                <span className="font-mono text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight block">
                  &lt; 1.0s
                </span>
                <p className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">Speed Tuning</p>
                <p className="text-xs text-neutral-600 leading-relaxed">Optimized Core Web Vitals engineered for top search engine rankings and conversion.</p>
              </div>

              <div className="border-t border-neutral-100 pt-6 space-y-1">
                <span className="font-mono text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight block">
                  1 : 1
                </span>
                <p className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">Direct Collaboration</p>
                <p className="text-xs text-neutral-600 leading-relaxed">Work directly with the lead engineer building your product. Fast iterations, zero friction.</p>
              </div>

            </div>

          </div>
        </section>

        {/* 01.2 OPERATING ETHOS */}
        <section className="mb-20">
          <div className="flex justify-between items-end mb-10 border-b border-neutral-200 pb-4">
            <div>
              <span className="font-mono text-[10px] font-bold tracking-[0.25em] uppercase text-neutral-400 block mb-3">
                01.2 / Operating Ethos
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-950">
                Built with Purpose & Precision
              </h2>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-medium hidden sm:inline-block">
              Minimalist Engineering
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card A */}
            <div className="p-7 bg-white border border-neutral-200/80 space-y-3 hover:border-neutral-900 transition-colors">
              <span className="font-mono text-xs text-neutral-400 block">A / Code</span>
              <h3 className="text-base font-semibold text-neutral-950 tracking-tight">
                Architectural Integrity
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Clean TypeScript, structured design tokens, and modular UI components built for long-term scalability.
              </p>
            </div>

            {/* Card B */}
            <div className="p-7 bg-white border border-neutral-200/80 space-y-3 hover:border-neutral-900 transition-colors">
              <span className="font-mono text-xs text-neutral-400 block">B / Design</span>
              <h3 className="text-base font-semibold text-neutral-950 tracking-tight">
                Spatial Balance
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Generous white space, disciplined typography hierarchy, and purposeful layout grid systems.
              </p>
            </div>

            {/* Card C */}
            <div className="p-7 bg-white border border-neutral-200/80 space-y-3 hover:border-neutral-900 transition-colors">
              <span className="font-mono text-xs text-neutral-400 block">C / Speed</span>
              <h3 className="text-base font-semibold text-neutral-950 tracking-tight">
                Performance First
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Instantaneous page transitions, asset compression, and clean DOM trees that search engines love.
              </p>
            </div>

            {/* Card D */}
            <div className="p-7 bg-white border border-neutral-200/80 space-y-3 hover:border-neutral-900 transition-colors">
              <span className="font-mono text-xs text-neutral-400 block">D / Clarity</span>
              <h3 className="text-base font-semibold text-neutral-950 tracking-tight">
                Transparent Delivery
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Clear project roadmaps, direct communication, and rapid production cycles with zero bureaucracy.
              </p>
            </div>

          </div>
        </section>

        {/* 01.3 TECHNICAL SPECIFICATIONS STRIP */}
        <section className="border-y border-neutral-200/80 py-8 mb-20">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-neutral-400 font-semibold mb-4">
            <span>01.3 / Studio Specifications</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-mono">
            <div className="space-y-1">
              <span className="text-neutral-400 block text-[10px] uppercase tracking-wider font-semibold">Core Stack</span>
              <p className="text-neutral-900 font-medium">Next.js • React • TypeScript</p>
            </div>
            <div className="space-y-1">
              <span className="text-neutral-400 block text-[10px] uppercase tracking-wider font-semibold">Focus Areas</span>
              <p className="text-neutral-900 font-medium">Web Apps • SCADA • Brand Systems</p>
            </div>
            <div className="space-y-1">
              <span className="text-neutral-400 block text-[10px] uppercase tracking-wider font-semibold">Location</span>
              <p className="text-neutral-900 font-medium">Bhubaneswar, Odisha • Global</p>
            </div>
            <div className="space-y-1">
              <span className="text-neutral-400 block text-[10px] uppercase tracking-wider font-semibold">Availability</span>
              <p className="text-neutral-900 font-medium">Now Booking Q3 / Q4 Projects</p>
            </div>
          </div>
        </section>

        {/* 01.4 MINIMALIST CTA */}
        <section className="bg-white border border-neutral-200/80 p-8 sm:p-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block font-semibold">
              01.4 / Start A Conversation
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold text-neutral-950 tracking-tight">
              Ready to elevate your digital presence?
            </h3>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 text-xs font-mono uppercase tracking-wider font-semibold transition-all group"
          >
            Get In Touch
            <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </section>

      </div>
    </main>
  );
}
