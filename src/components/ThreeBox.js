'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function Box({ color = "#511010", emissive = "#511010", size = 1.5 }) {
  const meshRef = useRef();
  // Random initial values for motion
  const randomSpeedX = 0.002 + Math.random() * 0.008;
  const randomSpeedY = 0.002 + Math.random() * 0.008;
  const floatSpeed = 0.2 + Math.random() * 0.2;
  const floatAmount = 0.5 + Math.random() * 1.5;
  const initialX = (Math.random() - 0.5) * 10;
  const initialY = (Math.random() - 0.5) * 10;

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.rotation.x += randomSpeedX;
      meshRef.current.rotation.y += randomSpeedY;
      meshRef.current.position.x = initialX + Math.sin(time * floatSpeed) * floatAmount * 3;
      meshRef.current.position.y = initialY + Math.cos(time * floatSpeed) * floatAmount * 3;
    }
  });

  return (
    <mesh ref={meshRef} position={[initialX, initialY, 0]}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial 
        color={color}
        emissive={emissive}
        emissiveIntensity={0.9}
        metalness={0.9}
        roughness={0.9}
      />
    </mesh>
  );
}

export default function ThreeBox() {
  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -10,
      }}
      camera={{ position: [0, 0, 5], fov: 70 }}
    >
      <ambientLight intensity={0.9} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Box />
      {/* <Box color="#a84232" emissive="#a84232" size={1.5} /> */}
      {/* <Box color="#50a657" emissive="#50a657" size={1.5} /> */}
      <Box color="#140e63" emissive="#140e63" size={1.5} />
      {/* <Box color="#e34a1b" emissive="#e34a1b" size={1.5} /> */}
      {/* <Box color="#c22b85" emissive="#c22b85" size={1.5} /> */}
      {/* <Box color="#5085cc" emissive="#5085cc" size={1.5} /> */}
      {/* <Box color="#c22b85" emissive="#042d33" size={1.5} /> */}
      {/* <Box color="#c22b85" emissive="#381e0b" size={1.5} /> */}
      <Box color="#c22b85" emissive="#2f0b38" size={1.5} />
      <Box color="#c22b85" emissive="#45062b" size={1.5} />
    </Canvas>
  );
}
