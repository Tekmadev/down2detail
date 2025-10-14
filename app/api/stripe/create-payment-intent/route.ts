import { NextRequest, NextResponse } from "next/server";

// TODO: Import Stripe when configured
// import Stripe from 'stripe';
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: '2023-10-16',
// });

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      amount,
      currency,
      customer_email,
      customer_name,
      metadata,
      description,
    } = body;

    // TODO: Replace with actual Stripe implementation
    // const paymentIntent = await stripe.paymentIntents.create({
    //   amount: amount,
    //   currency: currency || 'cad',
    //   customer_email: customer_email,
    //   metadata: metadata,
    //   description: description,
    //   automatic_payment_methods: {
    //     enabled: true,
    //   },
    // });

    // For now, return a mock response
    const mockPaymentIntent = {
      id: `pi_mock_${Date.now()}`,
      client_secret: `pi_mock_${Date.now()}_secret_mock`,
      status: "requires_payment_method",
      amount: amount,
      currency: currency || "cad",
    };

    return NextResponse.json({
      paymentIntentId: mockPaymentIntent.id,
      clientSecret: mockPaymentIntent.client_secret,
      status: mockPaymentIntent.status,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    return NextResponse.json(
      { error: "Failed to create payment intent" },
      { status: 500 }
    );
  }
}
