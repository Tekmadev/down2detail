"use client";

import { useState, FormEvent } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-secondary mb-6 relative after:absolute after:content-[''] after:w-12 after:h-1 after:bg-[#d6781c] after:bottom-0 after:left-0 pb-3">
        Send Us a Message
      </h2>

      <form className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-secondary mb-1"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d6781c] text-secondary"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-secondary mb-1"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d6781c] text-secondary"
            required
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-secondary mb-1"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d6781c] text-secondary"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-secondary mb-1"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d6781c] text-secondary resize-none"
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
          {formStatus === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
