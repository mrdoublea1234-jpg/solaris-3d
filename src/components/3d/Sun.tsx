'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTexture } from '@react-three/drei';
import { useAppStore } from '@/store/useAppStore';
import { useAudio } from '@/hooks/useAudio';
import { isMobileDevice } from '@/hooks/useWebGL';

interface SunProps {
  sizeScale?: number;
}

function SunTexturedMaterial({ textureUrl }: { textureUrl: string }) {
  const texture = useTexture(textureUrl);
  return <meshBasicMaterial map={texture} color="#ffffff" />;
}

export function Sun({ sizeScale = 1 }: SunProps) {
  const sunRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { performanceMode, qualityMode, setSelectedPlanet, selectedPlanet } = useAppStore();
  const { playClick } = useAudio();
  const isSelected = selectedPlanet === 'sun';

  const effectiveMode = performanceMode === 'auto' ? (isMobileDevice() ? 'low' : 'high') : performanceMode;
  const segments = qualityMode === 'high' ? 128 : (effectiveMode === 'low' ? 32 : 64);
  const currentTextureUrl = qualityMode === 'high' ? '/textures/high-res/sun.jpg' : '/textures/sun.jpg';

  useFrame((state) => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh 
      ref={sunRef}
      name="sun"
      onClick={(e) => {
        e.stopPropagation();
        if (!isSelected) {
          playClick();
          setSelectedPlanet('sun');
        }
      }}
      onPointerOver={() => {
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'default';
      }}
    >
      <sphereGeometry args={[3 * sizeScale, segments, segments]} />
      <SunTexturedMaterial textureUrl={currentTextureUrl} />
      
      {/* Selection Highlight */}
      {isSelected && (
        <mesh>
          <sphereGeometry args={[3 * sizeScale * 1.1, segments / 2, segments / 2]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.2} wireframe />
        </mesh>
      )}

      {/* Sun Glow */}
      {effectiveMode !== 'low' && (
        <>
          <mesh>
            <sphereGeometry args={[3.2 * sizeScale, segments / 2, segments / 2]} />
            <meshBasicMaterial color="#ff9900" transparent opacity={0.3} blending={THREE.AdditiveBlending} depthWrite={false} />
          </mesh>
          <mesh>
            <sphereGeometry args={[3.5 * sizeScale, segments / 2, segments / 2]} />
            <meshBasicMaterial color="#ff3300" transparent opacity={0.1} blending={THREE.AdditiveBlending} depthWrite={false} />
          </mesh>
        </>
      )}
      <pointLight intensity={1000} distance={500} color="#ffffff" />
    </mesh>
  );
}
