// lib/gtag.js
export const GA_TRACKING_ID = "G-TKFQJMJLNL"; // Replace with your actual GA4 Measurement ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  if (typeof window !== "undefined") {
    window.gtag("config", GA_TRACKING_ID, {
      page_location: url,
    });
  }
};
