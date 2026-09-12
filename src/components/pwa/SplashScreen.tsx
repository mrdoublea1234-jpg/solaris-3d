'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  isStandalone: boolean;
}

export function SplashScreen({ isStandalone }: SplashScreenProps) {
  const [showSplash, setShowSplash] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Only show the splash screen on the very first load in standalone mode
    if (isStandalone && !sessionStorage.getItem('splash_shown')) {
      setShowSplash(true);
      sessionStorage.setItem('splash_shown', 'true');
      
      // Simulate loading progress
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + Math.floor(Math.random() * 15) + 5;
        });
      }, 200);

      // Hide splash screen after 2.5 seconds
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 2500);

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }
  }, [isStandalone]);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center pointer-events-auto"
        >
          {/* Logo Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="flex flex-col items-center"
          >
            <img 
              src="/logo-192.png" 
              srcSet="/logo-192.png 192w, /logo-512.png 512w"
              sizes="(max-width: 768px) 160px, 288px"
              alt="Solaris 3D" 
              className="w-40 h-40 md:w-72 md:h-72 mb-8 object-cover" 
            />
            
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold tracking-[0.3em] uppercase text-white mb-2">
              Solaris
            </h1>
            <p className="text-white/50 text-xs tracking-[0.4em] uppercase mb-16">
              Interactive 3D
            </p>
            
            {/* Loading Bar */}
            <div className="w-48 md:w-64 h-1.5 bg-white/10 rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute top-0 left-0 bottom-0 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2, ease: "linear" }}
              />
            </div>
            <p className="text-[10px] text-white/40 mt-3 font-mono">
              INITIALIZING ENGINE... {Math.min(progress, 100)}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
