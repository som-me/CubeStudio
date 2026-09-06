import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cube® Studio — Digital Architecture & Web Development Agency",
    template: "%s | Cube® Studio",
  },
  description: "Cube® Studio is an independent web architecture and digital design agency crafting bespoke web platforms, brand identities, and high-performance applications.",
  keywords: [
    "Cube Studio",
    "Web Development Agency",
    "Brand Architecture",
    "Digital Agency",
    "React",
    "Next.js",
    "Bespoke Engineering",
    "Bhubaneswar"
  ],
  authors: [{ name: "Som", url: "https://cubestudio.com" }],
  creator: "Som — Cube® Studio",
  openGraph: {
    title: "Cube® Studio — Digital Architecture & Web Development Agency",
    description: "Cube® Studio is an independent web architecture and digital design agency crafting bespoke web platforms, brand identities, and high-performance applications.",
    siteName: "Cube® Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cube® Studio — Digital Architecture Agency",
    description: "Crafting bespoke web platforms, brand identities, and high-performance applications.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
