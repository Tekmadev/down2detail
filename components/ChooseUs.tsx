const reasons = [
    {
      id: "premium-products",
      title: "Premium Products Only",
      description:
        "We use top-of-the-line detailing products and tools to deliver exceptional results that enhance and protect your vehicle's appearance.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      id: "fast-reliable",
      title: "Fast, Reliable Service",
      description:
        "We value your time. Our team delivers consistent, efficient service with quick turnaround times — without compromising quality.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: "satisfaction",
      title: "Satisfaction Guaranteed",
      description:
        "Your satisfaction is our priority. We go the extra mile to make sure every detail meets your expectations, or we'll make it right.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      id: "long-lasting-protection",
      title: "Protection That Lasts",
      description:
        "Our detailing treatments — from ceramic coatings to leather care — are designed to protect your car long after your appointment ends.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
          />
        </svg>
      ),
    },
  ];
  

const ChooseUs = () =>{
    return(
        <section className="py-20 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary rounded-full opacity-10"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#d6781c] rounded-full opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary uppercase tracking-wider text-sm md:text-base font-medium mb-3">
            WHY CHOOSE US
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-100">
            Excellence in Every Detail
          </h3>
          <div className="w-20 h-1 bg-[#d6781c] mx-auto mt-6"></div>
          <p className="max-w-2xl mx-auto mt-6 text-gray-300">
          At Down2Detail, we're committed to delivering top-tier car detailing services that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="bg-gray-800 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 border-b-4 border-[#d6781c] h-full flex flex-col items-center text-center text-gray-300"
            >
              <div className="text-[#d6781c] mb-4">{reason.icon}</div>
              <h4 className="text-xl font-bold text-gray-100 mb-3">
                {reason.title}
              </h4>
              <p className="text-gray-300">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default ChooseUs;