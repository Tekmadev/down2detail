"use client";

import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useI18n } from "@/hooks/useI18n";

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

  function handleSendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_Template_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID;

    if (!serviceId || !templateId || !publicKey) {
      setErrorMessage(t("form.configError", { ns: "contact" }));
      console.error("EmailJS Service ID or Public Key is not defined.");
      return;
    }

    if (form.current) {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        (response) => {
          console.log("SUCCESS!", response.text);
          setMessageSent(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          setPhone("");
          (e.target as HTMLFormElement).reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert(t("form.sendError", { ns: "contact" }));
        }
      );
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
