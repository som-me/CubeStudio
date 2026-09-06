"use client";

import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

interface Project {
  num: string;
  title: string;
  category: string;
  year: string;
  image: string;
  slug: string;
  colSpan: 1 | 2; // 1 = spans 1 column (half width on desktop), 2 = spans 2 columns (full width)
}

/**
 * PROJECTS DATA DIRECTORY
 * You can customize the layout structure by changing the `colSpan` of any item.
 * - colSpan: 1 -> Occupies exactly half the grid width on desktop
 * - colSpan: 2 -> Occupies full grid width on desktop
 * On mobile/tablet screens, all projects automatically stack vertically at full width.
 */
const PROJECTS: Project[] = [
  {
    num: "01",
    title: "Aethelgard Villa Concept",
    category: "Architecture & Space",
    year: "2025",
    image: "/image/work_villa.jpg",
    slug: "aethelgard-villa-concept",
    colSpan: 1,
  },
  {
    num: "02",
    title: "Nebula OS Terminal",
    category: "UI/UX & Web Engine",
    year: "2026",
    image: "/image/work_interface.jpg",
    slug: "nebula-os-terminal",
    colSpan: 1,
  },
  {
    num: "03",
    title: "Aurélia Editorial Identity",
    category: "Brand & Creative Direction",
    year: "2025",
    image: "/image/work_branding.jpg",
    slug: "aurelia-editorial-identity",
    colSpan: 2,
  },
  {
    num: "04",
    title: "Quantum Helix Engine",
    category: "System Art & Web3D",
    year: "2026",
    image: "/image/work_system.jpg",
    slug: "quantum-helix-engine",
    colSpan: 2,
  },
];

function WorkCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -80px 0px"
      }
    );

    const currentRef = cardRef.current;
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
    <Link
      ref={cardRef}
      href={`/work/${project.slug}`}
      className={`group flex flex-col justify-between transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] decoration-transparent outline-none ${project.colSpan === 2 ? "md:col-span-2" : "md:col-span-1"
        } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}`}
    >
      {/* Work Card Image Container */}
      <div
        className={`relative w-full overflow-hidden border border-neutral-200/30 bg-neutral-100/50 mb-5 transition-all duration-500 ${project.colSpan === 2 ? "aspect-[4/3] md:aspect-[16/9]" : "aspect-[4/3]"
          }`}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-neutral-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Work Card Details */}
      <div className="flex justify-between items-start px-1">
        <div className="space-y-1.5">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] tracking-wider uppercase text-neutral-400 font-medium">
              {project.num}
            </span>
            <h3 className="font-sans font-medium text-lg sm:text-xl text-neutral-800 transition-colors group-hover:text-black">
              {project.title}
            </h3>
          </div>
          <p className="text-xs text-neutral-500 font-normal pl-[26px]">
            {project.category}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-neutral-400 font-medium">
            {project.year}
          </span>
          <div className="w-8 h-8 rounded-full border border-neutral-200/60 flex items-center justify-center bg-white/50 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-out">
            <FiArrowUpRight className="w-4 h-4 text-neutral-700 transition-transform duration-300 group-hover:rotate-45" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function HeroWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = containerRef.current;
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
      ref={containerRef}
      className="relative z-20 w-full min-h-screen bg-[#faf9f6] flex flex-col justify-center items-center py-24 md:py-40 border-t border-neutral-100"
      style={{ ["--secondary" as string]: "#4a4744" }}
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-16 flex flex-col justify-between h-full">
        {/* Section Header */}
        <div
          className={`mb-16 md:mb-24 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${headerVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        >
          <p className="text-[10px] font-medium tracking-[0.3em] uppercase mb-5" style={{ color: "var(--secondary)", opacity: 0.65 }}>
            02 / Selected Works
          </p>
          <h2 className="font-sans font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-neutral-900 leading-[1.3] max-w-3xl">
            We craft digital platforms and structural concepts that define legacies.
          </h2>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-28 w-full">
          {PROJECTS.map((project) => (
            <WorkCard key={project.num} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
