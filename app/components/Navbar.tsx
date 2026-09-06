"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiPlus } from "react-icons/fi";

/**
 * Configure your logo image here:
 * - Set to an image URL or local path (e.g. "/images/logo.png" or "https://example.com/logo.png")
 * - If empty, the component falls back to a clean typographic logo ("Cube®")
 */
const LOGO_IMAGE_SRC = "";

const NAV_ITEMS = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const pathname = usePathname();

    // Auto-collapse mobile navbar whenever pathname changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Determine sticky state and hide/reveal instantly on scroll direction change
            if (currentScrollY > 10) {
                setIsSticky(true);
                if (currentScrollY > lastScrollY) {
                    setIsHidden(true); // Hide instantly on scroll down
                } else {
                    setIsHidden(false); // Reveal instantly on scroll up
                }
            } else {
                setIsSticky(false);
                setIsHidden(false); // Keep visible at the very top
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Intercept navbar clicks to collapse mobile menu and handle smooth scrolling for home/in-page anchors
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        setIsOpen(false);

        // If target is home page:
        if (href === "/" || href === "#home") {
            if (typeof window !== "undefined" && window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
            return;
        }

        // Handle in-page anchor links starting with '#'
        if (href.startsWith("#")) {
            const cleanId = href.substring(1);
            const targetElement = document.getElementById(cleanId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <>
            {/* Navbar Container */}
            <nav
                className={`w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-[9999] ${isSticky
                    ? "fixed top-0 left-0 bg-[#faf9f6]/90 backdrop-blur-md border-b border-neutral-200/50 shadow-sm py-4"
                    : "absolute top-0 left-0 w-full bg-[#faf9f6] border-b border-transparent py-5"
                    } ${isSticky && isHidden ? "-translate-y-full" : "translate-y-0"}`}
            >
                <div className="max-w-7xl mx-auto px-6 py-5 md:px-10 lg:px-16 flex justify-between items-center">

                    {/* Logo Section */}
                    <Link
                        href="/"
                        onClick={(e) => handleLinkClick(e, "/")}
                        className="flex items-center group relative z-50"
                    >
                        {LOGO_IMAGE_SRC ? (
                            <img
                                src={LOGO_IMAGE_SRC}
                                alt="Logo"
                                className="h-8 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                            />
                        ) : (
                            <div className="flex items-center gap-2">
                                <span className="font-sans font-semibold text-xl md:text-2xl tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-black">
                                    Cube<sup className="text-[10px] md:text-xs font-semibold top-[-0.5em] left-[1px]">®</sup>
                                </span>
                            </div>
                        )}
                    </Link>

                    {/* Desktop Navigation Items (Centered) - Visible on lg screens and up */}
                    <div className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 space-x-6 lg:space-x-8">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleLinkClick(e, item.href)}
                                className="relative text-sm font-medium tracking-wide text-neutral-600 hover:text-black transition-colors duration-200 py-1 group/item"
                            >
                                {item.name}
                                {/* Premium animated underline effect */}
                                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover/item:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Action (Right) - Visible on lg screens and up */}
                    <div className="hidden lg:block">
                        <Link
                            href="/contact"
                            onClick={(e) => handleLinkClick(e, "/contact")}
                            className="relative text-sm font-medium tracking-wide text-neutral-800 hover:text-black transition-colors duration-200 py-1 group/contact"
                        >
                            Contact
                            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover/contact:w-full" />
                        </Link>
                    </div>

                    {/* Mobile & Tablet Hamburger Toggle Button (Visible below lg screens) */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden flex items-center justify-center p-2 rounded-full text-neutral-800 hover:text-black hover:bg-neutral-100/50 transition-all duration-300 relative z-50"
                        aria-label="Toggle Menu"
                    >
                        <FiPlus
                            className={`w-6 h-6 transition-transform duration-300 ${isOpen ? "rotate-45 text-black" : "rotate-0 text-neutral-800"
                                }`}
                        />
                    </button>
                </div>
            </nav>

            {/* Mobile & Tablet Dropdown Modal Menu (Visible below lg screens) */}
            <div
                className={`fixed inset-x-0 top-[73px] bottom-0 bg-[#faf9f6]/95 backdrop-blur-md z-40 transition-all duration-500 lg:hidden flex flex-col justify-start px-8 py-12 md:px-12 ${isOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-4 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col space-y-6 max-w-md w-full mx-auto mt-4">
                    {NAV_ITEMS.map((item, index) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={(e) => handleLinkClick(e, item.href)}
                            className={`text-2xl font-medium tracking-wide text-neutral-800 hover:text-black transition-all duration-300 transform border-b border-neutral-100/60 pb-3 block ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                                }`}
                            style={{
                                transitionDelay: `${isOpen ? index * 50 + 100 : 0}ms`,
                            }}
                        >
                            {item.name}
                        </Link>
                    ))}

                    <Link
                        href="/contact"
                        onClick={(e) => handleLinkClick(e, "/contact")}
                        className={`text-2xl font-medium tracking-wide text-neutral-900 hover:text-black transition-all duration-300 transform pt-2 block ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                            }`}
                        style={{
                            transitionDelay: `${isOpen ? NAV_ITEMS.length * 50 + 100 : 0}ms`,
                        }}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </>
    );
}