'use client';

import React, { useState, useEffect } from 'react';
import { MessageSquare, Heart, Send, Sparkles } from 'lucide-react';
import { sendToGoogleSheet } from '../utils/helpers';

export default function WishesGuestbook({ initialGuestName }) {
  const [wishes, setWishes] = useState([]);
  const [name, setName] = useState(initialGuestName || '');
  const [wishText, setWishText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialGuestName) setName(initialGuestName);

    const savedWishes = localStorage.getItem('fatimah_rakhasatya_wishes');
    if (savedWishes) {
      try {
        setWishes(JSON.parse(savedWishes));
      } catch (e) {
        console.error(e);
      }
    }
  }, [initialGuestName]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !wishText.trim() || isSubmitting) return;

    setIsSubmitting(true);

    const newWish = {
      id: Date.now(),
      name: name.trim(),
      wish: wishText.trim(),
      attendance: 'hadir',
      likes: 0,
      time: 'Baru saja',
    };

    // Save locally
    const updated = [newWish, ...wishes];
    setWishes(updated);
    localStorage.setItem('fatimah_rakhasatya_wishes', JSON.stringify(updated));

    // Submit to Google Spreadsheet (Ucapan Sheet)
    await sendToGoogleSheet('ucapan', {
      sheet: 'Ucapan',
      nama: name.trim(),
      ucapan: wishText.trim(),
    });

    setIsSubmitting(false);
    setWishText('');
  };

  const handleLike = (id) => {
    const updated = wishes.map((item) => {
      if (item.id === id) {
        return { ...item, likes: item.likes + 1 };
      }
      return item;
    });
    setWishes(updated);
    localStorage.setItem('fatimah_rakhasatya_wishes', JSON.stringify(updated));
  };

  return (
    <section className="py-20 px-4 bg-maroon-gradient text-white relative">
      
      <div className="max-w-3xl mx-auto space-y-12 text-center">
        
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex p-3 rounded-full bg-gold-500/20 text-gold-400">
            <MessageSquare size={26} />
          </div>
          <h2 className="font-script text-4xl sm:text-6xl text-gold-gradient">
            Ucapan & Doa Restu
          </h2>
          <p className="font-serif text-amber-100/90 text-sm sm:text-base max-w-md mx-auto">
            Ungkapkan harapan dan doa terbaik Anda untuk Fatimah Azzahra & Rakhasatya Mahardhika Pangestu.
          </p>
        </div>

        {/* Input Wish Form Card */}
        <div className="glass-card-dark p-6 sm:p-8 rounded-3xl border border-gold-500/40 text-left shadow-2xl space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-serif uppercase tracking-wider text-amber-200 mb-1">
                Nama Anda
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama Anda / Keluarga..."
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-gold-500/30 text-white placeholder-stone-400 focus:outline-none focus:border-gold-400 text-sm font-serif"
              />
            </div>

            <div>
              <label className="block text-xs font-serif uppercase tracking-wider text-amber-200 mb-1">
                Ucapan & Doa
              </label>
              <textarea
                required
                rows={3}
                value={wishText}
                onChange={(e) => setWishText(e.target.value)}
                placeholder="Tuliskan ucapan dan doa hangat Anda..."
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-gold-500/30 text-white placeholder-stone-400 focus:outline-none focus:border-gold-400 text-sm font-serif"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-full bg-gold-500 hover:bg-gold-600 text-maroon-950 font-serif font-bold text-sm shadow-lg transition-transform hover:scale-[1.01] flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Send size={16} />
              <span>{isSubmitting ? 'Kirim ke Spreadsheet...' : 'Kirim Ucapan & Doa'}</span>
            </button>
          </form>
        </div>

        {/* Wishes Feed Stream */}
        {wishes.length > 0 ? (
          <div className="space-y-4 text-left max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {wishes.map((item) => (
              <div
                key={item.id}
                className="glass-card-dark p-5 rounded-2xl border border-gold-500/20 space-y-3 hover:border-gold-500/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gold-500/20 border border-gold-500/40 text-amber-200 font-serif font-bold flex items-center justify-center text-sm">
                      {item.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-amber-100 text-sm">{item.name}</h4>
                      <span className="text-[10px] text-stone-400">{item.time}</span>
                    </div>
                  </div>
                </div>

                <p className="font-serif text-stone-200 text-sm italic pl-12">
                  "{item.wish}"
                </p>

                <div className="flex items-center justify-end pt-1">
                  <button
                    onClick={() => handleLike(item.id)}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-amber-200 text-xs font-serif transition-colors"
                  >
                    <Heart size={14} className="fill-amber-200 text-amber-200" />
                    <span>{item.likes}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-card-dark p-8 rounded-2xl border border-gold-500/20 text-center space-y-2 text-amber-200/80">
            <Sparkles size={24} className="mx-auto text-gold-400 mb-1" />
            <p className="font-serif italic text-sm">Belum ada ucapan. Jadilah yang pertama memberikan doa restu untuk Fatimah & Rakhasatya!</p>
          </div>
        )}

      </div>

    </section>
  );
}
