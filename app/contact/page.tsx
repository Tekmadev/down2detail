import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import Map from "./components/Map";

export const metadata = {
  title: "Contact Us | Down2Detail",
  description:
    "Get in touch with Down2Detail for all your home and commercial improvement needs in Montreal",
};

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Have questions or ready to start your project? We're here to help!
            Reach out to us using any of the methods below.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <ContactForm />
          </div>

          {/* Contact Info and Map */}
          <div className="space-y-8">
            <ContactInfo />
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}
