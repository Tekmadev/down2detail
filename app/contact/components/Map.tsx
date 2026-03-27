"use client";

import { useI18n } from "@/hooks/useI18n";

export default function Map() {
  const { t } = useI18n("contact");
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="w-full h-[400px]">
        <iframe
          src="https://maps.google.com/maps?q=4500+Bd+Kimber,+Saint-Hubert,+QC+J3Y+8K5&output=embed&z=15"
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
          href="https://maps.app.goo.gl/19TYSqw2voz7fmZp8"
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