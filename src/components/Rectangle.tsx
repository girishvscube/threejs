import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

export default function Rectangle() {
  const meshRef:any = useRef();

  useFrame(() => {
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef} rotation={[90, 0, 20]}>
      <planeBufferGeometry attach="geometry" args={[5, 3]} />
      <meshStandardMaterial attach="material" color="blue" />
    </mesh>
  );
}
