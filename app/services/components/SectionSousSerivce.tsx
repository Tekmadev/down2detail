"use client";

import NavLink from "@/components/ui/NavLink";
import { getServiceById, services, PaintPolishService } from "@/data/services";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useI18n } from "@/hooks/useI18n";
import { getTranslatedService } from "@/lib/translatedServices";

export default function ServiceSousSection() {
  const { t, language } = useI18n("services");
  const { t: tCommon } = useI18n("common");

  // Get current language from the i18n context
  const currentLanguage = language || 'en';

  // Apply translations to paint polish services
  const translatedServices = PaintPolishService.map(service => 
    getTranslatedService(service, t, "services")
  );

  // Translation content based on current language
  const content = {
    en: {
      badge: "Professional Paint Services",
      title: "Paint Polish Services", 
      subtitle: "Restore, Refine & Refresh Your Paint",
      description: "Not all paint is created equal and not all vehicles need the same level of polishing. We offer three levels of professional polishing tailored to your vehicle's needs, from enhancing gloss to removing heavy defects.",
      bookInspection: "Book Inspection",
      inspectionNote: "Paint inspection recommended before booking",
      chooseLevel: "Choose Your Polish Level",
      allPolishInclude: "All polish services include polymer paint sealant for 6 months of protection",
      learnMore: "Learn More"
    },
    fr: {
      badge: "Services de Peinture Professionnels",
      title: "Services de Polissage de Peinture",
      subtitle: "Restaurez, Raffinez et Rafraîchissez Votre Peinture", 
      description: "Toutes les peintures ne sont pas créées égales et tous les véhicules n'ont pas besoin du même niveau de polissage. Nous offrons trois niveaux de polissage professionnel adaptés aux besoins de votre véhicule, de l'amélioration de la brillance à l'élimination des défauts importants.",
      bookInspection: "Réserver une Inspection",
      inspectionNote: "Inspection de peinture recommandée avant la réservation",
      chooseLevel: "Choisissez Votre Niveau de Polissage",
      allPolishInclude: "Tous les services de polissage incluent un scellant de peinture polymère pour 6 mois de protection",
      learnMore: "En Savoir Plus"
    }
  };

  const currentContent = content[currentLanguage as keyof typeof content] || content.en;

  return (
    <div className="bg-black">
      {/* Hero Section for Paint Polish Services */}
      <div className="relative bg-secondary py-24 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/services-detailing/paint-polish2.webp"
            alt="Paint Polish Services"
            fill
            priority
            className="object-cover object-center scale-110 animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-block bg-[#d6781c]/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#d6781c]/20">
              <span className="text-[#d6781c] font-medium">
                {currentContent.badge}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-lg bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
              {currentContent.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-[#d6781c] font-medium mb-6 drop-shadow-sm">
              {currentContent.subtitle}
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
              {currentContent.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center bg-[#d6781c] hover:bg-[#c66812] text-white font-semibold py-4 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                {currentContent.bookInspection}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>

              <div className="text-sm text-white">
                <span className="text-[#d6781c]">★</span> {currentContent.inspectionNote}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Services Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {currentContent.chooseLevel}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {currentContent.allPolishInclude}
            </p>
          </div>

          {translatedServices.map((service, index) => (
            <div
              key={service.id}
              className="flex flex-col md:flex-row items-center gap-16 shadow-lg rounded-3xl bg-gray-800 p-8 md:p-16 mb-12 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-full md:w-1/2 group">
                <div className="relative overflow-hidden rounded-3xl">
                  <Image
                    src={service.imageShowcase}
                    alt={service.id}
                    width={600}
                    height={400}
                    className="rounded-3xl shadow-md object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <h3 className="text-4xl font-extrabold text-white mb-4 leading-snug">
                  {service.label}
                </h3>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  key={service.href}
                  href={service.href}
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#d6781c] text-white font-semibold rounded-full shadow-lg hover:bg-[#c66812] transition-all duration-300 transform hover:scale-105 no-underline"
                >
                  {currentContent.learnMore}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
