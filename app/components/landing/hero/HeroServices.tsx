"use client";

import { useEffect, useRef, useState } from "react";
import ServiceList from "@/app/components/services/ServiceList";
import HeroPricing from "@/app/components/landing/hero/HeroPricing";
import { SERVICES } from "@/app/services/data";

export default function HeroServices() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-20 w-full min-h-screen bg-[#faf9f6] flex flex-col justify-center items-center py-24 md:py-40 border-t border-neutral-100"
      style={{ ["--secondary" as string]: "#4a4744" }}
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-16 flex flex-col justify-between h-full space-y-24 lg:space-y-32">

        <div>
          {/* Section Header */}
          <div className="mb-16 md:mb-24">
            <p className="text-[10px] font-medium tracking-[0.3em] uppercase mb-5" style={{ color: "var(--secondary)", opacity: 0.65 }}>
              03 / Our Capabilities
            </p>
            <h2 className="font-sans font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-neutral-900 leading-[1.3] max-w-3xl">
              We offer services that transform user interfaces into structural brand assets.
            </h2>
          </div>

          {/* Services Editorial Row List */}
          <div
            className={`w-full transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <ServiceList services={SERVICES} />
          </div>
        </div>

        {/* Studio Pricing Section Below Services List */}
        <div
          className={`w-full transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <HeroPricing />
        </div>

      </div>
    </section>
  );
}
