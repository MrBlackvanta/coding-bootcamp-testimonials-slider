import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL =
  "https://coding-bootcamp-testimonials-slider.abdelrhman-ahmed8881.workers.dev";

const title = "Coding bootcamp testimonials";
const description =
  "What graduates say about the bootcamp, in their own words. Tomas Sinclair, UX Engineer, and John Tarkpor, Junior Front-end Developer.";

const shareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "A bootcamp graduate's testimonial beside their portrait.",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: title,
    locale: "en_US",
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="relative flex min-h-dvh flex-col">{children}</body>
    </html>
  );
}
