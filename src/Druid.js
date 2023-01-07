/* eslint-disable react/no-unknown-property */
import { useAnimations, useGLTF } from '@react-three/drei';
import React, { useEffect, useRef } from 'react';

export default function Druid(props) {
  const { scene, animations } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/druid/model.gltf'
  );
//   console.log(animations);
  const druidRef = useRef();
  const { actions, names } = useAnimations(animations, druidRef);
//   console.log(names);

  useEffect(() => {
    actions[names[0], names[1], names[2]].play();
  });

  return (
    <group
      position={[-2.5, -1, -1]}
      rotation={[0, 0.7, 0]}
      scale={1.4}
      ref={druidRef}
      dispose={null}
    >
      <primitive object={scene} {...props} />
    </group>
  );
}
