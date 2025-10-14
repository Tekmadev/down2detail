import { NextRequest, NextResponse } from "next/server";

// TODO: Import Stripe when configured
// import Stripe from 'stripe';
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: '2023-10-16',
// });

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { paymentIntentId } = body;

    // TODO: Replace with actual Stripe implementation
    // const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    // For now, return a mock response
    const mockPaymentIntent = {
      id: paymentIntentId,
      status: "succeeded",
      amount: 5000, // Mock amount in cents
      currency: "cad",
    };

    return NextResponse.json({
      id: mockPaymentIntent.id,
      status: mockPaymentIntent.status,
      amount: mockPaymentIntent.amount,
      currency: mockPaymentIntent.currency,
    });
  } catch (error) {
    console.error("Error confirming payment intent:", error);
    return NextResponse.json(
      { error: "Failed to confirm payment intent" },
      { status: 500 }
    );
  }
}
