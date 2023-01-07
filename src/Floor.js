/* eslint-disable react/no-unknown-property */
import React, { useLayoutEffect } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { DoubleSide } from 'three';

export const Floor = ({ normalMap, roughnessMap, diffusionMap }) => {
  //   const { scene, nodes, materials } = useGLTF('/metal-plate/metal_plate_2k.gltf');

  const props = useTexture({
    diffusionMap: '/metal-plate/textures/metal_plate_diff_2k.jpg',
    normalMap: '/metal-plate/textures/metal_plate_nor_gl_2k.jpg',
    roughnessMap: '/metal-plate/textures/metal_plate_rough_2k.jpg',
    aoMap: '/metal-plate/textures/metal_plate_ao_2k.jpg',
    speculativeMap: '/metal-plate/textures/metal_plate_spec_2k.jpg',
    displacementMap: '/metal-plate/textures/metal_plate_disp_2k.png',
    bumpMap: '/metal-plate/textures/metal_plate_bump_2k.jpg',
  });

  return (
    <mesh castShadow receiveShadow position={[0, -0.5, 0]}>
      <meshStandardMaterial {...props} metalness={0.9} side={DoubleSide} displacementScale={0} />
      <boxGeometry args={[5, 0.5, 5]} />
    </mesh>
    //   <primitive object={scene} />
  );
};
