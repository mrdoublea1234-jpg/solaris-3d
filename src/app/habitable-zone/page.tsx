'use client';

import { useAppStore } from '@/store/useAppStore';
import { ChevronRight, Orbit as OrbitIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { ClientHabitableZoneScene } from '@/components/habitable-zone/ClientHabitableZoneScene';

export default function HabitableZonePage() {
  const { language } = useAppStore();
  const [starTemp, setStarTemp] = useState(0);

  return (
    <div className="flex flex-col h-screen bg-black text-white overflow-hidden relative">
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center px-6 py-4 pointer-events-none">
        <Link href="/missions" className="group flex items-center gap-3 pointer-events-auto">
          <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-white/10 flex items-center justify-center border border-white/10">
            <OrbitIcon className="w-5 h-5 text-white/70" />
          </div>
          <span className="hidden md:block uppercase tracking-widest text-xs text-white/50">Missions</span>
        </Link>
        <ChevronRight className="w-4 h-4 text-white/30 mx-4 hidden md:block" />
        <div className="uppercase tracking-widest text-xs text-white/50">Habitable Zone</div>
      </nav>

      <div className="flex-1 relative">
        <ClientHabitableZoneScene starTemp={starTemp} />

        {/* Overlay UI */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-lg px-6 z-40">
          <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-6">
            <h2 className="text-xl font-light mb-2">The "Goldilocks" Zone</h2>
            <p className="text-sm text-white/60 mb-6 leading-relaxed">
              The habitable zone is the region around a star where conditions might be just right for liquid water to exist on a planet's surface. Adjust the star's temperature to see how the zone shifts.
            </p>
            
            <div className="space-y-2">
              <div className="flex justify-between text-xs uppercase tracking-widest text-white/50">
                <span>Cooler Star</span>
                <span>Hotter Star</span>
              </div>
              <input 
                type="range" 
                min="-2" max="2" step="0.1"
                value={starTemp}
                onChange={(e) => setStarTemp(parseFloat(e.target.value))}
                className="w-full accent-green-400 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            
            {starTemp > 1.5 && (
              <p className="text-xs text-red-400 mt-4 text-center">Earth is now too hot for liquid water!</p>
            )}
            {starTemp < -1 && (
              <p className="text-xs text-blue-400 mt-4 text-center">Earth has frozen over!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
