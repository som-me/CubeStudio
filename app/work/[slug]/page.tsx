import { notFound } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft, FiClock, FiLayers, FiBriefcase, FiCompass } from "react-icons/fi";
import type { Metadata } from "next";

interface ProjectDetail {
  title: string;
  category: string;
  year: string;
  image: string;
  client: string;
  role: string;
  services: string[];
  techStack: string[];
  overview: string;
  challenge: string;
  solution: string;
}

const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  "aethelgard-villa-concept": {
    title: "Aethelgard Villa Concept",
    category: "Architecture & Space",
    year: "2025",
    image: "/image/work_villa.jpg",
    client: "Private Client",
    role: "Architectural Visualizer",
    services: ["3D Spatial Design", "Lighting Studies", "Brutalist Landscaping"],
    techStack: ["Unreal Engine 5", "Blender", "CAD Rendering"],
    overview: "Aethelgard Villa is an architectural exploration of brutalist design integrated into coastal environments. The structure uses self-shading concrete blocks, extensive glazing, and cantilevered slabs to offer immersive panoramas while maintaining thermodynamic efficiency.",
    challenge: "Harmonizing raw structural concrete with the organic textures of coastal vegetation, while maintaining a sense of luxurious comfort and domestic intimacy.",
    solution: "We designed open-plan living zones that transition seamlessly into stone-walled outdoor patios, using low-angle natural light to highlight the texture of form-work concrete."
  },
  "nebula-os-terminal": {
    title: "Nebula OS Terminal",
    category: "UI/UX & Web Engine",
    year: "2026",
    image: "/image/work_interface.jpg",
    client: "Nebula Labs",
    role: "Lead Interactive Engineer",
    services: ["UI/UX Systems", "WebGL Graphics", "Performance Tuning"],
    techStack: ["Next.js", "Three.js", "Tailwind CSS", "TypeScript"],
    overview: "Nebula OS Terminal is a high-performance web interface designed for decentralized data engines. It features low-latency WebGL visualizations, real-time telemetry metrics, and a clean glassmorphic aesthetic to make complex system health accessible.",
    challenge: "Rendering large-scale real-time data streams without causing interface lag or high CPU usage on consumer-grade laptops.",
    solution: "Leveraged custom WebGL shaders and canvas drawing layers offloaded to Web Workers, coupled with React state scheduling to optimize render loops."
  },
  "aurelia-editorial-identity": {
    title: "Aurélia Editorial Identity",
    category: "Brand & Creative Direction",
    year: "2025",
    image: "/image/work_branding.jpg",
    client: "Aurélia Atelier",
    role: "Creative Director & Typographer",
    services: ["Visual Identity", "Typography Systems", "Brand Collateral Design"],
    techStack: ["Indesign", "Custom Font Design", "Pre-press Fine Art Printing"],
    overview: "Aurélia is a high-end luxury atelier. We created their complete visual identity, focusing on blind debossed stationery, custom serif font ligatures, and a warm editorial print layout that reflects their slow-fashion principles.",
    challenge: "Developing a brand system that feels timeless, premium, and distinct, without relying on bold colors or transient design trends.",
    solution: "We relied on rich tactile materials—thick deckle-edged paper, warm mineral inks, and blind embossing—to create a quiet, tactile identity that speaks of craft."
  },
  "quantum-helix-engine": {
    title: "Quantum Helix Engine",
    category: "System Art & Web3D",
    year: "2026",
    image: "/image/work_system.jpg",
    client: "Helix Research Group",
    role: "Visual Artist & Frontend Developer",
    services: ["Creative Technology", "3D Modeling", "Next.js WebGL Development"],
    techStack: ["Three.js", "React Three Fiber", "GLSL Shaders", "Next.js"],
    overview: "An abstract interactive system representing DNA helix dynamics under electromagnetic frequencies. This digital art piece is rendered entirely in real-time in the browser, featuring custom lighting reflections and dynamic structural manipulation.",
    challenge: "Achieving high-fidelity glass refraction and metallic reflection effects in WebGL that load instantly in a responsive web environment.",
    solution: "Wrote custom vertex and fragment shaders using GLSL that simulate refraction through simplified mathematical approximations rather than ray-tracing, maintaining 60 FPS."
  }
};

export function generateStaticParams() {
  return Object.keys(PROJECT_DETAILS).map((slug) => ({
    slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECT_DETAILS[slug];

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Cube® Studio`,
    description: project.overview,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECT_DETAILS[slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen bg-[#faf9f6] text-neutral-900 pt-28 pb-24 md:pb-40">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Navigation & Back Button */}
        <div className="mb-12 md:mb-20">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-black transition-colors"
          >
            <FiArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1.5" />
            Back to Overview
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-12 md:mb-20">
          <p className="text-[10px] font-mono font-medium tracking-[0.3em] uppercase text-neutral-400 mb-5">
            {project.category}
          </p>
          <h1 className="font-sans font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-neutral-950 leading-[1.15] max-w-4xl">
            {project.title}
          </h1>
        </div>

        {/* Full-bleed Project Mockup */}
        <div className="w-full aspect-[16/9] overflow-hidden border border-neutral-200/30 bg-neutral-100 mb-16 md:mb-28">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover animate-fade-in"
          />
        </div>

        {/* Project Metadata Table & Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">

          {/* Metadata Sidebar (4 columns) */}
          <div className="lg:col-span-4 border-t border-neutral-200 pt-10 space-y-6">
            <div>
              <span className="flex items-center gap-2 text-[10px] font-mono font-medium tracking-wider text-neutral-400 uppercase mb-2">
                <FiBriefcase className="w-3.5 h-3.5" /> Client
              </span>
              <p className="text-sm text-neutral-800 font-medium">{project.client}</p>
            </div>

            <div>
              <span className="flex items-center gap-2 text-[10px] font-mono font-medium tracking-wider text-neutral-400 uppercase mb-2">
                <FiCompass className="w-3.5 h-3.5" /> Role
              </span>
              <p className="text-sm text-neutral-800 font-medium">{project.role}</p>
            </div>

            <div>
              <span className="flex items-center gap-2 text-[10px] font-mono font-medium tracking-wider text-neutral-400 uppercase mb-2">
                <FiClock className="w-3.5 h-3.5" /> Project Year
              </span>
              <p className="text-sm text-neutral-800 font-medium">{project.year}</p>
            </div>

            <div>
              <span className="flex items-center gap-2 text-[10px] font-mono font-medium tracking-wider text-neutral-400 uppercase mb-2">
                <FiLayers className="w-3.5 h-3.5" /> Services
              </span>
              <ul className="space-y-1">
                {project.services.map((service) => (
                  <li key={service} className="text-sm text-neutral-800 font-medium">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Detailed Content Narrative (8 columns) */}
          <div className="lg:col-span-8 space-y-12 border-t border-neutral-200 pt-10">
            {/* Project Overview */}
            <div className="space-y-4">
              <h3 className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 font-semibold">
                Overview
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-neutral-700 font-normal">
                {project.overview}
              </p>
            </div>

            {/* Design Challenge */}
            <div className="space-y-4">
              <h3 className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 font-semibold">
                The Challenge
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-neutral-600 font-normal">
                {project.challenge}
              </p>
            </div>

            {/* Creative Solution */}
            <div className="space-y-4">
              <h3 className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 font-semibold">
                The Solution
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-neutral-600 font-normal">
                {project.solution}
              </p>
            </div>

            {/* Development Stack */}
            <div className="space-y-4 pt-4">
              <h3 className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 font-semibold">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
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

        </div>

      </div>
    </main>
  );
}
