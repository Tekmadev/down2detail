"use client";

import { useI18n } from "@/hooks/useI18n";

export default function Map() {
  const { t } = useI18n("contact");
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.6098790174037!2d-73.61940902372747!3d45.437364971073414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc911187040533f%3A0x52789d369025ad72!2s2063%20Rue%20Lapierre%2C%20Montr%C3%A9al%2C%20QC%20H8N%201B1!5e0!3m2!1sen!2sca!4v1759288048233!5m2!1sen!2sca"
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
          href="https://www.google.com/maps/place/2063+Rue+Lapierre,+Montr%C3%A9al,+QC+H8N+1B1"
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