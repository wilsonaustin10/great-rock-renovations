'use client';

import { useEffect, useState } from 'react';

interface PhoneLinkProps {
  phone: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export default function PhoneLink({ phone, children, className, ariaLabel }: PhoneLinkProps) {
  const [conversionLoaded, setConversionLoaded] = useState(false);

  useEffect(() => {
    const loadConversion = () => {
      if (typeof window !== 'undefined' && window.gtag && !window.gtag_report_conversion) {
        window.gtag_report_conversion = function(url?: string) {
          const callback = function() {
            if (typeof url !== 'undefined') {
              window.location.href = url;
            }
          };
          
          window.gtag?.('event', 'conversion', {
            'send_to': 'AW-17524938335/TT3vCIm126EbEN-sxaRB',
            'value': 1.0,
            'currency': 'USD',
            'event_callback': callback
          });
          
          return false;
        };
        setConversionLoaded(true);
      }
    };

    const checkGtag = setInterval(() => {
      if (window.gtag) {
        loadConversion();
        clearInterval(checkGtag);
      }
    }, 100);

    const timeout = setTimeout(() => {
      clearInterval(checkGtag);
    }, 10000);

    return () => {
      clearInterval(checkGtag);
      clearTimeout(timeout);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (conversionLoaded && window.gtag_report_conversion) {
      e.preventDefault();
      window.gtag_report_conversion(`tel:${phone}`);
    }
  };

  return (
    <a
      href={`tel:${phone}`}
      className={className}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (...args: any[]) => void;
    gtag_report_conversion?: (url?: string) => boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fbq?: (...args: any[]) => void;
  }
}