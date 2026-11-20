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
  metadataBase: new URL('https://k-tech-bgm.vercel.app'),
  title: 'K-Tech Solar — Own the Power.',
  description:
    'K-Tech Solar designs smart solar systems that erase your electricity bill for years. Solar, wind, water heating and heat pumps from Belgaum, Karnataka.',
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
    'wind solar hybrid',
    'solar water heater',
    'Belgaum solar',
  ],
  authors: [{ name: 'K-Tech Solar' }],
  openGraph: {
    title: 'K-Tech Solar — Own the Power.',
    description:
      '₹0 electricity bills for the next 25 years. Solar, wind, water heating and heat pumps — engineered together.',
    url: 'https://k-tech-bgm.vercel.app/',
    siteName: 'K-Tech Solar',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'K-Tech Solar — Own the Power.',
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
