'use client';

import { useState, useSyncExternalStore } from 'react';
import Link from 'next/link';

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
}

function getSnapshot() {
  return localStorage.getItem('sunhearth_cookie_consent');
}

function getServerSnapshot() {
  return 'dismissed'; // Don't flash on server
}

export default function CookieBanner() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [dismissed, setDismissed] = useState(false);

  const handleAccept = () => {
    localStorage.setItem('sunhearth_cookie_consent', 'accepted');
    setDismissed(true);
  };

  const handleDecline = () => {
    localStorage.setItem('sunhearth_cookie_consent', 'essential_only');
    setDismissed(true);
  };

  if (consent || dismissed) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 p-5 bg-[#f5f3f0] border border-[#ded2c0] rounded-2xl shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <p className="text-xs leading-relaxed text-[#180102]/85">
        We use cookies to run this site, understand how it’s used and measure our ads. You can change your choice anytime. Read our{' '}
        <Link href="/privacy" className="text-[#f16b46] underline hover:text-[#e0532e]">
          Privacy Policy
        </Link>.
      </p>

      <div className="mt-3 flex items-center justify-end gap-2.5">
        <button
          type="button"
          onClick={handleDecline}
          className="px-3.5 py-1.5 text-xs font-medium text-[#180102]/70 hover:text-[#180102] rounded-lg hover:bg-[#edeae4] transition-colors"
        >
          Decline
        </button>
        <button
          type="button"
          onClick={handleAccept}
          className="btn-asymmetric px-4 py-1.5 text-xs font-semibold bg-[#f16b46] hover:bg-[#e0532e] text-white shadow-xs"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
