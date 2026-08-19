'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, Sparkles } from 'lucide-react';
import { calculateTimeLeft } from '../utils/helpers';

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 bg-maroon-gradient text-white overflow-hidden">
      
      {/* Decorative Background Floral Gradients & Sparkles */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-maroon-500/20 rounded-full blur-3xl"></div>

      {/* Main Glass Header Card */}
      <div className="relative z-10 w-full max-w-3xl glass-card-dark p-8 sm:p-12 rounded-3xl border border-gold-500/40 shadow-2xl space-y-8 animate-float">
        
        {/* Top Crest */}
        <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-gold-500/30 text-amber-200 text-xs sm:text-sm font-serif tracking-widest uppercase">
          <Sparkles size={14} className="text-gold-400" />
          <span>The Wedding Announcement</span>
        </div>

        {/* Script Names */}
        <div className="space-y-3">
          <p className="font-serif italic text-lg sm:text-xl text-amber-100/90 font-light">
            We Request the Honor of Your Presence at the Marriage of
          </p>
          <h1 className="font-script text-4xl sm:text-6xl md:text-7xl text-gold-gradient py-2 drop-shadow-lg leading-tight">
            Fatimah Azzahra & Rakhasatya Mahardhika Pangestu
          </h1>
        </div>

        {/* Date Display */}
        <div className="flex items-center justify-center gap-3 text-amber-100 font-serif text-lg sm:text-xl py-3 border-y border-gold-500/30 max-w-md mx-auto">
          <Calendar size={20} className="text-gold-400" />
          <span>Sabtu, 29 Agustus 2026</span>
        </div>

        {/* Live Countdown Timer Grid */}
        <div className="pt-4">
          <p className="text-xs uppercase tracking-widest text-amber-200/80 font-serif mb-4">
            Menghitung Hari Menuju Hari Bahagia
          </p>
          
          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-lg mx-auto">
            {[
              { label: 'Hari', value: mounted ? timeLeft.days : 0 },
              { label: 'Jam', value: mounted ? timeLeft.hours : 0 },
              { label: 'Menit', value: mounted ? timeLeft.minutes : 0 },
              { label: 'Detik', value: mounted ? timeLeft.seconds : 0 },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-3 rounded-2xl bg-black/30 border border-gold-500/30 backdrop-blur-sm">
                <span className="font-serif text-2xl sm:text-4xl font-bold text-amber-200">
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs font-sans text-stone-300 uppercase tracking-wider mt-1">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
