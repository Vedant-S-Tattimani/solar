'use client';

import { useState } from 'react';
import { faqs, companyDetails } from '@/data/siteData';
import { Plus, Minus, Phone } from 'lucide-react';

export default function FaqAccordion() {
  // First item open by default like Framer reference
  const [openIds, setOpenIds] = useState<string[]>([faqs[0].id]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full max-w-[860px] mx-auto flex flex-col gap-4">
      {faqs.map((faq) => {
        const isOpen = openIds.includes(faq.id);
        return (
          <div
            key={faq.id}
            className="bg-[#f5f3f0] border border-[#ded2c0] rounded-3xl overflow-hidden transition-colors"
          >
            <button
              type="button"
              onClick={() => toggleItem(faq.id)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between text-left p-6 md:p-7 gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f16b46] rounded-3xl"
            >
              <h4 className="text-lg md:text-[20px] font-medium tracking-tight text-[#180102]">
                {faq.question}
              </h4>
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                  isOpen
                    ? 'bg-[#f16b46] text-white'
                    : 'bg-[#edeae4] text-[#180102]'
                }`}
              >
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>

            {isOpen && (
              <div className="px-6 md:px-7 pb-6 pt-1 text-[16px] leading-relaxed text-[#180102]/80 border-t border-[#ded2c0]/40 animate-in fade-in duration-200">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}

      {/* Still have questions banner */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-[#f5f3f0] border border-[#ded2c0] rounded-3xl">
        <p className="text-base font-medium text-[#180102]">
          Still have questions?
        </p>
        <a
          href={companyDetails.phoneHref}
          className="btn-asymmetric inline-flex items-center gap-2 px-6 py-3 bg-[#180102] hover:bg-[#331a17] text-white font-medium text-sm transition-colors shadow-xs"
        >
          <Phone className="w-4 h-4 text-[#f16b46]" />
          Call {companyDetails.phone}
        </a>
      </div>
    </div>
  );
}
