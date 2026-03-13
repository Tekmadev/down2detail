"use client";

import { useState } from "react";

export interface Testimonial {
  name: string;
  city: string;
  rating: number;
  text: string;
  service: string;
  vehicle?: string;
  date?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
  filterCity?: string;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? "text-yellow-400" : "text-gray-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials({
  testimonials,
  title = "What Our Clients Say",
  filterCity,
}: TestimonialsProps) {
  const [showAll, setShowAll] = useState(false);

  const filtered = filterCity
    ? testimonials.filter(
        (t) => t.city.toLowerCase() === filterCity.toLowerCase()
      )
    : testimonials;

  const displayed = showAll ? filtered : filtered.slice(0, 3);

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
      <p className="text-gray-400 mb-8">
        Real reviews from satisfied clients across Montreal, Laval, and
        Longueuil
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayed.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-[#d6781c] transition-colors"
            itemScope
            itemType="https://schema.org/Review"
          >
            <div className="flex items-center justify-between mb-3">
              <StarRating rating={testimonial.rating} />
              <span className="text-xs text-gray-500">{testimonial.date}</span>
            </div>

            <p
              className="text-gray-300 text-sm leading-relaxed mb-4 italic"
              itemProp="reviewBody"
            >
              &ldquo;{testimonial.text}&rdquo;
            </p>

            <div className="border-t border-gray-700 pt-3">
              <p className="text-white font-semibold text-sm" itemProp="author">
                {testimonial.name}
              </p>
              <p className="text-gray-400 text-xs">
                {testimonial.city}
                {testimonial.vehicle && ` • ${testimonial.vehicle}`}
              </p>
              <p className="text-[#d6781c] text-xs mt-1">
                {testimonial.service}
              </p>
            </div>

            <meta
              itemProp="itemReviewed"
              content="Down2Detail Auto Detailing"
            />
            <meta itemProp="reviewRating" content={String(testimonial.rating)} />
          </div>
        ))}
      </div>

      {filtered.length > 3 && !showAll && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 border border-[#d6781c] text-[#d6781c] hover:bg-[#d6781c] hover:text-white font-medium rounded-lg transition-colors"
          >
            View All {filtered.length} Reviews
          </button>
        </div>
      )}

      <div className="mt-8 text-center">
        <a
          href="https://www.google.com/maps/place/Down2Detail"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#d6781c] transition-colors text-sm underline"
        >
          See all reviews on Google
        </a>
      </div>
    </section>
  );
}
