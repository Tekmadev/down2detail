"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/config/firebase";
import Button from "./ui/Button";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const phoneNumber = "+1 438 483 8175"; // Updated to a realistic phone number

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const openCalendly = () => {
    // @ts-ignore
    window.Calendly?.initPopupWidget({
      url: "https://calendly.com/down2detail-ca/consultation",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset states
    setError("");
    setSubmitted(false);

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      // Check if email already exists
      const emailsRef = collection(db, "coming_soon_subscribers");
      const q = query(emailsRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setError("This email is already registered");
        setLoading(false);
        return;
      }

      // Add new email to the collection
      await addDoc(collection(db, "coming_soon_subscribers"), {
        email: email,
        createdAt: serverTimestamp(),
      });

      // Show success message
      setSubmitted(true);

      // Clear the input
      setEmail("");

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-5 text-center">
      <div className="max-w-md mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/d2dlogo.png"
            alt="Down2Detail Logo"
            width={150}
            height={150}
            className="object-contain"
            priority
          />
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Coming <span className="text-[#FF4C00]">Soon</span>
          </h1>

          <p className="text-xl text-gray-300 mb-6">
            We're crafting a premium online experience to match our premium
            detailing services.
          </p>

          <div className="h-1 w-20 bg-[#FF4C00] mx-auto my-8"></div>

          <div className="p-6 bg-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-3">
              Premium Auto Detailing
            </h2>
            <p className="text-gray-300 mb-4">
              Our services are still available! Call us directly to book your
              appointment for expert car detailing.
            </p>
            <a
              href={`tel:${phoneNumber.replace(/\s/g, "")}`}
              className="text-2xl font-bold text-[#FF4C00] hover:underline block"
            >
              {phoneNumber}
            </a>
            <div className="mt-4">
              <Button
                onClick={openCalendly}
                variant="primary"
                className="w-full"
              >
                Book Online
              </Button>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12">
            <h3 className="text-xl font-medium text-white mb-4">
              Get notified when we launch
            </h3>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-2 max-w-md mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className={`px-4 py-3 bg-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4C00] text-white flex-grow ${
                    error ? "border-red-500" : "border-gray-700"
                  }`}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  disabled={loading}
                  required
                />
                <button
                  type="submit"
                  className="bg-[#FF4C00] hover:bg-[#e04600] text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 disabled:opacity-70"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Notify Me"}
                </button>
              </div>

              {error && (
                <div className="text-sm text-red-500 mt-2 flex items-center justify-center gap-1">
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
                  {error}
                </div>
              )}

              {submitted && (
                <div className="text-sm text-green-400 mt-2 flex items-center justify-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Thank you! We'll notify you when we launch.
                </div>
              )}
            </form>
          </div>

          {/* Services List */}
          <div className="mt-10 pt-10 border-t border-gray-700">
            <h3 className="text-xl font-medium text-white mb-4">
              Our Detailing Services
            </h3>
            <div className="grid grid-cols-2 gap-3 text-left">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#FF4C00] mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-300">Exterior Wash & Wax</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#FF4C00] mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-300">Interior Detailing</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#FF4C00] mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-300">Paint Correction</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#FF4C00] mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-300">Ceramic Coating</span>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-10 pt-10 border-t border-gray-700">
            <h3 className="text-xl font-medium text-white mb-4">
              Connect With Us
            </h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://instagram.com/down2detail.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FF4C00] transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.272.644 1.772 1.153.509.5.902 1.104 1.153 1.772.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772c-.5.509-1.104.902-1.772 1.153-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/15YrsnB1EY/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FF4C00] transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Down2Detail. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
