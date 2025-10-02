'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Phone, CheckCircle, ArrowLeft, MessageSquare, Clock } from 'lucide-react';
import PhoneLink from '@/components/PhoneLink';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const service = searchParams.get('service');
  const source = searchParams.get('source');
  const utm_source = searchParams.get('utm_source');
  const utm_medium = searchParams.get('utm_medium');
  const utm_campaign = searchParams.get('utm_campaign');

  useEffect(() => {
    // Google Ads Conversion Tracking
    if (typeof window !== 'undefined' && window.gtag) {
      // Special conversion tracking for brick finishes
      if (service === 'brick-finishes') {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-17524938335/vmemCOLezqMbEN-sxaRB',
          'value': 1.0,
          'currency': 'USD'
        });
      } else {
        // Default conversion tracking for other services
        window.gtag('event', 'conversion', {
          'send_to': 'AW-17524938335/FORM_CONVERSION_LABEL', // Replace with form submission conversion label
          'value': 1.0,
          'currency': 'USD'
        });
      }
    }

    // Meta Pixel Conversion Tracking
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: service || 'General Inquiry',
        content_category: 'Lead Form Submission',
        value: 1.0,
        currency: 'USD',
        source: utm_source || source || 'direct'
      });
    }

    // Google Analytics 4 Event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'generate_lead', {
        'currency': 'USD',
        'value': 1.0,
        'lead_source': utm_source || source || 'website',
        'lead_medium': utm_medium || 'organic',
        'lead_campaign': utm_campaign || 'none',
        'service_type': service || 'general'
      });
    }

    // Log conversion for debugging (remove in production)
    console.log('Conversion tracked:', {
      service,
      source: utm_source || source,
      medium: utm_medium,
      campaign: utm_campaign
    });
  }, [service, source, utm_source, utm_medium, utm_campaign]);

  const serviceLabels: Record<string, string> = {
    'brick-finishes': 'Brick Finishes (Slurry/German Smear/Limewash)',
    'deck': 'Deck Building',
    'fence': 'Fence Installation',
    'kitchen': 'Kitchen Remodeling',
    'bathroom': 'Bathroom Renovation',
    'roofing': 'Roofing Services',
    'patio': 'Patio & Outdoor Living',
    'concrete': 'Concrete Work',
    'general': 'General Contracting',
    'other': 'General Inquiry'
  };

  const serviceRequested = service ? serviceLabels[service] || 'Your Project' : 'Your Project';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Success Icon Animation */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25"></div>
              <CheckCircle className="relative h-20 w-20 text-green-500 animate-bounce" />
            </div>
          </div>

          {/* Main Thank You Message */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Thank You for Your Request!
            </h1>
            <p className="text-xl text-gray-700 mb-2">
              We&apos;ve received your inquiry about <span className="font-semibold text-blue-600">{serviceRequested}</span>
            </p>
            <p className="text-lg text-gray-600">
              One of our experts will contact you within 30 minutes during business hours.
            </p>
          </div>

          {/* Call Now Box - Prominent Display */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-2xl p-8 md:p-10 mb-12 text-white">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Want to Speak With Us Right Now?
              </h2>
              <p className="text-lg mb-6 text-blue-100">
                Call us directly for immediate assistance with your project
              </p>
              <PhoneLink
                phone="832-979-6414"
                className="inline-flex items-center justify-center gap-3 bg-white text-blue-700 px-8 py-5 rounded-xl text-2xl md:text-3xl font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                ariaLabel="Call us at 832-979-6414"
              >
                <Phone className="h-8 w-8 md:h-10 md:w-10 animate-pulse" />
                (832) 979-6414
              </PhoneLink>
              <p className="mt-4 text-sm text-blue-100">
                Available Mon-Sat: 7:00 AM - 7:00 PM
              </p>
            </div>
          </div>

          {/* What Happens Next */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              What Happens Next?
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-1">
                    Quick Response 
                  </h4>
                  <p className="text-gray-600">
                    During business hours, we&apos;ll call you within 30 minutes to discuss your project needs and schedule a consultation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-1">
                    Free Consultation
                  </h4>
                  <p className="text-gray-600">
                    We&apos;ll schedule a free, no-obligation consultation to assess your project and provide an accurate quote.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-1">
                    Detailed Proposal
                  </h4>
                  <p className="text-gray-600">
                    You&apos;ll receive a detailed, transparent proposal with pricing, timeline, and project specifications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Actions */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              While You Wait...
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#portfolio"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg border-2 border-blue-200 hover:bg-blue-50 transition-all duration-300 font-semibold"
              >
                View Our Recent Projects
              </Link>
              <Link
                href="/#testimonials"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg border-2 border-blue-200 hover:bg-blue-50 transition-all duration-300 font-semibold"
              >
                Read Customer Reviews
              </Link>
            </div>
          </div>

          {/* Return Home Link */}
          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              Return to Homepage
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-6 mt-16 text-center">
            <div>
              <p className="text-3xl font-bold text-blue-600">12+</p>
              <p className="text-sm text-gray-600 mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">500+</p>
              <p className="text-sm text-gray-600 mt-1">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">100%</p>
              <p className="text-sm text-gray-600 mt-1">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}