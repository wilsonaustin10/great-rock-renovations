import { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { CheckCircle, Clock, Shield, Award, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Fence Installation Houston TX | Wood, Vinyl & Chain Link | Great Rock Renovations", 
  description: "Professional fence installation in Houston, TX. Wood, vinyl, chain link, and aluminum fences installed in 3-7 days. Licensed, insured, free quotes. Call (832) 979-6414.",
  keywords: "fence installation Houston, wood fence Houston TX, vinyl fencing, chain link fence, fence contractor Houston, privacy fence installation",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Fence Installation Services",
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
  "description": "Professional fence installation services in Houston. Wood, vinyl, chain link, and aluminum fences installed in 3-7 days.",
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
      "name": "How much does fence installation cost in Houston?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fence installation in Houston typically costs $15-$50 per linear foot installed. Chain link averages $15-$25/ft, wood privacy fences $20-$35/ft, vinyl $25-$40/ft, and aluminum $30-$50/ft. A standard 150-foot fence ranges from $2,250-$7,500 including materials and labor."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a permit for fence installation in Houston?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Houston requires permits for fences over 8 feet tall. Standard 6-foot privacy fences typically don't need permits, but HOA approval may be required. Great Rock Renovations verifies all requirements and handles necessary permits. Check deed restrictions and HOA rules before installation."
      }
    },
    {
      "@type": "Question",
      "name": "How long does fence installation take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard fence installation in Houston takes 3-7 days. Small yards (under 150 feet) typically complete in 3-4 days. Larger properties (200-400 feet) take 5-7 days. Timeline includes post setting, panel installation, and gates. Weather and site conditions may affect schedule."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best fence material for Houston weather?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vinyl and aluminum perform best in Houston's humid climate, resisting rot, rust, and termites without maintenance. Pressure-treated pine is economical but requires regular staining. Cedar naturally resists insects but needs sealing. Chain link offers durability with minimal maintenance."
      }
    }
  ]
};

