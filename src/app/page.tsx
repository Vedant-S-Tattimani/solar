import Image from 'next/image';
import Link from 'next/link';
import { systems } from '@/data/systems';
import { reviews, processSteps, specCategories, companyDetails } from '@/data/siteData';
import SystemCard from '@/components/SystemCard';
import FaqAccordion from '@/components/FaqAccordion';
import QuoteForm from '@/components/QuoteForm';
import ReviewCard from '@/components/ReviewCard';
import PartnerLogos from '@/components/PartnerLogos';
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
      <section id="top" className="pt-8 md:pt-14 pb-16 max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Scroll explore tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f5f3f0] border border-[#ded2c0] text-xs font-medium text-[#180102]/70 mb-8 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#f16b46] animate-pulse" />
            Scroll to explore
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-medium tracking-[-0.045em] text-[#180102] leading-[1.02]">
            A home that never goes dark.
            <br />
            Powered by sunshine.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#180102]/80 max-w-2xl mx-auto font-normal leading-relaxed">
            Solar panels and home batteries — designed and installed by one local team.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#quote"
              className="rounded-[32px_8px_32px_32px] inline-flex items-center justify-center bg-[#f16b46] hover:bg-[#e0532e] text-white font-semibold text-base px-8 py-4 shadow-sm transition-transform hover:-translate-y-0.5"
            >
              Get a free design
            </Link>
            <Link
              href="#solutions"
              className="rounded-[8px_32px_32px_8px] inline-flex items-center justify-center bg-[#f5f3f0] hover:bg-[#edeae4] text-[#180102] font-semibold text-base px-8 py-4 border border-[#ded2c0] transition-transform hover:-translate-y-0.5"
            >
              Explore systems
            </Link>
          </div>
        </div>

        {/* Hero Video / Cover Banner (rounded-[64px_16px_64px_64px]) */}
        <div className="mt-14 relative w-full rounded-[40px_16px_40px_40px] md:rounded-[64px_16px_64px_64px] overflow-hidden bg-[#180102] text-white min-h-[540px] md:min-h-[660px] flex flex-col justify-between p-6 sm:p-10 md:p-14 shadow-xl">
          {/* Background image */}
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/images/hero-house.jpg"
              alt="Family home with solar panels on the roof"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#180102] via-[#180102]/30 to-[#180102]/50" />
          </div>

          {/* Center Cover Slogan */}
          <div className="relative z-10 text-center max-w-4xl mx-auto my-auto pt-6">
            <p className="text-xs md:text-sm font-semibold tracking-widest uppercase text-[#f8f0e3]/80 mb-3">
              Sunhearth · Solar + Home Battery
            </p>
            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[110px] font-medium tracking-[-0.05em] leading-[0.96] text-[#f8f0e3]">
              Live on sunshine.
              <br />
              Even after dark.
            </h2>

            {/* Live battery status pill */}
            <div className="mt-6 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#180102]/80 backdrop-blur-md border border-white/20 text-xs md:text-sm text-white shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-[#819993] animate-pulse" />
              <BatteryCharging className="w-4 h-4 text-[#d9ceb6]" />
              <span>Grid outage · your home is running on battery — 86%</span>
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
                Switch to backup power
              </span>
            </div>

            <div>
              <span className="text-3xl md:text-4xl font-bold tracking-tight text-[#f8f0e3] block">
                24/7
              </span>
              <span className="text-xs md:text-sm text-[#f8f0e3]/80 font-medium mt-0.5 block">
                Monitoring in the app
              </span>
            </div>

            <div>
              <span className="text-3xl md:text-4xl font-bold tracking-tight text-[#f8f0e3] block">
                25 years
              </span>
              <span className="text-xs md:text-sm text-[#f8f0e3]/80 font-medium mt-0.5 block">
                Full-system warranty
              </span>
            </div>
          </div>
        </div>

        {/* Certified Installer */}
        <PartnerLogos />
      </section>

      {/* ========================================================
          2. WHY SUNHEARTH SECTION
         ======================================================== */}
      <section id="why" className="py-20 bg-[#f5f3f0] border-y border-[#ded2c0]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#180102]/50 font-bold">
              Why Sunhearth
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-medium tracking-[-0.04em] leading-[1.04] text-[#180102] mt-2">
              Energy that feels like peace of mind
            </h2>
            <p className="mt-4 text-lg md:text-xl text-[#180102]/70">
              Here’s what a typical Solar + Storage home gets back — in money, in comfort and in calm.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1: Outage */}
            <div className="bg-white rounded-[32px] border border-[#ded2c0] p-8 flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-5xl font-bold tracking-tight text-[#180102]">
                  11 hours
                </span>
                <h3 className="text-2xl font-medium text-[#180102] mt-3">
                  Lights on when the street goes dark
                </h3>
                <p className="text-[15px] text-[#180102]/75 mt-3 leading-relaxed">
                  That’s how long the average U.S. home sat without power in 2024 — twice the usual. One 13.5 kWh battery keeps the fridge, lights and Wi‑Fi running for up to 2 days.
                </p>
                <div className="mt-5 p-3 rounded-xl bg-[#f5f3f0] text-xs font-semibold text-[#180102]/85">
                  Switches to battery in &lt; 20 ms — no flicker, no reboot
                </div>
              </div>
              <div className="mt-6 relative w-full aspect-[4/3] rounded-[24px] overflow-hidden">
                <Image
                  src="/images/mother-baby.jpg"
                  alt="Mother holding her baby at home"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Card 2: Self Power Split */}
            <div className="bg-white rounded-[32px] border border-[#ded2c0] p-8 flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-5xl font-bold tracking-tight text-[#180102]">
                  Up to 90%
                </span>
                <h3 className="text-2xl font-medium text-[#180102] mt-3">
                  of your power, made at home
                </h3>

                {/* Breakdown Bars */}
                <div className="mt-6 space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-[#180102]">From your roof · daytime</span>
                      <span className="text-[#f16b46] font-bold">68%</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-[#f5f3f0] overflow-hidden">
                      <div className="h-full bg-[#f16b46] rounded-full w-[68%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-[#180102]">From your battery · evening & night</span>
                      <span className="text-[#d9ceb6] font-bold text-[#180102]">22%</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-[#f5f3f0] overflow-hidden">
                      <div className="h-full bg-[#d9ceb6] rounded-full w-[22%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-[#180102]">From the grid</span>
                      <span className="text-[#180102]/60 font-bold">10%</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-[#f5f3f0] overflow-hidden">
                      <div className="h-full bg-[#180102]/20 rounded-full w-[10%]" />
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#180102]/60 mt-4">
                  A typical day for a Solar + Storage home
                </p>
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-[#f5f3f0] border border-[#ded2c0]/60 flex items-center gap-3">
                <Leaf className="w-5 h-5 text-[#819993] shrink-0" />
                <span className="text-xs font-semibold text-[#180102]">
                  ≈ 4 t less CO₂ every year — for the next generation
                </span>
              </div>
            </div>

            {/* Card 3: Smaller bills */}
            <div className="bg-white rounded-[32px] border border-[#ded2c0] p-8 flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-5xl font-bold tracking-tight text-[#180102]">
                  −80%
                </span>
                <h3 className="text-2xl font-medium text-[#180102] mt-3">
                  Smaller bills from month one
                </h3>
                <p className="text-[15px] text-[#180102]/75 mt-3 leading-relaxed">
                  Typical drop in the monthly electric bill for a Solar + Storage home (usually 70–90%). Most systems pay for themselves in 8–12 years — then keep producing for 15 more.
                </p>
                <div className="mt-5 p-3 rounded-xl bg-[#f5f3f0] text-xs font-semibold text-[#180102]/85">
                  Your price of power, locked in
                </div>
                <p className="text-xs text-[#180102]/65 mt-3 leading-relaxed">
                  Utility rates are up about 24% since 2021 and still climbing. Sunshine never sends a rate hike — and homes with solar sell for about 4% more.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#ded2c0]/60 text-[11px] text-[#180102]/50">
                Typical figures for an 8 kW solar + 13.5 kWh battery home. Sources: U.S. EIA, Zillow, EPA.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. QUOTE BANNER 1 (rounded-[64px_16px_64px_64px])
         ======================================================== */}
      <section className="max-w-[1240px] mx-auto px-6 lg:px-8 py-12">
        <div className="relative rounded-[40px_16px_40px_40px] md:rounded-[64px_16px_64px_64px] overflow-hidden bg-[#180102] text-white p-8 md:p-16 shadow-lg">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/images/cabin-night.png"
              alt="Warm light glowing from a cabin at night"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#f16b46] font-bold">
              When the grid goes dark
            </span>
            <blockquote className="mt-4 text-3xl sm:text-5xl lg:text-[60px] font-medium leading-[1.08] tracking-[-0.04em]">
              “The whole street went dark for two days. Our kids didn’t even notice.”
            </blockquote>
            <p className="mt-6 text-sm text-white/70 font-medium">
              Daniel R. — Solar + Storage, Pasadena
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. SOLUTIONS SECTION (5 CMS TIERS)
         ======================================================== */}
      <section id="solutions" className="py-20 max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest text-[#180102]/50 font-bold">
            Solutions
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-medium tracking-[-0.04em] leading-[1.04] text-[#180102] mt-2">
            Five levels of energy independence
          </h2>
          <p className="mt-4 text-lg md:text-xl text-[#180102]/70 leading-relaxed">
            From a simple backup battery to a fully off-grid estate. Choose how independent you want to be — every system is designed around your roof, your habits and your budget.
          </p>
        </div>

        {/* 5 System Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {systems.map((system) => (
            <SystemCard
              key={system.id}
              system={system}
              featured={system.isPopular}
            />
          ))}
        </div>

        {/* Help me choose CTA */}
        <div className="mt-12 text-center p-8 bg-[#f5f3f0] border border-[#ded2c0] rounded-[32px] max-w-xl mx-auto shadow-xs">
          <p className="text-base font-medium text-[#180102] mb-3">
            Not sure which level fits your home?
          </p>
          <Link
            href="#quote"
            className="rounded-[32px_8px_32px_32px] inline-flex items-center gap-2 px-8 py-3.5 bg-[#f16b46] hover:bg-[#e0532e] text-white font-semibold text-sm shadow-xs transition-transform hover:-translate-y-0.5"
          >
            Help me choose
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ========================================================
          5. PROCESS SECTION (HOW IT WORKS)
         ======================================================== */}
      <section id="process" className="py-20 bg-[#f5f3f0] border-y border-[#ded2c0]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs uppercase tracking-widest text-[#180102]/50 font-bold">
              How it works
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-medium tracking-[-0.04em] leading-[1.04] text-[#180102] mt-2">
              From first call to first sunrise
            </h2>
            <p className="mt-4 text-lg md:text-xl text-[#180102]/70 leading-relaxed">
              One team handles everything — design, permits, installation and the paperwork nobody enjoys. Most families are running on sunshine in about six weeks.
            </p>
          </div>

          {/* 5 Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white border border-[#ded2c0] rounded-[28px] p-6 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-full bg-[#f16b46] text-white flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </span>
                    <span className="text-xs font-semibold text-[#180102]/60 uppercase tracking-wider">
                      {step.timeframe}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#180102]">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#180102]/70 mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Metrics Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14 pt-12 border-t border-[#ded2c0]">
            <div>
              <span className="text-3xl sm:text-5xl font-bold text-[#180102] tracking-tight">
                1,800+
              </span>
              <span className="text-xs sm:text-sm text-[#180102]/60 mt-1 block">
                families powered by Sunhearth
              </span>
            </div>
            <div>
              <span className="text-3xl sm:text-5xl font-bold text-[#180102] tracking-tight">
                24 MW
              </span>
              <span className="text-xs sm:text-sm text-[#180102]/60 mt-1 block">
                installed on family roofs
              </span>
            </div>
            <div>
              <span className="text-3xl sm:text-5xl font-bold text-[#180102] tracking-tight">
                4.9
              </span>
              <span className="text-xs sm:text-sm text-[#180102]/60 mt-1 block">
                average rating from 640+ reviews
              </span>
            </div>
            <div>
              <span className="text-3xl sm:text-5xl font-bold text-[#180102] tracking-tight">
                15 yrs
              </span>
              <span className="text-xs sm:text-sm text-[#180102]/60 mt-1 block">
                designing local energy systems
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. PROMISE QUOTE BANNER (rounded-[64px_16px_64px_64px])
         ======================================================== */}
      <section className="max-w-[1240px] mx-auto px-6 lg:px-8 py-12">
        <div className="relative rounded-[40px_16px_40px_40px] md:rounded-[64px_16px_64px_64px] overflow-hidden bg-[#180102] text-white p-8 md:p-16 shadow-lg">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/images/sunrise-panels.png"
              alt="Sunrise over a field of solar panels"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#f16b46] font-bold">
              Our promise
            </span>
            <blockquote className="mt-4 text-3xl sm:text-5xl lg:text-[60px] font-medium leading-[1.08] tracking-[-0.04em]">
              “We install every system as if it were going on our own parents’ roof.”
            </blockquote>
            <p className="mt-6 text-sm text-white/70 font-medium">
              Michael Torres — founder & lead engineer
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. EXAMPLE CALCULATION SECTION
         ======================================================== */}
      <section id="example" className="py-20 max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest text-[#180102]/50 font-bold">
            Example calculation
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-medium tracking-[-0.04em] leading-[1.04] text-[#180102] mt-2">
            One year of sunshine in a typical San Jose home
          </h2>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-xs font-medium bg-[#f5f3f0] border border-[#ded2c0] px-3.5 py-1.5 rounded-full text-[#180102]">
              18 × 400 W panels · 7.2 kW
            </span>
            <span className="text-xs font-medium bg-[#f5f3f0] border border-[#ded2c0] px-3.5 py-1.5 rounded-full text-[#180102]">
              13.5 kWh battery
            </span>
            <span className="text-xs font-medium bg-[#f5f3f0] border border-[#ded2c0] px-3.5 py-1.5 rounded-full text-[#180102]">
              Home uses 11,000 kWh / yr
            </span>
            <span className="text-xs font-medium bg-[#f5f3f0] border border-[#ded2c0] px-3.5 py-1.5 rounded-full text-[#180102]">
              NEM 3.0 tariff
            </span>
            <span className="text-xs font-medium bg-[#f5f3f0] border border-[#ded2c0] px-3.5 py-1.5 rounded-full text-[#180102]">
              EV charging
            </span>
          </div>
        </div>

        {/* Central visual and numbers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#f5f3f0] border border-[#ded2c0] rounded-[32px] p-6 md:p-10 shadow-xs">
          <div className="lg:col-span-7 relative w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-white border border-[#ded2c0]/60">
            <Image
              src="/images/solar-illustration.png"
              alt="Illustrated family home with rooftop solar panels, home batteries and EV"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="bg-white border border-[#ded2c0] rounded-[24px] p-6 shadow-xs">
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

            <div className="bg-white border border-[#ded2c0] rounded-[24px] p-6 shadow-xs">
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

            <div className="bg-white border border-[#ded2c0] rounded-[24px] p-6 shadow-xs">
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

            <div className="bg-white border border-[#ded2c0] rounded-[24px] p-6 shadow-xs">
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

        {/* NEM 3.0 Explanation */}
        <div className="mt-8 p-6 md:p-8 bg-[#f5f3f0] border border-[#ded2c0] rounded-[32px] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="max-w-2xl text-sm leading-relaxed text-[#180102]/85">
            <strong className="text-[#180102] font-semibold block mb-1">
              Why the battery matters:
            </strong>
            under NEM 3.0 the grid pays about $0.07 for each kWh you send it, but charges about $0.38 for each kWh you buy. Storing daytime sunshine for the evening doubles what your home uses itself — from 35% to 70%.
          </div>
          <Link
            href="#quote"
            className="rounded-[32px_8px_32px_32px] px-7 py-4 bg-[#f16b46] hover:bg-[#e0532e] text-white text-sm font-semibold shrink-0 shadow-xs transition-transform hover:-translate-y-0.5"
          >
            Calculate my home
          </Link>
        </div>

        <p className="mt-4 text-[11px] text-[#180102]/50 max-w-3xl leading-relaxed">
          Estimate, not a quote. Assumes a south-facing roof at 20–25° with no shade, a typical PVGIS weather year for San Jose, 11,000 kWh annual use, a 13.5 kWh battery (~90% round-trip efficiency) and NEM 3.0 net billing at ~$0.38/kWh import and ~$0.07/kWh export. Your free design uses your own roof, bills and rate plan.
        </p>
      </section>

      {/* ========================================================
          8. TEAM SECTION
         ======================================================== */}
      <section id="team" className="py-20 bg-[#f5f3f0] border-y border-[#ded2c0]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#180102]/50 font-bold">
              Our team
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-medium tracking-[-0.04em] leading-[1.04] text-[#180102] mt-2">
              Engineers, not salespeople. The people on your roof are our own.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Team photo 1 */}
            <div className="bg-white border border-[#ded2c0] rounded-[32px] overflow-hidden p-6 md:p-8 flex flex-col justify-between shadow-xs">
              <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden mb-6 bg-[#edeae4]">
                <Image
                  src="/images/crew-smiling.png"
                  alt="Two smiling Sunhearth installers"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3 bg-[#f5f3f0] rounded-xl text-center font-medium text-sm text-[#180102]">
                Meet the crew · NABCEP-certified engineers
              </div>
            </div>

            {/* Team photo 2 */}
            <div className="bg-white border border-[#ded2c0] rounded-[32px] overflow-hidden p-6 md:p-8 flex flex-col justify-between shadow-xs">
              <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden mb-6 bg-[#edeae4]">
                <Image
                  src="/images/crew-roof.png"
                  alt="Sunhearth crew installing panels on a roof"
                  fill
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
        </div>
      </section>

      {/* ========================================================
          9. REVIEWS SECTION
         ======================================================== */}
      <section id="reviews" className="py-20 max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#180102]/50 font-bold">
              Reviews
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-medium tracking-[-0.04em] leading-[1.04] text-[#180102] mt-2">
              Families who sleep better
            </h2>
          </div>

          {/* Rating Badge */}
          <div className="flex items-center gap-3 bg-[#f5f3f0] border border-[#ded2c0] px-6 py-3 rounded-2xl shrink-0 shadow-xs">
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

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((rev) => (
            <ReviewCard key={rev.author} review={rev} />
          ))}
        </div>
      </section>

      {/* ========================================================
          10. HARDWARE SPECS SECTION
         ======================================================== */}
      <section id="specs" className="py-20 bg-[#f5f3f0] border-y border-[#ded2c0]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#180102]/50 font-bold">
              Components
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-medium tracking-[-0.04em] leading-[1.04] text-[#180102] mt-2">
              What’s inside every system
            </h2>
            <p className="mt-4 text-lg md:text-xl text-[#180102]/70">
              Premium, all-black hardware from certified partners — sized for your home and backed by one warranty.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specCategories.map((cat) => (
              <div
                key={cat.title}
                className="bg-white border border-[#ded2c0] rounded-[32px] p-6 md:p-8 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <h3 className="text-xl font-bold text-[#180102] pb-4 mb-4 border-b border-[#ded2c0]/60">
                    {cat.title}
                  </h3>
                  <div className="space-y-4">
                    {cat.items.map((item) => (
                      <div key={item.label}>
                        <span className="text-xs uppercase tracking-wider text-[#180102]/50 block font-semibold">
                          {item.label}
                        </span>
                        <span className="text-sm font-semibold text-[#180102] block mt-0.5">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          11. GET A FREE DESIGN / QUOTE SECTION
         ======================================================== */}
      <section id="quote" className="py-20 max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="max-w-3xl text-center mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-medium tracking-[-0.04em] leading-[1.04] text-[#180102]">
            Get your free design in 24 hours
          </h2>
          <p className="mt-4 text-lg md:text-xl text-[#180102]/75 max-w-2xl mx-auto leading-relaxed">
            Tell us a little about your home. An engineer — not a call center — will prepare a personalized design and savings estimate. Free, with no obligation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left sidebar: What you get */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[#f5f3f0] border border-[#ded2c0] rounded-[32px] p-8 shadow-xs">
              <h3 className="text-xl font-medium text-[#180102] mb-5">
                What you’ll get
              </h3>
              <ul className="space-y-4 text-sm text-[#180102]/85">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#f16b46] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Personalized 3D system design for your roof</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#f16b46] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Month-by-month savings & payback forecast</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#f16b46] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Battery backup plan for your must-have circuits</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#f16b46] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Every local incentive & financing option</span>
                </li>
              </ul>
            </div>

            {/* Direct call callout */}
            <div className="bg-[#f5f3f0] border border-[#ded2c0] rounded-[32px] p-8 flex items-center justify-between gap-4 shadow-xs">
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
              <div className="w-12 h-12 rounded-full bg-[#f16b46] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Phone className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Right column: Interactive Quote Form */}
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* ========================================================
          12. FAQ SECTION
         ======================================================== */}
      <section id="faq" className="py-20 bg-[#f5f3f0] border-y border-[#ded2c0]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="max-w-2xl text-center mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#180102]/50 font-bold">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-medium tracking-[-0.04em] leading-[1.04] text-[#180102] mt-2">
              Questions, answered
            </h2>
          </div>

          <FaqAccordion />
        </div>
      </section>

      {/* ========================================================
          13. FINAL BOTTOM CTA BANNER (rounded-[64px_16px_64px_64px])
         ======================================================== */}
      <section id="cta" className="py-20 max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="relative rounded-[40px_16px_40px_40px] md:rounded-[64px_16px_64px_64px] overflow-hidden bg-[#180102] text-white p-8 md:p-16 shadow-xl">
          <div className="absolute inset-0 opacity-25">
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
            <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-medium tracking-[-0.04em] leading-[1.04] mt-3">
              Tonight, your home could run on today’s sunshine.
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/70">
              Free design in 24 hours · No obligation · $0-down financing
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#quote"
                className="rounded-[32px_8px_32px_32px] inline-flex items-center justify-center bg-[#f16b46] hover:bg-[#e0532e] text-white font-semibold text-base px-8 py-4 shadow-sm transition-transform hover:-translate-y-0.5"
              >
                Get a free design
              </Link>
              <a
                href={companyDetails.phoneHref}
                className="rounded-[8px_32px_32px_8px] inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-8 py-4 border border-white/20 backdrop-blur-sm transition-transform hover:-translate-y-0.5"
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
