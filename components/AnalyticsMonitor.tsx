'use client';

import { useEffect } from 'react';

export default function AnalyticsMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const logPerformance = () => {
      if (!window.performance || !window.performance.timing) return;

      const timing = window.performance.timing;
      const performanceData = {
        domContentLoaded: timing.domContentLoadedEventEnd - timing.domContentLoadedEventStart,
        loadComplete: timing.loadEventEnd - timing.loadEventStart,
        domInteractive: timing.domInteractive - timing.domLoading,
        firstPaint: 0,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        cumulativeLayoutShift: 0,
        firstInputDelay: 0,
        interactionToNextPaint: 0
      };

      try {
        const paintEntries = performance.getEntriesByType('paint');
        paintEntries.forEach((entry) => {
          if (entry.name === 'first-paint') {
            performanceData.firstPaint = Math.round(entry.startTime);
          } else if (entry.name === 'first-contentful-paint') {
            performanceData.firstContentfulPaint = Math.round(entry.startTime);
          }
        });

        new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
              performanceData.largestContentfulPaint = Math.round(entry.startTime);
              
              if (window.dataLayer) {
                window.dataLayer.push({
                  event: 'web_vitals',
                  web_vitals_measurement: {
                    name: 'LCP',
                    value: performanceData.largestContentfulPaint,
                    delta: performanceData.largestContentfulPaint,
                    rating: performanceData.largestContentfulPaint < 2500 ? 'good' : 
                            performanceData.largestContentfulPaint < 4000 ? 'needs-improvement' : 'poor'
                  }
                });
              }
            }
          }
        }).observe({ type: 'largest-contentful-paint', buffered: true });

        new PerformanceObserver((entryList) => {
          let cls = 0;
          for (const entry of entryList.getEntries()) {
            const layoutShift = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
            if (!layoutShift.hadRecentInput && layoutShift.value) {
              cls += layoutShift.value;
            }
          }
          performanceData.cumulativeLayoutShift = cls;
          
          if (window.dataLayer && cls > 0) {
            window.dataLayer.push({
              event: 'web_vitals',
              web_vitals_measurement: {
                name: 'CLS',
                value: Math.round(cls * 1000) / 1000,
                delta: Math.round(cls * 1000) / 1000,
                rating: cls < 0.1 ? 'good' : cls < 0.25 ? 'needs-improvement' : 'poor'
              }
            });
          }
        }).observe({ type: 'layout-shift', buffered: true });

        new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (entry.entryType === 'first-input') {
              const firstInput = entry as PerformanceEntry & { processingStart?: number };
              if (firstInput.processingStart) {
                performanceData.firstInputDelay = Math.round(firstInput.processingStart - entry.startTime);
              }
              
              if (window.dataLayer) {
                window.dataLayer.push({
                  event: 'web_vitals',
                  web_vitals_measurement: {
                    name: 'FID',
                    value: performanceData.firstInputDelay,
                    delta: performanceData.firstInputDelay,
                    rating: performanceData.firstInputDelay < 100 ? 'good' : 
                            performanceData.firstInputDelay < 300 ? 'needs-improvement' : 'poor'
                  }
                });
              }
            }
          }
        }).observe({ type: 'first-input', buffered: true });

        const checkScriptLoad = () => {
          const scripts = performance.getEntriesByType('resource').filter(
            entry => entry.name.includes('googletagmanager') || entry.name.includes('gtag')
          ) as PerformanceResourceTiming[];

          scripts.forEach(script => {
            if (window.dataLayer) {
              window.dataLayer.push({
                event: 'script_performance',
                script_name: script.name.split('/').pop(),
                load_time: Math.round(script.responseEnd - script.startTime),
                transfer_size: script.transferSize || 0,
                encoded_size: script.encodedBodySize || 0,
                decoded_size: script.decodedBodySize || 0
              });
            }
          });
        };

        if (document.readyState === 'complete') {
          setTimeout(checkScriptLoad, 2000);
        } else {
          window.addEventListener('load', () => {
            setTimeout(checkScriptLoad, 2000);
          });
        }

      } catch (error) {
        console.error('Performance monitoring error:', error);
      }
    };

    if (document.readyState === 'complete') {
      logPerformance();
    } else {
      window.addEventListener('load', logPerformance);
    }

    return () => {
      window.removeEventListener('load', logPerformance);
    };
  }, []);

  return null;
}

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
  }
}