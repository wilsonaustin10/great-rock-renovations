import { Home, Fence, HardHat, Hammer, PaintBucket, Wrench } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: 'Deck Building',
    description: 'Custom deck design and construction to extend your living space outdoors.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
  },
  {
    id: 5,
    title: 'Bathroom Renovation',
    description: 'Upgrade your bathroom with modern fixtures and design.',
    icon: PaintBucket,
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop',
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
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From simple repairs to complete renovations, we offer a full range of 
            construction services to meet your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
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
                      <Icon className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Link
                    href="#contact"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                  >
                    Learn More
                    <svg
                      className="ml-2 h-4 w-4"
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

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-md hover:bg-primary-700 transition-colors duration-200 font-semibold"
          >
            Get Your Free Quote Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;