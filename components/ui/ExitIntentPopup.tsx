'use client';

import { useState, useEffect } from 'react';
import { X, Gift, Clock } from 'lucide-react';

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [hasShown, setHasShown] = useState(false);
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check if popup has been shown in this session
    const popupShown = sessionStorage.getItem('exitPopupShown');
    if (popupShown) {
      setHasShown(true);
      return;
    }

    // Show popup after 30 seconds for both desktop and mobile
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    }, 30000);

    return () => {
      clearTimeout(timer);
    };
  }, [hasShown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      alert('Please agree to the Terms & Conditions and Privacy Policy to continue.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: email.split('@')[0],
          email: email,
          source: 'exit-intent-popup',
          service: 'discount-request',
          message: 'Requested 10% discount via exit intent popup',
          consent: true,
        }),
      });

      const data = await response.json();

      if (response.ok && (data.success || data.fallback)) {
        // Redirect to thank you page for discount request
        const params = new URLSearchParams({
          service: 'discount-request',
          source: 'exit-intent-popup',
        });
        window.location.href = `/thank-you?${params.toString()}`;
      } else {
        alert('There was an issue processing your request. Please try again or call us at (832) 979-6414.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an issue processing your request. Please try again or call us at (832) 979-6414.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
          aria-label="Close popup"
        >
          <X className="h-5 w-5 text-gray-900" />
        </button>

        {/* Header with Gradient */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white text-center">
          <Gift className="h-12 w-12 mx-auto mb-4 animate-bounce" />
          <h2 className="text-3xl font-bold mb-2">Wait! Don&apos;t Leave Yet!</h2>
          <p className="text-lg">Get 10% OFF Your First Project</p>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-center gap-2 justify-center mb-4 text-green-600">
            <Clock className="h-5 w-5" />
            <p className="font-semibold">Limited Time Offer - Expires in 24 Hours</p>
          </div>

          <p className="text-gray-900 text-center mb-6 font-medium">
            Join thousands of Houston homeowners who trust Great Rock Renovations. 
            Enter your email below to receive your exclusive discount code!
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-blue-500  focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-500"
            />
            
            {/* Consent Checkbox */}
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                required
                className="mt-1 h-4 w-4 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-xs text-gray-700 leading-relaxed">
                I agree to receive promotional emails and SMS. View our{' '}
                <a href="/privacy" target="_blank" className="text-blue-600 underline hover:text-blue-700">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="/terms" target="_blank" className="text-blue-600 underline hover:text-blue-700">
                  Terms
                </a>.
              </span>
            </label>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="inline-block animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Processing...
                </>
              ) : (
                'Get My 10% Discount'
              )}
            </button>
          </form>

          {/* Trust Indicators */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex justify-center gap-6 text-sm text-gray-900 font-medium">
              <span>✓ No spam</span>
              <span>✓ Instant delivery</span>
              <span>✓ Valid for 30 days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;