'use client';

import React, { useState } from 'react';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { CheckCircle2 } from 'lucide-react';

/**
 * Newsletter Widget Component.
 * Captures email subscriptions with inline feedback, dark action button, and security subtext matching Image 2.
 */
export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  return (
    <Card variant="default" className="p-6 space-y-4">
      <div className="space-y-2">
        <h4 className="text-base font-bold text-white font-sans">
          Subscribe to our newsletter
        </h4>
        <p className="text-xs text-zinc-400 font-normal leading-relaxed">
          Get the latest insights on cyber risk, compliance, and security delivered to your inbox.
        </p>
      </div>

      {subscribed ? (
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center gap-3 text-emerald-400 text-xs font-semibold animate-in fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>Thank you for subscribing! Check your inbox for updates.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-2.5 px-3.5 bg-[#111114] text-xs border-[#27272a] text-white placeholder:text-zinc-500 focus:bg-[#141418] focus:border-[#ff5500]"
            />
            {error && <p className="text-[11px] text-red-400 mt-1">{error}</p>}
          </div>

          {/* Solid Orange Button */}
          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-[#ff5500] hover:bg-[#ff661a] text-white text-xs font-bold rounded-xl shadow-[0_0_15px_rgba(255,85,0,0.3)] transition-all cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      )}

      <p className="text-[11px] text-zinc-500 font-medium text-center">
        No spam. Unsubscribe anytime.
      </p>
    </Card>
  );
};

export default Newsletter;
