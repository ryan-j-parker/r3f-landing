/* eslint-disable react/no-unknown-property */
import {
  Decal,
  GradientTexture,
  KeyboardControls,
  Loader,
  OrbitControls,
  Stars,
  useTexture,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Debug, Physics, RigidBody } from '@react-three/rapier';
import React, { Suspense } from 'react';
import { DoubleSide } from 'three';
import Player from './Player';
import Torus from './Torus';
export default function MainEvent() {

  return (
    <>
      <Suspense fallback={<Loader />}>
        <div className="enter-btn">
          <a href="/">
            <button>Go back home</button>
          </a>
        </div>
        <Canvas
          shadows
          camera={{
            fov: 45,
            near: 0.1,
            far: 500,
            position: [4, 2, 6],
          }}
        >
          {/* <RecoilRoot> */}
          {/* <Lasers /> */}
          {/* <LaserController /> */}
          {/* </RecoilRoot> */}
          <Physics gravity={[0, -9.81, 0]}>
            {/* <KeyboardControls> */}
            <Debug />
            <Player />
            <Torus />
            {/* </KeyboardControls> */}
            <RigidBody type="fixed">
              <mesh>
                <boxGeometry args={[5, 0.5, 5]} attach="geometry" />
                <meshBasicMaterial attach="material" toneMapped={false}>
                  <GradientTexture
                    stops={[0, 1]} // As many stops as you want
                    colors={['aquamarine', 'hotpink']} // Colors need to match the number of stops
                    size={1024} // Size is optional, default = 1024
                    side={DoubleSide}
                  />
                </meshBasicMaterial>
              </mesh>
            </RigidBody>
          </Physics>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={0.75} />
          <OrbitControls />
          <ambientLight />
        </Canvas>
      </Suspense>
    </>
  );
}
