'use client';

import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 px-4 bg-maroon-950 text-white relative border-t border-gold-500/30 text-center">
      
      <div className="max-w-3xl mx-auto space-y-10">
        
        {/* Gratitude Closing Note */}
        <div className="space-y-4">
          <h2 className="font-script text-4xl sm:text-6xl text-gold-gradient">
            Fatimah Azzahra & Rakhasatya Mahardhika Pangestu
          </h2>
          <p className="font-serif italic text-amber-100/90 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kami.
          </p>

          <div className="pt-4 text-xs font-serif text-amber-200/80 uppercase tracking-widest space-y-1">
            <p className="font-bold text-amber-100 text-sm">Terima Kasih</p>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="pt-6 border-t border-white/10 text-xs font-serif text-stone-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© 2026 The Wedding of Fatimah Azzahra & Rakhasatya Mahardhika Pangestu.</p>
          <div className="flex items-center gap-1 text-amber-200/80">
            <span>Crafted with</span>
            <Heart size={12} className="fill-maroon-500 text-maroon-500" />
            <span>for Fatimah & Rakhasatya</span>
          </div>
        </div>

      </div>

    </footer>
  );
}
