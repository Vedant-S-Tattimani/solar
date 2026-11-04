'use client';

import { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function QuoteForm() {
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
      setStatus('success');
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
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to submit quote request. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error occurred. Please check your connection or call us directly.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-[#f5f3f0] border border-[#ded2c0] rounded-[32px] p-8 md:p-12 text-center animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-[#f16b46]/10 text-[#f16b46] mx-auto flex items-center justify-center mb-5">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-[#180102]">
          Design request received!
        </h3>
        <p className="mt-3 text-[16px] text-[#180102]/80 max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-[#180102]">{formData.name}</span>. An engineer is reviewing your home in <span className="font-semibold">{formData.zip}</span> and will prepare your 3D design and month-by-month savings estimate within 24 hours.
        </p>
        <div className="mt-6 p-4 rounded-2xl bg-white/70 border border-[#ded2c0]/60 max-w-sm mx-auto text-xs text-[#180102]/70 text-left">
          <p className="font-semibold text-[#180102] mb-1">Backend Dispatch Status:</p>
          <p>• Contact phone: {formData.phone}</p>
          <p>• Contact email: {formData.email}</p>
          <p>• System priority: {formData.priority} ({formData.system})</p>
          <p>• Notification dispatched to engineering queue.</p>
        </div>
        <button
          type="button"
          onClick={() => {
            setStatus('idle');
            setFormData({
              monthlyBill: '$100 – $200',
              zip: '',
              name: '',
              phone: '',
              email: '',
              priority: 'Lower my bills',
              system: 'Help me choose',
              message: '',
              consent: true,
              company: '',
            });
          }}
          className="mt-6 text-sm font-semibold text-[#f16b46] hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#f5f3f0] border border-[#ded2c0] rounded-[32px] p-6 md:p-10 shadow-sm"
      noValidate
    >
      <div className="flex flex-col gap-6">
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

        {/* Honey pot */}
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        {/* Row 1: Bill & ZIP */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="monthlyBill"
              className="text-xs uppercase tracking-wider font-semibold text-[#180102]/60"
            >
              Average monthly electric bill
            </label>
            <select
              id="monthlyBill"
              name="monthlyBill"
              value={formData.monthlyBill}
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-xl bg-white border border-[#ded2c0] text-[#180102] text-sm focus:outline-none focus:ring-2 focus:ring-[#f16b46]"
            >
              <option value="$100 – $200">$100 – $200</option>
              <option value="Under $100">Under $100</option>
              <option value="$200 – $300">$200 – $300</option>
              <option value="$300 – $500">$300 – $500</option>
              <option value="Over $500">Over $500</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="zip"
              className="text-xs uppercase tracking-wider font-semibold text-[#180102]/60"
            >
              ZIP code <span className="text-[#f16b46]">*</span>
            </label>
            <input
              id="zip"
              type="text"
              name="zip"
              required
              placeholder="91101"
              value={formData.zip}
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-xl bg-white border border-[#ded2c0] text-[#180102] text-sm placeholder-[#180102]/40 focus:outline-none focus:ring-2 focus:ring-[#f16b46]"
            />
          </div>
        </div>

        {/* Row 2: Name */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-xs uppercase tracking-wider font-semibold text-[#180102]/60"
          >
            Full name <span className="text-[#f16b46]">*</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="Jane Cooper"
            value={formData.name}
            onChange={handleChange}
            className="w-full h-12 px-4 rounded-xl bg-white border border-[#ded2c0] text-[#180102] text-sm placeholder-[#180102]/40 focus:outline-none focus:ring-2 focus:ring-[#f16b46]"
          />
        </div>

        {/* Row 3: Phone & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="text-xs uppercase tracking-wider font-semibold text-[#180102]/60"
            >
              Phone <span className="text-[#f16b46]">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              required
              placeholder="(555) 123-4567"
              value={formData.phone}
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-xl bg-white border border-[#ded2c0] text-[#180102] text-sm placeholder-[#180102]/40 focus:outline-none focus:ring-2 focus:ring-[#f16b46]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-xs uppercase tracking-wider font-semibold text-[#180102]/60"
            >
              Email <span className="text-[#f16b46]">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="jane@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-xl bg-white border border-[#ded2c0] text-[#180102] text-sm placeholder-[#180102]/40 focus:outline-none focus:ring-2 focus:ring-[#f16b46]"
            />
          </div>
        </div>

        {/* Row 4: Priority & System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="priority"
              className="text-xs uppercase tracking-wider font-semibold text-[#180102]/60"
            >
              What matters most?
            </label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-xl bg-white border border-[#ded2c0] text-[#180102] text-sm focus:outline-none focus:ring-2 focus:ring-[#f16b46]"
            >
              <option value="Lower my bills">Lower my bills</option>
              <option value="Backup during outages">Backup during outages</option>
              <option value="Full energy independence">Full energy independence</option>
              <option value="Charging my EV">Charging my EV</option>
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="system"
              className="text-xs uppercase tracking-wider font-semibold text-[#180102]/60"
            >
              System you’re interested in
            </label>
            <select
              id="system"
              name="system"
              value={formData.system}
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-xl bg-white border border-[#ded2c0] text-[#180102] text-sm focus:outline-none focus:ring-2 focus:ring-[#f16b46]"
            >
              <option value="Help me choose">Help me choose</option>
              <option value="Backup Essentials">Backup Essentials</option>
              <option value="Solar Starter">Solar Starter</option>
              <option value="Solar + Storage">Solar + Storage</option>
              <option value="Whole-Home Independence">Whole-Home Independence</option>
              <option value="Off-Grid Estate">Off-Grid Estate</option>
            </select>
          </div>
        </div>

        {/* Row 5: Notes / Message */}
        <div className="flex flex-col gap-2">
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
            className="w-full p-4 rounded-xl bg-white border border-[#ded2c0] text-[#180102] text-sm placeholder-[#180102]/40 focus:outline-none focus:ring-2 focus:ring-[#f16b46] resize-none"
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
            className="w-4 h-4 mt-0.5 rounded text-[#f16b46] border-[#ded2c0] focus:ring-[#f16b46]"
          />
          <label htmlFor="consent" className="text-xs leading-relaxed text-[#180102]/70">
            I agree to be contacted by Sunhearth about my free design. We never share your details.
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-asymmetric w-full py-4 px-6 bg-[#f16b46] hover:bg-[#e0532e] text-white font-semibold text-base shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
        >
          {status === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
          {status === 'loading' ? 'Preparing design request…' : 'Get my free design'}
        </button>
      </div>
    </form>
  );
}
