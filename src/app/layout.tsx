import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { GlobalAudio } from '@/components/audio/GlobalAudio';
import { PwaManager } from '@/components/pwa/PwaManager';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://solaris3d.space'),
  title: {
    default: 'Solaris 3D - Interactive Solar System Explorer',
    template: '%s | Solaris 3D'
  },
  description: 'Explore the universe with Solaris 3D. A premium interactive educational platform featuring 3D planets, space missions, and astronomical learning. Developed by Abdul Alim.',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/logo-192.png',
  },
  keywords: ['Solaris 3d', 'solar system 3d', 'interactive space explorer', '3d planets', 'space education', 'solar system simulator', 'Abdul Alim', 'webgl planets'],
  authors: [{ name: 'Abdul Alim' }],
  creator: 'Abdul Alim',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://solaris3d.space',
    title: 'Solaris 3D - Interactive Solar System Explorer',
    description: 'Explore the universe with Solaris 3D. A premium interactive educational platform featuring 3D planets and space missions.',
    siteName: 'Solaris 3D',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solaris 3D - Interactive Solar System Explorer',
    description: 'Explore the universe with Solaris 3D. A premium interactive educational platform featuring 3D planets.',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'yeHRi3XCEP7Hgu3kfEmkiQsL3ZM0UrutcdmrYtJC-j4',
  }
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.deferredPwaPrompt = null;
            window.addEventListener('beforeinstallprompt', (e) => {
              e.preventDefault();
              window.deferredPwaPrompt = e;
            });
          `
        }} />
      </head>
      <body className={`${inter.className} bg-black overflow-hidden`}>
        <ClerkProvider>
          {children}
          <PwaManager />
          <GlobalAudio />
        </ClerkProvider>
      </body>
    </html>
  );
}