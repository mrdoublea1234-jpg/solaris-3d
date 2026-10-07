'use client';

import * as THREE from 'three';
import { PlanetData } from '@/data/planets';

interface OrbitProps {
  planet: PlanetData;
  distanceScale?: number;
}

export function Orbit({ planet, distanceScale = 1 }: OrbitProps) {
  const scaledRadius = planet.distance * distanceScale;
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[scaledRadius, scaledRadius + 0.05, 128]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.15} side={THREE.DoubleSide} />
    </mesh>
  );
}
