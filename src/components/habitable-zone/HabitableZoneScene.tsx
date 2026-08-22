'use client';

import { useAppStore } from '@/store/useAppStore';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Sun } from '@/components/3d/Sun';
import { Orbit } from '@/components/3d/Orbit';
import { Planet } from '@/components/3d/Planet';
import { planets } from '@/data/planets';
import { Suspense } from 'react';
import * as THREE from 'three';
import { useWebGL, isMobileDevice } from '@/hooks/useWebGL';
import { WebGLFallback } from '@/components/ui/WebGLFallback';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';

function HabitableZoneRing({ tempOffset }: { tempOffset: number }) {
  const innerRadius = 8 + (tempOffset * 2); 
  const outerRadius = 14 + (tempOffset * 2);

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[innerRadius, outerRadius, 128]} />
      <meshBasicMaterial 
        color="#4cd17a" 
        transparent 
        opacity={0.15} 
        side={THREE.DoubleSide} 
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

export function HabitableZoneScene({ starTemp }: { starTemp: number }) {
  const { performanceMode } = useAppStore();
  const hasWebGL = useWebGL();
  const effectiveMode = performanceMode === 'auto' ? (isMobileDevice() ? 'low' : 'high') : performanceMode;
  const visiblePlanets = planets.filter(p => p.distance <= 15 && p.id !== 'sun');

  if (hasWebGL === false) return <WebGLFallback />;

  const starCount = effectiveMode === 'low' ? 800 : 2000;

  return (
    <ErrorBoundary>
      <Canvas 
        dpr={[1, 1.5]}
        gl={{ antialias: effectiveMode !== 'low', powerPreference: 'high-performance' }}
        camera={{ position: [0, 20, 30], fov: 45 }}
      >
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.1} />
        
        <Suspense fallback={null}>
          <Stars radius={100} depth={50} count={starCount} factor={4} saturation={0} fade speed={1} />
          
          <Sun sizeScale={1 + (starTemp * 0.2)} />
          
          {visiblePlanets.map(planet => (
            <group key={planet.id}>
              <Orbit planet={planet} />
              <Planet planet={planet} />
            </group>
          ))}

          <HabitableZoneRing tempOffset={starTemp} />
        </Suspense>
        
        <OrbitControls enablePan={true} enableZoom={true} minDistance={10} maxDistance={60} makeDefault />
      </Canvas>
    </ErrorBoundary>
  );
}
