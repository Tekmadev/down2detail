import { getServiceById, services } from '@/data/services';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return services.map((service) => ({
        service_name: service.id,
    }))
}

export const metadata = {
    title: "Service | Down2Detail",
    description: "Explore our professional detailing services."
}


export default function ServiceSousSection({
    params,
}: {
    params: any;
}) {
    const service = getServiceById(params.service_name);

    if (!service) {
        notFound();
    }
  return (
    <section className="bg-gradient-to-br from-white via-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-16 shadow-lg rounded-3xl bg-white p-8 md:p-16">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image
            src={service.imageShowcase}
            alt={service.id}
            width={600}
            height={400}
            className="rounded-3xl shadow-md object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-snug">
            {service.label}
          </h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            {service.description}
          </p>
          <Link
            href="/services"
            className="inline-block px-7 py-3 bg-orange-500 text-white font-semibold rounded-xl shadow hover:bg-orange-600 transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
