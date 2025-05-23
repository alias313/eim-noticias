import './global.css';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Noticias EIM',
  description: 'Resumenes de noticias',
  icons: {
    icon: [
      { url: '/favicon.ico?v=2', type: 'image/x-icon' }
    ],
    shortcut: [{ url: '/favicon.ico?v=2', type: 'image/x-icon' }],
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={inter.className} suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Resumenes de noticias" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico?v=2" type="image/x-icon" />
      </head>
      <body className="flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
