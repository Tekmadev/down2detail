"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    // Scroll to top on route change, but only for navigation between different pages
    // This prevents the jarring scroll behavior on mobile
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
