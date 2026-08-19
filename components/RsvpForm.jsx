'use client';

import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, UserCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sendToGoogleSheet } from '../utils/helpers';

export default function RsvpForm({ initialGuestName }) {
  const [formData, setFormData] = useState({
    name: initialGuestName || '',
    attendance: 'hadir',
    guests: '1',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialGuestName) {
      setFormData((prev) => ({ ...prev, name: initialGuestName }));
    }
    const savedRsvp = localStorage.getItem('fatimah_rakhasatya_rsvp');
    if (savedRsvp) {
      try {
        const parsed = JSON.parse(savedRsvp);
        setFormData(parsed);
        setIsSubmitted(true);
      } catch (e) {
        console.error(e);
      }
    }
  }, [initialGuestName]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || isSubmitting) return;

    setIsSubmitting(true);

    // Save to LocalStorage
    localStorage.setItem('fatimah_rakhasatya_rsvp', JSON.stringify(formData));

    // Submit to Google Spreadsheet (RSVP Sheet)
    await sendToGoogleSheet('rsvp', {
      sheet: 'RSVP',
      nama: formData.name,
      kehadiran: formData.attendance === 'hadir' ? 'Akan Hadir' : 'Tidak Hadir',
      jumlah_tamu: formData.attendance === 'hadir' ? formData.guests : '0',
      pesan: formData.message,
    });

    setIsSubmitting(false);
    setIsSubmitted(true);

    if (formData.attendance === 'hadir') {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#721c26', '#d4af37', '#ffffff'],
      });
    }
  };

  return (
    <section className="py-20 px-4 bg-maroon-gradient text-white relative">
      
      <div className="max-w-2xl mx-auto space-y-10 text-center">
        
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex p-3 rounded-full bg-gold-500/20 text-gold-400">
            <UserCheck size={26} />
          </div>
          <h2 className="font-script text-4xl sm:text-6xl text-gold-gradient">
            Konfirmasi Kehadiran (RSVP)
          </h2>
          <p className="font-serif text-amber-100/90 text-sm sm:text-base">
            Mohon konfirmasi kehadiran Anda untuk membantu persiapan acara kami.
          </p>
        </div>

        {/* RSVP Form Card */}
        <div className="glass-card-dark p-8 sm:p-10 rounded-3xl border border-gold-500/40 text-left shadow-2xl">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="inline-flex p-4 rounded-full bg-emerald-500/20 text-emerald-400 mb-2">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-amber-200">
                Terima Kasih, {formData.name}!
              </h3>
              <p className="font-serif text-stone-200 text-sm max-w-md mx-auto">
                Konfirmasi Anda ({formData.attendance === 'hadir' ? 'Akan Hadir' : 'Maaf Belum Bisa Hadir'}) telah kami catat pada Spreadsheet RSVP. Kehadiran dan doa Anda sangat berarti bagi kami.
              </p>

              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-serif text-amber-200 border border-gold-500/30 transition-colors"
              >
                Ubah Konfirmasi RSVP
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Input */}
              <div className="space-y-2">
                <label className="block text-xs font-serif uppercase tracking-wider text-amber-200">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Masukkan nama Anda..."
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-gold-500/30 text-white placeholder-stone-400 focus:outline-none focus:border-gold-400 text-sm font-serif"
                />
              </div>

              {/* Attendance Selection */}
              <div className="space-y-2">
                <label className="block text-xs font-serif uppercase tracking-wider text-amber-200">
                  Konfirmasi Kehadiran
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'hadir' })}
                    className={`py-3 px-4 rounded-xl border text-sm font-serif transition-all ${
                      formData.attendance === 'hadir'
                        ? 'bg-gold-500 text-maroon-950 font-bold border-gold-400 shadow-lg'
                        : 'bg-black/30 border-gold-500/30 text-stone-300 hover:bg-white/10'
                    }`}
                  >
                    Saya Akan Hadir
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'tidak_hadir' })}
                    className={`py-3 px-4 rounded-xl border text-sm font-serif transition-all ${
                      formData.attendance === 'tidak_hadir'
                        ? 'bg-gold-500 text-maroon-950 font-bold border-gold-400 shadow-lg'
                        : 'bg-black/30 border-gold-500/30 text-stone-300 hover:bg-white/10'
                    }`}
                  >
                    Maaf, Tidak Bisa Hadir
                  </button>
                </div>
              </div>

              {/* Guest Count */}
              {formData.attendance === 'hadir' && (
                <div className="space-y-2">
                  <label className="block text-xs font-serif uppercase tracking-wider text-amber-200">
                    Jumlah Tamu Hadir
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-gold-500/30 text-white focus:outline-none focus:border-gold-400 text-sm font-serif"
                  >
                    <option value="1" className="bg-maroon-950 text-white">1 Orang</option>
                    <option value="2" className="bg-maroon-950 text-white">2 Orang</option>
                  </select>
                </div>
              )}

              {/* Message Note */}
              <div className="space-y-2">
                <label className="block text-xs font-serif uppercase tracking-wider text-amber-200">
                  Pesan Ucapan / Catatan Khusus
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tuliskan harapan dan doa Anda..."
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-gold-500/30 text-white placeholder-stone-400 focus:outline-none focus:border-gold-400 text-sm font-serif"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-gold-500 hover:bg-gold-600 text-maroon-950 font-serif font-bold text-sm shadow-xl transition-transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send size={16} />
                <span>{isSubmitting ? 'Mengirim...' : 'Kirim Konfirmasi RSVP'}</span>
              </button>

            </form>
          )}
        </div>

      </div>

    </section>
  );
}
