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
export const trackFormSubmission = (data: {
  form_id?: string;
  service?: string;
  preferred_date?: string;
  preferred_time?: string;
}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'form_submission',
      form_id: 'order_form',
      ...data
    });
  }
};

// Track phone call clicks
export const trackPhoneClick = (location: string) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'phone_click',
      location: location, // e.g., 'header', 'hero', 'footer', 'faq', 'order_form'
      phone_number: '+48662117886'
    });
  }
};

// Track Google Ads conversion (after successful form submission)
export const trackConversion = () => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'conversion',
      send_to: 'AW-17183299023/1NeMCPjo1eQaEM-r0YFA'
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