"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 px-4 py-3 safe-area-bottom">
      <div className="flex gap-3 max-w-lg mx-auto">
        <Link
          href="/contact"
          className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-[#d6781c] hover:bg-[#c2410c] text-white font-bold rounded-lg transition-colors text-sm"
        >
          Get a Free Quote
        </Link>
        <a
          href="tel:+14384838175"
          className="flex-1 inline-flex items-center justify-center px-4 py-3 border-2 border-[#d6781c] text-[#d6781c] font-bold rounded-lg transition-colors text-sm"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          Call Now
        </a>
      </div>
    </div>
  );
}
