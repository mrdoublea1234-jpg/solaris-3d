'use client';

import { ReelVideo } from '@/components/reels/ReelVideo';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ReelData } from '@/data/reels';

export function SingleReelClient({ reel }: { reel: ReelData }) {
  const router = useRouter();
  
  return (
    <div className="relative w-full h-[100dvh] bg-black overflow-hidden flex items-center justify-center">
      {/* Top Navigation Overlay */}
      <div className="absolute top-0 left-0 w-full p-4 z-50 flex items-center justify-between pointer-events-auto bg-gradient-to-b from-black/80 to-transparent">
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
          <span className="text-sm uppercase tracking-widest font-semibold drop-shadow-md">Back</span>
        </button>
        <div className="text-white font-bold tracking-widest uppercase drop-shadow-md">
          Reel
        </div>
      </div>
      
      <div className="w-full h-full sm:w-auto sm:h-[90dvh] sm:aspect-[9/16] relative sm:rounded-2xl overflow-hidden sm:border sm:border-white/10 bg-black sm:shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        <ReelVideo reel={reel} isActive={true} preventViewCount={true} />
      </div>
    </div>
  );
}
