export default function HeroVideo() {
  return (
    <div className="fixed inset-0 w-full h-screen z-0 pointer-events-none select-none">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/video/bgV1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Centered Large Typographic Logo */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none select-none">
        <span className="font-sans font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white/90 drop-shadow-sm select-none">
          Cube<sup className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold top-[-0.4em] left-[1px]">®</sup>
        </span>
      </div>

      {/* Gradient Blur Effect at the bottom of the video */}
      {/* Nested structure with direct CSS fallback to ensure cross-browser Safari/Chrome rendering */}
      <div
        className="absolute bottom-0 left-0 w-full h-40 z-20 pointer-events-none"
        style={{
          maskImage: "linear-gradient(to top, black 25%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 25%, transparent 100%)",
        }}
      >
        <div
          className="w-full h-full"
          style={{
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        />
      </div>

      {/* Color fade to off-white page background */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#faf9f6] via-[#faf9f6]/60 to-transparent z-30" />
    </div>
  );
}
