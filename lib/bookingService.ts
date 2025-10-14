import { db } from "@/config/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { services } from "@/data/services";

export interface BookingData {
  // Customer Information
  customerName: string;
  customerPhone: string;
  customerEmail: string;

  // Service Information
  serviceCategory: string;
  serviceDetails?: string;

  // Booking Status & Management
  status: "pending" | "confirmed" | "in_progress" | "completed" | "cancelled";
  priority: "low" | "medium" | "high";

  // Financial Information
  depositAmount: number;
  depositStatus: "pending" | "paid" | "refunded";
  totalEstimate?: number;
  paymentMethod?: string;
  stripePaymentIntentId?: string;

  // Scheduling
  preferredDate?: string;
  preferredTime?: string;
  scheduledDate?: string;
  scheduledTime?: string;
  estimatedDuration?: number; // in minutes

  // Location & Service Details
  serviceLocation: "mobile" | "shop";
  address?: string;
  vehicleInfo?: {
    make?: string;
    model?: string;
    year?: string;
    color?: string;
    licensePlate?: string;
  };

  // Communication & Notes
  specialInstructions?: string;
  customerNotes?: string;
  internalNotes?: string;

  // System Information
  source: "website" | "phone" | "walk_in" | "referral";
  assignedTechnician?: string;
  createdAt: any; // Firestore timestamp
  updatedAt: any; // Firestore timestamp

  // Marketing & Analytics
  referralSource?: string;
  marketingCampaign?: string;
  utmParams?: {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_term?: string;
    utm_content?: string;
  };

  // Follow-up & Reviews
  followUpDate?: string;
  reviewRequested?: boolean;
  reviewSent?: boolean;
  reviewCompleted?: boolean;

  // Cancellation & Refunds
  cancellationReason?: string;
  cancellationDate?: string;
  refundAmount?: number;
  refundDate?: string;
  refundReason?: string;
}

export interface ServicePricing {
  [key: string]: {
    depositAmount: number;
    estimatedTotal: number;
    duration: number; // in minutes
  };
}

// Helper function to calculate standardized deposit amounts
const calculateStandardizedDeposit = (servicePrice: number): number => {
  const calculatedDeposit = servicePrice * 0.1; // 10% of service price

  // Round up to common deposit amounts for simplicity and customer convenience
  // This makes it easier for customers to understand and pay
  if (calculatedDeposit <= 30) return 25;
  if (calculatedDeposit <= 50) return 50;
  if (calculatedDeposit <= 75) return 75;
  if (calculatedDeposit <= 100) return 100;
  if (calculatedDeposit <= 150) return 150;
  if (calculatedDeposit <= 200) return 200;
  return 250; // For high-end services (Paint Correction, Ceramic Coating, etc.)
};

// Generate service pricing dynamically from services data
export const generateServicePricing = (): ServicePricing => {
  const pricing: ServicePricing = {};

  services.forEach((service) => {
    // Calculate deposit as 10% of the service price, rounded to standard amounts
    const basePrice = parseFloat(service.price.sedan) || 0;
    const depositAmount = calculateStandardizedDeposit(basePrice);

    // Estimate duration based on service category
    let estimatedDuration = 180; // Default 3 hours

    if (service.category === "Paint Polish") {
      if (service.label === "Paint Correction") {
        estimatedDuration = 480; // 8 hours
      } else if (service.label === "One-Step Polish") {
        estimatedDuration = 300; // 5 hours
      } else {
        estimatedDuration = 240; // 4 hours
      }
    } else if (service.category === "Protection") {
      if (service.label === "Ceramic Coating") {
        estimatedDuration = 600; // 10 hours
      } else {
        estimatedDuration = 180; // 3 hours
      }
    } else if (service.category === "Interior") {
      estimatedDuration = 240; // 4 hours
    } else if (service.category === "Exterior") {
      estimatedDuration = 180; // 3 hours
    }

    pricing[service.label] = {
      depositAmount,
      estimatedTotal: basePrice,
      duration: estimatedDuration,
    };
  });

  return pricing;
};

