"use client";

import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useI18n } from "@/hooks/useI18n";
import { metaTracker } from "@/lib/meta-tracking";

type FormStatus = "idle" | "submitting" | "success" | "error";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactForm() {
  const { t } = useI18n();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const form = useRef<HTMLFormElement>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, "");
    if (digits.length <= 3) {
      return `${digits}`;
    } else if (digits.length <= 6) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(
        6,
        10
      )}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const formatted = formatPhoneNumber(input);
    setPhone(formatted);
    setFormData((prev) => ({
      ...prev,
      phone: formatted,
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function handleSendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("submitting");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_Template_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID;

    if (!serviceId || !templateId || !publicKey) {
      setErrorMessage(t("form.configError", { ns: "contact" }));
      console.error("EmailJS Service ID or Public Key is not defined.");
      setFormStatus("error");
      return;
    }

    if (form.current) {
      try {
        // Send email via EmailJS
        const response = await emailjs.sendForm(
          serviceId,
          templateId,
          form.current,
          publicKey
        );
        console.log("SUCCESS!", response.text);

        // Track conversion with Meta API
        const nameParts = formData.name.split(" ");
        const firstName = nameParts[0] || "";
        const lastName = nameParts.slice(1).join(" ") || "";

        await metaTracker.trackContactFormSubmission(
          {
            email: formData.email,
            phone: formData.phone,
            firstName,
            lastName,
            city: "Montreal", // Default city - you can make this dynamic
            state: "Quebec",
            country: "Canada",
          },
          {
            message_length: formData.message.length,
            form_source: "Contact Page",
          }
        );

        // Reset form on success
        setMessageSent(true);
        setFormStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setPhone("");
        (e.target as HTMLFormElement).reset();
      } catch (error) {
        console.error("FAILED...", error);
        setErrorMessage(t("form.sendError", { ns: "contact" }));
        setFormStatus("error");
      }
    }
  }
  useEffect(() => {
    if (messageSent) {
      const timer = setTimeout(() => {
        setMessageSent(false);
      }, 5000);

      // Cleanup timer on component unmount or when result changes
      return () => clearTimeout(timer);
    }
  }, [messageSent]);

  return (
    <div className="bg-gray-800 p-8 rounded-lg">
      <h2 className="text-2xl font-semibold text-white mb-6 relative after:absolute after:content-[''] after:w-12 after:h-1 after:bg-[#d6781c] after:bottom-0 after:left-0 pb-3">
        {t("form.title", { ns: "contact" })}
      </h2>

      <form className="space-y-5" ref={form} onSubmit={handleSendEmail}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white mb-1"
          >
            {t("form.name", { ns: "contact" })}{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d6781c] text-white"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white mb-1"
          >
            {t("form.email", { ns: "contact" })}{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d6781c] text-white"
            required
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-white mb-1"
          >
            {t("form.phone", { ns: "contact" })}{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={handlePhoneChange}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d6781c] text-white"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-white mb-1"
          >
            {t("form.message", { ns: "contact" })}{" "}
            <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d6781c] text-white resize-none"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={formStatus === "submitting"}
          className={`w-full bg-[#d6781c] hover:bg-[#c2410c] text-white font-medium py-3 px-4 rounded-md transition-colors duration-300 ${
            formStatus === "submitting" ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {formStatus === "submitting"
            ? t("form.sending", { ns: "contact" })
            : t("form.send", { ns: "contact" })}
        </button>
        {messageSent && (
          <p className="success-message">
            {t("form.success", { ns: "contact" })}
          </p>
        )}
      </form>
    </div>
  );
}
