import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://h3nry-2.vercel.app"),
  title: "H3NRY 2.0 — The Value Frontier",
  description: "Independent watch intelligence. Explore where enduring quality meets real-world value.",
  openGraph: {
    title: "H3NRY 2.0 — The Value Frontier",
    description: "Mine the market. Find the frontier.",
    type: "website",
    images: [{ url: "/og.png", width: 1730, height: 909, alt: "A watch set in an abstract green terrain atlas" }],
  },
  twitter: { card: "summary_large_image", title: "H3NRY 2.0 — The Value Frontier", description: "Mine the market. Find the frontier.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
