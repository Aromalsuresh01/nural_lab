import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleGroup() {
  const ref = useRef<THREE.Points>(null);

  // Generate 2500 random points in a sphere
  const [positions, floatSpeeds] = useMemo(() => {
    const count = 2500;
    const positions = new Float32Array(count * 3);
    const floatSpeeds = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
        // Random point on a sphere surface for a neat embedding-like look
        const r = 15 + Math.random() * 10;
        const theta = 2 * Math.PI * Math.random();
        const phi = Math.acos(2 * Math.random() - 1);
        
        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        floatSpeeds[i] = Math.random() * 0.5 + 0.1;
    }
    return [positions, floatSpeeds];
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    
    // Slow rotation
    ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    ref.current.rotation.x = state.clock.elapsedTime * 0.02;

    // Subtle parallax effect based on mouse
    const targetX = (state.pointer.x * Math.PI) / 10;
    const targetY = (state.pointer.y * Math.PI) / 10;
    
    ref.current.rotation.y += targetX * 0.05;
    ref.current.rotation.x -= targetY * 0.05;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00E639"
          size={0.08}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function LatentSpace() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#0b1326]">
      <div className="absolute inset-0 bg-hero-gradient opacity-60 mix-blend-multiply"></div>
      <Canvas camera={{ position: [0, 0, 30], fov: 60 }}>
        <fog attach="fog" args={['#0b1326', 20, 45]} />
        <ParticleGroup />
      </Canvas>
      {/* Dark vignette overlay to keep text readable */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0b1326_100%)] opacity-80 mix-blend-multiply"></div>
    </div>
  );
}
