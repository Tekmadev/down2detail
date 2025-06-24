"use client";

import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import Map from "./components/Map";
import type { Metadata } from "next";
import { useI18n } from "@/hooks/useI18n";

export const metadata: Metadata = {
  title: "Contact Us | Down2Detail Montreal Auto Detailing",
  description:
    "Contact Down2Detail for professional auto detailing services in Montreal. Call +1-438-483-8175 or book online. Serving Montreal, Laval, Longueuil, and Greater Montreal Area. Get your free quote today!",
  openGraph: {
    title: "Contact Down2Detail | Auto Detailing Montreal",
    description:
      "Get in touch with Montreal's premier auto detailing service. Professional paint correction, ceramic coating, and mobile detailing. Call +1-438-483-8175 for your free quote.",
    url: "https://down2detail.ca/contact",
    siteName: "Down2Detail",
    images: [
      {
        url: "/images/ceramic.png",
        width: 1200,
        height: 630,
        alt: "Contact Down2Detail Auto Detailing Montreal",
      },
    ],
    type: "website",
  },
  keywords: [
    "contact auto detailing Montreal",
    "car detailing phone number Montreal",
    "book auto detailing Montreal",
    "mobile detailing quote Montreal",
    "Down2Detail contact information",
  ],
};

export default function ContactPage() {
  const { t } = useI18n();
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            {t("page.title", { ns: "contact" })}
          </h1>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            {t("page.description", { ns: "contact" })}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-gray-900 rounded-xl shadow-md p-6 md:p-8">
            <ContactForm />
          </div>

          {/* Contact Info and Map */}
          <div className="space-y-8">
            <ContactInfo />
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}
