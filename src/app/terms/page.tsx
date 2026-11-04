import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import { companyDetails } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Terms of Use — Sunhearth',
  description: 'Terms of Use for Sunhearth Energy, Inc.',
};

export default function TermsPage() {
  return (
    <div className="w-full max-w-[840px] mx-auto px-6 py-12 md:py-20">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-[#180102]/60 hover:text-[#f16b46] transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to home
      </Link>

      <span className="text-xs uppercase tracking-widest text-[#180102]/50 font-bold block mb-2">
        Legal
      </span>
      <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-[#180102]">
        Terms of Use
      </h1>
      <p className="text-sm text-[#180102]/60 mt-2 mb-10">
        Last updated: October 20, 2026
      </p>

      <div className="prose prose-neutral max-w-none text-[16px] leading-relaxed text-[#180102]/80 space-y-8">
        <p className="p-4 bg-[#f5f3f0] border border-[#ded2c0] rounded-xl text-xs text-[#180102]/70 italic">
          Template text. Replace the [bracketed] details with your company’s information and have this page reviewed by a lawyer before launch.
        </p>

        <p>
          These Terms of Use govern your use of the website operated by [{companyDetails.name}] (“Sunhearth”, “we”, “us”). By using the website, you agree to these terms. If you do not agree, please do not use the website.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#180102]">1. Our services</h2>
          <p>
            Sunhearth designs and installs solar panels, home batteries and related equipment. [CSLB License #000000.] Services are provided only under a separate written agreement signed by you and Sunhearth.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#180102]">2. Estimates are not offers</h2>
          <p>
            Savings, production, backup time, payback and price figures shown on this website — including example calculations — are typical estimates for illustration. They depend on your roof, location, usage, utility rates, incentives and equipment availability, and are not a guarantee or an offer. Your final system, price and any guarantees are set out in your signed agreement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#180102]">3. Quote requests and communications</h2>
          <p>
            When you request a design or quote, you agree to give accurate information. If you consent on our forms, we may contact you by phone, email or text message as described in our Privacy Policy. You can opt out at any time.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#180102]">4. Using the website</h2>
          <p>You may use the website for personal, non-commercial purposes. You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Copy, scrape or resell website content without permission.</li>
            <li>Interfere with the website’s security or operation.</li>
            <li>Submit false information or someone else’s details.</li>
            <li>Use the website for any unlawful purpose.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#180102]">5. Intellectual property</h2>
          <p>
            The website, including text, images, illustrations, logos and code, belongs to Sunhearth or its licensors and is protected by law. Manufacturer names and logos belong to their respective owners.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#180102]">6. Third-party links and tools</h2>
          <p>
            The website may link to or embed third-party services, such as financing partners, review platforms and maps. We are not responsible for their content or practices.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#180102]">7. Disclaimers</h2>
          <p>
            The website is provided “as is” and “as available”. To the extent permitted by law, we disclaim all warranties about the website, including accuracy, availability and fitness for a particular purpose. Equipment and workmanship warranties are provided only in your installation agreement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#180102]">8. Limitation of liability</h2>
          <p>
            To the extent permitted by law, Sunhearth is not liable for indirect, incidental or consequential damages arising from your use of the website. Our total liability for any claim related to the website is limited to [$100].
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#180102]">9. Governing law</h2>
          <p>
            These terms are governed by the laws of the State of California. Any dispute will be handled in the state or federal courts located in [Los Angeles County], California.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#180102]">10. Changes to these terms</h2>
          <p>
            We may update these terms from time to time. The “Last updated” date shows when they last changed. Continuing to use the website means you accept the updated terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#180102]">11. Contact us</h2>
          <p>
            [{companyDetails.name}] · [{companyDetails.addressFull}] · [{companyDetails.email}] · [{companyDetails.phone}]
          </p>
        </section>
      </div>
    </div>
  );
}

