import { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { CheckCircle, Clock, Shield, Award, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Kitchen Remodeling Houston TX | Complete Kitchen Renovation | Great Rock",
  description: "Professional kitchen remodeling in Houston, TX. Complete renovations from $15,000-$60,000. 4-8 week timeline. Licensed, insured, free design consultation. Call (832) 979-6414.",
  keywords: "kitchen remodeling Houston, kitchen renovation Houston TX, kitchen cabinets, countertops, kitchen contractor Houston",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Kitchen Remodeling Services",
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
  "description": "Professional kitchen remodeling services in Houston. Complete renovations including cabinets, countertops, and appliances. 4-8 week timeline.",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceRange": "$$$"
  }
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does kitchen remodeling cost in Houston?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kitchen remodeling in Houston typically costs $15,000-$60,000. Budget renovations (cosmetic updates) range $15,000-$25,000. Mid-range remodels (new cabinets and countertops) cost $25,000-$40,000. High-end renovations (custom cabinets, premium appliances) exceed $40,000. Average Houston kitchen remodel is $28,000."
      }
    },
    {
      "@type": "Question",
      "name": "How long does kitchen remodeling take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Complete kitchen remodeling in Houston takes 4-8 weeks. Cosmetic updates complete in 2-3 weeks. Standard renovations with cabinet replacement take 4-6 weeks. Full gut renovations with structural changes require 6-8 weeks. Timeline includes demolition, rough-in work, installation, and finishing."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need permits for kitchen remodeling in Houston?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Houston requires permits for electrical, plumbing, and structural changes during kitchen remodeling. Moving walls, adding outlets, or relocating plumbing needs permits. Cosmetic updates like painting or cabinet refacing typically don't. Great Rock Renovations handles all permit applications and inspections."
      }
    },
    {
      "@type": "Question",
      "name": "What's included in a kitchen remodel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard kitchen remodeling includes cabinet installation (custom or semi-custom), countertop fabrication (granite, quartz, or marble), backsplash tile installation, appliance installation and hookup, plumbing fixture replacement, electrical updates and lighting, flooring installation, and painting. Design consultation included."
      }
    }
  ]
};

