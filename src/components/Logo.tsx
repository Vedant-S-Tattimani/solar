import Link from 'next/link';

interface LogoProps {
  className?: string;
  wordmarkColor?: string;
}

export default function Logo({ className = '', wordmarkColor = 'text-[#180102]' }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f16b46] rounded-xl py-1 px-1.5 transition-opacity hover:opacity-90 ${className}`}
      aria-label="Sunhearth homepage"
    >
      {/* Sunhearth custom mark */}
      <div className="relative w-[34px] h-[34px] shrink-0" aria-hidden="true">
        {/* Sun */}
        <div className="absolute top-0 right-0 w-[14px] h-[14px] rounded-full bg-[#d9ceb6] transition-transform duration-300 group-hover:scale-110" />
        {/* House */}
        <div className="absolute bottom-0 left-0 w-[28px] h-[22px] rounded-t-[14px] rounded-b-[3px] bg-[#f16b46]" />
        {/* Door */}
        <div className="absolute bottom-0 left-[10px] w-[8px] h-[10px] rounded-t-[4px] bg-[#f5f3f0]" />
      </div>

      {/* Wordmark */}
      <span className={`font-bold text-[27px] tracking-[-0.055em] leading-none ${wordmarkColor}`}>
        sunhearth
      </span>
    </Link>
  );
}

