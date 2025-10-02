'use client';

import { useState, useEffect } from 'react';
import { Send } from 'lucide-react';

interface LeadFormProps {
  source?: string;
  service?: string;
  compact?: boolean;
  className?: string;
}

const LeadForm = ({ source = 'website', service: defaultService = '', compact = false, className = '' }: LeadFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: defaultService,
    message: '',
  });
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [utmParams, setUtmParams] = useState({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_content: '',
    utm_term: ''
  });

  useEffect(() => {
    // Capture UTM parameters from URL
    const urlParams = new URLSearchParams(window.location.search);
    const capturedUtmParams = {
      utm_source: urlParams.get('utm_source') || '',
      utm_medium: urlParams.get('utm_medium') || '',
      utm_campaign: urlParams.get('utm_campaign') || '',
      utm_content: urlParams.get('utm_content') || '',
      utm_term: urlParams.get('utm_term') || ''
    };
    setUtmParams(capturedUtmParams);

    // Check if referred from AI/LLM sources
    const referrer = document.referrer.toLowerCase();
    const isFromLLM = 
      urlParams.get('ref') === 'ai' ||
      urlParams.get('ref') === 'chatgpt' ||
      urlParams.get('source') === 'ai' ||
      referrer.includes('chat.openai.com') ||
      referrer.includes('perplexity.ai') ||
      referrer.includes('claude.ai') ||
      referrer.includes('bard.google.com') ||
      referrer.includes('bing.com/chat');

    if (isFromLLM && !capturedUtmParams.utm_source) {
      // Set AI-specific UTM parameters if not already set
      setUtmParams(prev => ({
        ...prev,
        utm_source: capturedUtmParams.utm_source || 'ai-search',
        utm_medium: capturedUtmParams.utm_medium || 'organic',
        utm_campaign: capturedUtmParams.utm_campaign || 'llm-referral'
      }));
    }

    // Store in sessionStorage for persistence across page navigation
    if (capturedUtmParams.utm_source || isFromLLM) {
      sessionStorage.setItem('utm_params', JSON.stringify({
        ...capturedUtmParams,
        ...(isFromLLM && !capturedUtmParams.utm_source ? { 
          utm_source: 'ai-search',
          utm_medium: 'organic',
          utm_campaign: 'llm-referral'
        } : {})
      }));
    } else {
      // Try to get from sessionStorage if not in URL
      const storedParams = sessionStorage.getItem('utm_params');
      if (storedParams) {
        setUtmParams(JSON.parse(storedParams));
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      alert('Please agree to the Terms & Conditions and Privacy Policy to continue.');
      return;
    }

    setIsSubmitting(true);

    // Determine the actual source
    let actualSource = source;
    if (utmParams.utm_source === 'ai-search' || utmParams.utm_campaign === 'llm-referral') {
      actualSource = 'ai-' + source;
    }

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: actualSource,
          consent: true,
          ...utmParams,
        }),
      });

      const data = await response.json();

      if (response.ok && (data.success || data.fallback)) {
        // Redirect to thank you page with UTM parameters
        const params = new URLSearchParams({
          service: formData.service || 'general',
          source: actualSource,
          ...(utmParams.utm_source && { utm_source: utmParams.utm_source }),
          ...(utmParams.utm_medium && { utm_medium: utmParams.utm_medium }),
          ...(utmParams.utm_campaign && { utm_campaign: utmParams.utm_campaign }),
        });
        window.location.href = `/thank-you?${params.toString()}`;
      } else {
        alert('There was an issue submitting your request. Please try again or call us directly at (832) 979-6414.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an issue submitting your request. Please try again or call us directly at (832) 979-6414.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your Name *"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your Email *"
          />
        </div>
        
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Phone Number (Optional)"
        />

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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

        <div className="bg-gray-50 p-3 rounded-lg">
          <label className="flex items-start gap-2 cursor-pointer text-xs">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              required
              className="mt-0.5 h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <span className="text-gray-600">
              I agree to the{' '}
              <a href="/terms" target="_blank" className="text-blue-600 underline">
                Terms
              </a>{' '}
              &{' '}
              <a href="/privacy" target="_blank" className="text-blue-600 underline">
                Privacy Policy
              </a>
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              Submitting...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Get Free Quote
            </>
          )}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
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
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300 text-gray-900"
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
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300 text-gray-900"
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
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300 text-gray-900"
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
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300 text-gray-900"
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
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300 text-gray-900"
          placeholder="Tell us about your project..."
        />
      </div>

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
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            Submitting...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Get My Free Quote
          </>
        )}
      </button>
    </form>
  );
};

export default LeadForm;