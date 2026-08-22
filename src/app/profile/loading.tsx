'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="h-[100dvh] w-full bg-black flex flex-col items-center justify-center p-6 z-50 relative">
      <div className="flex flex-col items-center gap-8 max-w-xs w-full">
        {/* Spinner */}
        <motion.div 
          className="w-16 h-16 border-4 border-white/10 border-t-white/80 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="w-full space-y-4 text-center">
          {/* Text */}
          <motion.p 
            className="text-sm md:text-base font-bold tracking-[0.2em] uppercase text-white/90"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Loading Profile...
          </motion.p>
          
          {/* Loading Bar */}
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative">
            <motion.div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-transparent via-white to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
