'use client';

import { Stars } from '@react-three/drei';
import { useAppStore } from '@/store/useAppStore';
import { isMobileDevice } from '@/hooks/useWebGL';

export function StarField() {
  const { performanceMode } = useAppStore();
  const effectiveMode = performanceMode === 'auto' ? (isMobileDevice() ? 'low' : 'high') : performanceMode;
  const count = effectiveMode === 'low' ? 800 : 5000;

  return (
    <Stars 
      radius={100} 
      depth={50} 
      count={count} 
      factor={4} 
      saturation={0} 
      fade 
      speed={1} 
    />
  );
}
