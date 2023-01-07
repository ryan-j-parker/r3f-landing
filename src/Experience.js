/* eslint-disable react/no-unknown-property */
import {
  Float,
  Gltf,
  GradientTexture,
  MeshReflectorMaterial,
  OrbitControls,
  PresentationControls,
  Sparkles,
  Stars,
  Text,
  Text3D,
  useAnimations,
  useGLTF,
} from '@react-three/drei';
import { ConvexHullCollider, Debug, Physics, RigidBody } from '@react-three/rapier';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { AnimationMixer, DoubleSide } from 'three';
import Astronaut from './Astronaut';
import { Floor } from './Floor';
import Barn from './Barn';
import { Canvas, useFrame } from '@react-three/fiber';
import Druid from './Druid';

export default function Experience() {
  const boxGeo = new THREE.BoxGeometry(1, 1, 1);
  const astronaut = useGLTF('/astronaut.glb');
  const astronautRef = useRef();
  const textRef = useRef();

  const computer = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf'
  );
  const crt = useGLTF('/CRT/Television_01_1k.gltf');
  // const { scene, animations } = useGLTF('/Stag.gltf');
  const stag = useGLTF('/Stag.gltf');
  const stagRef = useRef();
  const stagMixer = new AnimationMixer(stag.scene);
  // useFrame(() => {
  //   const stagAction = stagMixer.clipAction(stag.animations[0]);
  //   stagAction.play();
  //   stagMixer.update(0.01);
  // });

  // const { ref, mixer, names, actions, clips } = useAnimations(animations);
  // useEffect(() => {
  //   actions?.Walk.play();
  // });

  return (
    <>
      <div className="enter-btn">
        <a href="./event">
          <button>Try to make a basket</button>
        </a>
      </div>
      <div className="enter-btn" id="ship-btn">
        <a href="./ship">
          <button>Shoot shapes at shapes</button>
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
        {/* <PresentationControls> */}
        <OrbitControls />
        <ambientLight />
        <spotLight position={[10, 10, 10]} penumbra={1} castShadow />
        <Physics gravity={[0, -9.81, 0]}>
          <RigidBody type="fixed" colliders="cuboid" position={[0, -2, 0]} gravityScale={1}>
            <mesh>
              <meshBasicMaterial />
              <boxGeometry args={[20, 0.1, 20]} />
            </mesh>
          </RigidBody>
          {/* <Float> */}
          <RigidBody>
            <primitive object={computer.scene} />
          </RigidBody>
          {/* </Float> */}
          {/* <Float> */}
          <RigidBody
            colliders="hull"
          >
            <Druid position={[-1.75, -1, -1]} />
          </RigidBody>
          {/* </Float> */}
          {/* <Float position={[-2, 2, 0]} rotation={[0, -6, 0]} scale={4.5}> */}
          <RigidBody position={[-2, 2, 0]} rotation={[0, -6, 0]} scale={4.5}>
            <primitive object={crt.scene} />
            <mesh position={[-0.067, 0.257, 0.193]} scale={1}>
              <planeGeometry args={[0.41, 0.31]} />
              <MeshReflectorMaterial resolution={512} flipX={true} mirror={0.9} side={DoubleSide} />
            </mesh>
          </RigidBody>
          {/* </Float> */}
          <Debug />
          {/* Text */}
          <group ref={textRef}>
            <Float floatIntensity={0.6} rotationIntensity={0.5} floatSpeed={0.5}>
              <Text
                font="./Teko-Regular.woff"
                // font="./Teko-Regular.json"
                scale={0.75}
                size={10}
                textAlign="left"
                maxWidth={0.65}
                lineHeight={0.75}
                height={5}
                castShadow
                position={[1, 1, 3]}
                rotation={[0, 0.95, 0]}
                color="#fff33a"
              >
                <meshBasicMaterial toneMapped={false} side={DoubleSide}>
                  <GradientTexture
                    stops={[0, 1]} // As many stops as you want
                    colors={['aquamarine', 'hotpink']} // Colors need to match the number of stops
                    size={1024} // Size is optional, default = 1024
                    side={DoubleSide}
                  />
                </meshBasicMaterial>
                adrift in space
              </Text>
            </Float>
          </group>
          <RigidBody>
            <Astronaut position={[1.5, 0.35, 1.8]} rotation={[0, -4.6, 0]} scale={1.6} />
          </RigidBody>
          {/* <Barn /> */}
        </Physics>
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        {/* </PresentationControls> */}
      </Canvas>
    </>
  );
}
