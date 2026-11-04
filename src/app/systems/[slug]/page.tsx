import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { systems } from '@/data/systems';
import { companyDetails } from '@/data/siteData';
import { ArrowLeft, ArrowRight, Phone, ShieldCheck, Zap, Smartphone, Users } from 'lucide-react';

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
      {/* Top Hero Container */}
      <section className="pt-8 md:pt-14 pb-12 max-w-[1240px] mx-auto px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/#solutions"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#180102]/60 hover:text-[#f16b46] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          All systems
        </Link>

        {/* Tag & Number */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-full bg-[#180102] text-white flex items-center justify-center font-bold text-sm">
            {system.number}
          </span>
          <span className="text-sm font-medium text-[#180102]/70 bg-[#edeae4] px-3.5 py-1 rounded-full">
            {system.tagline}
          </span>
          {system.isPopular && (
            <span className="bg-[#f16b46] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-xs">
              {system.popularBadge}
            </span>
          )}
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#180102] max-w-4xl">
          {system.name}
        </h1>

        <p className="mt-4 text-xl md:text-2xl text-[#180102]/80 max-w-3xl font-normal leading-relaxed">
          {system.slogan}
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/#quote"
            className="btn-asymmetric inline-flex items-center justify-center bg-[#f16b46] hover:bg-[#e0532e] text-white font-semibold text-base px-8 py-4 shadow-sm"
          >
            Get a free design
          </Link>
          <a
            href={companyDetails.phoneHref}
            className="btn-asymmetric inline-flex items-center gap-2 bg-[#f5f3f0] hover:bg-[#edeae4] text-[#180102] font-semibold text-base px-8 py-4 border border-[#ded2c0]"
          >
            <Phone className="w-4 h-4 text-[#f16b46]" />
            Call {companyDetails.phone}
          </a>
        </div>

        {/* Big System Image */}
        <div className="mt-12 relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[32px] overflow-hidden bg-[#edeae4] border border-[#ded2c0] shadow-sm">
          <Image
            src={system.image}
            alt={system.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* 4-Stat Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-[#f5f3f0] border border-[#ded2c0] rounded-2xl p-5">
            <span className="text-xs uppercase tracking-wider text-[#180102]/50 block font-medium">
              System
            </span>
            <span className="text-lg md:text-xl font-medium text-[#180102] mt-1 block">
              {system.system}
            </span>
          </div>

          <div className="bg-[#f5f3f0] border border-[#ded2c0] rounded-2xl p-5">
            <span className="text-xs uppercase tracking-wider text-[#180102]/50 block font-medium">
              Backup
            </span>
            <span className="text-lg md:text-xl font-medium text-[#180102] mt-1 block">
              {system.backup}
            </span>
          </div>

          <div className="bg-[#f5f3f0] border border-[#ded2c0] rounded-2xl p-5">
            <span className="text-xs uppercase tracking-wider text-[#180102]/50 block font-medium">
              Installation
            </span>
            <span className="text-lg md:text-xl font-medium text-[#180102] mt-1 block">
              {system.installation}
            </span>
          </div>

          <div className="bg-[#f5f3f0] border border-[#ded2c0] rounded-2xl p-5">
            <span className="text-xs uppercase tracking-wider text-[#180102]/50 block font-medium">
              From
            </span>
            <span className="text-lg md:text-xl font-semibold text-[#180102] mt-1 block">
              {system.priceFrom}
            </span>
            <span className="text-xs text-[#180102]/60 mt-0.5 block">{system.financing}</span>
          </div>
        </div>
      </section>

      {/* About this system */}
      <section className="py-16 max-w-[1240px] mx-auto px-6 lg:px-8 border-t border-[#ded2c0]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-widest text-[#180102]/50 font-bold">
              About this system
            </span>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#180102] mt-2">
              {system.name}
            </h2>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-8">
            <p className="text-xl md:text-2xl text-[#180102]/85 leading-relaxed font-normal">
              {system.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#ded2c0]/60">
              <div className="p-6 bg-[#f5f3f0] rounded-2xl border border-[#ded2c0]">
                <span className="text-xs uppercase tracking-wider text-[#180102]/50 font-semibold block">
                  Energy independence
                </span>
                <span className="text-2xl font-bold text-[#180102] mt-1 block">
                  {system.number} of 5
                </span>
              </div>

              <div className="p-6 bg-[#f5f3f0] rounded-2xl border border-[#ded2c0]">
                <span className="text-xs uppercase tracking-wider text-[#180102]/50 font-semibold block">
                  Ideal for
                </span>
                <span className="text-base font-semibold text-[#180102] mt-1 block">
                  {system.idealFor}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System at a glance */}
      <section className="py-16 max-w-[1240px] mx-auto px-6 lg:px-8 border-t border-[#ded2c0]">
        <div className="max-w-3xl mb-10">
          <span className="text-xs uppercase tracking-widest text-[#180102]/50 font-bold">
            Specifications
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#180102] mt-2">
            System at a glance
          </h2>
        </div>

        <div className="bg-[#f5f3f0] border border-[#ded2c0] rounded-[32px] overflow-hidden">
          <div className="divide-y divide-[#ded2c0]/60 text-sm">
            <div className="p-5 md:p-6 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <span className="text-[#180102]/50 font-medium">Level</span>
              <span className="sm:col-span-2 font-semibold text-[#180102]">{system.tagline}</span>
            </div>
            <div className="p-5 md:p-6 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <span className="text-[#180102]/50 font-medium">System</span>
              <span className="sm:col-span-2 font-semibold text-[#180102]">{system.system}</span>
            </div>
            <div className="p-5 md:p-6 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <span className="text-[#180102]/50 font-medium">Backup</span>
              <span className="sm:col-span-2 font-semibold text-[#180102]">{system.backup}</span>
            </div>
            <div className="p-5 md:p-6 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <span className="text-[#180102]/50 font-medium">Installation</span>
              <span className="sm:col-span-2 font-semibold text-[#180102]">{system.installation}</span>
            </div>
            <div className="p-5 md:p-6 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <span className="text-[#180102]/50 font-medium">Ideal for</span>
              <span className="sm:col-span-2 font-semibold text-[#180102]">{system.idealFor}</span>
            </div>
            <div className="p-5 md:p-6 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <span className="text-[#180102]/50 font-medium">Price from</span>
              <span className="sm:col-span-2 font-bold text-[#180102] text-lg">{system.priceFrom}</span>
            </div>
            <div className="p-5 md:p-6 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <span className="text-[#180102]/50 font-medium">Financing</span>
              <span className="sm:col-span-2 font-semibold text-[#180102]">{system.financing}</span>
            </div>
          </div>

          {/* Guarantee Pills */}
          <div className="p-6 md:p-8 bg-white/60 border-t border-[#ded2c0] grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2.5 text-xs font-semibold text-[#180102]">
              <ShieldCheck className="w-4 h-4 text-[#f16b46] shrink-0" />
              25-year warranty
            </div>
            <div className="flex items-center gap-2.5 text-xs font-semibold text-[#180102]">
              <Zap className="w-4 h-4 text-[#f16b46] shrink-0" />
              $0-down financing
            </div>
            <div className="flex items-center gap-2.5 text-xs font-semibold text-[#180102]">
              <Smartphone className="w-4 h-4 text-[#f16b46] shrink-0" />
              24/7 app monitoring
            </div>
            <div className="flex items-center gap-2.5 text-xs font-semibold text-[#180102]">
              <Users className="w-4 h-4 text-[#f16b46] shrink-0" />
              Our own licensed crew
            </div>
          </div>
        </div>
      </section>

      {/* Prev / Next System Navigation */}
      <section className="py-12 max-w-[1240px] mx-auto px-6 lg:px-8 border-t border-[#ded2c0]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {prevSystem ? (
            <Link
              href={`/systems/${prevSystem.slug}`}
              className="group p-6 bg-[#f5f3f0] hover:bg-[#faf9f7] border border-[#ded2c0] rounded-2xl flex items-center justify-between transition-colors"
            >
              <div>
                <span className="text-xs text-[#180102]/50 block font-medium">Previous system</span>
                <span className="text-lg font-semibold text-[#180102] group-hover:text-[#f16b46] transition-colors">
                  {prevSystem.name}
                </span>
              </div>
              <ArrowLeft className="w-5 h-5 text-[#180102]/50 group-hover:text-[#f16b46] transition-transform group-hover:-translate-x-1" />
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          {nextSystem && (
            <Link
              href={`/systems/${nextSystem.slug}`}
              className="group p-6 bg-[#f5f3f0] hover:bg-[#faf9f7] border border-[#ded2c0] rounded-2xl flex items-center justify-between sm:text-right transition-colors"
            >
              <div className="order-2 sm:order-1 sm:ml-auto">
                <span className="text-xs text-[#180102]/50 block font-medium">Next system</span>
                <span className="text-lg font-semibold text-[#180102] group-hover:text-[#f16b46] transition-colors">
                  {nextSystem.name}
                </span>
              </div>
              <ArrowRight className="w-5 h-5 text-[#180102]/50 group-hover:text-[#f16b46] transition-transform group-hover:translate-x-1 order-1 sm:order-2" />
            </Link>
          )}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="relative rounded-[32px] overflow-hidden bg-[#180102] text-white p-8 md:p-16">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <Image
              src="/images/cta-sunset.png"
              alt="Golden sunset"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10 max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#f16b46] font-bold">
              Your free design is one step away
            </span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mt-3">
              Let’s design this system for your roof.
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/70">
              Free design in 24 hours · No obligation · $0-down financing
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/#quote"
                className="btn-asymmetric inline-flex items-center justify-center bg-[#f16b46] hover:bg-[#e0532e] text-white font-semibold text-base px-8 py-4 shadow-sm"
              >
                Get a free design
              </Link>
              <a
                href={companyDetails.phoneHref}
                className="btn-asymmetric inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-8 py-4 border border-white/20 backdrop-blur-sm"
              >
                <Phone className="w-4 h-4 text-[#f16b46]" />
                Call {companyDetails.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
