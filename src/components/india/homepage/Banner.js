'use client';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="relative min-h-[600px] md:min-h-[calc(100vh-5rem)] mt-16 md:mt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="relative w-full h-full bg-no-repeat bg-cover"
          style={{
            backgroundImage: 'url("/assets/images/india/home/banner.png")',
            backgroundPosition: 'center',
          }}
        >
          {/* Enhanced overlay layers for better content visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-accent/20"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,black/50_100%)]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 h-full px-4 mx-auto md:px-6 lg:px-8">
        <div className="flex items-center h-full py-12 md:py-16 lg:py-20">
          <div className="relative max-w-xl md:max-w-2xl text-white">
            {/* Enhanced Content Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-white/10"></div>

            {/* Responsive Content */}
            <div className="relative p-6 md:p-8 lg:p-10">
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <div className="w-8 md:w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                <span className="text-xs md:text-sm font-medium text-gray-300">
                  Trusted Visa Services
                </span>
              </div>

              <h1 className="mb-4 md:mb-6 text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Professional <span className="text-primary">Indian Visa</span>{' '}
                Application Support
              </h1>

              <p className="mb-6 md:mb-8 text-sm md:text-base lg:text-lg text-gray-300">
                Expert assistance and guidance throughout your visa application
                journey
              </p>

              {/* Responsive CTA */}
              <div className="mb-8 md:mb-12">
                <Link href="/visa/step-one" className="inline-block group">
                  <span className="relative inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 font-semibold text-white transition-all duration-300 transform hover:-translate-y-0.5">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary via-primary to-accent rounded-xl"></span>
                    <span className="absolute inset-0 w-full h-full transition-opacity duration-500 opacity-0 bg-gradient-to-br from-accent via-accent to-primary rounded-xl group-hover:opacity-100"></span>
                    <span className="relative flex items-center text-base md:text-lg">
                      Apply Now
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 md:w-6 md:h-6 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </span>
                </Link>
              </div>

              {/* Responsive Trust Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-white/5 ring-1 ring-white/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Verified Service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-white/5 ring-1 ring-white/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Expert Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-white/5 ring-1 ring-white/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Swift Process</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute top-40 right-10 md:right-20 w-48 md:w-72 h-48 md:h-72 bg-primary/5 rounded-full blur-2xl md:blur-3xl"></div>
      <div className="absolute bottom-20 md:bottom-40 left-10 md:left-20 w-48 md:w-72 h-48 md:h-72 bg-accent/5 rounded-full blur-2xl md:blur-3xl"></div>
    </div>
  );
};

export default Banner;
