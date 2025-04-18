import Image from "next/image";

export default function StorySection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#d6781c]/20 rounded-full"></div>
              <Image
                src="/images/Auto-Detailing.png"
                alt="Down2Detail working on luxury vehicles"
                width={600}
                height={450}
                className="rounded-lg shadow-lg relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-[#d6781c]/10 rounded-full"></div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-4 inline-block">
              <span className="text-sm font-medium text-[#d6781c] uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2">
                Passion-Driven Detailing Excellence
              </h2>
              <div className="w-20 h-1 bg-[#d6781c] mt-4"></div>
            </div>

            <p className="text-secondary/90 mb-6">
              Down2Detail was founded with a clear mission: to elevate vehicle detailing to a whole new level in Ottawa. What began as a one-man operation in a small garage has grown into a trusted brand, known for precision, passion, and perfection.
            </p>

            <p className="text-secondary/90 mb-6">
              Over the years, our team has had the privilege of working with high-profile clients and prestigious vehicles — including detailing for luxury brands like <strong>Porsche</strong>, <strong>Tesla</strong>, <strong>BMW</strong>, and <strong>Mercedes-Benz</strong>. These collaborations pushed us to refine our techniques and raise our standards continuously.
            </p>

            <p className="text-secondary/90 font-medium">
              Today, Down2Detail stands as a symbol of trust and quality. Whether it’s ceramic coating a supercar or deep-cleaning a daily driver, we treat every vehicle with the same level of care and dedication. Your car deserves nothing less than perfection — and that’s what we deliver.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
