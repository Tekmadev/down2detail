import NavLink from '@/components/ui/NavLink';
import { getServiceById, services, PaintPolishService } from '@/data/services';
import Image from 'next/image';
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

export default function ServiceSousSection() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
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
              <h2 className="text-4xl font-extrabold text-white mb-4 leading-snug">
                {service.label}
              </h2>
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
  );
}
