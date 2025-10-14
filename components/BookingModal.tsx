"use client";

import React, { useState, useRef } from "react";
import Modal from "./ui/Modal";
import Button from "./ui/Button";
import PaymentModal from "./PaymentModal";
import { services } from "@/data/services";
import { bookingService, BookingData } from "@/lib/bookingService";
import { stripeService, StripePaymentData } from "@/lib/stripeService";
import { useI18n } from "@/hooks/useI18n";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const { t } = useI18n("booking");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [currentBookingId, setCurrentBookingId] = useState<string | null>(null);
  const [paymentData, setPaymentData] = useState<StripePaymentData | null>(
    null
  );
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const phoneInputRef = useRef<HTMLInputElement>(null);

  // Phone number validation and formatting
  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    const phoneNumber = value.replace(/\D/g, "");

    // Format as Canadian phone number
    if (phoneNumber.length <= 3) {
      return phoneNumber;
    } else if (phoneNumber.length <= 6) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else if (phoneNumber.length <= 10) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
        3,
        6
      )}-${phoneNumber.slice(6)}`;
    } else {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
        3,
        6
      )}-${phoneNumber.slice(6, 10)}`;
    }
  };

  const validatePhoneNumber = (phone: string) => {
    const phoneNumber = phone.replace(/\D/g, "");
    if (phoneNumber.length === 0) return "Phone number is required";
    if (phoneNumber.length !== 10)
      return "Please enter a valid 10-digit Canadian phone number";
    if (
      !phoneNumber.startsWith("2") &&
      !phoneNumber.startsWith("3") &&
      !phoneNumber.startsWith("4") &&
      !phoneNumber.startsWith("5") &&
      !phoneNumber.startsWith("6") &&
      !phoneNumber.startsWith("7") &&
      !phoneNumber.startsWith("8") &&
      !phoneNumber.startsWith("9")
    ) {
      return "Please enter a valid Canadian phone number";
    }
    return "";
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow: backspace, delete, tab, escape, enter, home, end, left, right, up, down
    if (
      [8, 9, 27, 13, 46, 35, 36, 37, 38, 39, 40].indexOf(e.keyCode) !== -1 ||
      // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
      (e.keyCode === 65 && e.ctrlKey === true) ||
      (e.keyCode === 67 && e.ctrlKey === true) ||
      (e.keyCode === 86 && e.ctrlKey === true) ||
      (e.keyCode === 88 && e.ctrlKey === true)
    ) {
      return;
    }
    // Ensure that it is a number and stop the keypress
    if (
      (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
      (e.keyCode < 96 || e.keyCode > 105)
    ) {
      e.preventDefault();
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const formatted = formatPhoneNumber(value);
      setFormData((prev) => ({ ...prev, [name]: formatted }));

      // Validate phone number
      const phoneError = validatePhoneNumber(formatted);
      setErrors((prev) => ({ ...prev, phone: phoneError }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      // Clear error when user starts typing
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    const phoneError = validatePhoneNumber(formData.phone);
    if (phoneError) {
      newErrors.phone = phoneError;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Create booking in database
      const bookingId = await bookingService.createBooking({
        customerName: formData.name,
        customerPhone: formData.phone,
        customerEmail: formData.email,
        serviceCategory: formData.service,
        serviceLocation: "mobile", // Default to mobile, can be made configurable
        priority: "medium",
        source: "website",
      });

      setCurrentBookingId(bookingId);

      // Get service pricing
      const servicePricing = bookingService.getServicePricing(formData.service);

      // Prepare payment data
      const paymentData: StripePaymentData = {
        amount: stripeService.formatAmountForStripe(
          servicePricing.depositAmount
        ),
        currency: "cad",
        customerEmail: formData.email,
        customerName: formData.name,
        bookingId: bookingId,
        description: `${formData.service} - Booking Deposit`,
        metadata: {
          service_category: formData.service,
          booking_reference: bookingId,
        },
      };

      setPaymentData(paymentData);
      setShowPaymentModal(true);
      setIsSubmitting(false);
    } catch (error) {
      console.error("Error creating booking:", error);
      setErrors({ submit: "Failed to create booking. Please try again." });
      setIsSubmitting(false);
    }
  };

  const handlePaymentSuccess = async (paymentIntentId: string) => {
    try {
      if (currentBookingId) {
        // Update booking with payment information
        await bookingService.updateDepositStatus(
          currentBookingId,
          "paid",
          paymentIntentId
        );

        setBookingSuccess(true);
        setShowPaymentModal(false);

        // Reset form after successful booking
        setTimeout(() => {
          setFormData({ name: "", phone: "", email: "", service: "" });
          setErrors({});
          setBookingSuccess(false);
          setCurrentBookingId(null);
          setPaymentData(null);
          onClose();
        }, 3000);
      }
    } catch (error) {
      console.error("Error updating booking with payment:", error);
      setErrors({
        submit:
          "Payment processed but booking update failed. Please contact us.",
      });
    }
  };

  const handlePaymentCancel = () => {
    setShowPaymentModal(false);
    if (currentBookingId) {
      // Optionally update booking status to cancelled
      bookingService.updateBookingStatus(currentBookingId, "cancelled");
    }
  };

  // Show success state
  if (bookingSuccess) {
    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="md"
        customHeader={
          <div className="flex items-center justify-between w-full">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {t("modal.titleConfirmed")}
            </h2>
            <div className="flex items-center space-x-3">
              <a
                href="https://calendly.com/down2detail-ca/consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-lg"
                title={t("modal.calendlyTooltip")}
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                </svg>
                <span>{t("modal.calendlyButton")}</span>
              </a>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                aria-label="Close modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        }
      >
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600 dark:text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {t("success.title")}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {t("success.message")}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Booking ID: {currentBookingId}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            {t("success.steps.confirmation")}
          </p>
        </div>
      </Modal>
    );
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="lg"
        customHeader={
          <div className="flex items-center justify-between w-full">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {t("modal.title")}
            </h2>
            <div className="flex items-center space-x-3">
              <a
                href="https://calendly.com/down2detail-ca/consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-lg"
                title={t("modal.calendlyTooltip")}
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                </svg>
                <span>{t("modal.calendlyButton")}</span>
              </a>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                aria-label="Close modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        }
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              {t("form.fields.name.label")} *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                errors.name
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 dark:border-gray-600 focus:ring-orange-500 focus:border-orange-500"
              }`}
              placeholder={t("form.fields.name.placeholder")}
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-500 flex items-center space-x-1">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              {t("form.fields.phone.label")} *
              <span className="text-gray-500 dark:text-gray-400 text-xs ml-2">
                {t("form.fields.phone.labelNote")}
              </span>
            </label>
            <div className="relative">
              <input
                ref={phoneInputRef}
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onKeyDown={handlePhoneKeyDown}
                required
                maxLength={17}
                className={`w-full px-4 py-3 pr-12 bg-gray-50 dark:bg-gray-800 border rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                  errors.phone
                    ? "border-red-500 focus:ring-red-500"
                    : formData.phone && !errors.phone
                    ? "border-green-500 focus:ring-green-500"
                    : "border-gray-300 dark:border-gray-600 focus:ring-orange-500 focus:border-orange-500"
                }`}
                placeholder={t("form.fields.phone.placeholder")}
              />

              {/* Validation indicator */}
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                {formData.phone && !errors.phone ? (
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : errors.phone ? (
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
                ) : null}
              </div>
            </div>

            {errors.phone && (
              <p className="mt-2 text-sm text-red-500 flex items-center space-x-1">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{errors.phone}</span>
              </p>
            )}

            {!errors.phone && formData.phone && (
              <p className="mt-2 text-xs text-green-600 dark:text-green-400">
                ✓ {t("form.fields.phone.validFormat")}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              {t("form.fields.email.label")} *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 dark:border-gray-600 focus:ring-orange-500 focus:border-orange-500"
              }`}
              placeholder={t("form.fields.email.placeholder")}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-500 flex items-center space-x-1">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          {/* Service Selection */}
          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              {t("form.fields.service.label")} *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-all duration-200 ${
                errors.service
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 dark:border-gray-600 focus:ring-orange-500 focus:border-orange-500"
              }`}
            >
              <option value="">{t("form.fields.service.placeholder")}</option>
              {bookingService.getAvailableServices().map((service) => {
                const pricing = bookingService.getServicePricing(service.label);
                return (
                  // to be edited later -SHAJEED-
                  <option key={service.id} value={service.label}>
                    {service.label} - ${pricing.depositAmount}{" "}
                    {t("form.fields.service.depositSuffix")}
                  </option>
                );
              })}
            </select>
            {errors.service && (
              <p className="mt-2 text-sm text-red-500 flex items-center space-x-1">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{errors.service}</span>
              </p>
            )}
          </div>

          {/* Submit Error */}
          {errors.submit && (
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
                <p className="text-sm text-red-700 dark:text-red-300">
                  {errors.submit}
                </p>
              </div>
            </div>
          )}

          {/* Deposit Information */}
          <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <svg
                className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h4 className="text-sm font-medium text-orange-800 dark:text-orange-200 mb-1">
                  {t("form.depositInfo.title")}
                </h4>
                <p className="text-xs text-orange-700 dark:text-orange-300">
                  {t("form.depositInfo.description")}
                </p>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
            <Button
              type="button"
              onClick={onClose}
              variant="secondary"
              className="flex-1"
            >
              {t("form.buttons.cancel")}
            </Button>
            <Button
              type="submit"
              variant="primary"
              className="flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>{t("form.buttons.processing")}</span>
                </div>
              ) : (
                t("form.buttons.submit")
              )}
            </Button>
          </div>
        </form>
      </Modal>

      {/* Payment Modal */}
      {paymentData && (
        <PaymentModal
          isOpen={showPaymentModal}
          onClose={handlePaymentCancel}
          onSuccess={handlePaymentSuccess}
          paymentData={paymentData}
        />
      )}
    </>
  );
};

export default BookingModal;
