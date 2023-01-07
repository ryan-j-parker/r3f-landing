import { atom } from 'recoil';

export const shipPositionState = atom({
  key: 'shipPosition', // unique ID (with respect to other atoms/selectors)
  default: { position: {}, rotation: {} }, // default value (aka initial value)
});

export const enemyPositionState = atom({
  key: 'enemyPosition', // unique ID (with respect to other atoms/selectors)
  default: [
    { x: -10, y: 10, z: -80 },
    { x: 20, y: 20, z: -100 },
    { x: 32, y: 5, z: -120 },
    { x: -4, y: 8, z: -92 },
    { x: -3, y: 13, z: -100 },
    { x: 19, y: 6, z: -192 },
    { x: 37, y: 42, z: -120 },
    { x: 10, y: 3, z: -60 },
    { x: 19, y: 6, z: -55 },
    { x: 6, y: 19, z: -71 },
    { x: -13, y: 13, z: -190 },
    { x: -7, y: 27, z: -210 },
  ], // default value (aka initial value)
});

export const laserPositionState = atom({
  key: 'laserPositions', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export const scoreState = atom({
  key: 'score', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});
