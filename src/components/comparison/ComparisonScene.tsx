'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, useTexture } from '@react-three/drei';
import { planets, PlanetData } from '@/data/planets';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';
import { useWebGL, isMobileDevice } from '@/hooks/useWebGL';
import { WebGLFallback } from '@/components/ui/WebGLFallback';
import { useAppStore } from '@/store/useAppStore';

interface SceneProps {
  selectedIds: string[];
}

function TexturedMaterial({ planet, textureUrl }: { planet: PlanetData; textureUrl: string }) {
  const texture = useTexture(textureUrl);
  return (
    <meshStandardMaterial 
      map={texture}
      roughness={0.8}
      metalness={0.2}
      color="#ffffff"
    />
  );
}

function SunTexturedMaterial({ planet, textureUrl }: { planet: PlanetData; textureUrl: string }) {
  const texture = useTexture(textureUrl);
  return <meshBasicMaterial map={texture} color="#ffffff" />;
}

function IsolatedPlanet({ planet, position }: { planet: PlanetData; position: [number, number, number] }) {
  const meshRef = useRef<THREE.Group>(null);
  const planetMeshRef = useRef<THREE.Mesh>(null);
  const { performanceMode, qualityMode } = useAppStore();

  const effectiveMode = performanceMode === 'auto' ? (isMobileDevice() ? 'low' : 'high') : performanceMode;
  const segments = qualityMode === 'high' ? 128 : (effectiveMode === 'low' ? 32 : 64);
  
  const currentTextureUrl = qualityMode === 'high' && planet.highResTextureUrl 
    ? planet.highResTextureUrl 
    : planet.textureUrl;

  useFrame((_, delta) => {
    if (planetMeshRef.current) {
      // Slower rotation for compare view
      planetMeshRef.current.rotation.y += planet.rotationSpeed * delta * 20;
    }
  });

  return (
    <group position={position} ref={meshRef}>
      {planet.id === 'sun' ? (
        <mesh ref={planetMeshRef as any}>
          <sphereGeometry args={[2.5, segments, segments]} />
          {currentTextureUrl ? (
            <SunTexturedMaterial planet={planet} textureUrl={currentTextureUrl} />
          ) : (
            <meshBasicMaterial color="#ffcc00" />
          )}
        </mesh>
      ) : (
        <mesh ref={planetMeshRef}>
          <sphereGeometry args={[2, segments, segments]} />
          {currentTextureUrl ? (
            <TexturedMaterial planet={planet} textureUrl={currentTextureUrl} />
          ) : (
            <meshStandardMaterial color={planet.color} roughness={0.8} metalness={0.2} />
          )}
          
          {planet.hasRings && (
            <mesh rotation={[-Math.PI / 2 + 0.3, 0, 0]}>
              <ringGeometry args={[2.5, 4.0, 64]} />
              <meshStandardMaterial color={planet.color} transparent opacity={0.8} side={THREE.DoubleSide} />
            </mesh>
          )}

          {planet.atmosphereColor && (
            <mesh>
              <sphereGeometry args={[2.1, segments / 2, segments / 2]} />
              <meshStandardMaterial color={planet.atmosphereColor} transparent opacity={0.3} blending={THREE.AdditiveBlending} side={THREE.BackSide} depthWrite={false} />
            </mesh>
          )}
        </mesh>
      )}
    </group>
  );
}

export function ComparisonScene({ selectedIds }: SceneProps) {
  const selectedPlanets = selectedIds.map(id => planets.find(p => p.id === id)!).filter(Boolean);
  
  const count = selectedPlanets.length;
  const spacing = 6;
  const startX = -((count - 1) * spacing) / 2;

  const hasWebGL = useWebGL();
  const { performanceMode } = useAppStore();
  const effectiveMode = performanceMode === 'auto' ? (isMobileDevice() ? 'low' : 'high') : performanceMode;

  if (hasWebGL === false) return <WebGLFallback />;
  if (hasWebGL === null) return null;

  const starCount = effectiveMode === 'low' ? 800 : 3000;

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas 
        dpr={[1, 1.5]}
        gl={{ antialias: effectiveMode !== 'low', powerPreference: 'high-performance' }}
        camera={{ position: [0, 2, 25], fov: 45 }}
      >
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 3, 5]} intensity={1.5} color="#ffffff" />
        
        <Suspense fallback={null}>
          <Stars radius={100} depth={50} count={starCount} factor={4} saturation={0} fade speed={1} />
          
          {selectedPlanets.map((planet, idx) => (
            <IsolatedPlanet 
              key={planet.id} 
              planet={planet} 
              position={[startX + (idx * spacing), 0, 0]} 
            />
          ))}
        </Suspense>

        <OrbitControls enablePan={true} enableZoom={true} minDistance={5} maxDistance={50} />
      </Canvas>
    </div>
  );
}
