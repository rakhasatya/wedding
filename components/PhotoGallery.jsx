'use client';

import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function PhotoGallery() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const photos = [
    {
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      caption: "Momen Bahagia Pre-Wedding Fatimah & Rakhasatya",
    },
    {
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
      caption: "Senyuman dan Cinta Dalam Setiap Langkah",
    },
    {
      url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
      caption: "Menuju Ikatan Suci Pernikahan",
    },
    {
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
      caption: "Kebahagiaan Yang Tak Ternilai",
    },
    {
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
      caption: "Kasih Sayang dan Doa Orang Tua",
    },
    {
      url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80",
      caption: "Kisah Cinta Fatimah & Rakhasatya",
    },
  ];

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section className="py-20 px-4 bg-ivory-100 relative">
      
      <div className="max-w-5xl mx-auto space-y-12 text-center">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex p-3 rounded-full bg-maroon-800/10 text-maroon-800">
            <Camera size={24} />
          </div>
          <h2 className="font-script text-4xl sm:text-6xl text-maroon-900">
            Galeri Kenangan
          </h2>
          <p className="font-serif text-stone-600 max-w-md mx-auto">
            Potret momen kebahagiaan dan perjalanan cinta Fatimah & Rakhasatya.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {photos.map((photo, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedPhotoIndex(idx)}
              className="group relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer border border-gold-500/20 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              <img
                src={photo.url}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 text-left">
                <p className="text-white text-xs sm:text-sm font-serif italic">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal Overlay */}
      {selectedPhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedPhotoIndex(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X size={24} />
          </button>

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Lightbox Content */}
          <div
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[selectedPhotoIndex].url}
              alt="Selected wedding photo"
              className="max-w-full max-h-[75vh] object-contain rounded-xl border border-white/20 shadow-2xl"
            />
            <p className="font-serif text-amber-200 text-base sm:text-lg italic text-center">
              {photos[selectedPhotoIndex].caption}
            </p>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}

    </section>
  );
}
