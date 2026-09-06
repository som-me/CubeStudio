export default function Footer() {
  return (
    <footer
      className="w-full bg-[#faf9f6] py-10 mt-auto"
      style={{ ["--secondary" as string]: "#4a4744" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 flex justify-between items-center text-[11px] font-mono border-t border-neutral-200/40 pt-6" style={{ color: "var(--secondary)", opacity: 0.55 }}>
        <span>© 2026 CUBE BUILT</span>
        <span>EST. IN INDIA</span>
      </div>
    </footer>
  );
}
