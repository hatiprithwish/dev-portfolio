import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { useScroll } from 'framer-motion';

export function Scene() {
  const meshRef = useRef<Mesh>(null);
  const { scrollYProgress } = useScroll();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.2;
      
      // Modify position based on scroll
      const scrollValue = scrollYProgress.get();
      meshRef.current.position.y = (1 - scrollValue) * 2;
      meshRef.current.scale.setScalar(1 + scrollValue * 0.5);
    }
  });

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#8B5CF6"
        wireframe
        transparent
        opacity={0.5}
      />
    </mesh>
  );
}