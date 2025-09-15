
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '@/lib/analytics';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Handle hash navigation (e.g., /#zamow)
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Regular page navigation - scroll to top
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }

    // Track page view for Google Analytics (SPA navigation)
    const page_path = location.pathname + location.search + location.hash;
    trackPageView(page_path, document.title);
  }, [location.pathname, location.hash]);

  return null;
};

export default ScrollToTop;
