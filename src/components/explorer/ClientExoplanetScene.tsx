'use client';

import dynamic from 'next/dynamic';
import { ExoplanetData } from '@/data/exoplanets';

export const ClientExoplanetScene = dynamic<{ planet: ExoplanetData }>(
  () => import('./ExoplanetScene').then(mod => mod.ExoplanetScene), 
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 flex items-center justify-center bg-black text-white/50 text-sm tracking-widest uppercase z-50">Initializing 3D Engine...</div>
  }
);
