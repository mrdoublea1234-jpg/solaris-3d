'use client';

import { AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export function WebGLFallback() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black text-white p-6 z-[100]">
      <AlertTriangle className="w-16 h-16 text-yellow-500 mb-6" />
      <h2 className="text-2xl md:text-3xl font-light mb-4 text-center">3D Visualization Unavailable</h2>
      <p className="text-white/70 max-w-md text-center leading-relaxed mb-8">
        It appears that WebGL is not supported or encountered an error on your device. You can still explore the educational content.
      </p>
      
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <Link 
          href="/learn" 
          className="w-full py-3 bg-white text-black text-center rounded-lg font-medium hover:bg-white/90 transition-colors uppercase tracking-widest text-sm"
        >
          Go to Lessons
        </Link>
        <Link 
          href="/compare" 
          className="w-full py-3 bg-white/10 text-white text-center rounded-lg font-medium hover:bg-white/20 transition-colors uppercase tracking-widest text-sm"
        >
          Compare Data
        </Link>
      </div>
    </div>
  );
}
