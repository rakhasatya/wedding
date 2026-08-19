'use client';

import React from 'react';
import { Heart, Instagram } from 'lucide-react';

export default function CoupleProfile() {
  return (
    <section className="py-20 px-4 bg-ivory-100 relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto space-y-16 text-center">
        
        {/* Quran Verse Header Section */}
        <div className="glass-card p-8 sm:p-10 rounded-3xl space-y-6 border border-gold-500/20 max-w-3xl mx-auto shadow-lg">
          <div className="inline-flex p-3 rounded-full bg-maroon-800/10 text-maroon-800">
            <Heart size={24} className="fill-maroon-800" />
          </div>

          <p className="font-serif text-2xl sm:text-3xl text-maroon-900 leading-relaxed dir-rtl" lang="ar">
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
          </p>

          <p className="font-serif italic text-stone-700 text-sm sm:text-base leading-relaxed">
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari meksudmu sendiri, supaya kamu merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang."
          </p>

          <span className="inline-block text-xs font-serif font-bold text-maroon-800 uppercase tracking-widest">
            — QS. Ar-Rum: 21
          </span>
        </div>

        {/* Groom & Bride Cards Grid (No Images & No Parent Texts) */}
        <div className="space-y-6">
          <h2 className="font-script text-4xl sm:text-5xl text-maroon-900">
            Mempelai Pengantin
          </h2>
          <p className="font-serif text-stone-600 max-w-xl mx-auto">
            Dengan memohon rahmat dan ridho Allah SWT, kami mengumumkan pernikahan kami:
          </p>

          <div className="grid md:grid-cols-2 gap-8 pt-6">
            
            {/* Groom Card: Rakhasatya Mahardhika Pangestu */}
            <div className="glass-card p-8 rounded-3xl border border-gold-500/30 flex flex-col items-center space-y-5 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-4 rounded-full bg-maroon-800/10 text-maroon-800 border border-maroon-800/20">
                <Heart size={32} className="fill-maroon-800/20 text-maroon-800" />
              </div>

              <div className="space-y-2 text-center">
                <h3 className="font-serif text-2xl font-bold text-maroon-900">
                  Rakhasatya Mahardhika Pangestu
                </h3>
                <p className="text-xs uppercase tracking-wider text-gold-700 font-semibold">
                  Mempelai Pria
                </p>
              </div>

              <a
                href="https://instagram.com/rakhasatya.m"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-maroon-800 text-white text-xs font-serif hover:bg-maroon-900 transition-colors shadow-md"
              >
                <Instagram size={14} />
                <span>@rakhasatya.m</span>
              </a>
            </div>

            {/* Bride Card: Fatimah Azzahra */}
            <div className="glass-card p-8 rounded-3xl border border-gold-500/30 flex flex-col items-center space-y-5 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-4 rounded-full bg-maroon-800/10 text-maroon-800 border border-maroon-800/20">
                <Heart size={32} className="fill-maroon-800/20 text-maroon-800" />
              </div>

              <div className="space-y-2 text-center">
                <h3 className="font-serif text-2xl font-bold text-maroon-900">
                  Fatimah Azzahra
                </h3>
                <p className="text-xs uppercase tracking-wider text-gold-700 font-semibold">
                  Mempelai Wanita
                </p>
              </div>

              <a
                href="https://instagram.com/farazahras"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-maroon-800 text-white text-xs font-serif hover:bg-maroon-900 transition-colors shadow-md"
              >
                <Instagram size={14} />
                <span>@farazahras</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
