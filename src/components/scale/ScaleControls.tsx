'use client';

import { useAppStore } from '@/store/useAppStore';

interface ScaleControlsProps {
  sizeScale: number;
  setSizeScale: (v: number) => void;
  distanceScale: number;
  setDistanceScale: (v: number) => void;
  speedScale: number;
  setSpeedScale: (v: number) => void;
  mode: 'visual' | 'scientific';
  setMode: (mode: 'visual' | 'scientific') => void;
}

export function ScaleControls({
  sizeScale, setSizeScale,
  distanceScale, setDistanceScale,
  speedScale, setSpeedScale,
  mode, setMode
}: ScaleControlsProps) {
  const { language } = useAppStore();

  const handleModeChange = (newMode: 'visual' | 'scientific') => {
    setMode(newMode);
    if (newMode === 'visual') {
      setSizeScale(1);
      setDistanceScale(1);
      setSpeedScale(1);
    } else {
      // In scientific mode, planets are tiny compared to distances.
      setSizeScale(0.1);
      setDistanceScale(3);
      setSpeedScale(0.5);
    }
  };

  return (
    <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-3 md:p-4 w-full md:w-80">
      
      <div className="flex gap-2 mb-4 md:mb-6 bg-white/5 p-1 rounded-lg">
        <button
          onClick={() => handleModeChange('visual')}
          className={`flex-1 py-1.5 text-xs font-medium uppercase tracking-widest rounded transition-colors ${mode === 'visual' ? 'bg-white text-black' : 'text-white/50 hover:text-white'}`}
        >
          Visual
        </button>
        <button
          onClick={() => handleModeChange('scientific')}
          className={`flex-1 py-1.5 text-xs font-medium uppercase tracking-widest rounded transition-colors ${mode === 'scientific' ? 'bg-white text-black' : 'text-white/50 hover:text-white'}`}
        >
          Scientific
        </button>
      </div>

      <div className="space-y-3 md:space-y-4">
        {/* Planet Size */}
        <div>
          <div className="flex justify-between text-xs text-white/70 mb-2">
            <span>Planet Size</span>
            <span>{sizeScale.toFixed(2)}x</span>
          </div>
          <input 
            type="range" 
            min="0.05" max="3" step="0.05"
            value={sizeScale}
            onChange={(e) => setSizeScale(parseFloat(e.target.value))}
            className="w-full accent-white h-1 bg-white/20 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Distance Scale */}
        <div>
          <div className="flex justify-between text-xs text-white/70 mb-2">
            <span>Orbit Distance</span>
            <span>{distanceScale.toFixed(2)}x</span>
          </div>
          <input 
            type="range" 
            min="0.1" max="5" step="0.1"
            value={distanceScale}
            onChange={(e) => setDistanceScale(parseFloat(e.target.value))}
            className="w-full accent-white h-1 bg-white/20 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Speed Scale */}
        <div>
          <div className="flex justify-between text-xs text-white/70 mb-2">
            <span>Orbit Speed</span>
            <span>{speedScale.toFixed(2)}x</span>
          </div>
          <input 
            type="range" 
            min="0" max="5" step="0.1"
            value={speedScale}
            onChange={(e) => setSpeedScale(parseFloat(e.target.value))}
            className="w-full accent-white h-1 bg-white/20 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      {mode === 'scientific' && (
        <div className="mt-3 md:mt-4 p-2 md:p-3 bg-blue-900/20 border border-blue-500/20 rounded-lg text-blue-200 text-[10px] md:text-xs leading-relaxed">
          <strong>Note:</strong> In reality, distances are so vast that if planets were drawn to true scale, they would be invisible dots.
        </div>
      )}
    </div>
  );
}
