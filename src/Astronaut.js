/* eslint-disable react/no-unknown-property */
import { Clone, Float, useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import React, { useEffect, useRef } from 'react';

export default function Astronaut() {
  const astronautRef = useRef();
  const astronaut = useGLTF('/astronaut.glb');

  const jump = () => {
    const mass = astronautRef.current.mass();
    astronautRef.current.applyImpulse({ x: 0, y: 5 * mass, z: 0 });
    astronautRef.current.applyTorqueImpulse({ x: 0, y: 0, z: Math.random() - 0.5 });
    // console.log('jump is registering');
  };

  return (
    <>
      <RigidBody
        colliders={false}
        // type="kinematicPosition"
        ref={astronautRef}
        position={[1.5, 0.35, 1.2]}
        mass={2}
        // rotation={[0, -4.6, 0]}
        gravityScale={1}
        friction={0.7}
        // scale={1.6}
      >
        <mesh castShadow receiveShadow onClick={jump}>
          <primitive object={astronaut.scene} />
        </mesh>
      </RigidBody>
    </>
  );
}
