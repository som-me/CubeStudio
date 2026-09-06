export default function HeroAbout() {
    return (
        <section
            className="relative z-20 w-full min-h-screen bg-[#faf9f6] flex flex-col justify-center items-center py-24 md:py-40 border-t border-neutral-100"
            style={{ ["--secondary" as string]: "#4a4744" }}
        >
            <div className="w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-16 flex flex-col justify-between h-full">

                {/* Section Header */}
                <div className="mb-16 md:mb-28">
                    <p className="text-[10px] font-medium tracking-[0.3em] uppercase mb-5" style={{ color: "var(--secondary)", opacity: 0.65 }}>
                        01 / About Studio
                    </p>
                    <h2 className="font-sans font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-neutral-900 leading-[1.3] max-w-3xl">
                        We build digital legacies with meticulous craft.
                    </h2>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
                    {/* Brand Philosophy */}
                    <div className="lg:col-span-7">
                        <p className="text-sm md:text-base leading-relaxed max-w-xl font-normal" style={{ color: "var(--secondary)", opacity: 0.85 }}>
                            Cube® is a multi-disciplinary studio working at the intersection of architecture, design, and engineering — building digital platforms with the same structural integrity as physical spaces.
                        </p>
                    </div>

                    {/* Capabilities */}
                    <div className="lg:col-span-5 border-t border-neutral-200/60 pt-8 lg:pt-0 lg:border-t-0 lg:pl-10 space-y-5">
                        <h3 className="text-[10px] font-medium tracking-[0.2em] uppercase" style={{ color: "var(--secondary)", opacity: 0.6 }}>
                            Core Capabilities
                        </h3>

                        <ul className="space-y-3">
                            {[
                                ["Creative Direction", "Concept & Strategy"],
                                ["Digital Architecture", "UI/UX & Interactive"],
                                ["Systems Development", "Next.js & Cloud Engine"],
                            ].map(([title, tag]) => (
                                <li key={title} className="group flex justify-between items-baseline border-b border-neutral-200/40 pb-2.5">
                                    <span className="text-sm font-normal text-neutral-800 transition-colors group-hover:text-neutral-950">
                                        {title}
                                    </span>
                                    <span className="text-[11px] font-mono" style={{ color: "var(--secondary)", opacity: 0.55 }}>
                                        {tag}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Responsive Image Section at the bottom of HeroAbout */}
                {/* <div className="mt-16 md:mt-24 w-full overflow-hidden border border-neutral-200/40">
                    <img
                        src="/image/bgMg1.png"
                        alt="Studio Space Overview"
                        className="w-full h-auto object-cover max-h-[300px] sm:max-h-[450px] md:max-h-[550px] lg:max-h-[650px] transition-transform duration-700 hover:scale-[1.01]"
                    />
                </div> */}

            </div>
        </section>
    );
}