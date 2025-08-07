interface UserData {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
}

interface CustomData {
  [key: string]: any;
}

interface ConversionEventOptions {
  eventName: string;
  userData: UserData;
  customData?: CustomData;
  eventTime?: number;
}

export class MetaConversionTracker {
  private static instance: MetaConversionTracker;
  private isEnabled: boolean;

  private constructor() {
    // Enable tracking only in production or when explicitly enabled
    this.isEnabled =
      process.env.NODE_ENV === "production" ||
      process.env.NEXT_PUBLIC_ENABLE_META_TRACKING === "true";
  }

  public static getInstance(): MetaConversionTracker {
    if (!MetaConversionTracker.instance) {
      MetaConversionTracker.instance = new MetaConversionTracker();
    }
    return MetaConversionTracker.instance;
  }

  /**
   * Send a conversion event to Meta Conversion API
   */
  async trackConversion(options: ConversionEventOptions): Promise<{
    success: boolean;
    leadId?: number;
    error?: string;
  }> {
    if (!this.isEnabled) {
      console.log("Meta tracking is disabled in development mode");
      return { success: true, leadId: 0 };
    }

    try {
      const response = await fetch("/api/meta-conversion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(options),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("Meta tracking failed:", result);
        return { success: false, error: result.error };
      }

      console.log("Meta conversion tracked successfully:", result);
      return {
        success: true,
        leadId: result.leadId,
      };
    } catch (error) {
      console.error("Meta tracking error:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  /**
   * Track contact form submission
   */
  async trackContactFormSubmission(
    userData: UserData,
    customData?: CustomData
  ) {
    return this.trackConversion({
      eventName: "Lead",
      userData,
      customData: {
        content_category: "Contact Form",
        content_name: "Contact Form Submission",
        ...customData,
      },
    });
  }

  /**
   * Track newsletter signup
   */
  async trackNewsletterSignup(email: string, customData?: CustomData) {
    return this.trackConversion({
      eventName: "Lead",
      userData: { email },
      customData: {
        content_category: "Newsletter",
        content_name: "Newsletter Signup",
        ...customData,
      },
    });
  }

  /**
   * Track coming soon email collection
   */
  async trackComingSoonSignup(email: string, customData?: CustomData) {
    return this.trackConversion({
      eventName: "Lead",
      userData: { email },
      customData: {
        content_category: "Coming Soon",
        content_name: "Early Access Signup",
        ...customData,
      },
    });
  }

  /**
   * Track service inquiry
   */
  async trackServiceInquiry(
    userData: UserData,
    serviceName: string,
    customData?: CustomData
  ) {
    return this.trackConversion({
      eventName: "Lead",
      userData,
      customData: {
        content_category: "Service Inquiry",
        content_name: serviceName,
        service_type: serviceName,
        ...customData,
      },
    });
  }

  /**
   * Track phone call click (when someone clicks to call)
   */
  async trackPhoneCallClick(customData?: CustomData) {
    return this.trackConversion({
      eventName: "Lead",
      userData: {},
      customData: {
        content_category: "Phone Call",
        content_name: "Phone Click to Call",
        ...customData,
      },
    });
  }

  /**
   * Track Calendly booking (if you can capture user data)
   */
  async trackCalendlyBooking(userData: UserData, customData?: CustomData) {
    return this.trackConversion({
      eventName: "Lead",
      userData,
      customData: {
        content_category: "Appointment",
        content_name: "Calendly Booking",
        ...customData,
      },
    });
  }

  /**
   * Enable/disable tracking
   */
  setEnabled(enabled: boolean) {
    this.isEnabled = enabled;
  }

  /**
   * Check if tracking is enabled
   */
  isTrackingEnabled(): boolean {
    return this.isEnabled;
  }
}

// Export singleton instance
export const metaTracker = MetaConversionTracker.getInstance();
