import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { GlobalAudio } from '@/components/audio/GlobalAudio';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SOLARIS 3D — Explore Our Solar System',
  description: 'A premium interactive 3D educational website exploring the Solar System.',
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