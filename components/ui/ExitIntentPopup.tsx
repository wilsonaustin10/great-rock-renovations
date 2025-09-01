'use client';

import { useState, useEffect } from 'react';
import { X, Gift, Clock } from 'lucide-react';

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [hasShown, setHasShown] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email captured:', email);
    alert('Thank you! Check your email for your 10% discount code.');
    setIsVisible(false);
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
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
            >
              Get My 10% Discount
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