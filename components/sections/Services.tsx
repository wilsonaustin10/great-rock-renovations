import { Home, Fence, HardHat, Hammer, PaintBucket, Wrench, ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: 'Deck Building',
    description: 'Custom deck design and construction to extend your living space outdoors.',
    icon: Home,
    image: '/images/Examples/Exterior After.webp',
  },
  {
    id: 2,
    title: 'Fence Installation',
    description: 'Quality fencing solutions for privacy, security, and curb appeal.',
    icon: Fence,
    image: 'https://images.unsplash.com/photo-1621873495884-845e939ac8df?w=400&h=300&fit=crop',
  },
  {
    id: 3,
    title: 'Roofing Services',
    description: 'Professional roof replacement and repair to protect your investment.',
    icon: HardHat,
    image: 'https://images.unsplash.com/photo-1632327042343-702c12ae0c9e?w=400&h=300&fit=crop',
  },
  {
    id: 4,
    title: 'Kitchen Remodeling',
    description: 'Transform your kitchen into a beautiful and functional space.',
    icon: Hammer,
    image: '/images/Examples/Kitchen.webp',
  },
  {
    id: 5,
    title: 'Bathroom Renovation',
    description: 'Upgrade your bathroom with modern fixtures and design.',
    icon: PaintBucket,
    image: '/images/Examples/25 Master Bathroom.jpg',
  },
  {
    id: 6,
    title: 'General Contracting',
    description: 'Complete construction management for your residential or commercial project.',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=300&fit=crop',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            From simple repairs to complete renovations, we offer a full range of 
            construction services to meet your needs.
          </p>
        </div>

        {/* Services Grid - Enhanced for Mobile and Conversion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-blue-200"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white p-3 rounded-full shadow-lg">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-800 mb-4">
                    {service.description}
                  </p>
                  <Link
                    href="#contact"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-bold transition-all duration-200 group/link hover:gap-3"
                  >
                    Get Quote
                    <svg
                      className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA - Enhanced for Maximum Conversion */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Space?
          </h3>
          <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote today and see why Houston families trust us with their homes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-500 "
            >
              Get Your Free Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:713-555-0100"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-bold text-lg border-2 border-blue-200 hover:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-500 "
            >
              <Phone className="h-5 w-5" />
              Call (713) 555-0100
            </a>
          </div>
          <p className="text-sm text-gray-900 mt-6">
            ⭐ Rated 4.9/5 by 500+ Houston homeowners
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;