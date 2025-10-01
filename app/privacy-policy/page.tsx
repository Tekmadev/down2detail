import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Down2Detail - Learn how we collect, use, and protect your personal information.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Privacy Policy
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
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Down2Detail ("we," "our," or "us") is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website down2detail.ca, use our services, or interact with us.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our website or services, you consent to the collection
                and use of information in accordance with this Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Information We Collect
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                2.1 Personal Information
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect personal information that you provide directly to
                us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>
                  Name and contact information (email address, phone number)
                </li>
                <li>
                  Service inquiries and messages through our contact forms
                </li>
                <li>Appointment booking information through Calendly</li>
                <li>Communication preferences</li>
                <li>Vehicle information relevant to our services</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                2.2 Automatically Collected Information
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you visit our website, we automatically collect certain
                information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>IP address and approximate location</li>
                <li>Browser type and version</li>
                <li>Device information (type, operating system)</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website information</li>
                <li>Click patterns and scrolling behavior</li>
                <li>Date and time of visits</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                2.3 Cookies and Tracking Technologies
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies, web beacons, and similar tracking technologies
                to collect information about your browsing activities. This
                includes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Essential cookies for website functionality</li>
                <li>Analytics cookies to understand website usage</li>
                <li>Marketing cookies for advertising purposes</li>
                <li>Third-party tracking pixels</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Providing and improving our auto detailing services</li>
                <li>Responding to your inquiries and communications</li>
                <li>Scheduling and managing appointments</li>
                <li>Sending service-related communications</li>
                <li>Marketing our services (with your consent)</li>
                <li>Analyzing website usage and improving user experience</li>
                <li>Compliance with legal obligations</li>
                <li>Preventing fraud and ensuring security</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Third-Party Services
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use third-party services that may collect information about
                you:
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                4.1 Google Services
              </h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>
                  <strong>Google Analytics:</strong> Tracks website usage and
                  user behavior
                </li>
                <li>
                  <strong>Google Tag Manager:</strong> Manages tracking codes
                  and marketing tags
                </li>
                <li>
                  <strong>Google Ads:</strong> Delivers targeted advertising
                </li>
                <li>
                  <strong>Firebase:</strong> Provides analytics and hosting
                  services
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                4.2 Other Third-Party Services
              </h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>
                  <strong>EmailJS:</strong> Processes contact form submissions
                </li>
                <li>
                  <strong>Calendly:</strong> Manages appointment scheduling
                </li>
                <li>
                  <strong>Social Media Platforms:</strong> For social media
                  integration and tracking
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                These third-party services have their own privacy policies. We
                encourage you to review their privacy practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Google Advertising
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use Google Ads to deliver targeted advertising. This
                includes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Remarketing to previous website visitors</li>
                <li>Interest-based advertising</li>
                <li>Conversion tracking</li>
                <li>Demographic and interest reporting</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can opt out of personalized advertising by visiting{" "}
                <a
                  href="https://www.google.com/settings/ads"
                  className="text-orange-600 hover:text-orange-700 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Ads Settings
                </a>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Information Sharing and Disclosure
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information. We may
                share information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and property</li>
                <li>
                  With trusted service providers who assist in our operations
                </li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no
                method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Data Retention
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain your personal information only as long as necessary to
                fulfill the purposes outlined in this Privacy Policy, comply
                with legal obligations, resolve disputes, and enforce our
                agreements. Typically:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Contact form submissions: 3 years</li>
                <li>Appointment booking data: 2 years</li>
                <li>Analytics data: 26 months (Google Analytics default)</li>
                <li>
                  Marketing data: Until you unsubscribe or request deletion
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Your Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have the following rights
                regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal information</li>
                <li>Objection to processing</li>
                <li>Data portability</li>
                <li>Withdrawal of consent</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                To exercise these rights, please contact us using the
                information provided below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Children's Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not directed to individuals under the age of
                18. We do not knowingly collect personal information from
                children under 18. If we become aware that we have collected
                personal information from a child under 18, we will take steps
                to delete such information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. International Data Transfers
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Your information may be transferred to and processed in
                countries other than Canada, including the United States, where
                our service providers are located. These countries may have
                different data protection laws than Canada.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                12. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date. Changes are
                effective immediately upon posting.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                13. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our
                privacy practices, please contact us:
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
                  Address: 2063 Rue Lapierre, Montréal, QC, Canada
                </p>
              </div>
            </section>

            <section className="border-t pt-8">
              <p className="text-sm text-gray-500">
                This Privacy Policy complies with Canadian privacy laws
                including the Personal Information Protection and Electronic
                Documents Act (PIPEDA) and is designed to meet the requirements
                for Google Ads advertising policies.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
