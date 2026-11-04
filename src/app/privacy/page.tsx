import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import { companyDetails } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Privacy Policy — Sunhearth',
  description: 'Privacy Policy for Sunhearth Energy, Inc.',
};

export default function PrivacyPage() {
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
        Privacy Policy
      </h1>
      <p className="text-sm text-[#180102]/60 mt-2 mb-10">
        Last updated: October 20, 2026
      </p>

      <div className="prose prose-neutral max-w-none text-[16px] leading-relaxed text-[#180102]/80 space-y-8">
        <p className="p-4 bg-[#f5f3f0] border border-[#ded2c0] rounded-xl text-xs text-[#180102]/70 italic">
          Template text. Replace the [bracketed] details with your company’s information and have this page reviewed by a lawyer before launch.
        </p>

        <p>
          This Privacy Policy explains how [{companyDetails.name}] (“Sunhearth”, “we”, “us”) collects, uses and shares personal information when you visit our website, request a free design or quote, or become a customer.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#180102]">1. Information we collect</h2>
          <p>We collect information you give us, information collected automatically when you use our website, and information from partners you authorize.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Contact details</strong> — name, email, phone number, street address and ZIP code.</li>
            <li><strong>Home and energy details</strong> — your average electric bill, priorities, the system you are interested in and anything you share about your roof or usage.</li>
            <li><strong>Communications</strong> — emails, texts and calls with our team. Calls may be recorded for quality, and we will tell you when they are.</li>
            <li><strong>Device and usage data</strong> — IP address, browser type, pages visited and cookie identifiers.</li>
            <li><strong>Information from others</strong> — utility usage data you authorize us to request, financing partners you choose, and public property records.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#180102]">2. How we use your information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Prepare your system design, savings estimate and proposal.</li>
            <li>Contact you about your request by phone, email or text message.</li>
            <li>Schedule site visits, permits, installation and service.</li>
            <li>Process financing, incentive and utility interconnection applications at your request.</li>
            <li>Improve our website, products and marketing.</li>
            <li>Comply with legal obligations and protect our rights.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#180102]">3. Calls and text messages</h2>
          <p>
            If you check the consent box on our forms, you agree that we may contact you at the number you provide — including by automated technology and text messages — about your quote and project. Consent is not a condition of purchase. Message and data rates may apply. Reply STOP to opt out of texts at any time.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#180102]">4. How we share information</h2>
          <p>We do not sell your personal information for money. We share it only as needed to provide our services:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Service providers that host our website, store customer records or help us communicate with you.</li>
            <li>Equipment manufacturers, for warranty registration and monitoring.</li>
            <li>Utilities, permitting authorities and incentive program administrators.</li>
            <li>Financing partners, only when you ask us to.</li>
            <li>Authorities, when required by law, and a buyer in the event of a merger or acquisition.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#180102]">5. Cookies and analytics</h2>
          <p>
            We use essential cookies to run the website and, with your permission, analytics and marketing cookies to understand how the site is used and to measure our advertising. You can change your choices at any time in the cookie banner or your browser settings. We honor the Global Privacy Control (GPC) signal as a request to opt out of sale or sharing.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#180102]">6. Your California privacy rights</h2>
          <p>If you live in California, the CCPA/CPRA gives you the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Know what personal information we collect, use and share, and get a copy of it.</li>
            <li>Correct inaccurate personal information.</li>
            <li>Delete your personal information, subject to legal exceptions.</li>
            <li>Opt out of the sale or sharing of your personal information for cross-context behavioral advertising.</li>
            <li>Not be discriminated against for exercising these rights.</li>
          </ul>
          <p>
            To make a request, email [{companyDetails.privacyEmail}] or call [{companyDetails.phone}]. We will verify your identity and respond within 45 days. You may also use an authorized agent.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#180102]">7. How long we keep information</h2>
          <p>
            We keep your information for as long as we need it to prepare your quote, complete your project and support your warranty — which can be up to 25 years for installed systems — and as required by law. Quote requests that do not lead to a project are deleted after [24 months].
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#180102]">8. Security</h2>
          <p>
            We use reasonable administrative, technical and physical safeguards to protect your information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#180102]">9. Children</h2>
          <p>Our website is not intended for children under 16, and we do not knowingly collect their personal information.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#180102]">10. Changes to this policy</h2>
          <p>
            We may update this policy from time to time. We will change the “Last updated” date above and, for significant changes, let you know by email or a notice on our website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#180102]">11. Contact us</h2>
          <p>
            [{companyDetails.name}] · [{companyDetails.addressFull}] · [{companyDetails.privacyEmail}] · [{companyDetails.phone}]
          </p>
        </section>
      </div>
    </div>
  );
}

