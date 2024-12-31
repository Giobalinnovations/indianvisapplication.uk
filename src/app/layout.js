import Footer from '@/components/india/common/Footer';
import Header from '@/components/india/common/Header';
import ReactQueryProvider from '@/components/ReactQueryProvider';
import { FormProvider } from '@/context/formContext';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { Plus_Jakarta_Sans, Poppins } from 'next/font/google';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Home',
  description: 'Visa Application',
  metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN_URL),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} flex flex-col min-h-screen antialiased bg-background`}
      >
        <FormProvider>
          <ReactQueryProvider>
            <div className="sticky top-0 z-50 bg-white shadow-md">
              <div className="border-t-2 border-primary"></div>
              <Header />
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent"></div>
                <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-gradient-radial from-accent/10 to-transparent"></div>
              </div>
              <main className="relative container mx-auto px-4 py-6">
                <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-lg p-4">
                  {children}
                </div>
              </main>
            </div>
            <Footer />
            <ToastContainer
              position="top-center"
              autoClose={4500}
              hideProgressBar={false}
              closeOnClick
              pauseOnHover
              theme="light"
              toastClassName="border-l-4 border-primary"
            />
          </ReactQueryProvider>
        </FormProvider>
        <GoogleTagManager gtmId="G-LC9MZM89N4" />
        <GoogleAnalytics gaId="G-LC9MZM89N4" />
      </body>
    </html>
  );
}
