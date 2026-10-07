'use client';

import { ScaleControls } from '@/components/scale/ScaleControls';
import { ClientScaleScene } from '@/components/scale/ClientScaleScene';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { ChevronRight, Orbit } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ScalePage() {
  const [mode, setMode] = useState<'visual' | 'scientific'>('visual');
  const [sizeScale, setSizeScale] = useState(1);
  const [distanceScale, setDistanceScale] = useState(1);
  const [speedScale, setSpeedScale] = useState(1);

  return (
    <div className="flex flex-col h-[100dvh] bg-black text-white overflow-hidden relative">
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
          <div className="hidden md:block text-white/50 text-xs tracking-[0.2em] uppercase">Scale Mode</div>
        </div>
        <div className="pointer-events-auto">
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Main 3D Canvas */}
      <div className="flex-1 relative">
        <ClientScaleScene
          mode={mode}
          sizeScale={sizeScale}
          distanceScale={distanceScale}
          speedScale={speedScale}
        />

        {/* Controls Overlay */}
        <div className="absolute bottom-4 pb-safe md:bottom-8 left-0 right-0 px-4 md:px-6 z-40 pointer-events-none flex justify-center md:justify-start">
          <div className="pointer-events-auto w-full md:w-auto">
            <ScaleControls
              mode={mode} setMode={setMode}
              sizeScale={sizeScale} setSizeScale={setSizeScale}
              distanceScale={distanceScale} setDistanceScale={setDistanceScale}
              speedScale={speedScale} setSpeedScale={setSpeedScale}
            />
          </div>
        </div>

        {/* Informational overlay text */}
        <div className="absolute top-20 md:top-24 left-1/2 -translate-x-1/2 text-center z-30 pointer-events-none w-full max-w-lg px-4 md:px-6">
          <h2 className="text-xl md:text-2xl font-light mb-1 md:mb-2">
            {mode === 'visual' ? 'Visual Exploration Scale' : 'Scientific Relative Scale'}
          </h2>
          <p className="text-white/60 text-[11px] md:text-sm leading-snug md:leading-relaxed">
            {mode === 'visual'
              ? 'Planets are artificially enlarged and clustered closer together so you can easily see and interact with them.'
              : 'At a more accurate relative scale, planets appear as tiny specks separated by immense dark voids.'}
          </p>
        </div>
      </div>
    </div>
  );
}
