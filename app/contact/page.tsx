"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft, FiCheck, FiSend, FiAlertCircle } from "react-icons/fi";
import { SERVICES } from "@/app/services/data";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const selectedServiceSlug = searchParams.get("service") || "";
  const selectedTierId = searchParams.get("tier") || "";

  const selectedServiceObj = SERVICES.find((s) => s.slug === selectedServiceSlug);
  const selectedTierObj = selectedServiceObj?.pricingTiers.find((t) => t.id === selectedTierId);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: selectedServiceObj?.title || selectedServiceSlug || "Web Development",
    budget: selectedTierObj ? `${selectedTierObj.name} (${selectedTierObj.price})` : "Standard Studio Scope",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send inquiry. Please try again.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err?.message || "An unexpected error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Selected Service Context Notice */}
      {(selectedServiceObj || selectedTierObj) && (
        <div className="mb-10 p-5 rounded-none bg-neutral-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-neutral-800 shadow-xl animate-fade-in">
          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block font-medium">
              Pre-selected Service Scope
            </span>
            <p className="text-base font-semibold text-white">
              {selectedServiceObj?.title || selectedServiceSlug}
              {selectedTierObj ? ` — ${selectedTierObj.name} Tier (${selectedTierObj.price})` : ""}
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-mono bg-neutral-800 text-neutral-300 px-3 py-1.5 rounded-none border border-neutral-700">
            <FiCheck className="w-3.5 h-3.5 text-emerald-400" /> Confirmed Selection
          </span>
        </div>
      )}

      {submitted ? (
        <div className="p-12 text-center bg-white border border-neutral-200 rounded-none shadow-sm space-y-6">
          <div className="w-16 h-16 rounded-none bg-neutral-900 text-white flex items-center justify-center mx-auto text-2xl">
            <FiCheck />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-neutral-900">
              Inquiry Dispatched to cube.built.studio@gmail.com
            </h2>
            <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
              Thank you for reaching out to Cube® Studio. Your project inquiry has been dispatched to <strong className="text-neutral-900 font-mono text-xs">cube.built.studio@gmail.com</strong>. Som & our technical team will review your scope and respond within 24 hours.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-800 hover:text-black font-semibold pt-4"
          >
            Return to Studio Home →
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8 bg-white border border-neutral-200/80 p-8 sm:p-12 rounded-none shadow-sm">
          
          {/* Error Notice */}
          {errorMessage && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs font-mono flex items-center gap-3">
              <FiAlertCircle className="w-4 h-4 flex-shrink-0 text-red-500" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Full Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-neutral-600 font-semibold">
                Your Full Name *
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="e.g. Eleanor Vance"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-4 py-3.5 rounded-none border border-neutral-200 bg-[#faf9f6] text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all"
              />
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-neutral-600 font-semibold">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="eleanor@company.com"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-3.5 rounded-none border border-neutral-200 bg-[#faf9f6] text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all"
              />
            </div>

          </div>

          {/* Service Selection Dropdown */}
          <div className="space-y-2">
            <label htmlFor="service" className="block text-xs font-mono uppercase tracking-wider text-neutral-600 font-semibold">
              Select Service Focus *
            </label>
            <select
              id="service"
              value={formState.service}
              onChange={(e) => setFormState({ ...formState, service: e.target.value })}
              className="w-full px-4 py-3.5 rounded-none border border-neutral-200 bg-[#faf9f6] text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all"
            >
              {SERVICES.map((s) => (
                <option key={s.slug} value={s.title}>
                  {s.num} / {s.title} ({s.shortDescription})
                </option>
              ))}
            </select>
          </div>

          {/* Message / Project Brief */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-neutral-600 font-semibold">
              Project Brief & Objectives *
            </label>
            <textarea
              id="message"
              required
              rows={5}
              placeholder="Tell us about your brand vision, target timeline, and specific requirements..."
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="w-full px-4 py-3.5 rounded-none border border-neutral-200 bg-[#faf9f6] text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-4 px-8 rounded-full bg-neutral-900 text-white hover:bg-black font-semibold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? (
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Dispatching to cube.built.studio@gmail.com...
              </span>
            ) : (
              <>
                Submit Project Inquiry
                <FiSend className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen bg-[#faf9f6] text-neutral-900 pt-32 pb-24 md:pb-40 border-t border-neutral-100">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Navigation back button */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-neutral-900 transition-colors group"
          >
            <FiArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1.5" />
            Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-16 max-w-3xl">
          <p className="text-[10px] font-mono font-medium tracking-[0.3em] uppercase text-neutral-400 mb-5">
            05 / Contact & Inquiries
          </p>
          <h1 className="font-sans font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-neutral-950 leading-[1.15] mb-6">
            Let&apos;s build something extraordinary together.
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 font-normal">
            Whether launching a new digital platform or transforming an existing brand identity, we are ready to collaborate. Inquiries are dispatched directly to <strong className="text-neutral-900 font-mono text-xs">cube.built.studio@gmail.com</strong>.
          </p>
        </div>

        {/* Form Suspense Container */}
        <Suspense fallback={<div className="p-12 text-center text-xs font-mono text-neutral-400">Loading form...</div>}>
          <ContactFormContent />
        </Suspense>

      </div>
    </main>
  );
}
