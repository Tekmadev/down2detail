import NavLink from "@/components/ui/NavLink";
import { getServiceById, services, PaintPolishService } from "@/data/services";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return services.map((service) => ({
    service_name: service.id,
  }));
}

export const metadata = {
  title: "Service | Down2Detail",
  description: "Explore our professional detailing services.",
};

export default function ServiceSousSection() {
  return (
    <div className="bg-black">
      {/* Hero Section for Paint Polish Services */}
      <div className="relative bg-secondary py-24 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/paint-correction-showcase.jpg" // You can change this to an appropriate image
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
                Professional Paint Services
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-lg bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
              Paint Polish Services
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-[#d6781c] font-medium mb-6 drop-shadow-sm">
              Restore, Refine & Refresh Your Paint
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
              Not all paint is created equal and not all vehicles need the
              same level of polishing. We offer three levels of professional
              polishing tailored to your vehicle's needs, from enhancing gloss
              to removing heavy defects.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center bg-[#d6781c] hover:bg-[#c66812] text-white font-semibold py-4 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Book Inspection
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

              <div className="text-sm text-gray-400">
                <span className="text-[#d6781c]">📋</span> Paint inspection
                recommended before booking
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
              Choose Your Polish Level
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              All polish services include polymer paint sealant for 6 months of
              protection
            </p>
          </div>

          {PaintPolishService.map((service, index) => (
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
                <NavLink
                  key={service.href}
                  href={service.href}
                  className="inline-block px-8 py-4 bg-[#d6781c] text-white font-semibold rounded-full shadow-lg hover:bg-[#c66812] transition-all duration-300"
                >
                  Learn More
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
