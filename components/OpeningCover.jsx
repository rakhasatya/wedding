'use client';

import React, { useState } from 'react';
import { Mail, Sparkles, Heart } from 'lucide-react';

export default function OpeningCover({ guestName, onOpen, isOpened }) {
  const [isUntying, setIsUntying] = useState(false);

  const handleOpenClick = () => {
    setIsUntying(true);
    setTimeout(() => {
      onOpen();
    }, 900);
  };

  if (isOpened) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-ivory-100 transition-all duration-1000 ${isUntying ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
      
      {/* Background ambient sparkles & light gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-maroon-800/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 text-maroon-800/10 animate-float">
          <Sparkles size={120} />
        </div>
      </div>

      {/* Main Card Container - Replica of uploaded invitation image */}
      <div className={`relative w-full max-w-md invitation-shield-card p-6 sm:p-8 text-center text-white transition-all duration-700 ${isUntying ? 'untying' : ''}`}>
        
        {/* Outer White Double Piping Border */}
        <div className="shield-border-outer p-4 sm:p-6 relative">
          <div className="shield-border-inner p-4 sm:p-6 flex flex-col items-center justify-between min-h-[520px]">
            
            {/* Header Greeting */}
            <div className="w-full space-y-3 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs tracking-wider uppercase">
                <Heart size={12} className="text-pink-300 fill-pink-300" />
                <span>Wedding Invitation</span>
              </div>

              {/* Guest Name Line: Dear ______ */}
              <div className="pt-2">
                <p className="font-serif italic text-white/90 text-lg sm:text-xl">Dear</p>
                <div className="inline-block border-b-2 border-white/80 px-6 py-1 my-1">
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold tracking-wide text-yellow-100">
                    {guestName}
                  </h3>
                </div>
              </div>

              {/* Welcome text */}
              <p className="font-serif italic text-sm sm:text-base text-white/90 font-light tracking-wide pt-1">
                Welcome to the Wedding Lunch of
              </p>
            </div>

            {/* Couple Names - Elegant Script Typography */}
            <div className="my-6 space-y-1">
              <h1 className="font-script text-4xl sm:text-5xl md:text-6xl text-white drop-shadow-md leading-tight">
                Fatimah
              </h1>
              <p className="font-serif italic text-2xl text-amber-200 font-light">&</p>
              <h1 className="font-script text-4xl sm:text-5xl md:text-6xl text-white drop-shadow-md leading-tight">
                Rakhasatya
              </h1>
            </div>

            {/* Line Art Illustrations matching uploaded card */}
            <div className="my-2 py-3 border-y border-white/20 w-full flex items-center justify-around text-white/80">
              {/* Candlestick illustration SVG */}
              <svg className="w-8 h-8 opacity-85" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2v4M8 6h8M6 10h12M12 6v14M8 20h8" />
                <circle cx="12" cy="2" r="1" fill="currentColor" />
                <circle cx="8" cy="6" r="1" fill="currentColor" />
                <circle cx="16" cy="6" r="1" fill="currentColor" />
              </svg>

              {/* Tiered Wedding Cake SVG */}
              <svg className="w-10 h-10 opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 21h10M6 17h12M8 13h8M9 9h6" />
                <path d="M8 21v-4M16 21v-4M9 17v-4M15 17v-4M10 13V9M14 13V9" />
                <circle cx="12" cy="6" r="1.5" fill="currentColor" />
              </svg>

              {/* Interlocked Rings SVG */}
              <svg className="w-8 h-8 opacity-85" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="9" cy="12" r="5" />
                <circle cx="15" cy="12" r="5" />
                <path d="M14 8l1-2 2 1" />
              </svg>
            </div>

            {/* Open Invitation Action Button */}
            <div className="w-full pt-4 relative">
              <button
                onClick={handleOpenClick}
                disabled={isUntying}
                className="group relative w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-ivory-100 hover:bg-white text-maroon-900 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Mail size={18} className="text-maroon-800 transition-transform group-hover:scale-110" />
                <span className="font-serif tracking-widest text-sm uppercase font-bold">Buka Undangan</span>
                <Sparkles size={16} className="text-gold-500 animate-spin-slow" />
              </button>

              {/* White Satin Ribbon Tied in Bow at bottom center */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none z-10">
                {/* Left ribbon tail */}
                <div className="ribbon-left w-12 h-6 bg-white shadow-md rounded-l-full transform -rotate-12 origin-right border-r border-stone-200"></div>
                {/* Bow knot */}
                <div className="w-7 h-7 bg-white rounded-full shadow-lg border-2 border-stone-100 z-20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-stone-200"></div>
                </div>
                {/* Right ribbon tail */}
                <div className="ribbon-right w-12 h-6 bg-white shadow-md rounded-r-full transform rotate-12 origin-left border-l border-stone-200"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
