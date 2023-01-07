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
// import { shipPositionState, enemyPositionState, laserPositionState, scoreState } from './gameState';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';

// const LASER_RANGE = 100;
// const LASER_Z_VELOCITY = 1;

// function Lasers() {
//   const lasers = useRecoilValue(laserPositionState);
//   return (
//     <group>
//       {lasers.map((laser) => (
//         <mesh position={[laser.x, laser.y, laser.z]} key={`${laser.id}`}>
//           <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
//           <meshStandardMaterial attach="material" emissive="white" wireframe />
//         </mesh>
//       ))}
//     </group>
//   );
// }

// function LaserController() {
//   const shipPosition = useRecoilValue(shipPositionState);
//   const [lasers, setLasers] = useRecoilState(laserPositionState);
//   return (
//     <mesh
//       position={[0, 0, -8]}
//       onClick={() =>
//         setLasers([
//           ...lasers,
//           {
//             id: Math.random(), // This needs to be unique.. Random isn't perfect but it works. Could use a uuid here.
//             x: 0,
//             y: 0,
//             z: 0,
//             velocity: [shipPosition.rotation.x * 6, shipPosition.rotation.y * 5],
//           },
//         ])
//       }
//     >
//       <planeBufferGeometry attach="geometry" args={[100, 100]} />
//       <meshStandardMaterial attach="material" color="orange" emissive="#ff0860" visible={false} />
//     </mesh>
//   );
// }

// function distance(p1, p2) {
//   const a = p2.x - p1.x;
//   const b = p2.y - p1.y;
//   const c = p2.z - p1.z;

//   return Math.sqrt(a * a + b * b + c * c);
// }

export default function MainEvent() {
  // const logoImg = useTexture('/r-fav.png');

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
