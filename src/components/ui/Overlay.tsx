'use client';

import { Navbar } from './Navbar';
import { PlanetInfoPanel } from './PlanetInfoPanel';
import { useAppStore } from '@/store/useAppStore';

export function Overlay() {
  const { selectedPlanet } = useAppStore();
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <Navbar />
      <PlanetInfoPanel />
      
      {/* Bottom hint text if no planet is selected */}
      <div 
        className={`absolute bottom-8 left-0 right-0 text-center transition-opacity duration-700 ${
          selectedPlanet ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <p className="text-white/40 text-xs tracking-widest uppercase">
          Select a planet to explore
        </p>
      </div>
    </div>
  );
}
