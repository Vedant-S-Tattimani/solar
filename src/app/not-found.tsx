import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page not found — K-Tech Solar',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-40 pb-24 w-full">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm font-medium tracking-wide text-[#f16b46] uppercase">404</p>
        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[56px] font-medium tracking-tight leading-[1.05]">
          This page went off-grid.
        </h1>
        <p className="mt-5 text-lg text-[#180102]/80 leading-relaxed">
          The link may be broken or the page has moved. Everything else on the site still has power.
        </p>
        {/* The home page is pre-rendered HTML served by a route handler, not a React page,
            so these are full-page links rather than next/link transitions. */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-[32px_8px_32px_32px] bg-[#f16b46] text-[#180102] font-medium hover:bg-[#e0532e] transition-colors"
          >
            Back to home
          </a>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a
            href="/#solutions"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-[8px_32px_32px_8px] bg-[#f5f3f0] text-[#180102] font-medium hover:bg-[#ded2c0] transition-colors"
          >
            See all systems
          </a>
        </div>
      </div>
    </div>
  );
}