export default function KitchenRemodelingPage() {
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
        <section className="bg-gradient-to-br from-amber-50 to-gray-50 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Answer-First Box */}
              <div className="bg-white rounded-xl shadow-xl p-6 mb-8 border-l-4 border-amber-600">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Kitchen Remodeling Services in Houston, TX
                </h1>
                <div className="text-lg text-gray-800 space-y-2">
                  <p className="font-semibold">✓ Complete kitchen renovations in Houston</p>
                  <p>✓ $15,000-$60,000 typical investment range</p>
                  <p>✓ 4-8 week completion timeline</p>
                  <p>✓ Licensed, insured, permits included</p>
                  <p className="text-amber-600 font-bold">Call (832) 979-6414 for free design consultation</p>
                </div>
              </div>

              {/* Quick Stats for AI Citation */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white rounded-lg p-4 text-center shadow">
                  <div className="text-2xl font-bold text-amber-600">200+</div>
                  <div className="text-sm text-gray-600">Kitchens Remodeled</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow">
                  <div className="text-2xl font-bold text-amber-600">4-8</div>
                  <div className="text-sm text-gray-600">Week Timeline</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow">
                  <div className="text-2xl font-bold text-amber-600">$28k</div>
                  <div className="text-sm text-gray-600">Avg. Investment</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow">
                  <div className="text-2xl font-bold text-amber-600">10yr</div>
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
                  Our Kitchen Remodeling Process
                </h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">1. Design & Planning (Week 1)</h3>
                      <p className="text-gray-700">
                        Free in-home consultation to assess space and needs, 3D design rendering and material selection, 
                        detailed cost breakdown and timeline, permit applications for electrical and plumbing.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">2. Demolition & Prep (Week 2)</h3>
                      <p className="text-gray-700">
                        Careful removal of existing cabinets and fixtures, protect adjacent rooms from dust, 
                        update electrical wiring to code (GFCI outlets), rough-in plumbing for new layout.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">3. Installation (Weeks 3-6)</h3>
                      <p className="text-gray-700">
                        Install cabinets level and secure, template and install countertops, mount backsplash 
                        and under-cabinet lighting, connect appliances and test all systems.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">4. Finishing Touches (Week 7-8)</h3>
                      <p className="text-gray-700">
                        Install flooring and transitions, paint walls and trim, mount hardware and accessories, 
                        final inspection and punch list completion.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-amber-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">Popular Houston Kitchen Features:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Cabinets:</strong> Shaker style, soft-close drawers, 42&quot; uppers</li>
                    <li>• <strong>Countertops:</strong> Quartz (Caesarstone, Silestone), Granite</li>
                    <li>• <strong>Backsplash:</strong> Subway tile, mosaic, natural stone</li>
                    <li>• <strong>Islands:</strong> 4x8 ft with seating, storage, and outlets</li>
                    <li>• <strong>Appliances:</strong> Stainless steel, energy-efficient models</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Get Your Free Kitchen Design
                  </h3>
                  <LeadForm source="kitchen-service-page" service="kitchen" />
                </div>

                {/* Trust Indicators */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Why Choose Great Rock?</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-amber-600 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">Licensed Contractors</div>
                        <div className="text-sm text-gray-600">Master plumber & electrician</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-amber-600 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">On-Time Completion</div>
                        <div className="text-sm text-gray-600">4-8 week guarantee</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-amber-600 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">10-Year Warranty</div>
                        <div className="text-sm text-gray-600">On all workmanship</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <DollarSign className="h-5 w-5 text-amber-600 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">Competitive Pricing</div>
                        <div className="text-sm text-gray-600">Beat any written quote</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Budget Breakdown Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Houston Kitchen Remodeling Budget Guide
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">Budget: $15,000-$25,000</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Cabinet refacing or painting</li>
                    <li>• Laminate or butcher block counters</li>
                    <li>• Basic tile backsplash</li>
                    <li>• Standard appliances</li>
                    <li>• Vinyl or laminate flooring</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow border-2 border-amber-500">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">Mid-Range: $25,000-$40,000</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Semi-custom cabinets</li>
                    <li>• Granite or quartz countertops</li>
                    <li>• Subway tile backsplash</li>
                    <li>• Stainless steel appliances</li>
                    <li>• Hardwood or tile flooring</li>
                  </ul>
                  <p className="mt-3 text-xs text-amber-600 font-semibold">Most Popular Choice</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">High-End: $40,000+</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Custom cabinetry</li>
                    <li>• Premium stone countertops</li>
                    <li>• Designer tile backsplash</li>
                    <li>• Professional-grade appliances</li>
                    <li>• Hardwood or natural stone</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    How much does kitchen remodeling cost in Houston?
                  </h3>
                  <p className="text-gray-700">
                    Kitchen remodeling in Houston typically costs $15,000-$60,000. Budget renovations (cosmetic updates) 
                    range $15,000-$25,000. Mid-range remodels (new cabinets and countertops) cost $25,000-$40,000. 
                    High-end renovations (custom cabinets, premium appliances) exceed $40,000. Average Houston kitchen 
                    remodel is $28,000.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    How long does kitchen remodeling take?
                  </h3>
                  <p className="text-gray-700">
                    Complete kitchen remodeling in Houston takes 4-8 weeks. Cosmetic updates complete in 2-3 weeks. 
                    Standard renovations with cabinet replacement take 4-6 weeks. Full gut renovations with structural 
                    changes require 6-8 weeks. Timeline includes demolition, rough-in work, installation, and finishing.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Do I need permits for kitchen remodeling in Houston?
                  </h3>
                  <p className="text-gray-700">
                    Houston requires permits for electrical, plumbing, and structural changes during kitchen remodeling. 
                    Moving walls, adding outlets, or relocating plumbing needs permits. Cosmetic updates like painting 
                    or cabinet refacing typically don&apos;t. Great Rock Renovations handles all permit applications and inspections.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    What&apos;s included in a kitchen remodel?
                  </h3>
                  <p className="text-gray-700">
                    Standard kitchen remodeling includes cabinet installation (custom or semi-custom), countertop 
                    fabrication (granite, quartz, or marble), backsplash tile installation, appliance installation 
                    and hookup, plumbing fixture replacement, electrical updates and lighting, flooring installation, 
                    and painting. Design consultation included.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-amber-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Transform Your Kitchen Today
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Free design consultation and 3D rendering
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:832-979-6414"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Call (832) 979-6414
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-700 text-white rounded-lg font-bold text-lg hover:bg-amber-800 transition-colors"
              >
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}