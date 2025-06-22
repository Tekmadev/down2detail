"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // Simple but effective approach for mobile scroll issues
    if (typeof window !== "undefined") {
      // Disable browser scroll restoration
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }

      // Set initial scroll position immediately
      window.scrollTo(0, 0);

      // Use a small delay to override any browser scroll restoration
      const timeoutId = setTimeout(() => {
        window.scrollTo(0, 0);
      }, 50);

      return () => clearTimeout(timeoutId);
    }
  }, []);

  // This component doesn't render anything visible
  return null;
}
