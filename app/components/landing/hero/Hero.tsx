import HeroAbout from "./HeroAbout";
import HeroWork from "./HeroWork";
import HeroServices from "./HeroServices";
import HeroExtraNav from "./HeroExtraNav";
import HeroVideo from "./HeroVideo";

export default function Hero() {
    return (
        <div className="relative w-full">
            {/* Fixed Full-screen Background Video Component */}
            <HeroVideo />

            {/* Hero Content Overlay */}
            <div className="relative z-10 w-full flex flex-col">
                {/* Top Opaque Off-White Header Card (covers exactly top 50% of viewport on load) */}
                <div className="w-full h-[50vh] min-h-[380px] bg-[#faf9f6] border-b border-neutral-100 flex flex-col justify-end relative z-20 shadow-sm">
                    <HeroExtraNav />
                </div>

                {/* Bottom Transparent Spacer (set to 100vh / full screen height) */}
                {/* As you scroll, the top card moves completely off-screen, fully revealing the 100vh fixed background video */}
                <div className="w-full h-screen relative z-10 pointer-events-none" />
            </div>

            <HeroAbout />
            <HeroWork />
            <HeroServices />
        </div>
    );
}