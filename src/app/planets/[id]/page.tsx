import { planets } from '@/data/planets';
import { ClientExplorerScene } from '@/components/explorer/ClientExplorerScene';
import { PlanetInformation } from '@/components/explorer/PlanetInformation';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return planets.map((planet) => ({
    id: planet.id,
  }));
}

export default async function PlanetExplorerPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const planet = planets.find(p => p.id === id);

  if (!planet) {
    notFound();
  }

  return (
    <div className="w-full h-screen flex flex-col md:flex-row pt-20 md:pt-0">
      {/* Left side: Sticky 3D Canvas */}
      <div className="w-full md:w-1/2 h-[40vh] md:h-screen sticky top-0 left-0">
        <ClientExplorerScene planet={planet} />

        {/* Subtle hint to interact */}
        <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
          <p className="text-white/30 text-[10px] tracking-widest uppercase">
            Drag to rotate • Scroll to zoom
          </p>
        </div>
      </div>

      {/* Right side: Scrollable Information */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-screen overflow-y-auto pb-24 md:pb-0 scrollbar-hide">
        {/* Add top padding for desktop to clear absolute nav */}
        <div className="md:pt-24">
          <PlanetInformation planet={planet} />
        </div>
      </div>
    </div>
  );
}
