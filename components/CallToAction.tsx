import Button from "./ui/Button";

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-[#57514b] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation consultation and
            estimate. Let's bring your vision to life with precision and
            excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              variant="secondary"
              className="border-white text-white hover:bg-white hover:text-[#d6781c] min-w-[200px]"
            >
              GET A FREE QUOTE
            </Button>
            <Button
              href="tel:+16138211111"
              variant="secondary"
              className="border-white text-white hover:bg-white hover:text-[#d6781c] min-w-[200px]"
            >
              CALL NOW
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-white font-bold mb-2">Free Consultation</h3>
              <p className="text-white/80">
                We'll discuss your needs and provide expert recommendations.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-white font-bold mb-2">Detailed Estimate</h3>
              <p className="text-white/80">
                Get a comprehensive, transparent quote with no hidden costs.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-white font-bold mb-2">Quality Guaranteed</h3>
              <p className="text-white/80">
                Our work is backed by warranties and our satisfaction guarantee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
