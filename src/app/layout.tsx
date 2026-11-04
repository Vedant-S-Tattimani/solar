import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-figtree',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sunhearth.energy'),
  title: 'Sunhearth — Solar Panels & Home Battery Installation',
  description:
    'Solar panels and home batteries — designed and installed by engineers who care about craft. 25-year warranty, NABCEP-certified crew, serving Pasadena and Southern California.',
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.png',
    apple: '/icon.png',
  },
  keywords: [
    'solar panels',
    'home battery',
    'backup battery',
    'solar storage',
    'energy independence',
    'Tesla Powerwall',
    'Enphase',
    'Pasadena solar',
  ],
  authors: [{ name: 'Sunhearth Energy, Inc.' }],
  openGraph: {
    title: 'Sunhearth — Solar Panels & Home Battery Installation',
    description:
      'A home that never goes dark. Powered by sunshine. Solar panels and home batteries designed and installed by our own licensed crews.',
    url: 'https://sunhearth.framer.website/',
    siteName: 'Sunhearth',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sunhearth — Solar Panels & Home Battery Installation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${figtree.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#faf9f7] text-[#180102] font-sans antialiased selection:bg-[#f16b46]/20 selection:text-[#180102]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
