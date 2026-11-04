import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { systems } from '@/data/systems';
import { companyDetails } from '@/data/siteData';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { ArrowLeft, ArrowRight, Phone, Check } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return systems.map((sys) => ({
    slug: sys.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sys = systems.find((s) => s.slug === slug);
  if (!sys) return { title: 'System Not Found — Sunhearth' };

  return {
    title: `${sys.name} — Sunhearth`,
    description: sys.slogan,
    openGraph: {
      title: `${sys.name} — Sunhearth Solar & Storage`,
      description: sys.slogan,
      images: [{ url: sys.image, width: 1200, height: 630, alt: sys.alt }],
    },
  };
}

export default async function SystemDetailPage({ params }: Props) {
  const { slug } = await params;
  const system = systems.find((s) => s.slug === slug);

  if (!system) {
    notFound();
  }

  const prevSystem = system.prevSlug ? systems.find((s) => s.slug === system.prevSlug) : null;
  const nextSystem = system.nextSlug ? systems.find((s) => s.slug === system.nextSlug) : null;

  return (
    <div className="w-full">
      {/* ========================================================
          1. SYSTEM HERO
         ======================================================== */}
      <section className="pt-24 md:pt-32 pb-12 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <AnimateOnScroll y={12} duration={0.3}>
          <Link
            href="/#solutions"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#180102]/60 hover:text-[#f16b46] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All systems
          </Link>
        </AnimateOnScroll>

        {/* Tag & Number */}
        <AnimateOnScroll y={20} duration={0.4}>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-9 h-9 rounded-full bg-[#180102] text-[#f8f0e3] flex items-center justify-center font-bold text-sm">
              {system.number}
            </span>
            <span className="text-xs md:text-sm font-medium text-[#180102]/70 bg-[#edeae4] px-3.5 py-1 rounded-full">
              {system.tagline}
            </span>
            {system.isPopular && (
              <span className="bg-[#f16b46] text-[#180102] text-xs font-semibold px-3 py-1 rounded-full shadow-xs">
                {system.popularBadge}
              </span>
            )}
          </div>
        </AnimateOnScroll>

        {/* Headline */}
        <AnimateOnScroll y={32} duration={0.5}>
          <h1 className="text-4xl md:text-6xl lg:text-[76px] font-medium tracking-[-3.42px] leading-[76px] text-[#180102] max-w-4xl">
            {system.name}
          </h1>

          <p className="mt-4 text-xl md:text-2xl lg:text-[24px] text-[#180102]/80 max-w-3xl font-medium tracking-[-0.6px] leading-[28.8px]">
            {system.slogan}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/#quote"
              className="rounded-[32px_8px_32px_32px] inline-flex items-center justify-center bg-[#f16b46] hover:bg-[#e0532e] text-[#180102] font-normal text-xs px-7 py-5 shadow-xs transition-transform duration-200 hover:-translate-y-0.5"
            >
              Get a free design
            </Link>
            <a
              href={companyDetails.phoneHref}
              className="rounded-[8px_32px_32px_8px] inline-flex items-center gap-2 bg-[#f5f3f0] hover:bg-[#edeae4] text-[#180102] font-normal text-xs px-7 py-5 border border-[#180102]/15 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-[#f16b46]" />
              Call {companyDetails.phone}
            </a>
          </div>
        </AnimateOnScroll>

        {/* Big System Image */}
        <AnimateOnScroll y={40} delay={0.15} duration={0.6}>
          <div className="mt-12 relative w-full aspect-[16/9] max-h-[640px] rounded-[32px] md:rounded-[48px] overflow-hidden bg-[#edeae4] border border-[#180102]/15 shadow-md">
            <Image
              src={system.image}
              alt={system.alt}
              fill
              priority
              sizes="(max-width: 1240px) 100vw, 1240px"
              className="object-cover"
            />
          </div>
        </AnimateOnScroll>

        {/* Quick Highlights Bar */}
        <AnimateOnScroll y={24} delay={0.2}>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-[#f5f3f0] border border-[#180102]/15 rounded-[28px] shadow-xs">
            <div>
              <span className="text-xl md:text-2xl font-bold text-[#180102] block tracking-tight">
                {system.system}
              </span>
              <span className="text-xs uppercase tracking-wider text-[#180102]/50 font-semibold mt-1 block">
                System
              </span>
            </div>
            <div>
              <span className="text-xl md:text-2xl font-bold text-[#180102] block tracking-tight">
                {system.backup}
              </span>
              <span className="text-xs uppercase tracking-wider text-[#180102]/50 font-semibold mt-1 block">
                Backup
              </span>
            </div>
            <div>
              <span className="text-xl md:text-2xl font-bold text-[#180102] block tracking-tight">
                {system.installation}
              </span>
              <span className="text-xs uppercase tracking-wider text-[#180102]/50 font-semibold mt-1 block">
                Installation
              </span>
            </div>
            <div>
              <span className="text-xl md:text-2xl font-bold text-[#180102] block tracking-tight">
                {system.priceFrom}
              </span>
              <span className="text-xs uppercase tracking-wider text-[#180102]/50 font-semibold mt-1 block">
                From
              </span>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ========================================================
          2. ABOUT THIS SYSTEM
         ======================================================== */}
      <section className="pt-16 pb-12 bg-[#f5f3f0] border-y border-[#180102]/15">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll y={32}>
            <div className="max-w-3xl mb-8">
              <span className="text-xs uppercase tracking-widest text-[#180102]/50 font-bold">
                About this system
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-[48px] font-medium tracking-tight text-[#180102] mt-2">
                {system.name}
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#180102]/85 leading-relaxed">
                {system.description}
              </p>
            </div>
          </AnimateOnScroll>

          {/* 3 Info Cards */}
          <AnimateOnScroll y={24} delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-[#180102]/10 rounded-[28px] p-6 shadow-xs">
                <span className="text-xs uppercase tracking-wider text-[#180102]/50 font-semibold block mb-2">
                  Financing
                </span>
                <span className="text-xl md:text-2xl font-bold text-[#180102] block">
                  {system.financing}
                </span>
                <span className="text-xs text-[#180102]/60 mt-1 block">
                  $0-down options available
                </span>
              </div>

              <div className="bg-white border border-[#180102]/10 rounded-[28px] p-6 shadow-xs">
                <span className="text-xs uppercase tracking-wider text-[#180102]/50 font-semibold block mb-2">
                  Energy independence
                </span>
                <span className="text-xl md:text-2xl font-bold text-[#180102] block">
                  {system.number} of 5
                </span>
                <span className="text-xs text-[#180102]/60 mt-1 block">
                  Tier {system.number} of 5 independence rating
                </span>
              </div>

              <div className="bg-white border border-[#180102]/10 rounded-[28px] p-6 shadow-xs">
                <span className="text-xs uppercase tracking-wider text-[#180102]/50 font-semibold block mb-2">
                  Ideal for
                </span>
                <span className="text-lg md:text-xl font-medium text-[#180102] block leading-snug">
                  {system.idealFor}
                </span>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ========================================================
          3. SYSTEM AT A GLANCE (SPECS TABLE)
         ======================================================== */}
      <section className="py-16 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll y={32}>
          <div className="max-w-3xl mb-8">
            <span className="text-xs uppercase tracking-widest text-[#180102]/50 font-bold">
              Specs
            </span>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#180102] mt-2">
              System at a glance
            </h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll y={32} delay={0.1}>
          <div className="bg-[#f5f3f0] border border-[#180102]/15 rounded-[32px] p-6 md:p-10 shadow-xs">
            <div className="divide-y divide-[#180102]/10 text-sm">
              <div className="flex items-center justify-between py-4">
                <span className="text-[#180102]/60 font-medium">Level</span>
                <span className="font-semibold text-[#180102] text-right">{system.tagline}</span>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="text-[#180102]/60 font-medium">System</span>
                <span className="font-semibold text-[#180102] text-right">{system.system}</span>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="text-[#180102]/60 font-medium">Backup</span>
                <span className="font-semibold text-[#180102] text-right">{system.backup}</span>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="text-[#180102]/60 font-medium">Installation</span>
                <span className="font-semibold text-[#180102] text-right">{system.installation}</span>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="text-[#180102]/60 font-medium">Ideal for</span>
                <span className="font-semibold text-[#180102] text-right">{system.idealFor}</span>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="text-[#180102]/60 font-medium">Price from</span>
                <span className="font-bold text-[#180102] text-right text-base">{system.priceFrom}</span>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="text-[#180102]/60 font-medium">Financing</span>
                <span className="font-semibold text-[#180102] text-right">{system.financing}</span>
              </div>
            </div>

            {/* 4 Guarantees */}
            <div className="mt-8 pt-8 border-t border-[#180102]/10 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#180102]">
                <div className="w-5 h-5 rounded-full bg-[#f16b46] text-[#180102] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>25-year warranty</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#180102]">
                <div className="w-5 h-5 rounded-full bg-[#f16b46] text-[#180102] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>$0-down financing</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#180102]">
                <div className="w-5 h-5 rounded-full bg-[#f16b46] text-[#180102] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>24/7 app monitoring</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#180102]">
                <div className="w-5 h-5 rounded-full bg-[#f16b46] text-[#180102] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Our own licensed crew</span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ========================================================
          4. PREV / NEXT SYSTEM NAVIGATION
         ======================================================== */}
      <section className="py-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#180102]/15">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevSystem ? (
            <Link
              href={`/systems/${prevSystem.slug}`}
              className="group p-6 bg-[#f5f3f0] hover:bg-[#faf9f7] border border-[#180102]/15 rounded-2xl flex items-center justify-between transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-[#180102]/50 group-hover:text-[#f16b46] transition-transform group-hover:-translate-x-1" />
              <div className="text-right">
                <span className="text-xs text-[#180102]/50 block font-medium">Previous system</span>
                <span className="text-lg font-medium text-[#180102] group-hover:text-[#f16b46] transition-colors">
                  {prevSystem.name}
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextSystem && (
            <Link
              href={`/systems/${nextSystem.slug}`}
              className="group p-6 bg-[#f5f3f0] hover:bg-[#faf9f7] border border-[#180102]/15 rounded-2xl flex items-center justify-between sm:text-right transition-colors"
            >
              <div className="order-2 sm:order-1 sm:ml-auto">
                <span className="text-xs text-[#180102]/50 block font-medium">Next system</span>
                <span className="text-lg font-medium text-[#180102] group-hover:text-[#f16b46] transition-colors">
                  {nextSystem.name}
                </span>
              </div>
              <ArrowRight className="w-5 h-5 text-[#180102]/50 group-hover:text-[#f16b46] transition-transform group-hover:translate-x-1 order-1 sm:order-2" />
            </Link>
          )}
        </div>
      </section>

      {/* ========================================================
          5. FINAL CTA BANNER
         ======================================================== */}
      <section className="py-16 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll y={40}>
          <div className="relative rounded-[40px_16px_40px_40px] md:rounded-[64px_16px_64px_64px] overflow-hidden bg-[#180102] text-white p-8 md:p-16 shadow-xl">
            <div className="absolute inset-0 opacity-40 pointer-events-none">
              <Image
                src="/images/cta-sunset.png"
                alt="Golden sunset"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#180102] via-[#180102]/85 to-[#180102]/30" />
            </div>

            <div className="relative z-10 max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-[#f8f0e3] bg-white/10 px-3.5 py-1.5 rounded-full font-bold">
                Your free design is one step away
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-[60px] font-medium tracking-[-2.4px] leading-[62.4px] mt-4 text-[#f8f0e3]">
                Let’s design this system for your roof.
              </h2>
              <p className="mt-4 text-[14px] font-medium leading-[20.3px] text-[#f8f0e3]/80">
                Free design in 24 hours · No obligation · $0-down financing
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/#quote"
                  className="rounded-[32px_8px_32px_32px] inline-flex items-center justify-center bg-[#f16b46] hover:bg-[#e0532e] text-[#180102] font-normal text-xs px-7 py-5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Get a free design
                </Link>
                <a
                  href={companyDetails.phoneHref}
                  className="rounded-[8px_32px_32px_8px] inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-[#f8f0e3] font-normal text-xs px-7 py-5 border border-white/20 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4 text-[#f16b46]" />
                  Call {companyDetails.phone}
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
