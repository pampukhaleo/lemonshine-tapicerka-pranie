// Google Analytics tracking utilities for Single Page Applications
declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Initialize dataLayer if it doesn't exist
if (typeof window !== 'undefined' && !window.dataLayer) {
  window.dataLayer = [];
}

export const gtag = (...args: any[]) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(args);
  }
};

// Track page views for SPA navigation
export const trackPageView = (page_path: string, page_title?: string) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'page_view',
      page_location: window.location.href,
      page_path,
      page_title: page_title || document.title
    });
  }
};

// Track form submissions and conversions
export const trackGenerateLead = (data: {
  form_id?: string;
  service?: string;
  preferred_date?: string;
  preferred_time?: string;
}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'generate_lead',
      form_id: 'order_form',
      ...data
    });
  }
};

// Track custom events
export const trackEvent = (event_name: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: event_name,
      ...parameters
    });
  }
};