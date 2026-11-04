import Image from 'next/image';
import { Review } from '@/data/siteData';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="flex flex-col justify-between bg-[#f5f3f0] border border-[#ded2c0] rounded-[28px] p-6 md:p-8 transition-all hover:bg-white hover:shadow-md">
      <div>
        {/* Top: System tag and 5-stars */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#f16b46] bg-[#f16b46]/10 px-3 py-1 rounded-full">
            {review.system}
          </span>
          <div className="flex items-center gap-0.5 text-[#f16b46]" aria-label="5 out of 5 stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
        </div>

        {/* Review Quote */}
        <p className="text-[16px] md:text-[17px] leading-relaxed text-[#180102]/85 italic">
          “{review.quote}”
        </p>
      </div>

      {/* Author details */}
      <div className="flex items-center gap-3.5 mt-6 pt-5 border-t border-[#ded2c0]/60">
        <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-[#ded2c0]">
          <Image
            src={review.avatar}
            alt={review.author}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-sm text-[#180102] leading-tight">
            {review.author}
          </h4>
          <p className="text-xs text-[#180102]/60 mt-0.5">
            {review.location}
          </p>
        </div>
      </div>
    </div>
  );
}
