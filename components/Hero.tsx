import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-[85vh] w-full flex items-center justify-center text-center px-4">
      <Image
        src="/images/Auto-Detailing.png"
        alt="Hero Image"
        fill
        className="object-cover z-0"
        priority
      />

      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      <div className="relative z-20 max-w-3xl text-white">
        <h2 className="uppercase tracking-wider text-sm md:text-base text-primary mb-3">
          Your Car Deserves the Royal Treatment
        </h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          DOWN2DETAIL – WHERE YOUR CAR MEETS PERFECTION
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto">
          <span className="font-bold">Down2Detail</span> offers top-tier car detailing services
          right at your doorstep. From deep interior cleaning to paint protection,
          we treat your vehicle with the care and precision it deserves – so you
          can drive with confidence and style.
        </p>
      </div>
    </section>
  );
};

export default Hero;
