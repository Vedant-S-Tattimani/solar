import Link from 'next/link';
import Logo from './Logo';
import { systems } from '@/data/systems';
import { companyDetails } from '@/data/siteData';

export default function Footer() {
  return (
    <footer className="w-full bg-[#f5f3f0] border-t border-[#ded2c0] pt-16 pb-12 mt-20">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-14 border-b border-[#ded2c0]/70">
          {/* Brand info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Logo />
            <p className="text-[17px] leading-relaxed text-[#180102]/85 max-w-[360px] font-normal pt-2">
              {companyDetails.slogan}
            </p>
            <p className="text-[14px] text-[#180102]/60 max-w-[340px]">
              {companyDetails.subSlogan}
            </p>
          </div>

          {/* Systems Column */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-[#180102]/50 pb-1">
              Systems
            </h3>
            {systems.map((sys) => (
              <Link
                key={sys.slug}
                href={`/systems/${sys.slug}`}
                className="text-[15px] text-[#180102]/80 hover:text-[#f16b46] transition-colors py-0.5"
              >
                {sys.name}
              </Link>
            ))}
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-[#180102]/50 pb-1">
              Company
            </h3>
            <Link
              href="/#process"
              className="text-[15px] text-[#180102]/80 hover:text-[#f16b46] transition-colors py-0.5"
            >
              How it works
            </Link>
            <Link
              href="/#team"
              className="text-[15px] text-[#180102]/80 hover:text-[#f16b46] transition-colors py-0.5"
            >
              Our team
            </Link>
            <Link
              href="/#reviews"
              className="text-[15px] text-[#180102]/80 hover:text-[#f16b46] transition-colors py-0.5"
            >
              Reviews
            </Link>
            <Link
              href="/#faq"
              className="text-[15px] text-[#180102]/80 hover:text-[#f16b46] transition-colors py-0.5"
            >
              FAQ
            </Link>
            <Link
              href="/#quote"
              className="text-[15px] text-[#180102]/80 hover:text-[#f16b46] transition-colors py-0.5"
            >
              Free design
            </Link>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-[#180102]/50 pb-1">
              Contact
            </h3>
            <a
              href={companyDetails.phoneHref}
              className="text-[15px] text-[#180102]/80 hover:text-[#f16b46] transition-colors py-0.5 font-medium"
            >
              {companyDetails.phone}
            </a>
            <a
              href={companyDetails.emailHref}
              className="text-[15px] text-[#180102]/80 hover:text-[#f16b46] transition-colors py-0.5"
            >
              {companyDetails.email}
            </a>
            <span className="text-[15px] text-[#180102]/60 py-0.5">
              {companyDetails.address}
            </span>
            <span className="text-[13px] text-[#180102]/50 py-0.5">
              {companyDetails.hours}
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#180102]/60">
          <p>{companyDetails.license}</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-[#f16b46] transition-colors underline-offset-4 hover:underline"
            >
              Privacy policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#f16b46] transition-colors underline-offset-4 hover:underline"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

