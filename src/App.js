import { OrbitControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import './App.css';
import CARS from './cars';

export default function App() {
  const [currentCar, setCurrentCar] = useState(0);

  function goLeft() {
    if (currentCar !== 0) {
      const newCar = currentCar - 1;
      console.log(newCar);
      setCurrentCar(newCar);
    }
  }

  function goRigt() {
    if (currentCar !== CARS.length - 1) {
      const newCar = currentCar + 1;
      console.log(newCar);
      setCurrentCar(newCar);
    }
  }

  return (
    <div className="App">
      <div className="left">
        <Canvas>
          <axesHelper scale={100} />
          <Lights />
          <Suspense fallback={null}>
            <Model currentCar={currentCar} />
            <OrbitControls />
            {/* <Environment preset="sunset" background /> */}
          </Suspense>
        </Canvas>
      </div>
      <div className="right">
        <span onClick={goLeft}>LEFT</span>
        <span onClick={goRigt}>RIGHT</span>
        <h1>{CARS[currentCar].name}</h1>
      </div>
    </div>
  );
}

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[500, 0, 0]} intensity={1} />
      <directionalLight position={[-500, 0, 0]} intensity={1} />
      <directionalLight position={[0, 500, 0]} intensity={1} />
      <directionalLight position={[0, 0, 500]} intensity={1} />
      <directionalLight position={[0, 0, -500]} intensity={1} />
    </>
  );
};

const Model = ({ currentCar }) => {
  const gltf = useLoader(GLTFLoader, `./${CARS[currentCar].key}/scene.gltf`);

  return (
    <>
      <primitive
        object={gltf.scene}
        scale={CARS[currentCar].scale}
        position={CARS[currentCar].position}
        rotation={[0.18, 0.67, 0]}
      />
    </>
  );
};
