'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, useTexture, useGLTF } from '@react-three/drei';
import { ExoplanetData } from '@/data/exoplanets';
import * as THREE from 'three';
import { useRef, Suspense } from 'react';
import { useWebGL, isMobileDevice } from '@/hooks/useWebGL';
import { WebGLFallback } from '@/components/ui/WebGLFallback';
import { useAppStore } from '@/store/useAppStore';

function TexturedMaterial({ textureUrl, isStar }: { textureUrl: string, isStar: boolean }) {
  const texture = useTexture(textureUrl);
  texture.colorSpace = THREE.SRGBColorSpace;
  
  if (isStar) {
    return <meshBasicMaterial map={texture} color="#ffffff" />;
  }
  return <meshStandardMaterial map={texture} roughness={0.8} metalness={0.1} />;
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
          <TexturedMaterial textureUrl={planet.modelPath} isStar={planet.type === 'Star'} />
          
          {planet.type === 'Star' && planet.color && (
            <mesh>
              <sphereGeometry args={[planet.radius * 1.1, 32, 32]} />
              <meshBasicMaterial 
                color={planet.color} 
                transparent 
                opacity={0.3} 
                blending={THREE.AdditiveBlending} 
                depthWrite={false} 
              />
              <pointLight intensity={2} distance={100} color={planet.color} />
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

import { useMemo } from 'react';

function GLBModel({ url, scale }: { url: string, scale: number }) {
  const { scene: originalScene } = useGLTF(url);
  
  const scene = useMemo(() => {
    const cloned = originalScene.clone();
    
    // Reset any previous transformations just in case
    cloned.scale.set(1, 1, 1);
    cloned.position.set(0, 0, 0);
    
    // Automatically center the model and scale it to fit within a 1x1x1 bounding box
    const box = new THREE.Box3().setFromObject(cloned);
    const size = box.getSize(new THREE.Vector3());
    // Fallback to 1 if maxDim is 0 to avoid Infinity
    const maxDim = Math.max(size.x, size.y, size.z) || 1; 
    
    // Scale down to a unit size (1) then multiply by our desired scale
    const targetScale = (1 / maxDim) * (scale * 2); // * 2 because radius to diameter
    cloned.scale.setScalar(targetScale);
    
    // Center it
    box.setFromObject(cloned);
    const center = box.getCenter(new THREE.Vector3());
    cloned.position.sub(center);

    // Fix materials that might be too metallic (which makes them gray without environment)
    cloned.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          // Clone the material so we don't mutate the cached global material
          mesh.material = (mesh.material as THREE.Material).clone();
          if ((mesh.material as THREE.MeshStandardMaterial).metalness !== undefined) {
             (mesh.material as THREE.MeshStandardMaterial).metalness = 0.1;
             (mesh.material as THREE.MeshStandardMaterial).needsUpdate = true;
          }
        }
      }
    });
    
    return cloned;
  }, [originalScene, scale]);

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
