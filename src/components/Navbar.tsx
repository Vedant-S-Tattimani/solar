'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { Menu, X, Phone } from 'lucide-react';
import { companyDetails } from '@/data/siteData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 180 && currentScrollY > lastScrollY.current + 5) {
        // Scrolling down past threshold -> hide
        setHidden(true);
      } else if (currentScrollY < lastScrollY.current - 5 || currentScrollY < 80) {
        // Scrolling up -> show
        setHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Solutions', href: '/#solutions' },
    { label: 'How it works', href: '/#process' },
    { label: 'Our team', href: '/#team' },
    { label: 'Reviews', href: '/#reviews' },
    { label: 'FAQ', href: '/#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full pt-4 pb-2 px-4 md:px-8 max-w-[1240px] mx-auto transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* Desktop Navigation */}
      <nav
        className="hidden lg:flex items-center justify-between gap-1 h-[60px]"
        aria-label="Main Navigation"
      >
        {/* Brand container */}
        <div className="h-[60px] bg-[#f5f3f0] px-7 rounded-[12px_32px_32px_12px] flex items-center shrink-0">
          <Logo />
        </div>

        {/* Links container */}
        <div className="h-[60px] bg-[#f5f3f0] px-7 rounded-[12px_32px_32px_12px] flex items-center gap-[30px]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[16px] font-medium text-[#180102] hover:text-[#f16b46] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/#quote"
          className="h-[60px] px-7 rounded-[32px_8px_32px_32px] bg-[#f16b46] hover:bg-[#e0532e] text-[#180102] text-xs font-normal flex items-center justify-center shrink-0 transition-transform duration-200 hover:-translate-y-0.5"
        >
          Get a free quote
        </Link>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className="flex lg:hidden items-center justify-between gap-2 h-[56px]"
        aria-label="Mobile Navigation"
      >
        {/* Mobile Brand */}
        <div className="h-[56px] bg-[#f5f3f0] px-4 rounded-[12px_28px_28px_12px] flex items-center shrink-0">
          <Logo />
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/#quote"
            className="h-[48px] px-4 rounded-[24px_8px_24px_24px] bg-[#f16b46] text-[#180102] text-xs font-medium flex items-center justify-center"
          >
            Get a free quote
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-[48px] h-[48px] rounded-full bg-[#f5f3f0] text-[#180102] hover:bg-[#edeae4] flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f16b46]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 p-6 bg-[#f5f3f0] border border-[#180102]/15 rounded-[28px] shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-[#180102] hover:text-[#f16b46] py-1.5 border-b border-[#180102]/10 transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <a
                href={companyDetails.phoneHref}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-[#180102]/20 text-[#180102] font-semibold text-sm hover:bg-[#edeae4] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#f16b46]" />
                {companyDetails.phone}
              </a>

              <Link
                href="/#quote"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-[32px_8px_32px_32px] flex items-center justify-center py-3.5 px-6 bg-[#f16b46] text-[#180102] font-semibold text-center text-sm shadow-md"
              >
                Get a free quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
