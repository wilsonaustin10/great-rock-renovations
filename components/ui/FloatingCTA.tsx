'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, X } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling past hero section
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;
      
      if (scrollPosition > heroHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 lg:hidden">
        {isExpanded && (
          <>
            <Link
              href="#contact"
              className="flex items-center justify-center w-14 h-14 bg-white text-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-blue-200"
              onClick={() => setIsExpanded(false)}
            >
              <MessageSquare className="h-6 w-6" />
            </Link>
            <a
              href="tel:832-979-6414"
              className="flex items-center justify-center w-14 h-14 bg-white text-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-blue-200"
            >
              <Phone className="h-6 w-6" />
            </a>
          </>
        )}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`flex items-center justify-center w-16 h-16 ${
            isExpanded 
              ? 'bg-gray-600' 
              : 'bg-gradient-to-r from-blue-600 to-blue-700 animate-pulse'
          } text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110`}
        >
          {isExpanded ? (
            <X className="h-6 w-6" />
          ) : (
            <Phone className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Desktop Sticky Bar */}
      <div className="hidden lg:block fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-blue-200 shadow-2xl">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <p className="text-lg font-semibold text-gray-900">
                Ready to transform your home?
              </p>
              <p className="text-sm text-green-600 font-medium">
                ✓ Free Quote ✓ Licensed & Insured ✓ 12+ Years Experience
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:832-979-6414"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-5 py-2.5 rounded-lg hover:bg-gray-50 transition-all duration-300 font-bold border-2 border-blue-200 hover:border-blue-300"
              >
                <Phone className="h-4 w-4" />
                (832) 979-6414
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingCTA;