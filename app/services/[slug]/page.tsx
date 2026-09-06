import { notFound } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft, FiCheck, FiArrowRight } from "react-icons/fi";
import type { Metadata } from "next";
import ServiceList from "@/app/components/services/ServiceList";
import HeroPricing from "@/app/components/landing/hero/HeroPricing";
import { SERVICES } from "@/app/services/data";

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found — Cube® Studio",
    };
  }

  return {
    title: `${service.title} — Cube® Studio`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen bg-[#faf9f6] text-neutral-900 pt-28 pb-24 md:pb-40">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-16">

        {/* 1. Top Nav */}
        <div className="mb-12 lg:mb-16">
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-black transition-colors"
          >
            <FiArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1.5" />
            Back to Services
          </Link>
        </div>

        {/* 2. Header */}
        <div className="mb-16 lg:mb-24">
          <p className="text-[10px] font-mono font-medium tracking-[0.3em] uppercase text-neutral-400 mb-5">
            {service.num} / {service.title}
          </p>
          <h1 className="font-sans font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-neutral-950 leading-[1.15] max-w-4xl mb-6">
            {service.headline}
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-neutral-600 font-normal max-w-2xl">
            {service.subDescription}
          </p>
        </div>

        {/* 3. Body — 12-column grid, 4/8 split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start border-t border-neutral-200 pt-12 lg:pt-16 mb-24 lg:mb-32">
          
          {/* Left Side (4 columns, sticky) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
            {/* Philosophy Pull-Quote */}
            <div className="border-l-2 border-neutral-900 pl-5 py-1">
              <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block mb-2 font-semibold">
                Studio Philosophy
              </span>
              <p className="text-sm sm:text-base font-serif italic text-neutral-800 leading-snug">
                &ldquo;{service.philosophyQuote}&rdquo;
              </p>
            </div>

            {/* Tech Stack & Tools Badges */}
            <div className="space-y-3 pt-2">
              <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block font-semibold">
                Tools & Technologies
              </span>
              <div className="flex flex-wrap gap-2">
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono bg-neutral-200/50 border border-neutral-200/80 rounded px-2.5 py-1 text-neutral-700 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side (8 columns) */}
          <div className="lg:col-span-8 space-y-16">
            {/* Full Philosophy Narrative */}
            <div className="space-y-4">
              <h3 className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 font-semibold">
                Methodology & Execution
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-neutral-700 font-normal">
                {service.fullPhilosophy}
              </p>
            </div>

            {/* Core Deliverables — Plain 2-Column Text List */}
            <div className="space-y-6 pt-4 border-t border-neutral-200/60">
              <h3 className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 font-semibold">
                Core Deliverables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center flex-shrink-0">
                      <FiCheck className="w-3 h-3" />
                    </div>
                    <span className="text-sm font-medium text-neutral-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Timeline — 4 Numbered Steps */}
            <div className="space-y-8 pt-4 border-t border-neutral-200/60">
              <h3 className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 font-semibold">
                Execution Process
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                {service.workflow.map((w) => (
                  <div key={w.step} className="space-y-2 relative">
                    <span className="font-mono text-xs font-semibold text-neutral-400 block border-b border-neutral-200 pb-2">
                      {w.step}
                    </span>
                    <h4 className="text-sm font-semibold text-neutral-900">
                      {w.title}
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {w.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* 4. Full Services List */}
        <div className="mb-24 lg:mb-32 border-t border-neutral-200 pt-16">
          <div className="mb-10 flex justify-between items-end">
            <div>
              <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-400 mb-2 font-medium">
                Complete Index
              </p>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-900">
                Explore All Services
              </h2>
            </div>
          </div>
          <ServiceList services={SERVICES} />
        </div>

        {/* 5. Pricing Section — Shared Component */}
        <HeroPricing pricingTiers={service.pricingTiers} serviceSlug={service.slug} />

        {/* 6. Footer Slim CTA */}
        <div className="mt-20 text-center border-t border-neutral-200/60 pt-12">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3">
            Have a custom architecture or enterprise inquiry?
          </p>
          <Link
            href={`/contact?service=${service.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-black transition-colors group"
          >
            Schedule a Custom Strategic Session
            <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </main>
  );
}
