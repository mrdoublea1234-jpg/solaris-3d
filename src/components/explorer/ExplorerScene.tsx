'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, useTexture } from '@react-three/drei';
import { PlanetData } from '@/data/planets';
import * as THREE from 'three';
import { useRef, Suspense } from 'react';
import { useWebGL, isMobileDevice } from '@/hooks/useWebGL';
import { WebGLFallback } from '@/components/ui/WebGLFallback';
import { useAppStore } from '@/store/useAppStore';

interface IsolatedBodyProps {
  planet: PlanetData;
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

function IsolatedBody({ planet }: IsolatedBodyProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringsRef = useRef<THREE.Mesh>(null);
  const { performanceMode, qualityMode } = useAppStore();
  
  const effectiveMode = performanceMode === 'auto' ? (isMobileDevice() ? 'low' : 'high') : performanceMode;
  const segments = qualityMode === 'high' ? 128 : (effectiveMode === 'low' ? 32 : 64);
  
  const currentTextureUrl = qualityMode === 'high' && planet.highResTextureUrl 
    ? planet.highResTextureUrl 
    : planet.textureUrl;

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += planet.rotationSpeed * delta * 60;
    }
  });

  if (planet.id === 'sun') {
    return (
      <mesh ref={meshRef}>
        <sphereGeometry args={[planet.radius, segments, segments]} />
        {currentTextureUrl ? (
          <SunTexturedMaterial planet={planet} textureUrl={currentTextureUrl} />
        ) : (
          <meshBasicMaterial color="#ffcc00" />
        )}
        <mesh>
          <sphereGeometry args={[planet.radius * 1.1, 32, 32]} />
          <meshBasicMaterial color="#ff9900" transparent opacity={0.3} blending={THREE.AdditiveBlending} depthWrite={false} />
        </mesh>
        <pointLight intensity={2} distance={50} color="#ffffff" />
      </mesh>
    );
  }

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[planet.radius, segments, segments]} />
        {currentTextureUrl ? (
          <TexturedMaterial planet={planet} textureUrl={currentTextureUrl} />
        ) : (
          <meshStandardMaterial
            color={planet.color}
            roughness={0.8}
            metalness={0.2}
          />
        )}
      </mesh>

      {planet.hasRings && (
        <mesh ref={ringsRef} rotation={[-Math.PI / 2 + 0.3, 0, 0]}>
          <ringGeometry args={[planet.radius * 1.5, planet.radius * 2.5, 64]} />
          <meshStandardMaterial
            color={planet.color}
            transparent
            opacity={0.8}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}

      {planet.atmosphereColor && (
        <mesh>
          <sphereGeometry args={[planet.radius * 1.05, segments / 2, segments / 2]} />
          <meshStandardMaterial
            color={planet.atmosphereColor}
            transparent
            opacity={0.3}
            blending={THREE.AdditiveBlending}
            side={THREE.BackSide}
          />
        </mesh>
      )}
    </group>
  );
}

export function ExplorerScene({ planet }: { planet: PlanetData }) {
  const cameraDistance = planet.radius * 3.5;
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
        camera={{ position: [0, 0, cameraDistance], fov: 45 }}
      >
        <color attach="background" args={['#000000']} />

        {planet.id !== 'sun' && (
          <>
            <ambientLight intensity={0.2} />
            <directionalLight position={[5, 3, 5]} intensity={1.5} color="#ffffff" />
            <directionalLight position={[-5, -3, -5]} intensity={0.2} color="#ffffff" />
          </>
        )}

        <Suspense fallback={null}>
          <Stars radius={100} depth={50} count={starCount} factor={4} saturation={0} fade speed={1} />
          <IsolatedBody planet={planet} />
        </Suspense>

        <OrbitControls enablePan={false} enableZoom={true} minDistance={planet.radius * 1.5} maxDistance={planet.radius * 10} />
      </Canvas>
    </div>
  );
}
