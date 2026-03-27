"use client";

import Link from "next/link";

interface NAPBlockProps {
  city: string;
  neighborhoods?: string[];
  showMap?: boolean;
}

export default function NAPBlock({
  city,
  neighborhoods,
  showMap = true,
}: NAPBlockProps) {
  return (
    <section
      className="bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-700"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <h3 className="text-xl font-bold text-white mb-4">
        Visit Down2Detail
        {city && <span className="text-[#d6781c]"> — Serving {city}</span>}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">
              Address
            </p>
            <p className="text-white" itemProp="address">
              <span itemProp="streetAddress">4500 Bd Kimber</span>
              <br />
              <span itemProp="addressLocality">Saint-Hubert</span>,{" "}
              <span itemProp="addressRegion">QC</span>{" "}
              <span itemProp="postalCode">J3Y 8K5</span>
            </p>
          </div>

          <div>
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">
              Phone
            </p>
            <a
              href="tel:+14384838175"
              className="text-[#d6781c] hover:text-orange-400 transition-colors font-semibold text-lg"
              itemProp="telephone"
            >
              +1 (438) 483-8175
            </a>
          </div>

          <div>
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">
              Email
            </p>
            <a
              href="mailto:down2detail.ca@gmail.com"
              className="text-white hover:text-[#d6781c] transition-colors"
              itemProp="email"
            >
              down2detail.ca@gmail.com
            </a>
          </div>

          <div>
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">
              Hours
            </p>
            <p className="text-white" itemProp="openingHours" content="Mo-Su 08:00-18:00">
              Monday – Sunday: 8:00 AM – 6:00 PM
            </p>
          </div>

          {neighborhoods && neighborhoods.length > 0 && (
            <div>
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                Neighborhoods We Serve
              </p>
              <p className="text-white text-sm">
                {neighborhoods.join(" • ")}
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#d6781c] hover:bg-[#c2410c] text-white font-bold rounded-lg transition-colors text-center"
          >
            Get a Free Quote
          </Link>
          <a
            href="tel:+14384838175"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#d6781c] text-[#d6781c] hover:bg-[#d6781c] hover:text-white font-bold rounded-lg transition-colors text-center"
          >
            Call Now — (438) 483-8175
          </a>
          {showMap && (
            <a
              href="https://maps.google.com/maps?q=4500+Bd+Kimber+Saint-Hubert+QC+J3Y+8K5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-gray-300 hover:border-[#d6781c] hover:text-white font-medium rounded-lg transition-colors text-center text-sm"
            >
              Get Directions on Google Maps
            </a>
          )}
        </div>
      </div>

      <meta itemProp="name" content="Down2Detail" />
      <meta
        itemProp="image"
        content="https://down2detail.ca/images/d2dlogo.png"
      />
      <meta itemProp="url" content="https://down2detail.ca" />
    </section>
  );
}
