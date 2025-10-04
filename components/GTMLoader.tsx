'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

const GTM_ID = 'GTM-PH48P9LT';
const GOOGLE_ADS_ID = 'AW-17524938335';

export default function GTMLoader() {
  const [shouldLoadGTM, setShouldLoadGTM] = useState(false);
  const [shouldLoadAds, setShouldLoadAds] = useState(false);

  useEffect(() => {
    const loadGTM = () => {
      setShouldLoadGTM(true);
      window.removeEventListener('scroll', loadGTM);
      window.removeEventListener('mousemove', loadGTM);
      window.removeEventListener('touchstart', loadGTM);
      window.removeEventListener('click', loadGTM);
    };

    const loadAds = () => {
      setShouldLoadAds(true);
    };

    const timer = setTimeout(() => {
      setShouldLoadGTM(true);
    }, 4000);

    const adsTimer = setTimeout(() => {
      setShouldLoadAds(true);
    }, 6000);

    window.addEventListener('scroll', loadGTM, { once: true, passive: true });
    window.addEventListener('mousemove', loadGTM, { once: true, passive: true });
    window.addEventListener('touchstart', loadGTM, { once: true, passive: true });
    window.addEventListener('click', loadGTM, { once: true, passive: true });

    const checkCriticalInteraction = () => {
      const forms = document.querySelectorAll('form');
      const ctaButtons = document.querySelectorAll('[data-cta], .cta, [href*="tel:"], [href*="mailto:"]');
      
      if (forms.length > 0 || ctaButtons.length > 0) {
        forms.forEach(form => {
          form.addEventListener('focusin', loadAds, { once: true });
        });
        
        ctaButtons.forEach(button => {
          button.addEventListener('mouseenter', loadAds, { once: true, passive: true });
          button.addEventListener('click', loadAds, { once: true, passive: true });
        });
      }
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', checkCriticalInteraction);
    } else {
      checkCriticalInteraction();
    }

    return () => {
      clearTimeout(timer);
      clearTimeout(adsTimer);
      window.removeEventListener('scroll', loadGTM);
      window.removeEventListener('mousemove', loadGTM);
      window.removeEventListener('touchstart', loadGTM);
      window.removeEventListener('click', loadGTM);
    };
  }, []);

  return (
    <>
      {shouldLoadGTM && (
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      )}

      {shouldLoadAds && (
        <Script
          id="gtag-ads"
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        />
      )}

      {shouldLoadAds && (
        <Script
          id="gtag-config"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GOOGLE_ADS_ID}', {
                'page_path': window.location.pathname,
                'send_page_view': false
              });
            `,
          }}
        />
      )}

      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
}