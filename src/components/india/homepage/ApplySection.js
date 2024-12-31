import Image from 'next/image';
import Link from 'next/link';

const ApplySection = () => {
  const digitalServices = [
    {
      title: 'Smart Tourist Visa',
      description:
        'Digital-first visa processing for modern travelers. Experience our AI-powered application system with real-time status tracking.',
      features: ['Smart Processing', 'Digital Tracking', 'Auto-Verification'],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: 'Digital Business Visa',
      description:
        'Streamlined business visa processing with automated document verification and instant updates for corporate travelers.',
      features: [
        'Automated Processing',
        'Digital Documents',
        'Instant Updates',
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: 'E-Medical Visa',
      description:
        'Advanced digital platform for medical visa applications with secure health data transmission and automated appointment scheduling.',
      features: ['Secure Health Data', 'Smart Scheduling', 'Digital Records'],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      title: 'Smart Conference Visa',
      description:
        'Intelligent visa processing for event attendees with automated registration verification and digital event integration.',
      features: ['Event Integration', 'Smart Verification', 'Digital Access'],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  const digitalProcess = [
    {
      title: 'Smart Application',
      description:
        'AI-powered application system that guides you through each step with intelligent form filling and validation.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: 'Digital Verification',
      description:
        'Advanced document verification system using machine learning for instant validation and processing.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
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
      title: 'Real-time Processing',
      description:
        'Automated processing system with real-time status updates and instant notifications on your application progress.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: 'Digital Delivery',
      description:
        'Secure digital delivery of your visa with blockchain verification and instant download capabilities.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Digital Services Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-1 mb-8">
            <span className="px-4 py-1 text-sm font-medium text-purple-900 bg-gradient-to-r from-purple-100 to-purple-50 rounded-full border border-purple-200">
              Digital Visa Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            Smart Visa Solutions
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Experience the future of visa processing with our AI-powered digital
            platform. Fast, secure, and intelligent visa services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {digitalServices.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg border border-purple-100/50 hover:border-purple-200/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.02] to-indigo-500/[0.02] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 text-purple-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <svg
                        className="w-4 h-4 text-purple-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
                <Link
                  href="/visa/step-one"
                  className="mt-8 inline-flex items-center text-purple-600 text-sm hover:text-purple-700 transition-colors duration-300"
                >
                  Start Application
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Digital Process Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            Digital Process
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Our intelligent system streamlines your visa application with
            cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {digitalProcess.map((step, index) => (
            <div key={index} className="relative group">
              <div className="relative p-8 bg-white rounded-2xl shadow-sm border border-purple-100/50">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 text-purple-600 mb-6">
                  {step.icon}
                </div>
                <div className="absolute top-8 right-8 text-purple-100 font-bold text-2xl">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < digitalProcess.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-purple-200 to-transparent transform -translate-y-1/2 -translate-x-8"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/visa/step-one"
            className="group inline-flex items-center justify-center"
          >
            <span className="relative inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-300 transform hover:-translate-y-1">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg"></span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative flex items-center">
                Begin Digital Application
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApplySection;
