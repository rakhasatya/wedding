import './globals.css';

export const metadata = {
  metadataBase: new URL('https://wedding.rakhasatya.com'),
  title: 'The Wedding Lunch of Fatimah Azzahra & Rakhasatya Mahardhika Pangestu',
  description: 'Undangan Pernikahan Digital Fatimah Azzahra & Rakhasatya Mahardhika Pangestu - Sabtu, 29 Agustus 2026',
  keywords: ['Fatimah Azzahra', 'Rakhasatya Mahardhika Pangestu', 'Wedding Invitation', 'Undangan Pernikahan'],
  authors: [{ name: 'Fatimah & Rakhasatya' }],
  themeColor: '#5c141c',
  openGraph: {
    title: 'The Wedding Lunch of Fatimah Azzahra & Rakhasatya Mahardhika Pangestu',
    description: 'Kami mengundang Bapak/Ibu/Saudara/i untuk merayakan hari kebahagiaan kami pada Sabtu, 29 Agustus 2026.',
    url: 'https://wedding.rakhasatya.com',
    siteName: 'Wedding of Fatimah & Rakhasatya',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Undangan Pernikahan Fatimah Azzahra & Rakhasatya Mahardhika Pangestu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Wedding Lunch of Fatimah Azzahra & Rakhasatya Mahardhika Pangestu',
    description: 'Undangan Pernikahan Digital - Sabtu, 29 Agustus 2026',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#5c141c" />
      </head>
      <body className="bg-ivory-100 text-stone-800 antialiased selection:bg-maroon-800 selection:text-white min-h-[100dvh]">
        {children}
      </body>
    </html>
  );
}
