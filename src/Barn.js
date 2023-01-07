/* eslint-disable react/no-unknown-property */
import { Float, useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import React from 'react';

export default function Barn() {
  const barn = useGLTF('/old_wooden_barn.glb');

  return (
    <Float>
      <RigidBody position={[0, 0, 0]} gravityScale={0}>
        <mesh>
          <primitive object={barn.scene} />
        </mesh>
      </RigidBody>
    </Float>
  );
}
