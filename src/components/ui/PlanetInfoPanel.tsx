'use client';

import { useAppStore } from '@/store/useAppStore';
import { planets } from '@/data/planets';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';
import { useAudio } from '@/hooks/useAudio';

export function PlanetInfoPanel() {
  const { selectedPlanet, language, setSelectedPlanet } = useAppStore();
  const { playExplore } = useAudio();

  const planet = planets.find((p) => p.id === selectedPlanet);

  return (
    <AnimatePresence>
      {planet && (
        <>
          {/* Desktop Full Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50, transition: { duration: 0.2 } }}
            className="hidden md:block fixed top-24 right-8 z-40 p-6 w-80 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 text-white shadow-2xl pointer-events-auto"
          >
            <button 
              onClick={() => setSelectedPlanet(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            
            <h2 className="text-3xl font-light mb-1">
              {planet.name[language]}
            </h2>
            
            <div className="w-12 h-[1px] bg-white/30 my-4" />
            
            <p className="text-sm text-white/70 leading-relaxed font-light mb-6">
              {planet.description[language]}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                <div className="text-[10px] uppercase tracking-wider text-white/40 mb-1">Radius</div>
                <div className="text-lg font-medium">{planet.radius.toFixed(1)} u</div>
              </div>
              <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                <div className="text-[10px] uppercase tracking-wider text-white/40 mb-1">Distance</div>
                <div className="text-lg font-medium">{planet.distance.toFixed(1)} u</div>
              </div>
            </div>
            
            <Link 
              href={`/planets/${planet.id}`}
              onClick={playExplore}
              className="block w-full py-3 bg-white text-black text-center font-medium rounded-lg hover:bg-white/90 transition-colors uppercase tracking-widest text-xs"
            >
              {language === 'en' ? `Explore ${planet.name.en}` : language === 'hi' ? `${planet.name.hi} के बारे में जानें` : `${planet.name.bn} অন্বেষণ করুন`}
            </Link>
          </motion.div>

          {/* Mobile Minimal Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="md:hidden fixed top-[100px] right-4 z-40 pointer-events-auto flex items-center gap-2"
          >
            <Link 
              href={`/planets/${planet.id}`}
              onClick={playExplore}
              className="py-2.5 px-6 bg-white/10 backdrop-blur-md border border-white/20 text-white text-center font-medium rounded-full hover:bg-white/20 transition-colors uppercase tracking-widest text-[11px]"
            >
              {language === 'en' ? 'Explore' : language === 'hi' ? 'खोजें' : 'অন্বেষণ করুন'}
            </Link>
            <button 
              onClick={() => setSelectedPlanet(null)}
              className="p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
