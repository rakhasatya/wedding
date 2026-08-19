'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { getGuestName } from '../utils/helpers';
import OpeningCover from '../components/OpeningCover';
import AudioPlayer from '../components/AudioPlayer';
import HeroSection from '../components/HeroSection';
import CoupleProfile from '../components/CoupleProfile';
import EventSchedule from '../components/EventSchedule';
import RsvpForm from '../components/RsvpForm';
import DigitalGift from '../components/DigitalGift';
import WishesGuestbook from '../components/WishesGuestbook';
import Footer from '../components/Footer';

function InvitationContent() {
  const searchParams = useSearchParams();
  const guestName = getGuestName(searchParams);
  const [isOpened, setIsOpened] = useState(false);

  return (
    <main className="min-h-screen bg-ivory-100 relative">
      {/* Interactive Opening Cover */}
      <OpeningCover
        guestName={guestName}
        isOpened={isOpened}
        onOpen={() => setIsOpened(true)}
      />

      {/* Main Wedding Invitation Page Content */}
      <div className={`transition-opacity duration-1000 ${isOpened ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
        <AudioPlayer isOpened={isOpened} />
        <HeroSection />
        <CoupleProfile />
        <EventSchedule />
        <RsvpForm initialGuestName={guestName} />
        <DigitalGift />
        <WishesGuestbook initialGuestName={guestName} />
        <Footer />
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-ivory-100 text-maroon-900 font-serif text-lg">
        Memuat Undangan Fatimah Azzahra & Rakhasatya Mahardhika Pangestu...
      </div>
    }>
      <InvitationContent />
    </Suspense>
  );
}
