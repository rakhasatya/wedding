'use client';

import React from 'react';
import { Calendar, Clock, MapPin, ExternalLink, CalendarPlus, Shirt } from 'lucide-react';
import { generateCalendarEvent } from '../utils/helpers';

export default function EventSchedule() {
  const akadMapUrl = "https://maps.app.goo.gl/JEYwjXgTbFZei8fb8";
  const lunchMapUrl = "https://maps.app.goo.gl/YGQdbKszbPhhVpbJ7";

  return (
    <section className="py-20 px-4 bg-maroon-gradient text-white relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto space-y-12 text-center relative z-10">
        
        {/* Section Title */}
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-200 font-serif">
            Rangkaian Acara Pernikahan
          </span>
          <h2 className="font-script text-4xl sm:text-6xl text-gold-gradient">
            Waktu & Lokasi Acara
          </h2>
          <p className="font-serif text-amber-100/90 text-sm sm:text-base max-w-lg mx-auto">
            Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir di hari istimewa kami.
          </p>
        </div>

        {/* Schedule Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Card 1: Akad Nikah */}
          <div className="glass-card-dark p-8 rounded-3xl border border-gold-500/40 space-y-6 text-center hover:border-gold-400 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1.5 rounded-full bg-gold-500/20 text-amber-200 font-serif text-sm font-semibold border border-gold-500/40">
                Akad Nikah
              </div>

              <div className="space-y-3 text-amber-100">
                <div className="flex items-center justify-center gap-2 text-lg font-serif">
                  <Calendar size={18} className="text-gold-400" />
                  <span>Sabtu, 29 Agustus 2026</span>
                </div>

                <div className="flex items-center justify-center gap-2 text-base font-serif">
                  <Clock size={18} className="text-gold-400" />
                  <span>Pukul 08.00 - 09.00 WIB</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={akadMapUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gold-500 hover:bg-gold-600 text-maroon-950 font-serif font-bold text-sm shadow-lg transition-transform hover:scale-105"
              >
                <MapPin size={16} />
                <span>Petunjuk Lokasi Akad Nikah</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Card 2: Wedding Lunch */}
          <div className="glass-card-dark p-8 rounded-3xl border border-gold-500/40 space-y-6 text-center hover:border-gold-400 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1.5 rounded-full bg-gold-500/20 text-amber-200 font-serif text-sm font-semibold border border-gold-500/40">
                Wedding Lunch
              </div>

              <div className="space-y-3 text-amber-100">
                <div className="flex items-center justify-center gap-2 text-lg font-serif">
                  <Calendar size={18} className="text-gold-400" />
                  <span>Sabtu, 29 Agustus 2026</span>
                </div>

                <div className="flex items-center justify-center gap-2 text-base font-serif">
                  <Clock size={18} className="text-gold-400" />
                  <span>Pukul 10.30 - 12.30 WIB</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={lunchMapUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gold-500 hover:bg-gold-600 text-maroon-950 font-serif font-bold text-sm shadow-lg transition-transform hover:scale-105"
              >
                <MapPin size={16} />
                <span>Petunjuk Lokasi Wedding Lunch</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

        </div>

        {/* Action Button: Add to Calendar */}
        <div className="flex justify-center pt-2">
          <a
            href={generateCalendarEvent()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-gold-500/40 text-amber-200 font-serif text-sm transition-all hover:scale-105"
          >
            <CalendarPlus size={18} className="text-gold-400" />
            <span>Simpan ke Kalender</span>
          </a>
        </div>

      </div>

    </section>
  );
}
