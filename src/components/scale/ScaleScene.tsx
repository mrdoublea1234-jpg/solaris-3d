'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { planets } from '@/data/planets';
import { Planet } from '@/components/3d/Planet';
import { Sun } from '@/components/3d/Sun';
import { Orbit } from '@/components/3d/Orbit';
import { useAppStore } from '@/store/useAppStore';
import { Suspense } from 'react';
import { useWebGL, isMobileDevice } from '@/hooks/useWebGL';
import { WebGLFallback } from '@/components/ui/WebGLFallback';

interface ScaleSceneProps {
  sizeScale: number;
  distanceScale: number;
  speedScale: number;
  mode: 'visual' | 'scientific';
}

export function ScaleScene({ sizeScale, distanceScale, speedScale, mode }: ScaleSceneProps) {
  const hasWebGL = useWebGL();
  const { performanceMode } = useAppStore();
  const effectiveMode = performanceMode === 'auto' ? (isMobileDevice() ? 'low' : 'high') : performanceMode;

  if (hasWebGL === false) return <WebGLFallback />;
  if (hasWebGL === null) return null;

  const starCount = effectiveMode === 'low' ? 800 : 3000;
  const maxCameraDist = mode === 'scientific' ? 500 : 150;

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing bg-black">
      <Canvas 
        dpr={[1, 1.5]}
        gl={{ antialias: effectiveMode !== 'low', powerPreference: 'high-performance' }}
        camera={{ position: [0, 20, 60], fov: 45 }}
      >
        <color attach="background" args={['#000000']} />
        
        <ambientLight intensity={0.1} />
        <Suspense fallback={null}>
          <Stars radius={150} depth={50} count={starCount} factor={4} saturation={0} fade speed={1} />
          
          <group>
            <Sun sizeScale={sizeScale} />
            
            {planets.filter(p => p.id !== 'sun').map((planet) => (
              <group key={planet.id}>
                <Orbit planet={planet} distanceScale={distanceScale} />
                <Planet 
                  planet={planet} 
                  sizeScale={sizeScale} 
                  distanceScale={distanceScale} 
                  speedScale={speedScale} 
                />
              </group>
            ))}
          </group>
        </Suspense>

        <OrbitControls 
          enablePan={true} 
          enableZoom={true} 
          minDistance={10} 
          maxDistance={maxCameraDist}
          makeDefault
        />
      </Canvas>
    </div>
  );
}
