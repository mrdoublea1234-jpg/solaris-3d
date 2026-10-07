'use client';

import { useMemo } from 'react';
import * as THREE from 'three';

let generatedRingTexture: THREE.CanvasTexture | null = null;

export function getGeneratedRingTexture() {
  if (typeof document === 'undefined') return null;
  if (generatedRingTexture) return generatedRingTexture;
  
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const context = canvas.getContext('2d');
  if (!context) return null;

  const centerX = 256;
  const centerY = 256;
  const gradient = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, 256);
  
  gradient.addColorStop(0.0, 'rgba(0,0,0,0)');
  gradient.addColorStop(0.57, 'rgba(0,0,0,0)');
  gradient.addColorStop(0.571, 'rgba(170, 150, 120, 0.1)');
  gradient.addColorStop(0.65, 'rgba(170, 150, 120, 0.4)');
  gradient.addColorStop(0.651, 'rgba(210, 190, 150, 0.9)');
  gradient.addColorStop(0.80, 'rgba(190, 170, 130, 0.9)');
  gradient.addColorStop(0.801, 'rgba(0, 0, 0, 0.0)');
  gradient.addColorStop(0.829, 'rgba(0, 0, 0, 0.0)');
  gradient.addColorStop(0.83, 'rgba(190, 170, 130, 0.7)');
  gradient.addColorStop(0.97, 'rgba(170, 150, 120, 0.4)');
  gradient.addColorStop(0.98, 'rgba(0,0,0,0)');
  gradient.addColorStop(1.0, 'rgba(0,0,0,0)');
  
  context.fillStyle = gradient;
  context.fillRect(0, 0, 512, 512);
  
  generatedRingTexture = new THREE.CanvasTexture(canvas);
  return generatedRingTexture;
}

export function GeneratedRingMaterial() {
  const texture = useMemo(() => getGeneratedRingTexture(), []);

  return (
    <meshStandardMaterial 
      map={texture || undefined}
      color="#ffffff"
      transparent 
      opacity={1.0} 
      side={THREE.DoubleSide} 
    />
  );
}
