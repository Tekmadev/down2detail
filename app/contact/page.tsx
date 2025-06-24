"use client";

import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import Map from "./components/Map";
import { useI18n } from "@/hooks/useI18n";

// Note: This is a client component, so metadata is handled in layout.tsx

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
