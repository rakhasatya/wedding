# Undangan Pernikahan Digital - Fatimah Azzahra & Rakhasatya Mahardhika Pangestu 💍✨

A luxury, interactive, and mobile-first digital wedding invitation web application built for **Fatimah Azzahra & Rakhasatya Mahardhika Pangestu**. Designed with Next.js (App Router), Tailwind CSS, Framer Motion, and direct Google Spreadsheet integration for live RSVP and Guestbook management.

Live Local URL: [http://localhost:3010](http://localhost:3010)

---

## 🎨 Key Features

- 💌 **Interactive Shield Card & Bow Untying Opening**: Replicates custom Burgundy Maroon (`#5C141C`) shield card layout with double white piping and an animated satin bow untying effect.
- 👤 **Personalized Guest Links**: Dynamic guest greeting via URL parameter (`?to=Nama+Tamu`).
- 🎵 **Floating Music Player**: Ambient background wedding instrumental disc widget with play/pause controls.
- ⏱️ **Live Countdown Timer**: Real-time countdown to Saturday, 29 August 2026.
- 📍 **Akad & Wedding Lunch Schedule**: Dedicated event cards with direct Google Maps navigation links.
- 💳 **Digital Angpao (Bank BCA)**: 1-Click copy account numbers for Fatimah Azzahra (`7361275059`) & Rakhasatya Mahardhika Pangestu (`5271655062`).
- 📊 **Google Spreadsheet Integration**: Instant form submissions sent directly to Google Apps Script (`RSVP` and `Ucapan` sheets).
- 🚀 **Vercel Deployment Ready**: Built with Next.js App Router and pre-configured Open Graph metadata for WhatsApp preview cards.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + Glassmorphism Design System
- **Icons**: Lucide React
- **Animations**: CSS Keyframes + Canvas Confetti
- **Database / Backend**: Google Sheets API via Google Apps Script Web App

---

## 🚀 Getting Started

### 1. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/rakhasatya/wedding.git
cd wedding
npm install
```

### 2. Development Server

Run the development server on port **3010**:

```bash
npm run dev
```

Open [http://localhost:3010](http://localhost:3010) in your browser to view the application.

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbxfsACWvqxm8mFw_4_GnDtCC1Y3i8xdkXG-YuNSy9dzA68je6JROWXgA4XKUelGYkDL/exec
```

---

## 🌐 Deploy to Vercel

1. Push your repository to GitHub (`rakhasatya/wedding`).
2. Import the project in [Vercel](https://vercel.com).
3. Set the Environment Variable `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`.
4. Click **Deploy**!

---

Crafted with ❤️ for **Fatimah Azzahra & Rakhasatya Mahardhika Pangestu**
