'use client';

import { Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after scrolling down 100px
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Call Now Button */}
      <a
        href="tel:832-979-6414"
        className="group flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-3 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
        aria-label="Call us at 832-979-6414"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-25"></div>
          <Phone className="relative h-6 w-6" />
        </div>
        <span className="font-bold text-base whitespace-nowrap">
          (832) 979-6414
        </span>
      </a>
      
      {/* Quick Response Badge */}
      <div className="bg-white text-gray-900 px-3 py-1.5 rounded-full shadow-lg text-xs font-semibold text-center">
        ⚡ Quick Response
      </div>
    </div>
  );
}