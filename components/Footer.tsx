"use client";

import { FormEvent, useState } from "react";
import FooterLink from "./ui/FooterLink";
import { services } from "../data/services";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";
import LogoWithSpinningDs from "./ui/LogoWithSpinningDs";
import { db } from "@/config/firebase";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { cn } from "@/lib/utils";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  const handleNewsletter = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reset messages
    setError("");
    setSuccess("");

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

    setIsLoading(true);

    try {
      // Check if email already exists in the newsletter collection
      const emailsRef = collection(db, "newsletter");
      const q = query(emailsRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setError("This email is already registered");
        setIsLoading(false);
        return;
      }

      // Add new email to the newsletter collection
      await addDoc(collection(db, "newsletter"), {
        email: email,
        createdAt: serverTimestamp(),
      });

      // Show success message
      setSuccess("Thank you for subscribing!");

      // Clear the input
      setEmail("");
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }

    // Clear success message after 5 seconds
    setTimeout(() => {
      setSuccess("");
    }, 5000);
  };

  return (
    <footer className="bg-background-light text-secondary-dark">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-6 lg:col-span-3">
            <div className="mb-6">
              <LogoWithSpinningDs
                logoWidth={80}
                logoHeight={80}
                textSize="text-2xl"
                className="inline-block"
              />
              <p className="text-secondary mb-4">
                Your trusted partner for all auto detailing needs.
              </p>

              {/* Contact Information */}
              <div className="flex space-x-4 mt-6">
                {/* Phone */}
                <a
                  href="tel:+14384838175"
                  className="bg-green-500 rounded-full w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity text-white"
                  title="Call us: +1 438 483 8175"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
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
                </a>

                {/* Email */}
                <a
                  href="mailto:down2detail.ca@gmail.com"
                  className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity text-white"
                  title="Email us: down2detail.ca@gmail.com"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/down2detail.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity text-white"
                  title="Follow us on Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-6 lg:col-span-2">
            <h3 className="text-xl font-semibold mb-6 relative after:absolute after:content-[''] after:w-12 after:h-1 after:bg-[#d6781c] after:bottom-0 after:left-0 pb-3">
              Our Links
            </h3>
            <ul className="space-y-3">
              {navigation.map((link) => (
                <li key={link.href}>
                  <FooterLink
                    href={link.href}
                    className={
                      pathname === link.href ||
                      (link.href === "/services" &&
                        pathname.includes("/services"))
                        ? "text-[#d6781c]"
                        : ""
                    }
                  >
                    {link.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1 md:col-span-12 lg:col-span-4">
            <h3 className="text-2xl font-bold mb-6 relative pb-3">
              Our Services
              <span className="absolute left-0 bottom-0 block w-12 h-1 bg-orange-500"></span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 text-sm">
              {services.map((service) => (
                <FooterLink
                  key={service.href}
                  href={service.href}
                  className={cn(
                    "block px-2 py-2 rounded-lg transition-colors duration-200 text-sm leading-tight",
                    pathname === service.href
                      ? "bg-orange-100 text-orange-600 font-semibold"
                      : "text-white hover:bg-white hover:text-orange-600 hover:bg-opacity-10"
                  )}
                >
                  {service.label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 md:col-span-12 lg:col-span-3">
            <h3 className="text-xl font-semibold mb-6 relative after:absolute after:content-[''] after:w-12 after:h-1 after:bg-[#d6781c] after:bottom-0 after:left-0 pb-3">
              Newsletter
            </h3>
            <p className="text-secondary mb-6">
              Subscribe to our newsletter to get our latest updates and news
              about our services.
            </p>
            <form onSubmit={handleNewsletter} className="space-y-4" noValidate>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className={`w-full px-4 py-3 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d6781c] text-secondary placeholder-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400 ${
                      error
                        ? error.includes("already registered")
                          ? "border-amber-500"
                          : "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                      setSuccess("");
                    }}
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    className="w-full whitespace-nowrap bg-[#d6781c] hover:bg-[#c2410c] text-white font-medium py-3 px-4 rounded-md transition-colors duration-300 disabled:opacity-70"
                    disabled={isLoading}
                  >
                    {isLoading ? "SUBSCRIBING..." : "SUBSCRIBE"}
                  </button>
                </div>
                {error && (
                  <div
                    className={`flex items-center gap-1 text-sm ${
                      error.includes("already registered")
                        ? "text-amber-500"
                        : "text-red-500"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
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
                {success && (
                  <div className="flex items-center gap-1 text-sm text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {success}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 mt-8 border-t border-gray-300 text-center">
          <p className="text-secondary">
            &copy; {new Date().getFullYear()} Down2Detail. All rights reserved.
          </p>
          <p className="text-secondary mt-2">
            Developed by{" "}
            <a
              href="https://www.tekmadev.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF4C00] transition-colors duration-300"
            >
              Tekmadev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
