'use client';

import { Canvas } from '@react-three/fiber';
import { SolarSystem } from './SolarSystem';
import { StarField } from './StarField';
import { CameraController } from './CameraController';

import { useWebGL, isMobileDevice } from '@/hooks/useWebGL';
import { WebGLFallback } from '@/components/ui/WebGLFallback';
import { useAppStore } from '@/store/useAppStore';
import { Suspense } from 'react';

import { ErrorBoundary } from '@/components/ui/ErrorBoundary';

export function Scene() {
  const hasWebGL = useWebGL();
  const { performanceMode } = useAppStore();
  const effectiveMode = performanceMode === 'auto' ? (isMobileDevice() ? 'low' : 'high') : performanceMode;

  if (hasWebGL === false) return <WebGLFallback />;

  return (
    <div className="absolute inset-0 bg-black">
      <ErrorBoundary>
        <Canvas 
          dpr={[1, 1.5]}
          gl={{ antialias: effectiveMode !== 'low', powerPreference: 'high-performance' }}
          camera={{ position: [0, 30, 40], fov: 45 }}
        >
          <color attach="background" args={['#000005']} />
          
          <ambientLight intensity={0.1} />
          
          <Suspense fallback={null}>
            <StarField />
            <SolarSystem />
          </Suspense>
          
          <CameraController />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}
