import { exoplanets } from '@/data/exoplanets';
import { ClientExoplanetScene } from '@/components/explorer/ClientExoplanetScene';
import { ExoplanetInformation } from '@/components/explorer/ExoplanetInformation';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';

export async function generateStaticParams() {
  return exoplanets.map((planet) => ({
    id: planet.id,
  }));
}

export default async function ExoplanetExplorerPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const planet = exoplanets.find(p => p.id === id);

  if (!planet) {
    notFound();
  }

  return (
    <div className="w-full h-screen flex flex-col md:flex-row pt-20 md:pt-0 bg-black relative">
      {/* Back Button (Absolute) */}
      <div className="absolute top-6 left-6 z-50">
        <Link href="/others" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white backdrop-blur-md">
          <ChevronLeft className="w-6 h-6" />
        </Link>
      </div>

      {/* Language Switcher (Absolute) */}
      <div className="absolute top-6 right-6 z-50">
        <LanguageSwitcher />
      </div>

      {/* Left side: Sticky 3D Canvas */}
      <div className="w-full md:w-1/2 h-[40vh] md:h-screen sticky top-0 left-0">
        <ClientExoplanetScene planet={planet} />

        {/* Subtle hint to interact */}
        <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none z-10">
          <p className="text-white/30 text-[10px] tracking-widest uppercase">
            Drag to rotate • Scroll to zoom
          </p>
        </div>
      </div>

      {/* Right side: Scrollable Information */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-screen overflow-y-auto pb-24 md:pb-0 scrollbar-hide">
        {/* Add top padding for desktop to clear absolute nav */}
        <div className="md:pt-24">
          <ExoplanetInformation planet={planet} />
        </div>
      </div>
    </div>
  );
}