export default function FenceInstallationPage() {
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
        <section className="bg-gradient-to-br from-green-50 to-gray-50 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Answer-First Box */}
              <div className="bg-white rounded-xl shadow-xl p-6 mb-8 border-l-4 border-green-600">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Fence Installation Services in Houston, TX
                </h1>
                <div className="text-lg text-gray-800 space-y-2">
                  <p className="font-semibold">✓ We install fences in Houston, TX</p>
                  <p>✓ Wood, vinyl, chain link & aluminum options</p>
                  <p>✓ Typical installation completed in 3-7 days</p>
                  <p>✓ Licensed, insured & permit assistance included</p>
                  <p className="text-green-600 font-bold">Call (832) 979-6414 for immediate service</p>
                </div>
              </div>

              {/* Quick Stats for AI Citation */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white rounded-lg p-4 text-center shadow">
                  <div className="text-2xl font-bold text-green-600">1000+</div>
                  <div className="text-sm text-gray-600">Fences Installed</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow">
                  <div className="text-2xl font-bold text-green-600">3-7</div>
                  <div className="text-sm text-gray-600">Day Timeline</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow">
                  <div className="text-2xl font-bold text-green-600">$15-50</div>
                  <div className="text-sm text-gray-600">Per Linear Ft</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow">
                  <div className="text-2xl font-bold text-green-600">5yr</div>
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
                  Our Fence Installation Process
                </h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">1. Property Survey & Design (Day 1)</h3>
                      <p className="text-gray-700">
                        Mark property lines and utilities (811 call), measure perimeter and plan gate locations, 
                        verify HOA requirements and deed restrictions, provide material samples and cost estimate.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">2. Post Installation (Days 2-3)</h3>
                      <p className="text-gray-700">
                        Dig post holes to 30-36 inch depth for Houston soil, set galvanized or pressure-treated posts, 
                        use fast-setting concrete for stability, ensure proper spacing and alignment.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">3. Panel & Gate Installation (Days 4-6)</h3>
                      <p className="text-gray-700">
                        Install fence panels or pickets level and plumb, mount gates with heavy-duty hinges, 
                        add locks and latches per specification, ensure smooth operation and proper clearance.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">4. Finishing & Cleanup (Day 7)</h3>
                      <p className="text-gray-700">
                        Apply stain or sealant to wood fences, install post caps and decorative elements, 
                        complete site cleanup and debris removal, final inspection and warranty documentation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-green-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">Fence Types We Install:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Wood Privacy:</strong> Cedar, Pine - 6ft & 8ft heights available</li>
                    <li>• <strong>Vinyl/PVC:</strong> Low maintenance, variety of styles & colors</li>
                    <li>• <strong>Chain Link:</strong> Galvanized or vinyl-coated, 4ft-8ft heights</li>
                    <li>• <strong>Aluminum:</strong> Ornamental designs, rust-resistant finish</li>
                    <li>• <strong>Composite:</strong> Wood-look with minimal maintenance</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Get Your Free Fence Quote
                  </h3>
                  <LeadForm source="fence-service-page" service="fence" />
                </div>

                {/* Trust Indicators */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Why Choose Great Rock?</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">Licensed & Insured</div>
                        <div className="text-sm text-gray-600">Full liability coverage</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">Quick Installation</div>
                        <div className="text-sm text-gray-600">3-7 days completion</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">5-Year Warranty</div>
                        <div className="text-sm text-gray-600">On workmanship</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Home className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">HOA Compliant</div>
                        <div className="text-sm text-gray-600">We handle approvals</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Material Comparison Table */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Fence Material Comparison for Houston
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left">Material</th>
                      <th className="px-4 py-3 text-left">Cost/Linear Ft</th>
                      <th className="px-4 py-3 text-left">Lifespan</th>
                      <th className="px-4 py-3 text-left">Maintenance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 font-semibold">Chain Link</td>
                      <td className="px-4 py-3">$15-$25</td>
                      <td className="px-4 py-3">20+ years</td>
                      <td className="px-4 py-3">Minimal</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Wood (Pine)</td>
                      <td className="px-4 py-3">$20-$30</td>
                      <td className="px-4 py-3">15-20 years</td>
                      <td className="px-4 py-3">Annual staining</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Wood (Cedar)</td>
                      <td className="px-4 py-3">$25-$35</td>
                      <td className="px-4 py-3">20-25 years</td>
                      <td className="px-4 py-3">Bi-annual sealing</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Vinyl</td>
                      <td className="px-4 py-3">$25-$40</td>
                      <td className="px-4 py-3">25-30 years</td>
                      <td className="px-4 py-3">Occasional cleaning</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Aluminum</td>
                      <td className="px-4 py-3">$30-$50</td>
                      <td className="px-4 py-3">30+ years</td>
                      <td className="px-4 py-3">Minimal</td>
                    </tr>
                  </tbody>
                </table>
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
                    How much does fence installation cost in Houston?
                  </h3>
                  <p className="text-gray-700">
                    Fence installation in Houston typically costs $15-$50 per linear foot installed. Chain link 
                    averages $15-$25/ft, wood privacy fences $20-$35/ft, vinyl $25-$40/ft, and aluminum $30-$50/ft. 
                    A standard 150-foot fence ranges from $2,250-$7,500 including materials and labor.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Do I need a permit for fence installation in Houston?
                  </h3>
                  <p className="text-gray-700">
                    Houston requires permits for fences over 8 feet tall. Standard 6-foot privacy fences typically 
                    don&apos;t need permits, but HOA approval may be required. Great Rock Renovations verifies all 
                    requirements and handles necessary permits. Check deed restrictions and HOA rules before installation.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    How long does fence installation take?
                  </h3>
                  <p className="text-gray-700">
                    Standard fence installation in Houston takes 3-7 days. Small yards (under 150 feet) typically 
                    complete in 3-4 days. Larger properties (200-400 feet) take 5-7 days. Timeline includes post 
                    setting, panel installation, and gates. Weather and site conditions may affect schedule.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    What is the best fence material for Houston weather?
                  </h3>
                  <p className="text-gray-700">
                    Vinyl and aluminum perform best in Houston&apos;s humid climate, resisting rot, rust, and termites 
                    without maintenance. Pressure-treated pine is economical but requires regular staining. Cedar 
                    naturally resists insects but needs sealing. Chain link offers durability with minimal maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Install Your New Fence?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Free quotes within 24 hours - No obligation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:832-979-6414"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Call (832) 979-6414
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-700 text-white rounded-lg font-bold text-lg hover:bg-green-800 transition-colors"
              >
                Get Free Quote Online
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}