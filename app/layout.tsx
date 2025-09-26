import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import ExitIntentPopup from "@/components/ui/ExitIntentPopup";
import FloatingCallButton from "@/components/FloatingCallButton";
import GTMLoader from "@/components/GTMLoader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://greatrockrenovations.com"),
  title: "Great Rock Renovations | Houston's Premier Construction & Renovation Services",
  description: "Professional construction and renovation services in Houston, TX. Specializing in deck building, fence installation, kitchen remodeling, and more. Licensed, insured, and trusted by homeowners across Houston.",
  keywords: "construction, renovation, deck building, fence installation, kitchen remodeling, bathroom renovation, roofing, Houston TX, contractor",
  authors: [{ name: "Great Rock Renovations" }],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Great Rock Renovations | Houston Construction Services",
    description: "Transform your home with Houston's most trusted construction and renovation experts. Free quotes, licensed & insured.",
    url: "https://greatrockrenovations.com",
    siteName: "Great Rock Renovations",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/Great Rock Marquee 876x550.png",
        width: 876,
        height: 550,
        alt: "Great Rock Renovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Great Rock Renovations | Houston Construction Services",
    description: "Professional construction and renovation services in Houston, TX. Get your free quote today!",
    images: ["/images/Great Rock Marquee 876x550.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <GTMLoader />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
        <FloatingCallButton />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
