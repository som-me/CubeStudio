import type { Metadata } from "next";
import ServiceList from "@/app/components/services/ServiceList";
import { SERVICES } from "@/app/services/data";

export const metadata: Metadata = {
  title: "Services — Cube® Studio",
  description: "Specialized digital architecture, WebGL engineering, branding systems, and performance tuning built with structural precision.",
};

export default function ServicesPage() {
  return (
    <main className="w-full min-h-screen bg-[#faf9f6] text-neutral-900 pt-32 pb-24 md:pb-40 border-t border-neutral-100" style={{ ["--secondary" as string]: "#4a4744" }}>
      <div className="w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-16 flex flex-col justify-between h-full">

        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <p className="text-[10px] font-mono font-medium tracking-[0.3em] uppercase mb-5" style={{ color: "var(--secondary)", opacity: 0.65 }}>
            03 / Our Capabilities
          </p>
          <h1 className="font-sans font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-neutral-900 leading-[1.25] max-w-3xl">
            Services designed to transform visual products into enduring assets.
          </h1>
        </div>

        {/* Editorial Row List */}
        <ServiceList services={SERVICES} />

      </div>
    </main>
  );
}
