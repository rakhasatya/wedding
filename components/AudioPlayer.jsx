'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function AudioPlayer({ isOpened }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Royalty-free romantic wedding piano instrumental audio URL
  const audioUrl = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=wedding-piano-112702.mp3";

  useEffect(() => {
    if (isOpened && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.log("Audio autoplay prevented by browser:", err);
      });
    }
  }, [isOpened]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => console.log("Audio play error:", err));
    }
  };

  if (!isOpened) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      <audio ref={audioRef} src={audioUrl} loop preload="auto" />
      
      {/* Playing Status Badge */}
      {isPlaying && (
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-maroon-900/90 text-amber-200 text-xs font-serif border border-gold-500/40 shadow-lg backdrop-blur-md animate-pulse">
          <Music size={12} className="text-gold-400" />
          <span>Romantic Soundtrack</span>
        </div>
      )}

      {/* Floating Vinyl Record Disc Button */}
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? "Mute Background Music" : "Play Background Music"}
        className={`relative w-12 h-12 rounded-full bg-maroon-900 text-gold-400 flex items-center justify-center shadow-xl border-2 border-gold-500/60 transition-transform duration-300 hover:scale-110 active:scale-95 ${
          isPlaying ? 'animate-spin-slow ring-4 ring-maroon-800/30' : ''
        }`}
      >
        <div className="absolute inset-1 rounded-full border border-white/20"></div>
        {isPlaying ? <Volume2 size={20} className="text-amber-200" /> : <VolumeX size={20} className="text-stone-400" />}
      </button>
    </div>
  );
}
