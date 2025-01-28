import { analytics } from '../utils';

export const useAnalytics = () => {
  const trackPageView = (path) => {
    if (window.gtag) {
      window.gtag('config', analytics.googleAnalyticsId, {
        page_path: path
      });
    }
  };

  const trackEvent = (category, action, label) => {
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label
      });
    }
  };

  return { trackPageView, trackEvent };
};
