'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { ReelData } from '@/data/reels';
import { ReelVideo } from './ReelVideo';
import { ChevronLeft, Loader2, ArrowUp, ArrowDown, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

import { useAuth } from '@clerk/nextjs';

// Helper function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function ReelsFeed() {
  const { userId } = useAuth();
  const [activeIndex, setActiveIndex] = useState(0);
  const [reels, setReels] = useState<ReelData[]>([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const getStorageKey = useCallback(() => {
    return userId ? `seenReels_${userId}` : 'seenReels_anon';
  }, [userId]);

  useEffect(() => {
    async function fetchReels() {
      const { data, error } = await supabase
        .from('reels')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching reels:', error);
      } else if (data) {
        const allReels = data as ReelData[];
        
        // Retrieve seen reels from local storage
        const storageKey = getStorageKey();
        const seenReelsRaw = localStorage.getItem(storageKey);
        let seenReels: string[] = seenReelsRaw ? JSON.parse(seenReelsRaw) : [];
        
        // Filter out seen reels
        let unseenReels = allReels.filter(reel => !seenReels.includes(reel.id));
        
        // If all reels have been seen, don't reset. Just set an empty array to show the caught up message.
        if (unseenReels.length === 0 && allReels.length > 0) {
          setReels([]);
        } else {
          // Shuffle the unseen reels
          const shuffledReels = shuffleArray(unseenReels);
          setReels(shuffledReels);
        }
      }
      setLoading(false);
    }
    
    fetchReels();
  }, [getStorageKey]);

  // Track seen reels when activeIndex changes
  useEffect(() => {
    if (reels.length > 0 && reels[activeIndex]) {
      const currentReelId = reels[activeIndex].id;
      const storageKey = getStorageKey();
      const seenReelsRaw = localStorage.getItem(storageKey);
      const seenReels: string[] = seenReelsRaw ? JSON.parse(seenReelsRaw) : [];
      
      if (!seenReels.includes(currentReelId)) {
        seenReels.push(currentReelId);
        localStorage.setItem(storageKey, JSON.stringify(seenReels));
      }
    }
  }, [activeIndex, reels, getStorageKey]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || reels.length === 0) return;

    // We use IntersectionObserver to detect which video is currently snapping into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find the index of the intersecting element
            const index = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(index)) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        root: container,
        threshold: 0.6, // Trigger when 60% of the video is visible
      }
    );

    // Observe all video children
    const children = container.querySelectorAll('.reel-item');
    children.forEach((child) => observer.observe(child));

    return () => {
      children.forEach((child) => observer.unobserve(child));
    };
  }, [reels]);

  const scrollToIndex = useCallback((index: number) => {
    if (index < 0 || index >= reels.length) return;
    const container = containerRef.current;
    if (!container) return;
    
    const children = container.querySelectorAll('.reel-item');
    const target = children[index];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }, [reels.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        scrollToIndex(activeIndex - 1);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        scrollToIndex(activeIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, scrollToIndex]);

  return (
    <div className="relative w-full h-[100dvh] bg-black overflow-hidden">
      {/* Top Navigation Overlay */}
      <div className="absolute top-0 left-0 w-full p-4 z-50 flex items-center justify-between pointer-events-auto bg-gradient-to-b from-black/80 to-transparent">
        <Link 
          href="/"
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
          <span className="text-sm uppercase tracking-widest font-semibold drop-shadow-md">Home</span>
        </Link>
        <div className="text-white font-bold tracking-widest uppercase drop-shadow-md">
          Space Reels
        </div>
      </div>

      {/* Desktop Navigation Arrows */}
      <div className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-4 z-50">
        <button 
          onClick={() => scrollToIndex(activeIndex - 1)}
          disabled={activeIndex === 0}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white backdrop-blur-md transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
        <button 
          onClick={() => scrollToIndex(activeIndex + 1)}
          disabled={activeIndex === reels.length - 1}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white backdrop-blur-md transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>

      {/* Snap Scrolling Container */}
      <div 
        ref={containerRef}
        className="w-full h-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide flex flex-col"
        style={{ scrollBehavior: 'smooth' }}
      >
        {loading ? (
          <div className="w-full h-full flex flex-col items-center justify-center text-white gap-4">
            <Loader2 className="w-8 h-8 animate-spin" />
            <p className="text-white/70 uppercase tracking-widest text-sm">Loading Transmissions...</p>
          </div>
        ) : reels.length === 0 ? (
          <div className="w-full h-full flex flex-col items-center justify-center text-white px-6 text-center space-y-6">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center border border-white/20 mb-4">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
            <h2 className="text-2xl font-bold tracking-wider">You're all caught up for today!</h2>
            <p className="text-white/70 text-lg max-w-sm leading-relaxed">
              Come back tomorrow. 10 new space reels are added daily!
            </p>
            <Link 
              href="/"
              className="mt-8 px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        ) : (
          reels.map((reel, index) => (
            <div 
              key={reel.id} 
              data-index={index}
              className="reel-item w-full h-[100dvh] flex-shrink-0 flex items-center justify-center bg-neutral-950 snap-start"
            >
              <div className="w-full h-full sm:w-auto sm:h-[90dvh] sm:aspect-[9/16] relative sm:rounded-2xl overflow-hidden sm:border sm:border-white/10 bg-black sm:shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <ReelVideo 
                  reel={reel} 
                  isActive={index === activeIndex} 
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
