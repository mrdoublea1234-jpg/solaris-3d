'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, useTexture, useGLTF } from '@react-three/drei';
import { ExoplanetData } from '@/data/exoplanets';
import * as THREE from 'three';
import { useRef, Suspense } from 'react';
import { useWebGL, isMobileDevice } from '@/hooks/useWebGL';
import { WebGLFallback } from '@/components/ui/WebGLFallback';
import { useAppStore } from '@/store/useAppStore';

function TexturedMaterial({ textureUrl }: { textureUrl: string }) {
  const texture = useTexture(textureUrl);
  return <meshBasicMaterial map={texture} color="#ffffff" />;
}

function IsolatedBody({ planet, interactingRef }: { planet: ExoplanetData, interactingRef: React.MutableRefObject<boolean> }) {
  const meshRef = useRef<THREE.Group>(null);
  const { performanceMode, qualityMode } = useAppStore();
  
  const effectiveMode = performanceMode === 'auto' ? (isMobileDevice() ? 'low' : 'high') : performanceMode;
  const segments = qualityMode === 'high' ? 128 : (effectiveMode === 'low' ? 32 : 64);

  useFrame((_, delta) => {
    if (meshRef.current && !interactingRef.current) {
      // 10 multiplier instead of 60 for slower, more majestic rotation
      meshRef.current.rotation.y += 0.05 * delta * 10; 
    }
  });

  if (planet.modelType === 'texture') {
    return (
      <group ref={meshRef}>
        <mesh>
          <sphereGeometry args={[planet.radius, segments, segments]} />
          <TexturedMaterial textureUrl={planet.modelPath} />
          
          {planet.type === 'Star' && (
            <mesh>
              <sphereGeometry args={[planet.radius * 1.1, 32, 32]} />
              <meshBasicMaterial 
                color={planet.color || "#ff9900"} 
                transparent 
                opacity={0.3} 
                blending={THREE.AdditiveBlending} 
                depthWrite={false} 
              />
              <pointLight intensity={2} distance={100} color={planet.color || "#ffffff"} />
            </mesh>
          )}
        </mesh>
      </group>
    );
  }

  // GLB Model
  return (
    <group ref={meshRef}>
      <GLBModel url={planet.modelPath} scale={planet.radius} />
    </group>
  );
}

import { useLayoutEffect } from 'react';

function GLBModel({ url, scale }: { url: string, scale: number }) {
  const { scene } = useGLTF(url);
  
  useLayoutEffect(() => {
    // Automatically center the model and scale it to fit within a 1x1x1 bounding box
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    
    // Scale down to a unit size (1) then multiply by our desired scale
    const targetScale = (1 / maxDim) * (scale * 2); // * 2 because radius to diameter
    scene.scale.setScalar(targetScale);
    
    // Center it
    box.setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    scene.position.sub(center);

    // Fix materials that might be too metallic (which makes them gray without environment)
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          // If the material is standard, lower metalness to ensure it's visible even without strong environment
          if ((mesh.material as THREE.MeshStandardMaterial).metalness !== undefined) {
             (mesh.material as THREE.MeshStandardMaterial).metalness = 0.1;
             (mesh.material as THREE.MeshStandardMaterial).needsUpdate = true;
          }
        }
      }
    });
  }, [scene, scale]);

  return (
    <>
      <primitive object={scene} />
    </>
  );
}

export function ExoplanetScene({ planet }: { planet: ExoplanetData }) {
  const cameraDistance = planet.radius * (planet.type === 'Star' ? 4.5 : 3.5);
  const hasWebGL = useWebGL();
  const { performanceMode } = useAppStore();
  const effectiveMode = performanceMode === 'auto' ? (isMobileDevice() ? 'low' : 'high') : performanceMode;
  const interactingRef = useRef(false);

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

        {planet.type !== 'Star' && (
          <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 3, 5]} intensity={2.5} color="#ffffff" />
            <directionalLight position={[-5, -3, -5]} intensity={0.5} color="#ffffff" />
          </>
        )}

        <Suspense fallback={null}>
          <Stars radius={100} depth={50} count={starCount} factor={4} saturation={0} fade speed={1} />
          <IsolatedBody planet={planet} interactingRef={interactingRef} />
        </Suspense>

        <OrbitControls 
          enablePan={false} 
          enableZoom={true} 
          minDistance={planet.radius * 1.5} 
          maxDistance={planet.radius * 10}
          onStart={() => { interactingRef.current = true; }}
          onEnd={() => { interactingRef.current = false; }}
        />
      </Canvas>
    </div>
  );
}
