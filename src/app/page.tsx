import Image from 'next/image';
import Link from 'next/link';
import { systems } from '@/data/systems';
import { reviews, processSteps, specCategories, companyDetails } from '@/data/siteData';
import SystemCard from '@/components/SystemCard';
import FaqAccordion from '@/components/FaqAccordion';
import QuoteForm from '@/components/QuoteForm';
import ReviewCard from '@/components/ReviewCard';
import PartnerLogos from '@/components/PartnerLogos';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import {
  Phone,
  ArrowRight,
  Star,
  Check,
  BatteryCharging,
  Leaf,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      {/* ========================================================
          1. HERO SECTION
         ======================================================== */}
      <section id="top" className="pt-24 md:pt-32 pb-16 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Scroll explore tag */}
          <AnimateOnScroll y={12} duration={0.4}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f5f3f0] border border-[#180102]/15 text-xs font-medium text-[#180102]/70 mb-8 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#f16b46] animate-pulse" />
              Scroll to explore
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll y={32} duration={0.5}>
            <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-medium tracking-[-3.42px] text-[#180102] leading-[76px]">
              A home that never goes dark.
              <br />
              Powered by sunshine.
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll y={24} delay={0.1} duration={0.5}>
            <p className="mt-6 text-lg sm:text-xl lg:text-[24px] text-[#180102]/80 max-w-2xl mx-auto font-medium leading-[28.8px] tracking-[-0.6px]">
              Solar panels and home batteries — designed and installed by one local team.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll y={20} delay={0.2} duration={0.5}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
              <Link
                href="#quote"
                className="rounded-[32px_8px_32px_32px] inline-flex items-center justify-center bg-[#f16b46] hover:bg-[#e0532e] text-[#180102] font-normal text-xs px-7 py-5 shadow-xs transition-transform duration-200 hover:-translate-y-0.5"
              >
                Get a free design
              </Link>
              <Link
                href="#solutions"
                className="rounded-[8px_32px_32px_8px] inline-flex items-center justify-center bg-[#f5f3f0] hover:bg-[#edeae4] text-[#180102] font-normal text-xs px-7 py-5 border border-[#180102]/15 transition-transform duration-200 hover:-translate-y-0.5"
              >
                Explore systems
              </Link>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Hero Video / Cover Banner (rounded-[64px_16px_64px_64px]) */}
        <AnimateOnScroll y={40} delay={0.25} duration={0.6}>
          <div className="mt-14 relative w-full rounded-[40px_16px_40px_40px] md:rounded-[64px_16px_64px_64px] overflow-hidden bg-[#180102] text-white min-h-[540px] md:min-h-[660px] flex flex-col justify-between p-6 sm:p-10 md:p-14 shadow-xl">
            {/* Background Video with Fallback Image */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/videos/hero-loop.mp4" type="video/mp4" />
              </video>
              <Image
                src="/images/hero-house.jpg"
                alt="Family home with solar panels on the roof"
                fill
                priority
                sizes="100vw"
                className="object-cover opacity-40 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#180102] via-[#180102]/25 to-[#180102]/45" />
            </div>

            {/* Center Cover Slogan */}
            <div className="relative z-10 text-center max-w-4xl mx-auto my-auto pt-6">
              <p className="text-xs md:text-sm font-semibold tracking-widest uppercase text-[#f8f0e3]/80 mb-3">
                Sunhearth · Solar + Home Battery
              </p>
              <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[100px] font-medium tracking-[-0.05em] leading-[0.96] text-[#f8f0e3]">
                Live on sunshine.
                <br />
                Even after dark.
              </h2>

              {/* Live battery status pill */}
              <div className="mt-6 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#180102]/80 backdrop-blur-md border border-white/20 text-xs md:text-sm text-white shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-[#819993] animate-pulse" />
                <BatteryCharging className="w-4 h-4 text-[#d9ceb6]" />
                <span>Operating normally · 0 kW from grid</span>
              </div>
            </div>

            {/* Bottom Specs Bar (4 stats inside the hero cover) */}
            <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 pt-8 border-t border-white/15">
              <div>
                <span className="text-3xl md:text-4xl font-bold tracking-tight text-[#f8f0e3] block">
                  −80%
                </span>
                <span className="text-xs md:text-sm text-[#f8f0e3]/80 font-medium mt-0.5 block">
                  Average electric bill
                </span>
              </div>

              <div>
                <span className="text-3xl md:text-4xl font-bold tracking-tight text-[#f8f0e3] block">
                  &lt; 20 ms
                </span>
                <span className="text-xs md:text-sm text-[#f8f0e3]/80 font-medium mt-0.5 block">
                  Switchover time
                </span>
              </div>

              <div>
                <span className="text-3xl md:text-4xl font-bold tracking-tight text-[#f8f0e3] block">
                  24/7
                </span>
                <span className="text-xs md:text-sm text-[#f8f0e3]/80 font-medium mt-0.5 block">
                  Power reliability
                </span>
              </div>

              <div>
                <span className="text-3xl md:text-4xl font-bold tracking-tight text-[#f8f0e3] block">
                  25 years
                </span>
                <span className="text-xs md:text-sm text-[#f8f0e3]/80 font-medium mt-0.5 block">
                  Combined warranty
                </span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Certified Installer */}
        <AnimateOnScroll y={20} delay={0.1}>
          <PartnerLogos />
        </AnimateOnScroll>
      </section>

      {/* ========================================================
          2. WHY SUNHEARTH SECTION (LIFE WITH SUNHEARTH)
         ======================================================== */}
      <section id="why" className="pt-20 md:pt-[136px] px-4 sm:px-6 lg:px-8 pb-0 max-w-[1240px] mx-auto">
        <AnimateOnScroll y={32}>
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#180102]/50 font-bold">
              Why Sunhearth
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-medium tracking-[-2.4px] leading-[62.4px] text-[#180102] mt-2">
              Energy that feels like peace of mind
            </h2>
            <p className="mt-4 text-lg md:text-xl lg:text-[24px] text-[#180102]/70 tracking-[-0.6px] leading-[28.8px] font-medium">
              Here’s what a typical Solar + Storage home gets back — in money, in comfort and in calm.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Bento Grid (2 columns: 612px 612px on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {/* Backup Story Card */}
            <AnimateOnScroll y={32}>
              <div className="rounded-[32px] p-6 sm:p-10 border border-[#180102]/10 bg-transparent flex flex-col justify-between">
                <div>
                  <div className="text-[#180102] font-medium tracking-[-0.06em] leading-none mb-3">
                    <span className="text-7xl sm:text-8xl md:text-[110px] font-medium">11 </span>
                    <span className="text-4xl sm:text-5xl font-medium">hours</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-medium text-[#180102] mt-4 tracking-[-0.02em]">
                    Lights on when the street goes dark
                  </h3>
                  <p className="text-[14px] font-medium leading-[20.3px] text-[#180102]/75 mt-3">
                    That’s how long the average U.S. home sat without power in 2024 — twice the usual. One 13.5 kWh battery keeps the fridge, lights and Wi‑Fi running for up to 2 days.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Outage Video Card */}
            <AnimateOnScroll y={32} delay={0.1}>
              <div className="relative w-full h-[400px] sm:h-[480px] rounded-[32px] overflow-hidden bg-[#180102] shadow-xs">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/images/outage-poster.png"
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/outage-loop.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-[#180102]/70 via-transparent to-transparent pointer-events-none" />
                {/* Pill at bottom */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#180102]/80 backdrop-blur-md border border-white/20 text-xs sm:text-sm text-[#f8f0e3] shadow-md">
                    <span className="w-2 h-2 rounded-full bg-[#f16b46] animate-pulse" />
                    <span>Switches to battery in &lt; 20 ms — no flicker, no reboot</span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* App Breakdown Card */}
            <AnimateOnScroll y={32} delay={0.15}>
              <div className="bg-[#f5f3f0] rounded-[32px] p-8 sm:p-10 border border-[#180102]/10 shadow-xs">
                <h3 className="text-2xl sm:text-3xl font-medium text-[#180102] tracking-tight">
                  Up to 90% of your power, made at home
                </h3>

                <div className="mt-8 space-y-5">
                  <div>
                    <div className="flex justify-between text-xs sm:text-sm font-semibold mb-1.5">
                      <span className="text-[#180102]">From your roof · daytime</span>
                      <span className="text-[#f16b46] font-bold">68%</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-[#faf9f7] overflow-hidden">
                      <div className="h-full bg-[#f16b46] rounded-full w-[68%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs sm:text-sm font-semibold mb-1.5">
                      <span className="text-[#180102]">From your battery · evening & night</span>
                      <span className="font-bold text-[#180102]">22%</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-[#faf9f7] overflow-hidden">
                      <div className="h-full bg-[#d9ceb6] rounded-full w-[22%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs sm:text-sm font-semibold mb-1.5">
                      <span className="text-[#180102]">From the grid</span>
                      <span className="text-[#180102]/60 font-bold">10%</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-[#faf9f7] overflow-hidden">
                      <div className="h-full bg-[#180102]/20 rounded-full w-[10%]" />
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#180102]/60 mt-6">
                  A typical day for a Solar + Storage home
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            {/* Family Photo Card */}
            <AnimateOnScroll y={32}>
              <div className="relative w-full h-[450px] sm:h-[600px] rounded-[32px] overflow-hidden bg-[#180102] shadow-xs">
                <Image
                  src="/images/mother-baby.jpg"
                  alt="Mother holding her baby at home"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#180102]/70 via-transparent to-transparent pointer-events-none" />
                {/* Pill at bottom */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#180102]/80 backdrop-blur-md border border-white/20 text-xs sm:text-sm text-[#f8f0e3] shadow-md">
                    <Leaf className="w-4 h-4 text-[#819993] shrink-0" />
                    <span>≈ 4 t less CO₂ every year — for the next generation</span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Savings Card */}
            <AnimateOnScroll y={32} delay={0.1}>
              <div className="bg-[#f5f3f0] rounded-[32px] p-8 sm:p-10 border border-[#180102]/10 shadow-xs">
                <span className="text-5xl sm:text-6xl font-medium tracking-tight text-[#180102]">
                  −80%
                </span>
                <h3 className="text-2xl sm:text-3xl font-medium text-[#180102] mt-3 tracking-tight">
                  Smaller bills from month one
                </h3>
                <p className="text-[14px] font-medium leading-[20.3px] text-[#180102]/75 mt-3">
                  Typical drop in the monthly electric bill for a Solar + Storage home (usually 70–90%). Most systems pay for themselves in 8–12 years — then keep producing for 15 more.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Safety / Locked-In Card */}
            <AnimateOnScroll y={32} delay={0.15}>
              <div className="rounded-[32px] p-8 sm:p-10 border border-[#180102]/10 bg-transparent shadow-xs">
                <h3 className="text-2xl sm:text-3xl font-medium text-[#180102] tracking-tight">
                  Your price of power, locked in
                </h3>
                <p className="text-[14px] font-medium leading-[20.3px] text-[#180102]/75 mt-3">
                  Utility rates are up about 24% since 2021 and still climbing. Sunshine, by contrast, is free forever. Lock in your energy cost for the next 25 years.
                </p>
                <div className="mt-6 pt-4 border-t border-[#180102]/10 text-xs text-[#180102]/50">
                  Typical figures for an 8 kW solar + 13.5 kWh battery home. Sources: U.S. EIA, Zillow, EPA.
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. QUOTE BANNER 1 (cabin-night)
         ======================================================== */}
      <section className="pt-20 md:pt-[136px] px-4 sm:px-6 lg:px-8 pb-0 max-w-[1240px] mx-auto">
        <AnimateOnScroll y={40} duration={0.6}>
          <div className="relative rounded-[40px_16px_40px_40px] md:rounded-[64px_16px_64px_64px] overflow-hidden bg-[#180102] text-white p-8 md:p-16 shadow-lg">
            <div className="absolute inset-0 opacity-40">
              <Image
                src="/images/cabin-night.png"
                alt="Warm light glowing from a cabin at night"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#180102] via-[#180102]/80 to-transparent" />
            </div>

            <div className="relative z-10 max-w-3xl">
              {/* Quote Mark */}
              <div className="flex gap-1.5 mb-6">
                <div className="w-5 h-6 bg-[#f16b46] rounded-[18px_18px_18px_3px]" />
                <div className="w-5 h-6 bg-[#f16b46] rounded-[18px_18px_18px_3px]" />
              </div>

              <span className="inline-block text-xs uppercase tracking-widest text-[#f8f0e3] bg-white/10 px-3.5 py-1.5 rounded-full font-bold mb-4">
                When the grid goes dark
              </span>

              <blockquote className="text-3xl sm:text-5xl lg:text-[60px] font-medium leading-[1.08] tracking-[-2.4px] text-[#f8f0e3]">
                “The whole street went dark for two days. Our kids didn’t even notice.”
              </blockquote>

              <p className="mt-6 text-sm text-[#f8f0e3]/75 font-medium">
                Daniel R. — Solar + Storage, Pasadena
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ========================================================
          4. SOLUTIONS SECTION (5 CMS TIERS)
         ======================================================== */}
      <section id="solutions" className="pt-20 md:pt-[136px] px-4 sm:px-6 lg:px-8 pb-0 max-w-[1240px] mx-auto">
        <AnimateOnScroll y={32}>
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#180102]/50 font-bold">
              Solutions
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-medium tracking-[-2.4px] leading-[62.4px] text-[#180102] mt-2">
              Five levels of energy independence
            </h2>
            <p className="mt-4 text-lg md:text-xl lg:text-[24px] text-[#180102]/70 tracking-[-0.6px] leading-[28.8px] font-medium">
              Every home is different. Pick the tier that matches your goals — or let our engineers design a custom mix.
            </p>
          </div>
        </AnimateOnScroll>

        {/* 5 System Cards Grid */}
        <AnimateOnScroll y={32} delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {systems.map((system) => (
              <SystemCard
                key={system.id}
                system={system}
                featured={system.isPopular}
              />
            ))}
          </div>
        </AnimateOnScroll>

        {/* Help me choose CTA */}
        <AnimateOnScroll y={20} delay={0.15}>
          <div className="mt-12 text-center p-8 bg-[#f5f3f0] border border-[#180102]/15 rounded-[32px] max-w-xl mx-auto shadow-xs">
            <p className="text-base font-medium text-[#180102] mb-3">
              Not sure which level fits your home?
            </p>
            <Link
              href="#quote"
              className="rounded-[32px_8px_32px_32px] inline-flex items-center gap-2 px-8 py-3.5 bg-[#f16b46] hover:bg-[#e0532e] text-[#180102] font-medium text-xs shadow-xs transition-transform hover:-translate-y-0.5"
            >
              Help me choose the right system
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ========================================================
          5. PROCESS SECTION (HOW IT WORKS)
         ======================================================== */}
      <section id="process" className="pt-20 md:pt-[136px] px-4 sm:px-6 lg:px-8 pb-0 max-w-[1240px] mx-auto">
        <AnimateOnScroll y={32}>
          <div className="max-w-3xl mb-14">
            <span className="text-xs uppercase tracking-widest text-[#180102]/50 font-bold">
              How it works
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-medium tracking-[-2.4px] leading-[62.4px] text-[#180102] mt-2">
              From first call to first sunrise
            </h2>
            <p className="mt-4 text-lg md:text-xl lg:text-[24px] text-[#180102]/70 tracking-[-0.6px] leading-[28.8px] font-medium">
              Five calm, transparent steps. Handled entirely by our in-house team — never subcontracted.
            </p>
          </div>
        </AnimateOnScroll>

        {/* 5 Steps Grid */}
        <AnimateOnScroll y={32} delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-[#f5f3f0] border border-[#180102]/10 rounded-[28px] p-6 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-full bg-[#180102] text-[#f8f0e3] flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </span>
                    <span className="text-xs font-semibold text-[#180102]/60 uppercase tracking-wider">
                      {step.timeframe}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-[#180102]">
                    {step.title}
                  </h3>
                  <p className="text-[14px] font-medium leading-[20.3px] text-[#180102]/70 mt-2">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Metrics Bar */}
        <AnimateOnScroll y={24} delay={0.15}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14 pt-12 border-t border-[#180102]/15">
            <div>
              <span className="text-3xl sm:text-5xl font-bold text-[#180102] tracking-tight">
                3 weeks
              </span>
              <span className="text-xs sm:text-sm text-[#180102]/60 mt-1 block font-medium">
                typical time from site visit to install
              </span>
            </div>
            <div>
              <span className="text-3xl sm:text-5xl font-bold text-[#180102] tracking-tight">
                0
              </span>
              <span className="text-xs sm:text-sm text-[#180102]/60 mt-1 block font-medium">
                subcontractors used on your roof
              </span>
            </div>
            <div>
              <span className="text-3xl sm:text-5xl font-bold text-[#180102] tracking-tight">
                100%
              </span>
              <span className="text-xs sm:text-sm text-[#180102]/60 mt-1 block font-medium">
                first-time permit pass rate
              </span>
            </div>
            <div>
              <span className="text-3xl sm:text-5xl font-bold text-[#180102] tracking-tight">
                25 yrs
              </span>
              <span className="text-xs sm:text-sm text-[#180102]/60 mt-1 block font-medium">
                full equipment and roof warranty
              </span>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ========================================================
          6. PROMISE QUOTE BANNER (sunrise-panels)
         ======================================================== */}
      <section className="pt-20 md:pt-[136px] px-4 sm:px-6 lg:px-8 pb-0 max-w-[1240px] mx-auto">
        <AnimateOnScroll y={40} duration={0.6}>
          <div className="relative rounded-[40px_16px_40px_40px] md:rounded-[64px_16px_64px_64px] overflow-hidden bg-[#180102] text-white p-8 md:p-16 shadow-lg">
            <div className="absolute inset-0 opacity-40">
              <Image
                src="/images/sunrise-panels.png"
                alt="Sunrise over a field of solar panels"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#180102] via-[#180102]/80 to-transparent" />
            </div>

            <div className="relative z-10 max-w-3xl">
              {/* Quote Mark */}
              <div className="flex gap-1.5 mb-6">
                <div className="w-5 h-6 bg-[#f16b46] rounded-[18px_18px_18px_3px]" />
                <div className="w-5 h-6 bg-[#f16b46] rounded-[18px_18px_18px_3px]" />
              </div>

              <span className="inline-block text-xs uppercase tracking-widest text-[#f8f0e3] bg-white/10 px-3.5 py-1.5 rounded-full font-bold mb-4">
                Our promise
              </span>

              <blockquote className="text-3xl sm:text-5xl lg:text-[60px] font-medium leading-[1.08] tracking-[-2.4px] text-[#f8f0e3]">
                “We install every system as if it were going on our own parents’ roof.”
              </blockquote>

              <p className="mt-6 text-sm text-[#f8f0e3]/75 font-medium">
                Michael Torres — founder & lead engineer
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ========================================================
          7. EXAMPLE CALCULATION SECTION (EXAMPLE HOME)
         ======================================================== */}
      <section id="example" className="pt-20 md:pt-[136px] px-4 sm:px-6 lg:px-8 pb-0 max-w-[1240px] mx-auto">
        <AnimateOnScroll y={32}>
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#180102]/50 font-bold">
              Example calculation
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-medium tracking-[-2.4px] leading-[62.4px] text-[#180102] mt-2">
              One year of sunshine in a typical San Jose home
            </h2>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-xs font-medium bg-[#f5f3f0] border border-[#180102]/15 px-3.5 py-1.5 rounded-full text-[#180102]">
                18 × 400 W panels · 7.2 kW
              </span>
              <span className="text-xs font-medium bg-[#f5f3f0] border border-[#180102]/15 px-3.5 py-1.5 rounded-full text-[#180102]">
                13.5 kWh battery
              </span>
              <span className="text-xs font-medium bg-[#f5f3f0] border border-[#180102]/15 px-3.5 py-1.5 rounded-full text-[#180102]">
                Home uses 11,000 kWh / yr
              </span>
              <span className="text-xs font-medium bg-[#f5f3f0] border border-[#180102]/15 px-3.5 py-1.5 rounded-full text-[#180102]">
                NEM 3.0 tariff
              </span>
              <span className="text-xs font-medium bg-[#f5f3f0] border border-[#180102]/15 px-3.5 py-1.5 rounded-full text-[#180102]">
                EV charging
              </span>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Central visual and numbers */}
        <AnimateOnScroll y={32} delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#f5f3f0] border border-[#180102]/15 rounded-[32px] p-6 md:p-10 shadow-xs">
            <div className="lg:col-span-7 relative w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-white border border-[#180102]/10">
              <Image
                src="/images/solar-illustration.png"
                alt="Illustrated family home with rooftop solar panels, home batteries and EV"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="bg-white border border-[#180102]/10 rounded-[24px] p-6 shadow-xs">
                <span className="text-xs uppercase tracking-wider text-[#180102]/50 font-medium">
                  Solar generation
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl sm:text-4xl font-bold text-[#180102]">11,700</span>
                  <span className="text-xs text-[#180102]/60 font-semibold">kWh / yr</span>
                </div>
                <p className="text-xs text-[#180102]/60 mt-1">
                  11,000–12,300 depending on area — foggy coast lower, inland higher.
                </p>
              </div>

              <div className="bg-white border border-[#180102]/10 rounded-[24px] p-6 shadow-xs">
                <span className="text-xs uppercase tracking-wider text-[#180102]/50 font-medium">
                  Home runs on its own power
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl sm:text-4xl font-bold text-[#180102]">70%</span>
                  <span className="text-xs text-[#180102]/60 font-semibold">of the year</span>
                </div>
                <div className="flex items-center gap-4 mt-2 text-xs">
                  <span className="text-[#f16b46] font-semibold">With battery: 70%</span>
                  <span className="text-[#180102]/50">Panels only: 35%</span>
                </div>
              </div>

              <div className="bg-white border border-[#180102]/10 rounded-[24px] p-6 shadow-xs">
                <span className="text-xs uppercase tracking-wider text-[#180102]/50 font-medium">
                  Saved on electric bills
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl sm:text-4xl font-bold text-[#180102]">$3,300</span>
                  <span className="text-xs text-[#180102]/60 font-semibold">/ yr</span>
                </div>
                <p className="text-xs text-[#180102]/60 mt-1">
                  $2,800–3,800 by utility and rate plan. Pays back in about 11–12 years.
                </p>
              </div>

              <div className="bg-white border border-[#180102]/10 rounded-[24px] p-6 shadow-xs">
                <span className="text-xs uppercase tracking-wider text-[#180102]/50 font-medium">
                  CO₂ emissions avoided
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl sm:text-4xl font-bold text-[#180102]">2.6 t</span>
                  <span className="text-xs text-[#180102]/60 font-semibold">/ yr</span>
                </div>
                <p className="text-xs text-[#180102]/60 mt-1">
                  At California’s grid average of about 0.22 kg CO₂ per kWh.
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* NEM 3.0 Explanation */}
        <AnimateOnScroll y={20} delay={0.15}>
          <div className="mt-8 p-6 md:p-8 bg-[#f5f3f0] border border-[#180102]/15 rounded-[32px] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="max-w-2xl text-[14px] font-medium leading-[20.3px] text-[#180102]/85">
              <strong className="text-[#180102] font-semibold block mb-1">
                Why the battery matters:
              </strong>
              under NEM 3.0 the grid pays about $0.07 for each kWh you send it, but charges about $0.38 for each kWh you buy. Storing daytime sunshine for the evening doubles what your home uses itself — from 35% to 70%.
            </div>
            <Link
              href="#quote"
              className="rounded-[32px_8px_32px_32px] px-7 py-4 bg-[#f16b46] hover:bg-[#e0532e] text-[#180102] text-xs font-normal shrink-0 shadow-xs transition-transform hover:-translate-y-0.5"
            >
              Calculate my home
            </Link>
          </div>
        </AnimateOnScroll>

        <p className="mt-4 text-[11px] text-[#180102]/50 max-w-3xl leading-relaxed">
          Estimate, not a quote. Assumes a south-facing roof at 20–25° with no shade, a typical PVGIS weather year for San Jose, 11,000 kWh annual use, a 13.5 kWh battery (~90% round-trip efficiency) and NEM 3.0 net billing at ~$0.38/kWh import and ~$0.07/kWh export. Your free design uses your own roof, bills and rate plan.
        </p>
      </section>

      {/* ========================================================
          8. TEAM SECTION
         ======================================================== */}
      <section id="team" className="pt-20 md:pt-[136px] px-4 sm:px-6 lg:px-8 pb-0 max-w-[1240px] mx-auto">
        <AnimateOnScroll y={32}>
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#180102]/50 font-bold">
              Our team
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-medium tracking-[-2.4px] leading-[62.4px] text-[#180102] mt-2">
              Engineers, not salespeople. The people on your roof are our own.
            </h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll y={32} delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Team photo 1 */}
            <div className="bg-[#f5f3f0] border border-[#180102]/15 rounded-[32px] overflow-hidden p-6 md:p-8 flex flex-col justify-between shadow-xs">
              <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden mb-6 bg-[#edeae4]">
                <Image
                  src="/images/installers.png"
                  alt="Two smiling Sunhearth installers"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-3 bg-white rounded-xl text-center font-medium text-sm text-[#180102]">
                Meet the crew · NABCEP-certified engineers
              </div>
            </div>

            {/* Team photo 2 */}
            <div className="bg-[#f5f3f0] border border-[#180102]/15 rounded-[32px] overflow-hidden p-6 md:p-8 flex flex-col justify-between shadow-xs">
              <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden mb-6 bg-[#edeae4]">
                <Image
                  src="/images/crew-roof.png"
                  alt="Sunhearth crew installing panels on a roof"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-2 text-center text-sm">
                <span className="block font-bold text-[#180102]">
                  No subcontractors. Ever.
                </span>
                <p className="text-xs text-[#180102]/70">
                  Designed in Pasadena. Installed by our own licensed crews.
                </p>
                <p className="text-xs font-semibold text-[#f16b46]">
                  NABCEP-certified engineers · one project manager from first call to switch-on
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ========================================================
          9. REVIEWS SECTION
         ======================================================== */}
      <section id="reviews" className="pt-20 md:pt-[136px] px-4 sm:px-6 lg:px-8 pb-0 max-w-[1240px] mx-auto">
        <AnimateOnScroll y={32}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#180102]/50 font-bold">
                Reviews
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-medium tracking-[-2.4px] leading-[62.4px] text-[#180102] mt-2">
                Families who sleep better
              </h2>
            </div>

            {/* Rating Badge */}
            <div className="flex items-center gap-3 bg-[#f5f3f0] border border-[#180102]/15 px-6 py-3 rounded-2xl shrink-0 shadow-xs">
              <span className="text-3xl font-bold text-[#180102]">4.9</span>
              <div>
                <div className="flex text-[#f16b46]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-[#180102]/65 mt-0.5 block font-medium">
                  640+ reviews on Google & Yelp
                </span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Reviews Cards Grid */}
        <AnimateOnScroll y={32} delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {reviews.map((rev) => (
              <ReviewCard key={rev.author} review={rev} />
            ))}
          </div>
        </AnimateOnScroll>
      </section>

      {/* ========================================================
          10. HARDWARE SPECS SECTION
         ======================================================== */}
      <section id="specs" className="pt-20 md:pt-[136px] px-4 sm:px-6 lg:px-8 pb-0 max-w-[1240px] mx-auto">
        <AnimateOnScroll y={32}>
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#180102]/50 font-bold">
              Components
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-medium tracking-[-2.4px] leading-[62.4px] text-[#180102] mt-2">
              What’s inside every system
            </h2>
            <p className="mt-4 text-lg md:text-xl lg:text-[24px] text-[#180102]/70 tracking-[-0.6px] leading-[28.8px] font-medium">
              Premium, all-black hardware from certified partners — sized for your home and backed by one warranty.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll y={32} delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specCategories.map((cat) => (
              <div
                key={cat.title}
                className="bg-[#f5f3f0] border border-[#180102]/15 rounded-[32px] p-6 md:p-8 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <h3 className="text-xl font-medium text-[#180102] pb-4 mb-4 border-b border-[#180102]/10">
                    {cat.title}
                  </h3>
                  <div className="space-y-4">
                    {cat.items.map((item) => (
                      <div key={item.label}>
                        <span className="text-xs uppercase tracking-wider text-[#180102]/50 block font-semibold">
                          {item.label}
                        </span>
                        <span className="text-[14px] font-medium leading-[20.3px] text-[#180102] block mt-0.5">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </section>

      {/* ========================================================
          11. GET A FREE DESIGN / QUOTE SECTION
         ======================================================== */}
      <section id="quote" className="py-20 md:py-[100px] px-4 sm:px-8 lg:px-16 max-w-[1240px] mx-auto">
        <AnimateOnScroll y={32}>
          <div className="max-w-3xl text-center mx-auto mb-14">
            <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-medium tracking-[-2.4px] leading-[62.4px] text-[#180102]">
              Get your free design in 24 hours
            </h2>
            <p className="mt-4 text-lg md:text-xl lg:text-[24px] text-[#180102]/75 max-w-2xl mx-auto tracking-[-0.6px] leading-[28.8px] font-medium">
              Tell us a little about your home. An engineer — not a call center — will prepare a personalized design and savings estimate. Free, with no obligation.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll y={32} delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-[56px] items-start">
            {/* Left sidebar: What you get */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-[#f5f3f0] border border-[#180102]/15 rounded-[32px] p-8 shadow-xs">
                <h3 className="text-xl font-medium text-[#180102] mb-5">
                  What you’ll get
                </h3>
                <ul className="space-y-4 text-[14px] font-medium leading-[20.3px] text-[#180102]/85">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#f16b46] text-[#180102] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Personalized 3D system design for your roof</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#f16b46] text-[#180102] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Month-by-month savings & payback forecast</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#f16b46] text-[#180102] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Battery backup plan for your must-have circuits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#f16b46] text-[#180102] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Every local incentive & financing option</span>
                  </li>
                </ul>
              </div>

              {/* Direct call callout */}
              <div className="bg-[#f5f3f0] border border-[#180102]/15 rounded-[32px] p-8 flex items-center justify-between gap-4 shadow-xs">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#180102]/50 font-bold block">
                    Prefer to talk?
                  </span>
                  <a
                    href={companyDetails.phoneHref}
                    className="text-xl font-bold text-[#180102] hover:text-[#f16b46] transition-colors mt-1 block"
                  >
                    {companyDetails.phone}
                  </a>
                  <span className="text-xs text-[#180102]/60 mt-1 block">
                    {companyDetails.hours} · real engineers
                  </span>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#f16b46] text-[#180102] flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Right column: Interactive Quote Form */}
            <div className="lg:col-span-7">
              <QuoteForm />
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ========================================================
          12. FAQ SECTION
         ======================================================== */}
      <section id="faq" className="pt-20 md:pt-[136px] px-4 sm:px-6 lg:px-8 pb-0 max-w-[1240px] mx-auto">
        <AnimateOnScroll y={32}>
          <div className="max-w-2xl text-center mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#180102]/50 font-bold">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-medium tracking-[-2.4px] leading-[62.4px] text-[#180102] mt-2">
              Questions, answered
            </h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll y={32} delay={0.1}>
          <FaqAccordion />
        </AnimateOnScroll>
      </section>

      {/* ========================================================
          13. FINAL BOTTOM CTA BANNER (cta-sunset)
         ======================================================== */}
      <section id="cta" className="py-20 md:py-[136px] max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll y={40} duration={0.6}>
          <div className="relative rounded-[40px_16px_40px_40px] md:rounded-[64px_16px_64px_64px] overflow-hidden bg-[#180102] text-white p-8 md:p-16 shadow-xl">
            <div className="absolute inset-0 opacity-40">
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
              <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-medium tracking-[-2.4px] leading-[62.4px] mt-4 text-[#f8f0e3]">
                Tonight, your home could run on today’s sunshine.
              </h2>
              <p className="mt-4 text-[14px] font-medium leading-[20.3px] text-[#f8f0e3]/80">
                Free design in 24 hours · No obligation · $0-down financing
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="#quote"
                  className="rounded-[32px_8px_32px_32px] inline-flex items-center justify-center bg-[#f16b46] hover:bg-[#e0532e] text-[#180102] font-normal text-xs px-7 py-5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Get my free design
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
