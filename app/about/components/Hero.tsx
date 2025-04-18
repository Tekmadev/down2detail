import Image from "next/image";
export default function Hero() {
    return (
        <div className="relative bg-secondary overflow-hidden">
          <div className="absolute inset-0 opacity-60">
            <Image
              src="/images/car-detailing.jpeg"
              alt="Precision Flooring & Contracting team at work"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
  <div className="max-w-3xl">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">
      Detailing Excellence in{" "}
      <span className="text-[#d6781c]">Every Detail</span>
    </h1>
    <p className="text-xl text-secondary mb-8">
      Down2Detail has been redefining vehicle care in Montreal with
      precision, passion, and an unwavering commitment to quality.
    </p>
  </div>
</div>

        </div>
      );
}
