/* eslint-disable react/no-unknown-property */
import { useTexture } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import React from 'react';

export default function Torus() {
  const redMat = useTexture('/shiny-red-matcap.png');

  return (
    <>
      <RigidBody
        colliders="trimesh"
        position={[0, 0.5, -11]}
        type="fixed"
        friction={1}
        restitution={0.1}
        gravityScale={0}
        rotation={[5.6, 0, 0]}
      >
        <mesh>
          <torusGeometry args={[1, 0.5, 16, 100]} attach="geometry" />
          <meshMatcapMaterial
            roughness={0.25}
            metalness={0.8}
            attach="material"
            toneMapped={false}
            matcap={redMat}
          />
        </mesh>
      </RigidBody>
    </>
  );
}
