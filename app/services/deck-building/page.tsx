import { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { CheckCircle, Clock, Shield, Award, Ruler } from "lucide-react";

export const metadata: Metadata = {
  title: "Deck Building Services Houston TX | Custom Decks by Great Rock Renovations",
  description: "Professional deck building in Houston, TX. Custom wood and composite decks installed in 2-4 weeks. Licensed, insured, free quotes within 24 hours. Call (832) 979-6414.",
  keywords: "deck building Houston, custom decks Houston TX, composite decking, wood deck installation, deck contractor Houston",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Deck Building Services",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Great Rock Renovations",
    "telephone": "+18329796414",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Houston",
      "addressRegion": "TX"
    }
  },
  "areaServed": {
    "@type": "City",
    "name": "Houston"
  },
  "description": "Professional deck building services in Houston. Custom wood and composite decks installed in 2-4 weeks.",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceRange": "$$"
  }
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take to build a deck in Houston?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Typical deck construction in Houston takes 2-4 weeks from permit approval to completion. This includes 3-5 days for foundation work, 5-7 days for framing and decking, and 2-3 days for railings and finishing touches. Weather conditions and permit processing may affect timeline."
      }
    },
    {
      "@type": "Question",
      "name": "What is the cost of building a deck in Houston?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Houston, deck costs typically range from $25-$60 per square foot installed. Pressure-treated wood decks average $25-$35/sq ft, cedar decks $35-$45/sq ft, and composite decking $45-$60/sq ft. A standard 300 sq ft deck ranges from $7,500-$18,000 including materials and labor."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a permit to build a deck in Houston?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Houston requires permits for decks over 200 square feet or more than 30 inches above grade. Great Rock Renovations handles all permit applications and ensures compliance with Houston building codes. The permit process typically takes 5-10 business days."
      }
    },
    {
      "@type": "Question",
      "name": "What type of decking material is best for Houston's climate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For Houston's humid climate, composite decking and pressure-treated pine perform best. Composite resists moisture, insects, and UV damage without annual sealing. Pressure-treated pine offers good durability at lower cost but requires regular maintenance. Cedar provides natural beauty but needs consistent sealing in Houston's humidity."
      }
    }
  ]
};

export default function DeckBuildingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section with Answer-First Content */}
        <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Answer-First Box */}
              <div className="bg-white rounded-xl shadow-xl p-6 mb-8 border-l-4 border-blue-600">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Deck Building Services in Houston, TX
                </h1>
                <div className="text-lg text-gray-800 space-y-2">
                  <p className="font-semibold">✓ We install custom decks in Houston, TX</p>
                  <p>✓ Typical jobs completed in 2-4 weeks</p>
                  <p>✓ Licensed & insured with permit assistance included</p>
                  <p>✓ Free quotes within 24 hours</p>
                  <p className="text-blue-600 font-bold">Call (832) 979-6414 for immediate service</p>
                </div>
              </div>

              {/* Quick Stats for AI Citation */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white rounded-lg p-4 text-center shadow">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Decks Built</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow">
                  <div className="text-2xl font-bold text-blue-600">2-4</div>
                  <div className="text-sm text-gray-600">Week Timeline</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow">
                  <div className="text-2xl font-bold text-blue-600">$25-60</div>
                  <div className="text-sm text-gray-600">Per Sq Ft</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow">
                  <div className="text-2xl font-bold text-blue-600">10yr</div>
                  <div className="text-sm text-gray-600">Warranty</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Details Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Deck Building Process
                </h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">1. Design & Planning (Days 1-3)</h3>
                      <p className="text-gray-700">
                        Free consultation to assess your space, discuss materials (composite, cedar, pressure-treated), 
                        and create custom design. We handle all Houston permit applications.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">2. Foundation & Framing (Days 4-10)</h3>
                      <p className="text-gray-700">
                        Install concrete footings per Houston building codes, construct pressure-treated frame structure, 
                        ensure proper joist spacing for selected decking material.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">3. Decking & Features (Days 11-17)</h3>
                      <p className="text-gray-700">
                        Install decking boards with hidden fasteners, add stairs and railings to code, 
                        integrate lighting and built-in seating as designed.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">4. Finishing & Inspection (Days 18-21)</h3>
                      <p className="text-gray-700">
                        Apply protective sealants to wood surfaces, complete final safety inspection, 
                        provide maintenance guide and warranty documentation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">Materials We Work With:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Composite Decking:</strong> Trex, TimberTech, Fiberon - 25 year warranty</li>
                    <li>• <strong>Pressure-Treated Pine:</strong> Most economical, requires annual sealing</li>
                    <li>• <strong>Cedar:</strong> Natural beauty, insect resistant, needs regular maintenance</li>
                    <li>• <strong>Tropical Hardwoods:</strong> Ipe, Mahogany - premium durability</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Get Your Free Deck Quote
                  </h3>
                  <LeadForm source="deck-service-page" service="deck" />
                </div>

                {/* Trust Indicators */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Why Choose Great Rock?</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">Licensed & Insured</div>
                        <div className="text-sm text-gray-600">Texas License #RR902843</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">Fast Completion</div>
                        <div className="text-sm text-gray-600">2-4 week typical timeline</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">10-Year Warranty</div>
                        <div className="text-sm text-gray-600">Workmanship guarantee</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Ruler className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">Code Compliant</div>
                        <div className="text-sm text-gray-600">Houston building standards</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    How long does it take to build a deck in Houston?
                  </h3>
                  <p className="text-gray-700">
                    Typical deck construction in Houston takes 2-4 weeks from permit approval to completion. 
                    This includes 3-5 days for foundation work, 5-7 days for framing and decking, and 2-3 days 
                    for railings and finishing touches. Weather conditions and permit processing may affect timeline.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    What is the cost of building a deck in Houston?
                  </h3>
                  <p className="text-gray-700">
                    In Houston, deck costs typically range from $25-$60 per square foot installed. Pressure-treated 
                    wood decks average $25-$35/sq ft, cedar decks $35-$45/sq ft, and composite decking $45-$60/sq ft. 
                    A standard 300 sq ft deck ranges from $7,500-$18,000 including materials and labor.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Do I need a permit to build a deck in Houston?
                  </h3>
                  <p className="text-gray-700">
                    Yes, Houston requires permits for decks over 200 square feet or more than 30 inches above grade. 
                    Great Rock Renovations handles all permit applications and ensures compliance with Houston building 
                    codes. The permit process typically takes 5-10 business days.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    What type of decking material is best for Houston&apos;s climate?
                  </h3>
                  <p className="text-gray-700">
                    For Houston&apos;s humid climate, composite decking and pressure-treated pine perform best. Composite 
                    resists moisture, insects, and UV damage without annual sealing. Pressure-treated pine offers good 
                    durability at lower cost but requires regular maintenance. Cedar provides natural beauty but needs 
                    consistent sealing in Houston&apos;s humidity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Build Your Dream Deck?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get your free quote today - Response within 24 hours
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:832-979-6414"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Call (832) 979-6414
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white rounded-lg font-bold text-lg hover:bg-blue-800 transition-colors"
              >
                Get Free Quote Online
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}