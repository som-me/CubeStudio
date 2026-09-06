"use client";

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { Service } from "@/app/services/data";

interface ServiceListProps {
  services: Service[];
  startIndex?: number;
}

export default function ServiceList({ services }: ServiceListProps) {
  return (
    <div className="w-full divide-y divide-neutral-200/50 border-t border-b border-neutral-200/50">
      {services.map((service, index) => (
        <Link
          key={service.slug}
          href={`/services/${service.slug}`}
          className="group flex flex-col lg:flex-row lg:items-center justify-between py-6 md:py-8 lg:py-10 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/80 rounded-sm"
        >
          {/* Left Side: Index Number & Title */}
          <div className="flex items-center gap-6 lg:gap-10">
            <span
              className="font-mono text-xs lg:text-sm font-medium transition-colors duration-300 group-hover:text-neutral-950"
              style={{ color: "#4a4744", opacity: 0.55 }}
            >
              {service.num}
            </span>
            <h3 className="font-sans font-medium text-lg sm:text-xl lg:text-2xl text-neutral-800 transition-all duration-300 group-hover:text-black group-hover:translate-x-1.5">
              {service.title}
            </h3>
          </div>

          {/* Right Side: Description & Arrow */}
          <div className="flex items-center justify-between lg:justify-end gap-6 mt-3 lg:mt-0">
            <p
              className="text-xs sm:text-sm max-w-md text-left lg:text-right font-normal transition-opacity duration-300 group-hover:opacity-100"
              style={{ color: "#4a4744", opacity: 0.75 }}
            >
              {service.shortDescription}
            </p>
            <FiArrowUpRight
              className="w-5 h-5 text-neutral-400 transition-all duration-300 group-hover:text-black group-hover:rotate-45 group-hover:scale-110 flex-shrink-0"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
