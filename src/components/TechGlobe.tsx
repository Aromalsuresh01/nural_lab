import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import { TECH_ICONS } from '../data';

function TechIcon({ position, url, name }: { position: [number, number, number], url: string, name: string }) {
  const [hovered, setHovered] = useState(false);
  const texture = useLoader(THREE.TextureLoader, url);

  return (
    <group position={position}>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <planeGeometry args={[0.5, 0.5]} />
        <meshBasicMaterial 
          map={texture} 
          transparent={true} 
          alphaTest={0.5}
          color={hovered ? '#00E639' : '#ffffff'} 
        />
      </mesh>
      {hovered && (
        <Html distanceFactor={10}>
          <div className="bg-[#0b1326] border border-tertiary px-2 py-1 text-[10px] font-mono text-tertiary whitespace-nowrap">
            {name}
          </div>
        </Html>
      )}
    </group>
  );
}

function Globe() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Use a subset of important techs for the globe to keep it clean
  const techEntries = useMemo(() => Object.entries(TECH_ICONS).slice(0, 24), []);
  
  const points = useMemo(() => {
    const p = [];
    const count = techEntries.length;
    const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle in radians

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2; // y from 1 to -1
      const radius = Math.sqrt(1 - y * y); // radius at y

      const theta = phi * i; // golden angle increment

      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;

      p.push([x * 3, y * 3, z * 3] as [number, number, number]);
    }
    return p;
  }, [techEntries]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.x += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {techEntries.map(([name, url], i) => (
        <TechIcon key={name} position={points[i]} url={url} name={name} />
      ))}
      
      {/* Decorative wireframe sphere */}
      <mesh>
        <sphereGeometry args={[3, 16, 16]} />
        <meshBasicMaterial color="#b1c7f2" wireframe transparent opacity={0.05} />
      </mesh>
    </group>
  );
}

export default function TechGlobe() {
  return (
    <div className="w-full h-[500px] relative mt-12 mb-20">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]"></div>
      </div>
      
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Globe />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center pointer-events-none">
        <p className="font-mono text-[10px] text-outline tracking-[0.3em] uppercase">
          Neural_Stack_Visualization // Interactive_3D
        </p>
      </div>
    </div>
  );
}
