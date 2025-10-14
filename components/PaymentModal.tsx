"use client";

import React, { useState } from "react";
import Modal from "./ui/Modal";
import Button from "./ui/Button";
import { stripeService, StripePaymentData } from "@/lib/stripeService";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (paymentIntentId: string) => void;
  paymentData: StripePaymentData;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  paymentData,
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePayment = async () => {
    setIsProcessing(true);
    setError(null);

    try {
      const result = await stripeService.createPaymentIntent(paymentData);

      if (result.success && result.clientSecret) {
        // TODO: Integrate with Stripe Elements for actual payment processing
        // For now, simulate successful payment
        setTimeout(() => {
          setIsProcessing(false);
          onSuccess(result.paymentIntentId || "mock_payment_id");
        }, 2000);
      } else {
        setError(result.error || "Payment processing failed");
        setIsProcessing(false);
      }
    } catch (error) {
      setError("An unexpected error occurred");
      setIsProcessing(false);
    }
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
    }).format(amount / 100);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Complete Your Booking Deposit"
      size="md"
      closeOnBackdropClick={false}
    >
      <div className="space-y-6">
        {/* Payment Summary */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Payment Summary
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Service:</span>
              <span className="text-gray-900 dark:text-white font-medium">
                {paymentData.description}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">
                Deposit Amount:
              </span>
              <span className="text-gray-900 dark:text-white font-medium">
                {formatAmount(paymentData.amount)}
              </span>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-2">
              <div className="flex justify-between">
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  Total to Pay:
                </span>
                <span className="text-lg font-semibold text-orange-600 dark:text-orange-400">
                  {formatAmount(paymentData.amount)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Information */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
          <h4 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">
            Billing Information
          </h4>
          <p className="text-sm text-blue-700 dark:text-blue-300">
            {paymentData.customerName}
          </p>
          <p className="text-sm text-blue-700 dark:text-blue-300">
            {paymentData.customerEmail}
          </p>
        </div>

        {/* Payment Method Placeholder */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
            Payment Method
          </h4>
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Stripe payment form will be integrated here
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">
              (Credit/Debit Card, Apple Pay, Google Pay)
            </p>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
            </div>
          </div>
        )}

        {/* Security Notice */}
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <div className="flex items-start space-x-2">
            <svg
              className="w-5 h-5 text-green-500 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h4 className="text-sm font-medium text-green-800 dark:text-green-200">
                Secure Payment
              </h4>
              <p className="text-xs text-green-700 dark:text-green-300 mt-1">
                Your payment information is encrypted and secure. We use Stripe
                for payment processing.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          <Button
            type="button"
            onClick={onClose}
            variant="secondary"
            className="flex-1"
            disabled={isProcessing}
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handlePayment}
            variant="primary"
            className="flex-1"
            disabled={isProcessing}
          >
            {isProcessing ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Processing...</span>
              </div>
            ) : (
              `Pay ${formatAmount(paymentData.amount)}`
            )}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default PaymentModal;
