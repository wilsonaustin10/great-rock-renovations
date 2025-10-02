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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://greatrockrenovations.com/#business",
      "name": "Great Rock Renovations",
      "description": "Professional construction and renovation services in Houston, TX. Licensed, insured, and trusted by homeowners. Free quotes within 24 hours.",
      "url": "https://greatrockrenovations.com",
      "telephone": "+18329796414",
      "email": "info@greatrockrenovations.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "15219 Cypress Post Ln",
        "addressLocality": "Cypress",
        "addressRegion": "TX",
        "postalCode": "77429",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "30.144527",
        "longitude": "-95.655773"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "16:00"
        }
      ],
      "areaServed": [
        {
          "@type": "City",
          "name": "Houston"
        },
        {
          "@type": "City",
          "name": "Cypress"
        },
        {
          "@type": "City",
          "name": "Spring"
        },
        {
          "@type": "City",
          "name": "The Woodlands"
        },
        {
          "@type": "City",
          "name": "Katy"
        },
        {
          "@type": "City",
          "name": "Sugar Land"
        }
      ],
      "priceRange": "$$",
      "image": "https://greatrockrenovations.com/images/Great Rock Marquee 876x550.png",
      "logo": "https://greatrockrenovations.com/images/Great Rock GR Logo.png",
      "sameAs": [],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Construction & Renovation Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Deck Building",
              "description": "Custom deck construction with premium materials. Typical projects completed in 2-4 weeks."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Fence Installation",
              "description": "Professional fence installation for privacy, security, and aesthetics. Licensed and insured."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Kitchen Remodeling",
              "description": "Complete kitchen renovations from design to completion. All work backed by warranty."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bathroom Renovation",
              "description": "Transform your bathroom with modern fixtures and quality craftsmanship."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Roofing Services",
              "description": "Expert roofing installation and repair. Protect your home with quality materials."
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://greatrockrenovations.com/#website",
      "url": "https://greatrockrenovations.com",
      "name": "Great Rock Renovations",
      "description": "Houston's trusted construction and renovation contractor",
      "publisher": {
        "@id": "https://greatrockrenovations.com/#business"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
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
