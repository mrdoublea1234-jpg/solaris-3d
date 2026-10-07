'use client';

import dynamic from 'next/dynamic';

export const ClientHabitableZoneScene = dynamic(() => import('./HabitableZoneScene').then(mod => mod.HabitableZoneScene), {
  ssr: false,
  loading: () => <div className="absolute inset-0 flex items-center justify-center bg-black text-white/50 text-sm tracking-widest uppercase z-50">Initializing 3D Engine...</div>
});
