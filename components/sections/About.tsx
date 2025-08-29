import { CheckCircle, Users, Award, ShieldCheck } from 'lucide-react';

const About = () => {
  const features = [
    'Licensed and fully insured contractors',
    'Free consultations and detailed quotes',
    'Quality materials from trusted suppliers',
    'Experienced and skilled craftsmen',
    'On-time project completion',
    'Competitive and transparent pricing',
  ];

  const stats = [
    { icon: Users, value: '50+', label: 'Expert Team Members' },
    { icon: Award, value: '15+', label: 'Years of Excellence' },
    { icon: ShieldCheck, value: '100%', label: 'Satisfaction Guaranteed' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112c39047e?w=400&h=300&fit=crop"
                alt="Construction team at work"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1574359411903-8d64c6040d8f?w=400&h=300&fit=crop"
                alt="Quality construction"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-8 py-4 rounded-lg shadow-xl">
              <p className="text-2xl font-bold text-center">Built Right. In Austin.</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Great Rock Renovations?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 15 years of experience in the Austin construction industry, 
              we&apos;ve built our reputation on quality craftsmanship, honest communication, 
              and exceptional customer service. Every project we undertake is a testament 
              to our commitment to excellence.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              From the initial consultation to the final walkthrough, we work closely 
              with our clients to ensure their vision becomes reality. Our team of 
              skilled professionals takes pride in delivering results that exceed 
              expectations.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <Icon className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;