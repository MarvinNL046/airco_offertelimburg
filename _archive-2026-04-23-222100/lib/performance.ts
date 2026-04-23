/**
 * Performance optimization utilities for the application
 */

/**
 * These are the critical paths that should be preloaded and optimized
 * to improve Largest Contentful Paint (LCP) and First Contentful Paint (FCP)
 */
export const CRITICAL_PATHS = [
  '/',
  '/offerte',
  '/contact',
  '/diensten'
];

/**
 * Set of utility functions to help optimize page performance
 */

/**
 * Prefetch important pages to improve navigation speed
 * @param paths Array of paths to prefetch
 */
export function prefetchCriticalPaths(paths: string[] = CRITICAL_PATHS) {
  if (typeof window === 'undefined') return;
  
  // Wait until the browser is idle
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(() => {
      paths.forEach(path => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = path;
        link.as = 'document';
        document.head.appendChild(link);
      });
    });
  }
}

/**
 * Optimize images for LCP
 * @param imageId Element ID for the image to optimize
 */
export function optimizeLCPImage(imageId: string) {
  if (typeof window === 'undefined') return;
  
  // Priority loading hints for browsers
  const image = document.getElementById(imageId) as HTMLImageElement;
  if (image) {
    image.fetchPriority = 'high';
    image.loading = 'eager';
    image.decoding = 'async';
  }
}

/**
 * Reduces the parse/compilation time by delaying non-critical JS
 * @param fn Function to execute
 * @param delay Delay in milliseconds
 */
export function deferNonCriticalJS(fn: () => void, delay = 1000) {
  if (typeof window === 'undefined') return;
  
  setTimeout(() => {
    fn();
  }, delay);
}

/**
 * Mark a component as an LCP element for monitoring
 * This adds proper attributes for browser hinting
 * @param element Element to mark
 */
export function markAsLCP(element: HTMLElement | null) {
  if (!element) return;
  
  // Mark for priority rendering
  element.setAttribute('data-lcp', 'true');
  element.style.contentVisibility = 'auto';
}

/**
 * Measure and report important metrics for analysis
 */
export function measurePerformance() {
  if (typeof window === 'undefined' || !('performance' in window)) return;
  
  // Wait for the page to be fully loaded
  window.addEventListener('load', () => {
    // Report performance metrics
    if ('getEntriesByType' in performance) {
      // Report navigation timing
      const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navEntry) {
        console.info('TTFB:', navEntry.responseStart);
        console.info('DOMContentLoaded:', navEntry.domContentLoadedEventEnd);
        console.info('Load:', navEntry.loadEventEnd);
      }
      
      // Report LCP if available
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          if (entries.length > 0) {
            const lcp = entries[entries.length - 1];
            console.info('LCP:', lcp.startTime);
          }
        });
        
        observer.observe({ type: 'largest-contentful-paint', buffered: true });
      }
    }
  });
}

// Preload web fonts to prevent layout shifts
export function preloadFonts() {
  if (typeof window === 'undefined') return;
  
  // Wait for idle time to preload fonts
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(() => {
      // Preload Inter variable font used in the application
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = '/fonts/inter-var.woff2';
      fontLink.as = 'font';
      fontLink.type = 'font/woff2';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);
    });
  }
}
