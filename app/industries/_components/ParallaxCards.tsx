"use client";

import { useEffect, useRef, useState } from "react";
import { PHASE_1_TRADES, PHASE_2_SECTORS } from "../data";

export function ParallaxTradeCard({ trade }: { trade: typeof PHASE_1_TRADES[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const cardCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const distanceFromCenter = cardCenter - viewportCenter;
      const translation = distanceFromCenter * 0.06;
      setTranslateY(translation);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-none overflow-hidden bg-neutral-900 border border-neutral-200/60 shadow-sm"
    >
      {/* Photo Layer with Parallax Scroll Transform */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={trade.image}
          alt={trade.title}
          style={{
            transform: `translate3d(0, ${translateY}px, 0) scale(1.18)`,
          }}
          className="w-full h-full object-cover transition-transform duration-100 ease-out will-change-transform group-hover:scale-[1.22]"
        />
        {/* Scrim Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Label Overlay Bottom-Left */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 z-20 space-y-1 pointer-events-none">
        <h3 className="font-sans font-medium text-base sm:text-lg lg:text-xl text-white leading-snug">
          {trade.title}
        </h3>
        <p className="font-mono text-[10px] sm:text-xs text-neutral-300 uppercase tracking-wider">
          {trade.subtitle}
        </p>
      </div>
    </div>
  );
}

export function ParallaxSectorCard({ sector }: { sector: typeof PHASE_2_SECTORS[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const cardCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const distanceFromCenter = cardCenter - viewportCenter;
      const translation = distanceFromCenter * 0.06;
      setTranslateY(translation);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative w-full aspect-[16/10] sm:aspect-square rounded-none overflow-hidden bg-neutral-900 border border-neutral-200/60 shadow-sm"
    >
      {/* Photo Layer with Parallax Scroll Transform */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={sector.image}
          alt={sector.title}
          style={{
            transform: `translate3d(0, ${translateY}px, 0) scale(1.18)`,
          }}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
        />
        {/* Scrim Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Label Overlay Bottom-Left */}
      <div className="absolute inset-x-0 bottom-0 p-5 z-20 space-y-1 pointer-events-none">
        <span className="inline-block font-mono text-[9px] uppercase tracking-widest bg-white/10 text-white/90 px-2.5 py-0.5 rounded-full border border-white/10 mb-1">
          {sector.tag}
        </span>
        <h3 className="font-sans font-medium text-sm sm:text-base text-white leading-snug">
          {sector.title}
        </h3>
      </div>
    </div>
  );
}
