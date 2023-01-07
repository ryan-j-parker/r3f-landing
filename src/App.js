/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.js';
import './App.css';
import { OrbitControls, PresentationControls, Sparkles } from '@react-three/drei';
import { Route, Routes } from 'react-router-dom';
import MainEvent from './MainEvent.js';
import ShipGame from './ShipGame.js';

function App() {
  return (
    <>
      <Routes>
        <Route path="/ship" element={<ShipGame />} />
        <Route path="/event" element={<MainEvent />} />
        <Route path="/" element={<Experience />} />
      </Routes>
    </>
  );
}

export default App;
