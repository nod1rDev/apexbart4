import { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { analytics } from '../utils';

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', analytics.googleAnalyticsId, {
        page_path: location.pathname + location.search
      });
    }
  }, [location]);
};
