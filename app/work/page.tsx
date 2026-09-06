import type { Metadata } from "next";
import WorkGrid from "./_components/WorkGrid";

export const metadata: Metadata = {
  title: "Selected Works — Cube® Studio",
  description: "Explore our architectural concepts, visual systems, and digital platforms crafted with meticulous integrity.",
};

export default function WorkPage() {
  return (
    <main className="w-full min-h-screen bg-[#faf9f6] text-neutral-900 pt-32 pb-24 md:pb-40 border-t border-neutral-100" style={{ ["--secondary" as string]: "#4a4744" }}>
      <div className="w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-16 flex flex-col justify-between h-full">

        {/* 02. MASTER PAGE HEADER */}
        <div className="mb-16 md:mb-24">
          <p className="text-[10px] font-mono font-medium tracking-[0.3em] uppercase mb-3 text-neutral-400">
            02 / Selected Works
          </p>
          <h1 className="font-sans font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-neutral-900 leading-[1.25] max-w-3xl">
            We craft digital platforms and structural concepts that define legacies.
          </h1>
        </div>

        {/* Dynamic Grid Layout */}
        <WorkGrid />

      </div>
    </main>
  );
}
