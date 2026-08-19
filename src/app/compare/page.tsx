'use client';

import { ClientComparisonScene } from '@/components/comparison/ClientComparisonScene';
import { ComparisonTable } from '@/components/comparison/ComparisonTable';
import { PlanetSelector } from '@/components/comparison/PlanetSelector';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { ChevronRight, Orbit } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ComparePage() {
  const [selectedIds, setSelectedIds] = useState<string[]>(['earth', 'mars']);

  return (
    <div className="flex flex-col h-screen bg-black text-white overflow-hidden">
      {/* Top Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 pointer-events-none">
        <div className="flex items-center gap-4 pointer-events-auto">
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 transition-colors">
              <Orbit className="text-white/70 group-hover:text-white w-5 h-5 transition-colors" />
            </div>
            <div className="hidden md:block">
              <h1 className="text-white/70 group-hover:text-white font-medium text-sm tracking-widest uppercase transition-colors">Back to Solar System</h1>
            </div>
          </Link>
          <ChevronRight className="w-4 h-4 text-white/30 hidden md:block" />
          <div className="hidden md:block text-white/50 text-xs tracking-[0.2em] uppercase">Compare</div>
        </div>
        <div className="pointer-events-auto">
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Main Split Layout */}
      <div className="flex-1 flex flex-col pt-20 relative">

        {/* Planet Selector Overlay */}
        <div className="absolute top-16 md:top-24 left-0 right-0 px-2 md:px-6 z-40 pointer-events-none">
          <div className="max-w-4xl mx-auto pointer-events-auto">
            <PlanetSelector selectedIds={selectedIds} onChange={setSelectedIds} />
          </div>
        </div>

        {/* Top half: 3D Visualization */}
        <div className="flex-1 relative">
          {selectedIds.length > 0 ? (
            <ClientComparisonScene selectedIds={selectedIds} />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/30 uppercase tracking-widest text-sm">
              Select planets to compare
            </div>
          )}
        </div>

        {/* Bottom half: Data Table */}
        <div className="h-[45vh] md:h-[40vh] bg-black relative z-30 flex-shrink-0">
          {selectedIds.length > 0 && (
            <ComparisonTable selectedIds={selectedIds} />
          )}
        </div>
      </div>
    </div>
  );
}
