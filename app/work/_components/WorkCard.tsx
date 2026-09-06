"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export interface Project {
  num: string;
  title: string;
  category: string;
  year: string;
  image: string;
  slug: string;
  hookText: string;
  btnText: string;
  colSpan: 1 | 2;
}

export default function WorkCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    // 1. Intersection Observer for Fade-in Slide-up
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -60px 0px"
      }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // 2. Parallax Scroll Effect
    const handleScroll = () => {
      if (!currentRef) return;
      const rect = currentRef.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate how far the card is from the center of the viewport
      const cardCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const distanceFromCenter = cardCenter - viewportCenter;

      // Calculate translation (subtle speed factor 0.06)
      const translation = distanceFromCenter * 0.06;
      setTranslateY(translation);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run initially to calculate positions
    handleScroll();

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link
      ref={cardRef}
      href={`/work/${project.slug}`}
      style={{ borderRadius: 0 }}
      className={`group relative w-full aspect-square md:aspect-[1.1] rounded-none overflow-hidden flex flex-col justify-between p-6 sm:p-10 md:p-6 lg:p-10 border border-neutral-200/20 bg-neutral-900 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${project.colSpan === 2 ? "md:col-span-2" : "md:col-span-1"
        } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}`}
    >
      {/* Background Image Layer with Gradient Overlay and Parallax Transform */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          style={{
            transform: `translate3d(0, ${translateY}px, 0) scale(1.18)`,
          }}
          className="w-full h-full object-cover transition-transform duration-100 ease-out will-change-transform"
        />
        {/* Sleek shadow overlays to ensure typography readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/75 z-10" />
      </div>

      {/* Top Section: Category & Hook */}
      <div className="relative z-20 space-y-2 md:space-y-1 lg:space-y-2">
        <p className="font-mono text-[9px] sm:text-[10px] font-medium tracking-[0.2em] uppercase text-white/55">
          {project.num} / {project.category} • {project.year}
        </p>
        <h3 className="font-sans font-medium text-xl sm:text-2xl md:text-lg lg:text-3xl tracking-tight text-white leading-[1.25] max-w-lg transition-colors group-hover:text-neutral-100">
          {project.hookText}
        </h3>
      </div>

      {/* Bottom Section: Outline Pill CTA Button */}
      <div className="relative z-20">
        <span className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 md:px-4 md:py-2 lg:px-6 lg:py-3 rounded-full border border-white/30 text-xs sm:text-sm md:text-xs lg:text-sm font-medium text-white transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-white">
          {project.btnText}
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
