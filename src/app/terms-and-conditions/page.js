export const metadata = {
  title: 'Terms and Conditions - Indian Visa Application UK',
  description:
    'Terms and conditions governing the use of our visa application services',
  alternates: {
    canonical: '/terms-and-conditions',
  },
};

const page = () => {
  return (
    <div className="container px-4 pb-12 bg-white lg:pt-24 lg:py-10 lg:px-0 md:pt-28 md:pb-0 pt-28">
      <div className="mx-auto">
        <h1 className="mb-6 text-4xl font-bold text-gray-900 lg:py-6">
          Terms and Conditions
        </h1>
        <p className="my-4 text-lg leading-relaxed text-gray-700">
          Welcome to Indian Visa Application UK. These terms and conditions
          establish the guidelines for using our visa application services.
          Please read them carefully as they form a legally binding agreement
          between you and our service.
        </p>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Service Overview
        </h2>
        <div className="mt-4 space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Our comprehensive services include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Expert visa application assistance</li>
            <li>Document verification services</li>
            <li>Real-time application tracking</li>
            <li>Dedicated support services</li>
            <li>Secure payment processing</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          User Commitments
        </h2>
        <div className="mt-4 space-y-4">
          <p className="text-gray-700 leading-relaxed">
            By using our services, you commit to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Providing truthful and accurate information</li>
            <li>Submitting genuine documentation</li>
            <li>Making timely payments</li>
            <li>Adhering to visa regulations</li>
            <li>Maintaining confidentiality</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">Payment Terms</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Service fees must be paid in full before application processing
          begins. Refunds are subject to our refund policy and specific
          conditions. We employ secure payment systems to protect your financial
          data.
        </p>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Service Limitations
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          While we provide expert assistance, visa approval decisions rest with
          Indian authorities. We are not liable for:
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
          <li>Application denials</li>
          <li>Processing delays</li>
          <li>Policy changes</li>
          <li>Indirect losses</li>
        </ul>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Website Content
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          All website content is protected by intellectual property rights.
          Unauthorized reproduction or distribution is prohibited. We maintain
          the right to modify content without prior notice.
        </p>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Data Protection
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Your use of our services is governed by our Privacy Policy. We
          implement strict measures to protect your personal information
          throughout the application process.
        </p>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">Terms Updates</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          We reserve the right to update these terms as needed. Changes take
          effect immediately upon posting. Continued use of our services
          indicates acceptance of modified terms.
        </p>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Contact Information
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          For questions about these terms and conditions, please contact our
          support team at support@indianvisapplication.uk
        </p>
      </div>
    </div>
  );
};

export default page;
