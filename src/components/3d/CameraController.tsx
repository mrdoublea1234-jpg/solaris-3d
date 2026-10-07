'use client';

import { useEffect, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { CameraControls } from '@react-three/drei';
import { useAppStore } from '@/store/useAppStore';
import { planets } from '@/data/planets';
import * as THREE from 'three';

export function CameraController() {
  const controlsRef = useRef<CameraControls>(null);
  const isTransitioning = useRef(false);
  const isTrackingActive = useRef(false);
  const { selectedPlanet } = useAppStore();
  const { scene } = useThree();

  useEffect(() => {
    if (!controlsRef.current) return;

    if (selectedPlanet) {
      // Just set the flag, useFrame will handle the smooth dynamic transition
      isTransitioning.current = true;
      isTrackingActive.current = true;
    } else {
      // Reset to overview
      isTransitioning.current = false;
      isTrackingActive.current = false;
      controlsRef.current.setLookAt(
        0, 30, 40,
        0, 0, 0,
        true
      );
    }
  }, [selectedPlanet]);

  // Listen for manual user interactions to detach the camera from the planet
  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) return;

    const onControlStart = () => {
      // If the user manually drags/pans the camera, stop following the planet
      isTrackingActive.current = false;
    };

    controls.addEventListener('controlstart', onControlStart);
    return () => {
      controls.removeEventListener('controlstart', onControlStart);
    };
  }, []);

  // Handle dynamic following of the planet if selected
  useFrame((state, delta) => {
    if (selectedPlanet && controlsRef.current && isTrackingActive.current) {
      const planet = planets.find(p => p.id === selectedPlanet);
      if (planet) {
        const planetMesh = scene.getObjectByName(planet.id);
        if (planetMesh) {
          const position = new THREE.Vector3();
          planetMesh.getWorldPosition(position);
          
          // 1. Smoothly track the target (always follow the planet's movement)
          const currentTarget = new THREE.Vector3();
          controlsRef.current.getTarget(currentTarget);
          
          // Lerp target towards planet position (fast enough to keep up)
          currentTarget.lerp(position, 10 * delta); 
          controlsRef.current.setTarget(currentTarget.x, currentTarget.y, currentTarget.z, false);
          
          // 2. Smoothly zoom the camera position ONLY if we are transitioning
          if (isTransitioning.current) {
            const offset = new THREE.Vector3(planet.radius * 3, planet.radius * 1.5, planet.radius * 3);
            const idealCameraPos = position.clone().add(offset);
            
            const currentPos = new THREE.Vector3();
            controlsRef.current.getPosition(currentPos);
            
            // Lerp camera position
            currentPos.lerp(idealCameraPos, 5 * delta);
            controlsRef.current.setPosition(currentPos.x, currentPos.y, currentPos.z, false);
            
            // If we are close enough, end transition so user can orbit manually
            if (currentPos.distanceTo(idealCameraPos) < 0.5) {
              isTransitioning.current = false;
            }
          }
        }
      }
    }
  });

  return (
    <CameraControls 
      ref={controlsRef} 
      makeDefault 
      minDistance={2}
      maxDistance={100}
    />
  );
}
