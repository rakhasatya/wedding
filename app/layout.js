import './globals.css';

export const metadata = {
  title: 'The Wedding Lunch of Fatimah & Rakhasatya',
  description: 'Undangan Pernikahan Digital Fatimah & Rakhasatya - Sabtu, 12 Desember 2026',
  openGraph: {
    title: 'The Wedding Lunch of Fatimah & Rakhasatya',
    description: 'Kami mengundang Bapak/Ibu/Saudara/i untuk merayakan hari kebahagiaan kami.',
    siteName: 'Wedding of Fatimah & Rakhasatya',
    locale: 'id_ID',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-ivory-100 text-stone-800 antialiased selection:bg-maroon-800 selection:text-white">
        {children}
      </body>
    </html>
  );
}
