import Link from 'next/link';
import Image from 'next/image';
import { System } from '@/data/systems';
import { ArrowUpRight } from 'lucide-react';

interface SystemCardProps {
  system: System;
  featured?: boolean;
}

export default function SystemCard({ system, featured = false }: SystemCardProps) {
  return (
    <Link
      href={`/systems/${system.slug}`}
      className={`group relative flex flex-col justify-between bg-[#f5f3f0] hover:bg-[#faf9f7] rounded-[32px] border border-[#ded2c0] p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
        featured ? 'ring-2 ring-[#f16b46]/50' : ''
      }`}
    >
      <div>
        {/* Top Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="w-8 h-8 rounded-full bg-[#180102] text-white flex items-center justify-center font-bold text-sm shrink-0">
              {system.number}
            </span>
            <span className="text-xs md:text-sm font-medium text-[#180102]/70 bg-[#edeae4] px-3.5 py-1 rounded-full">
              {system.tagline}
            </span>
          </div>

          {system.isPopular && (
            <span className="bg-[#f16b46] text-white text-xs font-semibold px-3 py-1 rounded-full shrink-0 shadow-xs">
              {system.popularBadge}
            </span>
          )}
        </div>

        {/* Title & Slogan */}
        <div className="mb-6">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-[#180102] group-hover:text-[#f16b46] transition-colors">
              {system.name}
            </h3>
            <div className="w-9 h-9 rounded-[28px_8px_8px_28px] bg-white group-hover:bg-[#f16b46] group-hover:text-white flex items-center justify-center text-[#180102] transition-colors shrink-0 shadow-xs">
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
          <p className="mt-2 text-[15px] leading-relaxed text-[#180102]/75">
            {system.slogan}
          </p>
        </div>

        {/* Image Preview */}
        <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden mb-6 bg-[#edeae4]/50 border border-[#ded2c0]/40">
          <Image
            src={system.image}
            alt={system.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Specs Highlights */}
        <div className="bg-white/60 rounded-[20px] p-5 border border-[#ded2c0]/50 grid grid-cols-2 gap-4 text-xs">
          <div>
            <span className="block text-[#180102]/50 font-medium">System</span>
            <span className="font-semibold text-[#180102] mt-0.5 block leading-tight">
              {system.system}
            </span>
          </div>
          <div>
            <span className="block text-[#180102]/50 font-medium">Backup</span>
            <span className="font-semibold text-[#180102] mt-0.5 block leading-tight">
              {system.backup}
            </span>
          </div>
          <div>
            <span className="block text-[#180102]/50 font-medium">Install</span>
            <span className="font-semibold text-[#180102] mt-0.5 block leading-tight">
              {system.installation}
            </span>
          </div>
          <div>
            <span className="block text-[#180102]/50 font-medium">From</span>
            <span className="font-bold text-[#180102] text-sm mt-0.5 block leading-tight">
              {system.priceFrom}
            </span>
            <span className="text-[11px] text-[#180102]/60 block">{system.financing}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
