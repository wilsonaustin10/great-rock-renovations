export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-gray-800">
          <p className="text-sm text-gray-600 mb-6">Effective Date: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p>
              Great Rock Renovations (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Personal Data</h3>
            <p>We may collect personal information that you provide to us, including but not limited to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Mailing address</li>
              <li>Service inquiry details</li>
              <li>Project information</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">Usage Data</h3>
            <p>We may automatically collect certain information when you visit our website, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages visited</li>
              <li>Time and date of visit</li>
              <li>Time spent on pages</li>
              <li>Device information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. SMS/Text Messaging Terms</h2>
            <p>
              By providing your phone number and opting in to receive SMS messages, you consent to receive automated marketing and informational text messages from Great Rock Renovations. Message frequency varies. Message and data rates may apply.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>To opt-out, reply STOP to any message</li>
              <li>For help, reply HELP to any message</li>
              <li>Carriers are not liable for delayed or undelivered messages</li>
              <li>We will never sell or share your phone number with third parties for marketing purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide and maintain our services</li>
              <li>Process your service requests and inquiries</li>
              <li>Send you project updates and appointment reminders</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraudulent or illegal activity</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Information Sharing and Disclosure</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>With service providers who assist in our operations (under confidentiality agreements)</li>
              <li>In connection with a business transfer or merger</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. California Privacy Rights</h2>
            <p>
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete your information, and the right to opt-out of the sale of your information (which we do not do).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children under 18.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &ldquo;Effective Date&rdquo; at the top.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at:</p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p className="font-semibold">Great Rock Renovations</p>
              <p>123 Construction Way</p>
              <p>Houston, TX 77001</p>
              <p>Phone: (713) 555-0100</p>
              <p>Email: info@greatrockrenovations.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}