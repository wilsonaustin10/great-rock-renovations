import { CheckCircle, Users, Award, ShieldCheck, Heart, Hammer, Home } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  const values = [
    { icon: Hammer, title: 'Craftsmanship', description: '12+ years of excellence' },
    { icon: Heart, title: 'Faith-Driven', description: 'Guided by integrity' },
    { icon: Users, title: 'Family-Owned', description: 'Local Houston business' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/family.jpg"
                alt="Austin Taylor, Kendall Taylor, Cooper, Duke and Leighton - The Great Rock Renovations Family"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white text-lg font-semibold">The Taylor Family</p>
                <p className="text-white/90 text-sm">Austin, Kendall, Cooper, Duke & Leighton</p>
              </div>
            </div>
            
            {/* Values Cards */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                    <Icon className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-gray-900">{value.title}</p>
                    <p className="text-xs text-gray-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              More Than a Construction Company
            </h2>
            
            <div className="space-y-4 text-gray-600">
              <p className="text-lg leading-relaxed">
                At Great Rock Renovations, we are more than a construction company. We are a family-owned 
                business built on integrity, craftsmanship, and a passion for serving others. With over 12 
                years of renovating residential and commercial properties, we understand that every project 
                is deeply personal. Homes and businesses are places where people build their lives, create 
                memories, and establish legacies. We consider it both a blessing and a responsibility to 
                help turn our clients' vision into reality.
              </p>

              <p className="leading-relaxed">
                As a local, family-owned company in the Houston area, we take pride in knowing our work 
                contributes to the beauty and strength of our community. From driveways and patios to 
                decorative flooring and full renovation projects, we approach each job with the same 
                dedication to excellence. Our commitment extends not only to the finished product but 
                also to the way we care for our customers throughout the process.
              </p>

              <p className="leading-relaxed">
                Our company is guided by faith and built on principles of honesty, respect, and hard work. 
                We believe the way we treat people matters just as much as the quality of the work we deliver. 
                That is why we are committed to clear communication, dependable service, and results that 
                stand the test of time.
              </p>

              <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded-r-lg">
                <p className="text-primary-900 italic">
                  With every project we complete, a portion of our proceeds is donated to one of our ministry 
                  partners. This allows us to extend the impact of our work beyond construction, helping to 
                  meet real needs and supporting causes that strengthen our community both locally and globally.
                </p>
              </div>

              <p className="leading-relaxed font-medium text-gray-700">
                When you choose Great Rock Renovations, you are not just hiring a contractor. You are 
                partnering with a family-owned company dedicated to faith, excellence, and service. We 
                would be honored to help turn your ideas into reality and deliver results that are both 
                beautiful and lasting.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors duration-200 font-semibold"
              >
                Start Your Project With Us
                <Home className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;