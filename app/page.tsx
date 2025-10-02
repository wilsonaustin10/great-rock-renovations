import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import VisionMission from "@/components/sections/VisionMission";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import LeadForm from "@/components/LeadForm";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Quick Lead Form Section - Accessible immediately */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Get Your Free Quote in 24 Hours
                </h2>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-center gap-2">
                    <span className="text-green-600">✓</span> 
                    <strong>Free Consultation:</strong> No obligation quote
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-green-600">✓</span> 
                    <strong>Fast Response:</strong> Within 24 hours
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-green-600">✓</span> 
                    <strong>Licensed & Insured:</strong> Full protection
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-green-600">✓</span> 
                    <strong>500+ Projects:</strong> Proven expertise
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <LeadForm source="homepage-top" compact={true} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <About />
      <VisionMission />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  );
}
