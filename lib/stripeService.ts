// Stripe payment service for handling deposit payments
// This will be used once Stripe is configured

export interface StripePaymentData {
  amount: number; // Amount in cents
  currency: string;
  customerEmail: string;
  customerName: string;
  bookingId: string;
  description: string;
  metadata?: Record<string, string>;
}

export interface StripePaymentResult {
  success: boolean;
  paymentIntentId?: string;
  clientSecret?: string;
  error?: string;
}

export class StripeService {
  private static instance: StripeService;

  public static getInstance(): StripeService {
    if (!StripeService.instance) {
      StripeService.instance = new StripeService();
    }
    return StripeService.instance;
  }

  /**
   * Create a payment intent for booking deposit
   */
  async createPaymentIntent(
    paymentData: StripePaymentData
  ): Promise<StripePaymentResult> {
    try {
      // TODO: Replace with actual Stripe API call
      // This is a placeholder implementation

      const response = await fetch("/api/stripe/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: paymentData.amount,
          currency: paymentData.currency,
          customer_email: paymentData.customerEmail,
          customer_name: paymentData.customerName,
          metadata: {
            booking_id: paymentData.bookingId,
            service_type: "booking_deposit",
            ...paymentData.metadata,
          },
          description: paymentData.description,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create payment intent");
      }

      const result = await response.json();

      return {
        success: true,
        paymentIntentId: result.paymentIntentId,
        clientSecret: result.clientSecret,
      };
    } catch (error) {
      console.error("Error creating payment intent:", error);
      return {
        success: false,
        error:
          error instanceof Error ? error.message : "Payment processing failed",
      };
    }
  }

  /**
   * Confirm payment intent
   */
  async confirmPaymentIntent(
    paymentIntentId: string
  ): Promise<StripePaymentResult> {
    try {
      const response = await fetch("/api/stripe/confirm-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentIntentId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to confirm payment");
      }

      const result = await response.json();

      return {
        success: result.status === "succeeded",
        paymentIntentId: result.id,
      };
    } catch (error) {
      console.error("Error confirming payment:", error);
      return {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Payment confirmation failed",
      };
    }
  }

  /**
   * Format amount for Stripe (convert to cents)
   */
  formatAmountForStripe(amount: number): number {
    return Math.round(amount * 100);
  }

  /**
   * Format amount for display (convert from cents)
   */
  formatAmountForDisplay(amountInCents: number): number {
    return amountInCents / 100;
  }
}

export const stripeService = StripeService.getInstance();
