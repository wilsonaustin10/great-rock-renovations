'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [consent, setConsent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      alert('Please agree to the Terms & Conditions and Privacy Policy to continue.');
      return;
    }
    // Handle form submission here
    console.log('Form submitted:', formData, 'Consent:', consent);
    // You would typically send this to an API endpoint
    alert('Thank you for your inquiry! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
    setConsent(false);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            Ready to start your project? Contact us for a free consultation and quote. 
            We&apos;ll respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form - Enhanced for Conversion */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 md:p-8 shadow-xl border border-gray-100">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Get Your Free Quote in 24 Hours
              </h3>
              <p className="text-sm text-green-600 font-semibold">
                ✓ No obligation ✓ Free consultation ✓ Licensed & insured
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-blue-500  focus:border-blue-500 transition-all duration-200 hover:border-gray-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-blue-500  focus:border-blue-500 transition-all duration-200 hover:border-gray-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-blue-500  focus:border-blue-500 transition-all duration-200 hover:border-gray-300"
                    placeholder="(832) 979-6414"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-900 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-blue-500  focus:border-blue-500 transition-all duration-200 hover:border-gray-300"
                  >
                    <option value="">Select a service</option>
                    <option value="deck">Deck Building</option>
                    <option value="fence">Fence Installation</option>
                    <option value="kitchen">Kitchen Remodeling</option>
                    <option value="bathroom">Bathroom Renovation</option>
                    <option value="roofing">Roofing Services</option>
                    <option value="general">General Contracting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-blue-500  focus:border-blue-500 transition-all duration-200 hover:border-gray-300"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Consent Checkbox */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                    className="mt-1 h-5 w-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-xs text-gray-700 leading-relaxed">
                    I agree to the{' '}
                    <a href="/terms" target="_blank" className="text-blue-600 underline hover:text-blue-700">
                      Terms & Conditions
                    </a>{' '}
                    and{' '}
                    <a href="/privacy" target="_blank" className="text-blue-600 underline hover:text-blue-700">
                      Privacy Policy
                    </a>.
                    By submitting this form, you consent to receive SMS messages and/or emails and/or calls from Great Rock Renovations. 
                    Message frequency varies. To unsubscribe, follow the instructions provided in our communications. 
                    Msg & data rates may apply for SMS. Your information is secure and will not be sold to third parties. 
                    Text HELP for HELP, text STOP to cancel.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-blue-500 "
              >
                <Send className="h-5 w-5" />
                Get My Free Quote
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Get in Touch
            </h3>
            <p className="text-gray-800 mb-8">
              Have questions about our services? Need an urgent repair? 
              We&apos;re here to help. Reach out to us through any of the methods below.
            </p>

            <div className="space-y-6">
              <a
                href="tel:832-979-6414"
                className="flex items-start gap-4 group"
              >
                <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-blue-600">(832) 979-6414</p>
                  <p className="text-sm text-gray-800">Mon-Fri 8am-6pm</p>
                </div>
              </a>

              <a
                href="mailto:info@greatrockrenovations.com"
                className="flex items-start gap-4 group"
              >
                <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-blue-600">info@greatrockrenovations.com</p>
                  <p className="text-sm text-gray-800">We reply within 24 hours</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Office</p>
                  <p className="text-gray-800">15219 Cypress Post Ln</p>
                  <p className="text-gray-800">Cypress, TX 77429</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Business Hours</p>
                  <p className="text-gray-800">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-800">Saturday: 9:00 AM - 4:00 PM</p>
                  <p className="text-gray-800">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.098456239877!2d-95.65577288488173!3d30.144527281811454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86405d3e7b965111%3A0x2c6b0a0e1e3d9c15!2s15219%20Cypress%20Post%20Ln%2C%20Cypress%2C%20TX%2077429!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Great Rock Renovations Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;