import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { GlobalAudio } from '@/components/audio/GlobalAudio';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://solaris3d.space'),
  title: {
    default: 'Solaris 3D - Interactive Solar System Explorer',
    template: '%s | Solaris 3D'
  },
  description: 'Explore the universe with Solaris 3D. A premium interactive educational platform featuring 3D planets, space missions, and astronomical learning. Developed by Abdul Alim.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black overflow-hidden`}>
        <ClerkProvider>
          {children}
          <GlobalAudio />
        </ClerkProvider>
      </body>
    </html>
  );
}