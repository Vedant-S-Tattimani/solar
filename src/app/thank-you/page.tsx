import Link from 'next/link';
import { CheckCircle2, Clock, Calendar, FileText, ArrowRight, Star } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank you — Sunhearth',
  description: 'Your free solar and battery design request has been received.',
};

export default function ThankYouPage() {
  const steps = [
    {
      number: '1',
      time: 'Within 24 hours',
      title: 'A quick call',
      desc: 'We confirm a few details about your home and answer your first questions.',
      icon: Clock,
    },
    {
      number: '2',
      time: 'Week 1',
      title: 'Site visit',
      desc: 'An engineer measures your roof and electrical panel. It takes about an hour.',
      icon: Calendar,
    },
    {
      number: '3',
      time: 'Weeks 1–2',
      title: 'Your design',
      desc: 'A 3D design, a savings forecast and a clear price — no pressure, no obligation.',
      icon: FileText,
    },
  ];

  return (
    <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-24 w-full">
      <div className="max-w-3xl mx-auto text-center">
        {/* Checkmark pill */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#f16b46]/10 text-[#f16b46] mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-medium tracking-tight text-[#180102] leading-[1.05]">
          Thank you! Your free design is on its way.
        </h1>

        <p className="mt-5 text-lg sm:text-xl text-[#180102]/80 max-w-2xl mx-auto leading-relaxed">
          We’ve received your details. An engineer — not a call center — will call you within 24 hours, Mon–Sat, 8 am – 7 pm.
        </p>
      </div>

      {/* 3 Step Cards */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.number}
              className="bg-[#f5f3f0] rounded-[32px] p-8 flex flex-col justify-between border border-[#180102]/10 relative shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="w-10 h-10 rounded-full bg-[#180102] text-[#f8f0e3] flex items-center justify-center font-bold text-base">
                    {step.number}
                  </span>
                  <Icon className="w-5 h-5 text-[#f16b46]" />
                </div>

                <span className="text-xs font-semibold uppercase tracking-wider text-[#180102]/60 block mb-1">
                  {step.time}
                </span>
                <h3 className="text-xl font-medium text-[#180102] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[#180102]/75 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tip box */}
      <div className="mt-8 max-w-4xl mx-auto bg-white rounded-2xl p-5 border border-[#180102]/10 text-center">
        <p className="text-sm text-[#180102]/80">
          <span className="font-semibold text-[#180102]">Tip:</span> keep your latest electric bill handy — it helps us size your system precisely.
        </p>
      </div>

      {/* Actions */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="rounded-[32px_8px_32px_32px] inline-flex items-center justify-center bg-[#f16b46] hover:bg-[#e0532e] text-[#180102] font-normal text-xs px-7 py-5 shadow-sm transition-transform hover:-translate-y-0.5"
        >
          Back to home
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
        <Link
          href="/#reviews"
          className="rounded-[8px_32px_32px_8px] inline-flex items-center justify-center bg-[#f5f3f0] hover:bg-[#edeae4] text-[#180102] font-normal text-xs px-7 py-5 border border-[#180102]/15 transition-transform hover:-translate-y-0.5"
        >
          <Star className="w-4 h-4 mr-2 text-[#f16b46] fill-[#f16b46]" />
          Read reviews
        </Link>
      </div>
    </div>
  );
}
