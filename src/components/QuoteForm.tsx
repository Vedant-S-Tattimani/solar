'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AlertCircle, Loader2 } from 'lucide-react';

export default function QuoteForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    monthlyBill: '$100 – $200',
    zip: '',
    name: '',
    phone: '',
    email: '',
    priority: 'Lower my bills',
    system: 'Help me choose',
    message: '',
    consent: true,
    company: '', // honeypot
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.company) {
      // Bot detected via honeypot
      router.push('/thank-you');
      return;
    }

    if (!formData.zip || !formData.name || !formData.phone || !formData.email) {
      setStatus('error');
      setErrorMessage('Please fill out all required contact fields.');
      return;
    }

    if (!formData.consent) {
      setStatus('error');
      setErrorMessage('Please consent to be contacted about your free design.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        router.push('/thank-you');
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to submit quote request. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error occurred. Please check your connection or call us directly.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#f5f3f0] border border-[#180102]/15 rounded-[32px] p-6 md:p-10 shadow-xs"
      noValidate
    >
      <div className="flex flex-col gap-5">
        {/* Error alert */}
        {status === 'error' && (
          <div
            role="alert"
            className="flex items-center gap-3 p-4 rounded-2xl bg-red-50 text-red-800 border border-red-200 text-sm"
          >
            <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
            <p>{errorMessage}</p>
          </div>
        )}

        {/* Honeypot field - hidden */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Row 1: Monthly Electric Bill & Zip Code */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="monthlyBill"
              className="text-xs uppercase tracking-wider font-semibold text-[#180102]/60"
            >
              Average monthly electric bill *
            </label>
            <select
              id="monthlyBill"
              name="monthlyBill"
              value={formData.monthlyBill}
              onChange={handleChange}
              className="w-full px-[18px] py-4 rounded-xl bg-white border border-[#180102]/20 text-[#180102] text-base font-medium focus:outline-none focus:ring-2 focus:ring-[#f16b46] transition-shadow"
            >
              <option value="Under $100">Under $100</option>
              <option value="$100 – $200">$100 – $200</option>
              <option value="$200 – $350">$200 – $350</option>
              <option value="$350 – $500">$350 – $500</option>
              <option value="$500+">$500+</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="zip"
              className="text-xs uppercase tracking-wider font-semibold text-[#180102]/60"
            >
              ZIP code (Southern California) *
            </label>
            <input
              type="text"
              id="zip"
              name="zip"
              required
              placeholder="e.g. 91101"
              pattern="[0-9]{5}"
              maxLength={5}
              value={formData.zip}
              onChange={handleChange}
              className="w-full px-[18px] py-4 rounded-xl bg-white border border-[#180102]/20 text-[#180102] text-base font-medium placeholder-[#180102]/40 focus:outline-none focus:ring-2 focus:ring-[#f16b46] transition-shadow"
            />
          </div>
        </div>

        {/* Row 2: Full Name & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="name"
              className="text-xs uppercase tracking-wider font-semibold text-[#180102]/60"
            >
              Full name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Elena Rostova"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-[18px] py-4 rounded-xl bg-white border border-[#180102]/20 text-[#180102] text-base font-medium placeholder-[#180102]/40 focus:outline-none focus:ring-2 focus:ring-[#f16b46] transition-shadow"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="phone"
              className="text-xs uppercase tracking-wider font-semibold text-[#180102]/60"
            >
              Phone number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="(626) 555-0192"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-[18px] py-4 rounded-xl bg-white border border-[#180102]/20 text-[#180102] text-base font-medium placeholder-[#180102]/40 focus:outline-none focus:ring-2 focus:ring-[#f16b46] transition-shadow"
            />
          </div>
        </div>

        {/* Row 3: Email */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-xs uppercase tracking-wider font-semibold text-[#180102]/60"
          >
            Email address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="elena@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-[18px] py-4 rounded-xl bg-white border border-[#180102]/20 text-[#180102] text-base font-medium placeholder-[#180102]/40 focus:outline-none focus:ring-2 focus:ring-[#f16b46] transition-shadow"
          />
        </div>

        {/* Row 4: Primary Goal & Desired Tier */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="priority"
              className="text-xs uppercase tracking-wider font-semibold text-[#180102]/60"
            >
              Primary goal
            </label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full px-[18px] py-4 rounded-xl bg-white border border-[#180102]/20 text-[#180102] text-base font-medium focus:outline-none focus:ring-2 focus:ring-[#f16b46] transition-shadow"
            >
              <option value="Lower my bills">Lower my electric bills</option>
              <option value="Blackout protection">Blackout & outage protection</option>
              <option value="Whole home backup">Whole-home power backup</option>
              <option value="EV charging">Power an EV with sunshine</option>
              <option value="Full independence">Maximum grid independence</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="system"
              className="text-xs uppercase tracking-wider font-semibold text-[#180102]/60"
            >
              System of interest
            </label>
            <select
              id="system"
              name="system"
              value={formData.system}
              onChange={handleChange}
              className="w-full px-[18px] py-4 rounded-xl bg-white border border-[#180102]/20 text-[#180102] text-base font-medium focus:outline-none focus:ring-2 focus:ring-[#f16b46] transition-shadow"
            >
              <option value="Help me choose">Not sure — help me choose</option>
              <option value="Backup Essentials">Backup Essentials (Tier 1)</option>
              <option value="Solar Starter">Solar Starter (Tier 2)</option>
              <option value="Solar + Storage">Solar + Storage (Tier 3 · Recommended)</option>
              <option value="Whole-Home Independence">Whole-Home Independence (Tier 4)</option>
              <option value="Off-Grid Estate">Off-Grid Estate (Tier 5)</option>
            </select>
          </div>
        </div>

        {/* Row 5: Notes / Message */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="message"
            className="text-xs uppercase tracking-wider font-semibold text-[#180102]/60"
          >
            Anything else? (optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="Roof type, EV plans, outages in your area…"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-[18px] py-4 rounded-xl bg-white border border-[#180102]/20 text-[#180102] text-base font-medium placeholder-[#180102]/40 focus:outline-none focus:ring-2 focus:ring-[#f16b46] resize-none transition-shadow"
          />
        </div>

        {/* Row 6: Consent */}
        <div className="flex items-start gap-3 pt-1">
          <input
            id="consent"
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="w-4 h-4 mt-0.5 rounded text-[#f16b46] border-[#180102]/25 focus:ring-[#f16b46]"
          />
          <label htmlFor="consent" className="text-xs leading-relaxed text-[#180102]/70">
            I agree to be contacted by Sunhearth about my free design. We never share your details.
          </label>
        </div>

        {/* Submit Button (border-radius: 32px 8px 8px 32px; padding: 20px 28px) */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-5 px-7 rounded-[32px_8px_8px_32px] bg-[#f16b46] hover:bg-[#e0532e] text-[#180102] font-medium text-sm shadow-xs flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-70 transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
        >
          {status === 'loading' && <Loader2 className="w-5 h-5 animate-spin text-[#180102]" />}
          <span>{status === 'loading' ? 'Preparing design request…' : 'Get my free design'}</span>
        </button>
      </div>
    </form>
  );
}
