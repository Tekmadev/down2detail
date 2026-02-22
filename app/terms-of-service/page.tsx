import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Down2Detail - Learn about our terms and conditions for using our auto detailing services.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong>{" "}
              {new Date().toLocaleDateString("en-CA", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms of Service ("Terms") constitute a legally binding
                agreement between you and Down2Detail ("we," "our," or "us")
                regarding your use of our website down2detail.ca and our auto
                detailing services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By accessing our website or using our services, you agree to be
                bound by these Terms. If you do not agree to these Terms, please
                do not use our website or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Services Description
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Down2Detail provides professional automotive detailing services
                in Montreal, Quebec, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Exterior car washing and detailing</li>
                <li>Interior cleaning and detailing</li>
                <li>Paint correction and polishing</li>
                <li>Ceramic coating application</li>
                <li>Headlight restoration</li>
                <li>Engine bay cleaning</li>
                {/* <li>Mobile detailing services</li> */}
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Service availability and specific offerings may vary by location
                and season.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Booking and Appointments
              </h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                3.1 Booking Process
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Appointments can be scheduled through our website, by phone, or
                through our booking platform. All bookings are subject to
                availability and confirmation.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                3.2 Cancellation Policy
              </h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Cancellations must be made at least 24 hours in advance</li>
                <li>
                  Cancellations made less than 24 hours in advance may be
                  subject to a cancellation fee
                </li>
                <li>No-shows will be charged the full service fee</li>
                <li>
                  We reserve the right to reschedule appointments due to weather
                  conditions or other unforeseen circumstances
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                3.3 Access and Preparation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Vehicles should be free of personal belongings, and customers
                are responsible for removing valuable items before service
                begins.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Payment Terms
              </h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>
                  Payment is due upon completion of services unless otherwise
                  arranged
                </li>
                <li>We accept cash, credit cards, and electronic transfers</li>
                <li>Prices are subject to change without notice</li>
                <li>
                  Additional charges may apply for severely soiled vehicles or
                  extra services
                </li>
                <li>
                  Disputed charges must be reported within 48 hours of service
                  completion
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Vehicle Condition and Liability
              </h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                5.1 Pre-Service Inspection
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We will conduct a pre-service inspection and document any
                existing damage. Customers should report any concerns or
                pre-existing conditions before service begins.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                5.2 Limitation of Liability
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our liability is limited to the cost of the services provided.
                We are not responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Pre-existing damage to the vehicle</li>
                <li>Damage caused by defective or worn vehicle components</li>
                <li>Items left in the vehicle</li>
                <li>Mechanical issues not related to our services</li>
                <li>Normal wear and tear</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                5.3 Insurance
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We maintain appropriate business insurance. Customers are
                advised to check with their insurance providers regarding
                coverage during detailing services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Service Guarantees and Warranties
              </h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                6.1 Service Quality
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We strive to provide high-quality services. If you are not
                satisfied with our work, please contact us within 48 hours so we
                can address your concerns.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                6.2 Product Warranties
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Warranties on ceramic coatings and other protective products are
                subject to manufacturer terms and proper maintenance by the
                customer.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content on our website, including text, images, logos, and
                graphics, is the property of Down2Detail or our licensors and is
                protected by copyright and other intellectual property laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You may not reproduce, distribute, or use our content without
                written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Your privacy is important to us. Please review our{" "}
                <a
                  href="/privacy-policy"
                  className="text-orange-600 hover:text-orange-700 underline"
                >
                  Privacy Policy
                </a>{" "}
                to understand how we collect, use, and protect your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Prohibited Uses
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may not use our website or services:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>For any unlawful purpose or to solicit unlawful acts</li>
                <li>
                  To violate any international, federal, provincial, or local
                  regulations or laws
                </li>
                <li>To transmit or procure harmful or malicious code</li>
                <li>
                  To interfere with or circumvent the security features of our
                  website
                </li>
                <li>To harass, abuse, or harm another person</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Force Majeure
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We are not liable for any failure to perform our obligations due
                to events beyond our reasonable control, including but not
                limited to acts of God, natural disasters, government actions,
                labor disputes, or other unforeseeable circumstances.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. Governing Law
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms are governed by and construed in accordance with the
                laws of Quebec, Canada. Any disputes arising from these Terms
                will be subject to the exclusive jurisdiction of the courts of
                Quebec.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                12. Changes to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes
                will be effective immediately upon posting on our website. Your
                continued use of our services after changes constitutes
                acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                13. Severability
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If any provision of these Terms is found to be unenforceable or
                invalid, the remaining provisions will continue to be valid and
                enforceable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                14. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Down2Detail</strong>
                </p>
                <p className="text-gray-700 mb-2">
                  Email:{" "}
                  <a
                    href="mailto:down2detail@gmail.com"
                    className="text-orange-600 hover:text-orange-700"
                  >
                    down2detail@gmail.com
                  </a>
                </p>
                <p className="text-gray-700 mb-2">
                  Phone:{" "}
                  <a
                    href="tel:+14384838175"
                    className="text-orange-600 hover:text-orange-700"
                  >
                    +1 (438) 483-8175
                  </a>
                </p>
                <p className="text-gray-700">
                  Address: Lapierre, Montréal, QC, Canada
                </p>
              </div>
            </section>

            <section className="border-t pt-8">
              <p className="text-sm text-gray-500">
                These Terms of Service are designed to protect both Down2Detail
                and our customers while ensuring clear understanding of service
                expectations and responsibilities.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
