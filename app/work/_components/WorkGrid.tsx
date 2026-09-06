"use client";

import WorkCard, { Project } from "./WorkCard";

const PROJECTS: Project[] = [
  {
    num: "01",
    title: "Aethelgard Villa Concept",
    category: "Architecture & Space",
    year: "2025",
    image: "/image/work_villa.jpg",
    slug: "aethelgard-villa-concept",
    hookText: "We build digital legacies with structural integrity and concrete form.",
    btnText: "Explore Space",
    colSpan: 1,
  },
  {
    num: "02",
    title: "Nebula OS Terminal",
    category: "UI/UX & Web Engine",
    year: "2026",
    image: "/image/work_interface.jpg",
    slug: "nebula-os-terminal",
    hookText: "High-performance dashboard interfaces for decentralized system structures.",
    btnText: "Launch Terminal",
    colSpan: 1,
  },
  {
    num: "03",
    title: "Aurélia Editorial Identity",
    category: "Brand & Creative Direction",
    year: "2025",
    image: "/image/work_branding.jpg",
    slug: "aurelia-editorial-identity",
    hookText: "Tactile, timeless brand identity designed for slow luxury ateliers.",
    btnText: "View Brand",
    colSpan: 2,
  },
  {
    num: "04",
    title: "Quantum Helix Engine",
    category: "System Art & Web3D",
    year: "2026",
    image: "/image/work_system.jpg",
    slug: "quantum-helix-engine",
    hookText: "Dynamic WebGL simulation engines rendering visual helix kinetics.",
    btnText: "Run Simulation",
    colSpan: 2,
  },
];

export default function WorkGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-6xl mx-auto">
      {PROJECTS.map((project) => (
        <WorkCard key={project.num} project={project} />
      ))}
    </div>
  );
}
