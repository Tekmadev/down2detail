"use client";

import { useI18n } from "@/hooks/useI18n";

export default function Map() {
  const { t } = useI18n("contact");
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5586.5557877244055!2d-73.45575!3d45.56485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc903322fe556c9%3A0xa08d5aebcd1b939b!2s1205%20Rue%20Labadie%2C%20Longueuil%2C%20QC%20J4N%201E2!5e0!3m2!1sen!2sca!4v1766024795515!5m2!1sen!2sca"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map of Montreal"
          aria-label="Google Map showing our location in Montreal"
        ></iframe>
      </div>
      <div className="p-4 bg-gray-800 text-center">
        <a
          href="https://maps.app.goo.gl/Rec93dCEYbVxSYZp6"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center bg-[#d6781c] hover:bg-[#c66812] text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          {t("map.getDirections")}
          <svg
            className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}