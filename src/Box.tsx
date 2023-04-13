import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Text } from "@react-three/drei";

import texture from "../src/components/images/profile.jpg";

export default function Box() {
  const colorMap = useLoader(TextureLoader, texture);
  const meshRef:any = useRef();

    useFrame(() => {
      meshRef.current.rotation.y += 0.01;
    });

  return (
    <>
      <mesh ref={meshRef} rotation={[90, 0, 20]}>
        <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
        <meshNormalMaterial attach="material" />
        <meshStandardMaterial map={colorMap} />
        <group>
          <Text
            position={[0, 1.5, 0]}
            fontSize={0.5}
            color={"white"}
            anchorX="center"
            anchorY="middle"
            rotation={[0, 0, 0]}
          >
            Top
          </Text>
          <Text
            position={[0, -1.5, 0]}
            fontSize={0.5}
            color={"white"}
            anchorX="center"
            anchorY="middle"
            rotation={[0, 0, Math.PI]}
          >
            Bottom
          </Text>
          <Text
            position={[1.5, 0, 0]}
            fontSize={0.5}
            color={"white"}
            anchorX="center"
            anchorY="middle"
            rotation={[0, 0, -Math.PI / 2]}
          >
            Right
          </Text>
          <Text
            position={[-1.5, 0, 0]}
            fontSize={0.5}
            color={"blue"}
            anchorX="center"
            anchorY="middle"
            rotation={[0, 0, Math.PI / 2]}
          >
            Left
          </Text>
          <Text
            position={[0, 0, 1.5]}
            fontSize={0.5}
            color={"green"}
            anchorX="center"
            anchorY="middle"
            rotation={[-Math.PI / 2, 0, 0]}
          >
            Front
          </Text>
          <Text
            position={[0, 0, -1.5]}
            fontSize={0.5}
            color={"red"}
            anchorX="center"
            anchorY="middle"
            rotation={[Math.PI / 2, 0, 0]}
          >
            Back
          </Text>
        </group>
      </mesh>
    </>
  );
}
