export default function HeroExtraNav() {
    return (
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-6 md:py-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            {/* Hero Studio Heading (Left) */}
            <div>
                <h1 className="font-sans font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-neutral-950 leading-none">
                    Cube<sup className="text-base sm:text-lg md:text-2xl font-semibold top-[-0.4em] left-[1px]">®</sup> Built Studio
                </h1>
            </div>

            {/* Scroll Indicator (Right) */}
            <div className="flex-shrink-0">
                <a
                    // href="#content"
                    className="relative inline-block text-[10px] md:text-xs font-bold tracking-[0.25em] text-neutral-600 hover:text-black transition-colors duration-300 uppercase group"
                >
                    Author - Som Meher
                    <span className="absolute bottom-[-4px] left-0 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full" />
                </a>
            </div>
        </div>
    );
}
