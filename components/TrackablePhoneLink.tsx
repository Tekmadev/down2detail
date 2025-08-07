"use client";

import { metaTracker } from "@/lib/meta-tracking";
import { ReactNode } from "react";

interface TrackablePhoneLinkProps {
  phoneNumber: string;
  children: ReactNode;
  className?: string;
  trackingData?: {
    source?: string;
    page?: string;
    [key: string]: any;
  };
}

export default function TrackablePhoneLink({
  phoneNumber,
  children,
  className,
  trackingData = {},
}: TrackablePhoneLinkProps) {
  const handlePhoneClick = async () => {
    // Track the phone call click with Meta API
    await metaTracker.trackPhoneCallClick({
      phone_number: phoneNumber,
      click_source: trackingData.source || "Unknown",
      page_location: trackingData.page || window.location.pathname,
      ...trackingData,
    });
  };

  return (
    <a
      href={`tel:${phoneNumber.replace(/\s/g, "")}`}
      className={className}
      onClick={handlePhoneClick}
    >
      {children}
    </a>
  );
}
