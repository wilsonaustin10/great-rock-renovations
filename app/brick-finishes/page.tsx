import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import PhoneLink from '@/components/PhoneLink';
import { MapPin, Clock, Shield, Award, CheckCircle, Phone, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Houston&apos;s #1 Slurry Brick Finishes | German Smear & Limewash | Great Rock Renovations",
  description: "Transform your Houston home with expert slurry brick finishes, German smear, and limewash applications. Professional brick enhancement services with stunning results. Free quotes & consultations.",
  keywords: "slurry brick Houston, German smear Houston, limewash brick Houston, brick finishes Houston TX, brick enhancement, mortar wash, brick makeover Houston, exterior brick renovation",
  openGraph: {
    title: "Houston&apos;s #1 Slurry Brick Finishes | Great Rock Renovations",
    description: "Expert slurry brick, German smear & limewash applications in Houston. Transform your home's exterior with our professional brick finishing services.",
    url: "https://greatrockrenovations.com/brick-finishes",
    images: [
      {
        url: "/images/Brick Finishes/087c9f75-c8a1-4259-98ea-2db160bd27f3.JPG",
        width: 1200,
        height: 630,
        alt: "Professional Slurry Brick Finish by Great Rock Renovations",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Brick Finishing Services",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Great Rock Renovations",
    "telephone": "+18329796414",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Houston",
      "addressRegion": "TX",
      "addressCountry": "US"
    }
  },
  "areaServed": [
    "Houston", "Cypress", "Spring", "The Woodlands", 
    "Katy", "Sugar Land", "Memorial", "River Oaks",
    "Bellaire", "West University", "Heights", "Montrose"
  ],
  "description": "Professional brick finishing services including slurry brick, German smear, and limewash applications in Houston, TX",
  "serviceType": ["Slurry Brick", "German Smear", "Limewash", "Brick Enhancement"],
};

export default function BrickFinishesPage() {
  const finishTypes = [
    {
      name: "Slurry Brick",
      description: "A full-coverage mortar application that creates a smooth, uniform appearance while allowing some brick texture to show through.",
      benefits: ["Complete color transformation", "Hides imperfections", "Durable finish", "Low maintenance"]
    },
    {
      name: "German Smear",
      description: "A technique using mortar spread irregularly across brick surfaces, creating a rustic, old-world European aesthetic.",
      benefits: ["Partial brick visibility", "Unique textured look", "Customizable coverage", "Timeless appeal"]
    },
    {
      name: "Limewash",
      description: "A traditional lime-based paint that penetrates brick surfaces, creating a chalky, matte finish with beautiful patina.",
      benefits: ["Breathable finish", "Natural weathering", "Eco-friendly option", "Easy to refresh"]
    }
  ];

  const projectImages = [
    {
      src: "/images/Brick Finishes/087c9f75-c8a1-4259-98ea-2db160bd27f3.JPG",
      alt: "Elegant white slurry brick finish on Houston home",
      title: "Full Slurry Application"
    },
    {
      src: "/images/Brick Finishes/527f9db8-8f98-4265-9567-923df2244e73.JPG",
      alt: "German smear brick technique with varied coverage",
      title: "German Smear Technique"
    },
    {
      src: "/images/Brick Finishes/6e5dca1c-969d-466a-8a63-c63b88a2cc55.JPG",
      alt: "Beautiful limewash brick finish with subtle texture",
      title: "Limewash Application"
    },
    {
      src: "/images/Brick Finishes/D8CDC4E1-A808-45AA-8316-B6749273269A.jpeg",
      alt: "Professional brick finish transformation by Great Rock Renovations",
      title: "Brick Transformation"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Free Consultation",
      description: "We assess your brick surfaces and discuss your vision for the perfect finish."
    },
    {
      step: 2,
      title: "Surface Preparation",
      description: "Thorough cleaning and prep work ensures optimal adhesion and longevity."
    },
    {
      step: 3,
      title: "Custom Application",
      description: "Expert application of your chosen finish with attention to every detail."
    },
    {
      step: 4,
      title: "Quality Inspection",
      description: "Final walkthrough to ensure your complete satisfaction with the results."
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Houston&apos;s #1 Slurry Brick Finishes
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Transform your home&apos;s exterior with professional slurry brick, German smear, or limewash applications. 
              Expert craftsmanship that enhances curb appeal and property value.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="#quote-form" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5">
                Get Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="#our-brick-finishing-projects" className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5">
                View Our Work
                <ArrowRight className="h-5 w-5" />
              </Link>
              <PhoneLink
                phone="832-979-6414"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
                ariaLabel="Call for brick finishing services"
              >
                <Phone className="h-5 w-5" />
                Call (832) 979-6414
              </PhoneLink>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-blue-600" />
                <span>Expert Craftsmen</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <span>Timely Completion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 py-4">
            <a href="#our-brick-finishing-projects" className="px-4 py-2 text-sm sm:text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
              Our Projects
            </a>
            <a href="#brick-enhancement-services" className="px-4 py-2 text-sm sm:text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
              Services
            </a>
            <a href="#our-process" className="px-4 py-2 text-sm sm:text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
              Our Process
            </a>
            <a href="#service-areas" className="px-4 py-2 text-sm sm:text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
              Service Areas
            </a>
            <a href="#quote-form" className="px-4 py-2 text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200">
              Get Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section id="our-brick-finishing-projects" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Brick Finishing Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-xl">
                <div className="aspect-w-4 aspect-h-3 relative h-80">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-lg font-semibold">{image.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section id="brick-enhancement-services" className="py-16 bg-gray-900 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
            Brick Enhancement Services
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {finishTypes.map((finish, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{finish.name}</h3>
                <p className="text-gray-600 mb-6">{finish.description}</p>
                <ul className="space-y-3">
                  {finish.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="our-process" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="service-areas" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Serving Greater Houston
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MapPin className="h-6 w-6 text-blue-600" />
              <h3 className="text-2xl font-semibold text-gray-900">Our Service Areas</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700">
              {["Houston", "Cypress", "Spring", "The Woodlands", "Katy", "Sugar Land", "Memorial", "River Oaks", 
                "Bellaire", "West University", "Heights", "Montrose", "Pearland", "Friendswood", "League City", "Clear Lake"].map((area, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="quote-form" className="py-16 bg-gradient-to-b from-blue-50 to-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-6">
              Get Your Free Brick Finishing Quote
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12">
              Transform your home&apos;s exterior today. Fill out the form below for a free consultation and quote.
            </p>
            <div className="bg-white rounded-lg shadow-xl p-8">
              <LeadForm 
                source="brick-finishes-page" 
                service="brick-finishes"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Home&apos;s Exterior?
          </h2>
          <p className="text-xl mb-8">
            Houston&apos;s trusted experts in slurry brick, German smear, and limewash finishes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#quote-form" className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold text-lg shadow-xl">
              Get Started Today
              <ArrowRight className="h-5 w-5" />
            </Link>
            <PhoneLink
              phone="832-979-6414"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 font-bold text-lg shadow-xl"
              ariaLabel="Call for immediate assistance"
            >
              <Phone className="h-5 w-5" />
              Call Now: (832) 979-6414
            </PhoneLink>
          </div>
        </div>
      </section>
    </>
  );
}