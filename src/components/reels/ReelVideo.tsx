'use client';

import { useRef, useEffect, useState } from 'react';
import { Heart, MessageCircle, Share2, Music, Volume2, VolumeX, Play, Bookmark } from 'lucide-react';
import { ReelData } from '@/data/reels';
import { useReelInteractions } from '@/hooks/useReelInteractions';
import { useRouter } from 'next/navigation';

interface ReelVideoProps {
  reel: ReelData;
  isActive: boolean;
  preventViewCount?: boolean;
}

export function ReelVideo({ reel, isActive, preventViewCount }: ReelVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  
  const router = useRouter();
  const { likesCount, commentsCount, isLiked, isSaved, toggleLike, toggleSave, incrementView } = useReelInteractions(reel.id);

  useEffect(() => {
    let viewTimer: NodeJS.Timeout;
    if (isActive) {
      // Auto-play when active
      videoRef.current?.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        // Autoplay may be blocked by browser policy without interaction
        console.warn('Autoplay prevented:', err);
        setIsPlaying(false);
      });
      
      // Increment view count after 2 seconds of watch time if not prevented
      if (!preventViewCount) {
        viewTimer = setTimeout(() => {
          incrementView();
        }, 2000);
      }
    } else {
      // Pause when out of view
      videoRef.current?.pause();
      if (videoRef.current) {
        videoRef.current.currentTime = 0; // Optional: reset to start
      }
      setIsPlaying(false);
    }
    
    return () => clearTimeout(viewTimer);
  }, [isActive, incrementView, preventViewCount]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  const handleLike = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const success = await toggleLike();
    if (!success) {
      router.push('/sign-in');
    }
  };

  const handleSave = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const success = await toggleSave();
    if (!success) {
      router.push('/sign-in');
    }
  };

  return (
    <div className="relative w-full h-full snap-start bg-black overflow-hidden flex justify-center items-center">
      {/* Video Element */}
      <video
        ref={videoRef}
        src={reel.video_url}
        loop
        muted={isMuted}
        playsInline
        className="absolute inset-0 w-full h-full object-cover cursor-pointer"
        onClick={togglePlay}
      />

      {/* Play/Pause Overlay Icon */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="w-16 h-16 bg-black/40 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Play className="w-8 h-8 text-white ml-1" />
          </div>
        </div>
      )}

      {/* Top Header / Mute Button */}
      <div className="absolute top-20 right-4 z-20">
        <button 
          onClick={toggleMute}
          className="w-10 h-10 bg-black/40 rounded-full flex items-center justify-center backdrop-blur-md text-white border border-white/10"
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>

      {/* Right Side Action Buttons */}
      <div className="absolute right-4 bottom-24 z-20 flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-1 group">
          <button 
            onClick={handleLike}
            className={`w-12 h-12 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-md border border-white/10 transition-transform active:scale-90 ${isLiked ? 'text-pink-500' : 'text-white'}`}
          >
            <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
          </button>
          <span className="text-white text-xs font-semibold drop-shadow-md">
            {likesCount.toLocaleString()}
          </span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <button className="w-12 h-12 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-md text-white border border-white/10 transition-transform active:scale-90">
            <MessageCircle className="w-6 h-6" />
          </button>
          <span className="text-white text-xs font-semibold drop-shadow-md">{commentsCount.toLocaleString()}</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <button className="w-12 h-12 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-md text-white border border-white/10 transition-transform active:scale-90">
            <Share2 className="w-6 h-6" />
          </button>
          <span className="text-white text-xs font-semibold drop-shadow-md">Share</span>
        </div>

        <div className="flex flex-col items-center gap-1 group">
          <button 
            onClick={handleSave}
            className={`w-12 h-12 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-md border border-white/10 transition-transform active:scale-90 ${isSaved ? 'text-blue-400' : 'text-white'}`}
          >
            <Bookmark className={`w-6 h-6 ${isSaved ? 'fill-current' : ''}`} />
          </button>
          <span className="text-white text-xs font-semibold drop-shadow-md">Save</span>
        </div>
      </div>

      {/* Bottom Info Section */}
      <div className="absolute bottom-0 left-0 w-full p-4 pt-16 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 pointer-events-none">
        <h2 className="text-white text-lg font-bold mb-1">{reel.title}</h2>
        <p className="text-white/80 text-sm mb-4 max-w-[80%] line-clamp-2">
          {reel.description}
        </p>
        
        <div className="flex items-center gap-2 bg-white/10 w-fit px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
          <Music className="w-4 h-4 text-white" />
          <div className="w-32 overflow-hidden relative">
            <div className="animate-marquee whitespace-nowrap text-xs text-white">
              Original Audio - Solaris 3D Explorer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
