"use client";

import { useEffect } from "react";

// Google Analytics Events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Conversion tracking
export const trackConversion = (
  conversionType: string,
  service?: string,
  amount?: number
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-17074659027", // Your Google Ads conversion ID
      event_category: "conversion",
      event_label: conversionType,
      custom_parameter_service: service,
      value: amount,
      currency: "CAD",
    });
  }
};

// Page view tracking
export const trackPageView = (pageTitle: string, pagePath: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", "AW-17074659027", {
      page_title: pageTitle,
      page_location: window.location.href,
      page_path: pagePath,
    });
  }
};

// Business-specific tracking functions
export const trackServiceView = (
  serviceName: string,
  serviceCategory: string
) => {
  trackEvent("view_service", "engagement", serviceName);
  trackEvent("service_category_view", "services", serviceCategory);
};

export const trackQuoteRequest = (serviceName: string, vehicleType: string) => {
  trackEvent("quote_request", "lead_generation", serviceName);
  trackConversion("quote_request", serviceName);
};

export const trackBookingAttempt = (serviceName: string) => {
  trackEvent("booking_attempt", "conversion", serviceName);
};

export const trackPhoneCall = () => {
  trackEvent("phone_call", "contact", "header_phone");
  trackConversion("phone_call");
};

export const trackNewsletterSignup = (source: string) => {
  trackEvent("newsletter_signup", "engagement", source);
  trackConversion("newsletter_signup");
};

export const trackSocialClick = (platform: string) => {
  trackEvent("social_click", "engagement", platform);
};

export const trackScrollDepth = (depth: number) => {
  trackEvent("scroll_depth", "engagement", `${depth}%`, depth);
};

// Page engagement tracking hook
export function usePageTracking(pageTitle: string, pagePath: string) {
  useEffect(() => {
    trackPageView(pageTitle, pagePath);

    // Track scroll depth
    let maxScroll = 0;
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
          100
      );

      if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
        maxScroll = scrollPercent;
        trackScrollDepth(scrollPercent);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pageTitle, pagePath]);
}

// Time on page tracking
export function useTimeOnPage(pageTitle: string) {
  useEffect(() => {
    const startTime = Date.now();

    return () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      if (timeOnPage > 10) {
        // Only track if user spent more than 10 seconds
        trackEvent("time_on_page", "engagement", pageTitle, timeOnPage);
      }
    };
  }, [pageTitle]);
}

// Global analytics interface
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
