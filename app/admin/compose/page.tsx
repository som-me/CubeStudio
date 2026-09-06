"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { FiSend, FiLogOut, FiEye, FiEdit2, FiAlertCircle, FiCheck, FiRefreshCw, FiLock } from "react-icons/fi";
import { SERVICES } from "@/app/services/data";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface FormState {
  leadName: string;
  leadEmail: string;
  subject: string;
  body: string;
  serviceFocus: string;
  customNote: string;
}

const DEFAULT_FORM: FormState = {
  leadName: "",
  leadEmail: "",
  subject: "A custom web platform built for your business — Cube® Studio",
  body: "",
  serviceFocus: "",
  customNote: "",
};

// ---------------------------------------------------------------------------
// Live Email Preview Component
// ---------------------------------------------------------------------------
function EmailPreview({ form }: { form: FormState }) {
  const bodyHtml = form.body
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br />");

  return (
    <div
      style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto", backgroundColor: "#ffffff", border: "1px solid #e5e5e5" }}
    >
      {/* Header */}
      <div style={{ backgroundColor: "#171717", color: "#ffffff", padding: "24px 30px", textAlign: "left" }}>
        <p style={{ margin: "0 0 4px 0", fontSize: "11px", color: "#a3a3a3", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "2px" }}>
          Cube® Studio
        </p>
        <h1 style={{ margin: 0, fontSize: "20px", fontWeight: 600, letterSpacing: "0.5px" }}>
          {form.subject || "Your subject line here"}
        </h1>
      </div>

      {/* Body */}
      <div style={{ padding: "28px 30px", backgroundColor: "#faf9f6" }}>
        <p style={{ margin: "0 0 20px 0", fontSize: "15px", color: "#111111", lineHeight: 1.6 }}>
          Hi <strong>{form.leadName || "Lead Name"}</strong>,
        </p>

        <div style={{ backgroundColor: "#ffffff", borderLeft: "3px solid #171717", padding: "18px 20px", marginBottom: "24px", color: "#222222", fontSize: "14px", lineHeight: 1.7 }}>
          {form.body ? (
            <span dangerouslySetInnerHTML={{ __html: bodyHtml }} />
          ) : (
            <span style={{ color: "#aaaaaa" }}>Your message will appear here…</span>
          )}
        </div>

        {form.serviceFocus && (
          <div style={{ marginBottom: "20px", padding: "14px 18px", border: "1px solid #e5e5e5", backgroundColor: "#ffffff" }}>
            <p style={{ margin: "0 0 4px 0", fontSize: "10px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "1.5px", color: "#888888" }}>
              Service Focus
            </p>
            <p style={{ margin: 0, fontSize: "14px", fontWeight: 600, color: "#111111" }}>{form.serviceFocus}</p>
          </div>
        )}

        {form.customNote && (
          <p style={{ margin: "0 0 24px 0", fontSize: "13px", color: "#555555", fontStyle: "italic", lineHeight: 1.6 }}>
            {form.customNote}
          </p>
        )}

        <div style={{ textAlign: "left", marginBottom: "28px" }}>
          <span style={{ display: "inline-block", backgroundColor: "#171717", color: "#ffffff", textDecoration: "none", padding: "12px 24px", fontSize: "12px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: 600 }}>
            Start A Conversation →
          </span>
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid #e5e5e5", padding: "16px 30px", textAlign: "left", color: "#888888", fontSize: "11px", fontFamily: "monospace", backgroundColor: "#ffffff" }}>
        <strong style={{ color: "#111111" }}>Som</strong> — Founder & Lead Engineer, Cube® Studio
        <br />
        cube.built.studio@gmail.com
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Login Gate
// ---------------------------------------------------------------------------
function LoginGate({ onSuccess }: { onSuccess: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Incorrect password.");
      } else {
        onSuccess();
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex flex-col items-center gap-2 mb-12 text-center">
        <div className="w-12 h-12 bg-neutral-900 text-white flex items-center justify-center mb-4">
          <FiLock className="w-5 h-5" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">Admin Access</span>
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-950">Cube® Studio</h1>
        <p className="text-sm text-neutral-500 font-normal">Internal email composer — restricted access.</p>
      </div>

      <form onSubmit={handleLogin} className="bg-white border border-neutral-200/80 p-8 shadow-sm space-y-6">
        {error && (
          <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 text-red-700 text-xs font-mono">
            <FiAlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <div className="space-y-2">
          <label htmlFor="admin-password" className="block text-xs font-mono uppercase tracking-wider text-neutral-600 font-semibold">
            Admin Password
          </label>
          <input
            id="admin-password"
            type="password"
            required
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3.5 border border-neutral-200 bg-[#faf9f6] text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 rounded-full bg-neutral-900 text-white hover:bg-black font-semibold text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Verifying…
            </>
          ) : (
            <>
              Unlock Composer
              <FiLock className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Composer
// ---------------------------------------------------------------------------
function Composer() {
  const [form, setForm] = useState<FormState>(DEFAULT_FORM);
  const [activeTab, setActiveTab] = useState<"compose" | "preview">("compose");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [loggingOut, setLoggingOut] = useState(false);

  const update = useCallback(
    <K extends keyof FormState>(key: K, value: FormState[K]) =>
      setForm((prev) => ({ ...prev, [key]: value })),
    []
  );

  // Auto-update subject when lead name changes (if still default)
  useEffect(() => {
    if (!form.leadName) return;
    setForm((prev) => ({
      ...prev,
      subject: prev.subject.includes("Cube® Studio")
        ? `A custom web platform built for your business — Cube® Studio`
        : prev.subject,
    }));
  }, [form.leadName]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/admin/send-outreach", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to send.");
      setSent(form.leadEmail);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Unknown error.");
    } finally {
      setSending(false);
    }
  };

  const handleLogout = async () => {
    setLoggingOut(true);
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.reload();
  };

  const handleReset = () => {
    setForm(DEFAULT_FORM);
    setSent(null);
    setError("");
    setActiveTab("compose");
  };

  // Success State
  if (sent) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white border border-neutral-200/80 p-8 sm:p-12 shadow-sm text-center space-y-6">
          <div className="w-16 h-16 bg-neutral-900 text-white flex items-center justify-center mx-auto text-2xl">
            <FiCheck />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 tracking-tight">Email Dispatched</h2>
            <p className="text-sm text-neutral-600 leading-relaxed font-mono break-all">
              Successfully sent to <strong className="text-neutral-900">{sent}</strong>
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 pt-2">
            <button
              onClick={handleReset}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 font-semibold text-xs font-mono uppercase tracking-wider transition-all"
            >
              <FiRefreshCw className="w-3.5 h-3.5" />
              Compose Next Email
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              <FiLogOut className="w-3.5 h-3.5" />
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3.5 border border-neutral-200 bg-[#faf9f6] text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all";
  const labelClass =
    "block text-xs font-mono uppercase tracking-wider text-neutral-600 font-semibold";

  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="mb-10 sm:mb-12">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <span className="text-[10px] font-mono font-medium tracking-[0.3em] uppercase text-neutral-400 mb-3 block">
              Admin / Email Composer
            </span>
            <h1 className="font-sans font-medium text-2xl sm:text-3xl md:text-4xl tracking-tight text-neutral-950 leading-tight mb-3">
              Outreach Composer
            </h1>
            <p className="text-sm text-neutral-600 font-normal leading-relaxed">
              Write a personalised email to a lead. Preview exactly what they&apos;ll see in their inbox before sending.
            </p>
          </div>
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="flex-shrink-0 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-neutral-900 transition-colors pt-1 disabled:opacity-50"
          >
            <FiLogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>

      {/* Compose / Preview Tabs */}
      <div className="flex items-center gap-0 mb-8 border-b border-neutral-200">
        <button
          onClick={() => setActiveTab("compose")}
          className={`inline-flex items-center gap-2 py-3 px-5 text-xs font-mono uppercase tracking-wider font-semibold border-b-2 transition-all -mb-px ${
            activeTab === "compose"
              ? "border-neutral-900 text-neutral-900"
              : "border-transparent text-neutral-400 hover:text-neutral-700"
          }`}
        >
          <FiEdit2 className="w-3.5 h-3.5" />
          Compose
        </button>
        <button
          onClick={() => setActiveTab("preview")}
          className={`inline-flex items-center gap-2 py-3 px-5 text-xs font-mono uppercase tracking-wider font-semibold border-b-2 transition-all -mb-px ${
            activeTab === "preview"
              ? "border-neutral-900 text-neutral-900"
              : "border-transparent text-neutral-400 hover:text-neutral-700"
          }`}
        >
          <FiEye className="w-3.5 h-3.5" />
          Live Preview
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        {/* COMPOSE FORM — always rendered, hidden on small screens when preview tab active */}
        <div className={activeTab === "preview" ? "hidden xl:block" : "block"}>
          <form onSubmit={handleSend} className="bg-white border border-neutral-200/80 p-5 sm:p-8 md:p-10 shadow-sm space-y-8">

            {error && (
              <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 text-red-700 text-xs font-mono">
                <FiAlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Lead Details */}
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-semibold block mb-4">
                Lead Details
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="lead-name" className={labelClass}>Lead Name *</label>
                  <input
                    id="lead-name"
                    type="text"
                    required
                    placeholder="e.g. Arjun Mehta"
                    value={form.leadName}
                    onChange={(e) => update("leadName", e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lead-email" className={labelClass}>Lead Email *</label>
                  <input
                    id="lead-email"
                    type="email"
                    required
                    placeholder="arjun@company.com"
                    value={form.leadEmail}
                    onChange={(e) => update("leadEmail", e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            {/* Email Content */}
            <div className="border-t border-neutral-100 pt-8 space-y-5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-semibold block">
                Email Content
              </span>

              <div className="space-y-2">
                <label htmlFor="subject" className={labelClass}>Subject Line *</label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => update("subject", e.target.value)}
                  className={inputClass}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="body" className={labelClass}>
                  Email Body *
                  <span className="hidden sm:inline ml-2 normal-case font-normal text-neutral-400 tracking-normal">— line breaks preserved</span>
                </label>
                <textarea
                  id="body"
                  required
                  rows={10}
                  placeholder={`I came across your business and wanted to reach out personally.\n\nAt Cube® Studio, we build custom web platforms specifically for trade and industrial companies like yours — not templates, but bespoke systems engineered for your workflow.\n\nI'd love to show you what we've built for similar businesses and discuss how we can help you…`}
                  value={form.body}
                  onChange={(e) => update("body", e.target.value)}
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>

            {/* Optional Fields */}
            <div className="border-t border-neutral-100 pt-8 space-y-5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-semibold block">
                Optional Fields
              </span>

              <div className="space-y-2">
                <label htmlFor="service-focus" className={labelClass}>Service Focus</label>
                <select
                  id="service-focus"
                  value={form.serviceFocus}
                  onChange={(e) => update("serviceFocus", e.target.value)}
                  className={inputClass}
                >
                  <option value="">— No service selected —</option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.num} / {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="custom-note" className={labelClass}>
                  Postscript / Note
                  <span className="hidden sm:inline ml-2 normal-case font-normal text-neutral-400 tracking-normal">— shown in italic below the message</span>
                </label>
                <input
                  id="custom-note"
                  type="text"
                  placeholder="P.S. — We're currently taking on Q4 projects only."
                  value={form.customNote}
                  onChange={(e) => update("customNote", e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Send Button */}
            <div className="border-t border-neutral-100 pt-8">
              <button
                type="submit"
                disabled={sending}
                className="w-full py-4 px-8 rounded-full bg-neutral-900 text-white hover:bg-black font-semibold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? (
                  <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span className="truncate max-w-[200px] sm:max-w-none">
                      Dispatching to {form.leadEmail || "lead"}…
                    </span>
                  </span>
                ) : (
                  <>
                    <span className="truncate">
                      Send to {form.leadEmail ? <span className="font-normal opacity-75 text-xs">{form.leadEmail}</span> : "Lead"}
                    </span>
                    <FiSend className="w-4 h-4 flex-shrink-0" />
                  </>
                )}
              </button>
              <p className="font-mono text-[10px] text-neutral-400 text-center mt-3 break-all">
                Sent via cube.built.studio@gmail.com
              </p>
            </div>

          </form>
        </div>

        {/* LIVE PREVIEW */}
        <div className={activeTab === "compose" ? "hidden xl:block" : "block"}>
          <div className="sticky top-8">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-semibold">
                Live Inbox Preview
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 border border-neutral-200 px-2.5 py-1">
                Updates as you type
              </span>
            </div>
            <div className="border border-neutral-200 shadow-sm overflow-hidden">
              <EmailPreview form={form} />
            </div>
          </div>
        </div>

      </div>

      {/* Mobile — extra bottom padding for breathing room */}
      <div className="mt-6 sm:hidden" />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main Page — reads ?locked=1 param to decide initial state
// ---------------------------------------------------------------------------
function AdminComposeContent() {
  const searchParams = useSearchParams();
  const isLocked = searchParams.get("locked") === "1";
  const [unlocked, setUnlocked] = useState(!isLocked);

  // Re-check if proxy redirected us here with ?locked=1
  useEffect(() => {
    if (isLocked) setUnlocked(false);
  }, [isLocked]);

  const handleLoginSuccess = () => {
    // Cookie is now set — reload cleanly without ?locked param
    window.location.replace("/admin/compose");
  };

  return unlocked ? <Composer /> : <LoginGate onSuccess={handleLoginSuccess} />;
}

export default function AdminComposePage() {
  return (
    <main className="w-full min-h-screen bg-[#faf9f6] text-neutral-900 pt-32 pb-24 md:pb-40">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <Suspense fallback={
          <div className="flex items-center justify-center py-24">
            <div className="w-6 h-6 border-2 border-neutral-300 border-t-neutral-900 rounded-full animate-spin" />
          </div>
        }>
          <AdminComposeContent />
        </Suspense>
      </div>
    </main>
  );
}
