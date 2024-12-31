export const metadata = {
  title: 'Privacy Policy - Indian Visa Application UK',
  description:
    'Our commitment to protecting your privacy and personal information',
  alternates: {
    canonical: '/privacy-policy',
  },
};

const page = () => {
  return (
    <div className="container px-4 pb-12 bg-white lg:pt-24 lg:py-10 lg:px-0 md:pt-28 md:pb-0 pt-28">
      <div className="mx-auto">
        <h1 className="mb-6 text-4xl font-bold text-gray-900 lg:py-6">
          Privacy Policy
        </h1>
        <p className="my-4 text-lg leading-relaxed text-gray-700">
          At Indian Visa Application UK, we prioritize the protection of your
          personal information and are committed to maintaining the trust you
          place in us. This privacy policy explains our practices regarding data
          collection, usage, and protection.
        </p>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Information We Collect
        </h2>
        <div className="mt-4 space-y-4">
          <h3 className="text-xl font-medium text-gray-800">
            Essential Information
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We collect the following types of information to process your visa
            application:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Full name and contact details</li>
            <li>Passport information</li>
            <li>Travel itinerary</li>
            <li>Billing information</li>
            <li>Communication history</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          How We Use Your Information
        </h2>
        <div className="mt-4 space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Your information is used for:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Processing visa applications</li>
            <li>Providing customer assistance</li>
            <li>Sending application updates</li>
            <li>Service improvement</li>
            <li>Legal compliance</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Data Protection
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          We implement robust security measures to protect your data:
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
          <li>SSL encryption for data transmission</li>
          <li>Secure server infrastructure</li>
          <li>Regular security audits</li>
          <li>Staff data protection training</li>
          <li>Restricted data access</li>
        </ul>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Information Sharing
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          We share your information with:
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
          <li>Indian visa authorities</li>
          <li>Trusted service partners</li>
          <li>Payment service providers</li>
          <li>Legal authorities when required</li>
        </ul>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Your Data Rights
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Under data protection laws, you have the right to:
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
          <li>Request access to your data</li>
          <li>Update your information</li>
          <li>Opt out of marketing</li>
          <li>Request data deletion</li>
          <li>Obtain data portability</li>
        </ul>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">Cookie Policy</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          We use cookies to enhance your browsing experience and analyze website
          performance. You can manage cookie preferences through your browser
          settings.
        </p>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">Policy Updates</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          This privacy policy is regularly reviewed and updated to reflect
          changes in our practices and legal requirements. The latest version is
          always available on our website.
        </p>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          For privacy-related inquiries or to exercise your rights, please
          contact our data protection team at privacy@indianvisapplication.uk
        </p>
      </div>
    </div>
  );
};

export default page;