export const SERVICE_PRICING: ServicePricing = generateServicePricing();

export class BookingService {
  private static instance: BookingService;

  public static getInstance(): BookingService {
    if (!BookingService.instance) {
      BookingService.instance = new BookingService();
    }
    return BookingService.instance;
  }

  /**
   * Create a new booking in Firestore
   */
  async createBooking(
    bookingData: Omit<
      BookingData,
      | "createdAt"
      | "updatedAt"
      | "status"
      | "depositStatus"
      | "depositAmount"
      | "totalEstimate"
      | "estimatedDuration"
    >
  ): Promise<string> {
    try {
      const servicePricing = SERVICE_PRICING[bookingData.serviceCategory] || {
        depositAmount: 50,
        estimatedTotal: 200,
        duration: 180,
      };

      const fullBookingData: BookingData = {
        ...bookingData,
        status: "pending",
        depositStatus: "pending",
        depositAmount: servicePricing.depositAmount,
        totalEstimate: servicePricing.estimatedTotal,
        estimatedDuration: servicePricing.duration,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        source: "website",
      };

      const docRef = await addDoc(collection(db, "booking"), fullBookingData);

      console.log("Booking created with ID:", docRef.id);
      return docRef.id;
    } catch (error) {
      console.error("Error creating booking:", error);
      throw new Error("Failed to create booking. Please try again.");
    }
  }

  /**
   * Update booking status
   */
  async updateBookingStatus(
    bookingId: string,
    status: BookingData["status"]
  ): Promise<void> {
    try {
      const bookingRef = doc(db, "booking", bookingId);
      await updateDoc(bookingRef, {
        status,
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error updating booking status:", error);
      throw new Error("Failed to update booking status.");
    }
  }

  /**
   * Update deposit payment status
   */
  async updateDepositStatus(
    bookingId: string,
    depositStatus: BookingData["depositStatus"],
    stripePaymentIntentId?: string
  ): Promise<void> {
    try {
      const bookingRef = doc(db, "booking", bookingId);
      const updateData: any = {
        depositStatus,
        updatedAt: serverTimestamp(),
      };

      if (stripePaymentIntentId) {
        updateData.stripePaymentIntentId = stripePaymentIntentId;
      }

      await updateDoc(bookingRef, updateData);
    } catch (error) {
      console.error("Error updating deposit status:", error);
      throw new Error("Failed to update deposit status.");
    }
  }

  /**
   * Get booking by ID
   */
  async getBooking(bookingId: string): Promise<BookingData | null> {
    try {
      const bookingRef = doc(db, "booking", bookingId);
      const bookingSnap = await getDoc(bookingRef);

      if (bookingSnap.exists()) {
        return bookingSnap.data() as BookingData;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error getting booking:", error);
      throw new Error("Failed to retrieve booking.");
    }
  }

  /**
   * Get service pricing information
   */
  getServicePricing(serviceCategory: string) {
    return (
      SERVICE_PRICING[serviceCategory] || {
        depositAmount: 50,
        estimatedTotal: 200,
        duration: 180,
      }
    );
  }

  /**
   * Generate booking reference number
   */
  generateBookingReference(): string {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2, 5);
    return `D2D-${timestamp}-${random}`.toUpperCase();
  }

  /**
   * Get all available services for booking
   */
  getAvailableServices() {
    return services.filter(
      (service) =>
        service.price.sedan !== "Package Pricing" &&
        service.price.sedan !== "0.00" &&
        parseFloat(service.price.sedan) > 0
    );
  }

  /**
   * Get services by category
   */
  getServicesByCategory(category: string) {
    return services.filter((service) => service.category === category);
  }
}

export const bookingService = BookingService.getInstance();
