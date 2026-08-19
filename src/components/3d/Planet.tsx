'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTexture } from '@react-three/drei';
import { PlanetData } from '@/data/planets';
import { useAppStore } from '@/store/useAppStore';
import { useAudio } from '@/hooks/useAudio';
import { isMobileDevice } from '@/hooks/useWebGL';

interface PlanetProps {
  planet: PlanetData;
  sizeScale?: number;
  distanceScale?: number;
  speedScale?: number;
}

function TexturedMaterial({ planet }: { planet: PlanetData }) {
  const texture = useTexture(planet.textureUrl!);
  return (
    <meshStandardMaterial 
      map={texture}
      roughness={0.8}
      metalness={0.2}
      color="#ffffff"
    />
  );
}

export function Planet({ planet, sizeScale = 1, distanceScale = 1, speedScale = 1 }: PlanetProps) {
  const groupRef = useRef<THREE.Group>(null);
  const planetMeshRef = useRef<THREE.Mesh>(null);
  const ringsRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { setSelectedPlanet, selectedPlanet, performanceMode, qualityMode } = useAppStore();
  const { playClick } = useAudio();

  const isSelected = selectedPlanet === planet.id;
  
  // Use qualityMode for textures and performanceMode for segments/effects
  const effectiveSegments = performanceMode === 'auto' 
    ? (isMobileDevice() ? 32 : 64) 
    : (performanceMode === 'low' ? 32 : (performanceMode === 'high' ? 128 : 64));
    
  // Override segments if high quality textures are enabled
  const segments = qualityMode === 'high' ? 128 : effectiveSegments;
  
  const currentTextureUrl = qualityMode === 'high' && planet.highResTextureUrl 
    ? planet.highResTextureUrl 
    : planet.textureUrl;

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    if (groupRef.current) {
      // Orbital rotation around the sun
      const angle = time * planet.orbitSpeed * speedScale;
      groupRef.current.position.x = Math.cos(angle) * (planet.distance * distanceScale);
      groupRef.current.position.z = Math.sin(angle) * (planet.distance * distanceScale);
    }

    if (planetMeshRef.current) {
      // Axial rotation
      planetMeshRef.current.rotation.y = time * planet.rotationSpeed * speedScale;
    }
  });

  const scaledRadius = planet.radius * sizeScale;

  return (
    <group ref={groupRef} name={planet.id}>
      <mesh 
        ref={planetMeshRef}
        onClick={(e) => {
          e.stopPropagation();
          if (!isSelected) {
            playClick();
            setSelectedPlanet(planet.id);
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
        <sphereGeometry args={[scaledRadius, segments, segments]} />
        {currentTextureUrl ? (
          <TexturedMaterial planet={{...planet, textureUrl: currentTextureUrl}} />
        ) : (
          <meshStandardMaterial 
            color={planet.color} 
            roughness={0.8}
            metalness={0.2}
          />
        )}
        
        {/* Selection Highlight */}
        {isSelected && (
          <mesh>
            <sphereGeometry args={[scaledRadius * 1.1, segments / 2, segments / 2]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.2} wireframe />
          </mesh>
        )}
      </mesh>

      {/* Optional Rings */}
      {planet.hasRings && (
        <mesh ref={ringsRef} rotation={[-Math.PI / 2 + 0.3, 0, 0]}>
          <ringGeometry args={[scaledRadius * 1.5, scaledRadius * 2.5, segments]} />
          <meshStandardMaterial 
            color={planet.color} 
            transparent 
            opacity={0.8} 
            side={THREE.DoubleSide} 
          />
        </mesh>
      )}

      {/* Atmosphere Glow */}
      {planet.atmosphereColor && performanceMode !== 'low' && (
        <mesh>
          <sphereGeometry args={[scaledRadius * 1.05, segments / 2, segments / 2]} />
          <meshStandardMaterial 
            color={planet.atmosphereColor} 
            transparent 
            opacity={0.3} 
            blending={THREE.AdditiveBlending}
            side={THREE.BackSide}
            depthWrite={false}
          />
        </mesh>
      )}
    </group>
  );
}
